import Link from "next/link";
import clsx from "clsx";

type LinkProps = {
  type: string;
  href: string;
  buttonText: string;
};

export default function Button({ type, href, buttonText }: LinkProps) {
  return (
    <Link
      className={clsx("p-4 font-semibold shrink-0 capitalize", {
        "bg-dark-200 text-white": type === "secondary",
        "bg-foreground-100 text-dark": type === "primary",
      })}
      href={href}
    >
      {buttonText}
    </Link>
  );
}
