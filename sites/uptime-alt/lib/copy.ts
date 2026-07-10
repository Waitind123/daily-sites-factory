import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "UptimeRobot 4× price hike? · $9.9/mo flat",
    title: "Uptime monitoring + status pages after the hike",
    subtitle:
      "UptimeRobot went from $8 to $34/mo. Get 1-minute checks, public status pages, and incident posts in one tool. 5 free actions, then $9.9/mo.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free actions · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs UptimeRobot $34+" },
      { stat: "60s", label: "downtime detection" },
      { stat: "2-in-1", label: "monitor + status page" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Add your URLs",
          desc: "Landing page, API, docs — any endpoint your customers depend on",
        },
        {
          step: "2",
          title: "We ping every minute",
          desc: "HTTP checks with latency. Downtime auto-updates your public status page",
        },
        {
          step: "3",
          title: "Share status.yourapp.com",
          desc: "Post incidents, email subscribers — stop being the human status page at 3am",
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
        title: "Built-in status pages",
        desc: "No extra Statuspage $29 subscription. Public pages with component health at a glance.",
      },
      {
        icon: "📢",
        title: "Incident timeline",
        desc: "Post investigating → resolved updates. Auto-degrade affected components during outages.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "One price after UptimeRobot's 4× hike. Monitoring + status pages, no per-monitor fees.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Indie SaaS founder",
        text: "UptimeRobot went from $8 to $34 overnight. UptimeAlt does monitoring + status page for $9.9.",
      },
      {
        name: "Mia Chen",
        role: "Bootstrapped dev",
        text: "Their status page was always bare-bones. This gives me a real status page without a second tool.",
      },
      {
        name: "Tom R.",
        role: "Side project builder",
        text: "Set up 6 monitors and a public status page in 3 minutes. Saved $25/mo vs the old stack.",
      },
    ],
    closing: {
      title: "Don't let a price hike break your reliability stack",
      subtitle: "5 free actions · then $9.9/mo for unlimited monitoring + status",
      ctaPrimary: "Try free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Live dashboard preview",
      caption: "Uptime checks · status page · incident timeline",
      preview:
        "⚡ UptimeAlt Dashboard              Last check: 38s ago\n─────────────────────────────────────────────────────\n  MONITORS\n  Landing page     https://mysaas.com      UP · 142ms\n  API health       https://api.mysaas.com  UP · 89ms\n─────────────────────────────────────────────────────\n  STATUS PAGE · status.mysaas.com\n  🟢 All Systems Operational\n  API          ● Operational\n  Web App      ● Operational\n  Database     ● Operational\n─────────────────────────────────────────────────────\n  Recent: ✓ Resolved · API latency · 2h ago\n  [ Check URL ]  [ Post incident ]  [ Share page ]",
    },
  },
  zh: {
    badge: "UptimeRobot 涨价 4 倍？· $9.9/月一口价",
    title: "涨价后的 Uptime 监控 + 状态页",
    subtitle:
      "UptimeRobot 从 $8 涨到 $34/月。1 分钟检测、公开状态页、事件发布，一个工具搞定。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "免费试用",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价 vs UptimeRobot $34+" },
      { stat: "60 秒", label: "故障检测" },
      { stat: "二合一", label: "监控 + 状态页" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "添加 URL",
          desc: "落地页、API、文档 — 客户依赖的任何端点",
        },
        {
          step: "2",
          title: "每分钟自动检测",
          desc: "HTTP 检测含延迟追踪，宕机自动同步到公开状态页",
        },
        {
          step: "3",
          title: "分享 status.yourapp.com",
          desc: "发布事件、邮件通知订阅者 — 凌晨 3 点不用再当人肉状态页",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "⚡",
        title: "1 分钟 Uptime 检测",
        desc: "HTTP/HTTPS 监控含延迟。网站宕机 60 秒内知晓。",
      },
      {
        icon: "🟢",
        title: "内置状态页",
        desc: "不用另买 Statuspage $29 订阅。公开页面一目了然显示组件健康。",
      },
      {
        icon: "📢",
        title: "事件时间线",
        desc: "发布调查中 → 已解决更新。故障期间自动降级受影响组件。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "UptimeRobot 涨价 4 倍后的替代方案。监控 + 状态页，不按监控数收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "独立 SaaS 创始人",
        text: "UptimeRobot 一夜之间从 $8 涨到 $34。UptimeAlt 监控 + 状态页只要 $9.9。",
      },
      {
        name: "Mia Chen",
        role: "自举开发者",
        text: "UptimeRobot 的状态页一直太简陋。这个给我真正的状态页，不用第二个工具。",
      },
      {
        name: "Tom R.",
        role: "副业开发者",
        text: "3 分钟配好 6 个监控和公开状态页。比旧方案每月省 $25。",
      },
    ],
    closing: {
      title: "别让涨价毁掉你的可靠性栈",
      subtitle: "免费体验 5 次 · 之后 $9.9/月无限监控 + 状态页",
      ctaPrimary: "免费试用",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "实时控制台预览",
      caption: "Uptime 检测 · 状态页 · 事件时间线",
      preview:
        "⚡ UptimeAlt 控制台              上次检测：38 秒前\n─────────────────────────────────────────────────────\n  监控\n  落地页           https://mysaas.com      正常 · 142ms\n  API 健康检查     https://api.mysaas.com  正常 · 89ms\n─────────────────────────────────────────────────────\n  状态页 · status.mysaas.com\n  🟢 所有系统运行正常\n  API          ● 运行中\n  Web 应用     ● 运行中\n  数据库       ● 运行中\n─────────────────────────────────────────────────────\n  最近：✓ 已解决 · API 延迟 · 2 小时前\n  [ 检测 URL ]  [ 发布事件 ]  [ 分享页面 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
