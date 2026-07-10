export const siteMeta = {
  id: "form-pulse",
  emoji: "📋",
  name: {
    en: "Form Pulse",
    zh: "极简表单构建器",
  },
  nav: [
    {
      href: "/guide/typeform-alternative-indie-hackers",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/forms",
      label: {
        en: "Forms",
        zh: "表单",
      },
    },
  ],
  guideHref: "/guide/typeform-alternative-indie-hackers",
} as const;
export type SiteMeta = typeof siteMeta;
