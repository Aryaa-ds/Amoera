import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
        <div>
          <h2 className="text-xl font-serif font-bold tracking-wider text-foreground">
            AMOERA
          </h2>
          <p className="mt-1 text-xs text-text-muted">
            Premium Digital Wedding Invitation Platform
          </p>
        </div>

        <div className="flex gap-6 text-xs text-text-secondary">
          <Link href="/katalog" className="hover:text-primary transition">
            Katalog
          </Link>
          <Link href="/kontak" className="hover:text-primary transition">
            Kontak
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition"
          >
            WhatsApp
          </a>
        </div>

        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} AMOERA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
