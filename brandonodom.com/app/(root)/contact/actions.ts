"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  // Echoed back on failure so a visitor doesn't retype everything to fix
  // one field. Absent on success, which lets the form clear itself.
  values?: { name: string; email: string; message: string };
};

// The WHATWG HTML spec's own regex for input type=email, with the final
// repetition changed from * to + so a dotted domain is required.
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

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

  const values = { name, email, message };

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields.", values };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
      values,
    };
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return {
      status: "error",
      message: "One or more fields are too long.",
      values,
    };
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
      values,
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
      values,
    };
  }

  return {
    status: "success",
    message: "Your message has been sent.",
  };
}
