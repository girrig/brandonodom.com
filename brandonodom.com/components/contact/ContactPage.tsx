import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import styles from "./googleMapsAnimation.module.css";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      {/* Top content panel - Contact Info */}
      <div className="w-full px-4 sm:px-8 pb-2 pt-6 sm:pt-8 md:px-16 md:pb-2 md:pt-8 flex justify-center">
        <div className="max-w-4xl text-center bg-white p-4 sm:p-8 md:p-8 rounded-lg shadow-xs">
          <h1 className="text-2xl sm:text-3xl font-light mb-3">Contact Me</h1>
          <div className="h-px w-16 bg-gray-300 mb-3 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-4">
            <a
              href="mailto:brandon.david.odom@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Email
            </a>{" "}
            is the best way to reach me. You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/brandonodom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>{" "}
            and GitHub.
          </p>

          <div className="flex justify-center mb-6">
            <div className="flex flex-col space-y-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/brandonodom/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                  <FaLinkedinIn className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
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
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-purple-700 group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                  <FaGithub className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-purple-700 transition-colors">
                  (Professional) brandonodom
                </span>
              </a>
              {/* Personal GitHub */}
              <a
                href="https://github.com/girrig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-purple-700 group-hover:text-white group-hover:shadow-md transition-all transform group-hover:scale-110 mr-3">
                  <FaGithub className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-purple-700 transition-colors">
                  (Personal) girrig
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-2 text-gray-400">◆</div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:gap-6 mb-4">
            {/* Email Link */}
            <div className="flex items-center justify-center mb-2 sm:mb-0">
              <a
                href="mailto:brandon.david.odom@gmail.com"
                className="flex items-center group"
              >
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-3 h-3 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">
                  brandon.david.odom@gmail.com
                </span>
              </a>
            </div>
            {/* Location Link */}
            <div className="flex items-center justify-center">
              <a
                href="https://www.google.com/maps/place/Austin,Texas"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${styles.googleMapsLink}`}
              >
                <div
                  className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center mr-2 transition-all duration-300 ${styles.locationIcon}`}
                >
                  <MapPin className="w-3 h-3 text-gray-500 transition-colors" />
                </div>
                <span
                  className={`text-xs text-gray-600 transition-colors ${styles.locationText}`}
                >
                  Austin, Texas
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center my-2 sm:my-4">
        <div className="h-px w-64 sm:w-80 bg-gray-300"></div>
      </div>

      {/* Bottom content panel - Contact Form */}
      <div className="w-full px-4 sm:px-8 pt-2 pb-6 md:px-16 bg-gray-50 flex justify-center">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-xl font-light mb-4">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
