"use client";

import { motion } from "framer-motion";
import { profile } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-nb-blue text-white border-nb border-nb-black px-4 py-2 font-mono font-bold text-xs tracking-widest mb-6 shadow-nb-sm">
            001 — ABOUT ME
          </span>

          <h2 className="font-display text-[56px] md:text-[72px] leading-[0.95] uppercase text-nb-black">
            WHO AM I.
          </h2>

          <div className="border-nb border-nb-black shadow-nb-lg overflow-hidden mt-10">
            <div className="bg-nb-black text-nb-yellow px-5 py-3 font-mono text-sm">
              // PROFILE.TXT
            </div>
            <div className="bg-nb-white p-6">
              {[
                { label: "NAME", value: profile.name },
                { label: "DEGREE", value: profile.degree },
                { label: "COLLEGE", value: profile.college },
                { label: "BATCH", value: profile.batch },
                { label: "CGPA", value: profile.cgpa },
                { label: "SCHOOL", value: profile.schoolScore },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] items-center py-3 ${
                    i !== 5 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className={`font-body font-bold text-nb-black uppercase ${item.label === 'NAME' || item.label === 'COLLEGE' || item.label === 'DEGREE' ? 'text-base tracking-wider [text-shadow:2px_2px_0px_#ffe629]' : 'text-sm'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:mt-24"
        >
          <p className="font-body text-lg md:text-xl leading-relaxed text-[#222]">
            I&apos;m a{" "}
            <motion.span 
              className="inline-block bg-nb-blue text-white border-[2px] border-nb-black px-1.5 font-bold rotate-1 shadow-[2px_2px_0px_#0a0a0a]"
              whileHover={{ rotate: -2, scale: 1.05 }}
            >
              Computer Science
            </motion.span>{" "}
            undergrad at{" "}
            <motion.span 
              className="inline-block bg-nb-yellow border-[2px] border-nb-black px-1.5 font-bold -rotate-1 shadow-[2px_2px_0px_#0a0a0a]"
              whileHover={{ rotate: 2, scale: 1.05 }}
            >
              Amrita Vishwa Vidyapeetham
            </motion.span>{" "}
            focused on building{" "}
            <motion.span 
              className="inline-block bg-nb-white border-[2px] border-nb-black px-1.5 font-bold rotate-1 shadow-[2px_2px_0px_#0a0a0a]"
              whileHover={{ rotate: -2, scale: 1.05 }}
            >
              full-stack products
            </motion.span>{" "}
            that solve real problems. I care deeply about{" "}
            <motion.span 
              className="inline-block bg-nb-white border-[2px] border-nb-black px-1.5 font-bold rotate-1 shadow-[2px_2px_0px_#0a0a0a]"
              whileHover={{ rotate: -2, scale: 1.05 }}
            >
              clean, maintainable code
            </motion.span>{" "}
            and improving through iteration.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed text-[#222] mt-8">
            From{" "}
            <span className="font-bold underline decoration-[3px] decoration-nb-blue underline-offset-4">
              AI-powered kitchen assistants
            </span>{" "}
            to real-time campus booking systems and loan risk platforms — I build{" "}
            <motion.span 
              className="inline-block bg-nb-black text-nb-yellow px-2 font-bold rotate-1"
              whileHover={{ rotate: -1, scale: 1.05 }}
            >
              across the stack
            </motion.span>{" "}
            and across domains. I&apos;ve competed in hackathons and shipped products used by{" "}
            <motion.span 
              className="inline-block bg-nb-red text-white border-[2px] border-nb-black px-1.5 font-bold -rotate-2 shadow-[2px_2px_0px_#0a0a0a]"
              whileHover={{ rotate: 2, scale: 1.05 }}
            >
              real users.
            </motion.span>
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <motion.div 
              className="bg-nb-white border-[3px] border-nb-black shadow-[4px_4px_0px_#0a0a0a] p-5 cursor-pointer relative overflow-hidden group"
              whileHover={{ y: -5, rotate: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gray-200 rounded-full blur-xl group-hover:bg-nb-blue/20 transition-all"></div>
              <div className="font-display text-5xl text-nb-black leading-none [text-shadow:2px_2px_0px_#ccc] group-hover:[text-shadow:4px_4px_0px_#ccc] transition-all relative z-10">
                {profile.schoolScore}
              </div>
              <div className="font-mono text-xs mt-2 text-nb-black font-bold uppercase tracking-widest relative z-10">
                SCHOOL SCORE
              </div>
            </motion.div>

            <motion.div 
              className="bg-nb-yellow border-[3px] border-nb-black shadow-[4px_4px_0px_#0a0a0a] p-5 cursor-pointer relative overflow-hidden group"
              whileHover={{ y: -5, rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/50 rounded-full blur-xl group-hover:bg-white/80 transition-all"></div>
              <div className="font-display text-5xl text-nb-black leading-none [text-shadow:2px_2px_0px_white] group-hover:[text-shadow:4px_4px_0px_white] transition-all relative z-10">
                {profile.cgpa}
              </div>
              <div className="font-mono text-xs mt-2 text-nb-black font-bold uppercase tracking-widest relative z-10">
                COLLEGE CGPA
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
