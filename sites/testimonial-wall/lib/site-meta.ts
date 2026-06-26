export const siteMeta = {
  id: "testimonial-wall",
  emoji: "⭐",
  name: {
    en: "Testimonial Wall",
    zh: "独立开发者证言墙",
  },
  nav: [
    {
      href: "/guide/testimonial-to-alternative-indie-hacker",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/wall",
      label: { en: "Wall", zh: "证言墙" },
    },
  ],
  guideHref: "/guide/testimonial-to-alternative-indie-hacker",
} as const;

export type SiteMeta = typeof siteMeta;
