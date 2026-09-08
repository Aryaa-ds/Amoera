import Navbar from "@/components/layout/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import TemplateSection from "@/components/landing/template";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <TemplateSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}