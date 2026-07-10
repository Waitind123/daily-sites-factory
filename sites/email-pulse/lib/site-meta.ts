export const siteMeta = {
  id: "email-pulse",
  emoji: "✉️",
  name: {
    en: "Email Pulse",
    zh: "HTML 邮件构建器",
  },
  nav: [
    {
      href: "/guide/mailchimp-alternative-indie-hackers",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/templates",
      label: { en: "Templates", zh: "模板" },
    },
  ],
  guideHref: "/guide/mailchimp-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
