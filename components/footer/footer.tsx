"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import Link from "next/link";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type Link = {
  title: string;
  url: string;
};

const Footer = () => {
  // This component renders a footer section with a grid layout.

  const serviceLinks: Link[] = [
    { title: "Staffing Services", url: "/staffing-services" },
    { title: "Industrial automation", url: "/industrial-automation" },
    { title: "Design Engineering", url: "/design-engineering" },
    {
      title: "Admin Acc. Services",
      url: "/administrative-accounting-services",
    },
  ];

  const inductriesLinks: Link[] = [
    { title: "Service 1", url: "/services/1" },
    { title: "Service 2", url: "/services/2" },
    { title: "Service 3", url: "/services/3" },
    { title: "Service 4", url: "/services/4" },
  ];

  const companyLinks: Link[] = [
    { title: "About Us", url: "/about-us" },
    { title: "Our Team", url: "/our-team" },
    { title: "Our Services", url: "/our-services" },
    { title: "Careers", url: "/careers" },
    { title: "Blogs/Insights", url: "/blogs" },
  ];

  const companydetails = {
    contact: "+91 1231231231",
    address: "123 Street Name, City, Country",
    email: "info@example.com",
    time: "Mon-Fri: 9am - 6pm EST",
  };

  const socialLinks: Link[] = [
    { title: "Facebook", url: "https://facebook.com" },
    { title: "Twitter", url: "https://twitter.com" },
    { title: "LinkedIn", url: "https://linkedin.com" },
  ];
  return (
    <section className="w-full border-t border-slate-200 py-6 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* links */}
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6">
          {/* services */}
          <div>
            <h2 className="text-black font-semibold pb-3">Our Services</h2>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link: Link, idx: number) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="hover:text-blue-400 transition-all"
                  target="_blank"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h2 className="text-black font-semibold pb-3">Industies</h2>
            <div className="flex flex-col gap-3">
              {inductriesLinks.map((link: Link, idx: number) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="hover:text-blue-400 transition-all"
                  target="_blank"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-black font-semibold pb-3">Company</h2>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link: Link, idx: number) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="hover:text-blue-400 transition-all"
                  target="_blank"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact us */}
          <div>
            <h2 className="text-black font-semibold pb-3">Contact us</h2>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3 w-full">
                <Phone size={24} /> {companydetails.contact}
              </div>
              <div className="flex items-center gap-3 w-full">
                <Mail size={24} /> {companydetails.email}
              </div>
              <div className="flex items-center gap-3 w-full">
                <MapPin size={24} /> {companydetails.address}
              </div>
              <div className="flex items-center gap-3 w-full">
                <Clock size={24} /> {companydetails.time}
              </div>
            </div>
          </div>
        </div>

        {/* follow us  */}
        <div className="w-full py-6 grid gap-8 md:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="grid w-full md:col-span-2 lg:col-span-3 gap-3">
            <Subscribe />
          </div>

          <div>
            <h2 className="text-black font-semibold pb-3">Follow us</h2>
            <div className="flex items-center justify-start gap-3 w-full">
              <div className="flex items-center w-full">
                <Phone size={24} />
              </div>
              <div className="flex items-center w-full">
                <Mail size={24} />
              </div>
              <div className="flex items-center w-full">
                <MapPin size={24} />
              </div>
              <div className="flex items-center w-full">
                <Clock size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="w-full py-2 flex items-center justify-between gap-3 flex-col md:flex-row flex-wrap border-t border-slate-200 pt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <Link href={"/privacy-policy"} className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <div className="h-1 w-1 bg-gray-400 rounded-full" />
            <Link href={"/terms-conditions"} className="hover:text-blue-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

const Subscribe = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};
