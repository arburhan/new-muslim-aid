import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Donation from '@/models/Donation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'সঠিক নাম দিন (কমপক্ষে ২ অক্ষর)' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'সঠিক ইমেইল ঠিকানা দিন' },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: 'এই ইমেইলে আগেই অ্যাকাউন্ট আছে। লগইন করুন।' },
        { status: 409 }
      );
    }

    // Check if this email has made at least one successful donation >= 10 BDT
    const donation = await Donation.findOne({
      donorEmail: normalizedEmail,
      status: 'Successful',
      amount: { $gte: 10 },
    });

    if (!donation) {
      return NextResponse.json(
        {
          error:
            'শুধুমাত্র দাতারা রেজিস্ট্রেশন করতে পারবেন। অনুগ্রহ করে প্রথমে কমপক্ষে ১০ টাকা দান করুন।',
        },
        { status: 403 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Generate unique referral code (based on name + random)
    const baseCode = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u0980-\u09FF]/g, '')
      .slice(0, 8);
    const randomSuffix = crypto.randomBytes(3).toString('hex');
    const referralCode = `${baseCode}-${randomSuffix}`;

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      referralCode,
      isSubscribed: true,
    });

    return NextResponse.json({
      success: true,
      message: 'রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।',
      referralCode: user.referralCode,
    });
  } catch (error) {
    console.error('❌ Registration error:', error);
    return NextResponse.json(
      { error: 'সার্ভারে ত্রুটি হয়েছে। আবার চেষ্টা করুন।' },
      { status: 500 }
    );
  }
}
