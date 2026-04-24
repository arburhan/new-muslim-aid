"use client";

import { useState } from "react";
import {
    HeartIcon,
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    CurrencyBangladeshiIcon,
    ArrowRightIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface DonationFormProps {
    pageType?: "donation" | "zakat";
}

const PRESET_AMOUNTS = [500, 1000, 2000, 5000, 10000];

export default function DonationForm({ pageType = "donation" }: DonationFormProps) {
    const isZakat = pageType === "zakat";

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [customAmount, setCustomAmount] = useState("");
    const [isCustom, setIsCustom] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const selectedAmount = isCustom ? (parseInt(customAmount) || 0) : (amount || 0);

    const handlePresetClick = (value: number) => {
        setAmount(value);
        setIsCustom(false);
        setCustomAmount("");
        setError("");
    };

    const handleCustomClick = () => {
        setIsCustom(true);
        setAmount("");
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Client-side validation
        if (!name.trim() || name.trim().length < 2) {
            setError("আপনার নাম দিন (কমপক্ষে ২ অক্ষর)");
            return;
        }

        const cleanPhone = phone.replace(/\s|-/g, "");
        if (!/^01[3-9]\d{8}$/.test(cleanPhone)) {
            setError("সঠিক মোবাইল নম্বর দিন (01XXXXXXXXX)");
            return;
        }

        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("সঠিক ইমেইল ঠিকানা দিন");
            return;
        }

        if (!selectedAmount || selectedAmount < 1 || selectedAmount > 500000) {
            setError("দানের পরিমাণ ১ থেকে ৫,০০,০০০ টাকার মধ্যে হতে হবে");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/paystation/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    phone: cleanPhone,
                    email: email.trim().toLowerCase(),
                    amount: selectedAmount,
                    pageType,
                }),
            });

            const data = await response.json();

            if (data.success && data.payment_url) {
                // Redirect to Paystation checkout
                window.location.href = data.payment_url;
            } else {
                setError(data.error || "পেমেন্ট শুরু করতে ব্যর্থ। আবার চেষ্টা করুন।");
                setLoading(false);
            }
        } catch {
            setError("সার্ভারে সংযোগ ত্রুটি। ইন্টারনেট চেক করে আবার চেষ্টা করুন।");
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Main Donation Card */}
            <div className="relative overflow-hidden bg-white rounded-3xl border border-green-200 shadow-xl">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-green-500 via-emerald-500 to-teal-500" />

                <div className="p-6 md:p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-linear-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                            <HeartIcon className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                            {isZakat ? "যাকাত প্রদান করুন" : "দান করুন"}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            নিরাপদ পেমেন্ট গেটওয়ের মাধ্যমে {isZakat ? "যাকাত" : "দান"} করুন
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Amount Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                <CurrencyBangladeshiIcon className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                                {isZakat ? "যাকাতের" : "দানের"} পরিমাণ (টাকা)
                            </label>

                            {/* Preset amount buttons */}
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                                {PRESET_AMOUNTS.map((val) => (
                                    <button
                                        key={val}
                                        type="button"
                                        onClick={() => handlePresetClick(val)}
                                        className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 border-2 cursor-pointer ${
                                            !isCustom && amount === val
                                                ? "bg-linear-to-r from-green-600 to-emerald-600 text-white border-green-600 shadow-lg shadow-green-200 scale-[1.02]"
                                                : "bg-gray-50 text-gray-700 border-gray-200 hover:border-green-400 hover:bg-green-50"
                                        }`}
                                    >
                                        ৳{val.toLocaleString("bn-BD")}
                                    </button>
                                ))}
                            </div>

                            {/* Custom amount */}
                            <div
                                onClick={handleCustomClick}
                                className={`relative rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                                    isCustom
                                        ? "border-green-500 bg-green-50/50 ring-2 ring-green-200"
                                        : "border-gray-200 hover:border-green-300"
                                }`}
                            >
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">৳</div>
                                <input
                                    type="number"
                                    placeholder="অন্য পরিমাণ লিখুন..."
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setIsCustom(true);
                                        setAmount("");
                                        setError("");
                                    }}
                                    onFocus={handleCustomClick}
                                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                                    onKeyDown={(e) => {
                                        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="w-full pl-10 pr-4 py-3.5 bg-transparent rounded-xl text-gray-900 font-semibold focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    min="1"
                                    max="500000"
                                />
                            </div>
                        </div>

                        {/* Donor Information */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                দাতার তথ্য
                            </label>

                            {/* Name */}
                            <div className="relative">
                                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="আপনার নাম"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); setError(""); }}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর (01XXXXXXXXX)"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value); setError(""); }}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="ইমেইল ঠিকানা"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium animate-[shake_0.5s_ease-in-out]">
                                ⚠️ {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading || !selectedAmount}
                            className={`w-full py-4 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer ${
                                loading || !selectedAmount
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-linear-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 active:translate-y-0"
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    পেমেন্ট পেজে নিয়ে যাচ্ছে...
                                </>
                            ) : (
                                <>
                                    <HeartIcon className="w-6 h-6" />
                                    {selectedAmount
                                        ? `৳${selectedAmount.toLocaleString("bn-BD")} ${isZakat ? "যাকাত দিন" : "দান করুন"}`
                                        : isZakat ? "যাকাত দিন" : "দান করুন"
                                    }
                                    <ArrowRightIcon className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {/* Security Badge */}
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-3">
                            <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                            <span>নিরাপদ পেমেন্ট — PayStation দ্বারা সুরক্ষিত</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
