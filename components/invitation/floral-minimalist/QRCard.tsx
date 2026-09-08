"use client";

import Image from "next/image";

export default function QRCard({
    image,
}: {
    image: string;
}) {
    return (
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">

            <Image
                src={image}
                alt="QRIS"
                width={240}
                height={240}
                className="mx-auto rounded-2xl"
            />

            <p className="mt-5 text-center text-muted">
                Scan QRIS
            </p>

        </div>
    );
}