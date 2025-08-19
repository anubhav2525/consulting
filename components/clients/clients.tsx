"use client";
import React from "react";
import {
  SiApple,
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "../ui/marquee";
import Link from "next/link";
const logos = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://facebook.com",
  },
  {
    name: "Google",
    icon: SiGoogle,
    url: "https://google.com",
  },
  {
    name: "X",
    icon: SiX,
    url: "https://x.com",
  },
  {
    name: "Apple",
    icon: SiApple,
    url: "https://apple.com",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    url: "https://youtube.com",
  },
];

const Clients = ({ bgColour }: { bgColour?: string }) => {
  return (
    <section className={`px-4 py-8 lg:py-16 lg:px-6 w-full ${bgColour}`}>
      <div className="w-full flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">Our Clients</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          laborum.
        </p>
      </div>
      <div className="flex size-full items-center justify-center pt-10">
        <Marquee>
          <MarqueeContent pauseOnHover={false}>
            {logos.map((logo) => (
              <MarqueeItem className="mx-16 size-12" key={logo.name}>
                {/* <Link href={logo.url}> */}
                <logo.icon className="size-full" />
                {/* </Link> */}
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
