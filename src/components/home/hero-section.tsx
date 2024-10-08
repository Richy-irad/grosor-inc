"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import Image from "next/image";
import clsx from "clsx";
import Button from "../button";
import heroBackground from "../../../public/project-2/image-5.jpeg";

type HeroProps = {
  header: string;
  hook: string;
  tagline: string;
  buttonText: string;
  ctaHref: string;
};

export default function HeroSection({
  header,
  hook,
  tagline,
  buttonText,
  ctaHref,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHeroVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={clsx(
        "flex items-center h-[776px] md:h-[675px] lg:h-[818px] bg-dark-200/50 transition-opacity ease-in duration-700",
        {
          "opacity-100": isHeroVisible,
          "opacity-0": !isHeroVisible,
        }
      )}
    >
      {/* the background image */}
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
      {/* the content */}
      <div className="absolute flex flex-col gap-16 items-center w-full px-5 md:p-0">
        <div className="flex flex-col gap-6 items-center text-center text-white w-full">
          <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            {header}
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h1 className="w-full md:w-[683px] text-4xl md:text-6xl font-bold uppercase">
            {hook}
          </h1>
          <p className="text-3xl font-medium normal-case">{tagline}</p>
        </div>
        {/* call to action */}
        <Button type="primary" href={ctaHref} buttonText={buttonText} />
      </div>
    </div>
  );
}
