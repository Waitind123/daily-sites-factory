export const siteMeta = {
  "id": "sec-quest-pulse",
  "emoji": "🔒",
  "name": {
    "en": "SecQuest Pulse",
    "zh": "安全问卷自动填写"
  },
  "nav": [
    {
      "href": "/guide/security-questionnaire-autofill-vanta-alternative",
      "label": {
        "en": "Guide",
        "zh": "指南"
      }
    },
    {
      "href": "/dashboard",
      "label": {
        "en": "Dashboard",
        "zh": "控制台"
      }
    }
  ],
  "guideHref": "/guide/security-questionnaire-autofill-vanta-alternative"
} as const;
export type SiteMeta = typeof siteMeta;
