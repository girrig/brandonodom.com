"use client";

import {
  sendContactMessage,
  type ContactState,
} from "@/app/(root)/contact/actions";
import { Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full px-3 pt-5 pb-2 text-sm bg-white border border-gray-200 rounded-md shadow-xs focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-hidden transition-all";
const labelClass = "absolute text-xs text-gray-500 left-3 top-1";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );

  // After a successful send, clear the fields and return focus to the start.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      nameRef.current?.focus();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4">
        {/* Left column - Name and Email */}
        <div className="w-full md:w-1/2 space-y-3">
          <div className="relative">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              ref={nameRef}
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              className={inputClass}
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              className={inputClass}
            />
          </div>
        </div>

        {/* Right column - Message */}
        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <div className="relative h-full">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={3}
              className={`${inputClass} h-full`}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-black text-white text-xs hover:bg-gray-800 transition-colors mx-auto inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-3 h-3" />
        {isPending ? "Sending..." : "Send Message"}
      </button>

      <div aria-live="polite">
        {state.status === "success" && (
          <p className="mt-3 text-xs text-green-600">{state.message}</p>
        )}
        {state.status === "error" && (
          <p className="mt-3 text-xs text-red-600">{state.message}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
