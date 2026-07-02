export const siteMeta = {
  id: "affiliate-pulse",
  emoji: "🤝",
  name: {
    en: "Affiliate Pulse",
    zh: "联盟追踪平替",
  },
  nav: [
    {
      href: "/guide/rewardful-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/dashboard",
      label: {
        en: "Dashboard",
        zh: "控制台",
      },
    },
  ],
  guideHref: "/guide/rewardful-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
