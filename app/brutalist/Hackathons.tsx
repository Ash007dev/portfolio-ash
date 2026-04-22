"use client";

import { motion } from "framer-motion";
import { hackathons } from "../lib/data";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 px-5 md:px-10 bg-nb-yellow border-t-nb border-b-nb border-nb-black overflow-hidden">
      <span className="inline-block bg-nb-black text-nb-yellow border-nb border-nb-black px-4 py-2 font-mono font-bold text-xs tracking-widest mb-6 shadow-nb-sm">
        004 — HACKATHONS
      </span>

      <h2 className="font-display text-[56px] md:text-[72px] leading-[0.95] uppercase text-nb-black mt-4">
        BATTLE<br />TESTED.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {hackathons.map((hackathon, i) => (
          <motion.div
            key={hackathon.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-nb-white border-nb border-nb-black shadow-nb-lg p-6 md:p-8 hover:-translate-y-1 hover:shadow-nb-xl transition-all duration-300 cursor-default"
            data-cursor="hover"
          >
            <div className="font-mono font-bold text-sm uppercase tracking-wide text-nb-black">
              🏆 {hackathon.name}
            </div>
            <div className="font-mono text-xs text-gray-500 mt-1">
              {hackathon.date.toUpperCase()}
            </div>
            
            <div className="h-[3px] bg-nb-black w-full my-5" />
            
            <h3 className="font-display text-4xl md:text-5xl leading-none uppercase text-nb-black">
              {hackathon.project}
            </h3>
            
            <p className="font-body text-sm leading-relaxed text-[#333] mt-4">
              {hackathon.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
