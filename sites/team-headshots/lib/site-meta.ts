export const siteMeta = {
  id: "team-headshots",
  emoji: "👥",
  name: {
    en: "Team Headshots",
    zh: "团队 AI 头像",
  },
  joinLabel: {
    en: "Subscribe · $9.9/mo",
    zh: "订阅 · $9.9/月",
  },
  nav: [
    {
      href: "/guide/team-linkedin-headshots",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/team",
      label: { en: "Team studio", zh: "团队工作室" },
    },
  ],
  guideHref: "/guide/team-linkedin-headshots",
} as const;
export type SiteMeta = typeof siteMeta;
