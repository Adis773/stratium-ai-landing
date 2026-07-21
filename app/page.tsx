import { LanguageProvider } from "@/components/landing/language-provider";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AsciiScene } from "@/components/landing/ascii-scene";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <section className="relative w-full h-[400px] overflow-hidden bg-black border-t border-b border-white/5">
          <AsciiScene />
        </section>
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
        <FooterSection />
      </main>
    </LanguageProvider>
  );
}
