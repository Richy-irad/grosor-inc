import Image, { StaticImageData } from "next/image";

type ProjectType = {
  title: string;
  thumbnail: StaticImageData;
  gallery: StaticImageData[];
  tags: string[];
};

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full h-[600px] relative">
        <Image
          src={project.thumbnail}
          alt={project.title}
          sizes="100vw"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-4 items-start px-5">
        <span className="text-base font-medium uppercase flex gap-6 items-center">
          featured project
          <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
        </span>
        <h2 className="text-3xl text-dark-100 font-semibold capitalize">
          {project.title}
        </h2>
      </div>
    </div>
  );
}
