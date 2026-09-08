"use client";

import BankCard from "./BankCard";
import QRCard from "./QRCard";

type Props = {
    gift: {
        banks: {
            bank: string;
            accountNumber: string;
            accountName: string;
        }[];

        qris: string;
    };
};

export default function WeddingGift({
    gift,
}: Props) {
    return (
        <section className="bg-background py-24">

            <div className="mx-auto max-w-5xl px-6">

                <p className="text-center uppercase tracking-[0.35em] text-xs text-muted">
                    Wedding Gift
                </p>

                <h2 className="mt-4 text-center font-serif text-5xl text-heading">
                    Send Your Love
                </h2>

                <div className="mt-16 grid gap-8 md:grid-cols-2">

                    <div className="space-y-6">
                        {gift.banks.map((bank) => (
                            <BankCard
                                key={bank.accountNumber}
                                {...bank}
                            />
                        ))}
                    </div>

                    <QRCard image={gift.qris} />

                </div>

            </div>

        </section>
    );
}