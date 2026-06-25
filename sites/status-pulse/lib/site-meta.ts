export const siteMeta = {
  id: "status-pulse",
  emoji: "🟢",
  name: {
    en: "Status Pulse",
    zh: "状态页发布",
  },
  nav: [
    {
      href: "/guide/statuspage-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/pages",
      label: {
        en: "Pages",
        zh: "状态页",
      },
    },
  ],
  guideHref: "/guide/statuspage-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
