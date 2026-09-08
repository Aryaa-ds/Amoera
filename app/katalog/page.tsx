import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import TemplateSection from "@/components/landing/template";

export default function KatalogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="pt-16 pb-6 text-center">
          <h1 className="text-4xl font-serif text-foreground sm:text-5xl">Katalog Undangan</h1>
          <p className="mt-3 text-text-secondary max-w-md mx-auto text-sm">
            Pilihan desain undangan digital premium dengan pengalaman eksklusif untuk hari istimewa Anda.
          </p>
        </div>
        <TemplateSection />
      </main>
      <Footer />
    </>
  );
}
