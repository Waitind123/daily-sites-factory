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
  ]
} as const;
export type SiteMeta = typeof siteMeta;
