"use client";

import { useEffect, useState } from "react";

function parts(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

/** Hitung mundur ke tanggal pernikahan — 4 kotak angka. */
export function Countdown({ weddingDate }: { weddingDate: string }) {
  const [now, setNow] = useState(() => parts(weddingDate));

  useEffect(() => {
    const id = setInterval(() => setNow(parts(weddingDate)), 1000);
    return () => clearInterval(id);
  }, [weddingDate]);

  const cells = [
    { value: now.days, label: "Hari" },
    { value: now.hours, label: "Jam" },
    { value: now.minutes, label: "Menit" },
    { value: now.seconds, label: "Detik" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl border border-[#7FA8CC]/30 bg-white/70 px-1 py-3 text-center"
        >
          <p className="font-display text-3xl font-semibold leading-none text-[#1E3A5F]">
            {String(c.value).padStart(2, "0")}
          </p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[#6E7B8C]">
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}
