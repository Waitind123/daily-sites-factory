import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Healthchecks.io too complex? · $29/mo flat",
    title: "Cron heartbeat monitoring for indie hackers",
    subtitle:
      "One curl at the end of your job. Missed-run alerts to Slack. No per-monitor fees. 5 free jobs, then $29/mo.",
    ctaPrimary: "Create a job free",
    ctaPrimaryHref: "/jobs",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free jobs · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Cronitor $29+" },
      { stat: "1 curl", label: "integration per cron job" },
      { stat: "∞", label: "monitors, no per-job fees" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a monitor",
          desc: "Name your job, set cron schedule & grace period",
        },
        {
          step: "2",
          title: "Add one curl line",
          desc: "Ping our URL when your script finishes — success or fail",
        },
        {
          step: "3",
          title: "Get alerted fast",
          desc: "Slack, email, or webhook when pings stop or report failure",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "💓",
        title: "Heartbeat ping URLs",
        desc: "One curl at the end of your cron job. If the ping stops, you get alerted within minutes.",
      },
      {
        icon: "⏱️",
        title: "Missed-run detection",
        desc: "Know when jobs run late or never fire. No more silent backup failures at 3am.",
      },
      {
        icon: "🔔",
        title: "Slack, email & webhooks",
        desc: "Escalating alerts at 1h, 6h, 24h until resolved. Members pick their channels.",
      },
      {
        icon: "📋",
        title: "Job output in alerts",
        desc: "Send ?status=fail with logs. See the last 500 chars in your Slack message.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Vadim K.",
        role: "Solo backend dev",
        text: "My nightly backup cron failed for 2 weeks before I noticed. Cron Heartbeat caught the next miss in 6 minutes.",
      },
      {
        name: "Sarah L.",
        role: "Indie SaaS founder",
        text: "Healthchecks.io works but I wanted flat $29 pricing. This does exactly what I need for 12 cron jobs.",
      },
      {
        name: "James Wu",
        role: "Side project builder",
        text: "Wrapped my Vercel cron in one curl line. Slack alert saved my ETL when pg_cron hung.",
      },
    ],
    closing: {
      title: "Your cron jobs shouldn't fail silently",
      subtitle: "5 free monitors · then $29/mo for unlimited jobs",
      ctaPrimary: "Create a job free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live cron monitor dashboard",
      caption: "Job status · last ping · schedule · alert history",
      preview:
        "💓 Cron Heartbeat Dashboard           Last ping: 8m ago\n─────────────────────────────────────────────────────\n  Nightly backup     0 2 * * *\n  HEALTHY · pinged   2h ago · grace 10m\n─────────────────────────────────────────────────────\n  ETL import         */15 * * * *\n  HEALTHY · pinged   12m ago · grace 5m\n─────────────────────────────────────────────────────\n  Weekly report      0 9 * * 1\n  LATE · expected    3h ago · Slack alert sent\n─────────────────────────────────────────────────────\n  12 jobs monitored · Escalating alerts ON\n  [ Create job ]    [ Ping URL ]    [ Alert settings ]",
    },
  },
  zh: {
    badge: "Healthchecks.io 太复杂？· $29/月一口价",
    title: "独立开发者的 Cron 心跳监控",
    subtitle:
      "任务结束时一行 curl 上报心跳。漏跑秒级告警到 Slack。不按任务数收费。免费体验 5 个任务，之后 $29/月。",
    ctaPrimary: "免费创建任务",
    ctaPrimaryHref: "/jobs",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Cronitor $29+" },
      { stat: "1 行 curl", label: "每个 cron 任务只需一行集成" },
      { stat: "∞", label: "任务数不限，无按任务收费" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建监控",
          desc: "命名任务，设置 cron 表达式与宽限期",
        },
        {
          step: "2",
          title: "加一行 curl",
          desc: "脚本结束时 ping 我们的 URL — 成功或失败都上报",
        },
        {
          step: "3",
          title: "快速告警",
          desc: "心跳停止或上报失败时，Slack、邮件或 Webhook 即时通知",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "💓",
        title: "心跳 Ping URL",
        desc: "cron 任务结束时一行 curl。心跳停止，几分钟内收到告警。",
      },
      {
        icon: "⏱️",
        title: "漏跑检测",
        desc: "任务迟到或未执行立即知晓。不再凌晨 3 点才发现备份静默失败。",
      },
      {
        icon: "🔔",
        title: "Slack、邮件与 Webhook",
        desc: "1 小时、6 小时、24 小时逐级告警直到解决。会员自选通知渠道。",
      },
      {
        icon: "📋",
        title: "告警附带任务日志",
        desc: "上报 ?status=fail 附带日志。Slack 消息中查看最后 500 字符。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Vadim K.",
        role: "独立后端开发者",
        text: "夜间备份 cron 静默失败了两周我才注意到。Cron Heartbeat 下次漏跑 6 分钟就抓到了。",
      },
      {
        name: "Sarah L.",
        role: "独立 SaaS 创始人",
        text: "Healthchecks.io 能用，但我想要 $29 一口价。12 个 cron 任务刚好满足需求。",
      },
      {
        name: "James Wu",
        role: "副业项目开发者",
        text: "Vercel cron 包了一层 curl。pg_cron 卡死时 Slack 告警救了我的 ETL。",
      },
    ],
    closing: {
      title: "别让 cron 任务静默失败",
      subtitle: "免费体验 5 个任务 · 之后 $29/月不限量监控",
      ctaPrimary: "免费创建任务",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "Cron 监控控制台实时预览",
      caption: "任务状态 · 最近心跳 · 调度 · 告警历史",
      preview:
        "💓 Cron Heartbeat 控制台              最近心跳：8 分钟前\n─────────────────────────────────────────────────────\n  夜间备份           0 2 * * *\n  正常 · 已上报      2 小时前 · 宽限 10 分钟\n─────────────────────────────────────────────────────\n  ETL 导入           */15 * * * *\n  正常 · 已上报      12 分钟前 · 宽限 5 分钟\n─────────────────────────────────────────────────────\n  周报任务           0 9 * * 1\n  迟到 · 预期执行    3 小时前 · 已发 Slack 告警\n─────────────────────────────────────────────────────\n  12 个任务监控中 · 逐级告警已开启\n  [ 创建任务 ]    [ Ping URL ]    [ 告警设置 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
