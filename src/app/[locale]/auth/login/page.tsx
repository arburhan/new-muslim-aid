'use client';

import { useState, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

function LoginForm() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const callbackUrl = searchParams.get('callbackUrl') || `/${locale}/dashboard/user`;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        setLoading(false);
      } else {
        // Full page reload করে session নিশ্চিত করা — navbar + dashboard সবকিছু আপডেট হবে
        window.location.href = callbackUrl;
      }
    } catch {
      setError('সার্ভারে সংযোগ ত্রুটি। আবার চেষ্টা করুন।');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={72} height={72} className="rounded-xl shadow-md" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-1">দাতার পোর্টাল</h1>
          <p className="text-gray-500 text-sm">NewMuslim Aid Foundation</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
          {/* Top bar */}
          <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">লগইন করুন</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="login-email"
                  type="email"
                  placeholder="ইমেইল ঠিকানা"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="পাসওয়ার্ড"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link href={`/${locale}/auth/forgot-password`} className="text-sm text-green-600 hover:text-green-700 font-medium">
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                  ⚠️ {error}
                </div>
              )}

              {/* Submit */}
              <button
                id="login-submit"
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    লগইন হচ্ছে...
                  </>
                ) : (
                  'লগইন করুন'
                )}
              </button>
            </form>

            {/* Register link */}
            <p className="text-center text-sm text-gray-500 mt-6">
              অ্যাকাউন্ট নেই?{' '}
              <Link href={`/${locale}/auth/register`} className="text-green-600 hover:text-green-700 font-semibold">
                রেজিস্ট্রেশন করুন
              </Link>
            </p>

            <p className="text-center text-xs text-gray-400 mt-3">
              * শুধুমাত্র দাতারা রেজিস্ট্রেশন করতে পারবেন
            </p>
          </div>
        </div>

        {/* Back link */}
        <p className="text-center mt-6">
          <Link href={`/${locale}`} className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            ← মূল সাইটে ফিরে যান
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
