"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type GalleryItem = {
  src: string;
  alt: string;
  cls?: string;
};

const defaultPhotos: GalleryItem[] = [
  { src: "/images/templates/modern-blue/gallery-1.png", alt: "Detail tangan mempelai", cls: "col-span-2 h-44 sm:h-56" },
  { src: "/images/templates/modern-blue/gallery-2.png", alt: "Pengantin berjalan di koridor", cls: "col-span-2 h-44 sm:h-56" },
  { src: "/images/templates/modern-blue/gallery-3.png", alt: "Undangan dan bunga mawar", cls: "col-span-2 h-44 sm:h-56" },
  { src: "/images/templates/modern-blue/hero-couple.png", alt: "Potret editorial kedua mempelai", cls: "col-span-2 h-44 sm:h-56" },
];

export function Gallery({
  photos = defaultPhotos,
}: {
  photos?: GalleryItem[];
}) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="bg-[#FDF8F1] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#16324F]/60 font-semibold">Moments</p>
          <h2 className="mt-4 font-serif text-3xl text-[#2E2E2E] sm:text-4xl">Gallery</h2>
          <Divider tone="blue" className="mt-6" width="w-20" />
        </Reveal>

        <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <Reveal
              key={p.src + i}
              delay={i * 70}
              className={`${p.cls || "col-span-2 h-44"} relative overflow-hidden border border-[#16324F]/15 p-[4px] bg-white rounded-xl shadow-soft`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="relative block h-full w-full overflow-hidden rounded-lg cursor-pointer"
                aria-label={`Perbesar foto: ${p.alt}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1B30]/90 p-6 backdrop-blur-sm cursor-pointer"
        >
          <div className="relative max-h-[80vh] max-w-2xl w-full h-[70vh]">
            <Image
              src={photos[active]!.src}
              alt={photos[active]!.alt}
              fill
              className="border border-[#DCE9F7]/30 object-contain p-[5px] rounded-lg"
            />
          </div>
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-xs uppercase tracking-[0.2em] text-[#DCE9F7] transition-colors hover:text-white"
          >
            Close ✕
          </button>
        </div>
      )}
    </section>
  );
}
