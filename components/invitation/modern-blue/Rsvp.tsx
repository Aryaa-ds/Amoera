"use client";

import { useEffect, useState } from "react";
import { notify } from "@/lib/toasts";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";
import type { RsvpItem } from "@/lib/db";

type Props = {
  slug?: string;
  guestName?: string;
};

/**
 * RSVP + ucapan: form konfirmasi kehadiran lalu daftar ucapan yang
 * sudah masuk. Menyimpan ke /api/rsvp (sama seperti tema lain).
 */
export function Rsvp({ slug = "modern-blue", guestName }: Props) {
  const [name, setName] = useState(
    guestName && guestName !== "Tamu Undangan" ? guestName : "",
  );
  const [attend, setAttend] = useState<"hadir" | "tidak" | null>(null);
  const [wish, setWish] = useState("");
  const [loading, setLoading] = useState(false);
  const [wishesList, setWishesList] = useState<RsvpItem[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return notify.error("Nama wajib diisi.");
    if (!attend) return notify.error("Silakan pilih konfirmasi kehadiran.");
    if (!wish.trim()) return notify.error("Silakan tuliskan doa atau ucapan.");

    setLoading(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          name: name.trim(),
          attendance: attend === "hadir" ? "hadir" : "tidak_hadir",
          wishes: wish.trim(),
        }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        notify.success("Konfirmasi kehadiran Anda telah tersimpan. Terima kasih!");
        setWishesList((prev) => [json.data, ...prev]);
        setWish("");
      } else {
        notify.error(json.error || "Gagal menyimpan konfirmasi.");
      }
    } catch {
      notify.error("Terjadi kesalahan saat menyimpan konfirmasi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#1E3A5F] px-6 py-16 text-[#FDF8F1]">
      <Reveal className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#A9C6DE]">
          RSVP
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold">
          Konfirmasi Kehadiran
        </h2>
        <Divider className="mt-5" />
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/70">
          Mohon konfirmasi kehadiran Anda untuk kenyamanan bersama.
        </p>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-8 max-w-md">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
        >
          <label htmlFor="mb-name" className="text-[11px] uppercase tracking-[0.2em] text-[#A9C6DE]">
            Nama Lengkap
          </label>
          <input
            id="mb-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tuliskan nama Anda..."
            className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#A9C6DE] focus:outline-none"
          />

          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#A9C6DE]">
            Konfirmasi Kehadiran
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {(
              [
                { key: "hadir", label: "Hadir" },
                { key: "tidak", label: "Tidak Hadir" },
              ] as const
            ).map((o) => (
              <button
                key={o.key}
                type="button"
                onClick={() => setAttend(o.key)}
                aria-pressed={attend === o.key}
                className={`cursor-pointer rounded-xl border py-3 text-xs font-medium uppercase tracking-[0.15em] transition ${
                  attend === o.key
                    ? "border-[#A9C6DE] bg-[#A9C6DE]/25 text-white"
                    : "border-white/20 text-white/70 hover:border-white/50"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <label htmlFor="mb-wish" className="mt-6 block text-[11px] uppercase tracking-[0.2em] text-[#A9C6DE]">
            Doa &amp; Ucapan
          </label>
          <textarea
            id="mb-wish"
            rows={3}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="Tuliskan doa & ucapan terbaik Anda..."
            className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#A9C6DE] focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading || !attend || !name.trim()}
            className="mt-6 w-full cursor-pointer rounded-full bg-white py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A5F] transition hover:bg-[#DCE9F7] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "Menyimpan..." : "Kirim Konfirmasi"}
          </button>
        </form>
      </Reveal>

      <div className="mx-auto mt-12 max-w-md">
        <h3 className="text-center font-display text-2xl font-semibold">
          Ucapan &amp; Doa ({wishesList.length})
        </h3>
        <div className="mt-6 max-h-[350px] space-y-3 overflow-y-auto pr-1">
          {loadingWishes ? (
            <p className="py-4 text-center text-xs text-white/60">
              Memuat doa &amp; ucapan...
            </p>
          ) : wishesList.length === 0 ? (
            <p className="py-4 text-center text-xs text-white/60">
              Belum ada ucapan. Jadilah yang pertama memberikan doa!
            </p>
          ) : (
            wishesList.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="truncate text-sm font-medium text-white">
                    {item.name}
                  </h4>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                      item.attendance === "hadir"
                        ? "border-[#A9C6DE]/60 bg-[#A9C6DE]/15 text-[#DCE9F7]"
                        : "border-white/20 bg-white/5 text-white/60"
                    }`}
                  >
                    {item.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/85 break-words">
                  {item.wishes}
                </p>
                <p className="mt-2 text-[10px] text-white/50">
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
    </section>
  );
}
