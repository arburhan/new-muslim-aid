'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('পাসওয়ার্ড দুটি মিলছে না');
      return;
    }

    if (password.length < 6) {
      setError('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('রেজিস্ট্রেশন সফল! ৩ সেকেন্ডে লগইন পেজে নিয়ে যাচ্ছি...');
        setTimeout(() => router.push('/bn/auth/login'), 3000);
      } else {
        setError(data.error || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে');
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
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={72} height={72} className="rounded-xl shadow-md" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-1">দাতার পোর্টাল</h1>
          <p className="text-gray-500 text-sm">NewMuslim Aid Foundation</p>
        </div>

        {/* Info banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-6">
          <p className="text-amber-800 text-sm font-medium text-center">
            🌟 শুধুমাত্র যারা কমপক্ষে ১০ টাকা দান করেছেন তারাই রেজিস্ট্রেশন করতে পারবেন
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">নতুন অ্যাকাউন্ট</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="register-name"
                  type="text"
                  placeholder="আপনার নাম"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(''); }}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="register-email"
                  type="email"
                  placeholder="দানের সময় দেওয়া ইমেইল"
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
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
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

              {/* Confirm Password */}
              <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="register-confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                  required
                />
              </div>

              {/* Error / Success */}
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

              {/* Submit */}
              <button
                id="register-submit"
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    রেজিস্ট্রেশন হচ্ছে...
                  </>
                ) : (
                  'রেজিস্ট্রেশন করুন'
                )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              আগেই অ্যাকাউন্ট আছে?{' '}
              <Link href="/bn/auth/login" className="text-green-600 hover:text-green-700 font-semibold">
                লগইন করুন
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-6">
          <Link href="/bn" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            ← মূল সাইটে ফিরে যান
          </Link>
        </p>
      </div>
    </div>
  );
}
