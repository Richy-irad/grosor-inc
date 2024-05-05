"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import clsx from "clsx";
import Image from "next/image";
import { ServiceType } from "@/lib/types";

export default function Service({ service }: { service: ServiceType }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={clsx(
        "relative w-full h-[480px]  group transition-opacity ease-in duration-700",
        {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        }
      )}
    >
      <Image
        src={service.background}
        alt={service.name}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute flex flex-col gap-3 justify-end px-6 pb-8 w-full h-full bg-dark-200/40 group-hover:hover:bg-dark-100/70">
        <h6 className="capitalize text-white text-3xl font-semibold group-hover:text-foreground-100">
          {service.name}
        </h6>
        <p className="hidden group-hover:flex text-foreground-100">
          {service.description}
        </p>
      </div>
    </div>
  );
}
