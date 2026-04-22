export const profile = {
  name: "Ashish M",
  email: "ashish007tup@gmail.com",
  github: "https://github.com/Ash007dev",
  linkedin: "https://linkedin.com/in/imashishm",
  twitter: "https://twitter.com/ash007dev",
  resume: "https://drive.google.com/file/d/1_htKe_WlqQWqodEJf4rPKRjOObDG4-jP/view?usp=drive_link",
  college: "Amrita Vishwa Vidyapeetham",
  degree: "B.Tech CSE",
  batch: "2023 – 2027",
  cgpa: "8.86",
  school: "Vidhyasagar International Public School",
  schoolScore: "94%",
  bio: "Computer Science undergrad at Amrita Vishwa Vidyapeetham building full-stack apps that actually work. Clean code, fast shipping, obsessing over details — both server-side and on screen.",
};

export const projects = [
  {
    id: "01",
    name: "GemChef",
    date: "February 2026",
    tags: ["Next.js", "TypeScript", "Gemini Vision API"],
    hackathon: "Gemini Global Hackathon",
    description:
      "AI kitchen assistant using Gemini Vision to identify ingredients from images and suggest recipes. Features weekly meal planning with grocery list generation, dietary filters for conditions like diabetes and allergies, and a Cook-Along feature that extracts structured recipes from YouTube video URLs using AI.",
    github: "https://github.com/Ash007dev",
    live: null,
  },
  {
    id: "02",
    name: "Campus Resource Engine",
    date: "February 2026",
    tags: ["Next.js", "TypeScript", "Supabase", "Socket.io"],
    hackathon: null,
    description:
      "Real-time campus room booking system with WebSocket-based live availability for concurrent users. QR-based check-in auto-cancels no-show bookings. User reliability score adjusts booking limits. Admin dashboard with RBAC, demand heatmaps, utilization reports, audit logs, and broadcast notifications.",
    github: "https://github.com/Ash007dev/CampusRes",
    live: null,
  },
  {
    id: "03",
    name: "RISKOFF",
    date: "January 2026",
    tags: ["React", "FastAPI", "Supabase", "Python"],
    hackathon: "Build-2-Break · Amrita",
    description:
      "Loan management platform with AI-based risk scoring that evaluates applicant profiles and flags high-risk cases. OTP authentication, role-based access control, portfolio performance dashboards with charts, Gemini Vision OCR for KYC documents, and a voice assistant chatbot for loan queries.",
    github: "https://github.com/anupama0307/Debuggers",
    live: null,
  },
  {
    id: "04",
    name: "StudSync",
    date: "September 2025",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    hackathon: null,
    description:
      "Cross-platform student management app with timetable tracking, academic calendar, and real-time Firestore updates. Firebase authentication with web version deployed on Vercel.",
    github: "https://github.com/Ash007dev/Stud-Sync",
    live: null,
  },
];

export const skills = {
  Languages: [
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 88 },
    { name: "SQL", level: 85 },
    { name: "C/C++", level: 82 },
    { name: "Java", level: 78 },
    { name: "Dart", level: 75 },
  ],
  Frameworks: [
    { name: "Next.js", level: 92 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 94 },
    { name: "FastAPI", level: 82 },
    { name: "Flutter", level: 80 },
    { name: "Socket.io", level: 78 },
  ],
  "Tools & Platforms": [
    { name: "Git", level: 95 },
    { name: "Supabase", level: 85 },
    { name: "Firebase", level: 84 },
    { name: "Gemini API", level: 85 },
    { name: "Vercel", level: 90 },
    { name: "Docker", level: 75 },
  ],
};

export const hackathons = [
  {
    name: "Meta PyTorch OpenEnv Hackathon",
    date: "2026",
    project: "Meta × Hugging Face × Scaler SST",
    description: "India's biggest AI hackathon. Building RL environments with PyTorch.",
  },
  {
    name: "Google Solution Challenge 2026",
    date: "2026",
    project: "Google × Hack2Skill",
    description: "Global challenge to build solutions for UN Sustainable Development Goals.",
  },
  {
    name: "Gemini Global Hackathon",
    date: "February 2026",
    project: "GemChef",
    description:
      "Built an AI-powered kitchen and meal planning assistant using Gemini Vision API. Submitted to Google's global Gemini hackathon.",
  },
  {
    name: "Build-2-Break · Amrita",
    date: "January 2026",
    project: "RISKOFF",
    description:
      "Two-phase hackathon with a Build phase and a Break phase. Built a loan management platform with AI risk scoring under competitive conditions.",
  },
];
