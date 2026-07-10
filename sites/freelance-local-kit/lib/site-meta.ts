export const siteMeta = {
  "id": "freelance-local-kit",
  "emoji": "💼",
  "name": {
    "en": "Local Freelance Kit",
    "zh": "自由职业本地套件"
  },
  "nav": [
    {
      "href": "/guide/local-first-freelance-saas-alternative",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/workspace",
      "label": {
        "en": "Workspace",
        "zh": "工作台"
      }
    }
  ],
  "guideHref": "/guide/local-first-freelance-saas-alternative"
} as const;
export type SiteMeta = typeof siteMeta;
