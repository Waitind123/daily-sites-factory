export const siteMeta = {
  id: "feature-vote",
  emoji: "🗳️",
  name: {
    en: "Feature Vote",
    zh: "功能投票板",
  },
  nav: [
    {
      href: "/guide/canny-alternative-indie-hackers",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/boards",
      label: { en: "Boards", zh: "投票板" },
    },
  ],
  guideHref: "/guide/canny-alternative-indie-hackers",
} as const;

export type SiteMeta = typeof siteMeta;
