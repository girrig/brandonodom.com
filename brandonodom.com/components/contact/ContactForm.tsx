"use client";

import {
  sendContactMessage,
  type ContactState,
} from "@/app/(root)/contact/actions";
import { Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactState = { status: "idle" };

// TODO: white fields on a white card leaves the border doing all the work.
// Revisit with the color pass, when an off-white surface is available.
const inputClass =
  "w-full px-3 pt-5 pb-2 text-sm bg-white border border-gray-400 rounded-md shadow-xs focus:border-gray-600 focus:ring-1 focus:ring-gray-600 focus:outline-hidden transition-all";
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
      <div className="space-y-3 mb-6">
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
        <div className="relative">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={4}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
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
