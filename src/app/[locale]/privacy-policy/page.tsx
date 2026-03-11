import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "গোপনীয়তা নীতি | নিউমুসলিম এইড ফাউন্ডেশন",
    description: "নিউমুসলিম এইড ফাউন্ডেশনের গোপনীয়তা ও তথ্য সুরক্ষা নীতিমালা।",
};

export default function PrivacyPolicyPage() {
    const sections = [
        {
            num: "১", title: "ভূমিকা",
            content: `নিউমুসলিম এইড ফাউন্ডেশন আপনার গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি বর্ণনা করে যে আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ এবং সুরক্ষা করি। আমাদের ওয়েবসাইট (newmuslimaid.com) ব্যবহারের মাধ্যমে আপনি এই নীতিতে সম্মত হচ্ছেন।`
        },
        {
            num: "২", title: "আমরা যে তথ্যসমূহ সংগ্রহ করি",
            content: "আমরা নিম্নলিখিত ধরনের তথ্য সংগ্রহ করতে পারি:",
            items: ["নাম, ইমেইল ঠিকানা, ফোন নম্বর", "যোগাযোগ ফর্ম বা স্বেচ্ছাসেবক নিবন্ধনে প্রদত্ত তথ্য", "দান/অনুদানের সময় প্রদত্ত তথ্য", "আইপি ঠিকানা ও ব্রাউজারের ধরন", "ওয়েবসাইট ব্যবহারের ধরন ও সময়কাল"]
        },
        {
            num: "৩", title: "তথ্যের ব্যবহার",
            content: "সংগৃহীত তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহৃত হয়:",
            items: ["আপনাকে আমাদের সেবা প্রদান ও উন্নতি করা", "দান/অনুদানের লেনদেন প্রক্রিয়াকরণ", "আপনার অনুরোধ বা জিজ্ঞাসার জবাব দেওয়া", "স্বেচ্ছাসেবক নিবন্ধন ও সমন্বয়", "ওয়েবসাইটের কার্যকারিতা উন্নত করা", "আইনি বাধ্যবাধকতা পালন করা"]
        },
        {
            num: "৪", title: "পেমেন্ট তথ্যের সুরক্ষা",
            content: "আমরা আপনার আর্থিক তথ্যের সুরক্ষায় বিশেষ গুরুত্ব দিই:",
            items: ["পেমেন্ট প্রক্রিয়াকরণ তৃতীয় পক্ষের নিরাপদ পেমেন্ট গেটওয়ে (PayStation) দ্বারা সম্পন্ন হয়", "আমরা আপনার কার্ড নম্বর বা ব্যাংক তথ্য সরাসরি সংরক্ষণ করি না", "সকল লেনদেন SSL এনক্রিপশনের মাধ্যমে সুরক্ষিত", "পেমেন্ট গেটওয়ে PCI-DSS মানদণ্ড মেনে চলে"]
        },
        {
            num: "৫", title: "তথ্য শেয়ারিং ও হস্তান্তর",
            content: "আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না। তবে নিম্নলিখিত ক্ষেত্রে তথ্য শেয়ার করা হতে পারে:",
            items: ["পেমেন্ট গেটওয়ে সেবাদাতার সাথে (লেনদেন প্রক্রিয়াকরণের জন্য)", "আইন-শৃঙ্খলা রক্ষাকারী বাহিনীর আইনসম্মত অনুরোধে", "আপনার পূর্বানুমতি সাপেক্ষে"]
        },
        {
            num: "৬", title: "কুকি নীতি",
            content: "আমাদের ওয়েবসাইট কুকি (Cookies) ব্যবহার করে আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে। কুকি হলো ছোট টেক্সট ফাইল যা আপনার ডিভাইসে সংরক্ষিত হয়। আপনি আপনার ব্রাউজার সেটিংস থেকে কুকি নিষ্ক্রিয় করতে পারেন, তবে এতে ওয়েবসাইটের কিছু কার্যকারিতা সীমিত হতে পারে।"
        },
        {
            num: "৭", title: "তথ্যের নিরাপত্তা",
            content: "আমরা আপনার তথ্যের সুরক্ষায় যথাযথ প্রযুক্তিগত ও সাংগঠনিক পদক্ষেপ গ্রহণ করি, যার মধ্যে রয়েছে SSL এনক্রিপশন, নিরাপদ সার্ভার, অ্যাক্সেস নিয়ন্ত্রণ এবং নিয়মিত নিরাপত্তা পর্যালোচনা।"
        },
        {
            num: "৮", title: "আপনার অধিকার",
            content: "আপনার ব্যক্তিগত তথ্য সম্পর্কে আপনার নিম্নলিখিত অধিকার রয়েছে:",
            items: ["আপনার সংরক্ষিত তথ্য দেখার অনুরোধ করা", "ভুল তথ্য সংশোধনের অনুরোধ করা", "তথ্য মুছে ফেলার অনুরোধ করা", "তথ্য প্রক্রিয়াকরণে আপত্তি জানানো"]
        },
        {
            num: "৯", title: "নীতি পরিবর্তন",
            content: "আমরা সময়ে সময়ে এই গোপনীয়তা নীতি হালনাগাদ করতে পারি। পরিবর্তিত নীতি ওয়েবসাইটে প্রকাশের পর থেকে কার্যকর হবে।"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Hero */}
            <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-teal-600 text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <span className="text-sm font-semibold tracking-wide">Privacy Policy</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">গোপনীয়তা নীতি</h1>
                        <p className="text-lg md:text-xl text-green-200 leading-relaxed max-w-3xl mx-auto">
                            আপনার ব্যক্তিগত তথ্যের সুরক্ষা ও গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-12 md:py-16">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-10">
                        {sections.map((s) => (
                            <div key={s.num}>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">{s.num}</span>
                                    {s.title}
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">{s.content}</p>
                                {s.items && (
                                    <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 ml-4 mt-3">
                                        {s.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {/* Contact */}
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-green-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">১০</span>
                                যোগাযোগ
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                গোপনীয়তা সম্পর্কিত যেকোনো প্রশ্ন বা অনুরোধের জন্য আমাদের সাথে যোগাযোগ করুন:
                            </p>
                            <div className="space-y-2 text-gray-700 text-lg">
                                <p><strong>ইমেইল:</strong> info@newmuslimaid.com</p>
                                <p><strong>ফোন:</strong> 01861-886162 (হটলাইন)</p>
                                <p><strong>ওয়েবসাইট:</strong> www.newmuslimaid.com</p>
                            </div>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-gray-500 text-sm">সর্বশেষ হালনাগাদ: মার্চ ২০২৬</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
