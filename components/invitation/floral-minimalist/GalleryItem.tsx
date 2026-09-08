"use client";

import Image from "next/image";

type Props = {
    image: string;
    onClick: () => void;
};

export default function GalleryItem({
    image,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="
        group
        relative
        aspect-[4/5]
        overflow-hidden
        rounded-3xl
      "
        >
            <Image
                src={image}
                alt=""
                fill
                className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
            />
        </button>
    );
}