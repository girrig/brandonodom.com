import ResumePrintPage from "@/components/resume/ResumePrintPage";
import type { Metadata } from "next";

// Puppeteer's render source, not a real page. Keep it out of search results
// so it doesn't compete with /resume as duplicate content.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ResumePrintPage />;
}
