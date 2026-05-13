import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Metadata } from 'next';
import { blobImages } from '@/lib/blob-images';

export const metadata: Metadata = {
  title: 'দ্বীনি শিক্ষা - মাদরাসাতুদ দাওয়াহ | নিউমুসলিম এইড ফাউন্ডেশন',
  description: 'মাদরাসাতুদ দাওয়াহ (বালিকা ও মহিলা শাখা) — দ্বীনি ও জাগতিক শিক্ষার একটি নির্ভরযোগ্য সমন্বিত মডেল।',
};

export default function DeeniShikkhaPage() {
  const locale = useLocale();

  const departments = [
    { name: 'নুরানী: প্লে থেকে ৩য় বর্ষ', icon: '📖' },
    { name: 'নাযেরা ও হিফজ', icon: '🕌' },
    { name: 'দীনিয়াত ও কারিগরি (নওমুসলিমদের জন্য)', icon: '🎓' },
    { name: 'সাপ্তাহিক তালীম (মা-বোনদের দ্বীন শিক্ষা)', icon: '👩‍🏫' },
  ];

  const donorTiers = [
    { name: 'ডায়মন্ড', oneTime: '১০,০০,০০০+', monthly: '১০,০০০+', color: 'from-cyan-400 to-blue-500', bg: 'bg-cyan-50' },
    { name: 'প্লাটিনাম', oneTime: '৫,০০,০০০+', monthly: '৫,০০০+', color: 'from-gray-300 to-gray-500', bg: 'bg-gray-50' },
    { name: 'গোল্ড', oneTime: '৩,০০,০০০+', monthly: '৩,০০০+', color: 'from-yellow-400 to-amber-500', bg: 'bg-yellow-50' },
    { name: 'সিলভার', oneTime: '২,০০,০০০+', monthly: '২,০০০+', color: 'from-gray-200 to-gray-400', bg: 'bg-gray-50' },
    { name: 'ব্রোঞ্জ', oneTime: '১,০০,০০০+', monthly: '১,০০০+', color: 'from-orange-300 to-orange-500', bg: 'bg-orange-50' },
    { name: 'সাধারণ', oneTime: '—', monthly: '৫০০+', color: 'from-green-300 to-green-500', bg: 'bg-green-50' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50">
      {/* Hero */}
      <div className="relative bg-linear-to-r from-indigo-800 via-indigo-700 to-blue-700 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0 bg-white rounded-2xl p-2 shadow-2xl">
              <Image src={blobImages.mtdawah.logo} alt="মাদরাসাতুদ দাওয়াহ লোগো" fill className="object-contain rounded-xl" />
            </div>
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
                <span className="text-sm font-semibold tracking-wide">দ্বীনি শিক্ষা বিভাগ</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">মাদরাসাতুদ দাওয়াহ</h1>
              <p className="text-lg md:text-xl text-indigo-200">(বালিকা ও মহিলা শাখা)</p>
              <p className="text-base md:text-lg text-indigo-300 mt-2">দ্বীনি ও জাগতিক শিক্ষার একটি নির্ভরযোগ্য সমন্বিত মডেল</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote & Intro */}
      <section className="py-14 md:py-20">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border-l-4 border-indigo-600 mb-10">
            <p className="text-gray-800 text-lg leading-relaxed italic">&ldquo;আমাকে একটি শিক্ষিত মা দাও, আমি তোমাদের একটি শিক্ষিত জাতি উপহার দেব।&rdquo;</p>
            <p className="text-indigo-700 font-semibold mt-3 text-right">— নেপোলিয়ন বোনাপার্ট</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              একজন দ্বীনদার মা একটি পরিবারকে জান্নাতি বাগানে পরিণত করতে পারেন। দ্বীনি শিক্ষা প্রতিটি মানুষের মৌলিক অধিকার হলেও আমাদের সমাজের অনেক মা-বোন ও কন্যা এই সুযোগ থেকে বঞ্চিত। আপনার সন্তানকে দ্বীনদার হিসেবে গড়ে তোলা মানে পরকালীন জীবনের জন্য শ্রেষ্ঠ বিনিয়োগ। এই লক্ষ্যকে সামনে রেখেই আমিনবাজারের রূপালী সৈকত এলাকায় সম্পূর্ণ অলাভজনক ও দ্বীনি খেদমতের নিয়তে আমাদের এই পথচলা।
            </p>
          </div>
        </div>
      </section>

      {/* Building Image */}
      <section className="pb-10">
        <div className="container-custom max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <Image src={blobImages.mtdawah.buildings} alt="মাদরাসা ভবন" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-bold">মাদরাসাতুদ দাওয়াহ ক্যাম্পাস</p>
              <p className="text-sm text-white/80">আমিনবাজার, ঢাকা</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">🏫 আমাদের লক্ষ্য ও বৈশিষ্ট্য</span>
          </h2>
          <p className="text-gray-700 text-lg text-center mb-10 max-w-3xl mx-auto">আমরা কওমি মাদরাসার নেসাবের সাথে আধুনিক স্কুল সিলেবাস ও কম্পিউটার শিক্ষার এক অনন্য সমন্বয় ঘটিয়েছি।</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👩‍🏫', title: 'দক্ষ শিক্ষিকামণ্ডলী', desc: 'পাঠদান করেন শুধুমাত্র অভিজ্ঞ মুয়াল্লিমাগণ।' },
              { icon: '📚', title: 'সমন্বিত শিক্ষা', desc: 'কওমি নেসাব, স্কুল সিলেবাস এবং বেসিক কম্পিউটার প্রশিক্ষণ।' },
              { icon: '🤲', title: 'আদব ও আখলাক', desc: 'পাঠ্যবইয়ের পাশাপাশি আমল ও নৈতিক চরিত্রের বিশেষ পরিচর্যা।' },
              { icon: '💎', title: 'বিশেষ সুযোগ', desc: 'দরিদ্র মেধাবী শিক্ষার্থী ও নওমুসলিম বোনদের জন্য বিশেষ ছাড় ও ব্যবস্থা।' },
              { icon: '📹', title: 'নিরাপত্তা', desc: 'সম্পূর্ণ ক্যাম্পাস সিসিটিভি ক্যামেরার আওতাভুক্ত।' },
              { icon: '🏠', title: 'সুবিধা', desc: 'আবাসিক, অনাবাসিক এবং ফুল-টাইম কেয়ারের সুব্যবস্থা।' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-14 md:py-20 bg-linear-to-r from-indigo-50 to-blue-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">📚 আমাদের বিভাগসমূহ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 flex items-center gap-4 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl">{dept.icon}</div>
                <div>
                  <p className="text-lg font-bold text-gray-900">{dept.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Info */}
      <section className="py-14 md:py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">📅 ভর্তি সংক্রান্ত তথ্য (২০২৬)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { label: 'ভর্তি শুরু', value: '৬ এপ্রিল, ২০২৬' },
                { label: 'ক্লাস শুরু', value: '২ মে, ২০২৬' },
                { label: 'অনলাইন ফরম', value: 'tiny.cc/mdfvorti', isLink: true },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{item.label}</span>
                  {item.isLink ? (
                    <a href={`https://${item.value}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">{item.value}</a>
                  ) : (
                    <span className="text-indigo-700 font-bold">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-h-[500px]">
              <Image src={blobImages.mtdawah.admission1} alt="ভর্তি তথ্য" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DONATION CTA (Mid-point) ===== */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-5xl">
          <div className="relative bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">🤝 মাদরাসার কাজে সহযোগিতা করুন</h2>
              <p className="text-lg md:text-xl text-green-100 mb-4 max-w-2xl mx-auto leading-relaxed">
                রাসুলুল্লাহ ﷺ বলেছেন: &ldquo;মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তবে তিনটি ছাড়া— সদকায়ে জারিয়াহ, উপকারী জ্ঞান, এবং নেক সন্তান যে তার জন্য দোয়া করে।&rdquo;
              </p>
              <p className="text-sm text-green-200 mb-8">(সহিহ মুসলিম)</p>
              <Link
                href={`/${locale}/donation`}
                className="inline-flex items-center bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                💚 দান করুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Needs & Donor Tiers */}
      <section className="py-14 md:py-20 bg-linear-to-r from-indigo-50 to-blue-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">এই নেক কাজের অংশীদার হোন</h2>
          <p className="text-gray-600 text-center text-lg mb-10 max-w-3xl mx-auto">মাদরাসাতুদ দাওয়াহ-র পথচলায় আপনার আর্থিক সহায়তা, পরামর্শ ও দোয়া একান্ত কাম্য।</p>

          {/* Needs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { label: 'বিল্ডিং ভাড়া ও অ্যাডভান্স', amount: '১.৭০ লক্ষ টাকা' },
              { label: 'আসবাবপত্র ও কম্পিউটার', amount: '২ লক্ষ টাকা' },
              { label: 'প্রচারণা ও বিবিধ খরচ', amount: '১.৩০ লক্ষ টাকা' },
              { label: 'মোট লক্ষ্যমাত্রা', amount: '৫ লক্ষ টাকা' },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-xl p-5 shadow-md border text-center ${i === 3 ? 'border-indigo-300 bg-indigo-50' : 'border-gray-100'}`}>
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className={`text-xl font-bold ${i === 3 ? 'text-indigo-700' : 'text-gray-900'}`}>{item.amount}</p>
              </div>
            ))}
          </div>

          {/* Donor Tier Table */}
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">দাতা সদস্য হওয়ার সুযোগ</h3>
          <p className="text-gray-600 text-center mb-8">আপনি এককালীন বা মাসিক অনুদানের মাধ্যমে আমাদের &lsquo;সদকায়ে জারিয়াহ&rsquo; প্রকল্পের অংশ হতে পারেন:</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-linear-to-r from-indigo-700 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-bold">সদস্য পদ</th>
                  <th className="px-6 py-4 text-center font-bold">এককালীন (আজীবন)</th>
                  <th className="px-6 py-4 text-center font-bold">মাসিক (নিয়মিত)</th>
                </tr>
              </thead>
              <tbody>
                {donorTiers.map((tier, i) => (
                  <tr key={i} className={`${tier.bg} border-b border-gray-100 hover:bg-indigo-50 transition-colors`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-linear-to-r ${tier.color}`} />
                        <span className="font-bold text-gray-900">{tier.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">{tier.oneTime} টাকা</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">{tier.monthly} টাকা</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 md:py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">📍 আমাদের সাথে যোগাযোগ করুন</h2>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="mb-8 pb-8 border-b border-gray-100">
              <h3 className="text-xl font-bold text-indigo-700 mb-1">মুহতামিম</h3>
              <p className="text-lg font-bold text-gray-900">মাওলানা মুহাম্মদ নাজমুদ্দীন</p>
              <p className="text-gray-600 text-sm">(প্রাক্তন ভাইস প্রিন্সিপাল, জামিয়া ইসলামিয়া দারুল উলুম ঢাকা, মসজিদুল আকবর কমপ্লেক্স)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">🏠 ঠিকানা</p>
                <p className="text-gray-600 leading-relaxed">প্লট: ৬, রোড: ১৩, রূপালী সৈকত আবাসিক এলাকা (ঈদগাহ মাঠের পূর্বে), আমিনবাজার, ঢাকা।</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">📞 হটলাইন (পুরুষ)</p>
                  <p className="text-gray-600">01877-920099, 01729-245651</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">📞 হটলাইন (মহিলা)</p>
                  <p className="text-gray-600">01347-455000, 09613-000020</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">📧 ই-মেইল</p>
                  <a href="mailto:madrasatuddawah.dib@gmail.com" className="text-indigo-600 hover:underline">madrasatuddawah.dib@gmail.com</a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">🌐 ফেসবুক</p>
                  <a href="https://facebook.com/61574237918995" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">facebook.com/61574237918995</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-20 bg-linear-to-r from-indigo-700 to-blue-700 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">আসুন, আমরা সবাই মিলে দ্বীনের আলো ছড়িয়ে দিই।</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href={`/${locale}/donation`} className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg">
              💚 দান করুন
            </Link>
            <Link href={`/${locale}/contact`} className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300">
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
