export const demoInvitation = {

    slug: "floral-minimalist",
    template: "floral-minimalist",

    cover: "/images/templates/floral-minimalist/bride-groom/cover.png",

    music: {
        src: "/audio/bermuara.mp3",
        title: "Bermuara",
    },

    bride: {
        name: "Putri",
        fullname: "Putri Maharani",
        father: "Bapak Ahmad",
        mother: "Ibu Siti",
        image: "/images/templates/floral-minimalist/bride-groom/bride.png",
    },

    groom: {
        name: "Putra",
        fullname: "Putra Pratama",
        father: "Bapak Budi",
        mother: "Ibu Rina",
        image: "/images/templates/floral-minimalist/bride-groom/groom.png",
    },

    story: [
        {
            year: "2021",
            title: "Awal Cerita",
            description:
                "Berawal dari pertemuan sederhana, kami saling mengenal dan mulai berbagi banyak cerita. Tanpa disadari, kebersamaan itu tumbuh menjadi rasa nyaman yang semakin kuat dari hari ke hari.",
        },
        {
            year: "2023",
            title: "Lamaran",
            description:
                "Dengan niat yang tulus dan restu keluarga, kami memutuskan untuk melangkah ke tahap yang lebih serius. Momen lamaran menjadi awal dari perjalanan baru yang penuh harapan dan doa baik.",
        },
        {
            year: "2024",
            title: "Akad Nikah",
            description:
                "Hari di mana dua hati bersatu dalam ikatan suci pernikahan. Dengan ucapan ijab qabul, kami memulai lembaran baru sebagai suami istri.",
        },
    ],

    event: {
        akad: {
            title: "Akad Nikah",
            day: "Senin",
            date: "20 Desember 2027",
            time: "08.00 WIB",
            place: "Masjid Agung Pekalongan",
            address: "Jl. KH. Wahid Hasyim No.1, Pekalongan",
        },

        reception: {
            title: "Resepsi",
            day: "Senin",
            date: "20 Desember 2027",
            time: "11.00 WIB",
            place: "Grand Dian Hotel",
            address: "Jl. Gatot Subroto No.88, Pekalongan",
        },
    },

    gallery: [
        "/images/templates/floral-minimalist/bride-groom/gallery1.png",
        "/images/templates/floral-minimalist/bride-groom/gallery2.png",
        "/images/templates/floral-minimalist/bride-groom/gallery3.png",
        "/images/templates/floral-minimalist/bride-groom/cover.png",
        "/images/templates/floral-minimalist/bride-groom/gallery2.png",
        "/images/templates/floral-minimalist/bride-groom/gallery3.png",
    ],

    weddingDate: "2027-12-20T08:00:00",

    date: "20 Desember 2027",

    gift: {
        banks: [
            {
                bank: "BCA",
                accountNumber: "1234567890",
                accountName: "Putra Pratama",
            },
            {
                bank: "Mandiri",
                accountNumber: "9876543210",
                accountName: "Putra Pratama",
            },
        ],

        qris: "/images/templates/floral-minimalist/qris.png",
    },
};

export type InvitationData = typeof demoInvitation;