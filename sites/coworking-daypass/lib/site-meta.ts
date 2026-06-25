export const siteMeta = {
  "id": "coworking-daypass",
  "emoji": "🎫",
  "name": {
    "en": "Coworking Day Pass",
    "zh": "联合办公日票"
  },
  "nav": [
    {
      "href": "/book",
      "label": {
        "en": "Book",
        "zh": "预订"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
