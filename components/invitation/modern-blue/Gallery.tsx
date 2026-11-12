"use client";

import Image from "next/image";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type Photo = {
  src: string;
  alt: string;
};

/** Galeri: foto pertama lebar, sisanya grid 2 kolom. */
export function Gallery({ photos }: { photos?: Photo[] }) {
  if (!photos || photos.length === 0) return null;
  const [first, ...rest] = photos;

  return (
    <section className="relative px-6 py-14">
      <Reveal className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
          Galeri Foto
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[#1E3A5F]">
          Momen Kami
        </h2>
        <Divider className="mt-5" />
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl">
          <Image src={first.src} alt={first.alt} fill className="object-cover" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {rest.map((p) => (
            <div
              key={p.src}
              className="relative aspect-square w-full overflow-hidden rounded-2xl"
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
