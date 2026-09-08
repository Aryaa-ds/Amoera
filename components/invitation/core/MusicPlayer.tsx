"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    music: {
        src: string;
        title?: string;
    };
};

export default function MusicPlayer({ music }: Props) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleStart = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.log("Music belum bisa dimainkan:", error);
            }
        };

        window.addEventListener(
            "amoera-music-start",
            handleStart
        );

        return () => {
            window.removeEventListener(
                "amoera-music-start",
                handleStart
            );
        };
    }, []);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        try {
            if (audio.paused) {
                await audio.play();
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log("Music tidak bisa dimainkan:", error);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={music.src}
                loop
                preload="auto"
            />

            <button
                onClick={toggleMusic}
                aria-label={
                    isPlaying
                        ? "Pause music"
                        : "Play music"
                }
                title={
                    isPlaying
                        ? "Matikan musik"
                        : "Putar musik"
                }
                className={`
                    fixed
                    bottom-6
                    right-6
                    z-50
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-primary/30
                    bg-white/90
                    shadow-lg
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:scale-105
                    active:scale-95
                    ${isPlaying ? "animate-spin" : ""}
                `}
            >
                <span className="text-lg">
                    🎵
                </span>
            </button>
        </>
    );
}