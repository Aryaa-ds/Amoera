"use client";

import Image from "next/image";

export default function QuranVerse() {
    return (
        <section className="relative opacity-85 overflow-hidden bg-[url(/images/templates/floral-minimalist/background/shadow.png)] py-28">

            {/* Background Floral */}
            <Image
                src="/images/templates/floral-minimalist/floral-divider.png"
                alt=""
                width={220}
                height={220}
                className="absolute left-0 top-0 opacity-20 pointer-events-none"
            />

            <Image
                src="/images/templates/floral-minimalist/floral-divider.png"
                alt=""
                width={220}
                height={220}
                className="absolute bottom-0 right-0 rotate-180 opacity-20 pointer-events-none"
            />

            <div className="relative mx-auto max-w-3xl px-6 text-center">

                {/* Divider */}
                <div className="mb-10 flex items-center justify-center gap-4">
                    <div className="h-px w-14 bg-primary/30" />
                    <span className="text-primary text-xl">❦</span>
                    <div className="h-px w-14 bg-primary/30" />
                </div>



                {/* Translation */}
                <p
                    className="
            mx-auto
            mt-10
            max-w-2xl
            text-[16px]
            leading-8
            italic
            text-body
          "
                >
                    &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu merasa tenteram kepadanya, dan Dia menjadikan di
                    antaramu rasa kasih dan sayang.&quot;
                </p>

                <p
                    className="
            mt-5
            uppercase
            tracking-[0.35em]
            text-xs
            text-primary
          "
                >
                    QS. Ar-Rum : 21
                </p>

                {/* Divider */}
                <div className="mt-12 flex items-center justify-center gap-4">
                    <div className="h-px w-14 bg-primary/30" />
                    <span className="text-primary text-xl">❦</span>
                    <div className="h-px w-14 bg-primary/30" />
                </div>

            </div>

        </section>
    );
}
