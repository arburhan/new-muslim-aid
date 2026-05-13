/**
 * Vercel Blob - সকল ছবির URL
 * Base URL: NEXT_PUBLIC_BLOB_BASE_URL 
 * Blob-এ folder structure: images/ → boardMember/, mtdawah/, paystation/, sheikhs/
 */

const BASE = process.env.NEXT_PUBLIC_BLOB_BASE_URL ?? '';

export const blobImages = {
  // ===== Sheikhs =====
  sheikhs: {
    abdullahJahangir: `${BASE}/images/sheikhs/abdullah%20jahangir.png`,
    abuBokorJakaria: `${BASE}/images/sheikhs/abu%20bokor%20jakaria.png`,
    ahmadullah: `${BASE}/images/sheikhs/ahmadullah.png`,
    manzurEElaihi: `${BASE}/images/sheikhs/manzur%20e%20elaihi.png`,
    uthman: `${BASE}/images/sheikhs/uthman.png`,
  },

  // ===== Board Members =====
  boardMembers: {
    abuSaid: `${BASE}/images/boardMember/abu%20said.jpeg`,
    mostafij: `${BASE}/images/boardMember/mostafij%20hujur.jpeg`,
    sohid: `${BASE}/images/boardMember/sohid%20vi%20pic.jpeg`,
    johir: `${BASE}/images/boardMember/johir%20hujur.jpeg`,
    faysal: `${BASE}/images/boardMember/faysal%20hujur.jpeg`,
    omar: `${BASE}/images/boardMember/omar%20vi%20pic.jpeg`,
    sufian: `${BASE}/images/boardMember/sufian%20hujur%20pic.jpeg`,
    abdullahSaid: `${BASE}/images/boardMember/abdullah%20said%20hujur.jpeg`,
    commonHuman: `${BASE}/images/boardMember/commonHuman.png`,
  },

  // ===== Madrasa (মাদরাসাতুদ দাওয়াহ) =====
  mtdawah: {
    logo: `${BASE}/images/mtdawah/logo.png`,
    buildings: `${BASE}/images/mtdawah/others/buildings.jpg`,
    admission1: `${BASE}/images/mtdawah/others/admission1.jpg`,
  },

  // ===== Paystation =====
  paystation: {
    image: `${BASE}/images/paystation/image.png`,
  },

  // ===== Latest Updates =====
  updates: {
    trainingProgram: `${BASE}/images/training-program.jpg`,
    ramadanSupport: `${BASE}/images/ramadan-support.jpg`,
    volunteerRecruitment: `${BASE}/images/volunteer-recruitment.jpg`,
  },
};
