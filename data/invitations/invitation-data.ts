export const maroonElegance = {
  slug: "maroon-elegance",
  template: "maroon-elegance",
  cover: "/images/templates/maroon-elegance/hero-couple.jpg",

  music: {
    src: "/audio/bermuara.mp3",
    title: "Bermuara",
  },

  couple: {
    bride: {
      name: "Almira Nayaka",
      short: "Almira",
      parents: "Putri dari Bapak Hendra Wibawa & Ibu Ratna Kusuma",
      image: "/images/templates/maroon-elegance/bride.jpg",
    },

    groom: {
      name: "Raka Danendra",
      short: "Raka",
      parents: "Putra dari Bapak Sudirman Aji & Ibu Lestari Ningrum",
      image: "/images/templates/maroon-elegance/groom.jpg",
    },
  },

  weddingDate: "2026-11-14T09:00:00+07:00",

  weddingDateLabel: "Sabtu, 14 November 2026",

  events: [
    {
      title: "Akad Nikah",
      date: "Sabtu, 14 November 2026",
      time: "09.00 — 11.00 WIB",
      place: "Masjid Agung Al Falah",
      address: "Jl. Diponegoro No. 12, Bandung, Jawa Barat",
      maps: "https://maps.google.com/?q=Masjid+Agung+Al+Falah+Bandung",
    },
    {
      title: "Resepsi",
      date: "Sabtu, 14 November 2026",
      time: "18.00 — 21.00 WIB",
      place: "The Manor Ballroom",
      address: "Jl. Cimanuk No. 45, Bandung, Jawa Barat",
      maps: "https://maps.google.com/?q=The+Manor+Ballroom+Bandung",
    },
  ],

  story: [
    {
      year: "2021",
      title: "First Meet",
      text: "Sebuah pertemuan sederhana di sore bulan Oktober, tanpa tahu bahwa cerita panjang baru saja dimulai.",
    },
    {
      year: "2023",
      title: "Relationship",
      text: "Dua jalan yang berbeda memilih arah yang sama, belajar tumbuh berdua dalam sabar dan doa.",
    },
    {
      year: "2025",
      title: "Engagement",
      text: "Janji pertama diucapkan di hadapan keluarga, ditemani rangkaian bunga dan restu yang hangat.",
    },
    {
      year: "2026",
      title: "Wedding",
      text: "Dan hari itu tiba, ketika dua nama akhirnya ditulis dalam satu kalimat yang sama.",
    },
  ],

  gallery: [
    { src: "/images/templates/maroon-elegance/gallery-1.jpg", alt: "Detail tangan mempelai", cls: "col-span-2 h-40 sm:h-52" },
    { src: "/images/templates/maroon-elegance/gallery-2.jpg", alt: "Pengantin berjalan di koridor", cls: "col-span-4 h-48 sm:h-64" },
    { src: "/images/templates/maroon-elegance/gallery-3.jpg", alt: "Undangan pernikahan dan bunga mawar", cls: "col-span-2 h-40 sm:h-52" },
    { src: "/images/templates/maroon-elegance/hero-couple.jpg", alt: "Potret editorial kedua mempelai", cls: "col-span-2 h-56 sm:h-72" },
  ],

  gifts: [
    {
      bank: "Bank Mandiri",
      number: "1370098765432",
      name: "Almira Nayaka",
    },
    {
      bank: "Bank BCA",
      number: "5271882049",
      name: "Raka Danendra",
    },
  ],
};

export type MaroonEleganceData = typeof maroonElegance;