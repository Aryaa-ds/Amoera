export default function FAQ() {
  const faqs = [
    {
      q: "Berapa lama proses pembuatan undangan digital?",
      a: "Proses pengerjaan biasanya memakan waktu 1-2 hari kerja setelah seluruh data dan foto diserahkan lengkap.",
    },
    {
      q: "Apakah bisa custom musik dan lagu pengiring?",
      a: "Tentu saja! Anda dapat memilih lagu favorit Anda sebagai background music undangan digital.",
    },
    {
      q: "Apakah ada batasan jumlah tamu untuk pengiriman undangan?",
      a: "Tidak ada batasan, Anda bebas membagikan link undangan ke sebanyak mungkin tamu dan keluarga yang Anda inginkan.",
    },
    {
      q: "Bagaimana cara melakukan pemesanan?",
      a: "Cukup pilih template yang Anda sukai, klik pesan sekarang untuk terhubung langsung dengan tim kami via WhatsApp.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-surface-soft">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-serif text-foreground sm:text-4xl">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="mt-4 text-text-secondary text-sm">
          Semua hal yang perlu Anda ketahui sebelum memesan undangan digital di AMOERA.
        </p>

        <div className="mt-12 space-y-4 text-left">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-border bg-white p-6 shadow-card"
            >
              <h3 className="font-semibold text-foreground text-base">
                {item.q}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
