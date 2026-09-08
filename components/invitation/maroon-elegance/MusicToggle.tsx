"use client";

import { Music, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export function MusicToggle({
  playing,
  onToggle,
}: {
  playing: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
      aria-pressed={playing}
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-champagne/60 bg-burgundy/90 text-champagne shadow-lg shadow-black/40 backdrop-blur transition-transform duration-500 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <span
        className={cn(
          "flex items-center justify-center",
          playing && "animate-spin [animation-duration:6s]",
        )}
      >
        {playing ? (
          <Music className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </span>
    </button>
  );
}
