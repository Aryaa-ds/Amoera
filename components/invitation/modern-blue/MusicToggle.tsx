"use client";

type Props = {
  playing: boolean;
  onToggle: () => void;
};

/** Tombol musik bulat di pojok kanan bawah. */
export function MusicToggle({ playing, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
      className="fixed bottom-5 right-5 z-[90] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#1E3A5F] text-white shadow-lg shadow-[#1E3A5F]/30 transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      {playing ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <rect x="6" y="5" width="3.5" height="14" rx="1" />
          <rect x="14.5" y="5" width="3.5" height="14" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M9 18.5A2.5 2.5 0 1 1 6.5 16c.54 0 1.04.17 1.45.46V5.4l10-2.3v11.4a2.5 2.5 0 1 1-1.5-2.29V6.9L9 8.6v9.9Z" />
          <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
