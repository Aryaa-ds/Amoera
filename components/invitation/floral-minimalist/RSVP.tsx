"use client";

import { FormEvent, useEffect, useState } from "react";
import { notify } from "@/lib/toasts";
import type { RsvpItem } from "@/lib/db";

type Props = {
    slug?: string;
    guestName?: string;
};

export default function RSVP({ slug = "floral-minimalist", guestName }: Props) {
    const [name, setName] = useState(
        guestName && guestName !== "Tamu Undangan" ? guestName : ""
    );
    const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir" | "">("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [wishesList, setWishesList] = useState<RsvpItem[]>([]);
    const [loadingWishes, setLoadingWishes] = useState(true);

    // Fetch existing RSVPs from database
    useEffect(() => {
        async function fetchRsvps() {
            try {
                const res = await fetch(`/api/rsvp?slug=${encodeURIComponent(slug)}`);
                const json = await res.json();
                if (json.success && Array.isArray(json.data)) {
                    setWishesList(json.data);
                }
            } catch (err) {
                console.error("Gagal memuat ucapan:", err);
            } finally {
                setLoadingWishes(false);
            }
        }
        fetchRsvps();
    }, [slug]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim()) {
            notify.error("Nama wajib diisi.");
            return;
        }

        if (!attendance) {
            notify.error("Silakan pilih konfirmasi kehadiran.");
            return;
        }

        if (!message.trim()) {
            notify.error("Silakan tuliskan doa atau ucapan.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    slug,
                    name: name.trim(),
                    attendance,
                    wishes: message.trim(),
                }),
            });

            const json = await res.json();

            if (json.success && json.data) {
                notify.success("Doa dan konfirmasi kehadiran berhasil tersimpan!");
                setWishesList((prev) => [json.data, ...prev]);
                setMessage("");
            } else {
                notify.error(json.error || "Gagal menyimpan RSVP.");
            }
        } catch {
            notify.error("Terjadi kesalahan saat menyimpan data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-background px-6 py-24">
            <div className="mx-auto max-w-md">
                {/* Heading */}
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted">
                        RSVP &amp; Wishes
                    </p>

                    <h2 className="mt-4 font-serif text-5xl text-heading">
                        Konfirmasi &amp; Doa
                    </h2>

                    <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-body">
                        Konfirmasikan kehadiran dan sampaikan doa terbaik untuk kedua mempelai.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        mt-12
                        rounded-[32px]
                        border
                        border-border
                        bg-white/70
                        p-6
                        shadow-sm
                        backdrop-blur-xl
                    "
                >
                    {/* Nama */}
                    <div>
                        <label className="text-sm text-heading font-medium">
                            Nama Lengkap
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan nama Anda"
                            className="
                                mt-2
                                w-full
                                rounded-2xl
                                border
                                border-border
                                bg-white
                                px-4
                                py-3
                                text-body
                                outline-none
                                transition
                                focus:border-primary
                            "
                        />
                    </div>

                    {/* Kehadiran */}
                    <div className="mt-6">
                        <label className="text-sm text-heading font-medium">
                            Konfirmasi Kehadiran
                        </label>

                        <div className="mt-3 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setAttendance("hadir")}
                                className={`
                                    rounded-2xl
                                    border
                                    px-4
                                    py-3
                                    font-medium
                                    transition
                                    cursor-pointer
                                    ${
                                        attendance === "hadir"
                                            ? "border-primary bg-primary text-white"
                                            : "border-border bg-white text-body hover:border-primary/50"
                                    }
                                `}
                            >
                                Hadir
                            </button>

                            <button
                                type="button"
                                onClick={() => setAttendance("tidak_hadir")}
                                className={`
                                    rounded-2xl
                                    border
                                    px-4
                                    py-3
                                    font-medium
                                    transition
                                    cursor-pointer
                                    ${
                                        attendance === "tidak_hadir"
                                            ? "border-primary bg-primary text-white"
                                            : "border-border bg-white text-body hover:border-primary/50"
                                    }
                                `}
                            >
                                Tidak Hadir
                            </button>
                        </div>
                    </div>

                    {/* Doa / Ucapan */}
                    <div className="mt-6">
                        <label className="text-sm text-heading font-medium">
                            Doa &amp; Ucapan
                        </label>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tuliskan doa dan ucapan terbaik Anda..."
                            rows={4}
                            className="
                                mt-2
                                w-full
                                resize-none
                                rounded-2xl
                                border
                                border-border
                                bg-white
                                px-4
                                py-3
                                text-body
                                outline-none
                                transition
                                focus:border-primary
                            "
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            mt-6
                            w-full
                            rounded-full
                            bg-primary
                            py-4
                            font-medium
                            text-white
                            transition
                            hover:bg-primary-hover
                            active:scale-[0.98]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            cursor-pointer
                            shadow-button
                        "
                    >
                        {loading ? "Menyimpan ke Database..." : "Kirim Doa & Konfirmasi"}
                    </button>
                </form>

                {/* Wishes Feed (Buku Tamu Tersimpan di Database) */}
                <div className="mt-12">
                    <h3 className="text-center font-serif text-2xl text-heading">
                        Ucapan &amp; Doa ({wishesList.length})
                    </h3>

                    <div className="mt-6 max-h-[350px] space-y-3 overflow-y-auto pr-1">
                        {loadingWishes ? (
                            <p className="text-center text-xs text-muted py-4">
                                Memuat doa & ucapan...
                            </p>
                        ) : wishesList.length === 0 ? (
                            <p className="text-center text-xs text-muted py-4">
                                Belum ada ucapan. Jadilah yang pertama memberikan doa!
                            </p>
                        ) : (
                            wishesList.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-2xl border border-border bg-white/80 p-4 shadow-sm"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="font-semibold text-sm text-heading truncate">
                                            {item.name}
                                        </h4>
                                        <span
                                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                                                item.attendance === "hadir"
                                                    ? "bg-green-50 text-green-700 border border-green-200"
                                                    : "bg-gray-100 text-gray-600 border border-gray-200"
                                            }`}
                                        >
                                            {item.attendance === "hadir"
                                                ? "Hadir"
                                                : "Tidak Hadir"}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-xs leading-relaxed text-body break-words">
                                        {item.wishes}
                                    </p>
                                    <p className="mt-2 text-[10px] text-muted">
                                        {new Date(item.createdAt).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
