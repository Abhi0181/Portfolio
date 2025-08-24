import { useState } from "react";
import emailjs from "emailjs-com";
import SectionShell from "./SectionShell";
import data from "../data/profile.js";

export default function Contact() {
  const [status, setStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72q9e8j",      // ✅ your service ID
        "template_psh6zdn",     // ✅ your template ID
        e.target,
        "nPA79Qvc8aGTZDQTB"     // ✅ your public key
      )
      .then(
        () => setStatus("✅ Message sent successfully!"),
        () => setStatus("❌ Failed to send. Please try again.")
      );
  }

  const isError = status.startsWith("❌");

  const inputBase =
    "rounded-xl px-3 py-2 ring-1 focus:outline-none focus:ring-2 transition " +
    "bg-white text-slate-900 ring-black/10 placeholder:text-slate-400 " +
    "dark:bg-white/5 dark:text-slate-100 dark:ring-white/10 dark:placeholder:text-slate-500 " +
    "focus:ring-indigo-500 dark:focus:ring-indigo-400";

  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="Let’s build something together."
    >
      <form onSubmit={sendEmail} className="card grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm text-slate-700 dark:text-slate-300">Name</span>
          <input
            name="name"
            required
            className={inputBase}
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm text-slate-700 dark:text-slate-300">Email</span>
          <input
            type="email"
            name="email"
            required
            className={inputBase}
            placeholder="you@example.com"
          />
        </label>

        <label className="md:col-span-2 grid gap-1">
          <span className="text-sm text-slate-700 dark:text-slate-300">Message</span>
          <textarea
            rows="5"
            name="message"
            required
            className={inputBase}
            placeholder="What would you like to build?"
          />
        </label>

        <div className="md:col-span-2 flex gap-3 items-center">
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          {status && (
            <span
              role="status"
              aria-live="polite"
              className={`text-sm ${
                isError
                  ? "text-red-600 dark:text-red-400"
                  : "text-emerald-700 dark:text-emerald-400"
              }`}
            >
              {status}
            </span>
          )}
        </div>
      </form>

      {/* Contact details */}
      <div className="mt-6 text-sm">
        <div className="text-slate-700 dark:text-slate-300">
          <strong className="font-medium">Email:</strong>{" "}
          <a
            href={`mailto:${data.email}`}
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {data.email}
          </a>
        </div>
        <div className="mt-1 text-slate-700 dark:text-slate-300">
          <strong className="font-medium">LinkedIn:</strong>{" "}
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline break-all"
          >
            {data.linkedin}
          </a>
        </div>
        <div className="mt-1 text-slate-700 dark:text-slate-300">
          <strong className="font-medium">GitHub:</strong>{" "}
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {data.github}
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
