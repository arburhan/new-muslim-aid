/**
 * Email Utility for sending donation invoices
 * Uses Nodemailer with Gmail SMTP (free)
 */

import nodemailer from 'nodemailer';

function getTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false, // true for 465, false for 587
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });
}

interface InvoiceParams {
    donorName: string;
    donorEmail: string;
    amount: string;
    transactionId: string;
    transactionDate: string;
    paymentMethod: string;
}

/**
 * Send a donation invoice email to the donor
 */
export async function sendDonationInvoice(params: InvoiceParams): Promise<boolean> {
    try {
        const transporter = getTransporter();

        const fromName = process.env.SMTP_FROM_NAME || 'NewMuslim Aid Foundation';
        const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

        const htmlContent = generateInvoiceHTML(params);

        await transporter.sendMail({
            from: `"${fromName}" <${fromEmail}>`,
            to: params.donorEmail,
            subject: `দানের রসিদ - NewMuslim Aid Foundation | Transaction: ${params.transactionId}`,
            html: htmlContent,
        });

        console.log(`✅ Invoice email sent to ${params.donorEmail} for transaction ${params.transactionId}`);
        return true;
    } catch (error) {
        console.error('❌ Failed to send invoice email:', error);
        return false;
    }
}

function generateInvoiceHTML(params: InvoiceParams): string {
    const formattedAmount = new Intl.NumberFormat('bn-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0,
    }).format(parseFloat(params.amount));

    return `
<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1B4332 0%,#2D5A40 50%,#006A4E 100%);padding:40px 40px 30px;text-align:center;">
              <h1 style="color:#FFD700;font-size:28px;margin:0 0 8px;font-weight:800;">
                ☪ NewMuslim Aid Foundation
              </h1>
              <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:0;">
                বাংলাদেশে নওমুসলিমদের সহায়তা
              </p>
            </td>
          </tr>

          <!-- Success Badge -->
          <tr>
            <td style="padding:30px 40px 0;text-align:center;">
              <div style="display:inline-block;background-color:#ecfdf5;border:2px solid #10b981;border-radius:50px;padding:12px 30px;">
                <span style="color:#059669;font-size:18px;font-weight:700;">✓ দান সফল হয়েছে!</span>
              </div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:24px 40px 0;">
              <p style="color:#374151;font-size:16px;line-height:1.6;margin:0;">
                প্রিয় <strong>${params.donorName}</strong>,
              </p>
              <p style="color:#6b7280;font-size:15px;line-height:1.6;margin:8px 0 0;">
                আপনার দানের জন্য আল্লাহ আপনাকে উত্তম প্রতিদান দিন। আপনার লেনদেনের বিবরণ নিচে দেওয়া হলো:
              </p>
            </td>
          </tr>

          <!-- Invoice Details -->
          <tr>
            <td style="padding:24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
                    <table width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="color:#6b7280;font-size:14px;">ট্রানজেকশন আইডি</td>
                        <td style="color:#111827;font-size:14px;font-weight:700;text-align:right;">${params.transactionId}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
                    <table width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="color:#6b7280;font-size:14px;">তারিখ</td>
                        <td style="color:#111827;font-size:14px;font-weight:600;text-align:right;">${params.transactionDate}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
                    <table width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="color:#6b7280;font-size:14px;">পেমেন্ট মাধ্যম</td>
                        <td style="color:#111827;font-size:14px;font-weight:600;text-align:right;">${params.paymentMethod}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border-radius:0 0 12px 12px;">
                    <table width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="color:#059669;font-size:16px;font-weight:700;">দানের পরিমাণ</td>
                        <td style="color:#059669;font-size:22px;font-weight:800;text-align:right;">${formattedAmount}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Dua Section -->
          <tr>
            <td style="padding:0 40px 24px;">
              <div style="background:linear-gradient(135deg,#fefce8,#fffbeb);border:1px solid #fde68a;border-radius:12px;padding:20px 24px;text-align:center;">
                <p style="color:#92400e;font-size:18px;font-weight:600;margin:0 0 8px;font-style:italic;">
                  "যে ব্যক্তি আল্লাহর রাস্তায় দান করে, তার প্রতিদান সাতশত গুণ বৃদ্ধি পায়।"
                </p>
                <p style="color:#a16207;font-size:13px;margin:0;">— সূরা আল-বাকারা, ২:২৬১</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;">
              <p style="color:#9ca3af;font-size:13px;line-height:1.6;margin:0;text-align:center;">
                এই ইমেইলটি স্বয়ংক্রিয়ভাবে পাঠানো হয়েছে।<br>
                কোনো প্রশ্ন থাকলে যোগাযোগ করুন: <a href="tel:01861886162" style="color:#059669;text-decoration:none;">01861886162</a>
              </p>
              <p style="color:#d1d5db;font-size:12px;margin:16px 0 0;text-align:center;">
                © ${new Date().getFullYear()} NewMuslim Aid Foundation. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
