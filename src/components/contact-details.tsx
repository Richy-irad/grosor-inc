"use client";

import { Envelope, Phone, MapPin } from "@phosphor-icons/react";

const contacts = [
  {
    icon: <Envelope size={24} weight="bold" className="text-white" />,
    text: "grosorinc2022@gmail.com",
    descriptorEn: "email",
    descriptorFr: "courriel",
  },
  {
    icon: <Phone size={24} weight="bold" className="text-white" />,
    text: "(514) 572-5067",
    descriptorEn: "phone",
    descriptorFr: "téléphone",
  },
  {
    icon: <MapPin size={24} weight="bold" className="text-white" />,
    text: "60 Rue du Docteur-Lortie, St. Polycarpe, J0P1X0, QC",
    descriptorEn: "our office",
    descriptorFr: "Adresse",
  },
];

export default function ContactDetails({ lang }: { lang: string }) {
  return (
    <div className="flex flex-col items-center w-full px-5 lg:w-[894px]">
      <div className="flex flex-col gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="flex gap-4 items-start lg:items-center">
            <div className="p-2 5 rounded bg-foreground-200 text-white">
              {contact.icon}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-dark-100 md:text-white font-semibold">
                {contact.text}
              </p>
              <p className="text-dark-200 md:text-light-200 font-normal capitalize">
                {lang === "en" ? (
                  <>{contact.descriptorEn}</>
                ) : (
                  <>{contact.descriptorFr}</>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
