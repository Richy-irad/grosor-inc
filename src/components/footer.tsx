"use client";

import Image from "next/image";
import { Clock, Envelope, MapPin, Phone } from "@phosphor-icons/react";

import logo from "../../public/logo.png";

const contacts = [
  {
    icon: <MapPin size={32} weight="bold" className="text-foreground-100" />,
    text: "60 Rue du Docteur-Lortie, St. Polycarpe, J0P1X0, QC",
    descriptor: "our office",
  },
  {
    icon: <Envelope size={32} weight="bold" className="text-foreground-100" />,
    text: "grosorinc2@gmail.com",
    descriptor: "email",
  },
  {
    icon: <Phone size={32} weight="bold" className="text-foreground-100" />,
    text: "(514) 57205067",
    descriptor: "phone",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-24 bg-dark-100 px-5 md:px-10 lg:px-20 py-10">
      {/* company description */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center text-foreground-100">
          <div className="w-[60px]">
            <Image
              src={logo}
              alt="logo"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <span className="text-2xl capitalize font-semibold">Grosor Inc.</span>
        </div>
        <p className="text-light-100">
          Grosor Inc. is your trusted partner in mastering the art of home
          improvement. With a dedicated, we bring years of experience to
          seamlessly craft patios, terraces, and interior and basement finishes.
          Committed to delivering high-quality service on time, Grosor Inc.
          transforms your visions into personalized, aesthetically pleasing, and
          functional realities. Your home deserves the expertise and passion we
          bring to every project.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 w-full">
        {/* services */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl text-foreground-100 capitalize font-semibold">
            services
          </h3>
          <div className="flex flex-col gap-3 text-light-100 text-base font-semibold capitalize">
            <p>Patio</p>
            <p>Terrace</p>
            <p>interior finish</p>
            <p>basements</p>
          </div>
        </div>

        {/* contacts */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-xl text-foreground-100 capitalize font-semibold">
            get in touch with us
          </h3>
          <div className="flex flex-col gap-3 text-white text-base font-semibold capitalize">
            {contacts.map((item, index) => (
              <div key={index} className="flex gap-2.5 items-start">
                {item.icon}
                <div className="flex flex-col gap-2">
                  <p>{item.text}</p>
                  <p className="text-light-200 font-medium">
                    {item.descriptor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
