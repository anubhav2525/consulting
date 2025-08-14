import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSectionUI = () => {
  const aboutContent = [
    "We are a results-driven consulting firm dedicated to helping organizations solve complex challenges, optimize operations, and accelerate growth.",
    "With years of experience across diverse industries, we combine deep expertise with practical strategies to deliver solutions that work in the real world.",
    "Our mission is simple — empower businesses to make confident, data-driven decisions that lead to sustainable success.",
  ];
  return (
    <section className="w-full bg-slate-50">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-12 gap-4 lg:gap-6">
        <div className="w-full h-full grid md:col-span-3 lg:col-span-4 xl:col-span-6 px-4 py-8 lg:py-16 lg:px-6">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-2xl font-bold">About Us</h2>
            <div className="w-full flex flex-col gap-2 text-gray-600">
              {aboutContent.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Link href={"/about-us"}>
              <Button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full grid md:col-span-2 lg:col-span-3 xl:col-span-6 lg:pt-4">
          <Image
            height={500}
            width={600}
            className="w-full h-full object-cover"
            src={"/assets/images/background.avif"}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionUI;
