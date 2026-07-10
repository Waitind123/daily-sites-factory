export const siteMeta = {
  "id": "ai-contract-review",
  "emoji": "📄",
  "name": {
    "en": "Contract Review Pulse",
    "zh": "合同审查助手"
  },
  "nav": [
    {
      "href": "/guide/freelance-contract-review-ai-alternative",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/dashboard",
      "label": {
        "en": "Dashboard",
        "zh": "控制台"
      }
    }
  ],
  "guideHref": "/guide/freelance-contract-review-ai-alternative"
} as const;
export type SiteMeta = typeof siteMeta;
