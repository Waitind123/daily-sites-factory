export const siteMeta = {
  "id": "virtual-cowork-room",
  "emoji": "🎧",
  "name": {
    "en": "Virtual Cowork",
    "zh": "远程共工室"
  },
  "nav": [
    {
      "href": "/guide/remote-work-loneliness",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/room",
      "label": {
        "en": "Room",
        "zh": "共工室"
      }
    }
  ],
  "guideHref": "/guide/remote-work-loneliness"
} as const;
export type SiteMeta = typeof siteMeta;
