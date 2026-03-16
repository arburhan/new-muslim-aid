"use client";

import { useLocale } from "next-intl";
import {
    HeartIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";

interface DonationCardsProps {
    pageType?: "donation" | "zakat";
}

export default function DonationCards({
    pageType = "donation",
}: DonationCardsProps) {
    const locale = useLocale();
    const isZakat = pageType === "zakat";

    return (
        <div className="space-y-8">
            {/* Coming Soon Notice */}
            <div className="relative overflow-hidden bg-white rounded-3xl border-2 border-amber-200 shadow-xl">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400" />

                <div className="p-8 md:p-12 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <ClockIcon className="w-10 h-10 text-amber-600" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                        পেমেন্ট গেটওয়ে শীঘ্রই চালু হচ্ছে
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
                        {isZakat
                            ? "অনলাইনে নিরাপদে যাকাত প্রদানের জন্য আমরা নতুন পেমেন্ট গেটওয়ে সেটআপ করছি। খুব শীঘ্রই এই সেবা চালু হবে ইনশাআল্লাহ।"
                            : "অনলাইনে নিরাপদে দান করার জন্য আমরা নতুন পেমেন্ট গেটওয়ে সেটআপ করছি। খুব শীঘ্রই এই সেবা চালু হবে ইনশাআল্লাহ।"
                        }
                    </p>

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
                        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                        সেটআপ চলছে — শীঘ্রই আসছে
                    </div>

                    {/* Alternative Options */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-200 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <HeartIcon className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl font-bold text-gray-900">
                                {isZakat ? "এখনই যাকাত দিতে চান?" : "এখনই দান করতে চান?"}
                            </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            অনলাইন পেমেন্ট গেটওয়ে চালু হওয়ার আগে আপনি সরাসরি ব্যাংক ট্রান্সফার বা মোবাইল ব্যাংকিং-এর
                            মাধ্যমে {isZakat ? "যাকাত" : "দান"} করতে পারেন। নিচে ব্যাংক ডিটেইলস দেওয়া আছে।
                        </p>
                        <a
                            href="#bank-details"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <HeartIcon className="w-5 h-5" />
                            ব্যাংক ডিটেইলস দেখুন
                        </a>
                    </div>

                    {/* Contact */}
                    <p className="text-sm text-gray-400 mt-6">
                        যেকোনো প্রশ্নে যোগাযোগ করুন: <span className="font-semibold text-gray-500">01861-886162</span> (হটলাইন)
                    </p>
                </div>
            </div>
        </div>
    );
}
