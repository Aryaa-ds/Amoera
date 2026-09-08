"use client";

type Story = {
    year: string;
    title: string;
    description: string;
};

type LoveStoryProps = {
    story: Story[];
};

export default function LoveStory({
    story,
}: LoveStoryProps) {
    return (
        <section className="bg-beige py-24">

            <div className="mx-auto max-w-xl px-6">

                <p className="text-center uppercase tracking-[0.35em] text-xs text-muted">
                    Our Journey
                </p>

                <h2 className="mt-3 text-center font-serif text-5xl text-heading">
                    Love Story
                </h2>

                <p className="mx-auto mt-5 max-w-sm text-center text-body">
                    Every love story is beautiful,
                    but ours is our favorite.
                </p>

                <div className="mt-20 space-y-14">

                    {story.map((item, index) => (
                        <div
                            key={index}
                            className="relative border-l border-primary/20 pl-8"
                        >
                            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary" />

                            <p className="text-sm tracking-[0.3em] text-primary">
                                {item.year}
                            </p>

                            <h3 className="mt-2 font-serif text-3xl text-heading">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-8 text-body">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}