export const siteMeta = {
  "id": "visa-alert",
  "emoji": "🔔",
  "name": {
    "en": "Visa Alert",
    "zh": "签证政策提醒"
  },
  "nav": [
    {
      "href": "/guide/nomad-visa-policy-change-alerts",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/alerts",
      "label": {
        "en": "Alerts",
        "zh": "告警"
      }
    },
    {
      "href": "/visas",
      "label": {
        "en": "Policies",
        "zh": "政策"
      }
    }
  ],
  "guideHref": "/guide/nomad-visa-policy-change-alerts"
} as const;
export type SiteMeta = typeof siteMeta;
