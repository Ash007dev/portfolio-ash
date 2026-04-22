"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../lib/data";

function SkillSticker({ name, index }: { name: string; index: number }) {
  const constraintsRef = useRef(null);
  
  // Randomize rotation and position a bit for the sticker effect
  const randomRotate = (index % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2);
  const randomY = (Math.random() * 10 - 5);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
      whileHover={{ scale: 1.1, zIndex: 10, rotate: 0 }}
      whileDrag={{ scale: 1.1, zIndex: 20, rotate: 0, boxShadow: "8px 8px 0px #0a0a0a" }}
      className="cursor-grab active:cursor-grabbing bg-nb-white border-[3px] border-nb-black px-4 py-2 font-mono font-bold text-sm text-nb-black shadow-[4px_4px_0px_#0a0a0a] m-2 select-none"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: randomRotate, y: randomY }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05
      }}
    >
      {name}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <span className="inline-block bg-nb-black text-nb-yellow border-nb border-nb-black px-4 py-2 font-mono font-bold text-xs tracking-widest mb-6 shadow-nb-sm">
        003 TECH STACK
      </span>

      <h2 className="font-display text-[56px] md:text-[72px] leading-[0.95] uppercase text-nb-black">
        MY WEAPONS<br />OF CHOICE.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* LANGUAGES */}
        <div className="border-nb border-nb-black shadow-nb-lg overflow-hidden flex flex-col">
          <div className="bg-nb-yellow border-b-nb border-nb-black px-6 py-4 font-mono font-bold text-sm text-nb-black uppercase tracking-widest shrink-0">
            LANGUAGES
          </div>
          <div className="bg-nb-white p-6 flex-1 flex flex-wrap content-start items-start justify-start overflow-hidden">
            {skills.Languages.map((skill, i) => (
              <SkillSticker key={skill.name} name={skill.name} index={i} />
            ))}
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className="border-nb border-nb-black shadow-nb-lg overflow-hidden flex flex-col">
          <div className="bg-nb-blue border-b-[3px] border-white px-6 py-4 font-mono font-bold text-sm text-white uppercase tracking-widest shrink-0">
            FRAMEWORKS
          </div>
          <div className="bg-nb-white p-6 flex-1 flex flex-wrap content-start items-start justify-start overflow-hidden">
            {skills.Frameworks.map((skill, i) => (
              <SkillSticker key={skill.name} name={skill.name} index={i} />
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="border-nb border-nb-black shadow-nb-lg overflow-hidden flex flex-col">
          <div className="bg-nb-black border-b-nb border-nb-black px-6 py-4 font-mono font-bold text-sm text-nb-yellow uppercase tracking-widest shrink-0">
            TOOLS & PLATFORMS
          </div>
          <div className="bg-nb-white p-6 flex-1 flex flex-wrap content-start items-start justify-start overflow-hidden">
            {skills["Tools & Platforms"].map((skill, i) => (
              <SkillSticker key={skill.name} name={skill.name} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className="bg-nb-yellow border-nb border-nb-black shadow-nb-md px-6 py-6 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mt-8 md:mt-12">
        <span className="font-mono font-bold text-sm text-nb-black">SOFT SKILLS:</span>
        <div className="flex flex-wrap gap-3">
          {["Leadership", "Collaboration", "Problem Solving", "Public Speaking"].map((skill) => (
            <span
              key={skill}
              className="bg-nb-black text-white px-4 py-2 border-[2px] border-nb-black font-mono text-xs uppercase"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
