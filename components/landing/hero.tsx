import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-6 sm:py-28 bg-background">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">
          Platform Undangan Pernikahan Digital
        </p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-serif text-foreground leading-[1.15] tracking-tight">
          Where Every Love Story Begins
        </h1>
        <p className="mt-6 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed"> 
          Bagikan momen spesialmu dengan mudah dan praktis
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/katalog"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-button transition hover:bg-primary-hover active:scale-95"
          >
            Lihat Katalog
          </Link>
        </div>

        <div className="relative mt-16 mx-auto max-w-3xl rounded-3xl p-3 border border-border bg-white shadow-soft">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/templates/floral-minimalist/bride-groom/cover.png"
              alt="AMOERA Preview"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}