export const siteMeta = {
  "id": "alt-stack",
  "emoji": "🔓",
  "name": {
    "en": "Alt Stack",
    "zh": "Alt Stack"
  },
  "nav": [
    {
      "href": "/guide/open-source-saas-alternatives",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/tools",
      "label": {
        "en": "Alternatives",
        "zh": "替代品"
      }
    }
  ],
  "guideHref": "/guide/open-source-saas-alternatives"
} as const;
export type SiteMeta = typeof siteMeta;
