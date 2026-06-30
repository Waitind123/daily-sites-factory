export const siteMeta = {
  id: "ai-overview-排名追踪",
  emoji: "🤖",
  name: {
    en: "AIO Rank",
    zh: "AI Overview 排名追踪",
  },
  nav: [
    {
      href: "/guide/ai-overview-rank-tracking-indie-hackers",
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
  guideHref: "/guide/ai-overview-rank-tracking-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
