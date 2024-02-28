"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";

import Image from "next/image";
import clsx from "clsx";

import contractorsImage from "../../public/contractors.jpg";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <div
      id="about"
      ref={ref}
      className={clsx(
        "flex flex-col md:flex-row gap-10 py-10 md:py-20 transition-opacity ease-in duration-700",
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        }
      )}
    >
      {/* the image */}
      <div className="hidden md:flex basis-full md:basis-7/12 shrink-0 grow-0">
        <Image
          src={contractorsImage}
          alt="contractors"
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* the content */}
      <div className="flex flex-col gap-8 p-4 md:p-0 md:pe-10 lg:pe-20">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase text-dark-100 text-xl font-medium flex gap-6 items-center">
            get to know us
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h2 className="text-3xl md:text-5xl text-dark-100 font-semibold capitalize">
            Committed to only high quality service.
          </h2>
        </div>

        <p className="text-dark-100 font-normal">
          At Grosor Inc., we're all about giving you the best. From making
          unique patios and terraces to fixing up insides and basements, we work
          hard to make your dreams real, putting care into every detail.
        </p>

        <p className="text-dark-100 font-normal">
          Ourteam makes sure you get personal attention, making sure we stick to
          our promise of "Quality Service On Time." It's not just words for us
          &hyphen; it's our way of always giving you the best construction,
          keeping it simple, reliable, and making you happy.
        </p>
      </div>
    </div>
  );
}
