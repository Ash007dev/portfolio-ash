export default function Marquee() {
  const text = "NEXT.JS · REACT · NODE.JS · TYPESCRIPT · PYTHON · SUPABASE · FASTAPI · FLUTTER · FIREBASE · DOCKER · ";
  const repeatedText = text.repeat(4);

  return (
    <div className="w-full bg-nb-black py-3.5 border-t-nb border-b-nb border-nb-black overflow-hidden flex relative group">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
        <span className="font-mono text-sm text-nb-yellow tracking-widest mx-4">
          {repeatedText}
        </span>
        <span className="font-mono text-sm text-nb-yellow tracking-widest mx-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
