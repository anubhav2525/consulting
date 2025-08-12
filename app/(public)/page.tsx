import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import HeroSectionUI from "@/components/home/hero-section/hero-section";

const HomePage = () => {
  return (
    <section className="w-full min-h-screen">
      <ScrollProgress />
      <HeroSectionUI />
    </section>
  );
};

export default HomePage;
