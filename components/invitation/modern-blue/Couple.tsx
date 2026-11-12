"use client";

import Image from "next/image";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

function Person({
  img,
  name,
  parents,
  role,
  alt,
  delay,
}: {
  img: string;
  name: string;
  parents: string;
  role: string;
  alt: string;
  delay: number;
}) {
  return (
    <Reveal as="figure" delay={delay} className="flex flex-col items-center text-center">
      <div className="w-full max-w-[15rem] border border-[#16324F]/20 p-[6px] bg-white shadow-soft">
        <div className="relative h-[19rem] w-full sm:h-[22rem]">
          <Image
            src={img}
            alt={alt}
            fill
            className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
          />
        </div>
      </div>
      <figcaption className="mt-6 flex flex-col items-center">
        <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[#16324F]/60 font-semibold">{role}</span>
        <h3 className="mt-3 font-serif text-2xl leading-tight text-[#2E2E2E] sm:text-3xl">
          {name}
        </h3>
        <span className="mt-4 h-px w-10 bg-[#16324F]/30" />
        <p className="mt-4 max-w-[16rem] text-xs leading-relaxed text-[#6E6E6E]">
          {parents}
        </p>
      </figcaption>
    </Reveal>
  );
}

export function Couple({
  couple,
}: {
  couple: {
    bride: { name: string; parents: string; image?: string };
    groom: { name: string; parents: string; image?: string };
  };
}) {
  return (
    <section className="relative overflow-hidden bg-[#FDF8F1] px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[#16324F]/60 font-medium">
            Bismillahirrahmanirrahim
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6E6E6E]">
            Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud
            menyelenggarakan pernikahan putra dan putri kami.
          </p>
          <Divider tone="blue" className="mt-6" width="w-24" />
        </Reveal>

        <div className="mt-14 grid gap-14 sm:mt-18 sm:grid-cols-2 sm:gap-10">
          <Person
            img={couple.bride.image || "/images/templates/modern-blue/bride.png"}
            role="The Bride"
            name={couple.bride.name}
            parents={couple.bride.parents}
            alt="Potret pengantin perempuan"
            delay={0}
          />
          <Person
            img={couple.groom.image || "/images/templates/modern-blue/groom.png"}
            role="The Groom"
            name={couple.groom.name}
            parents={couple.groom.parents}
            alt="Potret pengantin pria"
            delay={120}
          />
        </div>
      </div>
    </section>
  );
}
