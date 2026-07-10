export const siteMeta = {
  "id": "reddit-watch",
  "emoji": "🔔",
  "name": {
    "en": "Reddit Watch",
    "zh": "Reddit 线索监控"
  },
  "nav": [
    {
      "href": "/guide/subwatch-alternative-reddit-monitoring",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/monitor",
      "label": {
        "en": "Monitor",
        "zh": "监控"
      }
    }
  ],
  "guideHref": "/guide/subwatch-alternative-reddit-monitoring"
} as const;
export type SiteMeta = typeof siteMeta;
