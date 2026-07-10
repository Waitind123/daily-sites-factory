export const siteMeta = {
  id: "freelance-proposal",
  emoji: "📝",
  name: {
    en: "Freelance Proposal",
    zh: "自由职业报价单",
  },
  nav: [
    {
      href: "/guide/honeybook-alternative-freelancer",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/proposal",
      label: { en: "Proposal", zh: "报价" },
    },
  ],
  guideHref: "/guide/honeybook-alternative-freelancer",
} as const;

export type SiteMeta = typeof siteMeta;
