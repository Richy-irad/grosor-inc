import type { Metadata, ResolvingMetadata } from "next";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import PortfolioSection from "@/components/home/portfolio-section";
import ContactSection from "@/components/home/contact-section";
import { getHomeTranslateedContent } from "@/lib/translations/home/content";
import { LangParams } from "@/lib/types";

export async function generateMetadata(
  { params }: { params: LangParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params;

  if (lang === "en") {
    return {
      title: "Grosor Inc",
      description: "Where skilled Craftsmanship Begins",
    };
  }

  return {
    title: "Grosor Inc",
    description: "Transformez votre espace avec des experts en rénovation",
  };
}

export default async function Home({ params }: { params: LangParams }) {
  const { lang } = params;

  const { hero, about, services, portfolio, contact_us } =
    await getHomeTranslateedContent(lang);

  return (
    <main className="w-full h-full">
      {/* hero */}
      <HeroSection
        header={hero.header}
        hook={hero.hook}
        tagline={hero.tagline}
        buttonText={hero.buttonText}
        ctaHref={hero.ctaHref}
      />

      {/* about */}
      <AboutSection
        header={about.header}
        hook={about.hook}
        paragraph_1={about.paragraph_1}
        paragraph_2={about.paragraph_2}
      />

      {/* services */}
      <ServicesSection
        header={services.header}
        hook={services.hook}
        buttonText={services.buttonText}
        lang={lang}
        ctaHref={services.ctaHref}
      />

      {/* portfolio */}

      <PortfolioSection
        header={portfolio.header}
        hook={portfolio.hook}
        buttonText={portfolio.buttonText}
        lang={lang}
        ctaHref={portfolio.ctaHref}
      />

      {/* contact us */}
      <ContactSection
        header={contact_us.header}
        hook={contact_us.hook}
        lang={lang}
      />
    </main>
  );
}
