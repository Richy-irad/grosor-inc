"use client";

import Image from "next/image";
import Link from "next/link";
import { Envelope, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react";

import logo from "../../public/logo.png";

const contacts = [
  {
    icon: <MapPin size={24} weight="bold" className="text-foreground-100" />,
    text: "60 Rue du Docteur-Lortie, St. Polycarpe, J0P1X0, QC",
    descriptorEn: "our office",
    descriptorFr: "notre bureau",
  },
  {
    icon: <Envelope size={24} weight="bold" className="text-foreground-100" />,
    text: "grosorinc2@gmail.com",
    descriptorEn: "email",
    descriptorFr: "courriel",
  },
  {
    icon: <Phone size={24} weight="bold" className="text-foreground-100" />,
    text: "(514) 57205067",
    descriptorEn: "phone",
    descriptorFr: "téléphone",
  },
];

const services = [
  {
    en: "patio",
    fr: "patio",
  },
  {
    en: "deck",
    fr: "deck",
  },
  {
    en: "interior finish",
    fr: "finition intérieure",
  },
];

export default function Footer({ lang }: { lang: string }) {
  let content = "";

  if (lang === "en") {
    content =
      "Grosor Inc. is your trusted partner in home improvement excellence. With years of dedicated experience, we specialize in creating beautifully crafted patios, terraces, and interior and basement finishes. Our commitment to delivering high-quality service ensures that your vision is brought to life—on time and with meticulous attention to detail. At Grosor Inc., we transform your ideas into stunning, functional spaces that enhance your home. Trust us to bring the expertise and passion your home deserves.";
  } else {
    content =
      "Grosor Inc. est l’entreprise qu’il vous faut ! Avec des années d’expérience, nous nous spécialisons dans la construction et la pose de patio, (qu’elle soit en bois ou en matériaux composites) ainsi que des finitions intérieures et au sous-sol. Nous occupons de la construction et de la finition complète de votre projet, pour que vous puissent profiter des installations belles et durables. Nous vous assurons la perfection dans chaque détail, tout en respectant les délais promis. N’hésitez pas à nous contacter pour toute question concernant nos services!";
  }
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
        <p className="text-light-100">{content}</p>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/habitations_dor/"
            className="text-foreground-100"
          >
            <InstagramLogo size={24} weight="bold" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 w-full">
        {/* services */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl text-foreground-100 capitalize font-semibold">
            services
          </h3>
          <div className="flex flex-col gap-3 text-light-100 text-base font-semibold capitalize">
            {services.map((service, index) => (
              <p key={index}>
                {lang === "en" ? <>{service.en}</> : <>{service.fr}</>}
              </p>
            ))}
          </div>
        </div>

        {/* contacts */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-xl text-foreground-100 capitalize font-semibold">
            get in touch with us
          </h3>
          <div className="flex flex-col gap-3 text-white text-base font-semibold">
            {contacts.map((item, index) => (
              <div key={index} className="flex gap-2.5 items-start">
                {item.icon}
                <div className="flex flex-col gap-2">
                  <p>{item.text}</p>
                  <p className="text-[#c6c6c6] font-medium capitalize">
                    {lang === "en" ? (
                      <>{item.descriptorEn}</>
                    ) : (
                      <>{item.descriptorFr}</>
                    )}
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
