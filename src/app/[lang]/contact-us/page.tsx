import ContactSection from "@/components/home/contact-section";
import { getHomeTranslateedContent } from "@/lib/translations/home/content";

type Params = {
  lang: string;
};

export default async function ContactUs({ params }: { params: Params }) {
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
