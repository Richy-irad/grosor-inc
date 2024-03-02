"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import clsx from "clsx";
import Button from "../button";
import Service from "../projects/service";
import { services } from "@/lib/services";

type ServicesProps = {
  header: string;
  hook: string;
  buttonText: string;
};

export default function ServicesSection({
  header,
  hook,
  buttonText,
}: ServicesProps) {
  const subheaderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isSubheaderVisible = useIsVisible(subheaderRef);
  const isHeaderVisible = useIsVisible(headerRef);
  return (
    <div className="flex flex-col gap-8 items-center py-10 md:py-20 bg-light-200 w-full">
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
          {header}
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
          {hook}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>

      <Button type="primary" href="/#contact-us" buttonText={buttonText} />
    </div>
  );
}
