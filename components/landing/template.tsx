import Link from "next/link";
import Image from "next/image";

export default function TemplateSection() {
  const templates = [
    {
      name: "Floral Minimalist",
      slug: "floral-minimalist",
      image: "/images/templates/floral-minimalist/bride-groom/cover.png",
      tag: "Minimalist & Nature",
    },
    {
      name: "Maroon Elegance",
      slug: "maroon-elegance",
      image: "/images/templates/maroon-elegance/hero-couple.jpg",
      tag: "Luxury & Editorial",
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
                </div>
                <Link
                  // Preview mengarah ke /demo/ — route /inv/ tidak ada
                  // di project ini, jadi link lama ke /inv/ selalu 404.
                  href={`/demo/${tpl.slug}`}
                  className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-hover active:scale-95 shrink-0"
                >
                  Live Preview
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
