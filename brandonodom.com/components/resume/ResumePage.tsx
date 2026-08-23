import ResumeContent from "@/components/resume/ResumeContent";
import { bitter } from "@/fonts";
import { Download } from "lucide-react";

const ResumePage = () => {
  const downloadButton = (
    <a
      href="/resume/Brandon_Odom_Resume.pdf"
      download
      className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap max-xl:max-sm:w-full max-xl:max-sm:justify-center"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </a>
  );

  return (
    <div className="flex flex-col">
      {/* Adding overflow-y here would stop the button below from sticking */}
      <div className="flex-1 px-3 py-6 sm:px-8 sm:py-12">
        {/* max-w-204 is 816px, US Letter width at 96dpi */}
        <div className="relative w-full max-w-204 mx-auto">
          {/* xl and up: the button floats in the space right of the sheet */}
          <div className="absolute inset-y-0 left-full ml-6 hidden xl:block">
            <div className="sticky top-8">{downloadButton}</div>
          </div>

          {/* Below xl there is no space beside the sheet, so it sits above */}
          <div className="mb-3 flex justify-end xl:hidden">
            {downloadButton}
          </div>

          <div
            className={`${bitter.className} w-full bg-white shadow-lg p-5 sm:px-24 sm:py-12`}
          >
            <ResumeContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
