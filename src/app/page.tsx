import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import AboutSection from "@/components/sections/AboutSection";
import ProductsOverview from "@/components/sections/ProductsOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "IPI DIGITAL — Platform Trading & Investasi Terdepan Indonesia",
  description:
    "Bergabung dengan 5.000+ trader sukses Indonesia. Sinyal trading akurat berbasis AI, edukasi terlengkap, dan bot trading otomatis 24/7.",
};

export default function HomePage() {
  return (
    <div className="bg-[#06060f]">
      <Hero />
      <ValueProposition />
      <AboutSection />
      <ProductsOverview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
