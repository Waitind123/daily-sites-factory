export const siteMeta = {
  "id": "visa-guide",
  "emoji": "🛂",
  "name": {
    "en": "Nomad Visa Guide",
    "zh": "数字游民签证指南"
  },
  "nav": [
    {
      "href": "/guide/digital-nomad-visa-china",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/visas",
      "label": {
        "en": "Visas",
        "zh": "签证"
      }
    }
  ],
  "guideHref": "/guide/digital-nomad-visa-china"
} as const;
export type SiteMeta = typeof siteMeta;
