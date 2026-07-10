export const siteMeta = {
  "id": "changelog-hub",
  "emoji": "📣",
  "name": {
    "en": "Changelog Hub",
    "zh": "产品更新日志"
  },
  "nav": [
    {
      "href": "/guide/beamer-alternative-indie-changelog",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/publish",
      "label": {
        "en": "Publish",
        "zh": "发布"
      }
    }
  ],
  "guideHref": "/guide/beamer-alternative-indie-changelog"
} as const;
export type SiteMeta = typeof siteMeta;
