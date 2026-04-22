"use client";

import { motion } from "framer-motion";
import { profile, hackathons } from "../lib/data";

export default function Hero() {
  const lineVariants = {
    hidden: { y: "120%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section className="min-h-screen pt-[120px] pb-20 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* LEFT BLOCK */}
      <div>
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="border-nb border-nb-black px-3 py-1.5 font-mono text-xs font-bold bg-nb-yellow text-nb-black shadow-nb-sm">
            ● AVAILABLE FOR HIRE
          </span>
          <span className="border-nb border-nb-black px-3 py-1.5 font-mono text-xs font-bold bg-nb-white text-nb-black shadow-nb-sm">
            CS UNDERGRAD @ AMRITA
          </span>
        </div>

        <motion.h1
          className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(56px,10vw,120px)]"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <div className="overflow-hidden pb-2">
            <motion.div variants={lineVariants} className="text-nb-black">
              FULL
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 -mt-2 md:-mt-4">
            <motion.div variants={lineVariants} className="text-nb-black">
              STACK
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 -mt-2 md:-mt-4">
            <motion.div
              variants={lineVariants}
              style={{ WebkitTextStroke: "3px #0a0a0a", color: "transparent" }}
            >
              DEV.
            </motion.div>
          </div>
        </motion.h1>

        <p className="font-body text-base md:text-lg leading-relaxed text-[#333] mt-8 max-w-md">
          {profile.bio}
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <a
            href="#projects"
            className="bg-nb-black text-nb-yellow px-8 py-4 font-mono font-bold text-sm border-nb border-nb-black shadow-nb-md hover:shadow-nb-lg hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-sm transition-all duration-[120ms] ease-in-out"
            data-cursor="hover"
          >
            SEE MY WORK ↓
          </a>
          <a
            href="#contact"
            className="bg-nb-yellow text-nb-black px-8 py-4 font-mono font-bold text-sm border-nb border-nb-black shadow-nb-md hover:shadow-nb-lg hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-nb-sm transition-all duration-[120ms] ease-in-out"
            data-cursor="hover"
          >
            GET IN TOUCH →
          </a>
        </div>

        <div className="flex flex-wrap gap-5 mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-nb-black underline hover:text-nb-blue transition-colors font-bold"
            data-cursor="hover"
          >
            GITHUB
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-nb-black underline hover:text-nb-blue transition-colors font-bold"
            data-cursor="hover"
          >
            LINKEDIN
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-nb-black underline hover:text-nb-blue transition-colors font-bold"
            data-cursor="hover"
          >
            TWITTER
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-nb-black underline hover:text-nb-blue transition-colors font-bold"
            data-cursor="hover"
          >
            EMAIL
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-nb-red underline hover:text-nb-black transition-colors font-bold"
            data-cursor="hover"
          >
            RESUME (PDF)
          </a>
        </div>
      </div>

      {/* RIGHT BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full mt-10 md:mt-0"
      >
        <div className="bg-nb-yellow border-nb border-nb-black shadow-nb-xl p-0 overflow-hidden relative">
          <div className="px-6 py-4">
            <h2 className="font-mono font-bold text-xl text-nb-black">{profile.name}</h2>
            <p className="font-mono text-sm text-gray-600">{profile.email}</p>
          </div>

          <div className="h-[3px] bg-nb-black w-full" />

          <div className="grid grid-cols-2">
            <div className="border-r-[3px] border-b-[3px] border-nb-black p-5">
              <div className="font-display text-5xl leading-none text-nb-black">
                {profile.cgpa}
              </div>
              <div className="font-mono text-xs mt-1 text-gray-600 uppercase tracking-widest">
                CGPA
              </div>
            </div>
            <div className="border-b-[3px] border-nb-black p-5">
              <div className="font-display text-5xl leading-none text-nb-black">4</div>
              <div className="font-mono text-xs mt-1 text-gray-600 uppercase tracking-widest">
                PROJECTS
              </div>
            </div>
            <div className="border-r-[3px] border-nb-black p-5">
              <div className="font-display text-5xl leading-none text-nb-black">{hackathons.length}</div>
              <div className="font-mono text-xs mt-1 text-gray-600 uppercase tracking-widest">
                HACKATHONS
              </div>
            </div>
            <div className="p-5">
              <div className="font-display text-5xl leading-none text-nb-black">2027</div>
              <div className="font-mono text-xs mt-1 text-gray-600 uppercase tracking-widest">
                GRADUATING
              </div>
            </div>
          </div>

          <div className="bg-nb-black text-nb-yellow px-6 py-3 font-mono text-xs tracking-widest">
            {profile.college.toUpperCase()}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
