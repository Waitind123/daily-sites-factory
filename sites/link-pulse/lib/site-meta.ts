export const siteMeta = {
  id: "link-pulse",
  emoji: "🔗",
  name: {
    en: "Link Pulse",
    zh: "短链点击统计",
  },
  nav: [
    {
      href: "/guide/bitly-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/dashboard",
      label: {
        en: "Dashboard",
        zh: "控制台",
      },
    },
  ],
  guideHref: "/guide/bitly-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
