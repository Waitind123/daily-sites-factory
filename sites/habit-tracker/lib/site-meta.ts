export const siteMeta = {
  "id": "habit-tracker",
  "emoji": "✅",
  "name": {
    "en": "Habit Tracker",
    "zh": "习惯打卡"
  },
  "nav": [
    {
      "href": "/join",
      "label": {
        "en": "Pricing",
        "zh": "定价"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
