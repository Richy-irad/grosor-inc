import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { getTranslatedNavItems } from "@/lib/translations/navbar/navitems";

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
    moto = "General Construction Contractor";
  } else {
    moto = "Entrepreneur général en construction";
  }
  return (
    <html className="!scroll-smooth">
      <body className={`${inter.className} w-full min-h-screen h-full`}>
        <Topbar lang={params.lang} />
        <Navbar
          navigationItems={navigationItems}
          moto={moto}
          currentLang={params.lang}
        />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
