export const siteMeta = {
  id: "pulse-suite",
  emoji: "📡",
  name: {
    en: "Pulse Suite",
    zh: "监控状态一体",
  },
  nav: [
    {
      href: "/guide/uptime-status-page-alternative-indie-hackers",
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
  guideHref: "/guide/uptime-status-page-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
