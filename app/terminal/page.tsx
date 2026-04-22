"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react/jsx-dev-runtime";

// --- TYPES ---
type LineType = "input" | "output" | "system";
type TerminalLine = {
  type: LineType;
  text: string | JSX.Element;
};

// --- CONFIG ---
const BOOT_SEQUENCE = [
  "BIOS Date 01/04/26 15:22:31 Ver: 1.0.2",
  "CPU: Intel(R) Core(TM) i9-14900K @ 6.00GHz",
  "Memory Test: 65536K OK",
  "Initializing AshishOS Kernel v2.0.1...",
  "Loading core modules... [OK]",
  "Mounting virtual file systems... [OK]",
  "Connecting to 127.0.0.1... [OK]",
  "Checking user permissions... [ACCESS GRANTED]",
  "Starting visual interface services... [SKIPPED]",
  "Boot sequence complete.",
];

const ASCII_ART = `
   _    ___  _   _ ___ ___ _  _ 
  /_\\  / __|| |_| |_ _/ __| || |
 / _ \\ \\__ \\|  _  || |\\__ \\ __ |
/_/ \\_\\|___/|_| |_|___|___/_||_|
`;

export default function TerminalPage() {
  const router = useRouter();

  // STATE
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [isBooting, setIsBooting] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- BOOT ANIMATION ---
  useEffect(() => {
    let delay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    BOOT_SEQUENCE.forEach((line, index) => {
      delay += Math.random() * 150 + 50;
      const t = setTimeout(() => {
        setBootLines((prev) => [...prev, line]);
        if (index === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => setIsBooting(false), 800);
        }
      }, delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // AUTO SCROLL
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [bootLines, history]);

  // KEEP FOCUS
  useEffect(() => {
    if (!isBooting) inputRef.current?.focus();
  }, [isBooting, history, crtEnabled]);

  // --- WINDOW CONTROLS ---
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => router.push("/"), 400);
  };

  const handleMinimize = () => {
    setIsMinimizing(true);
    setTimeout(() => router.push("/"), 500);
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  // --- COMMAND HANDLER ---
  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    const command = cmd.trim().toLowerCase();

    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newLine: TerminalLine = { type: "input", text: cmd };
    let response: TerminalLine | null = null;

    if (command === "crt") {
      const newState = !crtEnabled;
      setCrtEnabled(newState);
      response = {
        type: "system",
        text: `CRT Emulation: ${newState ? "ENABLED" : "DISABLED"}`,
      };
    } else {
      switch (command) {
        case "help":
          response = {
            type: "output",
            text: (
              <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-1 text-green-400">
                <span className="text-yellow-400">whoami</span>{" "}
                <span>Current user info</span>
                <span className="text-yellow-400">skills</span>{" "}
                <span>Tech stack & tools</span>
                <span className="text-yellow-400">projects</span>{" "}
                <span>View portfolio work</span>
                <span className="text-yellow-400">hackathons</span>{" "}
                <span>Competition history</span>
                <span className="text-yellow-400">education</span>{" "}
                <span>Academic background</span>
                <span className="text-yellow-400">contact</span>{" "}
                <span>Contact details</span>
                <span className="text-yellow-400">gui</span>{" "}
                <span>Launch Graphical Mode</span>
                <span className="text-yellow-400">clear</span>{" "}
                <span>Clear screen</span>
                <span className="text-yellow-400">crt</span>{" "}
                <span>Toggle CRT effect</span>
              </div>
            ),
          };
          break;

        case "whoami":
          response = {
            type: "output",
            text: "Ashish M | CS Undergrad @ Amrita Vishwa Vidyapeetham | Full Stack Developer",
          };
          break;

        case "pwd":
          response = { type: "output", text: "/home/ashish" };
          break;

        case "date":
          response = { type: "output", text: new Date().toString() };
          break;

        case "uname":
        case "uname -a":
          response = {
            type: "output",
            text: "AshishOS 2.0.1 ashish-server 5.15.0-generic x86_64 GNU/Linux",
          };
          break;

        case "sudo":
          response = {
            type: "output",
            text: "visitor is not in the sudoers file. This incident will be reported.",
          };
          break;

        case "skills":
          response = {
            type: "output",
            text: (
              <div className="space-y-2">
                <div>
                  <span className="text-blue-400 font-bold">Languages:</span>{" "}
                  Python, C/C++, Java, SQL, TypeScript, JavaScript, Dart
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Frameworks:</span>{" "}
                  Next.js, React, Flutter, Tailwind CSS, FastAPI, Socket.io
                </div>
                <div>
                  <span className="text-blue-400 font-bold">
                    Tools & Platforms:
                  </span>{" "}
                  Git, Docker, Firebase, Supabase, Vercel, IntelliJ, VS Code
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Libraries:</span>{" "}
                  Gemini API, Pandas, NumPy, Matplotlib, Riverpod
                </div>
              </div>
            ),
          };
          break;

        case "education":
          response = {
            type: "output",
            text: (
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-bold">
                    Amrita Vishwa Vidyapeetham
                  </span>{" "}
                  - B.Tech CSE
                  <div className="text-zinc-500 text-sm ml-2">
                    Coimbatore, Tamil Nadu | Aug 2023 – May 2027 | CGPA: 8.86
                  </div>
                </div>
                <div>
                  <span className="text-cyan-400 font-bold">
                    Vidhyasagar Intl. Public School
                  </span>{" "}
                  - Senior Secondary
                  <div className="text-zinc-500 text-sm ml-2">
                    Tiruppur, Tamil Nadu | Apr 2022 – Apr 2023 | 94%
                  </div>
                </div>
              </div>
            ),
          };
          break;

        case "ls":
        case "projects":
          response = {
            type: "output",
            text: (
              <div className="space-y-3">
                <div>
                  <span className="text-blue-400 font-bold">GemChef</span>{" "}
                  <span className="text-zinc-600">//</span>{" "}
                  <span className="text-zinc-500">
                    Next.js, TypeScript, Gemini API
                  </span>
                  <div className="text-zinc-400 text-sm ml-2">
                    AI kitchen assistant: ingredient recognition, meal
                    planning, cook-along from YouTube
                  </div>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">
                    Campus Resource Engine
                  </span>{" "}
                  <span className="text-zinc-600">//</span>{" "}
                  <span className="text-zinc-500">
                    Next.js, Supabase, Socket.io
                  </span>
                  <div className="text-zinc-400 text-sm ml-2">
                    Real-time room booking with QR check-in, reliability scores,
                    admin dashboard
                  </div>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">RISKOFF</span>{" "}
                  <span className="text-zinc-600">//</span>{" "}
                  <span className="text-zinc-500">
                    React, FastAPI, Supabase
                  </span>
                  <div className="text-zinc-400 text-sm ml-2">
                    Loan management with AI risk scoring, OCR, voice chatbot
                  </div>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">StudSync</span>{" "}
                  <span className="text-zinc-600">//</span>{" "}
                  <span className="text-zinc-500">
                    Flutter, Dart, Firebase
                  </span>
                  <div className="text-zinc-400 text-sm ml-2">
                    Cross-platform student management app with timetable &
                    calendar
                  </div>
                </div>
              </div>
            ),
          };
          break;

        case "hackathons":
          response = {
            type: "output",
            text: (
              <div className="space-y-2">
                <div>
                  🏆{" "}
                  <span className="text-yellow-400 font-bold">
                    Meta PyTorch OpenEnv Hackathon
                  </span>{" "}
                  - Meta x Hugging Face x Scaler SST
                </div>
                <div>
                  🏆{" "}
                  <span className="text-yellow-400 font-bold">
                    Google Solution Challenge 2026
                  </span>{" "}
                  - Google x Hack2Skill
                </div>
                <div>
                  🏆{" "}
                  <span className="text-yellow-400 font-bold">
                    Gemini Global Hackathon
                  </span>{" "}
                  - Built GemChef with Gemini Vision API
                </div>
                <div>
                  🏆{" "}
                  <span className="text-yellow-400 font-bold">
                    Build-2-Break
                  </span>{" "}
                  - Built RISKOFF at Amrita Vishwa Vidyapeetham
                </div>
              </div>
            ),
          };
          break;

        case "contact":
          response = {
            type: "output",
            text: (
              <div className="space-y-1">
                <div>
                  <span className="text-blue-400 font-bold">Email:</span>{" "}
                  ashish007tup@gmail.com
                </div>
                <div>
                  <span className="text-blue-400 font-bold">GitHub:</span>{" "}
                  github.com/Ash007dev
                </div>
                <div>
                  <span className="text-blue-400 font-bold">LinkedIn:</span>{" "}
                  linkedin.com/in/imashishm
                </div>
              </div>
            ),
          };
          break;

        case "gui":
          response = {
            type: "system",
            text: "Starting X11 server... Launching GUI...",
          };
          setTimeout(() => router.push("/"), 1000);
          break;

        case "crt on":
          setCrtEnabled(true);
          response = { type: "system", text: "CRT Emulation: ENABLED" };
          break;

        case "crt off":
          setCrtEnabled(false);
          response = { type: "system", text: "CRT Emulation: DISABLED" };
          break;

        case "clear":
          setHistory([]);
          return;

        case "neofetch":
          response = {
            type: "output",
            text: (
              <div className="flex gap-6">
                <pre className="text-green-400 text-[10px] leading-tight">{ASCII_ART}</pre>
                <div className="space-y-1 text-sm">
                  <div><span className="text-green-400 font-bold">ashish</span>@<span className="text-green-400 font-bold">portfolio</span></div>
                  <div className="text-zinc-700">─────────────</div>
                  <div><span className="text-blue-400 font-bold">OS:</span> AshishOS 2.0.1</div>
                  <div><span className="text-blue-400 font-bold">Role:</span> Full Stack Developer</div>
                  <div><span className="text-blue-400 font-bold">University:</span> Amrita Vishwa Vidyapeetham</div>
                  <div><span className="text-blue-400 font-bold">Stack:</span> Next.js, React, Python, Flutter</div>
                  <div><span className="text-blue-400 font-bold">Editor:</span> VS Code / IntelliJ</div>
                </div>
              </div>
            ),
          };
          break;

        default:
          response = {
            type: "output",
            text: `bash: ${command}: command not found. Type 'help' for available commands.`,
          };
      }
    }

    setHistory((prev) =>
      response ? [...prev, newLine, response] : [...prev, newLine]
    );
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? cmdHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(cmdHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(
          newIndex === cmdHistory.length - 1 ? cmdHistory[newIndex] : ""
        );
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "help",
        "whoami",
        "skills",
        "projects",
        "hackathons",
        "education",
        "contact",
        "gui",
        "clear",
        "crt",
        "neofetch",
      ];
      const match = commands.find((c) =>
        c.startsWith(input.toLowerCase())
      );
      if (match) setInput(match);
    } else if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isClosing ? 0 : 1,
          scale: isMinimizing ? 0.01 : isClosing ? 0.9 : 1,
          y: isMinimizing ? 800 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`min-h-screen bg-[#111] flex items-center justify-center font-mono overflow-hidden selection:bg-green-500/30 ${
          isMaximized ? "p-0" : "p-4"
        }`}
      >
        {/* --- CSS FOR CRT EFFECTS --- */}
        <style jsx global>{`
          @keyframes scanline {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 0% 100%;
            }
          }
          @keyframes flicker {
            0% {
              opacity: 0.98;
            }
            50% {
              opacity: 0.95;
            }
            100% {
              opacity: 0.98;
            }
          }
          .crt-active {
            animation: flicker 0.2s infinite;
            text-shadow: 0 0 4px #22c55e, 0 0 10px rgba(34, 197, 94, 0.5);
          }
          .scanlines {
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0),
              rgba(255, 255, 255, 0) 50%,
              rgba(0, 0, 0, 0.2) 50%,
              rgba(0, 0, 0, 0.2)
            );
            background-size: 100% 3px;
            animation: scanline 8s linear infinite;
          }
        `}</style>

        {/* --- MONITOR FRAME --- */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`relative bg-[#1a1a1a] shadow-2xl border border-[#333] ${
            isMaximized
              ? "w-full h-screen rounded-none p-0"
              : "w-full max-w-5xl aspect-video rounded-xl p-2"
          }`}
        >
          {/* MAC-STYLE WINDOW CONTROLS */}
          <div className={`absolute ${isMaximized ? "top-3 left-3" : "top-4 left-4"} flex gap-2 z-50`}>
            {/* Red — Close */}
            <button
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-sm hover:brightness-110 transition-all group relative"
              title="Close"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black/0 group-hover:text-black/80 transition-colors">
                ✕
              </span>
            </button>
            {/* Yellow — Minimize */}
            <button
              onClick={handleMinimize}
              className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-sm hover:brightness-110 transition-all group relative"
              title="Minimize"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black/0 group-hover:text-black/80 transition-colors">
                −
              </span>
            </button>
            {/* Green — Maximize */}
            <button
              onClick={handleMaximize}
              className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-sm hover:brightness-110 transition-all group relative"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black/0 group-hover:text-black/80 transition-colors">
                {isMaximized ? "❐" : "⤢"}
              </span>
            </button>
          </div>

          {/* SCREEN TITLE */}
          <div
            className={`absolute ${
              isMaximized ? "top-2" : "top-3"
            } left-0 right-0 text-center text-zinc-600 text-xs font-bold pointer-events-none`}
          >
            ashish - zsh - 80x24
          </div>

          {/* SCREEN INNER */}
          <div
            className={`w-full bg-black overflow-hidden relative border border-[#333] ${
              crtEnabled ? "crt-active" : ""
            } ${
              isMaximized
                ? "h-full rounded-none mt-0"
                : "mt-8 h-[calc(100%-2rem)] rounded-lg"
            }`}
          >
            {/* SCANLINES OVERLAY */}
            {crtEnabled && (
              <>
                <div className="scanlines absolute inset-0 z-40 pointer-events-none h-[200%] w-full"></div>
                <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_70%,rgba(0,0,0,0.6)_100%)]"></div>
              </>
            )}

            {/* CONTENT */}
            <div
              className={`w-full h-full overflow-y-auto text-green-500 text-sm md:text-base leading-relaxed scrollbar-hide ${
                isMaximized ? "p-8 pt-10" : "p-6"
              }`}
              onClick={() => inputRef.current?.focus()}
            >
              {isBooting ? (
                <div className="space-y-1">
                  {bootLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  <span className="animate-pulse">_</span>
                </div>
              ) : (
                <>
                  <pre className="text-[8px] md:text-xs font-bold leading-none mb-6 opacity-80 select-none text-green-400">
                    {ASCII_ART}
                  </pre>

                  <div className="mb-6 opacity-80 text-zinc-400">
                    Welcome to AshishOS v2.0.1 (tty1)
                    <br />
                    Type{" "}
                    <span className="text-yellow-400">&apos;help&apos;</span>{" "}
                    for a list of commands.
                  </div>

                  {history.map((line, i) => (
                    <div key={i} className="mb-2 break-words">
                      {line.type === "input" ? (
                        <div className="flex gap-2">
                          <span className="text-green-500 font-bold">
                            ashish@portfolio:~$
                          </span>
                          <span className="text-white">{line.text}</span>
                        </div>
                      ) : (
                        <div
                          className={`whitespace-pre-wrap ${
                            line.type === "system"
                              ? "text-yellow-400 italic"
                              : "opacity-90"
                          }`}
                        >
                          {line.text}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="flex gap-2 items-center mt-2">
                    <span className="text-green-500 font-bold">
                      ashish@portfolio:~$
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="bg-transparent outline-none border-none flex-1 text-white caret-green-500"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                  <div ref={bottomRef} />
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}