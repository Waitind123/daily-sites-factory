export const siteMeta = {
  id: "stripe-pulse-lite",
  emoji: "📈",
  name: {
    en: "Stripe Pulse Lite",
    zh: "Indie 订阅分析",
  },
  nav: [
    {
      href: "/guide/baremetrics-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/dashboard",
      label: {
        en: "Dashboard",
        zh: "仪表盘",
      },
    },
  ],
  guideHref: "/guide/baremetrics-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
