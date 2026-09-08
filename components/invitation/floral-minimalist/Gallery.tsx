"use client";

import { useState } from "react";
import GalleryItem from "@/components/invitation/floral-minimalist/GalleryItem";
import GalleryLightbox from "@/components/invitation/floral-minimalist/GalleryLightbox";

type GalleryProps = {
    images: string[];
};

export default function Gallery({
    images,
}: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background">

            <div className="mx-auto max-w-6xl px-6">

                <p className="text-center uppercase tracking-[0.35em] text-xs text-muted">
                    Gallery
                </p>

                <h2 className="mt-4 text-center font-serif text-5xl text-heading">
                    Captured Moments
                </h2>

                <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">

                    {images.map((image, index) => (
                        <GalleryItem
                            key={index}
                            image={image}
                            onClick={() => setSelectedIndex(index)}
                        />
                    ))}

                </div>

            </div>

            <GalleryLightbox
                images={images}
                selectedIndex={selectedIndex}
                onClose={() => setSelectedIndex(null)}
                onPrev={() =>
                    setSelectedIndex((prev) =>
                        prev === null
                            ? null
                            : (prev - 1 + images.length) % images.length
                    )
                }
                onNext={() =>
                    setSelectedIndex((prev) =>
                        prev === null
                            ? null
                            : (prev + 1) % images.length
                    )
                }
            />

        </section>
    );
}