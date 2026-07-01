export const siteMeta = {
  id: "ai-funnel-diagnosis",
  emoji: "🤖",
  name: {
    en: "AI Funnel Diagnosis",
    zh: "AI 漏斗诊断",
  },
  nav: [
    {
      href: "/guide/ai-funnel-diagnosis-mixpanel-alternative",
      label: {
        en: "Guide",
        zh: "指南",
      },
    },
    {
      href: "/diagnose",
      label: {
        en: "Diagnose",
        zh: "诊断",
      },
    },
  ],
  guideHref: "/guide/ai-funnel-diagnosis-mixpanel-alternative",
} as const;
export type SiteMeta = typeof siteMeta;
