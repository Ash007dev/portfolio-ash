"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ onToggleMode }: { onToggleMode: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[1000] bg-nb-yellow border-b-nb border-nb-black px-5 md:px-10 h-16 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <motion.div
            className="w-2 h-2 bg-nb-black"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          <span className="font-mono font-bold text-lg tracking-wide text-nb-black">
            ASHISH.DEV
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-nb-black group relative pb-1"
              data-cursor="hover"
            >
              {link.name}
              <div className="absolute bottom-0 left-0 h-[2px] bg-nb-black w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
          <button
            onClick={onToggleMode}
            className="font-mono text-xs text-nb-black underline ml-4 hover:text-nb-blue transition-colors font-bold"
          >
            ZEN MODE
          </button>

          <a
            href="mailto:ashish007tup@gmail.com"
            className="bg-nb-black text-nb-yellow font-mono font-bold text-sm px-5 py-2 border-nb border-nb-black shadow-nb-sm hover:shadow-nb-md hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-nb-sm transition-all duration-[120ms] ml-4"
            data-cursor="hover"
          >
            HIRE ME →
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex md:hidden items-center gap-4">
           <button
            onClick={onToggleMode}
            className="font-mono text-[10px] text-nb-black underline font-bold"
          >
            ZEN MODE
          </button>
          <button onClick={() => setIsOpen(true)} className="p-2 border-2 border-nb-black bg-nb-white">
            <Menu size={20} className="text-nb-black" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[1001] bg-nb-yellow flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-5 p-2 border-2 border-nb-black bg-nb-white shadow-nb-sm"
          >
            <X size={24} className="text-nb-black" />
          </button>

          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-5xl uppercase text-nb-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="mailto:ashish007tup@gmail.com"
              className="mt-8 font-mono font-bold text-lg bg-nb-black text-nb-yellow px-8 py-4 border-nb border-nb-black shadow-nb-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              HIRE ME →
            </motion.a>
          </div>
        </div>
      )}
    </>
  );
}
