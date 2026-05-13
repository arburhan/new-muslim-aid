"use client";

import Image from "next/image";
import { BriefcaseIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { blobImages } from "@/lib/blob-images";

const boardMembers = [
    {
        name: "মুহাম্মাদ নাজমুদ্দিন শামীম",
        designation: "সভাপতি",
        profession: "খতিব, বাংলাদেশ জার্মান টেকনিক্যাল ট্রেনিং সেন্টার, মিরপুর-২, ঢাকা",
        mobile: "০১৮৬০-৯১৪৯৬১",
        email: "shamimnazmuddin@gmail.com",
        image: blobImages.boardMembers.commonHuman,
    },
    {
        name: "মোঃ মোস্তাফিজুর রহমান",
        designation: "সহ-সভাপতি-১",
        profession: "ব্যবসায়ী",
        mobile: "০১৭৫৪৬৬৬৬৬০",
        email: "mustafizur.preach@gmail.com",
        image: blobImages.boardMembers.mostafij,
    },
    {
        name: "মোঃ শহিদুল ইসলাম",
        designation: "সহ-সভাপতি-২",
        profession: "স্থপতি",
        mobile: "০১৭১৭-৪৩৭২০৪",
        email: "sohidul.arch@gmail.com",
        image: blobImages.boardMembers.sohid,
    },
    {
        name: "জহীরুল ইসলাম",
        designation: "সাধারণ সম্পাদক",
        profession: "শিক্ষক",
        mobile: "০১৫৫২-৩৫৯৩৩৮",
        email: "muftizahir24@gmail.com",
        image: blobImages.boardMembers.johir,
    },
    {
        name: "আবদুল্লাহ আল-আমিন",
        designation: "যুগ্ম সম্পাদক-১",
        profession: "জুনিয়র সহকারি ব্যবস্থাপক (প্রশাসন), রূপনগর বিঃ ও বিঃ বিভাগ, ডেসকো",
        mobile: "০১৫১৭-৮৪৪৯৭৯",
        email: "abdullah.du.rcc@gmail.com",
        image: blobImages.boardMembers.commonHuman,
    },
    {
        name: "আবু সাঈদ",
        designation: "যুগ্ম সম্পাদক-২",
        profession: "হোমিও চিকিৎসক, বারাকাহ হোমিও সেন্টার, মিরপুর-১০, ঢাকা",
        mobile: "০১৮৪৯-৫৩৮৭২০",
        email: "abusayedabdullah16@gmail.com",
        image: blobImages.boardMembers.abuSaid,
    },
    {
        name: "ফয়সাল আহমাদ",
        designation: "কোষাধ্যক্ষ",
        profession: "বেসরকারী চাকুরিজীবী",
        mobile: "01829-904719",
        email: "faysalahmad7799@gmail.com",
        image: blobImages.boardMembers.faysal,
    },
    {
        name: "মোঃ ওমর ফারুক",
        designation: "শিক্ষা ও গবেষণা সম্পাদক",
        profession: "সহকারি অধ্যাপক ও বিভাগীয় প্রধান (এমবিএ প্রোগ্রাম), ড্যাফোডিল ইনস্টিটিউট অফ আইটি, ঢাকা",
        mobile: "01683-689117",
        email: "head.mba@diit.info",
        image: blobImages.boardMembers.omar,
    },
    {
        name: "মোঃ ছুফিয়ান",
        designation: "কার্যনির্বাহী সদস্য",
        profession: "ইমাম, রোয়াংছড়ি থানা জামে মসজিদ, রোয়াংছড়ি সদর, বান্দরবান",
        mobile: "01628177625",
        email: "saurysufian@gmail.com",
        image: blobImages.boardMembers.sufian,
    },
    {
        name: "মোঃ আব্দুল্লাহ সাইদ",
        designation: "কার্যনির্বাহী সদস্য",
        profession: "শিক্ষক, দারুল উলুম মাদ্রাসা, মালোপাড়া, রাজশাহী",
        mobile: "01791-111455",
        email: "abdullahsayed890@gmail.com",
        image: blobImages.boardMembers.abdullahSaid,
    },
];

export default function BoardPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50">
            {/* Hero */}
            <div className="bg-linear-to-r from-green-700 via-green-600 to-teal-600 text-white py-16 md:py-20">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        পরিচালনা পর্ষদ
                    </h1>
                    <p className="text-green-200 text-lg max-w-2xl mx-auto">
                        নিউমুসলিম এইড ফাউন্ডেশনের পরিচালনা পর্ষদের সম্মানিত সদস্যবৃন্দ
                    </p>
                </div>
            </div>

            {/* Board Members */}
            <section className="py-12 md:py-20">
                <div className="container-custom max-w-5xl">
                    <div className="space-y-6">
                        {boardMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image */}
                                    <div className="relative w-full md:w-48 lg:w-56 h-56 md:h-auto shrink-0">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top md:rounded-l-2xl"
                                            sizes="(max-width: 768px) 100vw, 224px"
                                        />
                                        {/* Designation badge on image */}
                                        <div className="absolute bottom-3 left-3 md:bottom-auto md:top-3 md:left-3">
                                            <span className="inline-block bg-linear-to-r from-green-600 to-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                {member.designation}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="font-semibold text-sm mb-2">পদবীঃ <span className="text-green-600 ">
                                            {member.designation}
                                        </span> </p>


                                        <div className="space-y-2">


                                            {/* Mobile */}
                                            <a
                                                href={`tel:${member.mobile.replace(/[\s-]/g, "")}`}
                                                className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
                                            >
                                                <PhoneIcon className="w-4 h-4 shrink-0 text-green-600" />
                                                <span className="text-sm">{member.mobile}</span>
                                            </a>

                                            {/* Email */}
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
                                            >
                                                <EnvelopeIcon className="w-4 h-4 shrink-0 text-green-600" />
                                                <span className="text-sm break-all">{member.email}</span>
                                            </a>
                                            {/* Profession */}
                                            <div className="flex items-start gap-2 text-gray-600">
                                                <BriefcaseIcon className="w-4 h-4 shrink-0 text-green-600 mt-0.5" />
                                                <span className="text-sm">{member.profession}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
