export const siteMeta = {
  id: "waitlist-pulse",
  emoji: "🚀",
  name: {
    en: "Waitlist Pulse",
    zh: "产品等候名单",
  },
  nav: [
    {
      href: "/guide/prefinery-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/lists",
      label: {
        en: "Lists",
        zh: "名单",
      },
    },
  ],
  guideHref: "/guide/prefinery-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
