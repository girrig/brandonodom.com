import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      {/* Centered rather than left-aligned like the other pages */}
      <div className="w-full pt-8 pb-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          <h1 className="text-2xl sm:text-3xl font-normal mb-3 text-center">
            Contact Me
          </h1>
          <div className="h-px w-16 bg-line mx-auto"></div>
        </div>
      </div>

      <div className="flex-1 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          {/* The link column takes only the width it needs; the form absorbs the rest. */}
          <div className="max-w-3xl mx-auto bg-card/80 border border-line rounded-lg shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:shrink-0">
              <h2 className="text-xl font-normal mb-4">Find Me</h2>
              <ContactLinks />
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
