export const siteMeta = {
  id: "pain-radar",
  emoji: "📡",
  name: {
    en: "Pain Radar",
    zh: "跨平台痛点雷达",
  },
  nav: [
    {
      href: "/guide/cross-platform-pain-radar-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/scan",
      label: {
        en: "Scan",
        zh: "扫描",
      },
    },
  ],
  guideHref: "/guide/cross-platform-pain-radar-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
