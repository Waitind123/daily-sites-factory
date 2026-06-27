export const siteMeta = {
  "id": "guilt-free-habits",
  "emoji": "🌱",
  "name": {
    "en": "Guilt-Free Habits",
    "zh": "无罪恶感习惯"
  },
  "nav": [
    {
      "href": "/guide/streak-anxiety-habit-tracker-alternative",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/track",
      "label": {
        "en": "Track",
        "zh": "追踪"
      }
    }
  ],
  "guideHref": "/guide/streak-anxiety-habit-tracker-alternative"
} as const;
export type SiteMeta = typeof siteMeta;
