import { Download, Globe, Mail, MapPin, Phone } from "lucide-react";

interface ResumeContentProps {
  onDownload?: () => void;
}

const ResumeContent = ({ onDownload }: ResumeContentProps) => {
  return (
    <>
      {/* Desktop Download PDF button */}
      {onDownload && (
        <div className="absolute top-6 right-6 hidden sm:block">
          <button
            onClick={onDownload}
            className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      )}

      {/* Resume Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-light mb-2">Brandon Odom</h1>
        <h2 className="text-xl text-gray-800 mb-4">Software Engineer</h2>

        <div className="flex flex-wrap text-sm text-gray-800">
          <div className="mr-6 mb-2 flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            brandon.david.odom@gmail.com
          </div>
          <div className="mr-6 mb-2 flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            (228) 493-6366
          </div>
          <div className="mr-6 mb-2 flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Austin, Texas
          </div>
          <div className="mb-2 flex items-center">
            <Globe className="w-4 h-4 mr-2" />
            brandonodom.com
          </div>
        </div>

        {/* Mobile Download PDF button */}
        {onDownload && (
          <div className="sm:hidden mt-4 flex justify-center">
            <button
              onClick={onDownload}
              className="w-2/3 px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        )}
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-300 pb-2 break-after-avoid">
          Professional Experience
        </h3>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-base font-medium text-gray-900">
              Fullstack Software Engineer
            </h4>
            <span className="text-sm text-gray-600">Nov 2024 - Present</span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            Freelance
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Leading the end-to-end website redesign for a B2B industrial metal
              products company as the sole engineer and designer, replacing an
              outdated legacy platform
            </li>
            <li>
              Designing the full user experience and a modern, responsive
              interface from scratch
            </li>
            <li>
              Building a searchable product catalog with technical
              specifications and direct online ordering
            </li>
            <li>
              Creating quote-request and contact forms that route customer
              inquiries to the sales team
            </li>
            <li>
              Integrating a headless CMS so the business can manage products and
              content without a developer
            </li>
          </ul>
        </div>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-base font-medium text-gray-900">
              Career Break
            </h4>
            <span className="text-sm text-gray-600">Jul 2022 - Nov 2024</span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            Family Caregiving
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Relocated home to provide full-time care for an aging family
              member during a period of medical need; returned to software
              engineering in 2024
            </li>
          </ul>
        </div>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-base font-medium text-gray-900">
              Software Development Engineer
            </h4>
            <span className="text-sm text-gray-600">Sept 2019 - Jul 2022</span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            Amazon Web Services
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Became AWS CodeStar&apos;s primary engineer in just five months,
              maintaining the live service through patches and version upgrades
            </li>
            <li>
              Created and maintained 40+ project templates that helped CodeStar
              users bootstrap new projects
            </li>
            <li>
              Served as CodeStar&apos;s org-wide point of contact, fielding
              functionality, compliance, and security questions from teams
              across Amazon
            </li>
            <li>
              Contributed to CodeCatalyst, CodeStar&apos;s successor,
              influencing blueprint design and building internal tooling
            </li>
            <li>
              Partnered with the region-build team to expand CodeStar to an
              additional AWS region
            </li>
            <li>
              Resolved critical security issues and maintained runbooks,
              scripts, and wikis while serving in the on-call rotation
            </li>
          </ul>
        </div>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline">
            <h4 className="text-base font-medium text-gray-900">
              Graduate Research Assistant
            </h4>
            <span className="text-sm text-gray-600">Jan 2016 - Dec 2017</span>
          </div>
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-base font-medium text-gray-900">
              Student Worker
            </h4>
            <span className="text-sm text-gray-600">May 2014 - Dec 2015</span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            Center for Advanced Vehicular Systems
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Built the ANVEL-ROS bridge, exchanging video, sensor data, and
              control commands between the ROS framework and the ANVEL simulator
              in real time
            </li>
            <li>
              Validated ANVEL&apos;s simulation accuracy by running identical
              commands on a physical robot and its digital twin
            </li>
            <li>
              Designed user interfaces for human-factors studies on robot
              teleoperation, measuring how different designs affected operator
              performance
            </li>
          </ul>
        </div>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline">
            <h4 className="text-base font-medium text-gray-900">IT Intern</h4>
            <span className="text-sm text-gray-600">
              May 2012 - Jul 2012; May 2013 - Jul 2013
            </span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            St. Stanislaus College
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Set up a computer lab from scratch, cloning drives and
              standardizing configurations across every machine
            </li>
            <li>
              Upgraded hardware and software across lab, teacher, and faculty
              computers campus-wide
            </li>
            <li>
              Onboarded teachers onto the PowerGrade grading system, creating
              and configuring their accounts
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-300 pb-2 break-after-avoid">
          Skills
        </h3>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2 break-inside-avoid">
          <div className="mb-3">
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Development
            </h4>
            <div className="flex flex-wrap">
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                TypeScript
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                JavaScript
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Python
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Java
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                C++
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                React
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Next.js
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                HTML5
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                CSS
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Tailwind
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Node.js
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                API Development
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                E-commerce
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                ROS
              </span>
            </div>
          </div>

          <div className="mb-3">
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Cloud &amp; DevOps
            </h4>
            <div className="flex flex-wrap">
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                AWS
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                CloudFormation
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                CI/CD
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Docker
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Vercel
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Digital Ocean
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Security
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                On-Call
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Agile/Scrum
              </span>
            </div>
          </div>

          <div className="mb-3">
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Tools &amp; Services
            </h4>
            <div className="flex flex-wrap">
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                LLMs
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Git
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Headless CMS
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Algolia
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                VS Code
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                IntelliJ IDEA
              </span>
            </div>
          </div>

          <div className="mb-3">
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Design &amp; Research
            </h4>
            <div className="flex flex-wrap">
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                UI Design
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                UX Design
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Prototyping
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                User Research
              </span>
              <span className="px-2 py-1 border border-gray-300 text-gray-900 text-xs rounded-sm mr-2 mb-2">
                Human Factors
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-300 pb-2 break-after-avoid">
          Education
        </h3>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-base font-medium text-gray-900">
              MS in Computer Science{" "}
              <span className="text-sm font-normal text-gray-700 align-baseline">
                · Artificial Intelligence
              </span>
            </h4>
            <span className="text-sm text-gray-600">2015 - 2017</span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            Mississippi State University
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Master&apos;s Project, &quot;Therabot UI&quot;: designed and built
              a human-friendly interface for Therabot, a robotic therapy dog for
              children
            </li>
            <li>
              Researched under Prof. Cindy Bethel, co-authoring peer-reviewed
              publications
            </li>
            <li>
              Completed a directed study with Prof. Chris Archibald, migrating
              the database and modernizing his CueCard pool simulator to a
              current Python release
            </li>
          </ul>
        </div>

        <div className="mb-6 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-base font-medium text-gray-900">
              BS in Computer Science{" "}
              <span className="text-sm font-normal text-gray-700 align-baseline">
                · Minor in Cognitive Science
              </span>
            </h4>
            <span className="text-sm text-gray-600">2011 - 2015</span>
          </div>
          <div className="text-sm font-medium text-gray-800 mb-2">
            Mississippi State University
          </div>
          <ul className="text-sm text-gray-800 space-y-1 pl-4 list-disc">
            <li>
              Member of the Social, Therapeutic, and Robotic Systems Lab (STaRS
              Lab)
            </li>
          </ul>
        </div>
      </div>

      {/* Publications Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-300 pb-2 break-after-avoid">
          Publications
        </h3>

        <div className="space-y-3 break-inside-avoid">
          <div className="flex justify-between items-baseline">
            <div>
              <h4 className="text-base font-medium text-gray-900">
                &quot;Therabot™: A Robotic Support Companion&quot;
              </h4>
              <p className="text-sm text-gray-800">
                Darrow, Sarah, Aaron Kimbrell, Nikhil Lokhande, Nicholas
                Dinep-Schneider, T. J. Ciufo,{" "}
                <span className="font-semibold">Brandon Odom</span>, Zachary
                Henkel, and Cindy L. Bethel. &quot;Therabot™: A Robotic Support
                Companion.&quot; In Companion of the 2018 ACM/IEEE International
                Conference on Human-Robot Interaction, pp. 37-37. ACM, 2018.
              </p>
            </div>
            <span className="text-sm text-gray-600">2018</span>
          </div>

          <div className="flex justify-between items-baseline">
            <div>
              <h4 className="text-base font-medium text-gray-900">
                &quot;ANVEL-ROS: The integration of the robot operating system
                with a high-fidelity simulator.&quot;
              </h4>
              <p className="text-sm text-gray-800">
                Hudson, Christopher R., Alexander Lalejini,{" "}
                <span className="font-semibold">Brandon Odom</span>, Cindy L.
                Bethel, Daniel W. Carruth, Phillip J. Durst, and Christopher
                Goodin. &quot;ANVEL-ROS: The integration of the robot operating
                system with a high-fidelity simulator.&quot; In Proceedings of
                the Ground Vehicle Systems Engineering and Technology Symposium,
                p. 378. 2015.
              </p>
            </div>
            <span className="text-sm text-gray-600">2015</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeContent;
