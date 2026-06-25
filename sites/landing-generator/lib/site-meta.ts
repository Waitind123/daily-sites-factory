export const siteMeta = {
  "id": "landing-generator",
  "emoji": "🎨",
  "name": {
    "en": "Landing Generator",
    "zh": "Landing Page 生成器"
  },
  "nav": [
    {
      "href": "/generate",
      "label": {
        "en": "Generate",
        "zh": "生成"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
