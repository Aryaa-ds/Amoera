"use client";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type StoryItem = {
  year: string;
  title: string;
  text: string;
};

/** Love story sebagai garis waktu vertikal dengan titik-titik. */
export function Story({ story }: { story: StoryItem[] }) {
  return (
    <section className="relative px-6 py-14">
      <Reveal className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
          Love Story
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[#1E3A5F]">
          Perjalanan Kami
        </h2>
        <Divider className="mt-5" />
      </Reveal>

      <div className="relative mx-auto mt-10 max-w-md">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-[#7FA8CC]/40" />
        <div className="space-y-9">
          {story.map((s, i) => (
            <Reveal key={s.year} delay={i * 100} className="relative pl-9">
              <span className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center rounded-full border-2 border-[#7FA8CC] bg-[#FDF8F1]">
                <span className="size-[5px] rounded-full bg-[#1E3A5F]" />
              </span>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#7FA8CC]">
                {s.year}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-[#1E3A5F]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6E7B8C]">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
