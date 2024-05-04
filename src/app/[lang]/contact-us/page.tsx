import ContactSection from "@/components/home/contact-section";
import { getHomeTranslateedContent } from "@/lib/translations/home/content";
import { LangParams } from "@/lib/types";

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
