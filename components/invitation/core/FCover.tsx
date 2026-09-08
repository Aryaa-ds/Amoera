"use client";

import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { gsap } from "gsap";

type CoverContextType = {
    openInvitation: () => void;
};

const CoverContext = createContext<CoverContextType | null>(null);

export function useCover() {
    const context = useContext(CoverContext);

    if (!context) {
        throw new Error("useCover harus digunakan di dalam Cover");
    }

    return context;
}

type CoverProps = {
    children: React.ReactNode;
    music: string;
};

export default function Cover({
    children,
    music,
}: CoverProps) {
    const coverRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const [opened, setOpened] = useState(false);

    useEffect(() => {
        document.body.style.overflow = opened ? "auto" : "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [opened]);

    const openInvitation = async () => {
        try {
            await audioRef.current?.play();
        } catch (error) {
            console.error("Music gagal diputar:", error);
        }

        gsap.to(coverRef.current, {
            y: "-100%",
            opacity: 0,
            duration: 1.2,
            ease: "power3.inOut",

            onComplete: () => {
                setOpened(true);

                window.scrollTo({
                    top: 0,
                    behavior: "instant",
                });
            },
        });
    };

    return (
        <CoverContext.Provider value={{ openInvitation }}>
            <audio
                ref={audioRef}
                loop
                preload="auto"
            >
                <source src={music} type="audio/mpeg" />
            </audio>

            {!opened && (
                <div
                    ref={coverRef}
                    className="
                        fixed
                        inset-0
                        z-[9999]
                        overflow-hidden
                    "
                >
                    {children}
                </div>
            )}
        </CoverContext.Provider>
    );
}