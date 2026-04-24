import { Suspense } from "react";
import CallbackClient from "@/components/donation/CallbackClient";

export const metadata = {
    title: "পেমেন্ট ফলাফল | NewMuslim Aid Foundation",
    description: "আপনার দান/যাকাতের পেমেন্ট ফলাফল দেখুন",
};

export default function DonationCallbackPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-white to-emerald-50">
                    <div className="text-center">
                        <svg className="animate-spin h-10 w-10 text-green-600 mx-auto mb-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <p className="text-gray-500">লোড হচ্ছে...</p>
                    </div>
                </div>
            }
        >
            <CallbackClient />
        </Suspense>
    );
}
