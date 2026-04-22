"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Github, Linkedin, Mail, Terminal,
  Code2, Layers, Wrench, BookOpen,
  ExternalLink, Trophy, ChevronRight
} from "lucide-react";
import WavyGrid from "./components/WavyGrid";

// --- DATA ---

const PROJECTS = [
  {
    name: "GemChef",
    tech: "Next.js, TypeScript, Google Gemini API",
    date: "Feb 2026",
    github: "https://github.com/Ash007dev/Gem-Chef",
    bullets: [
      "Built a kitchen assistant web app that uses Gemini Vision to identify ingredients from images and suggest recipes based on what is available.",
      "Added a weekly meal planner that generates a grocery list based on selected recipes.",
      "Implemented step-by-step cooking guidance with dietary filters for conditions like diabetes and allergies.",
      "Developed a Cook-Along feature that extracts structured recipes from YouTube video URLs using AI, syncing ingredients and steps for hands-free cooking.",
    ],
  },
  {
    name: "Campus Resource Engine",
    tech: "Next.js, TypeScript, Supabase, Socket.io",
    date: "Feb 2026",
    github: "https://github.com/Ash007dev/CampusRes",
    bullets: [
      "Built a room booking system with real-time availability updates using WebSockets, supporting concurrent users across the campus.",
      "Implemented QR-based check-in to automatically cancel no-show bookings, freeing up unused slots.",
      "Added a user reliability score that adjusts booking limits based on past booking behaviour.",
      "Developed an admin dashboard with RBAC for managing users, rooms, and bookings, featuring demand-forecast heatmaps, utilization reports, no-show tracking, audit logs, emergency overrides, and broadcast notifications.",
    ],
  },
  {
    name: "RISKOFF",
    tech: "React, FastAPI, Supabase, Python",
    date: "Jan 2026",
    github: "https://github.com/anupama0307/Debuggers",
    bullets: [
      "Built a loan management platform for businesses with an AI-based risk scoring system that evaluates applicant profiles and flags high-risk cases.",
      "Integrated OTP-based authentication, role-based access control for admins, and a dashboard with charts for tracking loan portfolio performance.",
      "Integrated Gemini Vision for document OCR (receipts, KYC) and voice assistant/chatbot for loan queries.",
    ],
  },
  {
    name: "StudSync",
    tech: "Flutter, Dart, Firebase, Firestore",
    date: "Sep 2025",
    github: "https://github.com/Ash007dev/Stud-Sync",
    bullets: [
      "Developed a cross-platform student management app with timetable tracking, academic calendar, and real-time updates using Firestore.",
      "Implemented Firebase authentication and deployed the web version on Vercel.",
    ],
  },
];

const HACKATHONS = [
  {
    name: "Meta PyTorch OpenEnv Hackathon",
    org: "Meta × Hugging Face × Scaler SST",
    date: "2026",
    link: "https://www.scaler.com/school-of-technology/meta-pytorch-hackathon",
    description: "India's biggest AI hackathon. Building RL environments with PyTorch.",
  },
  {
    name: "Google Solution Challenge 2026",
    org: "Google × Hack2Skill",
    date: "2026",
    link: "https://hack2skill.com/event/solution-challenge-2026",
    description: "Global challenge to build solutions for UN Sustainable Development Goals.",
  },
  {
    name: "Gemini Global Hackathon",
    org: "Google",
    date: "Feb 2026",
    link: null,
    description: "Built GemChef, an AI-powered kitchen and meal planning assistant using Gemini Vision API.",
  },
  {
    name: "Build-2-Break",
    org: "Amrita Vishwa Vidyapeetham",
    date: "Jan 2026",
    link: null,
    description: "Built RISKOFF, a loan management platform, with 2 phases: A Build and a Break phase.",
  },
];

const SKILLS = {
  languages: ["Python", "C/C++", "Java", "SQL", "TypeScript", "JavaScript", "Dart"],
  frameworks: ["Next.js", "React", "Flutter", "Tailwind CSS", "FastAPI", "Socket.io"],
  tools: ["Git", "Docker", "Firebase", "Supabase", "Vercel", "IntelliJ", "VS Code"],
  libraries: ["Gemini API", "Pandas", "NumPy", "Matplotlib", "Riverpod"],
};

