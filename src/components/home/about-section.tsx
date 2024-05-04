"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import Image from "next/image";
import clsx from "clsx";
import coverImage from "../../../public/project-6/image-7.jpeg";

type AboutProps = {
  header: string;
  hook: string;
  paragraph_1: string;
  paragraph_2: string;
};

export default function AboutSection({
  header,
  hook,
  paragraph_1,
  paragraph_2,
}: AboutProps) {
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
          src={coverImage}
          alt="contractors"
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* the content */}
      <div className="flex flex-col gap-8 p-4 md:p-0 md:pe-10 lg:pe-20">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase text-dark-100 text-xl font-medium flex gap-6 items-center">
            {header}
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h2 className="text-3xl md:text-5xl text-dark-100 font-semibold capitalize">
            {hook}
          </h2>
        </div>

        <p className="text-dark-100 font-normal">{paragraph_1}</p>

        <p className="text-dark-100 font-normal">{paragraph_2}</p>
      </div>
    </div>
  );
}
