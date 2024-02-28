"use client";
import { useRef } from "react";
import { useIsVisible } from "@/hooks";

import Image from "next/image";

import clsx from "clsx";

import Button from "./button";

import heroBackground from "../../public/hero-background.jpg";

export default function HeroSection() {
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
        <div className="flex flex-col gap-6 text-center text-white">
          <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            welcome to grosor inc.
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h1 className="w-full md:w-[683px] text-5xl md:text-6xl font-bold uppercase">
            where you find quality builders
          </h1>
          <p className="text-3.5xl font-medium capitalize">
            quality service on time.
          </p>
        </div>
        {/* call to action */}
        <Button type="primary" href="/#contact-us" buttonText="(514)-5725067" />
      </div>
    </div>
  );
}
