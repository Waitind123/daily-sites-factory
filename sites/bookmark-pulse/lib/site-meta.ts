export const siteMeta = {
  id: "bookmark-pulse",
  emoji: "🔖",
  name: {
    en: "Bookmark Pulse",
    zh: "书签收藏平替",
  },
  nav: [
    {
      href: "/guide/pocket-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/bookmarks",
      label: {
        en: "Bookmarks",
        zh: "书签",
      },
    },
  ],
  guideHref: "/guide/pocket-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
