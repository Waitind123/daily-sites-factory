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
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#6366f1",
          700: "#4f46e5",
        },
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
