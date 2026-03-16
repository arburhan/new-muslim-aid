import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "মেন্টরস | নিউমুসলিম এইড ফাউন্ডেশন",
    description: "নিউমুসলিম এইড ফাউন্ডেশনের মেন্টরদের তথ্য।",
};

export default function MentorsPage() {
    return (
        <ComingSoon
            title="মেন্টরস"
            description="নিউমুসলিম এইড ফাউন্ডেশনের মেন্টরদের তথ্য শীঘ্রই এখানে প্রকাশ করা হবে, ইনশাআল্লাহ।"
        />
    );
}
