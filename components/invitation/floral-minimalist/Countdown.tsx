"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
    targetDate: string;
};

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function calculateTimeLeft(targetDate: string): TimeLeft {
    const difference =
        new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
}

export default function Countdown({
    targetDate,
}: CountdownProps) {
    const [time, setTime] = useState(() => calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="bg-background py-24">

            <div className="mx-auto max-w-5xl px-6 text-center">

        

                <h2 className="mt-3 font-serif text-5xl text-heading">
                    Countdown
                </h2>

                <p className="mt-5 text-body">
                    We can&apos;t wait to celebrate with you.
                </p>

                <div className="mt-16 grid grid-cols-4 gap-2 text-xs md:grid-cols-4 md:text-base">

                    <Box value={time.days} label="Days" />
                    <Box value={time.hours} label="Hours" />
                    <Box value={time.minutes} label="Minutes" />
                    <Box value={time.seconds} label="Seconds" />

                </div>

            </div>

        </section>
    );
}

function Box({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div
            className="
        rounded-[20px]
        border
        border-border
        bg-white
        sm:py-5
        py-10
        shadow-lg
      "
        >
            <h3 className="font-serif text-2xl md:text-5xl text-heading">
                {String(value).padStart(2, "0")}
            </h3>

            <p className="mt-3 uppercase text-xs text-muted">
                {label}
            </p>
        </div>
    );
}
