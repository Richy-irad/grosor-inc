import "server-only";

const translations: { [index: string]: any } = {
  en: () => import("./services.en").then((module) => module.default),
  fr: () => import("./services.fr").then((module) => module.default),
};

export const getTranslatedServices = async (locale: string) =>
  translations[locale]();
