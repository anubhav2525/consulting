import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBuildingBank,
  IconDeviceDesktop,
  IconStethoscope,
  IconShoppingCart,
} from "@tabler/icons-react";

const IndustriesSectionUI = () => {
  const industries = [
    {
      title: "Financial Services",
      description:
        "Banking, insurance, investment management, and fintech solutions.",
      icon: <IconBuildingBank />,
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Hospitals, pharmaceuticals, medical devices, and healthcare technology.",
      icon: <IconStethoscope />,
    },
    {
      title: "Technology & Software",
      description:
        "Software companies, startups, SaaS platforms, and digital transformation.",
      icon: <IconDeviceDesktop />,
    },
    {
      title: "Retail & Consumer Goods",
      description: "E-commerce, brick-and-mortar retail, and consumer brands.",
      icon: <IconShoppingCart />,
    },
  ];
  return (
    <section className="w-full bg-slate-50">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8 lg:py-20 lg:px-6">
        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">Industries we work</h2>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            dolorum voluptates tempore nesciunt officia totam itaque, eligendi
            delectus maiores?
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto pb-8 lg:pb-20">
        {industries.map((industry, index) => (
          <Feature key={industry.title} {...industry} index={index} />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSectionUI;

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
