export const siteMeta = {
  id: "docsend-pulse",
  emoji: "📄",
  name: {
    en: "DocSend Pulse",
    zh: "文档追踪脉冲",
  },
  nav: [
    {
      href: "/guide/docsend-alternative-secure-doc-sharing",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/share",
      label: {
        en: "Share",
        zh: "分享",
      },
    },
  ],
  guideHref: "/guide/docsend-alternative-secure-doc-sharing",
} as const;
export type SiteMeta = typeof siteMeta;
