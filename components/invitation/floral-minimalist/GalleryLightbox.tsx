"use client";

import Image from "next/image";

type Props = {
    images: string[];
    selectedIndex: number | null;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
};

export default function GalleryLightbox({
    images,
    selectedIndex,
    onClose,
    onPrev,
    onNext,
}: Props) {
    if (selectedIndex === null) return null;

    return (
        <div
            className="
        fixed
        inset-0
        z-[9999]
        bg-black/80
        flex
        items-center
        justify-center
      "
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-4xl"
            >
                ×
            </button>

            <button
                onClick={onPrev}
                className="absolute left-6 text-white text-5xl"
            >
                ‹
            </button>

            <div className="relative h-[80vh] w-[90vw] max-w-5xl">

                <Image
                    src={images[selectedIndex]}
                    alt=""
                    fill
                    className="object-contain"
                />

            </div>

            <button
                onClick={onNext}
                className="absolute right-6 text-white text-5xl"
            >
                ›
            </button>
        </div>
    );
}