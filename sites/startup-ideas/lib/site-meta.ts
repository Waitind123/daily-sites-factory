export const siteMeta = {
  id: "startup-ideas",
  emoji: "💡",
  name: {
    en: "Startup Ideas",
    zh: "创业点子库",
  },
  guideHref: "/guide/find-profitable-startup-idea",
  nav: [
    {
      href: "/ideas",
      label: {
        en: "Ideas",
        zh: "点子",
      },
    },
    {
      href: "/join",
      label: {
        en: "Pricing",
        zh: "定价",
      },
    },
  ],
} as const;

export type SiteMeta = typeof siteMeta;
