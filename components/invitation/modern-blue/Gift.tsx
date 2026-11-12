"use client";

import { useState } from "react";
import Image from "next/image";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type GiftItem = {
  bank: string;
  number: string;
  name: string;
};

type Props = {
  gifts: GiftItem[];
  qris?: string;
};

/** Amplop digital: kartu bank dengan tombol salin + kartu QRIS (opsional). */
export function Gift({ gifts, qris }: Props) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);
      setTimeout(() => setCopied((c) => (c === number ? null : c)), 2000);
    } catch {
      // clipboard tidak tersedia — biarkan pengguna menyalin manual
    }
  };

  return (
    <section className="relative px-6 py-14">
      <Reveal className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7FA8CC]">
          Amplop Digital
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[#1E3A5F]">
          Tanda Kasih
        </h2>
        <Divider className="mt-5" />
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-[#6E7B8C]">
          Kehadiran Anda adalah hadiah terindah. Namun jika ingin berbagi
          tanda kasih, kami sediakan amplop digital di bawah ini.
        </p>
      </Reveal>

      <div className="mx-auto mt-8 max-w-sm space-y-4">
        {gifts.map((g, i) => (
          <Reveal key={g.number} delay={i * 100}>
            <div className="rounded-3xl border border-[#7FA8CC]/25 bg-white/80 p-5 text-center shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#7FA8CC]">
                {g.bank}
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-wide text-[#1E3A5F]">
                {g.number}
              </p>
              <p className="mt-1 text-xs text-[#6E7B8C]">a/n {g.name}</p>
              <button
                type="button"
                onClick={() => copyNumber(g.number)}
                className="mt-4 cursor-pointer rounded-full border border-[#1E3A5F]/40 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1E3A5F] transition hover:bg-[#1E3A5F] hover:text-white"
              >
                {copied === g.number ? "Tersalin ✓" : "Salin Nomor"}
              </button>
            </div>
          </Reveal>
        ))}

        {qris ? (
          <Reveal delay={gifts.length * 100}>
            <div className="rounded-3xl border border-[#7FA8CC]/25 bg-white/80 p-5 text-center shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#7FA8CC]">
                QRIS
              </p>
              <div className="relative mx-auto mt-4 aspect-square w-44 overflow-hidden rounded-2xl">
                <Image src={qris} alt="Kode QRIS" fill className="object-contain" />
              </div>
              <p className="mt-3 text-xs text-[#6E7B8C]">
                Scan dengan aplikasi pembayaran apa pun
              </p>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
