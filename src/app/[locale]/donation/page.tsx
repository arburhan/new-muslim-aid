import { Suspense } from "react";
import BankDetails from "@/components/home/BankDetails";
import DonationCardsWrapper from "./DonationCardsWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "দান করুন | NewMuslim Aid Foundation",
    description:
        "নওমুসলিমদের জীবন পরিবর্তনে আপনার দান গুরুত্বপূর্ণ ভূমিকা রাখবে। নিরাপদে অনলাইনে দান করুন।",
    openGraph: {
        title: "দান করুন — নওমুসলিমদের পাশে দাঁড়ান | NewMuslim Aid Foundation",
        description:
            "আপনার দানে বদলে যাবে একটি জীবন। নওমুসলিমদের ইসলামিক শিক্ষা, পুনর্বাসন ও জীবন গঠনে নিরাপদে অনলাইনে দান করুন।",
        type: "website",
        locale: "bn_BD",
        url: "/bn/donation",
        siteName: "NewMuslim Aid Foundation",
        images: [
            {
                url: "/logo.png",
                width: 512,
                height: 512,
                alt: "NewMuslim Aid Foundation Logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "দান করুন — নওমুসলিমদের পাশে দাঁড়ান",
        description:
            "আপনার দানে বদলে যাবে একটি জীবন। নিরাপদে অনলাইনে দান করুন।",
        images: ["/logo.png"],
    },
};

export default function DonationPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-8">
                {/* Background decorations */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-4">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-semibold mb-5">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            নিরাপদ অনলাইন দান
                        </div>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight mb-2">
                            আপনার{" "}
                            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                দানে
                            </span>{" "}
                            বদলে যাবে একটি জীবন
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            নওমুসলিমদের ইসলামিক শিক্ষা, পুনর্বাসন ও জীবন গঠনে আপনার সাদাকাহ
                            গুরুত্বপূর্ণ ভূমিকা রাখবে ।
                        </p>
                    </div>
                </div>
            </section>

            {/* Donation Cards Section */}
            <section className="py-6 md:py-10">
                <div className="container-custom max-w-4xl">
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center py-20">
                                <div className="spinner w-8 h-8 text-green-600"></div>
                            </div>
                        }
                    >
                        <DonationCardsWrapper />
                    </Suspense>
                </div>
            </section>

            {/* Bank Details Section */}
            <section id="bank-details" className="py-10 md:py-16 bg-white/60 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            অথবা সরাসরি ব্যাংকে দান করুন
                        </h2>
                        <p className="text-gray-500">
                            আপনি চাইলে সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমেও দান করতে পারেন
                        </p>
                    </div>
                    <BankDetails />
                </div>
            </section>
        </div>
    );
}
