export const siteMeta = {
  id: "visa-tracker",
  emoji: "📡",
  name: {
    en: "Visa Tracker",
    zh: "签证追踪器",
  },
  joinLabel: {
    en: "Subscribe · $29/mo",
    zh: "订阅 · $29/月",
  },
  nav: [
    {
      href: "/guide/digital-nomad-visa-expiry-tracking",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/track",
      label: { en: "Tracker", zh: "追踪" },
    },
    {
      href: "/visas",
      label: { en: "Policies", zh: "政策" },
    },
  ],
  guideHref: "/guide/digital-nomad-visa-expiry-tracking",
} as const;

export type SiteMeta = typeof siteMeta;
