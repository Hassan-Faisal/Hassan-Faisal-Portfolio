import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Cool-slate base — deeper and less neutral than flat black
        void: "#06070B",
        ink: "#0A0C11",
        panel: "#0F1218",
        "panel-2": "#151A23",
        line: "rgba(255,255,255,0.09)",
        "line-strong": "rgba(255,255,255,0.16)",
        // Warm identity accent (kept from the original brand, expanded into a system)
        amber: "#FDBA74",
        ember: "#F97316",
        flame: "#EA580C",
        // Cool counterpoint — the "signal" travelling the agent graph
        iris: "#6366F1",
        "iris-2": "#A5B4FC",
        // Semantic status only
        mint: "#34D399",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(249,115,22,0.45)",
        "glow-iris": "0 0 60px -12px rgba(99,102,241,0.5)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 60px -30px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        "flame-grad": "linear-gradient(120deg, #FDBA74 0%, #F97316 45%, #EA580C 100%)",
        "signal-grad": "linear-gradient(120deg, #F97316 0%, #A5B4FC 55%, #6366F1 100%)",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "signal-travel": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "draw-edge": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "grid-drift": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "48px 48px" },
        },
      },
      animation: {
        ticker: "ticker 32s linear infinite",
        "fade-up": "fade-up 700ms cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
