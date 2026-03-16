import { useLocale } from "next-intl";
import {
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "এক নজরে | নিউমুসলিম এইড ফাউন্ডেশন",
    description:
        "নিউমুসলিম এইড ফাউন্ডেশন — নওমুসলিমদের দ্বীনি পরিচর্যা কেন্দ্র ও আর্ত মানবতার কল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান।",
};

export default function AboutPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* ========== Hero Section ========== */}
            <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-teal-600 text-white py-20 md:py-28 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <span className="text-sm font-semibold tracking-wide">
                                নিবন্ধন নম্বরঃ RAJS-576/2026
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            নিউমুসলিম এইড ফাউন্ডেশন
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-green-100 mb-3">
                            Newmuslim Aid Foundation
                        </p>
                        <p className="text-lg md:text-xl text-green-200 leading-relaxed max-w-3xl mx-auto">
                            দাওয়াতুল ইসলাম বাংলাদেশ (নওমুসলিম বিভাগ)-এর তত্ত্বাবধানে
                            পরিচালিত নওমুসলিমদের দ্বীনি পরিচর্যা কেন্দ্র ও আর্ত মানবতার
                            কল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান
                        </p>
                    </div>
                </div>
            </div>

            {/* ========== "কী ও কেন?" — Introduction ========== */}
            <section className="py-16 md:py-20">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                        <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                            নিউমুসলিম এইড ফাউন্ডেশন
                        </span>{" "}
                        কী ও কেন?
                    </h2>

                    {/* Quranic Ayahs */}
                    <div className="space-y-6 mb-12">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-green-600">
                            <p className="text-gray-800 text-lg leading-relaxed italic">
                                &ldquo;ইসলাম-ই হলো আল্লাহ্‌র কাছে গ্রহণযোগ্য একমাত্র দ্বীন।&rdquo;
                            </p>
                            <p className="text-green-700 font-semibold mt-3 text-right">
                                — সূরা আল-ইমরানঃ ১৯
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-teal-600">
                            <p className="text-gray-800 text-lg leading-relaxed italic">
                                &ldquo;যে ব্যক্তি ইসলাম ব্যতীত অন্য কোন দ্বীন বা ধর্ম অবলম্বন করবে, তা
                                কখনোই গ্রহণ করা হবে না এবং সে আখিরাতে হবে (চূড়ান্তভাবে)
                                ক্ষতিগ্রস্ত।&rdquo;
                            </p>
                            <p className="text-teal-700 font-semibold mt-3 text-right">
                                — সূরা আল-ইমরানঃ ৮৫
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-blue-600">
                            <p className="text-gray-800 text-lg leading-relaxed italic">
                                &ldquo;…সৎকর্ম ও তাকওয়ায় তোমরা পরস্পরের সহযোগিতা কর। মন্দকর্ম ও
                                সীমালঙ্ঘনে পরস্পরের সহযোগিতা করো না। আর আল্লাহকে ভয় কর। নিশ্চয়
                                আল্লাহ আযাব প্রদানে কঠোর।&rdquo;
                            </p>
                            <p className="text-blue-700 font-semibold mt-3 text-right">
                                — সূরা আল মায়িদাঃ ২
                            </p>
                        </div>
                    </div>

                    {/* About Description */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                            আলহামদুলিল্লাহ। প্রতিনিয়ত দেশ-বিদেশের অসংখ্য অমুসলিম ইসলামের
                            সত্যতা অনুধাবন করে ও এর সৌন্দর্যে মুগ্ধ হয়ে এর প্রতি আকৃষ্ট
                            হচ্ছেন। কিন্তু ইসলাম ধর্ম গ্রহণ করার ব্যাপারে অনেকেই আর্থিক,
                            সামাজিক, আইনি নিরাপত্তা সহ বহুমুখী সমস্যার কথা চিন্তা করে ইসলাম
                            গ্রহণে দ্বিধা-দ্বন্দ্বে ভুগছেন। আবার অনেকে ইসলাম গ্রহণ করার পরে
                            স্বাধীনভাবে, স্বাচ্ছন্দে ও নিরাপত্তার সাথে জীবন যাপন করতে পারছেন
                            না।
                        </p>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                            দাওয়াতুল ইসলাম বাংলাদেশের তত্ত্বাবধানে&nbsp;
                            <span className="font-bold text-green-700">
                                &lsquo;নিউমুসলিম এইড ফাউন্ডেশন&rsquo;
                            </span>
                            &nbsp;সেই সকল ইসলাম গ্রহণেচ্ছুক ভাই-বোন, নওমুসলিম এবং অসহায়
                            মানুষদের কল্যাণে নিবেদিত একটি সেবামূলক প্রতিষ্ঠান। এটি
                            গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের{" "}
                            <span className="font-semibold">
                                RJSC (Registrar of Joint Stock Companies And Firms)
                            </span>{" "}
                            কর্তৃক নিবন্ধনপ্রাপ্ত।
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <span className="font-bold text-green-700">
                                    প্রতিষ্ঠানটি পরিচালনার দায়িত্বে রয়েছেন —
                                </span>{" "}
                                বিজ্ঞ ওলামায়ে কেরাম ও ইসলাম গ্রহণের পর দীর্ঘ পথ পাড়ি দেয়ার
                                অভিজ্ঞতা অর্জনকারী নওমুসলিম সহ মানবতার কল্যাণে নিবেদিত একটি
                                টিম।
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== অফিস ও যোগাযোগ ========== */}
            <section className="py-16 md:py-20">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
                        অফিস ও যোগাযোগ
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        {/* Dhaka Office */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-5">
                                <MapPinIcon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                ঢাকা অফিস
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                মাদরাসাতুদ দাওয়াহ, হোল্ডিং নং-০৩, ব্লক-বি, ফকিরবাড়ি মার্কেট,
                                মিরপুর, ঢাকা-১২১৬
                            </p>
                        </div>

                        {/* Rajshahi Office */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5">
                                <MapPinIcon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                রাজশাহী অফিস
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                দারুল বশির, ৭৩/৫, ইসলামপুর, আর. এইচ. গেট (রুয়েট), কাজলা,
                                রাজশাহী সিটি কর্পোরেশন, রাজশাহী–৬২০৪
                            </p>
                        </div>
                    </div>

                    {/* Contact Numbers */}
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 text-center">
                        <PhoneIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                        <h3 className="text-2xl font-bold mb-6">যোগাযোগ</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="tel:01861886162"
                                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                01861-886162
                                <span className="text-xs bg-yellow-400 text-green-900 px-2 py-0.5 rounded-full font-bold">
                                    হটলাইন
                                </span>
                            </a>
                            <a
                                href="tel:01552359338"
                                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                01552-359338
                            </a>
                            <a
                                href="tel:01829904719"
                                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                01829-904719
                            </a>
                            <a
                                href="tel:01517844979"
                                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                01517-844979
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
