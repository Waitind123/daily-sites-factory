export const siteMeta = {
  id: "pay-once-pulse",
  emoji: "💎",
  name: {
    en: "PayOnce Pulse",
    zh: "一次性买断工具目录",
  },
  nav: [
    {
      href: "/guide/pay-once-saas-alternatives-2026",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/tools",
      label: {
        en: "Directory",
        zh: "目录",
      },
    },
  ],
  guideHref: "/guide/pay-once-saas-alternatives-2026",
} as const;
export type SiteMeta = typeof siteMeta;
