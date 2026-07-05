export const siteMeta = {
  id: "虚拟图书馆共工",
  emoji: "📚",
  name: {
    en: "Library Cowork",
    zh: "虚拟图书馆共工",
  },
  nav: [
    {
      href: "/guide/virtual-library-cowork-focus",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/room",
      label: { en: "Library", zh: "阅览室" },
    },
  ],
  guideHref: "/guide/virtual-library-cowork-focus",
} as const;

export type SiteMeta = typeof siteMeta;
