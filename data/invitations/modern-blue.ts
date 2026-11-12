// DATA DEMO tema Modern Blue — dibangun ulang 12 Nov 2026 dari struktur
// Maroon (palet navy/steel-blue), inspirasi: inv.wekita.id/spesial-01
// (tata letak simpel satu kolom).
// Isi pasangan, tanggal, dan rekening di bawah ini masih CONTOH — ganti
// dengan data klien asli saat dipakai. Gambar juga masih placeholder
// (dibuat dengan PIL di public/images/templates/modern-blue/); ganti
// dengan foto asli, nama file tetap sama.
export const modernBlue = {
  slug: "modern-blue",
  template: "modern-blue",
  cover: "/images/templates/modern-blue/hero-couple.png",

  music: {
    src: "/audio/bermuara.mp3",
    title: "Bermuara",
  },

  couple: {
    bride: {
      name: "Nadia Kirana",
      short: "Nadia",
      parents: "Putri dari Bapak Bambang Prasetyo & Ibu Sari Wulandari",
      image: "/images/templates/modern-blue/bride.png",
    },

    groom: {
      name: "Arka Pradipta",
      short: "Arka",
      parents: "Putra dari Bapak Dedi Santoso & Ibu Maya Anggraini",
      image: "/images/templates/modern-blue/groom.png",
    },
  },

  weddingDate: "2027-10-09T09:00:00+07:00",

  weddingDateLabel: "Sabtu, 9 Oktober 2027",

  events: [
    {
      title: "Akad Nikah",
      date: "Sabtu, 9 Oktober 2027",
      time: "09.00 — 11.00 WIB",
      place: "Masjid Agung Al-Azhar",
      address: "Jl. Sisingamangaraja No. 1, Jakarta Selatan",
      maps: "https://maps.google.com/?q=Masjid+Agung+Al-Azhar+Jakarta",
    },
    {
      title: "Resepsi",
      date: "Sabtu, 9 Oktober 2027",
      time: "18.00 — 21.00 WIB",
      place: "Balai Kartini",
      address: "Jl. Gatot Subroto, Jakarta Selatan",
      maps: "https://maps.google.com/?q=Balai+Kartini+Jakarta",
    },
  ],

  story: [
    {
      year: "2022",
      title: "First Meet",
      text: "Pertemuan pertama di sebuah kafe kecil di Jakarta, tanpa rencana dan tanpa dugaan.",
    },
    {
      year: "2024",
      title: "Relationship",
      text: "Dua tahun berlalu, dan obrolan singkat itu berubah menjadi cerita yang tak pernah selesai.",
    },
    {
      year: "2026",
      title: "Engagement",
      text: "Sebuah cincin, satu pertanyaan, dan jawaban yang sudah lama ditunggu.",
    },
    {
      year: "2027",
      title: "Wedding",
      text: "Hari ini kami menulis bab baru — bersama, di hadapan keluarga dan sahabat.",
    },
  ],

  gallery: [
    { src: "/images/templates/modern-blue/gallery-1.png", alt: "Detail tangan mempelai", cls: "col-span-2 h-40 sm:h-52" },
    { src: "/images/templates/modern-blue/gallery-2.png", alt: "Pengantin berjalan di koridor", cls: "col-span-4 h-48 sm:h-64" },
    { src: "/images/templates/modern-blue/gallery-3.png", alt: "Undangan pernikahan dan bunga mawar", cls: "col-span-2 h-40 sm:h-52" },
    { src: "/images/templates/modern-blue/hero-couple.png", alt: "Potret kedua mempelai", cls: "col-span-2 h-56 sm:h-72" },
  ],

  gifts: [
    {
      bank: "Bank BCA",
      number: "1122334455",
      name: "Arka Pradipta",
    },
    {
      bank: "Bank Mandiri",
      number: "9988776655",
      name: "Nadia Kirana",
    },
  ],

  // QRIS — kosong = kartu QRIS tidak tampil (Gift.tsx menampilkan
  // kartunya otomatis kalau path gambar diisi). Taruh file qris.png di
  // public/images/templates/modern-blue/ lalu isi path-nya di sini.
  qris: "",
};

export type ModernBlueData = typeof modernBlue;
