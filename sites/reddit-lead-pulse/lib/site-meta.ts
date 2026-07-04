export const siteMeta = {
  id: "reddit-lead-pulse",
  emoji: "🔍",
  name: {
    en: "Reddit Lead Pulse",
    zh: "Reddit 获客线索",
  },
  nav: [
    {
      href: "/guide/reddit-lead-generation-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/monitor",
      label: {
        en: "Monitor",
        zh: "监控",
      },
    },
  ],
  guideHref: "/guide/reddit-lead-generation-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
