import styles from "./googleMapsAnimation.module.css";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Top content panel - Contact Info */}
        <div className="w-full px-4 sm:px-8 pb-2 pt-6 sm:pt-8 md:px-16 md:pb-2 md:pt-8 flex justify-center">
          <div className="max-w-4xl text-center bg-white p-4 sm:p-8 md:p-8 rounded-lg shadow-xs">
            <h1 className="text-2xl sm:text-3xl font-light mb-3">Contact Me</h1>
            <div className="h-px w-16 bg-gray-300 mb-3 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-4">
              The easiest way to contact me would be via{" "}
              <a
                href="mailto:brandon.david.odom@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Email
              </a>
              . I don&apos;t have any social media other than{" "}
              <a
                href="https://www.linkedin.com/in/brandonodom/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                LinkedIn
              </a>
              . You can also find both my professional and personal GitHub
              accounts below.
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
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
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
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
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
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-purple-700 transition-colors">
                    (Personal) girrig
                  </span>
                </a>
              </div>
            </div>

            <div className="h-px w-16 bg-gray-300 mb-3 mx-auto"></div>

            <div className="flex flex-col sm:flex-row justify-center sm:gap-6 mb-4">
              {/* Email Link */}
              <div className="flex items-center justify-center mb-2 sm:mb-0">
                <a
                  href="mailto:brandon.david.odom@gmail.com"
                  className="flex items-center group"
                >
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
                    <svg
                      className="w-3 h-3 text-gray-500 group-hover:text-blue-600 transition-colors"
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
                    <svg
                      className="w-3 h-3 text-gray-500 transition-colors"
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
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4">
              {/* Left column - Name and Email */}
              <div className="w-full md:w-1/2 space-y-3">
                <div className="relative">
                  <label className="absolute text-xs text-gray-500 left-3 top-1">
                    Name
                  </label>
                  <input className="w-full px-3 pt-5 pb-2 text-sm bg-white border border-gray-200 rounded-md shadow-xs focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-hidden transition-all" />
                </div>
                <div className="relative">
                  <label className="absolute text-xs text-gray-500 left-3 top-1">
                    Email
                  </label>
                  <input className="w-full px-3 pt-5 pb-2 text-sm bg-white border border-gray-200 rounded-md shadow-xs focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-hidden transition-all" />
                </div>
              </div>

              {/* Right column - Message */}
              <div className="w-full md:w-1/2 mt-3 md:mt-0">
                <div className="relative h-full">
                  <label className="absolute text-xs text-gray-500 left-3 top-1">
                    Message
                  </label>
                  <textarea
                    className="w-full h-full px-3 pt-5 pb-2 text-sm bg-white border border-gray-200 rounded-md shadow-xs focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-hidden transition-all"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-black text-white text-xs hover:bg-gray-800 transition-colors mx-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
