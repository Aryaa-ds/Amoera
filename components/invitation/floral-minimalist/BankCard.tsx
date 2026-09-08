"use client";

import { notify } from "@/lib/toasts";

type Props = {
    bank: string;
    accountNumber: string;
    accountName: string;
};

export default function BankCard({
    bank,
    accountNumber,
    accountName,
}: Props) {

    const handleCopy = async () => {
        try {
            // Cara utama
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(accountNumber);
            } else {
                // Fallback untuk browser yang tidak mendukung Clipboard API
                const textarea = document.createElement("textarea");

                textarea.value = accountNumber;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";

                document.body.appendChild(textarea);

                textarea.focus();
                textarea.select();

                document.execCommand("copy");

                document.body.removeChild(textarea);
            }

            notify.copied("Nomor rekening berhasil disalin.");
        } catch (error) {
            console.error("Copy gagal:", error);

            notify.error("Gagal menyalin nomor rekening.");
        }
    };

    return (
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">

            <h3 className="font-serif text-3xl text-heading">
                {bank}
            </h3>

            <p className="mt-5 text-2xl tracking-widest text-body">
                {accountNumber}
            </p>

            <p className="mt-2 text-muted">
                {accountName}
            </p>

            <button
                type="button"
                onClick={handleCopy}
                className="
                    mt-6
                    rounded-full
                    bg-primary
                    px-6
                    py-3
                    text-white
                    transition
                    hover:bg-primary-hover
                    active:scale-95
                "
            >
                Copy Rekening
            </button>

        </div>
    );
}