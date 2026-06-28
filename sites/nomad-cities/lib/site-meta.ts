export const siteMeta = {
  "id": "nomad-cities",
  "emoji": "🌍",
  "name": {
    "en": "Nomad Cities",
    "zh": "游民城市榜"
  },
  "joinLabel": {
    "en": "Join · $99/yr",
    "zh": "加入会员 · ¥699/年"
  },
  "nav": [
    {
      "href": "/guide/best-digital-nomad-cities",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/#rankings",
      "label": {
        "en": "Rankings",
        "zh": "排名"
      }
    }
  ],
  "guideHref": "/guide/best-digital-nomad-cities"
} as const;
export type SiteMeta = typeof siteMeta;
