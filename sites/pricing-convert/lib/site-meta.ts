export const siteMeta = {
  id: "pricing-convert",
  emoji: "📈",
  name: {
    en: "Pricing Convert",
    zh: "定价页转化诊断",
  },
  nav: [
    {
      href: "/guide/pricing-page-conversion-diagnosis-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/diagnose",
      label: {
        en: "Diagnose",
        zh: "诊断",
      },
    },
  ],
  guideHref: "/guide/pricing-page-conversion-diagnosis-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
