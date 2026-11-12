"use client";

import Image from "next/image";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type Person = {
  name: string;
  short: string;
  parents: string;
  image: string;
};

type Props = {
  couple: {
    bride: Person;
    groom: Person;
  };
};

/** Salam pembuka + kartu kedua mempelai dengan foto lengkung. */
export function Couple({ couple }: Props) {
  const people: { person: Person; role: string }[] = [
    { person: couple.groom, role: "Mempelai Pria" },
    { person: couple.bride, role: "Mempelai Wanita" },
  ];

  return (
    <section className="relative px-6 py-14">
      <Reveal className="text-center">
        <p className="font-display text-2xl font-semibold italic text-[#1E3A5F]">
          Assalamu&rsquo;alaikum Wr. Wb.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6E7B8C]">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri acara pernikahan kami.
        </p>
        <Divider className="mt-8" />
      </Reveal>

      <div className="mt-10 space-y-12">
        {people.map(({ person, role }, i) => (
          <Reveal key={person.name} delay={i * 120} className="text-center">
            <div className="mx-auto max-w-[220px] overflow-hidden rounded-t-[999px] rounded-b-3xl border-[6px] border-white shadow-lg shadow-[#1E3A5F]/10">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={person.image}
                  alt={`Foto ${person.name}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
              {role}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-[#1E3A5F]">
              {person.name}
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-[#6E7B8C]">
              {person.parents}
            </p>
            {i === 0 && (
              <p className="mt-8 font-display text-5xl italic text-[#7FA8CC]">
                &amp;
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
