"use client";

import { Divider, Sprig } from "./Ornament";
import { Reveal } from "./Reveal";

type StoryItem = {
  year: string;
  title: string;
  text: string;
};

export function Story({
  story,
}: {
  story: StoryItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-2xl">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#4A0E17]/60 font-semibold">
            Our Journey
          </p>
          <h2 className="mt-4 font-serif text-3xl text-[#2E2E2E] sm:text-4xl">Love Story</h2>
          <Divider tone="maroon" className="mt-6" width="w-20" />
        </Reveal>

        <ol className="relative mt-14 pl-8 sm:pl-0">
          <span className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-transparent via-[#4A0E17]/35 to-transparent sm:left-1/2" />
          {story.map((item, i) => (
            <Reveal
              as="li"
              key={item.year}
              delay={i * 90}
              className={`relative pb-12 last:pb-0 sm:w-1/2 ${
                i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
              }`}
            >
              <span
                className={`absolute -left-8 top-[6px] size-[7px] rotate-45 border border-[#C8A46A] bg-[#FAF6F0] sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-[3.5px]" : "sm:-left-[3.5px]"
                }`}
              />
              <p className="font-serif text-xl tracking-wide text-[#C8A46A] sm:text-2xl">
                {item.year}
              </p>
              <h3 className="mt-1 font-serif text-lg text-[#2E2E2E] sm:text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6E6E6E]">
                {item.text}
              </p>
            </Reveal>
          ))}
        </ol>

        <Sprig className="mx-auto mt-6 h-8 w-32 text-[#4A0E17]/20" />
      </div>
    </section>
  );
}
