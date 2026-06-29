export const siteMeta = {
  id: "price-lens",
  emoji: "📈",
  name: {
    en: "PriceLens",
    zh: "定价页转化诊断",
  },
  nav: [
    {
      href: "/guide/pricing-page-conversion-audit",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/analyze",
      label: {
        en: "Analyze",
        zh: "诊断",
      },
    },
  ],
  guideHref: "/guide/pricing-page-conversion-audit",
} as const;
export type SiteMeta = typeof siteMeta;
