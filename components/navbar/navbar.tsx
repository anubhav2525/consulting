"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarUI = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/our-services",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              onClick={() => router.push("/contact-us")}
              variant="primary"
            >
              Free Consultation
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));

              return (
                <Link
                  key={`desktop-link-${idx}`}
                  href={item.link}
                  className={cn(
                    "relative block transition-all duration-500 hover:text-primary px-4 py-2 rounded-4xl hover:bg-slate-100",
                    isActive
                      ? "text-blue-500 font-semibold hover:text-blue-700 bg-slate-100"
                      : "text-neutral-600 dark:text-neutral-300"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex w-full gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Free Consultation
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarUI;
