"use client";

import { useState } from "react";
import Image from "next/image";
import { notify } from "@/lib/toasts";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

type GiftItem = {
  bank: string;
  number: string;
  name: string;
};

export function Gift({
  gifts,
  qris,
}: {
  gifts: GiftItem[];
  // Path gambar QRIS Modern Blue (dari data/invitations/modern-blue.ts).
  // Kosong = kartu QRIS tidak tampil — isi path-nya kalau gambar
  // QRIS sudah ada di public/images/templates/modern-blue/.
  qris?: string;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      notify.copied("Nomor rekening berhasil disalin");
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section className="bg-[#FDF8F1] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-xl">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#16324F]/60 font-semibold">With Love</p>
          <h2 className="mt-4 font-serif text-3xl text-[#2E2E2E] sm:text-4xl">Wedding Gift</h2>
          <Divider tone="blue" className="mt-6" width="w-20" />
          <p className="mt-6 max-w-sm text-xs leading-relaxed text-[#6E6E6E]">
            Kehadiran dan doa Anda adalah hadiah terindah bagi kami. Namun bila ingin
            memberi tanda kasih, kami menyediakan kanal berikut.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {gifts.map((g, i) => (
            <Reveal
              key={g.number}
              delay={i * 90}
              className="border border-[#16324F]/15 bg-white p-6 rounded-2xl shadow-soft text-center sm:text-left sm:flex sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#16324F] font-semibold">{g.bank}</p>
                <p className="mt-2 font-serif text-2xl tracking-[0.1em] text-[#2E2E2E]">
                  {g.number}
                </p>
                <p className="mt-1 text-xs text-[#6E6E6E]">a/n {g.name}</p>
              </div>
              <button
                type="button"
                onClick={() => copy(g.number)}
                className="mt-5 sm:mt-0 inline-flex items-center justify-center bg-[#16324F] px-6 py-2.5 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#1F4E79] rounded-full cursor-pointer"
              >
                {copied === g.number ? "Tersalin ✓" : "Salin No. Rekening"}
              </button>
            </Reveal>
          ))}
        </div>

        {qris && (
          <Reveal
            delay={gifts.length * 90}
            className="mt-5 border border-[#16324F]/15 bg-white p-6 rounded-2xl shadow-soft text-center"
          >
            <Image
              src={qris}
              alt="QRIS"
              width={240}
              height={240}
              className="mx-auto rounded-2xl"
            />
            <p className="mt-5 text-xs text-[#6E6E6E]">Scan QRIS</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
