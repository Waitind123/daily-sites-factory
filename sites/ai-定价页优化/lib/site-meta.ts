export const siteMeta = {
  id: "ai-定价页优化",
  emoji: "✨",
  name: {
    en: "PricePulse AI",
    zh: "AI 定价页优化",
  },
  nav: [
    {
      href: "/guide/ai-pricing-page-optimization-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/analyze",
      label: {
        en: "Optimize",
        zh: "优化",
      },
    },
  ],
  guideHref: "/guide/ai-pricing-page-optimization-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
