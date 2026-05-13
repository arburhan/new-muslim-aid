import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const donations = await Donation.find({
      donorEmail: session.user.email,
      status: 'Successful',
    })
      .sort({ date: -1 })
      .select('donorName amount transactionId paymentMethod type date')
      .lean();

    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

    return NextResponse.json({
      donations,
      totalAmount,
      count: donations.length,
    });
  } catch (error) {
    console.error('❌ My donations error:', error);
    return NextResponse.json(
      { error: 'সার্ভারে ত্রুটি হয়েছে' },
      { status: 500 }
    );
  }
}
