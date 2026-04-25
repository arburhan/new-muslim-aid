'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import {
  HeartIcon,
  LinkIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserGroupIcon,
  CurrencyBangladeshiIcon,
} from '@heroicons/react/24/outline';

interface MyDonation {
  _id: string;
  donorName: string;
  amount: number;
  transactionId: string;
  paymentMethod: string;
  type: string;
  date: string;
}

interface ReferralDonor {
  _id: string;
  donorName: string;
  totalAmount: number;
  donationCount: number;
  lastDonation: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const locale = useLocale();
  const sessionLoading = status === 'loading';

  // My donations
  const [myDonations, setMyDonations] = useState<MyDonation[]>([]);
  const [myTotal, setMyTotal] = useState(0);
  const [myLoading, setMyLoading] = useState(true);

  // Referral donations
  const [referralDonors, setReferralDonors] = useState<ReferralDonor[]>([]);
  const [referralTotal, setReferralTotal] = useState(0);
  const [referralCount, setReferralCount] = useState(0);
  const [referralPage, setReferralPage] = useState(1);
  const [referralTotalPages, setReferralTotalPages] = useState(1);
  const [referralLoading, setReferralLoading] = useState(true);

  // Clipboard
  const [copied, setCopied] = useState(false);
  const [siteUrl, setSiteUrl] = useState('');

  useEffect(() => {
    setSiteUrl(window.location.origin);
  }, []);

  const referralCode = (session?.user as { referralCode?: string })?.referralCode;
  const referralLink = referralCode && siteUrl ? `${siteUrl}/${locale}/sadaqah/${referralCode}` : null;

  const fetchMyDonations = useCallback(async () => {
    setMyLoading(true);
    try {
      const res = await fetch('/api/dashboard/my-donations');
      const data = await res.json();
      setMyDonations(data.donations || []);
      setMyTotal(data.totalAmount || 0);
    } catch {
      /* empty */
    } finally {
      setMyLoading(false);
    }
  }, []);

  const fetchReferralDonations = useCallback(async (page: number) => {
    setReferralLoading(true);
    try {
      const res = await fetch(`/api/dashboard/referral-donations?page=${page}`);
      const data = await res.json();
      setReferralDonors(data.donations || []);
      setReferralTotal(data.totalAmount || 0);
      setReferralCount(data.count || 0);
      setReferralTotalPages(data.totalPages || 1);
    } catch {
      /* empty */
    } finally {
      setReferralLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMyDonations();
  }, [fetchMyDonations]);

  useEffect(() => {
    fetchReferralDonations(referralPage);
  }, [fetchReferralDonations, referralPage]);

  const copyLink = async () => {
    if (!referralLink) return;
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* empty */
    }
  };

  const formatAmount = (amt: number) =>
    new Intl.NumberFormat('bn-BD', { style: 'currency', currency: 'BDT', minimumFractionDigits: 0 }).format(amt);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">


        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium">আমার মোট দান</p>
            </div>
            <p className="text-2xl font-black text-gray-900">{formatAmount(myTotal)}</p>
            <p className="text-xs text-gray-400 mt-1">{myDonations.length} টি লেনদেন</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <UserGroupIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium">লিঙ্কে দান করেছেন</p>
            </div>
            <p className="text-2xl font-black text-gray-900">{referralCount} জন</p>
            <p className="text-xs text-gray-400 mt-1">আমার সাদকায়ে জারিয়া লিঙ্কে</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <CurrencyBangladeshiIcon className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-sm text-gray-500 font-medium">লিঙ্কের মোট দান</p>
            </div>
            <p className="text-2xl font-black text-gray-900">{formatAmount(referralTotal)}</p>
            <p className="text-xs text-gray-400 mt-1">সাদকায়ে জারিয়া লিঙ্কের মাধ্যমে</p>
          </div>
        </div>

