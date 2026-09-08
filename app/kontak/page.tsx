import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-serif text-foreground mb-4 sm:text-4xl">Hubungi Kami</h1>
        <p className="text-text-secondary max-w-md text-sm mb-8">
          Punya pertanyaan seputar pembuatan undangan digital pernikahan Anda? Tim AMOERA siap membantu Anda setiap hari.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover shadow-button"
        >
          Chat via WhatsApp
        </a>
      </main>
      <Footer />
    </>
  );
}
