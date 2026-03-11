import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "সেবার শর্তাবলী | নিউমুসলিম এইড ফাউন্ডেশন",
    description:
        "নিউমুসলিম এইড ফাউন্ডেশনের ওয়েবসাইট ও সেবা ব্যবহারের শর্তাবলী।",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* ========== Hero Section ========== */}
            <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-teal-600 text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <span className="text-sm font-semibold tracking-wide">
                                Terms & Conditions
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                            সেবার শর্তাবলী
                        </h1>
                        <p className="text-lg md:text-xl text-green-200 leading-relaxed max-w-3xl mx-auto">
                            নিউমুসলিম এইড ফাউন্ডেশনের ওয়েবসাইট ও সেবা ব্যবহারের পূর্বশর্ত ও নিয়মাবলী
                        </p>
                    </div>
                </div>
            </div>

            {/* ========== Content ========== */}
            <section className="py-12 md:py-16">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-10">

                        {/* 1. ভূমিকা */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">১</span>
                                ভূমিকা
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                নিউমুসলিম এইড ফাউন্ডেশন (এরপরে &ldquo;আমরা&rdquo;, &ldquo;আমাদের&rdquo; বা &ldquo;ফাউন্ডেশন&rdquo;) এর ওয়েবসাইট
                                (<strong>newmuslimaid.com</strong>) ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীতে সম্মত হচ্ছেন।
                                আমাদের ওয়েবসাইট বা সেবা ব্যবহারের পূর্বে দয়া করে এই শর্তাবলী মনোযোগ সহকারে পড়ুন। আপনি যদি এই
                                শর্তাবলীতে সম্মত না হন, তাহলে অনুগ্রহ করে আমাদের ওয়েবসাইট ব্যবহার করবেন না।
                            </p>
                        </div>

                        {/* 2. সেবার বিবরণ */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">২</span>
                                সেবার বিবরণ
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                নিউমুসলিম এইড ফাউন্ডেশন বাংলাদেশে নওমুসলিমদের সেবায় নিবেদিত একটি সেবামূলক প্রতিষ্ঠান। আমাদের সেবাসমূহের মধ্যে রয়েছে:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                                <li>নওমুসলিমদের দ্বীনি শিক্ষা ও পরিচর্যা</li>
                                <li>আশ্রয় প্রকল্প ও নিরাপত্তা নিশ্চিতকরণ</li>
                                <li>আইনি সহায়তা ও পরামর্শ</li>
                                <li>বিবাহ সহায়তা</li>
                                <li>অনলাইনে দান/অনুদান গ্রহণ</li>
                                <li>স্বেচ্ছাসেবক নিবন্ধন ও সমন্বয়</li>
                            </ul>
                        </div>

                        {/* 3. ব্যবহারকারীর দায়িত্ব */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৩</span>
                                ব্যবহারকারীর দায়িত্ব
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                ওয়েবসাইট ব্যবহারকারী হিসেবে আপনি নিম্নলিখিত বিষয়গুলো নিশ্চিত করবেন:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                                <li>আপনার প্রদত্ত সকল তথ্য সঠিক ও সত্য</li>
                                <li>ওয়েবসাইটটি শুধুমাত্র বৈধ উদ্দেশ্যে ব্যবহার করবেন</li>
                                <li>অন্য কোনো ব্যবহারকারীর ক্ষতি করবেন না</li>
                                <li>ওয়েবসাইটের নিরাপত্তা ব্যবস্থা ভঙ্গ করার চেষ্টা করবেন না</li>
                                <li>অননুমোদিত বাণিজ্যিক উদ্দেশ্যে ওয়েবসাইট ব্যবহার করবেন না</li>
                            </ul>
                        </div>

                        {/* 4. দান ও অনুদান */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৪</span>
                                দান ও অনুদান
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                আমাদের ওয়েবসাইটের মাধ্যমে দান/অনুদান প্রদানের ক্ষেত্রে:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4">
                                <li>সকল দান স্বেচ্ছামূলক এবং দাতার নিজ ইচ্ছায় প্রদান করা হয়</li>
                                <li>অনলাইনে পেমেন্ট গেটওয়ের মাধ্যমে নিরাপদে লেনদেন সম্পন্ন হয়</li>
                                <li>দানের অর্থ নির্ধারিত খাতে ব্যবহৃত হবে</li>
                                <li>দাতা চাইলে নির্দিষ্ট খাতে দান করতে পারবেন</li>
                                <li>সকল লেনদেনের রশিদ/নিশ্চিতকরণ প্রদান করা হবে</li>
                            </ul>
                        </div>

                        {/* 5. বৌদ্ধিক সম্পত্তি */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৫</span>
                                বৌদ্ধিক সম্পত্তি
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                এই ওয়েবসাইটে প্রকাশিত সকল বিষয়বস্তু — যার মধ্যে রয়েছে টেক্সট, ছবি, লোগো, গ্রাফিক্স, ভিডিও
                                এবং সফটওয়্যার — নিউমুসলিম এইড ফাউন্ডেশনের সম্পত্তি এবং কপিরাইট আইন দ্বারা সুরক্ষিত।
                                ফাউন্ডেশনের পূর্বানুমতি ব্যতীত কোনো বিষয়বস্তু পুনঃপ্রকাশ, বিতরণ বা বাণিজ্যিক উদ্দেশ্যে
                                ব্যবহার করা যাবে না।
                            </p>
                        </div>

                        {/* 6. দায়বদ্ধতার সীমাবদ্ধতা */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৬</span>
                                দায়বদ্ধতার সীমাবদ্ধতা
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                নিউমুসলিম এইড ফাউন্ডেশন সর্বোচ্চ চেষ্টা করে ওয়েবসাইটে সঠিক ও হালনাগাদ তথ্য প্রদান করতে।
                                তবে ওয়েবসাইট ব্যবহারের ফলে কোনো প্রত্যক্ষ বা পরোক্ষ ক্ষতির জন্য ফাউন্ডেশন দায়ী থাকবে না।
                                তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকলে সেগুলোর বিষয়বস্তুর জন্যও ফাউন্ডেশন দায়ী নয়।
                            </p>
                        </div>

                        {/* 7. তৃতীয় পক্ষের সেবা */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৭</span>
                                তৃতীয় পক্ষের সেবা
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                আমাদের ওয়েবসাইটে পেমেন্ট প্রক্রিয়াকরণের জন্য তৃতীয় পক্ষের পেমেন্ট গেটওয়ে (PayStation) ব্যবহৃত হয়।
                                পেমেন্ট গেটওয়ে ব্যবহারের ক্ষেত্রে তাদের নিজস্ব শর্তাবলী প্রযোজ্য হবে। আমরা আপনার পেমেন্ট তথ্যের
                                নিরাপত্তা নিশ্চিত করতে সর্বোচ্চ পদক্ষেপ গ্রহণ করি।
                            </p>
                        </div>

                        {/* 8. শর্তাবলী পরিবর্তন */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৮</span>
                                শর্তাবলী পরিবর্তন
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                নিউমুসলিম এইড ফাউন্ডেশন যেকোনো সময় এই শর্তাবলী পরিবর্তন বা হালনাগাদ করার অধিকার সংরক্ষণ করে।
                                পরিবর্তিত শর্তাবলী ওয়েবসাইটে প্রকাশের পর থেকে কার্যকর হবে। নিয়মিত এই পেজ পরিদর্শন করার
                                অনুরোধ রইলো।
                            </p>
                        </div>

                        {/* 9. প্রযোজ্য আইন */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">৯</span>
                                প্রযোজ্য আইন
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের প্রচলিত আইন অনুযায়ী পরিচালিত ও ব্যাখ্যায়িত হবে।
                                যেকোনো বিরোধের ক্ষেত্রে বাংলাদেশের আদালতের এখতিয়ার প্রযোজ্য হবে।
                            </p>
                        </div>

                        {/* 10. যোগাযোগ */}
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-green-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">১০</span>
                                যোগাযোগ
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                এই শর্তাবলী সম্পর্কে কোনো প্রশ্ন বা জিজ্ঞাসা থাকলে আমাদের সাথে যোগাযোগ করুন:
                            </p>
                            <div className="space-y-2 text-gray-700 text-lg">
                                <p><strong>ইমেইল:</strong> info@newmuslimaid.com</p>
                                <p><strong>ফোন:</strong> 01861-886162 (হটলাইন)</p>
                                <p><strong>ওয়েবসাইট:</strong> www.newmuslimaid.com</p>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-500 text-sm">
                                সর্বশেষ হালনাগাদ: মার্চ ২০২৬
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
