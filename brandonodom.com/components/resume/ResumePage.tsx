"use client";

import ResumeContent from "@/components/resume/ResumeContent";

const ResumePage = () => {
  const handleDownloadPdf = () => {
    window.open("/api/resume/pdf", "_blank");
  };

  return (
    <div className="flex flex-col">
      {/* Resume Panel */}
      <div className="flex-1 p-3 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-xs p-5 sm:p-12 relative">
          <ResumeContent onDownload={handleDownloadPdf} />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
