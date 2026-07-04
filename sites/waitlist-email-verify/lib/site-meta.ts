export const siteMeta = {
  id: "waitlist-email-verify",
  emoji: "✉️",
  name: {
    en: "Waitlist Verify",
    zh: "等候名单邮件验证",
  },
  nav: [
    {
      href: "/guide/waitlist-email-validation-indie-hackers",
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
  guideHref: "/guide/waitlist-email-validation-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
