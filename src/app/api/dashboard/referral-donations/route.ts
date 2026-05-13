import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = 10;
    const skip = (page - 1) * limit;

    const referralCode = (session.user as { referralCode?: string }).referralCode;

    if (!referralCode) {
      return NextResponse.json({
        donations: [],
        totalAmount: 0,
        count: 0,
        totalPages: 0,
        page,
      });
    }

    await connectDB();

    // Aggregate: group by donorEmail, sum amounts, sort by total desc
    const aggregated = await Donation.aggregate([
      {
        $match: {
          referralCode: referralCode,
          status: 'Successful',
        },
      },
      {
        $group: {
          _id: '$donorEmail',
          donorName: { $first: '$donorName' },
          totalAmount: { $sum: '$amount' },
          donationCount: { $sum: 1 },
          lastDonation: { $max: '$date' },
        },
      },
      {
        $sort: { totalAmount: -1 }, // সবচেয়ে বেশি দানকারী উপরে
      },
    ]);

    const totalDonors = aggregated.length;
    const totalPages = Math.ceil(totalDonors / limit);

    // Overall total amount
    const totalAmount = aggregated.reduce((sum, d) => sum + d.totalAmount, 0);

    // Paginate
    const paginated = aggregated.slice(skip, skip + limit);

    return NextResponse.json({
      donations: paginated,
      totalAmount,
      count: totalDonors,
      totalPages,
      page,
    });
  } catch (error) {
    console.error('❌ Referral donations error:', error);
    return NextResponse.json(
      { error: 'সার্ভারে ত্রুটি হয়েছে' },
      { status: 500 }
    );
  }
}
