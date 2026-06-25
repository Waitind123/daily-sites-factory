export const siteMeta = {
  id: "reddit-pulse",
  emoji: "🔍",
  name: {
    en: "Reddit Pulse",
    zh: "Reddit 痛点挖掘",
  },
  nav: [
    {
      href: "/guide/gummysearch-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/mine",
      label: {
        en: "Mine",
        zh: "挖掘",
      },
    },
  ],
  guideHref: "/guide/gummysearch-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
