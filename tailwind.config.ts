import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "rgb(var(--page-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        elevated: "rgb(var(--elevated-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        line: "rgb(var(--line-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft-rgb) / <alpha-value>)",
        cyan: "rgb(var(--cyan-rgb) / <alpha-value>)",
        warm: "rgb(var(--warm-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Cascadia Code", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        glow: "0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent), 0 24px 80px color-mix(in srgb, var(--accent) 12%, transparent)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
