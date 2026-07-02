export const siteMeta = {
  "id": "dunning-pulse",
  "emoji": "💳",
  "name": {
    "en": "Dunning Pulse",
    "zh": "失败支付恢复"
  },
  "nav": [
    {
      "href": "/guide/stripe-failed-payment-recovery-dunning",
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
  "guideHref": "/guide/stripe-failed-payment-recovery-dunning"
} as const;
export type SiteMeta = typeof siteMeta;
