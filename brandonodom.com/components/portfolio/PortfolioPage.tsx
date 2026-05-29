import Image from "next/image";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="w-full pt-6 pb-3 px-4 sm:px-6 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-light mb-3">Portfolio</h1>
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
                    alt="CodeStar and CodeCatalyst logos"
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
                  Amazon CodeCatalyst (previously CodeStar) is a unified
                  software development service that enables teams to quickly
                  build and deliver scalable applications on AWS, powered by the
                  AWS Code Suite.
                </p>
                <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                  <li>
                    Bootstraps new projects from 40+ ready-to-use templates
                    spanning multiple languages and frameworks
                  </li>
                  <li>
                    Bundles source control, CI/CD pipelines, and IDE integration
                    into a single project workflow
                  </li>
                  <li>
                    Successor CodeCatalyst expands the offering with redesigned
                    blueprints, team collaboration, and deeper AWS integration
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
                    alt="Therabot logo with a cartoon robotic dog"
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
                  Therabot is a robotic dog and support companion developed at
                  Mississippi State&apos;s STaRS Lab, used in therapy with
                  children &mdash; including those on the autism spectrum and
                  others in trauma-informed care.
                </p>
                <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                  <li>
                    Senses and responds to touch with the lifelike awareness of
                    a real dog
                  </li>
                  <li>
                    Web-based UI for sequencing motors and choreographing
                    behaviors
                  </li>
                  <li>
                    Documented in peer-reviewed research presented at the
                    ACM/IEEE HRI conference
                  </li>
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
                    alt="ANVEL-ROS bridge architecture diagram"
                    width={577}
                    height={420}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-medium mb-2">ANVEL-ROS</h3>
                <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                  Python / C++ / ANVEL / ROS / Robotics
                </div>
                <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                  The ANVEL-ROS bridge is software developed at Mississippi
                  State&apos;s Center for Advanced Vehicular Systems. It
                  connects the Autonomous Navigation Virtual Environment
                  Laboratory (ANVEL) simulator with the Robot Operating System
                  (ROS), letting robots and their digital twins share commands
                  and sensor data in real time.
                </p>
                <ul className="list-disc text-sm text-gray-600 space-y-1 ml-4 mb-3 sm:mb-4">
                  <li>
                    Validates simulator accuracy by running identical commands
                    on physical robots and their virtual counterparts
                  </li>
                  <li>
                    Pairs with companion UIs for human-factors studies,
                    measuring how interface design affects robot teleoperation
                    performance
                  </li>
                  <li>
                    Documented in peer-reviewed research presented at the Ground
                    Vehicle Systems Engineering and Technology Symposium
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
                    alt="Llama Game screenshot of a pixel-art field with trees, a llama, and a tiger"
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
                  Llama Game started in 2012 as a summer side project, a way to
                  keep coding when classes weren&apos;t requiring it. The
                  original idea was an open-world sim with emergent gameplay;
                  it&apos;s since become a sandbox for prototyping algorithms
                  with visual feedback. Original art by{" "}
                  <a
                    href="https://twitter.com/RickDolphen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Rick Dolphen
                  </a>
                  .
                </p>
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
                    alt="Queen of Hearts playing card"
                    width={225}
                    height={315}
                    className="w-1/2 h-full object-contain mx-auto md:mx-0"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-medium mb-2">Houses of Cards</h3>
                <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 sm:mb-4">
                  JavaScript / Socket.IO
                </div>
                <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                  Houses of Cards is a tabletop card game designed by{" "}
                  <a
                    href="https://twitter.com/RazgrizTwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Alec Szczechowski
                  </a>
                  . It&apos;s playable with any standard deck &mdash; each card
                  carries its own meaning, suits have built-in affinities, and
                  gameplay unfolds emergently as a lookup table fires events
                  based on what&apos;s drawn. A Python build simulates the rules
                  end to end, and an early web prototype lets players drag and
                  drop cards on screen.
                </p>
                <p className="text-sm font-medium">Project Not Released</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
