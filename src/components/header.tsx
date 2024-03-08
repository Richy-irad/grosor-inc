"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks";
import clsx from "clsx";

export default function Header({
  header,
  hook,
}: {
  header: string;
  hook: string;
}) {
  const subheaderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isSubheaderVisible = useIsVisible(subheaderRef);
  const isHeaderVisible = useIsVisible(headerRef);
  return (
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
  );
}
