import type { Config } from "tailwindcss";

/** Merge into each site's tailwind.config.ts theme.extend */
export const darkShellTheme = {
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
};

export default darkShellTheme;
