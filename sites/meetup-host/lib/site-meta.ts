export const siteMeta = {
  "id": "meetup-host",
  "emoji": "📍",
  "name": {
    "en": "Meetup Host",
    "zh": "线下 Meetup 组织"
  },
  "nav": [
    {
      "href": "/events",
      "label": {
        "en": "Events",
        "zh": "活动"
      }
    },
    {
      "href": "/guide/organize-indie-meetup-china",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    }
  ],
  "guideHref": "/guide/organize-indie-meetup-china"
} as const;
export type SiteMeta = typeof siteMeta;
