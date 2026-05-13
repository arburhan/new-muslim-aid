import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(
        new URL('/bn/auth/login', request.url)
      );
    }

    await connectDB();

    // Find user by referralCode (used as unsubscribe token)
    // We use referralCode as the unsubscribe identifier for simplicity
    const user = await User.findOne({ referralCode: token });

    if (!user) {
      return NextResponse.redirect(
        new URL('/bn/unsubscribe?status=invalid', request.url)
      );
    }

    user.isSubscribed = false;
    await user.save();

    return NextResponse.redirect(
      new URL('/bn/unsubscribe?status=success', request.url)
    );
  } catch (error) {
    console.error('❌ Unsubscribe error:', error);
    return NextResponse.redirect(
      new URL('/bn/unsubscribe?status=error', request.url)
    );
  }
}
