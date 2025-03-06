import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            priority
          ></Image>
        </Link>
        <div className="flex items-center gap-5">
          <>
            <Link href="/about">
              <span>About Me</span>
            </Link>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
