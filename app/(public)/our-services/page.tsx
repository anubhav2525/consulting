"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type SeriveType = {
  title: string;
  description: string;
  url: string;
};

const OurServicesPage = () => {
  const services: SeriveType[] = [
    {
      title: "Staffing Services",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
      url: "/staffing-services",
    },
    {
      title: "Placement Services",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
      url: "/staffing-services",
    },
    {
      title: "Automation and Design Engineering",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
      url: "/staffing-services",
    },
    {
      title: "Administrative & Accounting Services",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
      url: "/staffing-services",
    },
    {
      title: "Administrative & Accounting Services",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
      url: "/staffing-services",
    },
    {
      title: "Administrative & Accounting Services",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
      url: "/staffing-services",
    },
  ];

  return (
    <section className="w-full min-h-screen">
      {/* background image for top */}
      <div className="w-full min-h-[50%] lg:min-h-[80%] bg-black">
        <Image
          src={"/assets/images/background.avif"}
          alt="Our Services"
          className="w-full h-full object-cover"
          height={800}
          width={1000}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-10">
        <div className="flex flex-col gap-6 px-2">
          <h1 className="text-black text-4xl font-bold">Our Services</h1>
          <p className="text-slate-600">
            As an experienced outsourcing partner, Radiance Technologies is
            providing solutions on various fronts such as Staffing and
            Recruitment, Placement services, Automation and Design engineering
            and Administrative services.
          </p>
        </div>

        {/* services list */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-8">
          {services.map((service: SeriveType, index: number) => (
            <div
              key={index}
              className="p-4 md:p-6 w-full h-full flex flex-col gap-6  even:bg-green-400 odd:bg-gray-50 md:[&:nth-child(4n+1)]:bg-gray-50 md:[&:nth-child(4n+2)]:bg-green-400 md:[&:nth-child(4n+3)]:bg-green-400 md:[&:nth-child(4n+4)]:bg-gray-50 shadow-md"
            >
              <div className="font-semibold text-lg xl:text-xl">
                {service.title}
              </div>
              <div className="font-medium text-sm xl:text-base">
                {service.description}
              </div>
              <div className="w-full flex items-center justify-end">
                <Link
                  href={service.url}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesPage;
