export const siteMeta = {
  "id": "wcag-alt-text-生成器",
  "emoji": "♿",
  "name": {
    "en": "AltText Pro",
    "zh": "无障碍 Alt 文本"
  },
  "nav": [
    {
      "href": "/generate",
      "label": {
        "en": "Generate",
        "zh": "生成"
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
  "guideHref": "/guide/wcag-alt-text-compliance"
} as const;
export type SiteMeta = typeof siteMeta;
