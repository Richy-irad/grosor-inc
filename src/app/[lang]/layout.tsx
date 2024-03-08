import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { getTranslatedNavItems } from "@/lib/translations/navbar/navitems";

export const metadata: Metadata = {
  title: "Grosor Inc",
  description: "Where you find quality builders",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const navigationItems = await getTranslatedNavItems(params.lang);
  let moto;

  if (params.lang === "en") {
    moto = "general construction contractor";
  } else {
    moto = "entrepreneur général en construction";
  }
  return (
    <html className="!scroll-smooth">
      <body className={`${inter.className} w-full min-h-screen h-full`}>
        <Topbar lang={params.lang} />
        <Navbar navigationItems={navigationItems} moto={moto} />
        {children}
        <Analytics />
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
