export const siteMeta = {
  id: "funnel-pulse",
  emoji: "📉",
  name: {
    en: "Funnel Pulse",
    zh: "漏斗分析",
  },
  nav: [
    {
      href: "/guide/mixpanel-alternative-indie-hackers",
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
  guideHref: "/guide/mixpanel-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
