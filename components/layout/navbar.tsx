import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-foreground">
          AMOERA
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="/" className="hover:text-primary transition">
            Beranda
          </Link>
          <Link href="/katalog" className="hover:text-primary transition">
            Katalog
          </Link>
          <Link href="/kontak" className="hover:text-primary transition">
            Kontak
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/katalog"
            className="rounded-full bg-primary px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-button transition hover:bg-primary-hover active:scale-95"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}