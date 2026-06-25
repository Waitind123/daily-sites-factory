export const siteMeta = {
  "id": "price-tracker",
  "emoji": "📊",
  "name": {
    "en": "SaaS Price Tracker",
    "zh": "SaaS 价格追踪"
  },
  "nav": [
    {
      "href": "/track",
      "label": {
        "en": "Track",
        "zh": "追踪"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
