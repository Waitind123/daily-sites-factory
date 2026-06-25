export const siteMeta = {
  id: "invoice-desk",
  emoji: "🧾",
  name: {
    en: "Invoice Desk",
    zh: "发票收据管理",
  },
  nav: [
    {
      href: "/guide/honeybook-invoice-alternative-freelancer",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/invoices",
      label: {
        en: "Invoices",
        zh: "发票",
      },
    },
  ],
  guideHref: "/guide/honeybook-invoice-alternative-freelancer",
} as const;
export type SiteMeta = typeof siteMeta;
