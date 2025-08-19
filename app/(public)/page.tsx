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
import PricingPlan from "@/components/pricing-plan/pricing-plan";
import Clients from "@/components/clients/clients";

const HomePage = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <ScrollProgress />
      <HeroSectionUI />
      <AboutSectionUI />
      <ServicesSectionUI />
      <PricingPlan bgColour="bg-slate-50" />
      <TestonomialSectionUI />
      <IndustriesSectionUI />
      <BlogSectionUI />
      <ChooseUsUI />
      <Clients />
      <StatsUI />
    </section>
  );
};

export default HomePage;
