"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../lib/data";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-10 min-h-[80vh] flex flex-col items-center text-center overflow-hidden">
      <span className="inline-block bg-nb-blue text-white border-nb border-nb-black px-4 py-2 font-mono font-bold text-xs tracking-widest mb-6 shadow-nb-sm">
        005 — CONTACT
      </span>

      <motion.h2
        className="font-display text-[clamp(64px,10vw,140px)] leading-[0.9] uppercase text-nb-black mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        LET&apos;S<br />BUILD.
      </motion.h2>

      <motion.a
        href={`mailto:${profile.email}`}
        className="inline-block mt-10 md:mt-16 bg-nb-yellow border-nb border-nb-black shadow-nb-xl px-8 py-5 md:px-12 md:py-6 font-mono font-bold text-lg md:text-xl text-nb-black hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-nb-xl active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-sm transition-all duration-[120ms] ease-in-out"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        data-cursor="hover"
      >
        {profile.email}
      </motion.a>

      <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12">
        {[
          { name: "GITHUB ↗", href: profile.github },
          { name: "LINKEDIN ↗", href: profile.linkedin },
          { name: "TWITTER ↗", href: profile.twitter },
          { name: "RESUME ↗", href: profile.resume },
        ].map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nb-white border-nb border-nb-black shadow-nb-md px-6 py-3.5 font-mono font-bold text-sm text-nb-black hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-nb-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-sm transition-all duration-[120ms] ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            data-cursor="hover"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-16 md:mt-24 max-w-xl w-full text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="mb-6">
          <label className="font-mono text-xs tracking-[0.15em] mb-2 block uppercase text-nb-black font-bold">
            NAME
          </label>
          <input
            type="text"
            required
            className="w-full bg-nb-white border-nb border-nb-black px-5 py-3.5 font-body text-sm shadow-nb-sm focus:shadow-nb-md focus:-translate-x-[2px] focus:-translate-y-[2px] outline-none transition-all duration-150 text-nb-black"
          />
        </div>
        <div className="mb-6">
          <label className="font-mono text-xs tracking-[0.15em] mb-2 block uppercase text-nb-black font-bold">
            EMAIL
          </label>
          <input
            type="email"
            required
            className="w-full bg-nb-white border-nb border-nb-black px-5 py-3.5 font-body text-sm shadow-nb-sm focus:shadow-nb-md focus:-translate-x-[2px] focus:-translate-y-[2px] outline-none transition-all duration-150 text-nb-black"
          />
        </div>
        <div className="mb-6">
          <label className="font-mono text-xs tracking-[0.15em] mb-2 block uppercase text-nb-black font-bold">
            MESSAGE
          </label>
          <textarea
            required
            className="w-full bg-nb-white border-nb border-nb-black px-5 py-3.5 font-body text-sm shadow-nb-sm focus:shadow-nb-md focus:-translate-x-[2px] focus:-translate-y-[2px] outline-none transition-all duration-150 min-h-[140px] resize-y text-nb-black"
          />
        </div>

        <button
          type="submit"
          disabled={formState !== "idle"}
          className={`w-full font-mono font-bold text-sm py-5 border-nb border-nb-black shadow-nb-md mt-2 transition-all duration-[120ms] ease-in-out ${
            formState === "sent"
              ? "bg-nb-yellow text-nb-black cursor-default"
              : "bg-nb-black text-nb-yellow hover:shadow-nb-lg hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-sm"
          }`}
          data-cursor={formState === "idle" ? "hover" : "default"}
        >
          {formState === "idle" && "SEND IT →"}
          {formState === "sending" && "SENDING..."}
          {formState === "sent" && "SENT ✓"}
        </button>
      </motion.form>
    </section>
  );
}
