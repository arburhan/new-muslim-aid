import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Donation from '@/models/Donation';
import SadaqahPageClient from './SadaqahPageClient';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string; referralCode: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { referralCode } = await params;

  await connectDB();
  const user = await User.findOne({ referralCode }).lean();
  if (!user) return { title: 'সাদকায়ে জারিয়া' };

  const typedUser = user as { name: string };

  return {
    title: `${typedUser.name}-এর সাদকায়ে জারিয়া লিঙ্ক | NewMuslim Aid Foundation`,
    description: `${typedUser.name} আপনাকে দান করতে আমন্ত্রণ জানিয়েছেন। নওমুসলিমদের সাহায্যে এগিয়ে আসুন।`,
  };
}

export default async function SadaqahPage({ params }: Props) {
  const { referralCode } = await params;

  await connectDB();

  const user = await User.findOne({ referralCode }).lean();
  if (!user) notFound();

  const typedUser = user as { name: string; referralCode: string };

  // Get top donors via this referral link (name + total amount only — public)
  const donors = await Donation.aggregate([
    { $match: { referralCode: referralCode, status: 'Successful' } },
    {
      $group: {
        _id: '$donorEmail',
        donorName: { $first: '$donorName' },
        totalAmount: { $sum: '$amount' },
      },
    },
    { $sort: { totalAmount: -1 } },
    { $limit: 50 },
  ]);

  const totalAmount = donors.reduce((s, d) => s + d.totalAmount, 0);

  return (
    <SadaqahPageClient
      referrerName={typedUser.name}
      referralCode={typedUser.referralCode}
      donors={donors}
      totalAmount={totalAmount}
    />
  );
}
