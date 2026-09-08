"use client";

import { Divider, Sprig } from "./Ornament";
import { Reveal } from "./Reveal";

type EventItem = {
  title: string;
  date: string;
  time: string;
  place: string;
  address: string;
  maps: string;
};

export function Events({
  events,
}: {
  events: EventItem[];
}) {
  return (
    <section id="event" className="relative overflow-hidden bg-[#4A0E17] px-6 py-24 text-[#FAF6F0] sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,106,0.12)_0,transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#E8D5B5]/75 font-medium">
            Save The Date
          </p>
          <h2 className="mt-4 font-serif text-3xl text-[#FAF6F0] sm:text-4xl">Wedding Event</h2>
          <Divider className="mt-6" width="w-20" />
        </Reveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-10">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 110} className="flex flex-col items-center text-center p-6 border border-[#E8D5B5]/20 rounded-2xl bg-[#380b12]/40 backdrop-blur-sm">
              <Sprig className="h-6 w-20 text-[#E8D5B5]/50" />
              <h3 className="text-xs uppercase tracking-[0.25em] mt-4 text-[#E8D5B5] font-semibold">{ev.title}</h3>
              <p className="mt-4 font-serif text-2xl text-[#FAF6F0]">{ev.date}</p>
              <p className="mt-2 text-xs tracking-[0.2em] text-[#FAF6F0]/70 uppercase">{ev.time}</p>
              <span className="mt-5 h-px w-10 bg-[#C8A46A]/50" />
              <p className="mt-5 font-serif text-lg italic text-[#E8D5B5]">{ev.place}</p>
              <p className="mt-2 max-w-[17rem] text-xs leading-relaxed text-[#FAF6F0]/65">
                {ev.address}
              </p>
              <a
                href={ev.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center border border-[#E8D5B5]/40 px-6 py-2.5 text-[0.75rem] uppercase tracking-[0.15em] text-[#E8D5B5] rounded-full transition-all hover:border-[#E8D5B5] hover:bg-[#E8D5B5] hover:text-[#4A0E17]"
              >
                Open Maps
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
