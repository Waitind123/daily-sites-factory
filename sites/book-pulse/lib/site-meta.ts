export const siteMeta = {
  "id": "book-pulse",
  "emoji": "📅",
  "name": {
    "en": "Book Pulse",
    "zh": "Book Pulse"
  },
  "nav": [
    {
      "href": "/guide/calendly-alternative-indie-hackers",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/dashboard",
      "label": {
        "en": "Dashboard",
        "zh": "仪表盘"
      }
    }
  ],
  "guideHref": "/guide/calendly-alternative-indie-hackers"
} as const;
export type SiteMeta = typeof siteMeta;
