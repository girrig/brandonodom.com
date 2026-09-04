"use client";

import {
  DownloadIcon,
  type DownloadIconHandle,
} from "@animateicons/react/lucide";
import { useRef } from "react";

const DownloadButton = () => {
  const iconRef = useRef<DownloadIconHandle>(null);

  return (
    <a
      href="/resume/Brandon_Odom_Resume.pdf"
      download
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      // Touch has no hover, so the press drives the icon there instead
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") iconRef.current?.startAnimation();
      }}
      className="px-7 py-3 rounded-full bg-primary text-white text-sm shadow-md transition-all inline-flex items-center gap-2.5 whitespace-nowrap hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 active:bg-primary-hover active:scale-95 max-xl:max-sm:w-full max-xl:max-sm:justify-center"
    >
      <DownloadIcon ref={iconRef} size={18} className="shrink-0" />
      Download PDF
    </a>
  );
};

export default DownloadButton;
