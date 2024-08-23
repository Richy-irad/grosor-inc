"use client";

import { useRef } from "react";
import Link from "next/link";
import { useIsVisible } from "@/hooks";
import Image from "next/image";
import clsx from "clsx";
import { ProjectType } from "@/lib/types";

export default function Project({
  project,
  featured,
  featuredHeader,
  lang,
}: {
  project: ProjectType;
  featured: Boolean;
  featuredHeader: string;
  lang: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  let buttonContext = "";
  if (lang === "en") {
    buttonContext = "View project details";
  } else {
    buttonContext = "Voir les détails du projet";
  }
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
            "text-base font-medium normal-case text-dark-200 flex gap-6 items-center",
            { flex: featured, hidden: !featured }
          )}
        >
          {featuredHeader}
          <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
        </span>
        <h2 className="text-xl md:text-2xl text-dark-100 font-semibold normal-case">
          {project.title}
        </h2>
      </div>
      <Link
        className="p-4 font-semibold shrink-0 normal-case bg-dark-200 text-white self-start"
        href={`/${lang}/projects/${project.slug}`}
      >
        {buttonContext}
      </Link>
    </div>
  );
}
