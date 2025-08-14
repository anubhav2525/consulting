"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSectionUI = () => {
  return (
    <div className="w-full flex flex-col">
      {/* background image for top */}
      <div className="px-4 py-10 md:py-16 lg:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-800 md:text-4xl lg:text-5xl">
          {"Launch Your Success with Expert Consulting Solutions"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600"
        >
          From strategy to execution, we help businesses achieve measurable
          results in less time. Partner with our experts and turn your vision
          into reality.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href={"/contact-us"}>
            <Button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800">
              Get a Free Consultation
            </Button>
          </Link>
          <Link href={"/our-services"}>
            <Button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100">
              Explore Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className="w-full min-h-[50%] lg:min-h-[60%]">
        <Image
          src={"/assets/images/background.avif"}
          alt="Our Services"
          className="w-full h-full object-cover"
          height={800}
          width={1000}
        />
      </div>
    </div>
  );
};

export default HeroSectionUI;
