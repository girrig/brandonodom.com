const page = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Resume content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-sm p-12 relative">
            {/* Download PDF button moved to top right of resume */}
            <div className="absolute top-6 right-6">
              <button className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors">
                Download PDF
              </button>
            </div>

            {/* Resume Header */}
            <div className="border-b border-gray-200 pb-6 mb-8">
              <h1 className="text-4xl font-light mb-2">John Doe</h1>
              <h2 className="text-xl text-gray-600 mb-4">
                Senior UI/UX Designer
              </h2>

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
                  contact@johndoe.com
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
                  +46 70 123 4567
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
                  Stockholm, Sweden
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
                  johndoe.com
                </div>
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
                    Senior UI/UX Designer
                  </h4>
                  <span className="text-sm text-gray-500">2020 - Present</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Design Studio Stockholm
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Led redesign of Nordea Banking Platform, increasing user
                    task completion by 34%
                  </li>
                  <li>
                    Created comprehensive design system now used by 40+
                    designers across 3 teams
                  </li>
                  <li>
                    Mentored 5 junior designers, introducing biweekly design
                    critiques
                  </li>
                  <li>
                    Reduced design-to-development handoff time by 60% through
                    improved processes
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    UI Designer
                  </h4>
                  <span className="text-sm text-gray-500">2017 - 2020</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Tech Innovations Inc.
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Redesigned flagship product UI, contributing to 28% increase
                    in user engagement
                  </li>
                  <li>
                    Introduced mobile-first design approach, expanding product
                    reach by 45%
                  </li>
                  <li>
                    Led user testing sessions with 150+ participants to inform
                    design decisions
                  </li>
                  <li>
                    Created interactive prototypes for 12 major feature releases
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    Frontend Developer
                  </h4>
                  <span className="text-sm text-gray-500">2015 - 2017</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Digital Agency
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Developed responsive websites for clients across various
                    industries
                  </li>
                  <li>
                    Collaborated with designers to implement pixel-perfect
                    interfaces
                  </li>
                  <li>
                    Optimized site performance, improving load times by an
                    average of 40%
                  </li>
                  <li>
                    Implemented accessibility improvements to meet WCAG 2.0
                    standards
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
                    MSc in Interaction Design
                  </h4>
                  <span className="text-sm text-gray-500">2013 - 2015</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Royal Institute of Technology
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>
                    Thesis: "Minimalism in Digital Interfaces: Impact on User
                    Experience"
                  </li>
                  <li>
                    Research Assistant for Prof. Anna Eriksson's work on
                    accessibility standards
                  </li>
                  <li>
                    Won Best Design Project Award for collaborative healthcare
                    app prototype
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-medium text-gray-800">
                    BSc in Computer Science
                  </h4>
                  <span className="text-sm text-gray-500">2010 - 2013</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Stockholm University
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                  <li>Graduated with honors (GPA 3.8/4.0)</li>
                  <li>
                    Teaching Assistant for Introduction to Web Development
                    course
                  </li>
                  <li>
                    Member of the university's UX Design Club, organized 3
                    design workshops
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
                      "Designing for Simplicity"
                    </h4>
                    <p className="text-sm text-gray-600">UX Magazine</p>
                  </div>
                  <span className="text-sm text-gray-500">2022</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="text-base font-medium text-gray-800">
                      "Component-Based Design Systems"
                    </h4>
                    <p className="text-sm text-gray-600">Medium</p>
                  </div>
                  <span className="text-sm text-gray-500">2021</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="text-base font-medium text-gray-800">
                      "The Future of Responsive Web Design"
                    </h4>
                    <p className="text-sm text-gray-600">Smashing Magazine</p>
                  </div>
                  <span className="text-sm text-gray-500">2020</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Skills
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Design
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      UI Design
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      UX Design
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Wireframing
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Prototyping
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Design Systems
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      User Research
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Development
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      HTML5 & CSS3
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      React
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      SASS/SCSS
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Tools
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Figma
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Adobe XD
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Sketch
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      VS Code
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Git
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Professional
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Design Leadership
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Project Management
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded mr-2 mb-2">
                      Agile/Scrum
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
                    Nielsen Norman Group UX Certification
                  </span>
                  <span className="text-sm text-gray-500">2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">
                    Advanced React Patterns, Frontend Masters
                  </span>
                  <span className="text-sm text-gray-500">2021</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">
                    Design Systems Workshop with Brad Frost
                  </span>
                  <span className="text-sm text-gray-500">2020</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-800">
                    TypeScript for UI Developers
                  </span>
                  <span className="text-sm text-gray-500">2019</span>
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
                  Languages: English (Fluent), Swedish (Native), German
                  (Intermediate)
                </p>
                <p className="text-sm text-gray-600">
                  UX Mentor at Stockholm Tech Incubator (2021-Present), Web
                  Accessibility Workshop Instructor (2020)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
