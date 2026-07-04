export const siteMeta = {
  id: "saas-alt-intel",
  emoji: "🔀",
  name: {
    en: "Alt Intel",
    zh: "SaaS 替代品情报",
  },
  nav: [
    {
      href: "/intel",
      label: {
        en: "Intel",
        zh: "情报",
      },
    },
  ],
  guideHref: "/guide/saas-price-hike-alternatives-indie",
} as const;
export type SiteMeta = typeof siteMeta;
