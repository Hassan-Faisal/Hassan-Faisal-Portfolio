import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        panel: "#111111",
        line: "rgba(255,255,255,0.12)",
        ember: "#f97316",
        mint: "#4ade80",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(249,115,22,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
