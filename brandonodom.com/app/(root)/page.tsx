import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Main content container with max-width */}
        <div className="max-w-5xl w-full flex mx-auto">
          {/* Left content panel - About Me text */}
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <div>
              <div className="text-xs tracking-widest uppercase text-gray-500 mb-1">
                About Me
              </div>
              <h1 className="text-4xl font-light mb-6">John Doe</h1>
              <div className="h-px w-16 bg-gray-300 mb-6"></div>
              <p className="text-gray-600 max-w-md leading-relaxed mb-4">
                I'm a designer and developer with over 10 years of experience
                creating thoughtful digital experiences that balance form and
                function.
              </p>
              <p className="text-gray-600 max-w-md leading-relaxed mb-4">
                Based in Stockholm, I work with clients worldwide to build
                products that are both beautiful and usable. My approach
                combines minimalist aesthetics with user-centered design
                principles.
              </p>
              <p className="text-gray-600 max-w-md leading-relaxed">
                When I'm not designing interfaces or writing code, you'll find
                me exploring photography, reading design theory, or
                experimenting with typography.
              </p>
              <div className="mt-8 flex flex-wrap">
                {/* Expertise and Tools moved to portfolio page */}
              </div>
            </div>
          </div>
          {/* Right content panel - Photo */}
          <div className="w-1/2 p-16 flex items-center justify-center">
            <div className="w-4/5 relative overflow-hidden bg-gray-100">
              <Image
                src="/aboutme.png"
                alt="portrait"
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

export default About;
