import { ClockIcon } from "@heroicons/react/24/outline";

interface ComingSoonProps {
    title: string;
    description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50">
            {/* Hero */}
            <div className="bg-linear-to-r from-green-700 via-green-600 to-teal-600 text-white py-16 md:py-20">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        {title}
                    </h1>
                    <p className="text-green-200 text-lg">
                        নিউমুসলিম এইড ফাউন্ডেশন
                    </p>
                </div>
            </div>

            {/* Coming Soon Card */}
            <section className="py-16 md:py-24">
                <div className="container-custom max-w-2xl">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14 text-center">
                        <div className="w-20 h-20 bg-linear-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                            <ClockIcon className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            শীঘ্রই আপডেট করা হবে
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {description ||
                                "এই পেজটি বর্তমানে তৈরি হচ্ছে। খুব শীঘ্রই সম্পূর্ণ তথ্য সহ আপডেট করা হবে, ইনশাআল্লাহ।"}
                        </p>
                        <div className="inline-block bg-linear-to-r from-green-50 to-teal-50 rounded-xl px-6 py-3 border border-green-200">
                            <p className="text-green-700 font-semibold text-sm">
                                📞 জরুরি তথ্যের জন্য যোগাযোগ করুন: 01861-886162
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
