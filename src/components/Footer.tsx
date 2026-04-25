'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

import logo from '../../public/logo.png';

// Facebook Icon Component
const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);


export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');

  const quickLinks = [
    { name: t('whyIslam'), href: `/${locale}/under-development` },
    { name: t('howToConvert'), href: `/${locale}/under-development` },
    { name: t('newMuslimGuide'), href: `/${locale}/guidelines` },
    { name: t('challenges'), href: `/${locale}/under-development` },
  ];

  const supportLinks = [
    { name: t('projects'), href: `/${locale}/under-development` },
    { name: t('volunteer'), href: 'https://docs.google.com/forms/u/0/d/1SuoAiAINk5s2KauBBPRRyye7sezcKmxh3Jm14ahiDjA/edit?fromCopy=true&ct=2' },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];



  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Organization Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <Image src={logo} alt="new muslim aid logo" width={60} height={60} className='rounded-xl' />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {locale === 'bn' ? 'নিউমুসলিম এইড ফাউন্ডেশন' : 'New Muslim Foundation'}
                </h3>
                <p className="text-islamic-accent font-semibold text-gray-300">সত্যের পথে সহযোগী হই, জান্নাতের পথে এগিয়ে যাই</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              {locale === 'bn'
                ? 'আমরা বাংলাদেশে নওমুসলিমদের ইসলামিক যাত্রায় সহায়তা প্রদান করি। আমাদের লক্ষ্য প্রতিটি নও মুসলিমকে সঠিক পথ দেখানো।'
                : 'We provide support to new Muslims in Bangladesh in their Islamic journey. Our goal is to guide every new Muslim on the right path.'
              }
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-islamic-primary/20 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-islamic-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">{locale === 'bn' ? 'জরুরি প্রয়োজনে' : 'Emergency Contact'}</p>
                  <p className="text-islamic-accent font-bold text-lg">01861886162</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-islamic-primary/20 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-islamic-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">{locale === 'bn' ? 'ইমেইল' : 'Email'}</p>
                  <p className="text-gray-300">info@newmuslimaid.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-islamic-primary/20 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-islamic-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">{locale === 'bn' ? 'অফিস' : 'Office'}</p>
                  <p className="text-gray-300">
                    {locale === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh'}
                  </p>
                  <a
                    href="https://tiny.cc/dawah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-islamic-accent hover:text-white underline text-sm transition-colors duration-200"
                  >
                    {locale === 'bn' ? 'গুগল ম্যাপে দেখুন' : 'See in Google Maps'}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-islamic-primary/20 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-islamic-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">{locale === 'bn' ? 'সেবার সময়' : 'Service Hours'}</p>
                  <p className="text-gray-300">
                    {locale === 'bn' ? '২৪/৭ সেবা' : '24/7 Available'}
                  </p>
                </div>
              </div>

              {/* Facebook Contact */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-islamic-primary/20 rounded-lg flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5 text-islamic-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold">{locale === 'bn' ? 'ফেসবুক' : 'Facebook'}</p>
                  <a
                    href="https://fb.com/newmuslimaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-islamic-accent hover:text-white transition-colors duration-200"
                  >
                    fb.com/newmuslimaid
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-islamic-accent transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">{t('support')}</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-islamic-accent transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-red-600/20 border-2 border-red-500/30 rounded-xl">
              <h5 className="font-bold text-red-300 mb-3 text-lg">
                {locale === 'bn' ? 'হটলাইন' : 'Hot Line'}
              </h5>
              <Link
                href={`/${locale}/contact?emergency=true`}
                className="text-red-200 hover:text-white transition-colors duration-200 flex items-center space-x-2 font-semibold"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>
                  {locale === 'bn' ? 'এখনই যোগাযোগ করুন' : 'Contact Now'}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* সরকারি নিবন্ধন তথ্য - Government Registration Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="text-lg font-bold text-white">
                {locale === 'bn' ? 'সরকারি নিবন্ধন তথ্য' : 'Government Registration Info'}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* ট্রেড লাইসেন্স */}
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-1">
                      {locale === 'bn' ? 'ট্রেড লাইসেন্স নম্বর' : 'Trade License No.'}
                    </p>
                    <p className="text-green-400 font-bold text-lg">69832030549</p>
                  </div>
                </div>
              </div>

              {/* সেবার ধরণ */}
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-1">
                      {locale === 'bn' ? 'সেবার ধরণ' : 'Service Type'}
                    </p>
                    <p className="text-white font-semibold">
                      {locale === 'bn' ? 'পরামর্শ, গবেষণা, প্রশিক্ষণ কেন্দ্র' : 'Counseling, Research, Training Center'}
                    </p>
                  </div>
                </div>
              </div>

              {/* নিবন্ধিত ঠিকানা */}
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPinIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-1">
                      {locale === 'bn' ? 'নিবন্ধিত ঠিকানা' : 'Registered Address'}
                    </p>
                    <p className="text-white font-semibold">
                      {locale === 'bn' ? 'পুঠিয়া, ১ নং ওয়ার্ড, পুঠিয়া পৌরসভা, রাজশাহী' : 'Puthia, Ward 1, Puthia Municipality, Rajshahi'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-3 italic">
              * {locale === 'bn'
                ? 'উপরোক্ত তথ্য গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের ট্রেড লাইসেন্স অনুযায়ী প্রদত্ত।'
                : 'The above information is provided as per the Trade License of the Government of the People\'s Republic of Bangladesh.'}
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <p className="text-gray-400 text-sm font-medium">
              {locale === 'bn' ? 'আমাদের পেমেন্ট মাধ্যমসমূহ' : 'Our Payment Methods'}
            </p>
            <div className="bg-white rounded-xl p-3 inline-block shadow-sm">
              <Image
                src="/images/paystation/image.png"
                alt="Accepted Payment Methods - bKash, Nagad, Rocket, Visa, Mastercard, and more"
                width={1000}
                height={80}
                className="h-auto w-auto max-w-full max-h-16 md:max-h-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <div className="text-gray-300">
                © 2024 {locale === 'bn' ? 'নিউমুসলিম এইড ফাউন্ডেশন' : 'New Muslim Support'}.
                {locale === 'bn' ? ' সকল অধিকার সংরক্ষিত।' : ' All rights reserved.'}
              </div>
              <div className="mt-1 text-sm md:text-base text-gray-400">
                <span className="font-bold">
                  {locale === 'bn'
                    ? 'ট্রেড লাইসেন্স নম্বরঃ '
                    : 'Trade License No.: '}
                </span>
                <span className="font-bold text-green-500">69832030549</span>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-gray-300 hover:text-islamic-accent transition-colors duration-200 font-medium"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-300 hover:text-islamic-accent transition-colors duration-200 font-medium"
              >
                {t('terms')}
              </Link>
              <Link
                href={`/${locale}/refund-policy`}
                className="text-gray-300 hover:text-islamic-accent transition-colors duration-200 font-medium"
              >
                {t('refund')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
