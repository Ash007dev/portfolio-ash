"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Hackathons from "./Hackathons";
import Contact from "./Contact";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function NeoBrutalismView({ onToggleMode }: { onToggleMode: () => void }) {
  return (
    <div className="bg-nb-white text-nb-black font-body min-h-screen selection:bg-nb-yellow selection:text-nb-black">
      <CustomCursor />
      <Navbar onToggleMode={onToggleMode} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
