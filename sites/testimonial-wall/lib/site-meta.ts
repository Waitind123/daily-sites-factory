export const siteMeta = {
  "id": "testimonial-wall",
  "emoji": "⭐",
  "name": {
    "en": "Testimonial Wall",
    "zh": "独立开发者证言墙"
  },
  "nav": [
    {
      "href": "/wall",
      "label": {
        "en": "Wall",
        "zh": "证言墙"
      }
    }
  ]
} as const;
export type SiteMeta = typeof siteMeta;
