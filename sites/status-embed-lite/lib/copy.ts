import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Statuspage $299/mo? · $29/mo embed + auto-detect",
    title: "Embeddable status widgets for indie SaaS",
    subtitle:
      "Paste one line of code into your footer. Auto-detect downtime from uptime pings. Post incidents, notify subscribers. 5 free pages, then $29/mo.",
    ctaPrimary: "Create embed widget free",
    ctaPrimaryHref: "/pages",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free embed widgets · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Statuspage $299+" },
      { stat: "1 line", label: "embed code for your footer or docs" },
      { stat: "Auto", label: "incident detection from uptime pings" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create your widget",
          desc: "Name your product, get a public status page + copy-paste embed snippet in seconds",
        },
        {
          step: "2",
          title: "Paste embed code",
          desc: "Drop the iframe or script tag into your footer, docs sidebar, or dashboard — users see live status",
        },
        {
          step: "3",
          title: "Auto-detect + notify",
          desc: "Connect uptime pings — we auto-create incidents when checks fail. Subscribers get email alerts",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📦",
        title: "One-line embed widget",
        desc: "Copy iframe or script tag. Drop in footer, docs, or app sidebar. Live green/yellow/red status badge.",
      },
      {
        icon: "🔍",
        title: "Auto incident detection",
        desc: "Ping your API every 60s. When checks fail, we auto-post an incident and degrade components.",
      },
      {
        icon: "📧",
        title: "Email subscribers",
        desc: "Users subscribe once from your embed or status page. Every incident update hits their inbox.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited embed widgets and subscribers. No per-component or per-user fees like Statuspage.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex P.",
        role: "Solo SaaS founder",
        text: "Pasted the embed in my docs footer. Support tickets asking 'is it down?' dropped 80% during deploys.",
      },
      {
        name: "Rina M.",
        role: "Indie hacker",
        text: "Statuspage wanted $299/mo for an embed widget. I had a live badge in my app sidebar for $29.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "Auto-detect from uptime pings saved me — I was asleep when the API went down, subscribers got the alert.",
      },
    ],
    closing: {
      title: "Embed status in 60 seconds",
      subtitle: "5 free embed widgets · then $29/mo for unlimited",
      ctaPrimary: "Create embed widget free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Embed widget preview",
      caption: "Footer badge · auto-detect · incident timeline",
      preview:
        "┌─ Your App Footer ─────────────────────────┐\n│  © 2026 MySaaS  ·  🟢 All Systems OK  ←embed│\n└────────────────────────────────────────────┘\n\n  Embed code (copy & paste):\n  <iframe src=\"status-embed-lite.vercel.app/embed/my-saas\"\n          width=\"180\" height=\"28\" frameborder=\"0\"></iframe>\n\n  Auto-detect: API ping ● OK · Web ● OK · DB ● OK\n  Last check: 12s ago · Next: 48s\n\n  Recent: ✓ Resolved · API timeout · 3h ago",
    },
  },
  zh: {
    badge: "Statuspage $299/月？· $29/月嵌入 + 自动检测",
    title: "独立开发者的可嵌入状态组件",
    subtitle:
      "一行代码贴到页脚。uptime 心跳自动检测故障。发布事件、通知订阅者。免费体验 5 个组件，之后 $29/月。",
    ctaPrimary: "免费创建嵌入组件",
    ctaPrimaryHref: "/pages",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Statuspage 要 $299+" },
      { stat: "1 行", label: "嵌入代码贴到页脚或文档" },
      { stat: "自动", label: "uptime 心跳检测故障并创建事件" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建嵌入组件",
          desc: "输入产品名称，几秒内获得公开状态页 + 可复制粘贴的嵌入代码",
        },
        {
          step: "2",
          title: "粘贴嵌入代码",
          desc: "放到页脚、文档侧栏或控制台 — 用户实时看到绿/黄/红状态",
        },
        {
          step: "3",
          title: "自动检测 + 通知",
          desc: "连接 uptime 心跳 — 检测失败时自动创建事件，订阅者收到邮件告警",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📦",
        title: "一行嵌入组件",
        desc: "复制 iframe 或 script 标签。贴到页脚、文档或应用侧栏。实时绿/黄/红状态角标。",
      },
      {
        icon: "🔍",
        title: "自动事件检测",
        desc: "每 60 秒 ping 你的 API。检测失败时自动发布事件并降级组件。",
      },
      {
        icon: "📧",
        title: "邮件订阅",
        desc: "用户从嵌入组件或状态页一次订阅，每次事件更新自动发到邮箱。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "嵌入组件与订阅者不限量，不像 Statuspage 按组件或用户收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex P.",
        role: "一人 SaaS 创始人",
        text: "把嵌入组件贴到文档页脚，部署期间问「是不是挂了？」的工单少了 80%。",
      },
      {
        name: "Rina M.",
        role: "独立开发者",
        text: "Statuspage 一个嵌入组件要 $299/月。我用 $29 就在应用侧栏上线了实时角标。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "uptime 自动检测救了我 — API 半夜挂了，订阅者自动收到告警，我早上才看到。",
      },
    ],
    closing: {
      title: "60 秒嵌入状态组件",
      subtitle: "免费 5 个嵌入组件 · 之后 $29/月 不限量",
      ctaPrimary: "免费创建嵌入组件",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "嵌入组件预览",
      caption: "页脚角标 · 自动检测 · 事件时间线",
      preview:
        "┌─ 你的网站页脚 ────────────────────────────┐\n│  © 2026 我的 SaaS  ·  🟢 所有系统正常  ←嵌入│\n└────────────────────────────────────────────┘\n\n  嵌入代码（复制粘贴）：\n  <iframe src=\"status-embed-lite.vercel.app/embed/my-saas\"\n          width=\"180\" height=\"28\" frameborder=\"0\"></iframe>\n\n  自动检测：API 心跳 ● 正常 · 网站 ● 正常 · 数据库 ● 正常\n  上次检测：12 秒前 · 下次：48 秒后\n\n  近期：✓ 已解决 · API 超时 · 3 小时前",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Status Embed Lite",
    subtitle: "One price, unlimited embed widgets and subscribers. No per-component fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Statuspage $299+/mo · cancel anytime",
    perks: [
      "Unlimited embed widgets",
      "Unlimited email subscribers",
      "Auto incident detection from pings",
      "One-line iframe + script embed",
      "90-day incident history",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free widgets, then subscribe?",
    whyItems: [
      "Hosting embed widgets and email alerts costs real infrastructure",
      "Paying users = founders who ship products users depend on",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅极简状态页",
    subtitle: "一口价，嵌入组件与订阅者不限量。不按组件收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Statuspage $299+/月 · 随时可取消",
    perks: [
      "不限嵌入组件数量",
      "不限邮件订阅者",
      "uptime 心跳自动事件检测",
      "一行 iframe + script 嵌入",
      "90 天事件历史",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个组件，之后订阅？",
    whyItems: [
      "托管嵌入组件与邮件告警有真实基础设施成本",
      "付费用户 = 真正发布用户依赖产品的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
