export const siteMeta = {
  id: "ai-waitlist",
  emoji: "🤖",
  name: {
    en: "AI Waitlist",
    zh: "AI 等候名单验证",
  },
  nav: [
    {
      href: "/guide/ai-waitlist-validation-indie-hackers",
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
  guideHref: "/guide/ai-waitlist-validation-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
