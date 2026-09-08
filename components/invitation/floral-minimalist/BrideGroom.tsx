"use client";

import Image from "next/image";

type BrideGroomProps = {
  bride: {
    name: string;
    fullname: string;
    father: string;
    mother: string;
    image: string;
  };

  groom: {
    name: string;
    fullname: string;
    father: string;
    mother: string;
    image: string;
  };
};

function Person({
  title,
  person,
  flowerLeft,
  flowerRight,
}: {
  title: string;
  person: BrideGroomProps["bride"];
  flowerLeft: string;
  flowerRight: string;
}) {
  return (
    
    <div className="relative mt-16">

      {/* Arch */}
      <div className="relative mx-auto h-[360px] w-[280px]">
        {/* Floral */}
        <Image
          src={flowerLeft}
          alt=""
          width={140}
          height={140}
          className="absolute -left-6 top-10 opacity-90 pointer-events-none"
        />

        <Image
          src={flowerRight}
          alt=""
          width={120}
          height={120}
          className="z-10 absolute -right-4 bottom-0 opacity-100 pointer-events-none"
        />
        {/* FOTO */}
        <div className="absolute inset-[12px_8px_25px_8px] overflow-hidden rounded-t-[135px]">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* FRAME PNG */}
        <Image
          src="/images/templates/floral-minimalist/frame/frame.png"
          alt="frame"
          fill
          className="pointer-events-none object-contain"
        />
      </div>

      <h3 className="mt-8 font-serif text-5xl text-heading">
        {person.fullname}
      </h3>

      <div className="mx-auto mt-3 h-px w-16 bg-primary/40" />



      <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted">
        {title}
      </p>

      <p className="mt-2 font-medium text-body">
        {person.father}
      </p>

      <p className="text-body">
        & {person.mother}
      </p>

    </div>
  );
}

export default function BrideGroom({
  bride,
  groom,
}: BrideGroomProps) {

  return (
  
    <section className="relative overflow-hidden bg-surface py-24">

      {/* Watermark */}
      <Image
        src="/images/templates/floral-minimalist/background/floral-watermark.png"
        alt=""
        fill
        className="object-cover opacity-[0.04] pointer-events-none"
      />

      <div className="relative mx-auto max-w-md px-6 text-center">

        <h2 className="mt-4 font-serif text-3xl text-primary">
          Assalamu&apos;alaikum Wr. Wb
        </h2>

        <p className="text-sm text-muted">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami.
        </p>

        <Person
          title="Putra dari"
          person={groom}
          flowerLeft="/images/templates/floral-minimalist/flower/left.svg"
          flowerRight="/images/templates/floral-minimalist/flower/right.svg"
        />

        <div className="my-20 flex items-center justify-center">

          <div className="h-px w-20 bg-primary/30" />

          <span className="mx-6 font-serif text-5xl text-primary">
            &
          </span>

          <div className="h-px w-20 bg-primary/30" />

        </div>

        <Person
          title="Putri dari"
          person={bride}
          flowerLeft="/images/templates/floral-minimalist/flower/left.svg"
          flowerRight="/images/templates/floral-minimalist/flower/right.svg"
        />

      </div>

    </section>
  
  );
}
