export const siteMeta = {
  "id": "indie-tools",
  "emoji": "🧰",
  "name": {
    "en": "Indie Tools",
    "zh": "独立开发者工具箱"
  },
  "nav": [
    {
      "href": "/guide/indie-developer-tool-stack",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/tools",
      "label": {
        "en": "Tools",
        "zh": "工具"
      }
    }
  ],
  "guideHref": "/guide/indie-developer-tool-stack"
} as const;
export type SiteMeta = typeof siteMeta;
