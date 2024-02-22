"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

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
  return (
    <nav className="bg-dark-100 flex justify-between items-center px-20">
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
          className="flex flex-col gap-2.5 py-4 text-foreground-100 capitalize font-semibold"
        >
          <span className="text-2xl">Grosor Inc.</span>
          <span>general construction contractor</span>
        </Link>
      </div>

      {/* links */}
      <div className="flex">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={clsx(
              "px-6 py-4 text-foreground-100 text-base font-semibold capitalize"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* languages buttons */}
      <div className="flex">
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
    </nav>
  );
}
