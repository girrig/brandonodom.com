import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="w-full pt-6 pb-3 flex justify-center items-center">
          <div className="text-center">
            <div className="text-xs tracking-widest uppercase text-gray-500 mb-1">
              Portfolio
            </div>
            <h1 className="text-3xl font-light mb-6">My Work</h1>
            <div className="h-px w-16 bg-gray-300 mb-3 mx-auto"></div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex-1 pb-8 px-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Project 1 - Image on Left */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden rounded">
                    <Image
                      src="/projectimage.png"
                      alt="project image"
                      width={600}
                      height={340}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">
                    Minimal E-commerce
                  </h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-4">
                    UI Design / React
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    A modern e-commerce platform designed with minimalism and
                    usability in mind. The focus was on creating a seamless
                    shopping experience with intuitive navigation and a clean
                    aesthetic.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Improved checkout conversion rate by 24%</li>
                    <li>
                      • Simplified product discovery through intelligent
                      filtering
                    </li>
                    <li>
                      • Integrated with headless CMS for content management
                    </li>
                  </ul>
                  <a href="#" className="text-sm font-medium hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Image on Right */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 md:pl-8 mb-6 md:mb-0">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden rounded">
                    <Image
                      src="/projectimage.png"
                      alt="project image"
                      width={600}
                      height={340}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">
                    Investment Dashboard
                  </h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-4">
                    UX Research / UI Design
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    A comprehensive dashboard for investment portfolio
                    management, focusing on data visualization and actionable
                    insights. The design prioritizes clarity and quick
                    decision-making.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>
                      • Conducted user research with 25+ investment
                      professionals
                    </li>
                    <li>• Created custom data visualization components</li>
                    <li>
                      • Implemented real-time data updates with minimal latency
                    </li>
                  </ul>
                  <a href="#" className="text-sm font-medium hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Image on Left */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden rounded">
                    <Image
                      src="/projectimage.png"
                      alt="project image"
                      width={600}
                      height={340}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">Travel App</h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-4">
                    Mobile Design / Development
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    A mobile app designed for travelers seeking authentic local
                    experiences. The interface focuses on discovery through
                    visual storytelling and personalized recommendations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Designed for iOS and Android using React Native</li>
                    <li>• Implemented location-based recommendations</li>
                    <li>
                      • Created an offline mode for travelers without
                      connectivity
                    </li>
                  </ul>
                  <a href="#" className="text-sm font-medium hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 - Image on Right */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 md:pl-8 mb-6 md:mb-0">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden rounded">
                    <Image
                      src="/projectimage.png"
                      alt="project image"
                      width={600}
                      height={340}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">Design System</h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-4">
                    Component Library / Documentation
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    A comprehensive design system created for a financial
                    services company. The system includes components, patterns,
                    and guidelines that ensure consistency across products.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Built a library of 60+ reusable components</li>
                    <li>• Created documentation with interactive examples</li>
                    <li>• Reduced design-to-development handoff time by 40%</li>
                  </ul>
                  <a href="#" className="text-sm font-medium hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
