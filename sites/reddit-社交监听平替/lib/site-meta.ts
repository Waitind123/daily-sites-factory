export const siteMeta = {
  "id": "reddit-社交监听平替",
  "emoji": "🔴",
  "name": {
    "en": "Reddit Radar",
    "zh": "Reddit 社交监听平替"
  },
  "nav": [
    {
      "href": "/guide/reddit-social-listening-indie",
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
  "guideHref": "/guide/reddit-social-listening-indie"
} as const;
export type SiteMeta = typeof siteMeta;
