export const siteMeta = {
  "id": "uptime-pulse",
  "emoji": "📡",
  "name": {
    "en": "Uptime Pulse",
    "zh": "站点 Uptime 监控"
  },
  "nav": [
    {
      "href": "/guide/uptimerobot-alternative-indie-hackers",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/monitors",
      "label": {
        "en": "Monitors",
        "zh": "监控"
      }
    }
  ],
  "guideHref": "/guide/uptimerobot-alternative-indie-hackers"
} as const;
export type SiteMeta = typeof siteMeta;
