import Image, { StaticImageData } from "next/image";
import {
  getTranslatedProject,
  getTranslatedProjects,
} from "@/lib/translations/projects/projects";

import { DynamicParams, ProjectType } from "@/lib/types";

export default async function ProjectDetails({ params }: DynamicParams) {
  const project = await getTranslatedProject(params.lang, params.slug);
  console.log(typeof project.thumbnail === typeof project.gallery[1]);
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