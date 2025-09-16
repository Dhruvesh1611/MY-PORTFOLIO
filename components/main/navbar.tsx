'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import { smoothScrollTo } from "@/lib/utils";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#about-me");

  // Observe sections to highlight active link
  // eslint-disable-next-line react-hooks/exhaustive-deps
  typeof window !== "undefined" && (() => {
    const sectionIds = [
      "#about-me",
      "#skills",
      "#resume",
      "#experience",
      "#education",
      "#certifications",
      "#achievements",
      "#projects",
      "#contact",
    ];
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => Boolean(el));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  })();

  const handleNavClick = (link: string) => {
    const elementId = link.replace('#', '');
    smoothScrollTo(elementId);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <button
          onClick={() => handleNavClick('#about-me')}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Dhruvesh Shyara</div>
        </button>

        {/* Web Navbar */}
          <div className="hidden md:flex max-w-[860px] h-full flex-row items-center md:mr-20">
            <div className="flex items-center gap-6 w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[16px] py-[10px] rounded-full text-gray-200 overflow-x-auto scrollbar-hidden">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.title}
                  onClick={() => handleNavClick(link.link)}
                  className={`cursor-pointer transition whitespace-nowrap ${
                    active === link.link ? "text-[rgb(112,66,248)]" : "hover:text-[rgb(112,66,248)]"
                  }`}
                >
                  {link.title}
                </button>
              ))}


            </div>
          </div>

        {/* Social Icons (Web) */}
          <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => {
                  handleNavClick(link.link);
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              >
                {link.title}
              </button>
            ))}

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};