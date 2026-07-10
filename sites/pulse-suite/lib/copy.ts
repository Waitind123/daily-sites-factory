import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Statuspage $29 + UptimeRobot? · $9.9/mo all-in-one",
    title: "Uptime monitoring + status pages — one tool",
    subtitle:
      "1-minute checks, auto status pages, incident posts. No juggling two subscriptions. 5 free actions, then $9.9/mo.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free actions · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs $36+ for two tools" },
      { stat: "60s", label: "downtime detection" },
      { stat: "1", label: "dashboard for monitor + status" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Add your URLs",
          desc: "Landing page, API, docs — any endpoint you ship to customers",
        },
        {
          step: "2",
          title: "We ping every minute",
          desc: "HTTP checks with latency tracking. Status flips update your public page",
        },
        {
          step: "3",
          title: "Share status.yourapp.com",
          desc: "Post incidents, notify subscribers — users check status instead of DMing you",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "⚡",
        title: "1-minute uptime checks",
        desc: "HTTP/HTTPS monitoring with latency. Know within 60 seconds when your site goes down.",
      },
      {
        icon: "🟢",
        title: "Auto status pages",
        desc: "Public status pages with component health. Operational, degraded, or down at a glance.",
      },
      {
        icon: "📢",
        title: "Incident management",
        desc: "Post investigating → resolved updates. Auto-degrade affected components.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Monitoring + status pages in one subscription. No Statuspage $29 + UptimeRobot $7 stack.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Indie SaaS founder",
        text: "I was paying Statuspage $29 and UptimeRobot $7 for the same product. Pulse Suite does both for $9.9.",
      },
      {
        name: "Mia Chen",
        role: "Bootstrapped dev",
        text: "Outage at 3am — monitor caught it, status page auto-updated, zero 'is it down?' DMs.",
      },
      {
        name: "Tom R.",
        role: "Side project builder",
        text: "Set up monitoring and a public status page in 4 minutes. Exactly what solo founders need.",
      },
    ],
    closing: {
      title: "Stop paying for two tools that should be one",
      subtitle: "5 free actions · then $9.9/mo for unlimited",
      ctaPrimary: "Try free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Live dashboard preview",
      caption: "Uptime checks · status page · incident timeline",
      preview:
        "📡 Pulse Suite Dashboard              Last check: 38s ago\n─────────────────────────────────────────────────────\n  MONITORS\n  Landing page     https://mysaas.com      UP · 142ms\n  API health       https://api.mysaas.com  UP · 89ms\n─────────────────────────────────────────────────────\n  STATUS PAGE · status.mysaas.com\n  🟢 All Systems Operational\n  API          ● Operational\n  Web App      ● Operational\n  Database     ● Operational\n─────────────────────────────────────────────────────\n  Recent: ✓ Resolved · API latency · 2h ago\n  [ Check URL ]  [ Post incident ]  [ Share page ]",
    },
  },
  zh: {
    badge: "Statuspage $29 + UptimeRobot？· $9.9/月一体",
    title: "Uptime 监控 + 状态页 — 一个工具搞定",
    subtitle:
      "1 分钟检测、自动状态页、事件发布。不用再买两个订阅。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "免费试用",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价 vs 两个工具 $36+" },
      { stat: "60 秒", label: "故障检测" },
      { stat: "1", label: "个控制台搞定监控+状态" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "添加 URL",
          desc: "落地页、API、文档 — 任何面向客户的端点",
        },
        {
          step: "2",
          title: "每分钟自动检测",
          desc: "HTTP 检测含延迟追踪，状态变化自动同步到公开页",
        },
        {
          step: "3",
          title: "分享 status.yourapp.com",
          desc: "发布事件、通知订阅者 — 用户自助查状态，不再私信问你",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "⚡",
        title: "1 分钟 Uptime 检测",
        desc: "HTTP/HTTPS 监控含延迟。站点宕机 60 秒内知晓。",
      },
      {
        icon: "🟢",
        title: "自动状态页",
        desc: "公开状态页展示组件健康。正常、降级、故障一目了然。",
      },
      {
        icon: "📢",
        title: "事件管理",
        desc: "发布调查中 → 已解决更新。自动降级受影响组件。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "监控 + 状态页一个订阅搞定。不用 Statuspage $29 + UptimeRobot $7 组合。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "独立 SaaS 创始人",
        text: "之前 Statuspage $29 加 UptimeRobot $7 买同一件事。Pulse Suite $9.9 全包。",
      },
      {
        name: "Mia Chen",
        role: "自举开发者",
        text: "凌晨 3 点宕机 — 监控抓到，状态页自动更新，零条「挂了吗？」私信。",
      },
      {
        name: "Tom R.",
        role: "副业项目开发者",
        text: "4 分钟配好监控和公开状态页。正是 solo 创始人需要的。",
      },
    ],
    closing: {
      title: "别再为本该一体的两个工具付两份钱",
      subtitle: "免费体验 5 次 · 之后 $9.9/月无限使用",
      ctaPrimary: "免费试用",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "控制台实时预览",
      caption: "Uptime 检测 · 状态页 · 事件时间线",
      preview:
        "📡 监控状态一体控制台              上次检测：38 秒前\n─────────────────────────────────────────────────────\n  监控列表\n  落地页           https://mysaas.com      正常 · 142ms\n  API 健康检查     https://api.mysaas.com  正常 · 89ms\n─────────────────────────────────────────────────────\n  状态页 · status.mysaas.com\n  🟢 所有系统正常\n  API          ● 正常\n  Web 应用     ● 正常\n  数据库       ● 正常\n─────────────────────────────────────────────────────\n  近期：✓ 已解决 · API 延迟 · 2 小时前\n  [ 检测 URL ]  [ 发布事件 ]  [ 分享页面 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
