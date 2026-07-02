import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Zapier too expensive? · $9.9/mo flat",
    title: "Webhook automation for indie hackers",
    subtitle:
      "Webhook trigger → HTTP action. Cron schedules included. No per-task fees. 5 free flows, then $9.9/mo.",
    ctaPrimary: "Create a flow free",
    ctaPrimaryHref: "/flows",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free flows · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Zapier $49+" },
      { stat: "∞", label: "runs, no per-task counting" },
      { stat: "2 min", label: "setup: webhook → HTTP POST" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a flow",
          desc: "Pick webhook or cron trigger, set your target HTTP endpoint",
        },
        {
          step: "2",
          title: "Get your webhook URL",
          desc: "Copy one URL into Stripe, GitHub, or any service that sends webhooks",
        },
        {
          step: "3",
          title: "Auto-forward payloads",
          desc: "Incoming events POST to your Slack, Notion, or custom API instantly",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔗",
        title: "Webhook → HTTP forwarding",
        desc: "Receive Stripe, GitHub, or form webhooks and forward JSON to any endpoint. No Zapier task counting.",
      },
      {
        icon: "⏰",
        title: "Cron-triggered flows",
        desc: "Schedule daily digests, weekly reports, or hourly syncs. One cron expression, one HTTP POST.",
      },
      {
        icon: "📊",
        title: "Run history & logs",
        desc: "See last 90 days of deliveries, status codes, and retry attempts. Debug failed forwards.",
      },
      {
        icon: "🔒",
        title: "Signed webhook URLs",
        desc: "Unique tokens per flow. Optional HMAC verification for production security.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "Solo SaaS founder",
        text: "Zapier charged me $49/mo for 3 Zaps. Zapier Pulse does Stripe→Slack + daily cron for $9.9 flat.",
      },
      {
        name: "Elena R.",
        role: "Indie hacker",
        text: "Make.com is fine but I wanted something dead simple. Webhook URL → my API. Done in 2 minutes.",
      },
      {
        name: "David K.",
        role: "Side project builder",
        text: "Replaced 4 Zapier tasks with one cron flow. Saved $40/mo and the setup was faster.",
      },
    ],
    closing: {
      title: "Stop paying per-task automation fees",
      subtitle: "5 free flows · then $9.9/mo for unlimited webhook + cron automations",
      ctaPrimary: "Create a flow free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live automation dashboard",
      caption: "Flow status · trigger type · last run · delivery count",
      preview:
        "⚡ Zapier Pulse Dashboard              Last run: 2m ago\n─────────────────────────────────────────────────────\n  Stripe → Slack        webhook\n  ACTIVE · 847 runs     last: 2m ago\n─────────────────────────────────────────────────────\n  Daily digest cron     0 9 * * *\n  ACTIVE · 124 runs     last: 6h ago\n─────────────────────────────────────────────────────\n  Form → Notion         webhook\n  PAUSED · 52 runs      last: 1d ago\n─────────────────────────────────────────────────────\n  3 flows active · 1,023 total runs this month\n  [ Create flow ]    [ Webhook URL ]    [ Run logs ]",
    },
  },
  zh: {
    badge: "Zapier 太贵？· $9.9/月一口价",
    title: "独立开发者的 Webhook 自动化",
    subtitle:
      "Webhook 触发 → HTTP 转发。含 Cron 定时。不按任务数收费。免费体验 5 条流程，之后 $9.9/月。",
    ctaPrimary: "免费创建流程",
    ctaPrimaryHref: "/flows",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 条 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Zapier $49+" },
      { stat: "∞", label: "运行次数不限，无按任务计费" },
      { stat: "2 分钟", label: "搭建：Webhook → HTTP POST" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建自动化流程",
          desc: "选择 Webhook 或 Cron 触发器，设置目标 HTTP 端点",
        },
        {
          step: "2",
          title: "获取 Webhook URL",
          desc: "复制 URL 到 Stripe、GitHub 或任何发送 Webhook 的服务",
        },
        {
          step: "3",
          title: "自动转发载荷",
          desc: "收到事件后立即 POST 到你的 Slack、Notion 或自定义 API",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔗",
        title: "Webhook → HTTP 转发",
        desc: "接收 Stripe、GitHub 或表单 Webhook，转发 JSON 到任意端点。无 Zapier 任务计数。",
      },
      {
        icon: "⏰",
        title: "Cron 定时流程",
        desc: "安排每日摘要、周报或每小时同步。一个 Cron 表达式，一次 HTTP POST。",
      },
      {
        icon: "📊",
        title: "运行历史与日志",
        desc: "查看最近 90 天投递记录、状态码与重试。调试失败投递。",
      },
      {
        icon: "🔒",
        title: "签名 Webhook URL",
        desc: "每条流程独立 Token。可选 HMAC 验证保障生产安全。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Marcus T.",
        role: "独立 SaaS 创始人",
        text: "Zapier 3 个 Zap 收我 $49/月。Zapier Pulse Stripe→Slack + 每日 Cron 只要 $9.9 一口价。",
      },
      {
        name: "Elena R.",
        role: "独立开发者",
        text: "Make.com 不错，但我想要极简的。Webhook URL → 我的 API，2 分钟搞定。",
      },
      {
        name: "David K.",
        role: "副业项目开发者",
        text: "4 个 Zapier 任务换成一条 Cron 流程。每月省 $40，搭建还更快。",
      },
    ],
    closing: {
      title: "别再为按任务计费的自动化买单",
      subtitle: "免费体验 5 条流程 · 之后 $9.9/月无限 Webhook + Cron 自动化",
      ctaPrimary: "免费创建流程",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "自动化控制台实时预览",
      caption: "流程状态 · 触发类型 · 最近运行 · 投递次数",
      preview:
        "⚡ Zapier Pulse 控制台              最近运行：2 分钟前\n─────────────────────────────────────────────────────\n  Stripe → Slack        Webhook\n  运行中 · 847 次       最近：2 分钟前\n─────────────────────────────────────────────────────\n  每日摘要 Cron         0 9 * * *\n  运行中 · 124 次       最近：6 小时前\n─────────────────────────────────────────────────────\n  表单 → Notion         Webhook\n  已暂停 · 52 次        最近：1 天前\n─────────────────────────────────────────────────────\n  3 条流程运行中 · 本月共 1,023 次投递\n  [ 创建流程 ]    [ Webhook URL ]    [ 运行日志 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
