"use client";

import {
  ExternalLinkIcon,
  type ExternalLinkIconHandle,
} from "@animateicons/react/lucide";
import { useRef } from "react";

const LinkButton = ({ href, label }: { href: string; label: string }) => {
  const iconRef = useRef<ExternalLinkIconHandle>(null);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      // Touch has no hover, so the press drives the icon there instead
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") iconRef.current?.startAnimation();
      }}
      className="text-sm font-medium inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-ink-soft transition-all hover:border-link hover:text-link hover:shadow-sm hover:-translate-y-0.5 active:border-link active:text-link active:scale-95"
    >
      {label}
      <ExternalLinkIcon ref={iconRef} size={16} className="shrink-0" />
    </a>
  );
};

export default LinkButton;
