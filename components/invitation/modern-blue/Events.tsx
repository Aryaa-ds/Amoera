"use client";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type EventItem = {
  title: string;
  date: string;
  time: string;
  place: string;
  address: string;
  maps: string;
};

/** Kartu acara: Akad & Resepsi dengan tombol Lihat Lokasi. */
export function Events({ events }: { events: EventItem[] }) {
  return (
    <section className="relative px-6 py-14">
      <Reveal className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
          Rangkaian Acara
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[#1E3A5F]">
          Save the Date
        </h2>
        <Divider className="mt-5" />
      </Reveal>

      <div className="mt-8 space-y-5">
        {events.map((ev, i) => (
          <Reveal key={ev.title} delay={i * 120}>
            <article className="rounded-3xl border border-[#7FA8CC]/25 bg-white/80 p-6 text-center shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
                {ev.title}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-[#1E3A5F]">
                {ev.date}
              </p>
              <p className="mt-1 text-sm text-[#6E7B8C]">Pukul {ev.time}</p>
              <div className="mx-auto mt-4 h-px w-12 bg-[#7FA8CC]/40" />
              <p className="mt-4 text-sm font-medium text-[#2E3A4A]">{ev.place}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#6E7B8C]">
                {ev.address}
              </p>
              <a
                href={ev.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#1E3A5F] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#24406B]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Lihat Lokasi
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
