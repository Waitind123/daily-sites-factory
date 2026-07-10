export const siteMeta = {
  "id": "appgap-pulse",
  "emoji": "📱",
  "name": {
    "en": "AppGap Pulse",
    "zh": "应用商店差评挖痛点"
  },
  "nav": [
    {
      "href": "/guide/app-store-negative-reviews-startup-ideas",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/mine",
      "label": {
        "en": "Scan",
        "zh": "扫描"
      }
    }
  ],
  "guideHref": "/guide/app-store-negative-reviews-startup-ideas"
} as const;
export type SiteMeta = typeof siteMeta;
