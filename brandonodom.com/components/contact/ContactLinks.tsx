"use client";

import {
  GithubIcon,
  type GithubIconHandle,
  LinkedinIcon,
  type LinkedinIconHandle,
  MailIcon,
  type MailIconHandle,
} from "@animateicons/react/lucide";
import { useRef } from "react";

const circleClass =
  "w-9 h-9 rounded-full bg-sunken border border-line flex items-center justify-center text-ink transition-all transform group-hover:scale-110 group-active:scale-110 mr-3";
const labelClass = "text-sm text-ink-soft transition-colors";

const ContactLinks = () => {
  const mailRef = useRef<MailIconHandle>(null);
  const linkedinRef = useRef<LinkedinIconHandle>(null);
  const githubWorkRef = useRef<GithubIconHandle>(null);
  const githubPersonalRef = useRef<GithubIconHandle>(null);

  return (
    <div className="flex flex-col space-y-3">
      {/* Email */}
      <a
        href="mailto:brandon.david.odom@gmail.com"
        onMouseEnter={() => mailRef.current?.startAnimation()}
        onMouseLeave={() => mailRef.current?.stopAnimation()}
        // Touch has no hover, so the press drives the icon there instead
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") mailRef.current?.startAnimation();
        }}
        className="flex items-center group"
      >
        <div
          className={`${circleClass} group-hover:border-gmail group-hover:text-gmail group-active:border-gmail group-active:text-gmail`}
        >
          <MailIcon ref={mailRef} size={16} />
        </div>
        <span
          className={`${labelClass} group-hover:text-gmail group-active:text-gmail`}
        >
          brandon.david.odom@gmail.com
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/brandonodom/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => linkedinRef.current?.startAnimation()}
        onMouseLeave={() => linkedinRef.current?.stopAnimation()}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse")
            linkedinRef.current?.startAnimation();
        }}
        className="flex items-center group"
      >
        <div
          className={`${circleClass} group-hover:border-linkedin group-hover:text-linkedin group-active:border-linkedin group-active:text-linkedin`}
        >
          <LinkedinIcon ref={linkedinRef} size={16} />
        </div>
        <span
          className={`${labelClass} group-hover:text-linkedin group-active:text-linkedin`}
        >
          Brandon Odom
        </span>
      </a>

      {/* Professional GitHub */}
      <a
        href="https://github.com/brandonodom"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => githubWorkRef.current?.startAnimation()}
        onMouseLeave={() => githubWorkRef.current?.stopAnimation()}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse")
            githubWorkRef.current?.startAnimation();
        }}
        className="flex items-center group"
      >
        <div
          className={`${circleClass} group-hover:border-github group-hover:text-github group-active:border-github group-active:text-github`}
        >
          <GithubIcon ref={githubWorkRef} size={16} />
        </div>
        <span
          className={`${labelClass} group-hover:text-github group-active:text-github`}
        >
          brandonodom (Professional)
        </span>
      </a>

      {/* Personal GitHub */}
      <a
        href="https://github.com/girrig"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => githubPersonalRef.current?.startAnimation()}
        onMouseLeave={() => githubPersonalRef.current?.stopAnimation()}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse")
            githubPersonalRef.current?.startAnimation();
        }}
        className="flex items-center group"
      >
        <div
          className={`${circleClass} group-hover:border-github group-hover:text-github group-active:border-github group-active:text-github`}
        >
          <GithubIcon ref={githubPersonalRef} size={16} />
        </div>
        <span
          className={`${labelClass} group-hover:text-github group-active:text-github`}
        >
          girrig (Personal)
        </span>
      </a>
    </div>
  );
};

export default ContactLinks;
