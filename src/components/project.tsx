"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type ProjectType = {
  title: string;
  thumbnail: StaticImageData;
  gallery: StaticImageData[];
  tags: string[];
};

export default function Project({
  project,
  featured,
}: {
  project: ProjectType;
  featured: Boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-4 w-full transition-opacity ease-in duration-700",
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        }
      )}
    >
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
      <div className="flex flex-col gap-2 items-start px-5">
        <span
          className={clsx(
            "text-base font-medium capitalize text-dark-200 flex gap-6 items-center",
            { flex: featured, hidden: !featured }
          )}
        >
          featured project
          <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
        </span>
        <h2 className="text-xl md:text-2xl text-dark-100 font-semibold capitalize">
          {project.title}
        </h2>
      </div>
    </div>
  );
}
