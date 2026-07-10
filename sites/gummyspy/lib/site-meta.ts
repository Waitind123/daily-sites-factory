export const siteMeta = {
  id: "gummyspy",
  emoji: "🔎",
  name: {
    en: "GummySpy",
    zh: "GummySearch 替代品",
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
      href: "/scan",
      label: {
        en: "Audience",
        zh: "受众",
      },
    },
    {
      href: "/spy",
      label: {
        en: "Competitor",
        zh: "竞品",
      },
    },
  ],
  guideHref: "/guide/gummysearch-alternative-indie-hackers",
  joinLabel: {
    en: "Join · $9.9/mo",
    zh: "订阅 · $9.9/月",
  },
} as const;
export type SiteMeta = typeof siteMeta;
