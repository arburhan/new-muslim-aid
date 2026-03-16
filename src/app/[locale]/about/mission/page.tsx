import {
    BuildingOffice2Icon,
    AcademicCapIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    BookOpenIcon,
    HomeModernIcon,
    BriefcaseIcon,
    SparklesIcon,
    CheckBadgeIcon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "মিশন ও ভিশন | নিউমুসলিম এইড ফাউন্ডেশন",
    description:
        "নিউমুসলিম এইড ফাউন্ডেশনের লক্ষ্য, উদ্দেশ্য, চলমান কার্যক্রম ও ভবিষ্যত পরিকল্পনা।",
};

const currentActivities = [
    {
        icon: ShieldCheckIcon,
        text: "অন্য ধর্ম থেকে স্বেচ্ছায় ইসলাম গ্রহণ করতে ইচ্ছুক ব্যক্তিদের পরামর্শ প্রদান",
    },
    {
        icon: CheckBadgeIcon,
        text: "আইনি সহায়তা প্রদান",
    },
    {
        icon: BookOpenIcon,
        text: "নওমুসলিমদের দ্বীনি শিক্ষা বিষয়ক পরামর্শ ও সহায়তা প্রদান",
    },
    {
        icon: SparklesIcon,
        text: "দ্বীনি চেতনা তৈরি ও আমলে অগ্রসর করার লক্ষ্যে নওমুসলিমদেরকে তাবলীগ জামাতে প্রেরণ",
    },
    {
        icon: HeartIcon,
        text: "মানসিক ও আত্মিক বিকাশ সাধনে পরিচর্যা",
    },
    {
        icon: UserGroupIcon,
        text: "বিবাহ-শাদির ক্ষেত্রে অভিভাবকত্ব গ্রহণ ও সহায়তা প্রদান",
    },
    {
        icon: HeartIcon,
        text: "দরিদ্র ও অসহায় মানুষ বিশেষতঃ নওমুসলিমদের চিকিৎসা সেবা প্রদান",
    },
    {
        icon: BriefcaseIcon,
        text: "নওমুসলিমদের কর্মমুখী করা ও কর্মসংস্থানের ব্যবস্থা করা",
    },
    {
        icon: HomeModernIcon,
        text: "আশ্রয়হীন নওমুসলিমদের জন্য নিরাপদ আশ্রয়কেন্দ্র পরিচালনা ও পুনর্বাসনের ব্যবস্থা করা",
    },
    {
        icon: ShieldCheckIcon,
        text: "কাফন-দাফনের ব্যবস্থা করা",
    },
    {
        icon: HeartIcon,
        text: "ফ্রি মেডিকেল ক্যাম্প ও রক্তদান কর্মসূচি পরিচালনা করা",
    },
    {
        icon: AcademicCapIcon,
        text: "কর্মব্যস্ত পুরুষ ও পর্দানশীন নারীদের সুবিধার্থে ঘরে বসে অনলাইন শিক্ষা কার্যক্রম",
    },
    {
        icon: UserGroupIcon,
        text: "দরিদ্র মানুষের মধ্যে জনহিতকর বা দাতব্য কার্যক্রম পরিচালনা করা",
    },
];

const futurePlans = [
    {
        icon: BuildingOffice2Icon,
        text: "ফাউন্ডেশনের অধীনে মক্তব, মাদ্রাসা ও মসজিদ প্রতিষ্ঠা করা",
    },
    {
        icon: AcademicCapIcon,
        text: "ফাউন্ডেশনের উদ্যোগে প্রাক-প্রাথমিক শিক্ষা কার্যক্রম পরিচালনা ও স্কুল প্রতিষ্ঠা করা",
    },
    {
        icon: HeartIcon,
        text: "অবহেলিত দারিদ্র পীড়িত ও দুর্যোগ কবলিত মানুষের মাঝে ত্রাণ সামগ্রী বিতরণ",
    },
    {
        icon: BriefcaseIcon,
        text: "অশিক্ষিত ও অর্ধশিক্ষিত মানবগোষ্ঠীকে উন্নত প্রশিক্ষণের মাধ্যমে দক্ষ জনশক্তিতে রূপান্তর করতে কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন করা",
    },
    {
        icon: HomeModernIcon,
        text: "নওমুসলিমদের শিক্ষা-প্রশিক্ষণ-আশ্রয় ইত্যাদি কার্যক্রমের জন্য একটি স্বতন্ত্র কমপ্লেক্স তৈরি করা",
    },
];

export default function MissionPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* ========== Hero ========== */}
            {/*   <div className="bg-gradient-to-r from-green-700 via-green-600 to-teal-600 text-white py-16 md:py-20">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        মিশন ও ভিশন
                    </h1>
                    <p className="text-green-200 text-lg max-w-2xl mx-auto">
                        নিউমুসলিম এইড ফাউন্ডেশনের লক্ষ্য, উদ্দেশ্য ও কার্যক্রম
                    </p>
                </div>
            </div> */}

            {/* ========== লক্ষ্য ও উদ্দেশ্য ========== */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <div className="container-custom max-w-5xl text-center">
                    <LightBulbIcon className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        ফাউন্ডেশনের লক্ষ্য ও উদ্দেশ্য
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-green-100">
                        নওমুসলিম, ইসলাম গ্রহণে ও ইসলাম পালনে ইচ্ছুক ব্যক্তিবর্গ সহ
                        সাধারণ জনগণের কল্যাণ — বিশেষ করে শিক্ষা, দারিদ্র বিমোচন, মানবিক
                        উন্নতি এবং জনকল্যাণমূলক কার্যক্রমসমূহ।
                    </p>
                </div>
            </section>

            {/* ========== চলমান কার্যক্রম ========== */}
            <section className="py-16 md:py-20">
                <div className="container-custom max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            চলমান কার্যক্রম
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            আমাদের ফাউন্ডেশন বর্তমানে যেসব কার্যক্রম পরিচালনা করছে
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentActivities.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-gray-700 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ========== ভবিষ্যত পরিকল্পনা ========== */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            ভবিষ্যত পরিকল্পনা
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            ইনশাআল্লাহ, ভবিষ্যতে আমরা যেসব প্রকল্প বাস্তবায়ন করতে চাই
                        </p>
                    </div>

                    <div className="space-y-5">
                        {futurePlans.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                                                পরিকল্পনা {index + 1}
                                            </span>
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
