export const siteMeta = {
  id: "content-pulse",
  emoji: "📣",
  name: {
    en: "Content Pulse",
    zh: "内容多平台分发",
  },
  nav: [
    {
      href: "/guide/buffer-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/repost",
      label: {
        en: "Repost",
        zh: "分发",
      },
    },
  ],
  guideHref: "/guide/buffer-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
