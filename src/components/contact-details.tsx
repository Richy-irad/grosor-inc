"use client";

import { Fragment } from "react";

import { Tab } from "@headlessui/react";
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";
import clsx from "clsx";

// import Map from "./map";

const contacts = [
  {
    icon: <Envelope size={24} weight="bold" className="text-white" />,
    text: "grosorinc2@gmail.com",
    descriptor: "email",
  },
  {
    icon: <Phone size={24} weight="bold" className="text-white" />,
    text: "(514) 57205067",
    descriptor: "phone",
  },
  {
    icon: <MapPin size={24} weight="bold" className="text-white" />,
    text: "60 Rue du Docteur-Lortie, St. Polycarpe, J0P1X0, QC",
    descriptor: "our office",
  },
];

export default function ContactDetails() {
  return (
    <Tab.Group vertical>
      <div className="flex flex-col md:flex-row gap-5 w-full px-5 lg:w-[894px]">
        {/* tabs list */}
        <Tab.List className="basis-1/4 grow-0 shrink-0 flex flex-col">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type="button"
                className={clsx(
                  "capitalize px-7 py-4 md:text-light-100 hover:text-white hover:bg-foreground-200/50 outline-none text-start w-full",
                  {
                    "text-white border-l-4 border-foreground-100 bg-foreground-200":
                      selected,
                    "border-l-0.5 border-light-200": !selected,
                  }
                )}
              >
                Contact details
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type="button"
                className={clsx(
                  "capitalize px-7 py-4 md:text-light-100 hover:text-white hover:bg-foreground-200/50 outline-none text-start w-full",
                  {
                    "text-white border-l-4 border-foreground-100 bg-foreground-200":
                      selected,
                    "border-l-0.5 border-light-200": !selected,
                  }
                )}
              >
                directions
              </button>
            )}
          </Tab>
        </Tab.List>
        {/* tabs panels */}
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-col gap-6">
              {contacts.map((contact, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="p-2 5 rounded bg-foreground-200 text-white">
                    {contact.icon}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="text-dark-100 md:text-white font-semibold">
                      {contact.text}
                    </p>
                    <p className="text-dark-200 md:text-light-200 font-normal capitalize">
                      {contact.descriptor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <p>Directions</p>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
