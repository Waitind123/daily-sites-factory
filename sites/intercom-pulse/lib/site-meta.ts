export const siteMeta = {
  id: "intercom-pulse",
  emoji: "💬",
  name: {
    en: "Intercom Pulse",
    zh: "Intercom 平替",
  },
  nav: [
    {
      href: "/guide/intercom-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/inbox",
      label: {
        en: "Inbox",
        zh: "收件箱",
      },
    },
  ],
  guideHref: "/guide/intercom-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
