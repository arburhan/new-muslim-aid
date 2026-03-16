import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "উপদেষ্টা | নিউমুসলিম এইড ফাউন্ডেশন",
    description: "নিউমুসলিম এইড ফাউন্ডেশনের উপদেষ্টামণ্ডলী।",
};

export default function AdvisorsPage() {
    return (
        <ComingSoon
            title="উপদেষ্টা"
            description="নিউমুসলিম এইড ফাউন্ডেশনের উপদেষ্টামণ্ডলীর তথ্য শীঘ্রই এখানে প্রকাশ করা হবে, ইনশাআল্লাহ।"
        />
    );
}
