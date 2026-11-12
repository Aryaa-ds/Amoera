"use client";

import Image from "next/image";
import { Divider, Sprig } from "./Ornament";
import { cn } from "@/lib/utils";

export function Hero({
  couple,
  weddingDateLabel,
  coverImage = "/images/templates/modern-blue/hero-couple.png",
  started = true,
}: {
  couple: {
    bride: { name: string; short: string };
    groom: { name: string; short: string };
  };
  weddingDateLabel: string;
  coverImage?: string;
  started?: boolean;
}) {
  return (
    <header className="relative overflow-hidden bg-[#16324F] px-6 pb-24 pt-16 text-[#FDF8F1] sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,106,0.12)_0,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-md flex-col items-center text-center sm:max-w-xl">
        <p
          className={cn(
            "text-[0.7rem] uppercase tracking-[0.35em] text-[#DCE9F7]/80 font-medium transition-opacity duration-1000",
            started ? "opacity-100" : "opacity-0",
          )}
        >
          The Wedding Of
        </p>

        <div className={cn("mt-8 w-full transition-all duration-1000", started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="mx-auto w-[15rem] p-[3px] sm:w-[18rem]">
            <div className="rounded-t-full overflow-hidden border border-[#DCE9F7]/40 p-[5px] bg-[#0F2440]/50">
              <div className="relative h-[20rem] w-full rounded-t-full overflow-hidden sm:h-[24rem]">
                <Image
                  src={coverImage}
                  alt={`${couple.bride.short} & ${couple.groom.short}`}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-1000 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <Sprig className="mt-8 h-8 w-32 text-[#DCE9F7]/60" />

        <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.1] tracking-tight text-[#FDF8F1] sm:text-5xl">
          {couple.bride.name}
          <span className="my-2 block font-serif text-2xl italic text-[#DCE9F7]/85 sm:text-3xl">
            &amp;
          </span>
          {couple.groom.name}
        </h1>

        <Divider tone="blue" className="mt-8 w-full max-w-xs" width="w-full" />

        <p className="mt-5 text-[0.75rem] uppercase tracking-[0.25em] text-[#FDF8F1]/75">
          {weddingDateLabel}
        </p>

        <a
          href="#event"
          className="mt-10 inline-flex items-center border-b border-[#DCE9F7]/50 pb-1.5 text-xs uppercase tracking-[0.2em] text-[#DCE9F7] transition-colors hover:border-[#FDF8F1] hover:text-[#FDF8F1]"
        >
          Save The Date
        </a>
      </div>
    </header>
  );
}
