"use client";

import { motion } from "framer-motion";
import { projects } from "../lib/data";

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-10 bg-nb-black border-t-nb border-b-nb border-nb-black overflow-hidden">
      <span className="inline-block bg-nb-yellow text-nb-black border-nb border-nb-yellow px-4 py-2 font-mono font-bold text-xs tracking-widest mb-6 shadow-nb-sm">
        002 — PROJECTS
      </span>

      <h2 className="font-display text-[56px] md:text-[72px] leading-[0.95] uppercase text-nb-white">
        THINGS I&apos;VE<br />SHIPPED.
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="bg-nb-white border-nb border-nb-white shadow-[8px_8px_0px_#ffe629] overflow-hidden hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[12px_12px_0px_#ffe629] transition-all duration-150 cursor-none"
            data-cursor="view"
          >
            {/* CARD HEADER */}
            <div className="bg-nb-yellow border-b-nb border-nb-black px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <h3 className="font-display tracking-wide text-2xl text-nb-black [text-shadow:2px_2px_0px_white]">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-gray-700 font-bold bg-white px-2 py-1 border-[2px] border-nb-black shadow-nb-sm">
                {project.date}
              </span>
            </div>

            {/* CARD BODY */}
            <div className="p-6">
              {project.hackathon && (
                <span className="inline-block bg-nb-red text-white font-mono text-[10px] font-bold px-2 py-1 border-[2px] border-nb-black mb-4">
                  🏆 {project.hackathon.toUpperCase()}
                </span>
              )}

              <p className="font-body text-sm leading-relaxed text-[#333]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-nb-black text-nb-yellow font-mono text-[10px] font-bold px-2.5 py-1 border-[2px] border-nb-black"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nb-white border-[2px] border-nb-black font-mono font-bold text-xs px-5 py-2.5 shadow-[3px_3px_0px_#0a0a0a] hover:shadow-[5px_5px_0px_#0a0a0a] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0a0a0a] transition-all duration-100 z-10"
                    data-cursor="hover"
                  >
                    GITHUB ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nb-blue text-white border-[2px] border-nb-black font-mono font-bold text-xs px-5 py-2.5 shadow-[3px_3px_0px_#0a0a0a] hover:shadow-[5px_5px_0px_#0a0a0a] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0a0a0a] transition-all duration-100 z-10"
                    data-cursor="hover"
                  >
                    LIVE ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
