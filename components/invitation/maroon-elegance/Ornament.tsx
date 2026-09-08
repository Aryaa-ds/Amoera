"use client";

import { cn } from "@/lib/utils";

/** Thin gold/maroon ornamental divider with a centred diamond. */
export function Divider({
  tone = "gold",
  className,
  width = "w-40",
}: {
  tone?: "gold" | "maroon";
  className?: string;
  width?: string;
}) {
  const line = tone === "gold" ? "via-gold/70" : "via-primary/45";
  const dot = tone === "gold" ? "bg-gold/80" : "bg-primary/60";
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span
        className={cn("h-px bg-gradient-to-r from-transparent", line, "to-transparent", width)}
      />
      <span className={cn("size-1 rotate-45", dot)} />
      <span
        className={cn("h-px bg-gradient-to-r from-transparent", line, "to-transparent", width)}
      />
    </div>
  );
}

/** Fine botanical sprig drawn as line art. */
export function Sprig({
  className,
  tone = "currentColor",
}: {
  className?: string;
  tone?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      stroke={tone}
      strokeWidth="0.7"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 34C28 34 48 26 60 12" />
      <path d="M116 34C92 34 72 26 60 12" />
      {[18, 30, 42].map((x, i) => (
        <g key={x}>
          <path d={`M${x} ${33 - i * 1.5}c-4-5-2-9 2-10 2 4 1 8-2 10Z`} />
          <path d={`M${120 - x} ${33 - i * 1.5}c4-5 2-9-2-10-2 4-1 8 2 10Z`} />
        </g>
      ))}
      <circle cx="60" cy="10" r="2.4" />
      <path d="M60 10c3-3 3-6 0-8-3 2-3 5 0 8Z" />
    </svg>
  );
}
