import Image from "next/image";

import Button from "@/components/button";
import contractorsImage from "../../public/contractors.jpg";
import heroBackground from "../../public/hero-background.jpg";

import Service from "@/components/service";
import Project from "@/components/project";

import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

const featuredProjects = projects.slice(0, 6);

export default function Home() {
  return (
    <main className="h-full">
      {/* hero */}
      <div className="flex items-center h-[818px] bg-dark-200/50">
        <div className="relative w-full h-full">
          <div className="absolute -z-10 w-full h-full">
            <Image
              src={heroBackground}
              alt="hero background image"
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="absolute flex flex-col gap-16 items-center w-full">
          <div className="flex flex-col gap-6 text-center text-white">
            <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
              <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
              welcome to grosor inc.
              <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            </h3>
            <h1 className="w-[683px] text-6xl font-bold uppercase">
              where you find quality builders
            </h1>
            <p className="text-3.5xl font-medium capitalize">
              quality service on time.
            </p>
          </div>
          {/* call to action */}
          <Button
            type="primary"
            href="/#contact-us"
            buttonText="(514)-5725067"
          />
        </div>
      </div>

      {/* about */}
      <div id="about" className="flex gap-10 py-20">
        {/* the image */}
        <div className="basis-7/12 shrink-0 grow-0">
          <Image
            src={contractorsImage}
            alt="contractors"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* the content */}
        <div className="flex flex-col gap-8 pe-20">
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-dark-100 text-xl font-medium flex gap-6 items-center">
              get to know us
              <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            </h3>
            <h2 className="text-5xl text-dark-100 font-semibold capitalize">
              Committed to only high quality service.
            </h2>
          </div>

          <p className="text-dark-100 font-normal">
            At Grosor Inc., we're all about giving you the best. From making
            unique patios and terraces to fixing up insides and basements, we
            work hard to make your dreams real, putting care into every detail.
          </p>

          <p className="text-dark-100 font-normal">
            Ourteam makes sure you get personal attention, making sure we stick
            to our promise of "Quality Service On Time." It's not just words for
            us &hyphen; it's our way of always giving you the best construction,
            keeping it simple, reliable, and making you happy.
          </p>
        </div>
      </div>

      {/* services */}
      <div className="flex flex-col gap-8 items-center py-20 bg-light-200 w-full">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            expert services
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h2 className="text-5xl text-dark-100 font-semibold capitalize">
            transform your space.
          </h2>
        </div>

        <div className="flex gap-10 w-full">
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>

        <Button
          type="primary"
          href="/#contact-us"
          buttonText="Get a service now"
        />
      </div>

      {/* portfolio */}

      <div className="flex flex-col gap-8 items-center py-20 w-full">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            projects
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h2 className="text-5xl text-dark-100 font-semibold capitalize">
            portfolio.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10 w-full">
          {featuredProjects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>

        <Button
          type="primary"
          href="/projects"
          buttonText="view all projects"
        />
      </div>

      {/* contact us */}
    </main>
  );
}
