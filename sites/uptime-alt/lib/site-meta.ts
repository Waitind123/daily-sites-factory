export const siteMeta = {
  id: "uptime-alt",
  emoji: "⚡",
  name: {
    en: "UptimeAlt",
    zh: "Uptime 涨价替代品",
  },
  nav: [
    {
      href: "/guide/uptimerobot-price-hike-alternative-2026",
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
  guideHref: "/guide/uptimerobot-price-hike-alternative-2026",
} as const;
export type SiteMeta = typeof siteMeta;
