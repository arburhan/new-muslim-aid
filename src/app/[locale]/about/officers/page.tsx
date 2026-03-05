import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "কর্মকর্তাবৃন্দ | নিউমুসলিম এইড ফাউন্ডেশন",
    description: "নিউমুসলিম এইড ফাউন্ডেশনের কর্মকর্তাবৃন্দের তথ্য।",
};

export default function OfficersPage() {
    return (
        <ComingSoon
            title="কর্মকর্তাবৃন্দ"
            description="নিউমুসলিম এইড ফাউন্ডেশনের কর্মকর্তাদের তথ্য শীঘ্রই এখানে প্রকাশ করা হবে, ইনশাআল্লাহ।"
        />
    );
}
