"use client";

import { Divider, Sprig } from "./Ornament";
import { Reveal } from "./Reveal";

export function Verse() {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE6] px-6 py-24 sm:py-32">
      <Sprig
        className="pointer-events-none absolute left-1/2 top-10 h-10 w-56 -translate-x-1/2 text-[#4A0E17]/15"
        tone="currentColor"
      />
      <Reveal className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#4A0E17]/60 font-semibold">
          Ar-Rum : 21
        </p>
        <p
          dir="rtl"
          lang="ar"
          className="mt-8 font-arabic text-[1.6rem] leading-[2.4] text-[#4A0E17] sm:text-3xl sm:leading-[2.3]"
        >
          وَمِنْ اٰيٰتِهٖۤ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْۤا
          اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
        </p>
        <Divider tone="maroon" className="mt-8" width="w-16" />
        <p className="mt-8 font-serif text-base italic leading-relaxed text-[#2E2E2E]/85 sm:text-lg">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan dari jenismu sendiri, agar kamu merasa tenteram bersamanya,
          dan Dia jadikan di antaramu rasa kasih dan sayang.”
        </p>
      </Reveal>
    </section>
  );
}
