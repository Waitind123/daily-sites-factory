export const siteMeta = {
  id: "wiki-pulse",
  emoji: "🧠",
  name: {
    en: "Wiki Pulse",
    zh: "团队知识库",
  },
  nav: [
    {
      href: "/guide/notion-obsidian-team-wiki-alternative",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/wiki",
      label: {
        en: "Wiki",
        zh: "知识库",
      },
    },
  ],
  guideHref: "/guide/notion-obsidian-team-wiki-alternative",
} as const;
export type SiteMeta = typeof siteMeta;
