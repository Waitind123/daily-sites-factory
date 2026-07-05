export const siteMeta = {
  id: "pricing-heatmap",
  emoji: "🔥",
  name: {
    en: "Indie Pricing Heatmap",
    zh: "独立开发者定价页热力图",
  },
  nav: [
    {
      href: "/guide/hotjar-alternative-pricing-page-heatmap",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/diagnose",
      label: {
        en: "Heatmap",
        zh: "热力图",
      },
    },
  ],
  guideHref: "/guide/hotjar-alternative-pricing-page-heatmap",
} as const;
export type SiteMeta = typeof siteMeta;
