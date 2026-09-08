"use client";

import Image from "next/image";

type Props = {
    brideName: string;
    groomName: string;
    date: string;
    coverImage: string;
    weddingDate: string;
};

export default function Hero({
    brideName,
    groomName,
    date,
    coverImage,
    weddingDate,
}: Props) {
    const saveToGoogleCalendar = () => {
        const start = weddingDate.replace(/[-:]/g, "").split(".")[0];
        const endDate = new Date(weddingDate);

        // Acara berlangsung 2 jam
        endDate.setHours(endDate.getHours() + 2);

        const end = endDate
            .toISOString()
            .replace(/[-:]/g, "")
            .split(".")[0];

        const title = encodeURIComponent(
            `The Wedding of ${brideName} & ${groomName}`
        );

        const details = encodeURIComponent(
            `Pernikahan ${brideName} & ${groomName}`
        );

        const location = encodeURIComponent(
            "Pekalongan"
        );

        const url =
            `https://calendar.google.com/calendar/render?action=TEMPLATE` +
            `&text=${title}` +
            `&dates=${start}/${end}` +
            `&details=${details}` +
            `&location=${location}`;

        window.open(url, "_blank");
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-background">

            {/* Paper Texture */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage:
                        "url('/images/backgrounds/paperTexture.png')",
                }}
            />

            {/* Floral Background */}
            <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 opacity-[0.10]">
                <Image
                    src="/images/templates/floral-minimalist/flower/bottom-left-corner.png"
                    alt="bunga"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rotate-180 opacity-[0.10]">
                <Image
                    src="/images/backgrounds/floral-corner.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center px-6 py-10 text-center">

                {/* Photo */}
                <div className="relative mt-4 h-[420px] w-[290px]">

                    {/* Soft background */}
                    <div className="absolute inset-5 rounded-t-[150px] bg-champagne/30 blur-2xl" />

                    {/* Photo */}
                    <div className="absolute inset-[7px] overflow-hidden rounded-t-[145px] bg-beige">

                        <Image
                            src={coverImage}
                            alt={`${brideName} & ${groomName}`}
                            fill
                            priority
                            className="object-cover"
                        />

                        {/* Soft fade */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
                    </div>

                    {/* Gold Arch */}
                    <div className="absolute inset-0 rounded-t-[152px] border border-primary/50" />

                    {/* Outer line */}
                    <div className="absolute -inset-2 rounded-t-[158px] border border-primary/15" />
                </div>

                {/* Title */}
                <div className="mt-8">

                    <p className="text-[11px] tracking-[0.4em] text-text-secondary">
                        THE WEDDING OF
                    </p>

                    <h1 className="mt-4 font-serif text-4xl text-text">
                        {brideName}

                        <span className="m-2 font-serif text-xl italic text-primary">
                            &
                        </span>
                        {groomName}
                    </h1>

                </div>

                {/* Date */}
                <div className="mt-5 flex items-center gap-3">

                    <span className="h-px w-8 bg-primary-light" />

                    <p className="text-sm tracking-wide text-text-secondary">
                        {date}
                    </p>

                    <span className="h-px w-8 bg-primary-light" />

                </div>

                {/* Save The Date */}
                <button
                    onClick={saveToGoogleCalendar}
                    className="
                        mt-7
                        rounded-full
                        bg-primary
                        px-7
                        py-3
                        font-serif
                        text-sm
                        italic
                        text-white
                        shadow-button
                        transition
                        hover:bg-primary-hover
                        active:scale-95
                    "
                >
                    Save The Date
                </button>

            </div>
        </section>
    );
}