import type { Metadata, ResolvingMetadata } from "next";
import Image, { StaticImageData } from "next/image";
import {
  getTranslatedProject,
  getTranslatedProjects,
} from "@/lib/translations/projects/projects";
import { DynamicParams, ProjectType } from "@/lib/types";

export async function generateMetadata(
  { params }: DynamicParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang, slug } = params;

  const project = await getTranslatedProject(lang, slug);

  return {
    title: project.title,
  };
}

export default async function ProjectDetails({ params }: DynamicParams) {
  const project = await getTranslatedProject(params.lang, params.slug);
  return (
    <main className="flex flex-col py-10 md:py-20 gap-8">
      <h1 className="px-2 text-xl md:text-6xl font-semibold capitalize">
        {project.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {project.gallery.map((image: StaticImageData) => (
          <div key={project.slug} className="w-full h-[600px] relative">
            <Image
              src={image}
              alt={project.title}
              sizes="100vw"
              fill
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export const generateStaticParams = async () => {
  const projects = await getTranslatedProjects();

  return projects.map((project: ProjectType) => ({
    slug: project.slug,
  }));
};
