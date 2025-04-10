import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Header Section */}
        <div className="w-full pt-6 pb-3 px-4 sm:px-6 flex justify-center items-center">
          <div className="text-center">
            <div className="text-xs tracking-widest uppercase text-gray-500 mb-1">
              Portfolio
            </div>
            <h1 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
              Professional and Personal Projects
            </h1>
            <div className="h-px w-16 bg-gray-300 mb-3 mx-auto"></div>
          </div>
        </div>

        {/* Projects Panel */}
        <div className="flex-1 pb-6 sm:pb-8 px-4 sm:px-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* CodeStar and CodeCatalyst - Image on Left */}
            <div className="bg-white rounded-lg shadow-xs p-4 sm:p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-8 mb-5 md:mb-0">
                  <div className="relative overflow-hidden rounded-sm flex items-center justify-center">
                    <Image
                      src="/portfolio/CodeStarCodeCatalyst.png"
                      alt="CodeStar and CodeCatalyst Images"
                      width={1024}
                      height={512}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">
                    CodeStar and CodeCatalyst
                  </h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                    Java / CloudFormation / Templates
                  </div>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                    Amazon CodeCatalyst, and previously CodeStar (RIP), is a
                    unified software development service, leveraging the power
                    of the AWS Code Suite, that enables development teams to
                    quickly build and deliver scalable applications using AWS.
                  </p>
                  <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                    <li>
                      Contributed to the release of multiple products and
                      features
                    </li>
                    <li>Created and maintained 40+ templates for our users</li>
                    <li>
                      Upgraded and maintenanced crucial live service
                      infrastructure
                    </li>
                  </ul>
                  <a
                    href="https://aws.amazon.com/codecatalyst/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    View Website →
                  </a>
                </div>
              </div>
            </div>

            {/* Therabot - Image on Right */}
            <div className="bg-white rounded-lg shadow-xs p-4 sm:p-6">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 md:pl-8 mb-5 md:mb-0">
                  <div className="relative overflow-hidden rounded-sm flex items-center justify-center">
                    <Image
                      src="/portfolio/therabot.png"
                      alt="Therabot image"
                      width={1804}
                      height={975}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">Therabot</h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                    JavaScript / Three.js / UIkit / Autodesk Maya / Robotics
                  </div>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                    Therabot is a robotic dog and support companion for
                    individuals undergoing therapy. It exhibits a lifelike
                    awareness of its surroundings, including sensing and
                    responding to touch.
                  </p>
                  <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                    <li>
                      Created a web UI to more easily sequence the robots motors
                    </li>
                    <li>Assisted in writing some back end motor code</li>
                    <li>Wrote a few technical parts of published papers</li>
                  </ul>
                  <a
                    href="https://mytherabot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    View Website →
                  </a>
                </div>
              </div>
            </div>

            {/* ANVEL-ROS - Image on Left */}
            <div className="bg-white rounded-lg shadow-xs p-4 sm:p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-8 mb-5 md:mb-0">
                  <div className="relative overflow-hidden rounded-sm flex items-center justify-center">
                    <Image
                      src="/portfolio/ANVELROS.png"
                      alt="ANVELROS Bridge image"
                      width={577}
                      height={420}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">ANVEL-ROS</h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                    C++ / Python / ANVEL / ROS / Robotics
                  </div>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                    The Autonomous Navigation Virtual Environment Laboratory
                    (ANVEL) simulator was combined with the Robot Operating
                    System (ROS) to create a new interface, the ANVEL-ROS
                    bridge. It was developed to show the realism of the ANVEL
                    simulator by mimicking the actions of real world robots.
                  </p>
                  <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                    <li>Created the ROS side of the ANVEL-ROS bridge</li>
                    <li>Developed multiple UIs for human factors research</li>
                    <li>
                      Assisted in robot modification in maintenance both
                      hardware and software
                    </li>
                  </ul>
                  <a
                    href="https://www.semanticscholar.org/paper/ANVEL-ROS%3A-THE-INTEGRATION-OF-THE-ROBOT-OPERATING-A-Hudson-Lalejini/1f40c34a0c6a8fac74c8ac462b4132c1e820070b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    View Paper →
                  </a>
                </div>
              </div>
            </div>

            {/* Llama Game - Image on Right */}
            <div className="bg-white rounded-lg shadow-xs p-4 sm:p-6">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 md:pl-8 mb-5 md:mb-0">
                  <div className="relative overflow-hidden rounded-sm flex items-center justify-center">
                    <Image
                      src="/portfolio/llamagame.png"
                      alt="Llama Game image"
                      width={640}
                      height={480}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">Llama Game</h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                    Python / Pygame
                  </div>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                    Llama Game is a personal project I started back in 2012. It
                    was intended to be a fun, small project with simple
                    mechanics and a basic GUI. But it became more of a
                    playground to test different types of algorithms with visual
                    feedback. Also a good friend of mine created some cute
                    graphics to give it some life.
                  </p>
                  <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                    <li>
                      <a
                        href="https://brandonodom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        <b>Programming: </b>Brandon Odom
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/RickDolphen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        <b>Art: </b>Rick Dolphen
                      </a>
                    </li>
                  </ul>
                  <p className="text-sm font-medium">Project Not Released</p>
                </div>
              </div>
            </div>

            {/* Houses of Cards - Image on Left */}
            <div className="bg-white rounded-lg shadow-xs p-4 sm:p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-8 mb-5 md:mb-0">
                  <div className="relative overflow-hidden rounded-sm flex items-center justify-center">
                    <Image
                      src="/portfolio/housesofcards.png"
                      alt="Houses of Cards image"
                      width={225}
                      height={315}
                      className="w-1/2 h-full object-contain mx-auto md:mx-0"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-medium mb-2">Houses of Cards</h3>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                    Javascript / Socket.IO
                  </div>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                    Houses of Cards is an upcoming ruling class tabletop game
                    that can be played with or without RPG elements. Designed to
                    be simple to understand and quick to set up. Currently
                    developing a web version with a physical one to follow. More
                    info and links will be added here when it comes closer to
                    release.
                  </p>
                  <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                    <li>
                      <a
                        href="https://twitter.com/RazgrizTwo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        <b>Design: </b>Alec Szczechowski
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://brandonodom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        <b>Programming: </b>Brandon Odom
                      </a>
                    </li>
                  </ul>
                  <p className="text-sm font-medium">Project Not Released</p>
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
