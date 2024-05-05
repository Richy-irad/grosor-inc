import { StaticImageData } from "next/image";

export type ProjectType = {
  slug: string;
  title: string;
  thumbnail: StaticImageData;
  gallery: StaticImageData[];
  tags: string[];
};

export type LangParams = {
  lang: string;
};

export type DynamicParams = {
  params: {
    slug: string;
    lang: string;
  };
};

export type ServiceType = {
  name: string;
  background: StaticImageData;
  description: string;
};
