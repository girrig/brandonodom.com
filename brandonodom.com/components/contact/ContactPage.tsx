import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      {/* Centered rather than left-aligned like the other pages */}
      <div className="w-full pt-8 pb-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          <h1 className="text-2xl sm:text-3xl font-normal mb-3 text-center">
            Contact Me
          </h1>
          <div className="h-px w-16 bg-gray-300 mx-auto"></div>
        </div>
      </div>

      <div className="flex-1 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          {/* The link column takes only the width it needs; the form absorbs the rest. */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:shrink-0">
              <h2 className="text-xl font-normal mb-4">Find Me</h2>
              {/* One row per channel, same shape, brand color on hover. */}
              <div className="flex flex-col space-y-3">
                {/* Email */}
                <a
                  href="mailto:brandon.david.odom@gmail.com"
                  className="flex items-center group"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gmail group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gmail transition-colors">
                    brandon.david.odom@gmail.com
                  </span>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/brandonodom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-linkedin group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                    <FaLinkedinIn className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-linkedin transition-colors">
                    Brandon Odom
                  </span>
                </a>
                {/* Professional GitHub */}
                <a
                  href="https://github.com/brandonodom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-github group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                    <FaGithub className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-github transition-colors">
                    brandonodom (Professional)
                  </span>
                </a>
                {/* Personal GitHub */}
                <a
                  href="https://github.com/girrig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-github group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                    <FaGithub className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-github transition-colors">
                    girrig (Personal)
                  </span>
                </a>
              </div>
            </div>

            <div className="md:flex-1">
              <h2 className="text-xl font-normal mb-4">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
