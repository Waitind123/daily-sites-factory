export const siteMeta = {
  id: "churn-pulse",
  emoji: "💚",
  name: {
    en: "Churn Pulse",
    zh: "客户健康分",
  },
  nav: [
    {
      href: "/guide/baremetrics-churn-alternative-indie-hackers",
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
  guideHref: "/guide/baremetrics-churn-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
