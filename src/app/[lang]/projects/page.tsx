import type { Metadata, ResolvingMetadata } from "next";
import { Key } from "react";
import Project from "@/components/projects/project";
import { getTranslatedProjects } from "@/lib/translations/projects/projects";
import { LangParams, ProjectType } from "@/lib/types";

export async function generateMetadata(
  { params }: { params: LangParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params;

  if (lang === "en") {
    return {
      title: "Our projects",
      description: "View all our projects",
    };
  }

  return {
    title: "Nos projets",
    description: "Voir tous les projets",
  };
}

export default async function Projects({ params }: { params: LangParams }) {
  const { lang } = params;
  const projects = await getTranslatedProjects(lang);

  let featuredHeader = "";
  let content = "";
  if (lang === "en") {
    featuredHeader = "featured project";
    content =
      "Transform your home with our full range of renovation and building services.";
  } else {
    featuredHeader = "project en vedette";
    content =
      "Transformez votre maison grâce à notre gamme complète de services de rénovation et de construction.";
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
        {projects.map((project: ProjectType, index: Key | null | undefined) => (
          <Project
            key={index}
            project={project}
            featured={false}
            featuredHeader={featuredHeader}
            lang={lang}
          />
        ))}
      </div>
    </main>
  );
}
