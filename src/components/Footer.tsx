'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

import logo from '../../public/logo.png';

// Facebook Icon Component
const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Shield / verified icon
const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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

  const tradeLicenseItems = [
    {
      icon: <DocumentTextIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />,
      label: locale === 'bn' ? 'ট্রেড লাইসেন্স নম্বর' : 'Trade License No.',
      value: '69832030549',
      highlight: true,
    },
    {
      icon: <BriefcaseIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />,
      label: locale === 'bn' ? 'সেবার ধরণ' : 'Type of Service',
      value: locale === 'bn'
        ? 'পরামর্শ, গবেষণা, প্রশিক্ষণ কেন্দ্র'
        : 'Consultancy, Research & Training Center',
      highlight: false,
    },
    {
      icon: <BuildingOfficeIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />,
      label: locale === 'bn' ? 'নিবন্ধিত ঠিকানা' : 'Registered Address',
      value: locale === 'bn'
        ? 'পুঠিয়া, ১ নং ওয়ার্ড, পুঠিয়া পৌরসভা, রাজশাহী'
        : 'Puthia, Ward No. 1, Puthia Municipality, Rajshahi',
      highlight: false,
    },
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

        {/* ─── Trade License Section ─── */}
        <div className="mt-12 rounded-2xl border border-green-700/40 bg-green-900/10 p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheckIcon className="w-5 h-5 text-green-400" />
            <h5 className="text-green-300 font-bold text-base tracking-wide uppercase">
              {locale === 'bn'
                ? 'সরকারি নিবন্ধন তথ্য'
                : 'Government Registration Info'}
            </h5>
          </div>

          {/* Info grid — responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tradeLicenseItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-3 p-4 rounded-xl border ${
                  item.highlight
                    ? 'bg-green-800/20 border-green-600/50'
                    : 'bg-gray-800/40 border-gray-700/50'
                }`}
              >
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p
                    className={`font-semibold text-sm leading-snug ${
                      item.highlight ? 'text-green-300 text-base' : 'text-gray-200'
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-note */}
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            {locale === 'bn'
              ? '* উপর্যুক্ত তথ্য গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের ট্রেড লাইসেন্স অনুযায়ী প্রদত্ত।'
              : '* The above information is provided in accordance with the Trade License issued by the Government of the People\'s Republic of Bangladesh.'}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-8">
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
