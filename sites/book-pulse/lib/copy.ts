import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Calendly $12/mo? · $29/mo flat",
    title: "Scheduling pages built for indie hackers",
    subtitle:
      "Share your project, sync time zones, book coffee chats in 2 minutes. No cookie banners, full i18n. 5 free publishes, then $29/mo.",
    ctaPrimary: "Create booking page",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free publishes · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Calendly $12+" },
      { stat: "2 min", label: "to publish your booking link" },
      { stat: "100%", label: "bilingual EN/ZH — no cookie popup" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create your page",
          desc: "Add name, current project, bio, and your time zone",
        },
        {
          step: "2",
          title: "Set availability",
          desc: "Default Mon/Wed/Fri slots — perfect for indie coffee chats",
        },
        {
          step: "3",
          title: "Share /b/your-name",
          desc: "Embed on your homepage — visitors book without Calendly branding",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📅",
        title: "Indie booking pages",
        desc: "Show what you're building. Visitors see your project before they book.",
      },
      {
        icon: "🌏",
        title: "Time zone sync",
        desc: "Display slots in your zone. No more 'is that PST or PDT?' DMs.",
      },
      {
        icon: "🔗",
        title: "Clean /b/slug links",
        desc: "Embed on your site. No Calendly cookie dialog on your homepage.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited pages and bookings. No per-seat fees like SavvyCal.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Chen W.",
        role: "Solo SaaS founder",
        text: "Calendly's cookie banner on my landing page killed conversions. Book Pulse embeds clean with zero English when I switch to Chinese.",
      },
      {
        name: "Maya R.",
        role: "Indie hacker",
        text: "I just needed coffee chat scheduling with my project name on top. Not enterprise round-robin with 40 settings.",
      },
      {
        name: "Tom K.",
        role: "Bootstrapped dev",
        text: "Published my booking page in 90 seconds. Shared on HN profile — 3 collab calls booked that week.",
      },
    ],
    closing: {
      title: "Book collabs without Calendly bloat",
      subtitle: "5 free publishes · then $29/mo for unlimited booking pages",
      ctaPrimary: "Create booking page",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Live booking page preview",
      caption: "Project showcase · time slots · one-click book — no cookie popup",
      preview:
        "📅 Book Pulse — indie hacker scheduling          yoursite.com/b/alex-dev\n─────────────────────────────────────────────────────\n  👤 Alex · Building ShipFast Analytics\n  🌏 Timezone: UTC+8  ·  30 min coffee chat\n─────────────────────────────────────────────────────\n  Mon  10:00 – 12:00   ✓ available\n  Wed  14:00 – 17:00   ✓ available\n  Fri  09:00 – 11:00   ✓ available\n─────────────────────────────────────────────────────\n  [ Book Mon 10:30 ]    [ Book Wed 15:00 ]\n─────────────────────────────────────────────────────\n  Powered by you — no Calendly branding",
    },
  },
  zh: {
    badge: "Calendly 要 $12/月？· $29/月一口价",
    title: "为独立开发者打造的预约页",
    subtitle:
      "展示你在做的项目、同步时区、2 分钟发布预约链接。无 Cookie 弹窗、完整中英双语。免费发布 5 次，之后 $29/月。",
    ctaPrimary: "创建预约页",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费发布 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Calendly 要 $12+" },
      { stat: "2 分钟", label: "发布你的预约链接" },
      { stat: "100%", label: "中英双语 — 无 Cookie 弹窗" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建预约页",
          desc: "填写姓名、当前项目、简介和时区",
        },
        {
          step: "2",
          title: "设置可用时段",
          desc: "默认周一/三/五时段 — 适合独立开发者咖啡聊",
        },
        {
          step: "3",
          title: "分享 /b/你的名字",
          desc: "嵌入首页 — 访客预约无需 Calendly 品牌水印",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📅",
        title: "独立开发者预约页",
        desc: "展示你在做的项目。访客预约前先了解你在 build 什么。",
      },
      {
        icon: "🌏",
        title: "时区同步",
        desc: "按你的时区显示时段。告别「这是 PST 还是 PDT？」私信。",
      },
      {
        icon: "🔗",
        title: "简洁 /b/链接",
        desc: "嵌入你的网站。首页不再弹 Calendly Cookie 对话框。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "无限预约页和预约次数。无 SavvyCal 式按席位收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "陈伟",
        role: "独立 SaaS 创始人",
        text: "Calendly 的 Cookie 弹窗毁了我落地页转化。Book Pulse 嵌入干净，切中文后全站零英文。",
      },
      {
        name: "Maya R.",
        role: "独立开发者",
        text: "我只需要带项目名的咖啡聊预约，不要 40 项设置的企业轮询。",
      },
      {
        name: "Tom K.",
        role: "自举开发者",
        text: "90 秒发布预约页。挂在 HN 简介 — 当周约了 3 次合作通话。",
      },
    ],
    closing: {
      title: "不用 Calendly 臃肿功能也能预约",
      subtitle: "免费发布 5 次 · 之后 $29/月无限预约页",
      ctaPrimary: "创建预约页",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "预约页实时预览",
      caption: "项目展示 · 时段选择 · 一键预约 — 无 Cookie 弹窗",
      preview:
        "📅 Book Pulse — 独立开发者预约              yoursite.com/b/alex-dev\n─────────────────────────────────────────────────────\n  👤 Alex · 正在做 ShipFast 分析工具\n  🌏 时区：UTC+8  ·  30 分钟咖啡聊\n─────────────────────────────────────────────────────\n  周一  10:00 – 12:00   ✓ 可预约\n  周三  14:00 – 17:00   ✓ 可预约\n  周五  09:00 – 11:00   ✓ 可预约\n─────────────────────────────────────────────────────\n  [ 预约周一 10:30 ]    [ 预约周三 15:00 ]\n─────────────────────────────────────────────────────\n  你的品牌 — 无 Calendly 水印",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Book Pulse",
    subtitle: "One price, unlimited booking pages. No per-seat fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Calendly $12+/mo · cancel anytime",
    perks: [
      "Unlimited booking page publishes",
      "Project showcase on every page",
      "Time zone sync + custom /b/slug links",
      "Embed widget for your homepage",
      "Bilingual EN/ZH with zero English in Chinese mode",
      "No Calendly cookie banner on your site",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free publishes, then subscribe?",
    whyItems: [
      "Hosting booking pages and slot management needs real infrastructure",
      "Paying users = founders who actually book collab calls weekly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Book Pulse",
    subtitle: "一口价，预约页发布不限量。不按席位收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Calendly $12+/月 · 随时可取消",
    perks: [
      "无限预约页发布",
      "每页展示当前项目",
      "时区同步 + 自定义 /b/链接",
      "首页嵌入小部件",
      "中英双语，中文模式全站零英文",
      "你的网站无 Calendly Cookie 弹窗",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费发布 5 次，之后订阅？",
    whyItems: [
      "托管预约页和时段管理有真实基础设施成本",
      "付费用户 = 真正每周约合作通话的创始人",
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
