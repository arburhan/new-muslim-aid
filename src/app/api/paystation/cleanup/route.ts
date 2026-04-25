import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PendingDonation from '@/models/PendingDonation';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { invoice_number } = body;

        if (invoice_number) {
            await connectDB();
            await PendingDonation.deleteOne({ invoiceNumber: invoice_number });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
