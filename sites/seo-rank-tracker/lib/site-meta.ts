export const siteMeta = {
  "id": "seo-rank-tracker",
  "emoji": "📈",
  "name": {
    "en": "Rank Pulse",
    "zh": "SEO 排名追踪"
  },
  "nav": [
    {
      "href": "/guide/semrush-alternative-indie-hackers",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/dashboard",
      "label": {
        "en": "Dashboard",
        "zh": "控制台"
      }
    }
  ],
  "guideHref": "/guide/semrush-alternative-indie-hackers"
} as const;
export type SiteMeta = typeof siteMeta;
