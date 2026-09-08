"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    children: React.ReactNode;
    className?: string;
    animation?: "up" | "left" | "right" | "scale" | "fade";
};

export default function Reveal({
    children,
    className = "",
    animation = "up",
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const element = ref.current;

        if (!element) return;

        const ctx = gsap.context(() => {
            let fromVars: gsap.TweenVars = {
                opacity: 0,
                y: 50,
            };

            if (animation === "left") {
                fromVars = {
                    opacity: 0,
                    x: -60,
                };
            }

            if (animation === "right") {
                fromVars = {
                    opacity: 0,
                    x: 60,
                };
            }

            if (animation === "scale") {
                fromVars = {
                    opacity: 0,
                    scale: 0.92,
                };
            }

            if (animation === "fade") {
                fromVars = {
                    opacity: 0,
                };
            }

            // Animasi isi section
            gsap.fromTo(
                element,
                fromVars,
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // Animasi bunga
            const flowers =
                element.querySelectorAll(".amoera-flower");

            flowers.forEach((flower) => {
                gsap.to(flower, {
                    y: 12,
                    x: 4,
                    rotation: 2,
                    duration: 4,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });
            });
        }, ref);

        return () => ctx.revert();
    }, [animation]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}