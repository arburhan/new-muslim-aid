"use client";

import { useLocale } from "next-intl";
import { PlayCircleIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import aj from '../../../../public/images/sheikhs/abdullah jahangir.png';
import abj from '../../../../public/images/sheikhs/abu bokor jakaria.png';
import ah from '../../../../public/images/sheikhs/ahmadullah.png';
import me from '../../../../public/images/sheikhs/manzur e elaihi.png';
import ubf from '../../../../public/images/sheikhs/uthman.png';
import Link from "next/link";

export default function GuidelinesPage() {
    const locale = useLocale();

    // Video Tutorial Cards Data
    const videoTutorials = [
        {
            title: locale === "bn" ? "কীভাবে অজু করবেন" : "How to Perform Wudu",
            description: locale === "bn"
                ? "সঠিক নিয়মে অজু করার পদ্ধতি শিখুন"
                : "Learn the proper method of performing ablution",
            youtubeLink: "https://youtu.be/q3W91uCtSqk?si=PI3-E_Q6-O0Wrkwj",
            icon: "💧"
        },
        {
            title: locale === "bn" ? "কীভাবে ফরজ গোসল করবেন" : "How to Perform Ghusl",
            description: locale === "bn"
                ? "ফরজ গোসলের সঠিক পদ্ধতি জানুন"
                : "Learn the correct procedure for ritual bathing",
            youtubeLink: "https://youtube.com/shorts/IJksBvt0DOM?si=kKREZg8wxFjJbqvQ",
            icon: "🚿"
        },
        {
            title: locale === "bn" ? "কীভাবে নামাজ পড়বেন" : "How to Perform Salah",
            description: locale === "bn"
                ? "নামাজের সম্পূর্ণ পদ্ধতি শিখুন"
                : "Learn the complete method of prayer",
            youtubeLink: "https://youtu.be/zalLv2NY98k?si=oVLOyiYacOvnx9kS",
            icon: "🕌"
        },
    ];

    // Scholars Data
    const scholars = [
        {
            name: "খন্দকার আবদুল্লাহ জাহাঙ্গীর রাহিঃ",
            image: aj,
            link: "https://www.youtube.com/@SunnahTrust"
        },
        {
            name: "আবু বকর মুহাম্মাদ জাকারিয়া",
            image: abj,
            link: "https://www.youtube.com/@AbuBakarMdZakaria"
        },
        {
            name: "শাইখ আহমাদুল্লাহ",
            image: ah,
            link: "https://www.youtube.com/@sheikhahmadullahofficial"
        },
        {
            name: "মানজুর ই ইলাইহি",
            image: me,
            link: "https://www.youtube.com/@DrMohammadMonzurEElahi"
        },
        {
            name: "উসমান বিন ফারুক",
            image: ubf,
            link: "https://www.youtube.com/@OneMessageFoundation",
        },
    ];

    // Books Data
    const bookCategories = [
        {
            category: locale === "bn" ? "আকিদা" : "Aqeedah (Creed)",
            books: [
                {
                    title: locale === "bn" ? "ইসলামি আকিদা" : "Islami Aqida ",
                    author: locale === "bn" ? "খন্দকার আবদুল্লাহ জাহাঙ্গীর রাহিঃ" : "Khondaker Abdullah Jahangir (Rah.)",
                    url: "https://d1.islamhouse.com/data/bn/ih_books/single2/bn_Quran_Sunnaher_Aloke_Islami_Aqida.pdf",
                },
                {
                    title: locale === "bn" ? "আল ফিকহুল আকবর (বঙ্গানুবাদ ও ব্যাখ্যা) " : "Al-Fiqh Al-Akbar (Translation and Explanation)",
                    author: locale === "bn" ? "খন্দকার আবদুল্লাহ জাহাঙ্গীর রাহিঃ" : "Khondaker Abdullah Jahangir (Rah.)",
                    url: "https://elibrary.iom.edu.bd/wp-content/uploads/2020/07/%E0%A6%86%E0%A6%B2-%E0%A6%AB%E0%A6%BF%E0%A6%95%E0%A6%B9%E0%A7%81%E0%A6%B2-%E0%A6%86%E0%A6%95%E0%A6%AC%E0%A6%BE%E0%A6%B0.pdf",
                },
                {
                    title: locale === "bn" ? "আল আক্বীদা আল ওয়াসিত্বীয়া" : "Al-Aqeedah Al-Wasitiyyah",
                    author: locale === "bn" ? "শাইখুল ইসলাম ইবনে তাইমিয়্যাহ" : "Ibn Taymiyyah",
                    url: "https://archive.org/embed/ibn-taimiya-islamic-book-bangla-islamic-book_202411",
                },
                {
                    title: locale === "bn" ? "আকিদাতুত ত্বহাবি" : "Al-Aqida al-Tahawiyya",
                    author: locale === "bn" ? "ইমাম আবু জাফর আহম্মদ অত-তাহাবী র." : "Imam Abu Ja'far Ahmad at-Tahawi (Rah.)",
                    url: "https://maktabatussunnah.org/wp-content/uploads/2021/04/Sharhu-Tohabia-1-2nd.pdf",
                },
                {
                    title: locale === "bn" ? "তিনটি মূলনীতি ও তার প্রমাণপঞ্জি" : "The Three Fundamental Principles of Islam and Their Proofs",
                    author: locale === "bn" ? "শাইখ মুহাম্মাদ ইবনে আব্দুল ওয়াহাব" : "Muhammad ibn Abdul Wahhab",
                    url: "https://d1.islamhouse.com/data/bn/ih_books/single2/bn_Ati_mulniti_o_tar_proman_ponji.pdf",
                },
            ]
        },
        {
            category: locale === "bn" ? "কুরআন" : "Quran",
            books: [
                {
                    title: locale === "bn" ? "আল কুরআনুল কারীম" : "Al-Quran Al-Karim",
                    author: locale === "bn" ? "" : "",
                    url: "https://quran.com/bn"
                },
                {
                    title: locale === "bn" ? "তাফসীর ইবনে কাসীর" : "Tafsir Ibn Kathir",
                    author: locale === "bn" ? "ইমাম ইবনে কাসীর" : "Ibn Kathir",
                    url: "https://archive.org/embed/TafseerIbnKathirRevisedEdition"
                },
                {
                    title: locale === "bn" ? "তাফসীর আহসানুল বায়ান" : "Tafsir Ahsanul Bayan",
                    author: locale === "bn" ? "আল্লামা হাফিয সালাহুদ্দীন ইউসুফ" : "Alama Hafiz Salahuddin Yusuf",
                    url: "https://d1.islamhouse.com/data/bn/ih_books/single/bn_ahsanul_bayan_tafseerul_quran.pdf"
                },
                {
                    title: locale === "bn" ? "তাফসীর মাআরেফুল কুরআন" : "Tafsir Ma'ariful Quran",
                    author: locale === "bn" ? "মুফতি মুহাম্মাদ শাফি" : "Mufti Muhammad Shafi",
                    url: "https://archive.org/embed/mareful"
                }
            ]
        },
        {
            category: locale === "bn" ? "হাদিস" : "Hadith",
            books: [
                {
                    title: locale === "bn" ? "সহীহ বুখারী" : "Sahih Bukhari",
                    author: locale === "bn" ? "ইমাম বুখারী" : "Imam Bukhari",
                    url: "https://www.hadithbd.com/hadith/chapter/?book=12"
                },
                {
                    title: locale === "bn" ? "সহীহ মুসলিম" : "Sahih Muslim",
                    author: locale === "bn" ? "ইমাম মুসলিম" : "Imam Muslim",
                    url: "https://www.hadithbd.com/hadith/chapter/?book=2"
                },
                {
                    title: locale === "bn" ? "রিয়াদুস সালেহীন" : "Riyad as-Salihin",
                    author: locale === "bn" ? "ইমাম নববী" : "Imam Nawawi",
                    url: "https://www.hadithbd.com/hadith/chapter/?book=3"
                },
                {
                    title: locale === "bn" ? "চল্লিশ হাদিস" : "40 Hadith",
                    author: locale === "bn" ? "ইমাম নববী" : "Imam Nawawi",
                    url: "https://www.hadithbd.com/hadith/chapter/?book=14"
                },
                {
                    title: locale === "bn" ? "আরো হাদিস গ্রন্থ" : "More Hadith Books",
                    author: locale === "bn" ? "" : "",
                    url: "https://www.hadithbd.com/hadith/"
                },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
                <div className="container-custom">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">
                            {locale === "bn" ? "নওমুসলিমদের জন্য গাইডলাইন" : "Guidelines for New Muslims"}
                        </h1>
                        <p className="text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                            {locale === "bn"
                                ? "ইসলামিক জীবন শুরু করার জন্য প্রয়োজনীয় সকল তথ্য এবং গাইডলাইন"
                                : "All the essential information and guidelines to start your Islamic journey"}
                        </p>
                        <div className="mt-8">
                            <Link
                                href={`https://tiny.cc/newmuslimform`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {locale === "bn" ? "সরাসরি সহযোগীতা প্রয়োজন?" : "Need Direct Help?"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-16">
                {/* Video Tutorials Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {locale === "bn" ? "ভিডিও টিউটোরিয়াল" : "Video Tutorials"}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {locale === "bn"
                                ? "মৌলিক ইবাদত শিখুন ভিডিওর মাধ্যমে"
                                : "Learn basic worship through videos"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoTutorials.map((tutorial, index) => (
                            <a
                                key={index}
                                href={tutorial.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-6xl mb-4 text-center">{tutorial.icon}</div>
                                <div className="flex items-center mb-4">
                                    <PlayCircleIcon className="w-8 h-8 text-red-600 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {tutorial.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {tutorial.description}
                                </p>
                                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    <span>{locale === "bn" ? "ভিডিও দেখুন" : "Watch Video"}</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Scholars Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {locale === "bn" ? "প্রখ্যাত শাইখগণ" : "Renowned Scholars"}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {locale === "bn"
                                ? "যাদের কাছ থেকে শিখতে পারেন"
                                : "Learn from these respected scholars"}
                        </p>
                    </div>
                    {/* scholar section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {scholars.map((scholar, index) => (
                            <a
                                key={index}
                                href={scholar.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="relative mb-3 md:mb-4">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                            <Image src={scholar.image} alt={scholar.name} className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-sm md:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                                    {scholar.name}
                                </h3>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Books Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {locale === "bn" ? "পড়ার জন্য বই" : "Recommended Books"}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {locale === "bn"
                                ? "ইসলামিক জ্ঞান অর্জনের জন্য গুরুত্বপূর্ণ বই"
                                : "Essential books for Islamic knowledge"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bookCategories.map((category, catIndex) => (
                            <div
                                key={catIndex}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center mb-6">
                                    <BookOpenIcon className="w-8 h-8 text-green-600 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {category.books.map((book, bookIndex) => (
                                        <a
                                            key={bookIndex}
                                            href={book.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors duration-200 rounded cursor-pointer"
                                        >
                                            <h4 className="font-bold text-gray-900">{book.title}</h4>
                                            <p className="text-sm text-gray-600">{book.author}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-12 shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">
                        {locale === "bn" ? "আরও সাহায্য প্রয়োজন?" : "Need More Help?"}
                    </h3>
                    <p className="text-xl mb-6 opacity-90">
                        {locale === "bn"
                            ? "আমাদের সাথে যোগাযোগ করুন যেকোনো প্রশ্নের জন্য"
                            : "Contact us for any questions you may have"}
                    </p>
                    <a
                        href="tel:01861886162"
                        className="inline-block bg-white text-green-600 px-10 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transition-all duration-200"
                    >
                        {locale === "bn" ? "যোগাযোগ করুন: 01861886162" : "Contact: 01861886162"}
                    </a>
                </div>
            </div>
        </div>
    );
}
