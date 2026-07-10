export const siteMeta = {
  id: "incident-ai",
  emoji: "🚨",
  name: {
    en: "Incident AI",
    zh: "AI 事件摘要",
  },
  nav: [
    {
      href: "/guide/ai-incident-communication-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/draft",
      label: {
        en: "Draft",
        zh: "生成",
      },
    },
  ],
  guideHref: "/guide/ai-incident-communication-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
