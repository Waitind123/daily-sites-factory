export const siteMeta = {
  "id": "bulk-landing-gen",
  "emoji": "📦",
  "name": {
    "en": "Bulk Landing Gen",
    "zh": "批量落地页生成"
  },
  "nav": [
    {
      "href": "/studio",
      "label": {
        "en": "Batch",
        "zh": "批量生成"
      }
    }
  ],
  "guideHref": "/guide/google-ads-keyword-landing-pages"
} as const;
export type SiteMeta = typeof siteMeta;
