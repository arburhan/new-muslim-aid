import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "সাংগাঠনিক কাঠামো | নিউমুসলিম এইড ফাউন্ডেশন",
    description: "নিউমুসলিম এইড ফাউন্ডেশনের সাংগাঠনিক কাঠামো।",
};

export default function StructurePage() {
    return (
        <ComingSoon
            title="সাংগাঠনিক কাঠামো"
            description="নিউমুসলিম এইড ফাউন্ডেশনের সাংগাঠনিক কাঠামোর বিস্তারিত তথ্য শীঘ্রই এখানে প্রকাশ করা হবে, ইনশাআল্লাহ।"
        />
    );
}
