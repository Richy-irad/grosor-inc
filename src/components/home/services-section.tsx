import Button from "../button";
import Service from "../projects/service";
import Header from "../header";
import { getTranslatedServices } from "@/lib/translations/services/services";
import { StaticImageData } from "next/image";
import { Key } from "react";

type ServicesProps = {
  header: string;
  hook: string;
  buttonText: string;
  lang: string;
  ctaHref: string;
};

export default async function ServicesSection({
  header,
  hook,
  buttonText,
  lang,
  ctaHref,
}: ServicesProps) {
  const services = await getTranslatedServices(lang);
  return (
    <div className="flex flex-col gap-8 items-center py-10 md:py-20 bg-light-200 w-full">
      <Header header={header} hook={hook} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {services.map(
          (
            service: {
              name: string;
              background: StaticImageData;
              description: string;
            },
            index: Key | null | undefined
          ) => (
            <Service key={index} service={service} />
          )
        )}
      </div>

      <Button type="primary" href={ctaHref} buttonText={buttonText} />
    </div>
  );
}
