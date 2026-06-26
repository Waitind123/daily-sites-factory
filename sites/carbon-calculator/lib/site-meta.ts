export const siteMeta = {
  id: "carbon-calculator",
  emoji: "🌱",
  name: {
    en: "Carbon Calculator",
    zh: "远程碳足迹",
  },
  guideHref: "/guide/remote-work-carbon-footprint",
  nav: [
    {
      href: "/calculate",
      label: {
        en: "Calculate",
        zh: "计算",
      },
    },
  ],
} as const;

export type SiteMeta = typeof siteMeta;
