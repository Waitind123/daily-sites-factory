export const siteMeta = {
  id: "sign-pulse",
  emoji: "✍️",
  name: {
    en: "Sign Pulse",
    zh: "极简签署台",
  },
  nav: [
    {
      href: "/guide/pandadoc-alternative-small-teams",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/quotes",
      label: {
        en: "Documents",
        zh: "文档",
      },
    },
  ],
  guideHref: "/guide/pandadoc-alternative-small-teams",
} as const;
export type SiteMeta = typeof siteMeta;
