import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "UptimeRobot 4× hike? · $9.9/mo flat",
    title: "Uptime monitoring for indie hackers",
    subtitle:
      "1-minute checks, Slack alerts, public status pages. No per-monitor fees. 5 free checks, then $9.9/mo.",
    ctaPrimary: "Check a URL free",
    ctaPrimaryHref: "/monitors",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free checks · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs UptimeRobot $34+" },
      { stat: "60s", label: "detection from downtime" },
      { stat: "∞", label: "monitors, no per-seat fees" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Add your URLs",
          desc: "Landing page, API, docs — any HTTP endpoint you ship",
        },
        {
          step: "2",
          title: "We ping every minute",
          desc: "Checks from multiple regions. SSL expiry tracked automatically",
        },
        {
          step: "3",
          title: "Get alerted fast",
          desc: "Slack, email, or webhook when status flips. Share a public status page",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "⚡",
        title: "1-minute checks",
        desc: "HTTP/HTTPS monitoring from EU + US regions. Know within 60 seconds when your site goes down.",
      },
      {
        icon: "🔔",
        title: "Slack & webhook alerts",
        desc: "Instant notifications when status changes. No more finding out from angry users.",
      },
      {
        icon: "📊",
        title: "Public status page",
        desc: "Share a branded status page with customers. Build trust during incidents.",
      },
      {
        icon: "🔒",
        title: "SSL expiry monitoring",
        desc: "Get warned 14 days before certificates expire. Avoid surprise HTTPS failures.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Indie SaaS founder",
        text: "UptimeRobot went from $8 to $34/month overnight. Uptime Pulse does what I need for $9.9.",
      },
      {
        name: "Mia Chen",
        role: "Bootstrapped dev",
        text: "Finally a monitor that doesn't charge per status page. Flat pricing is how indie tools should work.",
      },
      {
        name: "Tom R.",
        role: "Side project builder",
        text: "Set up 8 monitors in 2 minutes. Slack alert saved me when my API went down at 3am.",
      },
    ],
    closing: {
      title: "Your users shouldn't be your uptime monitor",
      subtitle: "5 free checks · then $9.9/mo for unlimited monitoring",
      ctaPrimary: "Check a URL free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live monitor dashboard",
      caption: "URL checks · latency · status · alert history",
      preview:
        "⚡ Uptime Pulse Monitor              Last check: 42s ago\n─────────────────────────────────────────────────────\n  Landing page     https://mysaas.com\n  UP · 200         142ms · EU probe\n─────────────────────────────────────────────────────\n  API health       https://api.mysaas.com/health\n  UP · 200         89ms · US probe\n─────────────────────────────────────────────────────\n  Docs site        https://docs.mysaas.com\n  UP · 200         203ms · EU probe\n─────────────────────────────────────────────────────\n  SSL expires in 47 days · Slack alerts ON\n  [ Check now ]    [ Add monitor ]    [ Status page ]",
    },
  },
  zh: {
    badge: "UptimeRobot 涨价 4 倍？· $9.9/月一口价",
    title: "独立开发者的极简 Uptime 监控",
    subtitle:
      "1 分钟检测、Slack 告警、公开状态页。不按监控数收费。免费体验 5 次检测，之后 $9.9/月。",
    ctaPrimary: "免费检测 URL",
    ctaPrimaryHref: "/monitors",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，UptimeRobot $34+" },
      { stat: "60 秒", label: "从宕机到发现" },
      { stat: "∞", label: "监控数不限，无按席位收费" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "添加 URL",
          desc: "落地页、API、文档 — 任何你上线的 HTTP 端点",
        },
        {
          step: "2",
          title: "每分钟探测",
          desc: "多区域检测，SSL 到期自动追踪",
        },
        {
          step: "3",
          title: "快速告警",
          desc: "状态变化时 Slack、邮件或 Webhook 通知，可分享公开状态页",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "⚡",
        title: "1 分钟检测",
        desc: "EU + US 区域 HTTP/HTTPS 监控，网站宕机 60 秒内知晓。",
      },
      {
        icon: "🔔",
        title: "Slack 与 Webhook 告警",
        desc: "状态变化即时通知，不再等用户投诉才发现。",
      },
      {
        icon: "📊",
        title: "公开状态页",
        desc: "向客户分享品牌状态页，故障期间建立信任。",
      },
      {
        icon: "🔒",
        title: "SSL 到期监控",
        desc: "证书到期前 14 天预警，避免 HTTPS 突然失效。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "独立 SaaS 创始人",
        text: "UptimeRobot 一夜之间从 $8 涨到 $34/月。Uptime Pulse 用 $9.9 满足我的需求。",
      },
      {
        name: "Mia Chen",
        role: "自举开发者",
        text: "终于有不按状态页收费的监控工具。一口价才是 indie 工具该有的样子。",
      },
      {
        name: "Tom R.",
        role: "副业项目开发者",
        text: "2 分钟配好 8 个监控。凌晨 3 点 API 挂了，Slack 告警救了我。",
      },
    ],
    closing: {
      title: "别让用户当你的 uptime 监控",
      subtitle: "免费体验 5 次检测 · 之后 $9.9/月不限量监控",
      ctaPrimary: "免费检测 URL",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "监控控制台实时预览",
      caption: "URL 检测 · 延迟 · 状态 · 告警历史",
      preview:
        "⚡ Uptime Pulse 监控台              最近检测：42 秒前\n─────────────────────────────────────────────────────\n  落地页           https://mysaas.com\n  正常 · 200       142ms · 欧洲节点\n─────────────────────────────────────────────────────\n  API 健康检查     https://api.mysaas.com/health\n  正常 · 200       89ms · 美国节点\n─────────────────────────────────────────────────────\n  文档站           https://docs.mysaas.com\n  正常 · 200       203ms · 欧洲节点\n─────────────────────────────────────────────────────\n  SSL 47 天后到期 · Slack 告警已开启\n  [ 立即检测 ]    [ 添加监控 ]    [ 状态页 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
