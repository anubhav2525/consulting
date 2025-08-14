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
        "We provide highly skilled professionals to support your projects and operational needs — whether for a short-term assignment or a long-term engagement. Our extensive talent network ensures you always have the right people in place to deliver exceptional results without disrupting workflow.",
      url: "/staffing-services",
    },
    {
      title: "Placement Services",
      description:
        "We connect organizations with exceptional talent for permanent roles. Our recruitment experts work closely with you to understand your culture, goals, and skill requirements, ensuring every hire is the right fit for your team and your long-term vision.",
      url: "/staffing-services",
    },
    {
      title: "Automation & Design Engineering",
      description:
        "We provide actionable, insight-driven strategies to help you navigate market challenges, seize opportunities, and achieve sustainable growth. Our advisory team collaborates with your leadership to create a clear, future-focused roadmap.",
      url: "/staffing-services",
    },
    {
      title: "Administrative & Accounting Services",
      description:
        "Our experts handle your essential back-office functions with precision and compliance in mind. We manage accounting, bookkeeping, payroll, and administrative workflows so you can focus on growing your business, confident that your operations are in capable hands.",
      url: "/staffing-services",
    },
    {
      title: "Business Process Optimization",
      description:
        "We identify bottlenecks, inefficiencies, and redundancies within your workflows, then design optimized processes to cut costs and accelerate performance. Our approach blends technology, analytics, and industry best practices for sustainable efficiency gains.",
      url: "/staffing-services",
    },
    {
      title: "Strategic Advisory",
      description:
        "We provide actionable, insight-driven strategies to help you navigate market challenges, seize opportunities, and achieve sustainable growth. Our advisory team collaborates with your leadership to create a clear, future-focused roadmap.",
      url: "/staffing-services",
    },
  ];

  return (
    <section className="w-full h-full">
      {/* background image for top */}
      <div className="w-full min-h-[50%] lg:min-h-[80%]">
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
            As a trusted business consulting partner, we deliver solutions
            designed to address your most pressing challenges and unlock
            long-term growth. From talent acquisition to process automation, we
            provide end-to-end services that help businesses operate smarter,
            faster, and more profitably.
          </p>
        </div>

        {/* services list */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-8">
          {services.map((service: SeriveType, index: number) => (
            <div
              key={index}
              className="p-4 md:p-6 w-full h-full flex flex-col gap-6 even:bg-white odd:bg-slate-50 md:[&:nth-child(4n+1)]:bg-slate-50 md:[&:nth-child(4n+2)]:bg-white md:[&:nth-child(4n+3)]:bg-white md:[&:nth-child(4n+4)]:bg-slate-50 border border-slate-100"
            >
              <div className="font-semibold text-lg xl:text-xl">
                {service.title}
              </div>
              <div className="font-medium text-sm xl:text-base">
                {service.description}
              </div>
              <div className="w-full  flex items-center justify-end">
                <Link
                  href={service.url}
                  className="text-sky-500 hover:text-sky-600 hover:underline transition-all duration-500 rounded-md"
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
