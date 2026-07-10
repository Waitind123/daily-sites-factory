export const siteMeta = {
  "id": "reddit-leads",
  "emoji": "🔍",
  "name": {
    "en": "Reddit Leads",
    "zh": "Reddit 线索挖掘"
  },
  "nav": [
    {
      "href": "/guide/reddit-lead-generation-indie-hackers",
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
  "guideHref": "/guide/reddit-lead-generation-indie-hackers"
} as const;
export type SiteMeta = typeof siteMeta;
