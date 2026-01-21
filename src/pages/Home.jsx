import BrandLogos from "@/components/BrandLogos";
import FAQ from "@/components/FAQ";
import FigmaFeatures from "@/components/FigmaFeatures";
import Footer from "@/components/Footer";
import FramerSection from "@/components/FramerSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <Hero />
      <BrandLogos />
      <FigmaFeatures />
      <FramerSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
