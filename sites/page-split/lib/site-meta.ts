export const siteMeta = {
  id: "page-split",
  emoji: "🔀",
  name: {
    en: "Page Split",
    zh: "落地页 A/B 测试",
  },
  nav: [
    {
      href: "/guide/vwo-alternative-indie-hackers",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/experiments",
      label: { en: "Experiments", zh: "实验" },
    },
  ],
  guideHref: "/guide/vwo-alternative-indie-hackers",
} as const;

export type SiteMeta = typeof siteMeta;
