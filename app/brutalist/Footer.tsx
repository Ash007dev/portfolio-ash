import { profile } from "../lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-nb-black border-t-nb border-nb-yellow px-5 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <div className="font-mono text-sm text-nb-yellow">
        ASHISH M {new Date().getFullYear()}
      </div>
      
      <div className="font-mono text-xs text-zinc-500">
        DESIGNED & BUILT BY ASHISH M
      </div>

      <button
        onClick={scrollToTop}
        className="bg-nb-yellow border-[2px] border-nb-yellow text-nb-black font-mono font-bold text-xs px-4 py-2 shadow-[3px_3px_0px_#ffe629] hover:shadow-[5px_5px_0px_#ffe629] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150"
      >
        ↑ TOP
      </button>
    </footer>
  );
}
