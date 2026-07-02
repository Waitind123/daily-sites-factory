export const siteMeta = {
  id: "zapier-pulse",
  emoji: "⚡",
  name: {
    en: "Zapier Pulse",
    zh: "Zapier 极简替代品",
  },
  nav: [
    {
      href: "/guide/zapier-alternative-indie-hackers",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/flows",
      label: { en: "Flows", zh: "自动化" },
    },
  ],
  guideHref: "/guide/zapier-alternative-indie-hackers",
} as const;

export type SiteMeta = typeof siteMeta;
