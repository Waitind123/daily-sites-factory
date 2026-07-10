import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Croissant $49/mo? · $9.9/mo flat",
    title: "Coworking day passes for nomads",
    subtitle:
      "Compare day-pass prices across 40+ cities, book instantly. No monthly membership. 5 free bookings, then $9.9/mo.",
    ctaPrimary: "Find a day pass",
    ctaPrimaryHref: "/passes",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free bookings · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Croissant $49+" },
      { stat: "40+", label: "cities with day-pass data" },
      { stat: "2 min", label: "to book today's desk" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Pick your city",
          desc: "Landing in Bangkok or Lisbon? Search by city or neighborhood",
        },
        {
          step: "2",
          title: "Compare day passes",
          desc: "See WiFi speed, price, video-call readiness side by side",
        },
        {
          step: "3",
          title: "Book instantly",
          desc: "Reserve today's pass — confirmation in seconds, no phone calls",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🎫",
        title: "Day-pass price compare",
        desc: "See real day-pass prices across WeWork, Hubud, Impact Hub and indie spaces.",
      },
      {
        icon: "📶",
        title: "WiFi speed data",
        desc: "Every space shows tested Mbps — no more surprise Zoom drops.",
      },
      {
        icon: "🎥",
        title: "Video-call ready filter",
        desc: "Filter spaces with phone booths and stable upload for client calls.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited bookings. No Croissant-style hourly credits or rollover math.",
      },
    ],
    testimonialsTitle: "What nomads say",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Remote PM · Bangkok ⇄ Lisbon",
        text: "Croissant wanted $49/mo for 10 hours. I just need a desk when I land — Coworking Pass is exactly that for $9.9.",
      },
      {
        name: "陈磊",
        role: "Indie dev · Chiang Mai",
        text: "Booked a day pass in Bangkok before my flight landed. WiFi data was spot-on — saved me 2 hours of Instagram hunting.",
      },
      {
        name: "Tomás R.",
        role: "Designer · Mexico City",
        text: "Deskpass caps visits per space. Here I compare prices across neighborhoods and book wherever is cheapest today.",
      },
    ],
    closing: {
      title: "Stop hunting Instagram for WiFi",
      subtitle: "5 free bookings · then $9.9/mo for unlimited",
      ctaPrimary: "Find a day pass",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Day-pass search preview",
      caption: "Compare prices · book today's desk in 2 taps",
      preview:
        "📍 Bangkok · 6 spaces with day passes\n\n🏢 The Work Project    $14/day  📶 400 Mbps  🎥 Ready\n🌴 Hubud (Bali)        $15/day  📶 120 Mbps  🎥 Ready\n🇵🇹 Impact Hub Lisbon  €20/day  📶 300 Mbps  🎥 Ready\n\n→ Book today · instant confirmation",
    },
  },
  zh: {
    badge: "Croissant $49/月？· $9.9/月一口价",
    title: "数字游民联合办公日票",
    subtitle:
      "40+ 城市日票比价，即时预订。无需月费会员。免费体验 5 次预订，之后 $9.9/月。",
    ctaPrimary: "查找日票",
    ctaPrimaryHref: "/passes",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Croissant 要 $49+" },
      { stat: "40+", label: "城市日票数据" },
      { stat: "2 分钟", label: "预订今日工位" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "选择城市",
          desc: "落地曼谷或里斯本？按城市或街区搜索",
        },
        {
          step: "2",
          title: "比价日票",
          desc: "并排查看 WiFi 速度、价格、是否适合视频会议",
        },
        {
          step: "3",
          title: "即时预订",
          desc: "预订今日日票，几秒内确认，无需打电话",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🎫",
        title: "日票比价",
        desc: "WeWork、Hubud、Impact Hub 及独立空间的真实日票价格一目了然。",
      },
      {
        icon: "📶",
        title: "WiFi 实测数据",
        desc: "每个空间标注实测网速，视频会议不再翻车。",
      },
      {
        icon: "🎥",
        title: "视频会议友好筛选",
        desc: "筛选有隔音电话亭、稳定上传的空间，客户会议不慌。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "预订不限次数。不像 Croissant 按小时扣积分、算 rollover。",
      },
    ],
    testimonialsTitle: "数字游民怎么说",
    testimonials: [
      {
        name: "Sarah M.",
        role: "远程 PM · 曼谷⇄里斯本",
        text: "Croissant $49/月才 10 小时。我落地只要一张桌子 — 联合办公日票 $9.9 刚好。",
      },
      {
        name: "陈磊",
        role: "独立开发者 · 清迈",
        text: "飞机落地前就订好了曼谷日票。WiFi 数据很准，省了 2 小时刷 Instagram。",
      },
      {
        name: "Tomás R.",
        role: "设计师 · 墨西哥城",
        text: "Deskpass 每个空间每月限次。这里可以跨街区比价，今天哪里便宜订哪里。",
      },
    ],
    closing: {
      title: "别再刷 Instagram 找 WiFi 了",
      subtitle: "免费 5 次预订 · 之后 $9.9/月 不限量",
      ctaPrimary: "查找日票",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "日票搜索预览",
      caption: "比价日票 · 两步预订今日工位",
      preview:
        "📍 曼谷 · 6 个有日票的空间\n\n🏢 The Work Project    $14/天  📶 400 Mbps  🎥 可视频\n🌴 Hubud（巴厘岛）     $15/天  📶 120 Mbps  🎥 可视频\n🇵🇹 Impact Hub 里斯本  €20/天  📶 300 Mbps  🎥 可视频\n\n→ 预订今日 · 即时确认",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Coworking Pass",
    subtitle: "One price, unlimited day-pass bookings. No hourly credits.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Croissant $49+/mo · cancel anytime",
    perks: [
      "Unlimited day-pass bookings",
      "40+ cities price comparison",
      "WiFi speed & video-call filters",
      "Insider tips from real nomads",
      "Instant booking confirmation",
      "Price alerts for your cities",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free bookings, then subscribe?",
    whyItems: [
      "Real-time space data and booking infra costs money",
      "Paying users = nomads who actually work from coworking",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅联合办公日票",
    subtitle: "一口价，日票预订不限次数。不按小时扣积分。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Croissant $49+/月 · 随时可取消",
    perks: [
      "日票预订不限次数",
      "40+ 城市价格对比",
      "WiFi 速度与视频会议筛选",
      "真实游民内部贴士",
      "即时预订确认",
      "关注城市降价提醒",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "实时空间数据与预订基础设施有真实成本",
      "付费用户 = 真正需要联合办公的数字游民",
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
