import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Donation from '@/models/Donation';
import { sendNudgeEmail } from '@/lib/email';

// This endpoint is called by a cron job monthly
// Protect with CRON_SECRET
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Get all subscribed users who have a referral code
    const users = await User.find({ isSubscribed: true });

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    let emailsSent = 0;

    for (const user of users) {
      // Check: did this user donate this month?
      const userDonatedThisMonth = await Donation.findOne({
        donorEmail: user.email,
        status: 'Successful',
        date: { $gte: startOfMonth, $lte: endOfMonth },
      });

      if (userDonatedThisMonth) {
        // User already donated this month — skip
        continue;
      }

      // Find the latest donation via this user's referral link this month
      const latestReferralDonation = await Donation.findOne({
        referralCode: user.referralCode,
        status: 'Successful',
        date: { $gte: startOfMonth, $lte: endOfMonth },
      }).sort({ date: -1 });

      if (!latestReferralDonation) {
        // No one donated via their link this month — skip nudge
        continue;
      }

      // Send nudge email
      await sendNudgeEmail({
        recipientName: user.name,
        recipientEmail: user.email,
        donorName: latestReferralDonation.donorName,
        donorAmount: latestReferralDonation.amount,
        unsubscribeToken: user.referralCode,
      });

      emailsSent++;
    }

    return NextResponse.json({
      success: true,
      emailsSent,
      message: `${emailsSent} টি nudge email পাঠানো হয়েছে`,
    });
  } catch (error) {
    console.error('❌ Monthly nudge cron error:', error);
    return NextResponse.json(
      { error: 'Cron job failed' },
      { status: 500 }
    );
  }
}