export default function Home() {
  const router = useRouter();

  // ROLES ROTATION
  const roles = ["Full Stack Developer", "CS Undergrad", "Builder", "Tech Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ANIMATION VARIANTS
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 40, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-green-500 selection:text-black font-sans relative">
      {/* WAVY GRID BACKGROUND */}
      <WavyGrid />

      {/* --- NAV --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit"
      >
        <div className="bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-full px-2 py-2 flex items-center gap-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            <span className="text-zinc-400 font-mono text-xs tracking-widest">
              ashish.dev
            </span>
          </div>
          <div className="flex gap-1 pr-2">
            {["About", "Projects", "Hackathons", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-white hover:bg-zinc-800/50 rounded-full transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.main
        className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- HERO --- */}
        <motion.section className="mb-40" variants={itemVariants}>
          <div className="relative mb-6 cursor-default group w-fit">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white flex items-end leading-[0.85]">
              <span>Ash</span>
              <div className="relative w-[0.45em] h-[0.85em] flex justify-center overflow-hidden mx-1">
                <span className="absolute inset-0 flex items-end justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  i
                </span>
                <span className="absolute inset-0 flex items-end justify-center translate-y-full text-green-500 font-mono transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                  1
                </span>
              </div>
              <span>sh</span>
            </h1>
          </div>

          <div className="h-8 mb-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl text-zinc-500 font-light flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
            Computer Science undergraduate with hands-on experience building{" "}
            <span className="text-white font-medium">full-stack applications</span>.
            Focused on writing clean, maintainable code and improving through
            iteration.
          </p>
        </motion.section>

        {/* --- ABOUT --- */}
        <motion.section id="about" className="mb-40 scroll-mt-32" variants={itemVariants}>
          <h2 className="text-sm font-mono text-zinc-500 mb-8 uppercase tracking-widest">
            / About Me
          </h2>
          <div className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors duration-700"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light relative z-10">
              I&apos;m{" "}
              <span className="text-white font-medium">Ashish</span>, a B.Tech
              Computer Science student at Amrita Vishwa Vidyapeetham. I build
              things that solve real problems, from AI-powered kitchen
              assistants to campus resource management systems.
              <br />
              <br />
              Whether it&apos;s debugging at 3 AM or diving into a hackathon,
              I&apos;m constantly shipping code and chasing that{" "}
              <span className="text-green-400 italic">
                &quot;it finally works&quot;
              </span>{" "}
              dopamine hit. Currently blending full-stack development with AI to
              build tools that actually matter.
            </p>
          </div>
        </motion.section>

        {/* --- EDUCATION --- */}
        <motion.section id="education" className="mb-40 scroll-mt-32" variants={itemVariants}>
          <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-4">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <span className="font-mono text-zinc-500">2022 - 2027</span>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-6 group">
              <span className="font-mono text-zinc-500 pt-1">Aug 2023 - May 2027</span>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  Amrita Vishwa Vidyapeetham
                </h3>
                <p className="text-zinc-400 mt-2">
                  B.Tech in Computer Science &amp; Engineering
                </p>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                  Coimbatore, Tamil Nadu. Focused on Full Stack Development,
                  Algorithms, and System Design.
                </p>
              </div>
              <div className="text-right md:text-right">
                <span className="inline-block px-3 py-1 border border-zinc-800 rounded-full text-xs font-mono text-green-400 bg-green-500/5">
                  CGPA: 8.86
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-6 group">
              <span className="font-mono text-zinc-500 pt-1">Apr 2022 - Apr 2023</span>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  Vidhyasagar International Public School
                </h3>
                <p className="text-zinc-400 mt-2">Senior Secondary</p>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                  Tiruppur, Tamil Nadu. Where the obsession with logic and
                  problem solving began.
                </p>
              </div>
              <div className="text-right md:text-right">
                <span className="inline-block px-3 py-1 border border-zinc-800 rounded-full text-xs font-mono text-green-400 bg-green-500/5">
                  94%
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- PROJECTS --- */}
        <motion.section id="projects" className="mb-40 scroll-mt-32" variants={itemVariants}>
          <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-4">
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <span className="font-mono text-zinc-500">{PROJECTS.length} shipped</span>
          </div>

          <div className="space-y-4">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.name}
                className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 group"
              >
                <button
                  onClick={() =>
                    setExpandedProject(expandedProject === idx ? null : idx)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-0.5 bg-zinc-800/50 rounded-full text-xs font-mono text-zinc-500">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 font-mono">
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-600 hover:text-white transition-colors p-1"
                    >
                      <Github size={18} />
                    </a>
                    <ChevronRight
                      size={20}
                      className={`text-zinc-600 transition-transform duration-300 ${
                        expandedProject === idx ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedProject === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 space-y-2">
                        {project.bullets.map((bullet, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                          >
                            <span className="w-1 h-1 bg-green-500 rounded-full mt-2 shrink-0"></span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- HACKATHONS --- */}
        <motion.section id="hackathons" className="mb-40 scroll-mt-32" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-12 border-b border-zinc-800 pb-4">
            <Trophy size={24} className="text-yellow-500" />
            <h2 className="text-3xl font-bold text-white">Hackathons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HACKATHONS.map((hack) => (
              <div
                key={hack.name}
                className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight">
                      {hack.name}
                    </h3>
                    {hack.link && (
                      <a
                        href={hack.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-yellow-400 transition-colors shrink-0 ml-2"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-mono text-zinc-500 mb-2">
                    {hack.org} · {hack.date}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {hack.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- SKILLS --- */}
        <motion.section id="skills" className="mb-40 scroll-mt-32" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-12">Tech Stack</h2>

          <div className="grid gap-6">
            <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 text-zinc-400">
                <Code2 size={20} />
                <span className="font-mono text-sm uppercase tracking-wider">
                  Languages
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {SKILLS.languages.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-black/50 border border-zinc-800 rounded-lg text-sm font-medium hover:border-green-500/50 hover:text-green-400 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 text-zinc-400">
                <Layers size={20} />
                <span className="font-mono text-sm uppercase tracking-wider">
                  Frameworks
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {SKILLS.frameworks.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-black/50 border border-zinc-800 rounded-lg text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 text-zinc-400">
                  <Wrench size={20} />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    Tools & Platforms
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.tools.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 bg-black/50 border border-zinc-800 rounded-lg text-sm font-medium hover:border-yellow-500/50 hover:text-yellow-400 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 text-zinc-400">
                  <BookOpen size={20} />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    Libraries
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.libraries.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 bg-black/50 border border-zinc-800 rounded-lg text-sm font-medium hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- CONTACT / FOOTER --- */}
        <motion.section id="contact" className="pt-20 border-t border-zinc-900 scroll-mt-32" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-zinc-500 text-lg mb-8 max-w-md">
                Always interested in new opportunities, collaborations, or just
                discussing the latest in tech.
              </p>
              <a
                href="mailto:ashish007tup@gmail.com"
                className="text-2xl font-medium text-white hover:text-green-400 transition-colors flex items-center gap-2 group"
              >
                ashish007tup@gmail.com{" "}
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "GitHub",
                  handle: "@Ash007dev",
                  link: "https://github.com/Ash007dev",
                },
                {
                  name: "LinkedIn",
                  handle: "Ashish M",
                  link: "https://www.linkedin.com/in/imashishm/",
                },
                {
                  name: "Twitter",
                  handle: "@ImAshish30",
                  link: "https://twitter.com/ImAshish30",
                },
                {
                  name: "Resume",
                  handle: "View PDF",
                  link: "https://drive.google.com/file/d/1_htKe_WlqQWqodEJf4rPKRjOObDG4-jP/view?usp=drive_link",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all group backdrop-blur-sm"
                >
                  <div className="text-white font-bold mb-1">
                    {social.name}
                  </div>
                  <div className="text-zinc-600 text-sm group-hover:text-green-400 transition-colors">
                    {social.handle}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center text-zinc-600 text-sm">
            <p>© 2026 Ashish M. All rights reserved.</p>
          </div>
        </motion.section>
      </motion.main>

      {/* FLOATING TERMINAL BUTTON */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/terminal")}
        className="fixed bottom-8 right-8 p-4 bg-black border border-zinc-800 text-green-500 rounded-full shadow-2xl z-50 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300 group"
      >
        <Terminal size={24} className="group-hover:animate-pulse" />
      </motion.button>
    </div>
  );
}