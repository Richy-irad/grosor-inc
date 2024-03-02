"use client";

import { Clock, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import Button from "./button";

const contacts = [
  {
    icon: <Clock size={20} weight="bold" className="text-foreground-100" />,
    text: "Monday - Friday (9:00 am - 21:00 pm)",
  },
  {
    icon: <Envelope size={20} weight="bold" className="text-foreground-100" />,
    text: "grosorinc2@gmail.com",
  },
  {
    icon: <Phone size={20} weight="bold" className="text-foreground-100" />,
    text: "(514) 57205067",
  },
  {
    icon: <MapPin size={20} weight="bold" className="text-foreground-100" />,
    text: "60 Rue du Docteur-Lortie, St. Polycarpe, J0P1X0, QC",
  },
];

export default function Topbar({ lang }: { lang: string }) {
  let buttonText;

  if (lang === "en") {
    buttonText = "Get quotation now";
  } else {
    buttonText = "obtenir un devis maintenant";
  }

  return (
    <div className=" hidden lg:flex justify-between px-20 w-full">
      <div className="flex">
        {contacts.map((item, index) => (
          <div key={index} className="flex gap-2.5 items-center p-3">
            {item.icon}
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div>
      {/* quotation link*/}
      <Button type="secondary" href="/contact-us" buttonText={buttonText} />
    </div>
  );
}
