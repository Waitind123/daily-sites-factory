export const siteMeta = {
  "id": "coworking-finder",
  "emoji": "🏢",
  "name": {
    "en": "Coworking Finder",
    "zh": "联合办公 Finder"
  },
  "nav": [
    {
      "href": "/spaces",
      "label": {
        "en": "Spaces",
        "zh": "空间"
      }
    }
  ],
  "guideHref": "/guide/find-coworking-space-digital-nomad"
} as const;
export type SiteMeta = typeof siteMeta;
