import Link from "next/link";
import Image from "next/image";

// Harga per template (bukan paket) — diputuskan Arya 12 Nov 2026,
// paling mahal Rp129.000. Tambah template = tambah 1 entri + harga.
const WHATSAPP_NUMBER = "6285951589769";

export default function TemplateSection() {
  const templates = [
    {
      name: "Floral Minimalist",
      slug: "floral-minimalist",
      image: "/images/templates/floral-minimalist/bride-groom/cover.png",
      tag: "Minimalist & Nature",
      price: 99000,
    },
    {
      name: "Maroon Elegance",
      slug: "maroon-elegance",
      image: "/images/templates/maroon-elegance/hero-couple.jpg",
      tag: "Luxury & Editorial",
      price: 129000,
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-serif text-foreground sm:text-4xl">
          Pilihan Desain Template
        </h2>
        <p className="mt-4 text-text-secondary max-w-xl mx-auto text-sm">
          Pilih tema yang paling cocok dengan nuansa pernikahan impian Anda.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {templates.map((tpl) => (
            <div
              key={tpl.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-72 w-full overflow-hidden bg-muted">
                <Image
                  src={tpl.image}
                  alt={tpl.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {tpl.tag}
                </span>
              </div>
              <div className="p-6 text-left flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-foreground font-semibold">
                    {tpl.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">Undangan Digital Premium</p>
                  <p className="mt-2 text-lg font-bold text-primary">
                    Rp{tpl.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <Link
                    // Preview mengarah ke /demo/ — route /inv/ tidak ada
                    // di project ini, jadi link lama ke /inv/ selalu 404.
                    href={`/demo/${tpl.slug}`}
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-hover active:scale-95"
                  >
                    Live Preview
                  </Link>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Halo Amoera, saya mau pesan undangan ${tpl.name} (Rp${tpl.price.toLocaleString("id-ID")}).`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white active:scale-95"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
