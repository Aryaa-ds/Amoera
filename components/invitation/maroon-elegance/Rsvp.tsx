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

export function Rsvp({ slug = "maroon-elegance", guestName }: Props) {
  const [name, setName] = useState(
    guestName && guestName !== "Tamu Undangan" ? guestName : ""
  );
  const [attend, setAttend] = useState<"hadir" | "tidak" | null>(null);
  const [wish, setWish] = useState("");
  const [loading, setLoading] = useState(false);
  const [wishesList, setWishesList] = useState<RsvpItem[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);

  const options = [
    { key: "hadir", label: "Hadir" },
    { key: "tidak", label: "Tidak Hadir" },
  ] as const;

  // Load existing RSVPs from database
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
    if (!name.trim()) {
      notify.error("Nama wajib diisi.");
      return;
    }
    if (!attend) {
      notify.error("Silakan pilih konfirmasi kehadiran.");
      return;
    }
    if (!wish.trim()) {
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
    <section className="relative overflow-hidden bg-[#4A0E17] px-6 py-24 text-[#FAF6F0] sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,106,0.12)_0,transparent_70%)]" />
      <div className="relative mx-auto max-w-md">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl tracking-[0.1em] text-[#FAF6F0] sm:text-4xl">RSVP</h2>
          <Divider className="mt-6" width="w-20" />
          <p className="mt-6 text-xs leading-relaxed text-[#FAF6F0]/75">
            Mohon konfirmasi kehadiran Anda untuk kenyamanan bersama.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center bg-[#380b12]/50 p-6 rounded-2xl border border-[#E8D5B5]/20 backdrop-blur-sm"
          >
            <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] mb-2 self-start text-[#E8D5B5]/80 font-medium">
              Nama Lengkap
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tuliskan nama Anda..."
              className="mb-8 w-full border-b border-[#FAF6F0]/25 bg-transparent pb-2 font-serif text-base text-[#FAF6F0] placeholder:font-sans placeholder:text-xs placeholder:text-[#FAF6F0]/40 focus:border-[#E8D5B5] focus:outline-none"
            />

            <label className="text-xs uppercase tracking-[0.2em] mb-3 self-start text-[#E8D5B5]/80 font-medium">
              Konfirmasi Kehadiran
            </label>
            <div className="grid w-full grid-cols-2 gap-3 mb-8">
              {options.map((o) => (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setAttend(o.key)}
                  aria-pressed={attend === o.key}
                  className={`text-xs uppercase tracking-[0.15em] border py-3 rounded-xl transition-all cursor-pointer ${
                    attend === o.key
                      ? "border-[#E8D5B5] bg-[#E8D5B5]/20 text-[#E8D5B5] font-semibold"
                      : "border-[#FAF6F0]/25 text-[#FAF6F0]/70 hover:border-[#FAF6F0]/50"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>

            <label htmlFor="wish" className="text-xs uppercase tracking-[0.2em] self-start text-[#E8D5B5]/80 font-medium">
              Doa &amp; Ucapan
            </label>
            <textarea
              id="wish"
              rows={3}
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="Tuliskan doa & ucapan terbaik Anda..."
              className="mt-2 w-full resize-none border-b border-[#FAF6F0]/25 bg-transparent pb-2 font-serif text-base text-[#FAF6F0] placeholder:font-sans placeholder:text-xs placeholder:text-[#FAF6F0]/40 focus:border-[#E8D5B5] focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading || !attend || !name.trim()}
              className="mt-8 w-full border border-[#E8D5B5]/50 py-3.5 text-xs uppercase tracking-[0.2em] text-[#E8D5B5] rounded-full transition-all hover:bg-[#E8D5B5] hover:text-[#4A0E17] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer font-semibold shadow-sm"
            >
              {loading ? "Menyimpan..." : "Kirim Konfirmasi"}
            </button>
          </form>
        </Reveal>

        {/* Wishes Feed */}
        <div className="mt-12">
          <h3 className="text-center font-serif text-2xl text-[#FAF6F0]">
            Ucapan &amp; Doa ({wishesList.length})
          </h3>

          <div className="mt-6 max-h-[350px] space-y-3 overflow-y-auto pr-1">
            {loadingWishes ? (
              <p className="text-center text-xs text-[#FAF6F0]/60 py-4">
                Memuat doa &amp; ucapan...
              </p>
            ) : wishesList.length === 0 ? (
              <p className="text-center text-xs text-[#FAF6F0]/60 py-4">
                Belum ada ucapan. Jadilah yang pertama memberikan doa!
              </p>
            ) : (
              wishesList.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#E8D5B5]/20 bg-[#380b12]/60 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif font-medium text-sm text-[#E8D5B5] truncate">
                      {item.name}
                    </h4>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium border ${
                        item.attendance === "hadir"
                          ? "border-[#E8D5B5]/50 text-[#E8D5B5] bg-[#E8D5B5]/10"
                          : "border-white/20 text-white/60 bg-white/5"
                      }`}
                    >
                      {item.attendance === "hadir"
                        ? "Hadir"
                        : "Tidak Hadir"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#FAF6F0]/85 break-words">
                    {item.wishes}
                  </p>
                  <p className="mt-2 text-[10px] text-[#FAF6F0]/50">
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
