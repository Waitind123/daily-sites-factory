export const siteMeta = {
  id: "coworking-pass",
  emoji: "🎫",
  name: {
    en: "Coworking Pass",
    zh: "联合办公日票",
  },
  nav: [
    {
      href: "/guide/coworking-day-pass-alternative-digital-nomads",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/passes",
      label: { en: "Day passes", zh: "日票预订" },
    },
  ],
  guideHref: "/guide/coworking-day-pass-alternative-digital-nomads",
} as const;

export type SiteMeta = typeof siteMeta;
