import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* hero */}
      <HeroSection />

      {/* about */}
      <AboutSection />

      {/* services */}
      <ServicesSection />

      {/* portfolio */}

      <PortfolioSection />

      {/* contact us */}
      <ContactSection />
    </main>
  );
}
