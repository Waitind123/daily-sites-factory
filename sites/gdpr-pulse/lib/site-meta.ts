export const siteMeta = {
  "id": "gdpr-pulse",
  "emoji": "🛡️",
  "name": {
    "en": "GDPR Pulse",
    "zh": "GDPR 合规自检"
  },
  "nav": [
    {
      "href": "/scan",
      "label": {
        "en": "Scan",
        "zh": "自检"
      }
    },
    {
      "href": "/join",
      "label": {
        "en": "Pricing",
        "zh": "定价"
      }
    }
  ],
  "guideHref": "/guide/gdpr-compliance-self-check-indie"
} as const;
export type SiteMeta = typeof siteMeta;
