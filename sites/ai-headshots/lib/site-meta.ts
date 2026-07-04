export const siteMeta = {
  "id": "ai-headshots",
  "emoji": "📸",
  "name": {
    "en": "AI Headshots",
    "zh": "AI 证件照"
  },
  "nav": [
    {
      "href": "/guide/linkedin-headshot",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/studio",
      "label": {
        "en": "Studio",
        "zh": "工作室"
      }
    }
  ],
  "guideHref": "/guide/linkedin-headshot"
} as const;
export type SiteMeta = typeof siteMeta;
