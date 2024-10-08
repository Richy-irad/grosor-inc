import type { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";
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
      title: "Contact us",
      description: "Get in Touch with us. Bringing Your Project to Life Is Simpler Than You Think!",
    };
  }

  return {
    title: "Contactez-nous",
    description:
      "Contactez-nous. La réalisation de votre projet est plus simple que vous le pensez!",
  };
}

export default async function ContactUs({ params }: { params: LangParams }) {
  const { contact_us } = await getHomeTranslateedContent(params.lang);
  return (
    <main className="h-full">
      <ContactSection
        header={contact_us.header}
        hook={contact_us.hook}
        lang={params.lang}
      />
    </main>
  );
}
