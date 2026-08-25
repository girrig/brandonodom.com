import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Heading sits above the card. */}
      <div className="w-full pt-8 pb-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          <h1 className="text-2xl sm:text-3xl font-normal mb-3">About Me</h1>
          <div className="h-px w-16 bg-line"></div>
        </div>
      </div>

      {/* Main content container*/}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-12 pb-6 sm:pb-8">
        <div className="bg-card/80 border border-line rounded-lg shadow-lg p-4 sm:p-8">
          <div className="flex flex-col md:flex-row">
            {/* Left content panel - About Me text */}
            <div className="w-full md:w-1/2 pt-3 pb-6 px-2 md:p-6 flex flex-col justify-center order-2 md:order-1">
              <div>
                {/* Lead paragraph, larger and darker so the eye has a start */}
                <p className="text-lg sm:text-xl text-ink max-w-md leading-snug mb-6">
                  I&apos;m Brandon, a software engineer with over 10 years of
                  experience across industry and academia.
                </p>
                <p className="text-ink-soft max-w-md leading-relaxed mb-4">
                  I design and build cloud infrastructure, APIs, and UI.
                </p>
                <p className="text-ink-soft max-w-md leading-relaxed mb-4">
                  I hold a Master&apos;s in Computer Science from Mississippi
                  State University with a focus in Artificial Intelligence.
                </p>
                <p className="text-ink-soft max-w-md leading-relaxed mb-4">
                  I spent three years at Amazon Web Services on the CodeCatalyst
                  team (formerly CodeStar), where I launched several new
                  products and features and served as CodeStar&apos;s primary
                  engineer. Right now I&apos;m doing freelance work, building a
                  website end to end for a B2B industrial metals company.
                </p>
                <p className="text-ink-soft max-w-md leading-relaxed mb-4">
                  My personal projects gravitate toward game development and
                  financial markets. Outside of work, I&apos;m into hiking,
                  music, video games, and travel, and I&apos;m currently
                  learning Japanese.
                </p>
                <p className="text-ink-soft max-w-md leading-relaxed">
                  To learn more about my work, check out my{" "}
                  <Link
                    href="/portfolio"
                    className="text-link hover:text-link-hover transition-colors"
                  >
                    Portfolio
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
            {/* Right content panel - Photo */}
            <div className="w-full md:w-1/2 p-3 md:p-6 flex items-center justify-center order-1 md:order-2">
              {/* bg only shows if the photo fails to load, since next/image
                  sizes the wrapper to the image exactly */}
              <div className="relative overflow-hidden bg-sunken max-w-xs md:max-w-full mx-auto">
                <Image
                  src="/portrait.png"
                  alt="Brandon Odom outdoors near a waterfall"
                  width={400}
                  height={500}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 border border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
