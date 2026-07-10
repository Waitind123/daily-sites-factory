export const siteMeta = {
  id: "stripe-pulse",
  emoji: "📊",
  name: {
    en: "Stripe Pulse",
    zh: "Stripe 收入仪表盘",
  },
  nav: [
    {
      href: "/guide/chartmogul-alternative-indie-hackers",
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
  guideHref: "/guide/chartmogul-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
