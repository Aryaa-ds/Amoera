"use client";

import { Divider, FloralCorner } from "./Ornament";
import { Reveal } from "./Reveal";

type Couple = {
  bride: { name: string; short: string };
  groom: { name: string; short: string };
};

/** Penutup: ucapan terima kasih + salam + nama mempelai. */
export function Closing({ couple }: { couple: Couple }) {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-center">
      <FloralCorner className="absolute -bottom-6 -left-6 w-36 opacity-60" />
      <FloralCorner flip className="absolute -bottom-6 -right-6 w-36 opacity-60" />

      <Reveal className="relative">
        <Divider />
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[#6E7B8C]">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
          kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>
        <p className="mt-8 font-display text-2xl font-semibold italic text-[#1E3A5F]">
          Wassalamu&rsquo;alaikum Wr. Wb.
        </p>
        <p className="mt-6 font-display text-4xl font-semibold leading-tight text-[#1E3A5F]">
          {couple.groom.short}{" "}
          <span className="italic text-[#7FA8CC]">&amp;</span>{" "}
          {couple.bride.short}
        </p>
      </Reveal>
    </section>
  );
}
