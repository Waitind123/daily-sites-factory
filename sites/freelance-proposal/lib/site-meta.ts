export const siteMeta = {
  "id": "freelance-proposal",
  "emoji": "📝",
  "name": {
    "en": "Freelance Proposal",
    "zh": "自由职业报价单"
  },
  "nav": [
    {
      "href": "/proposal",
      "label": {
        "en": "Proposal",
        "zh": "报价"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
