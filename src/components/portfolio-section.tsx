"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import clsx from "clsx";
import Button from "./button";
import Project from "./project";
import { projects } from "@/lib/projects";

const featuredProjects = projects.slice(0, 6);

export default function PortfolioSection() {
  const subheaderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isSubheaderVisible = useIsVisible(subheaderRef);
  const isHeaderVisible = useIsVisible(headerRef);
  return (
    <div className="flex flex-col gap-8 items-center py-10 md:py-20 w-full">
      <div className="flex flex-col gap-4 items-center">
        <h3
          ref={subheaderRef}
          className={clsx(
            "text-xl font-medium uppercase flex gap-6 items-center self-center transition-opacity ease-in duration-700",
            {
              "opacity-100": isSubheaderVisible,
              "opacity-0": !isSubheaderVisible,
            }
          )}
        >
          <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          projects
          <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
        </h3>
        <h2
          ref={headerRef}
          className={clsx(
            "text-3xl md:text-5xl text-dark-100 font-semibold capitalize transition-opacity ease-in duration-700",
            {
              "opacity-100": isHeaderVisible,
              "opacity-0": !isHeaderVisible,
            }
          )}
        >
          portfolio.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {featuredProjects.map((project, index) => (
          <Project key={index} project={project} featured={true} />
        ))}
      </div>

      <Button type="primary" href="/projects" buttonText="view all projects" />
    </div>
  );
}
