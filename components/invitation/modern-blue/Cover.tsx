"use client";

import Image from "next/image";
import { FloralCorner } from "./Ornament";
import { cn } from "@/lib/utils";

type Couple = {
  bride: { name: string; short: string };
  groom: { name: string; short: string };
};

type Props = {
  couple: Couple;
  weddingDateLabel: string;
  coverImage: string;
  guestName: string;
  leaving: boolean;
  onOpen: () => void;
};

/**
 * Sampul layar penuh: foto pasangan di 60% atas yang memudar ke ivory,
 * nama besar di bawahnya, dan tombol "Buka Undangan".
 */
export function Cover({
  couple,
  weddingDateLabel,
  coverImage,
  guestName,
  leaving,
  onOpen,
}: Props) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-[#FDF8F1] transition-opacity duration-1000",
        leaving ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="relative h-[56%] w-full overflow-hidden">
        <Image
          src={coverImage}
          alt="Foto kedua mempelai"
          fill
          priority
          className="object-cover object-top"
        />
        {/* foto memudar ke ivory */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FDF8F1] via-[#FDF8F1]/60 to-transparent" />
        <FloralCorner className="absolute left-0 top-0 w-32 opacity-90" />
        <FloralCorner flip className="absolute right-0 top-0 w-32 opacity-90" />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#6E7B8C]">
          The Wedding of
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-[#1E3A5F]">
          {couple.groom.short}{" "}
          <span className="italic text-[#7FA8CC]">&amp;</span>{" "}
          {couple.bride.short}
        </h1>
        <p className="mt-3 text-sm text-[#6E7B8C]">{weddingDateLabel}</p>

        <div className="mt-8 w-full max-w-xs">
          <p className="text-xs text-[#6E7B8C]">Kepada Yth.</p>
          <p className="text-xs text-[#6E7B8C]">Bapak/Ibu/Saudara/i</p>
          <p className="mt-1 font-display text-xl font-semibold italic text-[#1E3A5F]">
            {guestName}
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1E3A5F] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-lg shadow-[#1E3A5F]/25 transition hover:bg-[#24406B] active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3.5 7 8.5 6 8.5-6" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
