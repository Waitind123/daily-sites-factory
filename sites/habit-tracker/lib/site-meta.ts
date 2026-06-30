export const siteMeta = {
  "id": "habit-tracker",
  "emoji": "✅",
  "name": {
    "en": "Habit Tracker",
    "zh": "习惯打卡"
  },
  "nav": [
    {
      "href": "/guide/build-daily-habit",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/track",
      "label": {
        "en": "Check in",
        "zh": "打卡"
      }
    },
    {
      "href": "/join",
      "label": {
        "en": "Pricing",
        "zh": "定价"
      }
    }
  ],
  "guideHref": "/guide/build-daily-habit"
} as const;
export type SiteMeta = typeof siteMeta;
