import CarouselSectionServicesUI from "@/components/home/carousel-section-services/carousel-section-services";
import Image from "next/image";
import React from "react";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
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
        {children}
      </div>
      {/* carousel */}
      <div className="w-full max-w-6xl mx-auto">
        <CarouselSectionServicesUI />
      </div>
    </section>
  );
};

export default ServicesLayout;
