export const siteMeta = {
  id: "docs-pulse",
  emoji: "📚",
  name: {
    en: "Docs Pulse",
    zh: "API 文档托管",
  },
  nav: [
    {
      href: "/guide/gitbook-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/docs",
      label: {
        en: "Docs",
        zh: "文档",
      },
    },
  ],
  guideHref: "/guide/gitbook-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
