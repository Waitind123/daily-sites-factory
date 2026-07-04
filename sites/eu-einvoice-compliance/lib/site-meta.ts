export const siteMeta = {
  "id": "eu-einvoice-compliance",
  "emoji": "🇪🇺",
  "name": {
    "en": "EU E-Invoice Compliance",
    "zh": "欧盟电子发票合规"
  },
  "nav": [
    {
      "href": "/guide/poland-e-invoice-ubl-compliance-2026",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/invoices",
      "label": {
        "en": "Invoices",
        "zh": "发票"
      }
    }
  ],
  "guideHref": "/guide/poland-e-invoice-ubl-compliance-2026"
} as const;
export type SiteMeta = typeof siteMeta;
