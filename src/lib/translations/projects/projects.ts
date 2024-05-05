import "server-only";
import { ProjectType } from "@/lib/types";

const translations: { [index: string]: any } = {
  en: () => import("./projects.en").then((module) => module.default),
  fr: () => import("./projects.fr").then((module) => module.default),
};

export const getTranslatedProjects = async (locale: string = "fr") =>
  translations[locale]();

export const getTranslatedProject = async (locale: string, slug: string) => {
  const tranlatedProjects = await getTranslatedProjects(locale)

  return tranlatedProjects.find((project: ProjectType) => project.slug == slug);
};
