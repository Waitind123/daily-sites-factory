export const siteMeta = {
  id: "saas-早期用户市场",
  emoji: "🧪",
  name: {
    en: "Beta Match",
    zh: "早期用户市场",
  },
  nav: [
    {
      href: "/guide/find-first-10-beta-users-saas",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/listings",
      label: {
        en: "Listings",
        zh: "招募",
      },
    },
  ],
  guideHref: "/guide/find-first-10-beta-users-saas",
} as const;
export type SiteMeta = typeof siteMeta;
