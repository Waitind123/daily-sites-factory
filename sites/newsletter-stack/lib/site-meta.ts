export const siteMeta = {
  "id": "newsletter-stack",
  "emoji": "📧",
  "name": {
    "en": "Newsletter Stack",
    "zh": "Newsletter 工具对比"
  },
  "nav": [
    {
      "href": "/compare",
      "label": {
        "en": "Compare",
        "zh": "对比"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
