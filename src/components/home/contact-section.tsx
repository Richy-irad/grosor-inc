"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import clsx from "clsx";
import Image from "next/image";
import ContactDetails from "../contact-details";
import heroBackground from "../../../public/hero-background.jpg";

type ContactDetailsProps = {
  header: string;
  hook: string;
  lang: string;
};

export default function ContactSection({
  header,
  hook,
  lang,
}: ContactDetailsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <div
      id="contact-us"
      ref={ref}
      className={clsx(
        "flex items-center w-full py-5 md:p-0 md:h-[790px] md:bg-dark-200/75 transition-opacity ease-in duration-700",
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        }
      )}
    >
      {/* the background image */}
      <div className="hidden md:flex relative w-full h-full">
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
      <div className="relative md:absolute flex flex-col gap-16 items-center w-full">
        <div className="flex flex-col gap-6 text-center text-dark-100 px-5 md:p-0 md:text-white">
          <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            {header}
            <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
          </h3>
          <h1 className="md:w-[405px] text-3.5xl font-bold normal-case">
            {hook}
          </h1>
        </div>

        {/* the tabs */}
        <ContactDetails lang={lang} />
      </div>
    </div>
  );
}
