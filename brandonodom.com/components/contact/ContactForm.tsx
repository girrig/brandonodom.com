"use client";

import {
  sendContactMessage,
  type ContactState,
} from "@/app/(root)/contact/actions";
import { Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full px-3 pt-5 pb-2 text-sm bg-sunken border border-line rounded-md shadow-xs hover:border-muted-soft focus:border-link focus:ring-1 focus:ring-link focus:outline-hidden transition-colors duration-75 ease-out";
const labelClass = "absolute text-xs text-muted left-3 top-1";

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

  // noValidate hands every failure to the server so errors all surface in the
  // same styled message rather than a native browser bubble
  return (
    <form ref={formRef} action={formAction} noValidate>
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
            defaultValue={state.values?.name ?? ""}
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
            defaultValue={state.values?.email ?? ""}
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
            defaultValue={state.values?.message ?? ""}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isPending}
          className="px-7 py-3 rounded-full bg-primary text-white text-sm shadow-md transition-all inline-flex items-center gap-2.5 enabled:hover:bg-primary-hover enabled:hover:shadow-lg enabled:hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4 shrink-0" />
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>

      <div aria-live="polite" className="text-center">
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
