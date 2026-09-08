"use client";

import { useEffect, useRef, useState } from "react";
import { Cover } from "./Cover";
import { Hero } from "./Hero";
import { Couple } from "./Couple";
import { Verse } from "./Verse";
import { Story } from "./Story";
import { Events } from "./Events";
import { Gallery } from "./Gallery";
import { Countdown } from "./Countdown";
import { Gift } from "./Gift";
import { Rsvp } from "./Rsvp";
import { Closing } from "./Closing";
import { MusicToggle } from "./MusicToggle";
import Footer from "@/components/invitation/core/Footer";
import type { MaroonEleganceData } from "@/data/invitations/invitation-data";

type Props = {
  invitation: MaroonEleganceData;
  guestName?: string;
};

export default function MaroonElegance({
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
    <main className="min-h-screen overflow-x-hidden bg-[#FAF6F0]">
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
      <Hero
        couple={invitation.couple}
        weddingDateLabel={invitation.weddingDateLabel}
        coverImage={invitation.cover}
        started={leaving || opened}
      />
      <Couple couple={invitation.couple} />
      <Verse />
      <Story story={[...invitation.story]} />
      <Events events={[...invitation.events]} />
      <Gallery photos={invitation.gallery ? [...invitation.gallery] : undefined} />
      <Countdown weddingDate={invitation.weddingDate} />
      <Gift gifts={[...invitation.gifts]} />
      <Rsvp slug={invitation.slug} guestName={guestName} />
      <Closing couple={invitation.couple} />
      <Footer />
      {opened && <MusicToggle playing={playing} onToggle={toggleMusic} />}
    </main>
  );
}
