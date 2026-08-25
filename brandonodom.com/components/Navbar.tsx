"use client";

import { caveat } from "@/fonts";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
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
      isActive ? "text-ink font-medium" : "text-muted hover:text-ink"
    }`;
  };

  return (
    <header className="h-20 z-10 overflow-visible">
      {/* Rule sits on the inner container so it spans the content, not the viewport */}
      <div className="h-full max-w-6xl mx-auto px-4 sm:px-12 flex items-center justify-between border-b border-line">
        {/* Left side: Wordmark */}
        <div className="flex items-center">
          {/* 40px because text-5xl overflows an 80px header, and arbitrary
              sizes need their leading set explicitly. */}
          <Link
            href="/"
            className={`${caveat.className} text-[40px] leading-none font-medium text-primary`}
          >
            Brandon Odom
          </Link>
        </div>

        {/* Right side: Desktop Navigation Links */}
        <nav className="flex max-sm:hidden items-center space-x-8">
          <Link href="/" className={getLinkStyling("/")}>
            About Me
            {pathname === "/" && (
              <div className="absolute bottom-0 left-0 w-full h-px bg-ink" />
            )}
          </Link>
          <Link href="/portfolio" className={getLinkStyling("/portfolio")}>
            Portfolio
            {pathname === "/portfolio" && (
              <div className="absolute bottom-0 left-0 w-full h-px bg-ink" />
            )}
          </Link>
          <Link href="/resume" className={getLinkStyling("/resume")}>
            Resume
            {pathname === "/resume" && (
              <div className="absolute bottom-0 left-0 w-full h-px bg-ink" />
            )}
          </Link>
          <Link href="/contact" className={getLinkStyling("/contact")}>
            Contact
            {pathname === "/contact" && (
              <div className="absolute bottom-0 left-0 w-full h-px bg-ink" />
            )}
          </Link>
        </nav>

        {/* Hamburger Menu Button (visible only on mobile) */}
        <button
          className="hidden max-sm:flex items-center p-2 text-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-20 right-0 w-40 bg-card border border-line rounded-bl-md shadow-md transition-all duration-300 z-20 ${
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
                true,
              )} text-right mb-1.5 relative group`}
            >
              <span className="relative inline-block">
                About Me
                {pathname === "/" && (
                  <div className="absolute -bottom-1.5 -left-1 right-0 h-px bg-ink" />
                )}
              </span>
            </Link>
            <Link
              href="/portfolio"
              className={`${getLinkStyling(
                "/portfolio",
                true,
              )} text-right mb-1.5 relative group`}
            >
              <span className="relative inline-block">
                Portfolio
                {pathname === "/portfolio" && (
                  <div className="absolute -bottom-1.5 -left-1 right-0 h-px bg-ink" />
                )}
              </span>
            </Link>
            <Link
              href="/resume"
              className={`${getLinkStyling(
                "/resume",
                true,
              )} text-right mb-1.5 relative group`}
            >
              <span className="relative inline-block">
                Resume
                {pathname === "/resume" && (
                  <div className="absolute -bottom-1.5 -left-1 right-0 h-px bg-ink" />
                )}
              </span>
            </Link>
            <Link
              href="/contact"
              className={`${getLinkStyling(
                "/contact",
                true,
              )} text-right mb-3 relative group`}
            >
              <span className="relative inline-block">
                Contact
                {pathname === "/contact" && (
                  <div className="absolute -bottom-1.5 -left-1 right-0 h-px bg-ink" />
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
