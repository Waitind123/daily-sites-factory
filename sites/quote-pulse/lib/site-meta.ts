export const siteMeta = {
  id: "quote-pulse",
  emoji: "📋",
  name: {
    en: "Quote Pulse",
    zh: "极简报价单",
  },
  nav: [
    {
      href: "/guide/honeybook-alternative-freelancers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/quotes",
      label: {
        en: "Quotes",
        zh: "报价",
      },
    },
  ],
  guideHref: "/guide/honeybook-alternative-freelancers",
} as const;
export type SiteMeta = typeof siteMeta;
