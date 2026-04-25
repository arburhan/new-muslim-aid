'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeartIcon,
  UserGroupIcon,
  CurrencyBangladeshiIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface Donor {
  _id: string;
  donorName: string;
  totalAmount: number;
}

interface Props {
  referrerName: string;
  referralCode: string;
  donors: Donor[];
  totalAmount: number;
}

export default function SadaqahPageClient({ referrerName, referralCode, donors, totalAmount }: Props) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(donors.length / itemsPerPage);
  const paginated = donors.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const formatAmount = (amt: number) =>
    new Intl.NumberFormat('bn-BD', { style: 'currency', currency: 'BDT', minimumFractionDigits: 0 }).format(amt);

  const donationUrl = `/bn/donation?ref=${referralCode}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-emerald-800/90" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center text-white">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-2xl shadow-xl" />
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            সাদকায়ে জারিয়া 🌱
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            <span className="text-yellow-400">{referrerName}</span>
            <br />
            <span>আপনাকে দান করতে আমন্ত্রণ জানিয়েছেন</span>
          </h1>

          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            নওমুসলিমদের ইসলামিক শিক্ষা, পুনর্বাসন ও জীবন গঠনে আপনার একটি দান অনেক পরিবর্তন আনতে পারে।
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <UserGroupIcon className="w-6 h-6 text-green-300 mx-auto mb-2" />
              <p className="text-2xl font-black">{donors.length}</p>
              <p className="text-green-200 text-sm">জন দান করেছেন</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <CurrencyBangladeshiIcon className="w-6 h-6 text-green-300 mx-auto mb-2" />
              <p className="text-2xl font-black">{formatAmount(totalAmount)}</p>
              <p className="text-green-200 text-sm">মোট দান</p>
            </div>
          </div>

          <Link
            href={donationUrl}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-2xl font-black text-lg transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
          >
            <HeartIcon className="w-6 h-6" />
            এখনই দান করুন
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Donors Leaderboard */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        {donors.length > 0 ? (
          <div className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">🏆 দানকারীদের তালিকা</h2>
              <p className="text-sm text-gray-500 mt-1">সবচেয়ে বেশি দানকারী সবার উপরে</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">#</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">নাম</th>
                    <th className="text-right text-xs font-semibold text-gray-500 px-6 py-3">দানের পরিমাণ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {paginated.map((donor, idx) => {
                    const rank = (page - 1) * itemsPerPage + idx + 1;
                    return (
                      <tr key={donor._id} className="hover:bg-green-50/30 transition-colors">
                        <td className="px-6 py-4">
                          {rank === 1 ? (
                            <span className="text-lg">🥇</span>
                          ) : rank === 2 ? (
                            <span className="text-lg">🥈</span>
                          ) : rank === 3 ? (
                            <span className="text-lg">🥉</span>
                          ) : (
                            <span className="text-sm font-semibold text-gray-500">{rank}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{donor.donorName}</td>
                        <td className="px-6 py-4 text-right font-bold text-green-600">
                          {formatAmount(donor.totalAmount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">পেজ {page} / {totalPages}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium hover:bg-green-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    আগের পেজ
                  </button>
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium hover:bg-green-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    পরের পেজ
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-green-100">
            <p className="text-gray-500 text-lg font-medium mb-2">এখনো কেউ দান করেননি</p>
            <p className="text-gray-400 text-sm">প্রথম দানকারী হন!</p>
          </div>
        )}

        {/* CTA at bottom */}
        <div className="text-center mt-8">
          <Link
            href={donationUrl}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <HeartIcon className="w-6 h-6" />
            আমিও দান করতে চাই
          </Link>
        </div>
      </section>
    </div>
  );
}
