export const siteMeta = {
  id: "cron-heartbeat",
  emoji: "💓",
  name: {
    en: "Cron Heartbeat",
    zh: "Cron 任务心跳监控",
  },
  nav: [
    {
      href: "/guide/healthchecks-alternative-indie-hackers",
      label: { en: "Guide", zh: "指南" },
    },
    {
      href: "/jobs",
      label: { en: "Jobs", zh: "任务" },
    },
  ],
  guideHref: "/guide/healthchecks-alternative-indie-hackers",
} as const;

export type SiteMeta = typeof siteMeta;
