export const siteMeta = {
  "id": "timezone-planner",
  "emoji": "🌍",
  "name": {
    "en": "Timezone Planner",
    "zh": "跨时区会议"
  },
  "nav": [
    {
      "href": "/guide/remote-team-timezone-meeting",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/planner",
      "label": {
        "en": "Planner",
        "zh": "规划"
      }
    }
  ],
  "guideHref": "/guide/remote-team-timezone-meeting"
} as const;
export type SiteMeta = typeof siteMeta;
