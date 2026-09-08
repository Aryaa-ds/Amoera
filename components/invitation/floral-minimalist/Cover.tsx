"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type HeroProps = {
    brideName: string;
    groomName: string;
    date: string;
    guestName?: string;
    coverImage: string;
};

export default function Hero({
    brideName,
    groomName,
    date,
    guestName = "Nama Tamu",
    coverImage,
}: HeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const handleOpen = () => {
    const cover = heroRef.current;

    if (!cover) return;

    window.dispatchEvent(
        new Event("amoera-music-start")
    );

    gsap.to(cover, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",

        onComplete: () => {
            cover.style.display = "none";

            document.body.classList.remove(
                "overflow-hidden"
            );
        },
    });
};

    return (
        <>
            <section
                ref={heroRef}
                className="
                    fixed
                    inset-0
                    z-[9999]
                    min-h-screen
                    overflow-hidden
                    touch-none
                    bg-background
                "
            >



                <div className="relative h-[72vh] w-full">

                    <Image
                        src={coverImage}
                        alt="Wedding Cover"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    {/* OVERLAY */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(
                                180deg,
                                rgba(248,244,239,0) 0%,
                                rgba(248,244,239,.12) 48%,
                                rgba(248,244,239,.55) 68%,
                                rgba(248,244,239,.92) 86%,
                                #F8F4EF 100%
                            )`,
                        }}
                    />

                </div>

                {/* CONTENT */}
                <div
                    className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-end
                        px-6
                        pb-10
                    "
                >

                    {/* Wedding Of */}
                    <p className="uppercase tracking-[0.35em] text-[11px] text-muted">
                        The Wedding Of
                    </p>

                    {/* Couple */}
                    <h1
                        className="
                            mt-5
                            text-center
                            font-serif
                            text-[58px]
                            leading-[0.95]
                            text-heading
                        "
                    >
                        {groomName}

                        <br />

                        <span className="text-[34px]">
                            &
                        </span>

                        <br />

                        {brideName}
                    </h1>

                    {/* Date */}
                    <p
                        className="
                            mt-6
                            text-sm
                            tracking-[0.3em]
                            text-body
                        "
                    >
                        {date}
                    </p>

                    {/* Guest */}
                    <div
                        className="
                            mt-10
                            w-full
                            max-w-sm
                            rounded-[30px]
                            border
                            border-border
                            bg-white/55
                            px-6
                            py-6
                            text-center
                            shadow-xl
                            backdrop-blur-xl
                        "
                    >
                        <p
                            className="
                                uppercase
                                tracking-[0.28em]
                                text-[11px]
                                text-muted
                            "
                        >
                            Kepada Yth.
                        </p>

                        <p className="mt-2 text-body">
                            Bapak / Ibu / Saudara / i
                        </p>

                        <h2
                            className="
                                mt-4
                                font-serif
                                text-[30px]
                                italic
                                text-heading
                            "
                        >
                            {guestName}
                        </h2>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="button"
                        onClick={handleOpen}
                        className="
                            mt-8
                            h-14
                            w-full
                            max-w-sm
                            rounded-full
                            bg-primary
                            font-medium
                            text-white
                            shadow-[0_15px_35px_rgba(201,161,94,.28)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-primary-hover
                            active:scale-95
                        "
                    >
                        Buka Undangan
                    </button>

                </div>
            </section>
        </>
    );
}