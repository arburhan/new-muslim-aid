'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function MadrasatudDawah() {
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden hover:shadow-3xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 md:w-44 md:h-44 relative bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl p-3 shadow-lg border border-indigo-100">
                  <Image
                    src="/images/mtdawah/logo.png"
                    alt="মাদরাসাতুদ দাওয়াহ লোগো"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block bg-indigo-100 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    {locale === 'bn' ? 'দ্বীনি শিক্ষা' : 'Islamic Education'}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  {locale === 'bn' ? 'মাদরাসাতুদ দাওয়াহ' : 'Madrasatud Dawah'}
                </h2>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-2">
                  {locale === 'bn'
                    ? 'বালিকা ও মহিলা শাখা — দ্বীনি ও জাগতিক শিক্ষার একটি নির্ভরযোগ্য সমন্বিত মডেল। কওমি মাদরাসার নেসাবের সাথে আধুনিক স্কুল সিলেবাস ও কম্পিউটার শিক্ষার অনন্য সমন্বয়।'
                    : 'A reliable integrated model of religious and modern education for girls and women, combining Qawmi Madrasa curriculum with modern school syllabus and computer education.'
                  }
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {locale === 'bn'
                    ? '📍 রূপালী সৈকত, আমিনবাজার, ঢাকা'
                    : '📍 Rupali Saikat, Aminbazar, Dhaka'
                  }
                </p>

                <Link
                  href={`/${locale}/deeni-shikkha`}
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
                >
                  <span className="text-white">
                    {locale === 'bn' ? 'বিস্তারিত জানুন' : 'Learn More'}
                  </span>
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
