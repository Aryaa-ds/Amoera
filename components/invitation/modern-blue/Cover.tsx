"use client";

import Image from "next/image";
import { MailOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Divider, Sprig } from "./Ornament";

export function Cover({
  couple,
  weddingDateLabel,
  guestName = "Tamu Undangan",
  coverImage = "/images/templates/modern-blue/hero-couple.png",
  leaving,
  onOpen,
}: {
  couple: {
    bride: { short: string; name: string };
    groom: { short: string; name: string };
  };
  weddingDateLabel: string;
  guestName?: string;
  coverImage?: string;
  leaving: boolean;
  onOpen: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sampul undangan"
      className={cn(
        "fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden bg-[#0F2440] text-[#FDF8F1] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        leaving && "pointer-events-none -translate-y-10 opacity-0",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,106,0.08)_0,transparent_70%)]" />
      
      <div className="relative mx-auto flex min-h-[100svh] max-w-md flex-col items-center justify-center px-6 py-8 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#DCE9F7]/80 font-medium">
          Undangan Pernikahan
        </p>

        <div className="mt-6 w-[11rem] p-[3px] sm:w-[13rem]">
          <div className="rounded-t-full overflow-hidden border border-[#DCE9F7]/40 p-[5px] bg-[#0B1B30]/50 backdrop-blur-sm">
            <div className="relative h-[14rem] w-full rounded-t-full overflow-hidden sm:h-[16rem]">
              <Image
                src={coverImage}
                alt={`${couple.bride.short} & ${couple.groom.short}`}
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <Sprig className="mt-6 h-7 w-28 text-[#DCE9F7]/60" />

        <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-[#FDF8F1] sm:text-5xl">
          {couple.bride.short}
          <span className="mx-3 font-serif text-2xl italic text-[#DCE9F7]/85">
            &amp;
          </span>
          {couple.groom.short}
        </h1>

        <Divider tone="blue" className="mt-6 w-full max-w-[14rem]" width="w-full" />

        <p className="mt-4 text-[0.75rem] tracking-[0.25em] text-[#FDF8F1]/75 uppercase">
          {weddingDateLabel}
        </p>

        <div className="mt-7">
          <p className="text-[0.68rem] uppercase leading-relaxed tracking-[0.28em] text-[#FDF8F1]/55">
            Kepada Yth.
            <br />
            Bapak / Ibu / Saudara/i
          </p>
          <p className="mt-2 font-serif text-2xl italic text-[#DCE9F7]">
            {guestName}
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="group mt-8 inline-flex items-center gap-3 border border-[#DCE9F7]/50 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-[#DCE9F7] transition-all duration-500 hover:border-[#DCE9F7] hover:bg-[#DCE9F7] hover:text-[#0F2440] active:scale-95 cursor-pointer rounded-full"
        >
          <MailOpen className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
