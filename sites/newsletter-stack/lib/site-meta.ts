export const siteMeta = {
  id: "newsletter-stack",
  emoji: "📧",
  name: {
    en: "Newsletter Stack",
    zh: "Newsletter 工具对比",
  },
  nav: [
    {
      href: "/guide/newsletter-tool-comparison-indie",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/compare",
      label: {
        en: "Compare",
        zh: "对比",
      },
    },
  ],
  guideHref: "/guide/newsletter-tool-comparison-indie",
} as const;
export type SiteMeta = typeof siteMeta;
