"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when we switch pages
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // sm breakpoint is 640px in Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to determine link styling based on the current page
  const getLinkStyling = (path: string, isMobile = false) => {
    const isActive = pathname === path;
    return `relative ${
      isMobile ? "py-2.5 text-base w-full" : "px-1 py-2 text-sm"
    } transition-colors ${
      isActive ? "text-black font-medium" : "text-gray-400 hover:text-gray-800"
    }`;
  };

  return (
    <header className="h-20 bg-white border-b border-gray-100 px-4 sm:px-12 flex items-center justify-between z-10">
      {/* Left side: Logo and Name */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center group transition-all duration-300"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            priority
            className="transform transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-light ml-2 transition-colors group-hover:text-black">
            Brandon Odom
          </span>
        </Link>
      </div>

      {/* Right side: Desktop Navigation Links */}
      <nav className="flex max-sm:hidden items-center space-x-8">
        <Link href="/" className={getLinkStyling("/")}>
          Home
          {pathname === "/" && (
            <div className="absolute bottom-0 left-0 w-full h-px bg-black" />
          )}
        </Link>
        <Link href="/portfolio" className={getLinkStyling("/portfolio")}>
          Portfolio
          {pathname === "/portfolio" && (
            <div className="absolute bottom-0 left-0 w-full h-px bg-black" />
          )}
        </Link>
        <Link href="/resume" className={getLinkStyling("/resume")}>
          Resume
          {pathname === "/resume" && (
            <div className="absolute bottom-0 left-0 w-full h-px bg-black" />
          )}
        </Link>
        <Link href="/contact" className={getLinkStyling("/contact")}>
          Contact
          {pathname === "/contact" && (
            <div className="absolute bottom-0 left-0 w-full h-px bg-black" />
          )}
        </Link>
      </nav>

      {/* Hamburger Menu Button (visible only on mobile) */}
      <button
        className="hidden max-sm:flex flex-col space-y-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-20 right-0 w-40 bg-white border border-gray-100 rounded-bl-md shadow-md transition-all duration-300 z-20 ${
          isMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="pl-4 pr-8 py-2 flex flex-col">
          <Link
            href="/"
            className={`${getLinkStyling(
              "/",
              true
            )} text-right mb-1.5 relative group`}
          >
            <span className="relative inline-block">
              Home
              {pathname === "/" && (
                <div className="absolute -bottom-1.5 left-[-0.25rem] right-0 h-px bg-black" />
              )}
            </span>
          </Link>
          <Link
            href="/portfolio"
            className={`${getLinkStyling(
              "/portfolio",
              true
            )} text-right mb-1.5 relative group`}
          >
            <span className="relative inline-block">
              Portfolio
              {pathname === "/portfolio" && (
                <div className="absolute -bottom-1.5 left-[-0.25rem] right-0 h-px bg-black" />
              )}
            </span>
          </Link>
          <Link
            href="/resume"
            className={`${getLinkStyling(
              "/resume",
              true
            )} text-right mb-1.5 relative group`}
          >
            <span className="relative inline-block">
              Resume
              {pathname === "/resume" && (
                <div className="absolute -bottom-1.5 left-[-0.25rem] right-0 h-px bg-black" />
              )}
            </span>
          </Link>
          <Link
            href="/contact"
            className={`${getLinkStyling(
              "/contact",
              true
            )} text-right mb-3 relative group`}
          >
            <span className="relative inline-block">
              Contact
              {pathname === "/contact" && (
                <div className="absolute -bottom-1.5 left-[-0.25rem] right-0 h-px bg-black" />
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
