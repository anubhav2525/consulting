import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import HeroSectionUI from "@/components/home/hero-section/hero-section";
import AboutSectionUI from "@/components/home/about-section/about-section";
import TestonomialSectionUI from "@/components/home/testonomial-section/testonomial-section";
import ServicesSectionUI from "@/components/home/services-sections/services-sections";
import IndustriesSectionUI from "@/components/home/industries-section/industries-section";
import ChooseUsUI from "@/components/home/choose-us/choose-us";
import StatsUI from "@/components/home/stats/stats";
import BlogSectionUI from "@/components/home/blog-section/blog-section";
import OurClientsUI from "@/components/home/our-clients/our-clients";

const HomePage = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <ScrollProgress />
      <HeroSectionUI />
      <AboutSectionUI />
      <ServicesSectionUI />
      <TestonomialSectionUI />
      <IndustriesSectionUI />
      <ChooseUsUI />
      <BlogSectionUI />
      {/* <OurClientsUI /> */}
      <StatsUI />
    </section>
  );
};

export default HomePage;
