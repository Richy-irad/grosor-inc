import Project from "@/components/projects/project";

import { getTranslatedProjects } from "@/lib/translations/projects/projects";
import { StaticImageData } from "next/image";
import { Key } from "react";

type LangParams = {
  lang: string;
};
export default async function Projects({ params }: { params: LangParams }) {
  const { lang } = params;
  const projects = await getTranslatedProjects(lang);

  let featuredHeader = "";
  let content = "";
  if (lang === "en") {
    featuredHeader = "featured project";
    content =
      "Revitalize your home with our comprehensive home renovation and house building services.";
  } else {
    featuredHeader = "project en vedette";
    content =
      "Revitalisez votre maison avec notre rénovation et notre maison complètes les services de construction.";
  }

  return (
    <main className="flex flex-col py-10 md:py-20 gap-8">
      <div className="flex flex-col gap-4 md:gap-9 px-5 w-full md:px-10 md:w-[513px]">
        <h1 className="text-3xl md:text-6xl font-semibold capitalize">
          portfolio
        </h1>
        <p className="text-base md:text-xl font-medim text-dark-200">
          {content}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {projects.map(
          (
            project: {
              title: string;
              thumbnail: StaticImageData;
              gallery: StaticImageData[];
              tags: string[];
              href: string;
            },
            index: Key | null | undefined
          ) => (
            <Project
              key={index}
              project={project}
              featured={false}
              featuredHeader={featuredHeader}
              lang={lang}
            />
          )
        )}
      </div>
    </main>
  );
}
