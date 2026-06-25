export const siteMeta = {
  "id": "indie-tools",
  "emoji": "🧰",
  "name": {
    "en": "Indie Tools",
    "zh": "独立开发者工具箱"
  },
  "nav": [
    {
      "href": "/tools",
      "label": {
        "en": "Tools",
        "zh": "工具"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
