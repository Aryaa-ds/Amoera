"use client";

import { useEffect, useRef, useState } from "react";
import { Cover } from "./Cover";
import { Hero } from "./Hero";
import { Verse } from "./Verse";
import { Couple } from "./Couple";
import { Events } from "./Events";
import { Gallery } from "./Gallery";
import { Story } from "./Story";
import { Gift } from "./Gift";
import { Rsvp } from "./Rsvp";
import { Closing } from "./Closing";
import { MusicToggle } from "./MusicToggle";
import Footer from "@/components/invitation/core/Footer";
import type { ModernBlueData } from "@/data/invitations/modern-blue";

type Props = {
  invitation: ModernBlueData;
  guestName?: string;
};

/**
 * Modern Blue — tema orisinal Amoera (bukan turunan Maroon).
 * Inspirasi: inv.wekita.id/spesial-01 — kolom sempit di tengah,
 * navy + dusty blue + ivory hangat, serif elegan + sans bersih.
 */
export default function ModernBlue({
  invitation,
  guestName = "Tamu Undangan",
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [leaving, setLeaving] = useState(false);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const openInvitation = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => setOpened(true), 1050);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.8;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EDF2F7] font-body text-[#2E3A4A]">
      <audio
        ref={audioRef}
        src={invitation.music?.src || "/audio/bermuara.mp3"}
        loop
        preload="auto"
      />
      {!opened && (
        <Cover
          couple={invitation.couple}
          weddingDateLabel={invitation.weddingDateLabel}
          coverImage={invitation.cover}
          guestName={guestName}
          leaving={leaving}
          onOpen={openInvitation}
        />
      )}

      {/* kolom sempit di tengah, seperti undangan mobile-first */}
      <div className="mx-auto min-h-screen max-w-xl bg-[#FDF8F1] shadow-[0_0_60px_rgba(30,58,95,0.12)]">
        <Hero
          couple={invitation.couple}
          weddingDate={invitation.weddingDate}
          weddingDateLabel={invitation.weddingDateLabel}
          coverImage={invitation.cover}
        />
        <Verse />
        <Couple couple={invitation.couple} />
        <Events events={[...invitation.events]} />
        <Gallery photos={invitation.gallery ? [...invitation.gallery] : undefined} />
        <Story story={[...invitation.story]} />
        <Gift gifts={[...invitation.gifts]} qris={invitation.qris || undefined} />
        <Rsvp slug={invitation.slug} guestName={guestName} />
        <Closing couple={invitation.couple} />
        <Footer />
      </div>

      {opened && <MusicToggle playing={playing} onToggle={toggleMusic} />}
    </main>
  );
}
