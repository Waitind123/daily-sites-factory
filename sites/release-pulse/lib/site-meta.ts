export const siteMeta = {
  id: "release-pulse",
  emoji: "🚀",
  name: {
    en: "Release Pulse",
    zh: "发布日志转社交帖",
  },
  nav: [
    {
      href: "/guide/changelog-social-posts-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/convert",
      label: {
        en: "Convert",
        zh: "转换",
      },
    },
  ],
  guideHref: "/guide/changelog-social-posts-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
