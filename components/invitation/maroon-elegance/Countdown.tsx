"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown({
  weddingDate,
}: {
  weddingDate: string;
}) {
  const target = new Date(weddingDate).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { value: t.days, label: "Days" },
    { value: t.hours, label: "Hours" },
    { value: t.minutes, label: "Minutes" },
    { value: t.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#4A0E17] px-6 py-20 text-[#FAF6F0] sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,106,0.12)_0,transparent_70%)]" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#E8D5B5]/75 font-medium">Counting The Days</p>
        <div className="mt-10 grid grid-cols-4 items-start">
          {units.map((u, i) => (
            <div
              key={u.label}
              className={`flex flex-col items-center px-1 ${
                i > 0 ? "border-l border-[#C8A46A]/30" : ""
              }`}
            >
              <span className="font-serif text-3xl leading-none text-[#FAF6F0] tabular-nums sm:text-5xl font-semibold">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#FAF6F0]/60 sm:text-[0.75rem]">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
