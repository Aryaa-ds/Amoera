export default function Features() {
  const features = [
    {
      title: "Desain Eksklusif",
      description: "Pilihan tema modern, elegan, dan dapat disesuaikan sesuai konsep pernikahan Anda.",
      icon: "",
    },
    {
      title: "Musik Latar Otomatis",
      description: "Dengarkan alunan musik romantis saat tamu membuka undangan pernikahan.",
      icon: "",
    },
    {
      title: "Buku Tamu & RSVP",
      description: "Tamu dapat mengonfirmasi kehadiran dan mengirimkan doa restu secara langsung.",
      icon: "",
    },
    {
      title: "Amplop Digital",
      description: "Memudahkan tamu memberikan tanda kasih secara cashless dengan aman.",
      icon: "",
    },
  ];

  return (
    <section className="py-20 px-6 bg-surface-soft">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-serif text-foreground sm:text-4xl">
          Fitur Terbaik Untuk Momen Spesial Anda
        </h2>
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
          Undangan digital dengan pengalaman interaktif, modern, dan memberikan kesan mendalam bagi para tamu undangan.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="p-8 rounded-2xl bg-white border border-border shadow-card text-left transition hover:-translate-y-1 duration-300"
            >
              <span className="text-3xl">{feat.icon}</span>
              <h3 className="mt-5 font-semibold text-lg text-foreground">
                {feat.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
