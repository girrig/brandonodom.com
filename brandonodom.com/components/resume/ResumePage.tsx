import DownloadButton from "@/components/resume/DownloadButton";
import ResumeContent from "@/components/resume/ResumeContent";
import { bitter } from "@/fonts";

const ResumePage = () => {
  const downloadButton = <DownloadButton />;

  return (
    <div className="flex flex-col">
      {/* Adding overflow-y here would stop the button below from sticking */}
      <div className="flex-1 px-4 pb-6 sm:px-12 sm:pb-12">
        {/* Heading matches the sheet's width so it sits on the sheet's left edge */}
        <div className="w-full max-w-204 mx-auto pt-8 pb-5 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-normal mb-3">Resume</h1>
            <div className="h-px w-16 bg-line"></div>
          </div>

          {/* Below xl there is no space beside the sheet, so the button shares
              the heading's row */}
          <div className="xl:hidden">{downloadButton}</div>
        </div>

        {/* max-w-204 is 816px, US Letter width at 96dpi */}
        <div className="relative w-full max-w-204 mx-auto">
          {/* xl and up: the button floats in the space right of the sheet */}
          <div className="absolute inset-y-0 left-full ml-6 hidden xl:block pt-px">
            <div className="sticky top-8">{downloadButton}</div>
          </div>

          <div
            className={`${bitter.className} w-full bg-white border border-line shadow-xl p-5 sm:px-24 sm:py-12`}
          >
            <ResumeContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
