export const siteMeta = {
  id: "visa-live",
  emoji: "📡",
  name: {
    en: "Visa Live",
    zh: "签证政策实时追踪",
  },
  nav: [
    {
      href: "/guide/digital-nomad-visa-realtime-tracking",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/track",
      label: { en: "Track", zh: "追踪" },
    },
    {
      href: "/alerts",
      label: { en: "Alerts", zh: "告警" },
    },
    {
      href: "/visas",
      label: { en: "Policies", zh: "政策" },
    },
  ],
  guideHref: "/guide/digital-nomad-visa-realtime-tracking",
} as const;
export type SiteMeta = typeof siteMeta;
