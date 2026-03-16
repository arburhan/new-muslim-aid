import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ফেরত নীতি | নিউমুসলিম এইড ফাউন্ডেশন",
    description: "নিউমুসলিম এইড ফাউন্ডেশনের দান ও অনুদানের ফেরত নীতিমালা।",
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Hero */}
            <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-teal-600 text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <span className="text-sm font-semibold tracking-wide">Refund Policy</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">ফেরত নীতি</h1>
                        <p className="text-lg md:text-xl text-green-200 leading-relaxed max-w-3xl mx-auto">
                            দান ও অনুদান সংক্রান্ত ফেরত নীতিমালা
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-12 md:py-16">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-10">

                        {/* 1 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">১</span>
                                ভূমিকা
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                নিউমুসলিম এইড ফাউন্ডেশন একটি সেবামূলক প্রতিষ্ঠান। আমাদের ওয়েবসাইটের মাধ্যমে গৃহীত সকল দান/অনুদান নওমুসলিম ও অসহায় মানুষদের কল্যাণে ব্যয় করা হয়। এই ফেরত নীতি দান/অনুদান সংক্রান্ত ফেরত প্রক্রিয়া বর্ণনা করে।
                            </p>
                        </div>

                        {/* 2 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">২</span>
                                দান/অনুদানের প্রকৃতি
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                আমাদের ওয়েবসাইটের মাধ্যমে গৃহীত সকল দান/অনুদান স্বেচ্ছামূলক। দাতা সম্পূর্ণ স্বেচ্ছায় এবং নিজ ইচ্ছায় দান প্রদান করেন। দানের অর্থ মূলত নিম্নলিখিত খাতে ব্যবহৃত হয়:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                                <li>নওমুসলিমদের দ্বীনি শিক্ষা ও পরিচর্যা</li>
                                <li>আশ্রয় প্রকল্প</li>
                                <li>জরুরি সহায়তা তহবিল</li>
                                <li>যাকাত তহবিল</li>
                                <li>সাধারণ তহবিল</li>
                            </ul>
                        </div>

                        {/* 3 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৩</span>
                                ফেরতযোগ্য ক্ষেত্রসমূহ
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                নিম্নলিখিত ক্ষেত্রে দানের অর্থ ফেরত দেওয়া হতে পারে:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                                <li>ভুলবশত দ্বৈত লেনদেন হলে (একই দান দুইবার কেটে নেওয়া হলে)</li>
                                <li>নির্ধারিত পরিমাণের চেয়ে বেশি অর্থ কেটে নেওয়া হলে</li>
                                <li>অননুমোদিত লেনদেন প্রমাণিত হলে</li>
                                <li>প্রযুক্তিগত ত্রুটির কারণে ভুল লেনদেন হলে</li>
                            </ul>
                        </div>

                        {/* 4 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৪</span>
                                ফেরত অযোগ্য ক্ষেত্রসমূহ
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                নিম্নলিখিত ক্ষেত্রে সাধারণত ফেরত দেওয়া হয় না:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                                <li>স্বেচ্ছায় প্রদত্ত দান যা ইতিমধ্যে নির্ধারিত খাতে ব্যবহৃত হয়েছে</li>
                                <li>দান প্রদানের ৩০ দিন পর ফেরতের আবেদন করা হলে</li>
                                <li>দাতা নিজে সঠিকভাবে লেনদেন সম্পন্ন করার পর মত পরিবর্তন করলে</li>
                            </ul>
                        </div>

                        {/* 5 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৫</span>
                                ফেরত আবেদন প্রক্রিয়া
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                ফেরতের জন্য আবেদন করতে নিম্নলিখিত পদক্ষেপ অনুসরণ করুন:
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">১</span>
                                    <p className="text-gray-700 text-lg">লেনদেনের ৩০ দিনের মধ্যে info@newmuslimaid.com ঠিকানায় ইমেইল পাঠান</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">২</span>
                                    <p className="text-gray-700 text-lg">ইমেইলে আপনার নাম, লেনদেনের রেফারেন্স নম্বর, পরিমাণ, তারিখ এবং ফেরতের কারণ উল্লেখ করুন</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">৩</span>
                                    <p className="text-gray-700 text-lg">আমাদের টিম আবেদন পর্যালোচনা করে ৭-১০ কার্যদিবসের মধ্যে জানাবে</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">৪</span>
                                    <p className="text-gray-700 text-lg">অনুমোদিত হলে মূল পেমেন্ট মাধ্যমে ৭-১৪ কার্যদিবসের মধ্যে ফেরত দেওয়া হবে</p>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৬</span>
                                ফেরতের সময়সীমা
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                ফেরত অনুমোদিত হলে পেমেন্ট গেটওয়ে ও ব্যাংকের প্রক্রিয়ার উপর নির্ভর করে ৭-১৪ কার্যদিবসের মধ্যে মূল পেমেন্ট মাধ্যমে (ব্যাংক অ্যাকাউন্ট, মোবাইল ব্যাংকিং ইত্যাদি) ফেরত প্রদান করা হবে।
                            </p>
                        </div>

                        {/* 7 */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৭</span>
                                বিশেষ বিবেচনা
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                বিশেষ পরিস্থিতিতে (যেমন: গুরুতর আর্থিক সংকট, চিকিৎসা খরচ ইত্যাদি) ফাউন্ডেশনের ব্যবস্থাপনা কমিটি আলাদাভাবে আবেদন বিবেচনা করতে পারে। এসব ক্ষেত্রে সরাসরি হটলাইনে যোগাযোগ করার অনুরোধ রইলো।
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-green-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৮</span>
                                যোগাযোগ
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                ফেরত সংক্রান্ত যেকোনো প্রশ্ন বা আবেদনের জন্য যোগাযোগ করুন:
                            </p>
                            <div className="space-y-2 text-gray-700 text-lg">
                                <p><strong>ইমেইল:</strong> info@newmuslimaid.com</p>
                                <p><strong>ফোন:</strong> 01861-886162 (হটলাইন)</p>
                                <p><strong>ওয়েবসাইট:</strong> www.newmuslimaid.com</p>
                            </div>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-500 text-sm">সর্বশেষ হালনাগাদ: মার্চ ২০২৬</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
