export const siteMeta = {
  id: "tracetics-lite",
  emoji: "📊",
  name: {
    en: "Tracetics Lite",
    zh: "Tracetics Lite",
  },
  nav: [
    {
      href: "/guide/plausible-funnel-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/funnels",
      label: {
        en: "Funnels",
        zh: "漏斗",
      },
    },
  ],
  guideHref: "/guide/plausible-funnel-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
