"use client";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

export function Closing({
  couple,
}: {
  couple: {
    bride: { short: string };
    groom: { short: string };
  };
}) {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] px-6 py-24 sm:py-32">
      <Reveal className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#4A0E17]/60 font-semibold">Thank You</p>
        <p className="mt-6 font-serif text-xl leading-relaxed text-[#2E2E2E] sm:text-2xl">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda dapat hadir dan
          memberikan doa restu.
        </p>
        <Divider tone="maroon" className="mt-8" width="w-20" />
        <p className="mt-8 font-serif text-3xl text-[#4A0E17] sm:text-4xl">
          {couple.bride.short} <span className="italic text-[#C8A46A]">&amp;</span>{" "}
          {couple.groom.short}
        </p>
      </Reveal>
    </section>
  );
}
