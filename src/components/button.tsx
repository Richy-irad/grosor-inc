import Link from "next/link";
import clsx from "clsx";

type LinkProps = {
  type: "primary" | "secondary";
  href: string;
  buttonText: string;
};

export default function Button({ type, href, buttonText }: LinkProps) {
  return (
    <Link
      className={clsx("p-4 font-semibold shrink-0 normal-case", {
        "bg-dark-200 text-white": type === "secondary",
        "bg-foreground-100 text-dark-100": type === "primary",
      })}
      href={href}
    >
      {buttonText}
    </Link>
  );
}
