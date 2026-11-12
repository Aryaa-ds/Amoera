"use client";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

/** Ayat pembuka — QS Ar-Rum 21. */
export function Verse() {
  return (
    <section className="relative px-6 py-14 text-center">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
          QS. Ar-Rum : 21
        </p>
        <Divider className="mt-5" />
        <blockquote className="mx-auto mt-6 max-w-md font-display text-xl italic leading-relaxed text-[#1E3A5F]">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.&rdquo;
        </blockquote>
      </Reveal>
    </section>
  );
}
