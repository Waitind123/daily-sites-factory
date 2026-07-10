export const siteMeta = {
  "id": "scope3-commute-pulse",
  "emoji": "🚌",
  "name": {
    "en": "Scope3 Commute Pulse",
    "zh": "Scope 3 员工通勤"
  },
  "nav": [
    {
      "href": "/guide/csrd-scope3-employee-commuting",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/survey",
      "label": {
        "en": "Survey",
        "zh": "调研"
      }
    }
  ],
  "guideHref": "/guide/csrd-scope3-employee-commuting"
} as const;
export type SiteMeta = typeof siteMeta;
