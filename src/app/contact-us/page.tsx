import Image from "next/image";
import ContactDetails from "@/components/contact-details";

import heroBackground from "../../../public/hero-background.jpg";

export default function ContactUs() {
  return (
    <main className="h-full">
      <div className="flex items-center w-full h-[790px] bg-dark-200/75">
        {/* the background image */}
        <div className="relative w-full h-full">
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
        <div className="absolute flex flex-col gap-16 items-center w-full">
          <div className="flex flex-col gap-6 text-center text-white">
            <h3 className="text-xl font-medium uppercase flex gap-6 items-center self-center">
              <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
              get in touch with us
              <hr className="block w-[53px] h-[3px] bg-foreground-100 rounded-full" />
            </h3>
            <h1 className="w-[405px] text-3.5xl font-bold capitalize">
              your project is much simpler than you think.
            </h1>
          </div>

          {/* the tabs */}
          <ContactDetails />
        </div>
      </div>
    </main>
  );
}
