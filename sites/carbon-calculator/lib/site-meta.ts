export const siteMeta = {
  "id": "carbon-calculator",
  "emoji": "🌱",
  "name": {
    "en": "Carbon Calculator",
    "zh": "远程办公碳足迹"
  },
  "nav": [
    {
      "href": "/calc",
      "label": {
        "en": "Calculate",
        "zh": "计算"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
