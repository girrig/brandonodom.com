import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Main content container*/}
        <div className="max-w-6xl w-full flex flex-col md:flex-row mx-auto">
          {/* Left content panel - About Me text */}
          <div className="w-full md:w-1/2 pt-3 pb-6 px-6 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <div>
              <div className="text-xs tracking-widest uppercase text-gray-500 mb-1">
                About Me
              </div>
              <h1 className="text-4xl font-light mb-6">Brandon Odom</h1>
              <div className="h-px w-16 bg-gray-300 mb-6"></div>
              <p className="text-gray-600 max-w-md leading-relaxed mb-4">
                I am a Software Developer with over 10 years of combined
                experience across both academia and the tech industry. My main
                interests are in coding APIs and CI/CD.
              </p>
              <p className="text-gray-600 max-w-md leading-relaxed mb-4">
                I graduated with a Master&apos;s Degree in Computer Science with
                a specialization in Artificial Intelligence from Mississippi
                State University. In academia, I worked all across the software
                spectrum from UI design and implementation to cross platform
                APIs.
              </p>
              <p className="text-gray-600 max-w-md leading-relaxed mb-4">
                In my professional career, I worked at Amazon Web Services for 3
                years. I was a member of the CodeCatalyst team, formally
                CodeStar team. I helped launch multiple new products and
                features while maintaining and updating our existing services. I
                am currently working as a freelance software developer helping
                redesign a website for a large client.
              </p>
              <p className="text-gray-600 max-w-md leading-relaxed mb-4">
                My personal projects mainly revolve around the realms of game
                dev and financial markets. In my free time I enjoy playing video
                games, hiking, music, and traveling.
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
                alt="Author Portrait"
                width={400}
                height={500}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 border border-white border-opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