        {/* Referral Link Card */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <LinkIcon className="w-6 h-6" />
            <h2 className="text-lg font-bold">আমার সাদকায়ে জারিয়া লিঙ্ক 🌱</h2>
          </div>
          <p className="text-green-100 text-sm mb-4">
            এই লিঙ্কটি শেয়ার করুন। যারা এই লিঙ্ক থেকে দান করবেন তাদের তথ্য আপনার ড্যাশবোর্ডে দেখতে পারবেন।
          </p>
          {sessionLoading ? (
            <div className="bg-white/20 rounded-xl px-4 py-3 text-sm animate-pulse">সেশন লোড হচ্ছে...</div>
          ) : referralLink ? (
            <div className="flex gap-3">
              <div className="flex-1 bg-white/20 rounded-xl px-4 py-3 text-sm font-mono break-all">
                {referralLink}
              </div>
              <button
                onClick={copyLink}
                className="bg-white text-green-700 px-4 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-green-50 transition-all shrink-0"
              >
                {copied ? (
                  <><CheckIcon className="w-4 h-4" />কপি!</>
                ) : (
                  <><ClipboardDocumentIcon className="w-4 h-4" />কপি</>
                )}
              </button>
            </div>
          ) : (
            <div className="bg-white/20 rounded-xl px-4 py-3 text-sm opacity-80">
              রেফারেল লিঙ্ক পাওয়া যাচ্ছে না। পেজটি রিফ্রেশ করুন অথবা আবার লগইন করুন।
            </div>
          )}
        </div>

        {/* Referral Donations Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">
              🏆 আমার লিঙ্কে যারা দান করেছেন
            </h2>
            <p className="text-sm text-gray-500 mt-1">সবচেয়ে বেশি দানকারী সবার উপরে</p>
          </div>

          {referralLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full" />
            </div>
          ) : referralDonors.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">এখনো কেউ আপনার লিঙ্কে দান করেননি</p>
              <p className="text-gray-400 text-sm mt-1">লিঙ্কটি শেয়ার করুন!</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">#</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">নাম</th>
                      <th className="text-right text-xs font-semibold text-gray-500 px-6 py-3">মোট দান</th>
                      <th className="text-right text-xs font-semibold text-gray-500 px-6 py-3">বার</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {referralDonors.map((donor, idx) => {
                      const rank = (referralPage - 1) * 10 + idx + 1;
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
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-800">{donor.donorName}</p>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="font-bold text-green-600">{formatAmount(donor.totalAmount)}</span>
                          </td>
                          <td className="px-6 py-4 text-right text-sm text-gray-500">
                            {donor.donationCount} বার
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {referralTotalPages > 1 && (
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    পেজ {referralPage} / {referralTotalPages}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setReferralPage(p => Math.max(1, p - 1))}
                      disabled={referralPage === 1}
                      className="p-2 rounded-xl border border-gray-200 hover:bg-green-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setReferralPage(p => Math.min(referralTotalPages, p + 1))}
                      disabled={referralPage === referralTotalPages}
                      className="p-2 rounded-xl border border-gray-200 hover:bg-green-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRightIcon className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* My Donation History */}
        <div className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">📋 আমার দানের ইতিহাস</h2>
          </div>

          {myLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full" />
            </div>
          ) : myDonations.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">কোনো দানের তথ্য পাওয়া যায়নি</p>
              <Link href={`/${locale}/donation`} className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium">
                এখনই দান করুন →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">তারিখ</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">ধরন</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-6 py-3">পদ্ধতি</th>
                    <th className="text-right text-xs font-semibold text-gray-500 px-6 py-3">পরিমাণ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {myDonations.map((d) => (
                    <tr key={d._id} className="hover:bg-green-50/30 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600">{formatDate(d.date)}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${d.type === 'zakat' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                          {d.type === 'zakat' ? 'যাকাত' : 'সাদাকাহ'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{d.paymentMethod || '—'}</td>
                      <td className="px-6 py-4 text-right font-bold text-green-600">{formatAmount(d.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
