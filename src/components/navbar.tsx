"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Popover } from "@headlessui/react";

import { List, X } from "@phosphor-icons/react";

import logo from "../../public/logo.png";

const navigationItems = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about us",
    href: "/#about",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "contact us",
    href: "/contact-us",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-dark-100 flex justify-between items-center w-full px-5 py-2.5 md:py-0 md:px-10 lg:px-20">
      {/* logo and company name */}
      <div className="flex items-center">
        <div className="w-[60px] md:w-[93px] lg:w-[142px]">
          <Image
            src={logo}
            alt="logo"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Link
          href="/"
          className="hidden md:flex flex-col gap-2.5 py-4 text-foreground-100 capitalize font-semibold"
        >
          <span className="text-2xl">Grosor Inc.</span>
          <span>general construction contractor</span>
        </Link>
      </div>

      {/* links */}
      <div className="hidden lg:flex">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={clsx(
              "px-6 py-4 text-foreground-100 text-base font-semibold capitalize",
              {
                "text-white": pathname === item.href,
              }
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* languages buttons */}
      <div className="hidden lg:flex">
        <button
          type="button"
          className="px-2.5 py-4 text-foreground-100 text-base font-semibold uppercase"
        >
          fr
        </button>
        <button
          type="button"
          className="px-2.5 py-4 text-foreground-100 text-base font-semibold uppercase"
        >
          en
        </button>
      </div>

      <Popover className="flex lg:hidden">
        <Popover.Button>
          <List size={32} weight="bold" className="text-foreground-100" />
        </Popover.Button>
        <Popover.Panel className="absolute left-0 top-0 w-80 md:w-96 h-screen z-10 flex flex-col bg-dark-100 p-10">
          {({ close }) => (
            <>
              <button
                className="text-foreground-100 self-end"
                onClick={() => close()}
              >
                <X size={32} weight="bold" />
              </button>
              {navigationItems.map((item, index) => (
                <Popover.Button
                  key={index}
                  as={Link}
                  href={item.href}
                  className={clsx(
                    "py-4 text-foreground-100 text-xl font-semibold capitalize",
                    {
                      "text-white": pathname === item.href,
                    }
                  )}
                >
                  {item.name}
                </Popover.Button>
              ))}
            </>
          )}
        </Popover.Panel>
      </Popover>
    </nav>
  );
}
