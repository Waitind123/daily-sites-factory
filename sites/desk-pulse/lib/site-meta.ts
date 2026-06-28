export const siteMeta = {
  id: "desk-pulse",
  emoji: "🎫",
  name: {
    en: "Desk Pulse",
    zh: "极简客服工单",
  },
  nav: [
    {
      href: "/guide/zendesk-alternative-indie-hackers",
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
  guideHref: "/guide/zendesk-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
