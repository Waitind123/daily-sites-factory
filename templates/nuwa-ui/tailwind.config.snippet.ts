// 合并到站点 tailwind.config.ts 的 theme.extend
export const nuwaTailwindExtend = {
  colors: {
    brand: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      500: "#6366f1",
      600: "#6366f1",
      700: "#4f46e5",
    },
    nuwa: {
      bg: "#0A0A0F",
      surface: "rgba(255,255,255,0.03)",
      border: "rgba(255,255,255,0.08)",
      muted: "#71717a",
      accent: "#6366f1",
    },
  },
  fontFamily: {
    sans: ["var(--font-inter)", "system-ui", "sans-serif"],
    mono: ["var(--font-mono)", "ui-monospace", "monospace"],
  },
  backgroundImage: {
    "nuwa-gradient":
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent)",
  },
};
