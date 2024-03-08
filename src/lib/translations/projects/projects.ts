import "server-only";

const translations: { [index: string]: any } = {
  en: () => import("./projects.en").then((module) => module.default),
  fr: () => import("./projects.fr").then((module) => module.default),
};

export const getTranslatedProjects = async (locale: string) =>
  translations[locale]();
