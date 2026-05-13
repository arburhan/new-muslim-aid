'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {status === 'success' ? (
          <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-3">আনসাবস্ক্রাইব সফল</h1>
            <p className="text-gray-500 mb-6">
              আপনি সফলভাবে আনসাবস্ক্রাইব করেছেন। আর কোনো মাসিক নোটিফিকেশন ইমেইল পাবেন না।
            </p>
            <p className="text-gray-400 text-sm mb-6">
              যদি পরবর্তীতে আবার সাবস্ক্রাইব করতে চান, আপনার ড্যাশবোর্ড থেকে করতে পারবেন।
            </p>
            <Link
              href="/bn"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              মূল সাইটে যান
            </Link>
          </div>
        ) : status === 'invalid' ? (
          <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❌</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-3">অবৈধ লিঙ্ক</h1>
            <p className="text-gray-500 mb-6">এই আনসাবস্ক্রাইব লিঙ্কটি বৈধ নয়।</p>
            <Link href="/bn" className="text-green-600 hover:text-green-700 font-medium">
              মূল সাইটে যান
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 mb-3">কিছু সমস্যা হয়েছে</h1>
            <p className="text-gray-500 mb-6">আবার চেষ্টা করুন বা আমাদের সাথে যোগাযোগ করুন।</p>
            <Link href="/bn" className="text-green-600 hover:text-green-700 font-medium">
              মূল সাইটে যান
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense>
      <UnsubscribeContent />
    </Suspense>
  );
}
