export const siteMeta = {
  id: "status-embed-lite",
  emoji: "📦",
  name: {
    en: "Status Embed Lite",
    zh: "极简状态页",
  },
  nav: [
    {
      href: "/guide/status-embed-widget-alternative",
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
  guideHref: "/guide/status-embed-widget-alternative",
} as const;
export type SiteMeta = typeof siteMeta;
