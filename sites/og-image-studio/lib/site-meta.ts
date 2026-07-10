export const siteMeta = {
  "id": "og-image-studio",
  "emoji": "🖼️",
  "name": {
    "en": "OG Image Studio",
    "zh": "OG 图生成器"
  },
  "nav": [
    {
      "href": "/guide/bannerbear-alternative-og-image",
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
  "guideHref": "/guide/bannerbear-alternative-og-image"
} as const;
export type SiteMeta = typeof siteMeta;
