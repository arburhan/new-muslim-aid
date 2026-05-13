import { NextRequest, NextResponse } from 'next/server';
import { submitDonationRecord } from '@/lib/google-sheets';
import { sendDonationInvoice } from '@/lib/email';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';
import PendingDonation from '@/models/PendingDonation';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { invoice_number } = body;

        if (!invoice_number || typeof invoice_number !== 'string') {
            return NextResponse.json(
                { error: 'Invalid invoice number' },
                { status: 400 }
            );
        }

        // ========= SERVER-SIDE VERIFICATION =========
        // NEVER trust client-side callback status — always verify with Paystation

        const merchantId = process.env.PAYSTATION_MERCHANT_ID;
        const isSandbox = process.env.PAYSTATION_IS_SANDBOX === 'true';

        if (!merchantId) {
            return NextResponse.json(
                { error: 'Payment system configuration error' },
                { status: 500 }
            );
        }

        const baseUrl = isSandbox
            ? 'https://sandbox.paystation.com.bd'
            : 'https://api.paystation.com.bd';

        // Call Paystation Transaction Status API
        const verifyResponse = await fetch(`${baseUrl}/transaction-status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'merchantId': merchantId,
            },
            body: new URLSearchParams({
                merchantId: merchantId,
                invoice_number: invoice_number,
            }),
        });

        const responseText = await verifyResponse.text();

        let verifyResult;
        try {
            verifyResult = JSON.parse(responseText);
        } catch {
            console.error('❌ Failed to parse Paystation response as JSON:', responseText);
            return NextResponse.json({
                verified: false,
                status: 'error',
                message: 'Invalid response from payment gateway',
            });
        }

        if (verifyResult.status_code !== '200' || verifyResult.status !== 'success') {
            return NextResponse.json({
                verified: false,
                status: 'not_found',
                message: 'Transaction not found',
            });
        }

        const data = verifyResult.data;
        const trxStatus = data?.trx_status?.toLowerCase();

        // ========= PROCESS BASED ON VERIFIED STATUS =========

        if (trxStatus === 'successful' || trxStatus === 'success') {
            // Payment verified as successful by Paystation

            // PendingDonation থেকে donor info + referralCode বের করা
            // (Paystation transaction-status API তে opt_b/opt_c/opt_a return হয় না)
            let referralCode: string | undefined;
            let pendingDonorName = '';
            let pendingDonorEmail = '';
            let pendingPageType: 'donation' | 'zakat' = 'donation';
            try {
                await connectDB();
                const pending = await PendingDonation.findOne({
                    invoiceNumber: data.invoice_number,
                });
                if (pending) {
                    referralCode = pending.referralCode;
                    pendingDonorName = pending.donorName || '';
                    pendingDonorEmail = pending.donorEmail || '';
                    pendingPageType = pending.pageType === 'zakat' ? 'zakat' : 'donation';
                    // ব্যবহার শেষ — delete করা
                    await PendingDonation.deleteOne({ _id: pending._id });
                }
            } catch (pendingError) {
                console.error('⚠️ Failed to lookup pending donation:', pendingError);
            }

            const donationDetails = {
                donorName: pendingDonorName || data.opt_b || '',
                donorEmail: pendingDonorEmail || data.opt_c || '',
                donorPhone: data.payer_mobile_no || data.cust_phone || '',
                amount: data.payment_amount || '0',
                transactionId: data.trx_id || '',
                paymentMethod: data.payment_method || '',
                status: 'Successful',
                type: pendingPageType,
                referralCode: referralCode,
                date: data.order_date_time || new Date().toISOString(),
            };

            // ✅ MongoDB তে Donation সেভ করা (সবচেয়ে গুরুত্বপূর্ণ)
            try {
                await connectDB();
                // Duplicate transaction check
                const existing = await Donation.findOne({ transactionId: donationDetails.transactionId });
                if (!existing) {
                    await Donation.create({
                        donorName: donationDetails.donorName,
                        donorEmail: donationDetails.donorEmail,
                        donorPhone: donationDetails.donorPhone,
                        amount: parseFloat(donationDetails.amount),
                        transactionId: donationDetails.transactionId,
                        paymentMethod: donationDetails.paymentMethod,
                        status: donationDetails.status,
                        type: donationDetails.type,
                        referralCode: donationDetails.referralCode,
                        date: new Date(donationDetails.date),
                    });
                }
            } catch (mongoError) {
                console.error('⚠️ Failed to save donation to MongoDB:', mongoError);
                // Don't fail verification because of DB error
            }

            // Try to log to Google Sheets (non-blocking)
            try {
                await submitDonationRecord({
                    name: donationDetails.donorName,
                    email: donationDetails.donorEmail,
                    phone: donationDetails.donorPhone,
                    amount: donationDetails.amount,
                    transactionId: donationDetails.transactionId,
                    paymentMethod: donationDetails.paymentMethod,
                    status: donationDetails.status,
                    type: donationDetails.type,
                    submittedAt: donationDetails.date,
                });
            } catch (sheetError) {
                console.error('⚠️ Failed to log donation to Google Sheets:', sheetError);
                // Don't fail the verification because of sheet logging
            }

            // Try to send email invoice (non-blocking)
            try {
                if (donationDetails.donorEmail) {
                    await sendDonationInvoice({
                        donorName: donationDetails.donorName,
                        donorEmail: donationDetails.donorEmail,
                        amount: donationDetails.amount,
                        transactionId: donationDetails.transactionId,
                        transactionDate: donationDetails.date,
                        paymentMethod: donationDetails.paymentMethod,
                    });
                }
            } catch (emailError) {
                console.error('⚠️ Failed to send invoice email:', emailError);
            }

            return NextResponse.json({
                verified: true,
                status: 'success',
                data: {
                    invoice_number: data.invoice_number,
                    trx_id: data.trx_id || '',
                    payment_amount: data.payment_amount,
                    payment_method: data.payment_method || '',
                    order_date_time: data.order_date_time || '',
                    payer_mobile_no: data.payer_mobile_no || '',
                },
            });
        } else if (trxStatus === 'processing') {
            return NextResponse.json({
                verified: false,
                status: 'processing',
                message: 'Payment is still processing',
            });
        } else {
            // Failed, refund, or other
            return NextResponse.json({
                verified: false,
                status: trxStatus || 'failed',
                message: 'Payment was not successful',
            });
        }

    } catch (error) {
        console.error('❌ Payment verification error:', error);
        return NextResponse.json(
            { error: 'Verification failed' },
            { status: 500 }
        );
    }
}
