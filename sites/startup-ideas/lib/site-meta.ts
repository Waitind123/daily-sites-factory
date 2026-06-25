export const siteMeta = {
  "id": "startup-ideas",
  "emoji": "💡",
  "name": {
    "en": "Startup Ideas",
    "zh": "创业点子库"
  },
  "nav": [
    {
      "href": "/ideas",
      "label": {
        "en": "Ideas",
        "zh": "点子"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
