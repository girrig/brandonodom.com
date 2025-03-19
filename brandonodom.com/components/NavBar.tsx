"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname = usePathname();
  // Helper function to determine link styling based on the current page
  const getLinkStyling = (path: string) => {
    const isActive = pathname === path;
    return `relative px-1 py-2 text-sm transition-colors ${
      isActive ? "text-black font-medium" : "text-gray-400 hover:text-gray-800"
    }`;
  };
  return (
    <header className="h-20 bg-white border-b border-gray-100 px-12 flex items-center justify-between z-10">
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
          <span className="text-lg font-light ml-3 transition-colors group-hover:text-black">
            John Doe
          </span>
        </Link>
      </div>
      {/* Right side: Navigation Links */}
      <nav className="flex items-center space-x-8">
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
    </header>
  );
};
export default NavBar;
