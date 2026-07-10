export const siteMeta = {
  "id": "factory-dashboard",
  "emoji": "🚀",
  "name": {
    "en": "factory-dashboard",
    "zh": "factory-dashboard"
  },
  "nav": [
    {
      "href": "/join",
      "label": {
        "en": "Pricing",
        "zh": "定价"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
