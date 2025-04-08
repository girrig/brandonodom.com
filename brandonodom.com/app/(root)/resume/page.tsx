"use client";

const Page = () => {
  const handleDownloadPdf = () => {
    window.open("/resume/Brandon_Odom_Resume.pdf", "_blank");
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Resume Panel */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-xs p-12 relative">
            {/* Desktop Download PDF button */}
            <div className="absolute top-6 right-6 hidden sm:block">
              <button
                onClick={handleDownloadPdf}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
              >
                Download PDF
              </button>
            </div>

            {/* Resume Header */}
            <div className="border-b border-gray-200 pb-6 mb-8">
              <h1 className="text-4xl font-light mb-2">Brandon Odom</h1>
              <h2 className="text-xl text-gray-600 mb-4">Software Engineer</h2>

              <div className="flex flex-wrap text-sm text-gray-600">
                <div className="mr-6 mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  brandon.david.odom@gmail.com
                </div>
                <div className="mr-6 mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (228) 493-6366
                </div>
                <div className="mr-6 mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Austin, Texas
                </div>
                <div className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                    />
                  </svg>
                  brandonodom.com
                </div>
              </div>

              {/* Mobile Download PDF button (visible only on mobile) */}
              <div className="sm:hidden mt-4">
                <button
                  onClick={handleDownloadPdf}
                  className="w-full px-3 py-1.5 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Professional Experience
              </h3>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    Software Engineer
                  </h4>
                  <span className="text-sm text-gray-500">
                    Nov 2024 - Present
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Unnamed Industrial Metal Company
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Leading redesign of a large industrial metal company&apos;s
                    website
                  </li>
                  <li>Leveraging contemporary web dev stack and tools</li>
                  <li>
                    Building out back end infrastructure to create a long
                    lasting and maintainable product
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    Software Development Engineer
                  </h4>
                  <span className="text-sm text-gray-500">
                    Sept 2019 - Jul 2022
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Amazon Web Services
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Contributed to the release of two new products</li>
                  <li>
                    Upgraded and maintenanced crucial live service
                    infrastructure
                  </li>
                  <li>
                    Routinely worked on-call to address critical and after-hours
                    issues
                  </li>
                  <li>
                    Created and maintained internal documentation and run books
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-base font-medium text-gray-800">
                    Graduate Research Assistant
                  </h4>
                  <span className="text-sm text-gray-500">
                    Jan 2016 - Dec 2017
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    Student Worker
                  </h4>
                  <span className="text-sm text-gray-500">
                    May 2014 - Dec 2015
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Center for Advanced Vehicular Systems
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Worked with Autonomous Navigation Virtual Environment
                    Laboratory (ANVEL), a high-fidelity real-time simulation
                    environment
                  </li>
                  <li>
                    Created a network bridge to allow for communication between
                    ANVEL and the Robotic Operating System (ROS)
                  </li>
                  <li>Developed multiple UIs for human factors studies</li>
                  <li>
                    Assisted in robot modification in maintenance both hardware
                    and software
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-base font-medium text-gray-800">
                    IT Intern
                  </h4>
                  <span className="text-sm text-gray-500">
                    May 2012 - Jul 2012; May 2013 - Jul 2013
                  </span>
                </div>

                <div className="text-sm font-medium text-gray-600 mb-2">
                  St. Stanislaus College
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Created accounts and conducted PowerGrade set up for
                    incoming teachers
                  </li>
                  <li>
                    Assisted summer personnel by troubleshooting various
                    computer issues
                  </li>
                  <li>
                    Performed routine maintenance and upgrades on all computers
                    on campus
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Education
              </h3>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    MS in Computer Science
                  </h4>
                  <span className="text-sm text-gray-500">2013 - 2015</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Mississippi State University
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Specialization: Artificial Intelligence</li>
                  <li>
                    Master&apos;s Project: &quot;Therabot UI: Creating a
                    human-friendly interface for Therabot interaction&quot;
                  </li>
                  <li>
                    Worked under Prof. Cindy Bethel on numerous social robotic
                    projects and papers
                  </li>
                  <li>
                    Worked with Prof. Chris Archibald on computational pool
                    simulator CueCard
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    BS in Computer Science
                  </h4>
                  <span className="text-sm text-gray-500">2010 - 2013</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Mississippi State University
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Minor: Cognitive Science</li>
                  <li>
                    Member of the Social, Therapeutic, and Robotic Systems Lab
                    (STaRS Lab)
                  </li>
                </ul>
              </div>
            </div>

            {/* Publications Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Publications
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="text-base font-medium text-gray-800">
                      &quot;Therabot™: A Robotic Support Companion&quot;
                    </h4>

                    <p className="text-sm text-gray-600">
                      Darrow, Sarah, Aaron Kimbrell, Nikhil Lokhande, Nicholas
                      Dinep-Schneider, T. J. Ciufo, Brandon Odom, Zachary
                      Henkel, and Cindy L. Bethel. &quot;Therabot™: A Robotic
                      Support Companion.&quot; In Companion of the 2018 ACM/IEEE
                      International Conference on Human-Robot Interaction, pp.
                      37-37. ACM, 2018.
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2018</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="text-base font-medium text-gray-800">
                      &quot;ANVEL-ROS: The integration of the robot operating
                      system with a high-fidelity simulator.&quot;
                    </h4>
                    <p className="text-sm text-gray-600">
                      Hudson, Christopher, Daniel W. Carruth, Cindy L. Bethel,
                      Alexander Lalejini, and Brandon Odom. &quot;ANVEL-ROS: The
                      integration of the robot operating system with a
                      high-fidelity simulator.&quot; In Proceedings of Ground
                      Vehicle Systems Engineering and Technology Symposium, p.
                      378. 2015.
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2015</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Skills
              </h3>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2">
                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Development
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Java
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      AWS
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      HTML5
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      React
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Tailwind
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      ROS
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      CLIPS
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Design
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      UI Design
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      UX Design
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Prototyping
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      User Research
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Human Factors
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Tools
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      VS Code
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Terminal
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      LLMs
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Git
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Microsoft Office
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Notion
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      IntelliJ IDEA
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Unreal Engine
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Maya
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Professional
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Agile/Scrum
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Design Leadership
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-sm mr-2 mb-2">
                      Time Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Certifications
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">
                    Institutional Review Board (IRB) Certification
                  </span>
                  <span className="text-sm text-gray-500">2015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">
                    International Traffic in Arms Regulations (ITAR)
                    Certification
                  </span>
                  <span className="text-sm text-gray-500">2014</span>
                </div>
              </div>
            </div>

            {/* Miscellaneous Section */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Miscellaneous
              </h3>

              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Alumni of the Social, Therapeutic, and Robotic Systems Lab
                  (STaRS Lab)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
