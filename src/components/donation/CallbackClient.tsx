"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
    CheckCircleIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    ArrowPathIcon,
    HeartIcon,
    HomeIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolid } from "@heroicons/react/24/solid";

interface VerifiedData {
    invoice_number: string;
    trx_id: string;
    payment_amount: string;
    payment_method: string;
    order_date_time: string;
    payer_mobile_no: string;
}

type PageStatus = "loading" | "success" | "failed" | "canceled" | "processing" | "error";

// Confetti colors
const CONFETTI_COLORS = [
    "#22c55e", "#10b981", "#059669", "#FFD700",
    "#f59e0b", "#14b8a6", "#06b6d4", "#84cc16",
];

// Pre-generate confetti positions (avoids random in render)
const CONFETTI_ITEMS = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${(i * 2.5) % 100}%`,
    delay: `${(i * 0.0375) % 1.5}s`,
    width: `${8 + (i % 5) * 2}px`,
    height: `${8 + ((i + 2) % 5) * 2}px`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    radius: i % 2 === 0 ? "50%" : "2px",
    rotation: `rotate(${(i * 9) % 360}deg)`,
}));

export default function CallbackClient() {
    const searchParams = useSearchParams();
    const [pageStatus, setPageStatus] = useState<PageStatus>("loading");
    const [verifiedData, setVerifiedData] = useState<VerifiedData | null>(null);
    const [countdown, setCountdown] = useState(5);
    const [showConfetti, setShowConfetti] = useState(false);

    const verifyTransaction = useCallback(async (invoiceNumber: string) => {
        try {
            const response = await fetch("/api/paystation/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ invoice_number: invoiceNumber }),
            });

            const result = await response.json();

            if (result.verified && result.status === "success") {
                setVerifiedData(result.data);
                setPageStatus("success");
                setTimeout(() => setShowConfetti(true), 300);
            } else if (result.status === "processing") {
                setPageStatus("processing");
            } else {
                setPageStatus("failed");
            }
        } catch {
            setPageStatus("error");
        }
    }, []);

    useEffect(() => {
        const status = searchParams.get("status");
        const invoiceNumber = searchParams.get("invoice_number");

        if (!invoiceNumber) {
            setPageStatus("error");
            return;
        }

        if (status === "Canceled") {
            setPageStatus("canceled");
            return;
        }

        // Always verify with server — never trust client-side status
        verifyTransaction(invoiceNumber);
    }, [searchParams, verifyTransaction]);

    // Countdown timer during loading state
    useEffect(() => {
        if (pageStatus !== "loading") return;
        if (countdown <= 0) return;

        const timer = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [pageStatus, countdown]);

    // Format amount in Bengali
    const formatAmount = (amount: string) => {
        const num = parseFloat(amount);
        if (isNaN(num)) return amount;
        return new Intl.NumberFormat("bn-BD").format(num);
    };

    // Format payment method name
    const formatMethod = (method: string) => {
        const methods: Record<string, string> = {
            bKash: "বিকাশ",
            bkash: "বিকাশ",
            Nagad: "নগদ",
            nagad: "নগদ",
            Rocket: "রকেট",
            rocket: "রকেট",
            Upay: "উপায়",
            upay: "উপায়",
            Mastercard: "মাস্টারকার্ড",
            Visa: "ভিসা কার্ড",
        };
        return methods[method] || method || "অনলাইন পেমেন্ট";
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-12">
            {/* Confetti effect for success */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    {CONFETTI_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="absolute"
                            style={{
                                left: item.left,
                                top: "-5%",
                                animationName: "confettiFall",
                                animationDuration: "3s",
                                animationTimingFunction: "ease-out",
                                animationFillMode: "forwards",
                                animationDelay: item.delay,
                                width: item.width,
                                height: item.height,
                                backgroundColor: item.color,
                                borderRadius: item.radius,
                                transform: item.rotation,
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="w-full max-w-lg">
                {/* Loading State */}
                {pageStatus === "loading" && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
                        <div className="relative w-24 h-24 mx-auto mb-6">
                            {/* Spinning circle */}
                            <svg className="animate-spin h-24 w-24 text-green-500" viewBox="0 0 24 24">
                                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                                <path className="opacity-80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10" />
                            </svg>
                            {/* Countdown number in center */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-black text-green-700 tabular-nums transition-all duration-300">
                                    {countdown > 0 ? countdown : "..."}
                                </span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">যাচাই করা হচ্ছে...</h2>
                        <p className="text-gray-500">আপনার পেমেন্ট ভেরিফাই করা হচ্ছে। অনুগ্রহ করে অপেক্ষা করুন।</p>
                        <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                                className="h-full bg-linear-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-linear"
                                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-2">আনুমানিক সময়: {countdown > 0 ? countdown : "<1"} সেকেন্ড</p>
                    </div>
                )}

                {/* ✅ SUCCESS STATE */}
                {pageStatus === "success" && verifiedData && (
                    <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-green-200">
                        <div className="h-2 bg-linear-to-r from-green-500 via-emerald-500 to-teal-500" />

                        {/* Success header */}
                        <div className="bg-linear-to-br from-green-50 to-emerald-50 px-8 pt-10 pb-8 text-center">
                            <div className="relative inline-block mb-5">
                                <div className="w-24 h-24 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200 animate-bounce">
                                    <CheckCircleSolid className="w-14 h-14 text-white" />
                                </div>
                                <div className="absolute inset-0 w-24 h-24 rounded-full bg-green-400 opacity-30 animate-ping" />
                            </div>

                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                                জাযাকাল্লাহু খাইরান! 🤲
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto">
                                আপনার দান সফলভাবে সম্পন্ন হয়েছে। আল্লাহ আপনাকে উত্তম প্রতিদান দিন।
                            </p>
                        </div>

                        {/* Amount highlight */}
                        <div className="px-8 -mt-1">
                            <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-center shadow-lg shadow-green-200/50">
                                <p className="text-green-100 text-sm font-medium mb-1">দানের পরিমাণ</p>
                                <p className="text-white text-4xl md:text-5xl font-black">
                                    ৳{formatAmount(verifiedData.payment_amount)}
                                </p>
                                <p className="text-green-200 text-sm mt-2 font-medium">
                                    {formatMethod(verifiedData.payment_method)} দ্বারা প্রদান
                                </p>
                            </div>
                        </div>

                        {/* Transaction Details */}
                        <div className="px-8 py-6">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                লেনদেনের বিবরণ
                            </h3>
                            <div className="space-y-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                                <DetailRow
                                    label="ট্রানজেকশন আইডি"
                                    value={verifiedData.trx_id || "—"}
                                    icon={<CheckCircleIcon className="w-4 h-4 text-green-500" />}
                                    highlight
                                />
                                <DetailRow
                                    label="ইনভয়েস নম্বর"
                                    value={verifiedData.invoice_number}
                                    icon="📄"
                                />
                                <DetailRow
                                    label="পেমেন্ট মাধ্যম"
                                    value={formatMethod(verifiedData.payment_method)}
                                    icon="💳"
                                />
                                {verifiedData.payer_mobile_no && (
                                    <DetailRow
                                        label="পেমেন্ট নম্বর"
                                        value={verifiedData.payer_mobile_no}
                                        icon="📱"
                                    />
                                )}
                                <DetailRow
                                    label="তারিখ ও সময়"
                                    value={verifiedData.order_date_time || new Date().toLocaleString("bn-BD")}
                                    icon="📅"
                                    isLast
                                />
                            </div>
                        </div>

                        {/* Dua Card */}
                        <div className="px-8 pb-6">
                            <div className="bg-linear-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-5 text-center">
                                <p className="text-amber-800 text-base font-semibold italic leading-relaxed mb-2">
                                    &ldquo;যারা নিজেদের ধন সম্পদ আল্লাহ্‌র পথে ব্যয় করে তাদের উপমা একটি বীজের মত, যা সাতটি শীষ উৎপাদন করে, প্রত্যেক শীষে একশ শস্যদানা। আর আল্লাহ্‌ যাকে ইচ্ছে বহুগুণে বৃদ্ধি করে দেন। আর আল্লাহ্‌ সর্বব্যাপী- প্রাচুর্যময়, সর্বজ্ঞ । &rdquo;
                                </p>
                                <p className="text-amber-600 text-xs font-medium">— সূরা আল-বাকারা, ২:২৬১</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="px-8 pb-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/bn/donation"
                                className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <HeartIcon className="w-5 h-5" />
                                আবার দান করুন
                            </Link>
                            <Link
                                href="/bn"
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300"
                            >
                                <HomeIcon className="w-5 h-5" />
                                হোম পেজ
                            </Link>
                        </div>

                        {/* Email notice */}
                        <div className="border-t border-gray-100 px-8 py-4 text-center bg-gray-50 rounded-b-3xl">
                            <p className="text-xs text-gray-400">
                                📧 আপনার ইমেইলে রসিদ পাঠানো হচ্ছে
                            </p>
                        </div>
                    </div>
                )}

                {/* ❌ FAILED STATE */}
                {pageStatus === "failed" && (
                    <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
                        <div className="h-1.5 bg-linear-to-r from-red-500 to-rose-500" />
                        <div className="p-10 text-center">
                            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <XCircleIcon className="w-12 h-12 text-red-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">পেমেন্ট ব্যর্থ হয়েছে</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                দুঃখিত, আপনার পেমেন্ট সম্পন্ন হয়নি। আপনার অ্যাকাউন্ট থেকে কোনো টাকা কাটা হয়নি।
                                অনুগ্রহ করে আবার চেষ্টা করুন।
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/bn/donation"
                                    className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg transition-all"
                                >
                                    <ArrowPathIcon className="w-5 h-5" />
                                    আবার চেষ্টা করুন
                                </Link>
                                <Link
                                    href="/bn"
                                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all"
                                >
                                    <HomeIcon className="w-5 h-5" />
                                    হোম পেজ
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* ⛔ CANCELED STATE */}
                {pageStatus === "canceled" && (
                    <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
                        <div className="h-1.5 bg-linear-to-r from-amber-400 to-yellow-400" />
                        <div className="p-10 text-center">
                            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ExclamationTriangleIcon className="w-12 h-12 text-amber-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">পেমেন্ট বাতিল করা হয়েছে</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                আপনি পেমেন্ট বাতিল করেছেন। আপনার অ্যাকাউন্ট থেকে কোনো টাকা কাটা হয়নি।
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/bn/donation"
                                    className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg transition-all"
                                >
                                    <HeartIcon className="w-5 h-5" />
                                    দান করুন
                                </Link>
                                <Link
                                    href="/bn"
                                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all"
                                >
                                    <HomeIcon className="w-5 h-5" />
                                    হোম পেজ
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* ⏳ PROCESSING STATE */}
                {pageStatus === "processing" && (
                    <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                        <div className="h-1.5 bg-linear-to-r from-blue-400 to-cyan-400" />
                        <div className="p-10 text-center">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ClockIcon className="w-12 h-12 text-blue-500 animate-pulse" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">পেমেন্ট প্রক্রিয়াধীন</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                আপনার পেমেন্ট এখনো প্রক্রিয়াধীন রয়েছে। কিছুক্ষণ পর আবার চেক করুন।
                            </p>
                            <Link
                                href="/bn"
                                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3.5 px-8 rounded-xl font-bold hover:bg-gray-200 transition-all"
                            >
                                <HomeIcon className="w-5 h-5" />
                                হোম পেজে ফিরে যান
                            </Link>
                        </div>
                    </div>
                )}

                {/* ⚠️ ERROR STATE */}
                {pageStatus === "error" && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="h-1.5 bg-linear-to-r from-gray-400 to-gray-500" />
                        <div className="p-10 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ExclamationTriangleIcon className="w-12 h-12 text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">কিছু একটা ভুল হয়েছে</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                পেমেন্ট যাচাই করতে সমস্যা হচ্ছে। যেকোনো সমস্যায় যোগাযোগ করুন: <strong>01861-886162</strong>
                            </p>
                            <Link
                                href="/bn/donation"
                                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-green-600 to-emerald-600 text-white py-3.5 px-8 rounded-xl font-bold hover:shadow-lg transition-all"
                            >
                                <ArrowPathIcon className="w-5 h-5" />
                                আবার চেষ্টা করুন
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Detail row component for transaction info
function DetailRow({
    label,
    value,
    icon,
    highlight = false,
    isLast = false,
}: {
    label: string;
    value: string;
    icon?: React.ReactNode;
    highlight?: boolean;
    isLast?: boolean;
}) {
    return (
        <div className={`flex items-center justify-between px-5 py-3.5 ${!isLast ? "border-b border-gray-100" : ""}`}>
            <span className="text-sm text-gray-500 flex items-center gap-2">
                {icon}
                {label}
            </span>
            <span className={`text-sm font-semibold ${highlight ? "text-green-700 bg-green-50 px-2 py-0.5 rounded-md" : "text-gray-900"}`}>
                {value}
            </span>
        </div>
    );
}
