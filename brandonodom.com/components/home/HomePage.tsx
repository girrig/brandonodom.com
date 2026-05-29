import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Main content container*/}
      <div className="max-w-6xl w-full flex flex-col md:flex-row mx-auto">
        {/* Left content panel - About Me text */}
        <div className="w-full md:w-1/2 pt-3 pb-6 px-6 md:p-12 flex flex-col justify-center order-2 md:order-1">
          <div>
            <h1 className="text-2xl sm:text-3xl font-light mb-3">About Me</h1>
            <div className="h-px w-16 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 max-w-md leading-relaxed mb-4">
              I&apos;m Brandon, a software engineer with over 10 years of
              experience across industry and academia. I design and build cloud
              infrastructure, APIs, and UI.
            </p>
            <p className="text-gray-600 max-w-md leading-relaxed mb-4">
              I hold a Master&apos;s in Computer Science from Mississippi State
              University with a focus in Artificial Intelligence.
            </p>
            <p className="text-gray-600 max-w-md leading-relaxed mb-4">
              I spent three years at Amazon Web Services on the CodeCatalyst
              team (formerly CodeStar), where I launched several new products
              and features and served as CodeStar&apos;s primary engineer. Right
              now I&apos;m doing freelance work, building a website end to end
              for a B2B industrial metals company.
            </p>
            <p className="text-gray-600 max-w-md leading-relaxed mb-4">
              My personal projects gravitate toward game development and
              financial markets. Outside of work, I&apos;m into hiking, music,
              video games, and travel.
            </p>
            <p className="text-gray-600 max-w-md leading-relaxed">
              To learn more about my work, check out my{" "}
              <Link
                href="/portfolio"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Portfolio
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
        {/* Right content panel - Photo */}
        <div className="w-full md:w-1/2 p-3 md:p-12 flex items-center justify-center order-1 md:order-2">
          <div className="relative overflow-hidden bg-gray-100 max-w-xs md:max-w-full mx-auto">
            <Image
              src="/portrait.png"
              alt="Brandon Odom outdoors near a waterfall"
              width={400}
              height={500}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 border border-white border-opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
