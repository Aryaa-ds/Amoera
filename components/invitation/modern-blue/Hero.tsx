"use client";

import Image from "next/image";
import { Countdown } from "./Countdown";
import { Divider, FloralCorner } from "./Ornament";
import { Reveal } from "./Reveal";

type Couple = {
  bride: { name: string; short: string };
  groom: { name: string; short: string };
};

type Props = {
  couple: Couple;
  weddingDate: string;
  weddingDateLabel: string;
  coverImage: string;
};

/** Ubah tanggal ISO jadi format dasar UTC untuk link Google Calendar. */
function toGoogleDate(iso: string) {
  const d = new Date(iso);
  return d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function saveTheDateUrl(weddingDate: string, names: string) {
  const start = toGoogleDate(weddingDate);
  const end = toGoogleDate(
    new Date(new Date(weddingDate).getTime() + 2 * 60 * 60 * 1000).toISOString(),
  );
  const q = new URLSearchParams({
    action: "TEMPLATE",
    text: `Pernikahan ${names}`,
    dates: `${start}/${end}`,
    details: "Undangan pernikahan — Amoera",
  });
  return `https://calendar.google.com/calendar/render?${q.toString()}`;
}

/** Pembuka: foto lengkung (arch), nama besar, countdown, Save the Date. */
export function Hero({ couple, weddingDate, weddingDateLabel, coverImage }: Props) {
  const names = `${couple.groom.short} & ${couple.bride.short}`;

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 text-center">
      <FloralCorner className="absolute -left-4 top-0 w-28 opacity-70" />
      <FloralCorner flip className="absolute -right-4 top-0 w-28 opacity-70" />

      <Reveal className="relative">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#6E7B8C]">
          The Wedding of
        </p>
        <h2 className="mt-3 font-display text-[2.6rem] font-semibold leading-[1.05] text-[#1E3A5F]">
          {couple.groom.short}
          <br />
          <span className="italic text-[#7FA8CC]">&amp;</span>
          <br />
          {couple.bride.short}
        </h2>
        <Divider className="mt-6" />
        <p className="mt-6 text-sm leading-relaxed text-[#6E7B8C]">
          Kami berharap Anda menjadi bagian
          <br />
          dari hari istimewa kami.
        </p>
      </Reveal>

      <Reveal delay={120} className="relative mx-auto mt-8 max-w-[240px]">
        <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl border-[6px] border-white shadow-lg shadow-[#1E3A5F]/10">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={coverImage}
              alt="Foto kedua mempelai"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={200} className="relative mt-10">
        <p className="font-display text-2xl font-semibold text-[#1E3A5F]">
          {weddingDateLabel}
        </p>
        <div className="mx-auto mt-6 max-w-sm">
          <Countdown weddingDate={weddingDate} />
        </div>
        <a
          href={saveTheDateUrl(weddingDate, names)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1E3A5F]/40 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#1E3A5F] transition hover:bg-[#1E3A5F] hover:text-white"
        >
          Save the Date
        </a>
      </Reveal>
    </section>
  );
}
