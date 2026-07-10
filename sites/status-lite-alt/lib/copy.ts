import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Statuspage $299/mo? StatusEmbed $15/mo? · $29/mo flat",
    title: "Minimal status pages for indie hackers",
    subtitle:
      "Publish status.yourapp.com in 5 minutes. Post incidents, notify subscribers, embed a widget. 5 free pages, then $29/mo.",
    ctaPrimary: "Create a status page free",
    ctaPrimaryHref: "/pages",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free status pages · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Statuspage $299+" },
      { stat: "5 min", label: "to launch a public status page" },
      { stat: "∞", label: "subscribers, no per-user fees" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create your page",
          desc: "Name your product, get status.yourapp.com in seconds with API, Web, DB components",
        },
        {
          step: "2",
          title: "Share the link",
          desc: "Add to your footer, docs, or embed the widget — users subscribe for email alerts",
        },
        {
          step: "3",
          title: "Post incidents fast",
          desc: "When things break, post an update. Subscribers get notified. Resolve and close the loop",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🟢",
        title: "Public status pages",
        desc: "Clean pages showing component health. Operational, degraded, or down — at a glance.",
      },
      {
        icon: "📢",
        title: "Incident management",
        desc: "Post investigating → identified → resolved updates. Auto-degrade affected components.",
      },
      {
        icon: "📧",
        title: "Email subscribers",
        desc: "Users subscribe once. Every incident update reaches their inbox automatically.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited pages and subscribers. No per-component or per-user fees like Statuspage.io.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Jordan K.",
        role: "Solo SaaS founder",
        text: "45-minute outage, 60 support tickets asking 'is it down?' Status Lite paid for itself in one incident.",
      },
      {
        name: "Mia T.",
        role: "Indie hacker",
        text: "Statuspage.io wanted $29/mo for a green dot. I had a public page live in 4 minutes for $29.",
      },
      {
        name: "Sam R.",
        role: "Bootstrapped dev",
        text: "The embed widget on my docs footer stopped the 'is it just me?' DMs during deploys.",
      },
    ],
    closing: {
      title: "Stop being your own status page",
      subtitle: "5 free status pages · then $29/mo for unlimited",
      ctaPrimary: "Create a status page free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live status page preview",
      caption: "Public page · component health · incident timeline",
      preview:
        "🟢 All Systems Operational\n─────────────────────────────────\n  API          ● Operational\n  Web App      ● Operational\n  Database     ● Operational\n─────────────────────────────────\n  📧 12 subscribers · statuslite.app/s/my-saas\n\n  Recent incidents:\n  ✓ Resolved · API latency spike · 2h ago\n  ● Investigating · Deploy in progress · now",
    },
  },
  zh: {
    badge: "Statuspage $299/月？StatusEmbed $15/月？· $29/月一口价",
    title: "独立开发者的极简状态页",
    subtitle:
      "5 分钟上线 status.yourapp.com。发布事件、通知订阅者、嵌入组件。免费体验 5 个状态页，之后 $29/月。",
    ctaPrimary: "免费创建状态页",
    ctaPrimaryHref: "/pages",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Statuspage 要 $299+" },
      { stat: "5 分钟", label: "上线公开状态页" },
      { stat: "∞", label: "订阅者不限量，不按用户收费" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建状态页",
          desc: "输入产品名称，几秒内获得含 API、网站、数据库组件的公开状态页",
        },
        {
          step: "2",
          title: "分享链接",
          desc: "放到页脚、文档或嵌入组件 — 用户可订阅邮件告警",
        },
        {
          step: "3",
          title: "快速发布事件",
          desc: "出故障时发布更新，订阅者自动收到通知。解决后关闭事件闭环",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🟢",
        title: "公开状态页",
        desc: "清晰展示各组件健康状态：正常、降级或故障，一目了然。",
      },
      {
        icon: "📢",
        title: "事件管理",
        desc: "发布调查中 → 已定位 → 已解决等更新，受影响组件自动降级。",
      },
      {
        icon: "📧",
        title: "邮件订阅",
        desc: "用户一次订阅，每次事件更新自动发到邮箱。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "状态页与订阅者不限量，不像 Statuspage.io 按组件或用户收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Jordan K.",
        role: "一人 SaaS 创始人",
        text: "故障 45 分钟，60 条工单问「是不是挂了？」状态页发布一次事件就回本了。",
      },
      {
        name: "Mia T.",
        role: "独立开发者",
        text: "Statuspage.io 一个绿点要 $29/月。我用 $29 四分钟就上线了公开状态页。",
      },
      {
        name: "Sam R.",
        role: "自举创业者",
        text: "文档页脚嵌入的组件，部署期间再也没收到「只有我这样吗？」的私信。",
      },
    ],
    closing: {
      title: "别再亲自当状态页了",
      subtitle: "免费 5 个状态页 · 之后 $29/月 不限量",
      ctaPrimary: "免费创建状态页",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "状态页实时预览",
      caption: "公开页面 · 组件健康 · 事件时间线",
      preview:
        "🟢 所有系统运行正常\n─────────────────────────────────\n  API          ● 正常\n  网站         ● 正常\n  数据库       ● 正常\n─────────────────────────────────\n  📧 12 位订阅者 · statuslite.app/s/my-saas\n\n  近期事件：\n  ✓ 已解决 · API 延迟升高 · 2 小时前\n  ● 调查中 · 部署进行中 · 刚刚",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Status Lite",
    subtitle: "One price, unlimited status pages and subscribers. No per-component fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Statuspage $299/mo · cancel anytime",
    perks: [
      "Unlimited status pages",
      "Unlimited email subscribers",
      "Incident management & timeline",
      "Embeddable status widget",
      "90-day incident history",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free pages, then subscribe?",
    whyItems: [
      "Hosting status pages and email alerts costs real infrastructure",
      "Paying users = founders who ship products users depend on",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅极简状态页",
    subtitle: "一口价，状态页与订阅者不限量。不按组件收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Statuspage $299/月 · 随时可取消",
    perks: [
      "不限状态页数量",
      "不限邮件订阅者",
      "事件管理与时间线",
      "可嵌入状态组件",
      "90 天事件历史",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个页面，之后订阅？",
    whyItems: [
      "托管状态页与邮件告警有真实基础设施成本",
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
