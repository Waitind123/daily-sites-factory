export const siteMeta = {
  id: "newsletter-stack",
  emoji: "📧",
  name: {
    en: "Newsletter Stack",
    zh: "Newsletter 工具对比",
  },
  guideHref: "/guide/newsletter-tool-comparison-indie",
  nav: [
    {
      href: "/compare",
      label: {
        en: "Compare",
        zh: "对比",
      },
    },
  ],
} as const;
export type SiteMeta = typeof siteMeta;
