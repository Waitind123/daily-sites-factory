export const siteMeta = {
  id: "review-pulse",
  emoji: "⭐",
  name: {
    en: "Review Pulse",
    zh: "Google 评价自动索取",
  },
  nav: [
    {
      href: "/guide/sms-google-review-request-local-business",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/campaigns",
      label: {
        en: "Campaigns",
        zh: "活动",
      },
    },
  ],
  guideHref: "/guide/sms-google-review-request-local-business",
} as const;
export type SiteMeta = typeof siteMeta;
