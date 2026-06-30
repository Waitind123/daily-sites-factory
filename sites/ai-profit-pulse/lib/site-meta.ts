export const siteMeta = {
  id: "ai-profit-pulse",
  emoji: "💹",
  name: {
    en: "AI Profit Pulse",
    zh: "AI 客户利润追踪",
  },
  nav: [
    {
      href: "/guide/ai-saas-customer-profit-tracking",
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
  guideHref: "/guide/ai-saas-customer-profit-tracking",
} as const;
export type SiteMeta = typeof siteMeta;
