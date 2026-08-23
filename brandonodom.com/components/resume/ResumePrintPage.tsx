import ResumeContent from "@/components/resume/ResumeContent";
import { bitter } from "@/fonts";

const ResumePrintPage = () => {
  return (
    <div
      className={`${bitter.className} w-full max-w-204 mx-auto bg-white px-24`}
    >
      <ResumeContent />
    </div>
  );
};

export default ResumePrintPage;
