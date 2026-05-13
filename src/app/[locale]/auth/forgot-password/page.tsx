'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(data.message);
      } else {
        setError(data.error || 'কিছু একটা সমস্যা হয়েছে');
      }
    } catch {
      setError('সার্ভারে সংযোগ ত্রুটি। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={72} height={72} className="rounded-xl shadow-md" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-1">পাসওয়ার্ড ভুলে গেছেন?</h1>
          <p className="text-gray-500 text-sm">আমরা আপনার ইমেইলে রিসেট লিঙ্ক পাঠাব</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="forgot-email"
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                  ⚠️ {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
                  ✅ {success}
                </div>
              )}

              <button
                id="forgot-submit"
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    পাঠানো হচ্ছে...
                  </>
                ) : (
                  'রিসেট লিঙ্ক পাঠান'
                )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              <Link href="/bn/auth/login" className="text-green-600 hover:text-green-700 font-semibold">
                ← লগইন পেজে ফিরে যান
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
