import Button from "../button";
import Project from "../projects/project";
import Header from "../header";
import { getTranslatedProjects } from "@/lib/translations/projects/projects";
import { StaticImageData } from "next/image";
import { Key } from "react";

type PortfolioProps = {
  header: string;
  hook: string;
  buttonText: string;
  lang: string;
  ctaHref: string;
};

export default async function PortfolioSection({
  header,
  hook,
  buttonText,
  lang,
  ctaHref,
}: PortfolioProps) {
  let featuredHeader = "";
  const projects = await getTranslatedProjects(lang);

  const featuredProjects = projects.slice(0, 6);

  if (lang === "en") {
    featuredHeader = "featured project";
  } else {
    featuredHeader = "projet en vedette";
  }
  return (
    <div className="flex flex-col gap-8 items-center py-10 md:py-20 w-full">
      <Header header={header} hook={hook} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {featuredProjects.map(
          (
            project: {
              title: string;
              thumbnail: StaticImageData;
              gallery: StaticImageData[];
              tags: string[];
            },
            index: Key | null | undefined
          ) => (
            <Project
              key={index}
              project={project}
              featured={true}
              featuredHeader={featuredHeader}
              lang={lang}
            />
          )
        )}
      </div>

      <Button type="primary" href={ctaHref} buttonText={buttonText} />
    </div>
  );
}
