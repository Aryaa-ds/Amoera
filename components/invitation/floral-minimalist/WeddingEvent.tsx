"use client";

type EventItem = {
    title: string;
    day: string;
    date: string;
    time: string;
    place: string;
    address: string;
};

type Props = {
    akad: EventItem;
    reception: EventItem;
};

function Card({ event }: { event: EventItem }) {
    return (
        <div
            className="
        rounded-[32px]
        border
        border-border
        bg-white/70
        backdrop-blur
        p-8
        shadow-xl
      "
        >
            <p className="uppercase tracking-[0.3em] text-xs text-primary">
                {event.title}
            </p>

            <h3 className="mt-5 font-serif text-4xl text-heading">
                {event.day}
            </h3>

            <p className="mt-2 text-body">
                {event.date}
            </p>

            <div className="mx-auto my-6 h-px w-16 bg-primary/30" />

            <p className="font-medium text-heading">
                {event.time}
            </p>

            <p className="mt-6 font-medium text-heading">
                {event.place}
            </p>

            <p className="mt-3 leading-7 text-body">
                {event.address}
            </p>

            <button
                className="
          mt-8
          h-12
          w-full
          rounded-full
          bg-primary
          text-white
          transition
          hover:bg-primary-hover
        "
            >
                Buka Maps
            </button>
        </div>
    );
}

export default function WeddingEvent({
    akad,
    reception,
}: Props) {
    return (
        <section className="bg-background py-24">

            <div className="mx-auto max-w-md px-6">

                <p className="text-center uppercase tracking-[0.35em] text-xs text-muted">
                    Save The Date
                </p>

                <h2 className="mt-3 text-center font-serif text-5xl text-heading">
                    Wedding Event
                </h2>

                <div className="mt-16 space-y-10">

                    <Card event={akad} />

                    <Card event={reception} />

                </div>

            </div>

        </section>
    );
}