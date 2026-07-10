export const siteMeta = {
  id: "status-lite-alt",
  emoji: "📡",
  name: {
    en: "Status Lite",
    zh: "极简状态页",
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
