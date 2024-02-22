import Image, { StaticImageData } from "next/image";

type ServiceType = {
  name: string;
  background: StaticImageData;
  description: string;
};

export default function Service({ service }: { service: ServiceType }) {
  return (
    <div className="flex flex-col justify-items-end w-full h-[480px] bg-dark-200/40 group hover:bg-dark-100/70">
      <div className="relative w-full h-full">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src={service.background}
            alt="hero background image"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-6 pb-8">
          <h6 className="capitalize text-white text-3xl font-semibold group-hover:text-foreground-100">
            {service.name}
          </h6>
          <p className="hidden group-hover:flex text-foreground-100">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
