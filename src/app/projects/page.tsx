import Project from "@/components/project";

import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <main className="flex flex-col py-20 gap-8">
      <div className="flex flex-col gap-9 px-10 w-[347px] md:w-[513px]">
        <h1 className="text-6xl font-semibold capitalize">portfolio</h1>
        <p className="text-xl font-medim text-dark-200">
          Revitalize your home with our comprehensive home renovation and house
          building services.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 w-full">
        {projects.map((project, index) => (
          <Project key={index} project={project} featured={false} />
        ))}
      </div>
    </main>
  );
}
