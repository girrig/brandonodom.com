"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// Basic email shape check: text@text.text
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip CR/LF and trim so input can't inject extra email headers
function sanitizeHeaderField(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = sanitizeHeaderField((formData.get("name") as string) ?? "");
  const email = sanitizeHeaderField((formData.get("email") as string) ?? "");
  const message = ((formData.get("message") as string) ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return { status: "error", message: "One or more fields are too long." };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_RECIPIENT || user;

  if (!user || !pass) {
    console.error(
      "Contact form: GMAIL_USER / GMAIL_APP_PASSWORD env vars are not set.",
    );
    return {
      status: "error",
      message: "Sorry, the contact form isn't available right now.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${user}>`,
      to: recipient,
      replyTo: email, // hitting Reply writes back to the visitor
      subject: `brandonodom.com - new message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong sending your message. Please email me directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your message has been sent - I'll get back to you soon.",
  };
}
