export const siteMeta = {
  "id": "meetup-alt",
  "emoji": "🚀",
  "name": {
    "en": "MeetupAlt",
    "zh": "Meetup 替代品"
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
      "href": "/guide/meetup-alternative-indie-organizers",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    }
  ],
  "guideHref": "/guide/meetup-alternative-indie-organizers"
} as const;
export type SiteMeta = typeof siteMeta;
