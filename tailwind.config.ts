import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nb-black": "#0a0a0a",
        "nb-white": "#f5f0e8",
        "nb-yellow": "#ffe629",
        "nb-blue": "#0057ff",
        "nb-red": "#ff3131",
      },
      boxShadow: {
        "nb-sm": "4px 4px 0px #0a0a0a",
        "nb-md": "6px 6px 0px #0a0a0a",
        "nb-lg": "10px 10px 0px #0a0a0a",
        "nb-xl": "16px 16px 0px #0a0a0a",
      },
      borderWidth: {
        nb: "3px",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;