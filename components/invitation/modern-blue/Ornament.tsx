"use client";

import { cn } from "@/lib/utils";

/**
 * Ornamen bunga cat air (dusty blue) — gugusan bunga & daun lembut
 * di sudut, khas inspirasi Wekita Spesial 01. Digambar sebagai SVG,
 * bukan gambar, supaya tajam di semua ukuran layar.
 */
export function FloralCorner({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", flip && "-scale-x-100", className)}
    >
      {/* daun */}
      <path
        d="M14 150C40 128 66 122 92 128c-14 16-44 24-78 22Z"
        fill="#A9C6DE"
        opacity="0.55"
      />
      <path
        d="M30 148C44 116 74 102 100 110c-12 18-42 32-70 38Z"
        fill="#7FA8CC"
        opacity="0.45"
      />
      <path
        d="M120 24c26 4 44 22 50 48-22-4-42-22-50-48Z"
        fill="#A9C6DE"
        opacity="0.5"
      />
      {/* bunga */}
      <circle cx="52" cy="96" r="17" fill="#7FA8CC" opacity="0.55" />
      <circle cx="74" cy="80" r="13" fill="#A9C6DE" opacity="0.6" />
      <circle cx="40" cy="70" r="10" fill="#DCE9F7" opacity="0.8" />
      <circle cx="96" cy="58" r="15" fill="#7FA8CC" opacity="0.5" />
      <circle cx="122" cy="82" r="11" fill="#A9C6DE" opacity="0.55" />
      <circle cx="52" cy="96" r="5" fill="#1E3A5F" opacity="0.65" />
      <circle cx="96" cy="58" r="4.5" fill="#1E3A5F" opacity="0.6" />
      {/* buah beri kecil */}
      <circle cx="140" cy="44" r="3.5" fill="#1E3A5F" opacity="0.7" />
      <circle cx="152" cy="60" r="3" fill="#1E3A5F" opacity="0.55" />
      <circle cx="130" cy="110" r="3" fill="#1E3A5F" opacity="0.5" />
      {/* tangkai */}
      <path
        d="M20 150C60 130 96 108 132 66"
        stroke="#7FA8CC"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** Pembatas tipis dengan wajik di tengah. */
export function Divider({
  className,
  width = "w-16",
}: {
  className?: string;
  width?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span
        className={cn(
          "h-px bg-gradient-to-r from-transparent via-[#7FA8CC]/70 to-transparent",
          width,
        )}
      />
      <span className="size-1.5 rotate-45 bg-[#7FA8CC]" />
      <span
        className={cn(
          "h-px bg-gradient-to-r from-transparent via-[#7FA8CC]/70 to-transparent",
          width,
        )}
      />
    </div>
  );
}
