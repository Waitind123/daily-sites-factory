import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Land in Bangkok at 6pm · desk booked by 6:10",
    title: "Coworking day passes without the subscription trap",
    subtitle:
      "See live inventory, verified WiFi speeds, and video-call-ready spaces. Book today's pass in 10 minutes — not another $49/mo membership.",
    ctaPrimary: "Book free",
    ctaPrimaryHref: "/passes",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free bookings · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Croissant $49" },
      { stat: "40+", label: "cities with live inventory" },
      { stat: "10 min", label: "from landing to booked" },
    ],
    hotPassesTitle: "Today's hot passes",
    hotPassesLink: "Book now",
    hotPassesHint: "Full inventory and confirmations on",
    previewTable: {
      venue: "Venue",
      city: "City",
      spots: "Today",
      price: "Day pass",
    },
    howItWorks: {
      title: "Three steps to a reliable desk",
      steps: [
        { step: "1", title: "Pick a city", desc: "40+ cities with live spots and WiFi data" },
        { step: "2", title: "Book the pass", desc: "Instant confirmation with address, price, and entry tips" },
        { step: "3", title: "Walk in", desc: "Instant-book venues today — others follow venue instructions" },
      ],
    },
    featuresTitle: "Member features",
    features: [
      { icon: "⚡", title: "Live inventory", desc: "See spots left today — no more showing up to a full space" },
      { icon: "📶", title: "WiFi verified", desc: "Measured speeds per venue — video calls won't surprise you" },
      { icon: "🎫", title: "One-click booking", desc: "Members get confirmations with address, price, and tips" },
      { icon: "🎥", title: "Video-call ready", desc: "Filter spaces with phone booths and stable uplink" },
      { icon: "🌍", title: "40+ cities", desc: "Chiang Mai to Berlin — one hub for nomad day passes" },
      { icon: "💡", title: "Entry tips", desc: "Best hours, hidden perks, and walk-in playbooks from users" },
    ],
    testimonialsTitle: "What travelers say",
    testimonials: [
      {
        name: "Wei Li",
        role: "PM · frequent traveler",
        text: "Landed in Bangkok with a client call that night. Found The Work Project with an open spot in 5 minutes — WiFi data was accurate.",
      },
      {
        name: "Marcus Chen",
        role: "Indie hacker · digital nomad",
        text: "Deskpass is US-only. This shows real Asia and Europe day passes. Worth $9.9.",
      },
      {
        name: "Misa Sato",
        role: "Designer · Tokyo ⇄ Chiang Mai",
        text: "Punspace and Hubud tips saved me from weekend sell-outs. The booking guide is the product.",
      },
    ],
    closing: {
      title: "Deskpass is limited. Hotel meeting rooms are $80/day.",
      subtitle:
        "$9.9/mo for live inventory, WiFi data, and booking confirmations. Day-one pricing — verifying venues costs real work.",
      ctaPrimary: "Book a pass",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live inventory preview",
      caption: "Search city · filter WiFi · book today's pass",
      preview:
        "🎫 Bangkok · Sukhumvit · Today\n\nThe Work Project\n📶 400 Mbps · Video-ready · 6/35 spots left\n฿450/day · Instant book\n\n#1 pick for client calls before 8pm\nFree bookings left: 4/5",
    },
  },
  zh: {
    badge: "曼谷晚 6 点落地 · 6:10 订好工位",
    title: "联合办公日票，不用再买月费会员",
    subtitle:
      "查看实时库存、WiFi 实测、视频会议友好场地。10 分钟订好当日日票——不必再为 Croissant $49/月 买单。",
    ctaPrimary: "免费预订",
    ctaPrimaryHref: "/passes",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Croissant $49 更贵" },
      { stat: "40+", label: "城市实时库存" },
      { stat: "10 分钟", label: "落地到订好工位" },
    ],
    hotPassesTitle: "今日热门日票",
    hotPassesLink: "立即预订",
    hotPassesHint: "完整库存和预订确认单请前往",
    previewTable: {
      venue: "场地",
      city: "城市",
      spots: "今日余量",
      price: "日票",
    },
    howItWorks: {
      title: "三步订到靠谱工位",
      steps: [
        { step: "1", title: "选城市", desc: "40+ 城市，查看今日实时库存和 WiFi 数据" },
        { step: "2", title: "订日票", desc: "一键生成预订确认单，含地址、价格和入场贴士" },
        { step: "3", title: "直接去", desc: "即时预订场地 walk-in 入场，其他场地按指引操作" },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      { icon: "⚡", title: "当日可用库存", desc: "实时显示今日剩余工位数，出差落地不再扑空" },
      { icon: "📶", title: "WiFi 实测验证", desc: "每个场地标注实测网速，视频会议 suitability 一目了然" },
      { icon: "🎫", title: "一键预订日票", desc: "会员可生成预订确认单，含地址、价格和入场贴士" },
      { icon: "🎥", title: "视频会议友好", desc: "筛选有隔音电话亭、稳定网络的空间，客户会议不翻车" },
      { icon: "🌍", title: "40+ 城市覆盖", desc: "从清迈到柏林，出差数字游民全球日票一站搞定" },
      { icon: "💡", title: "预订贴士", desc: "真实用户贡献：最佳时段、隐藏福利、walk-in 攻略" },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "李薇",
        role: "产品经理 · 频繁出差",
        text: "落地曼谷当晚就要开客户会，日票通帮我 5 分钟找到 The Work Project 当日有空位，WiFi 数据很准。",
      },
      {
        name: "Marcus Chen",
        role: "独立开发者 · 数字游民",
        text: "Deskpass 只覆盖美国。这个工具覆盖亚洲和欧洲日票，$9.9 很值。",
      },
      {
        name: "佐藤美咲",
        role: "设计师 · 东京⇄清迈",
        text: "Punspace 和 Hubud 的预订贴士太实用了，直接帮我避开了周末满座的情况。",
      },
    ],
    closing: {
      title: "Deskpass 覆盖有限，酒店会议室太贵",
      subtitle:
        "$9.9/月换实时库存、WiFi 实测和预订确认单。第一天收费，因为场地数据验证有成本。",
      ctaPrimary: "立即预订",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "实时库存预览",
      caption: "选城市 · 筛 WiFi · 订当日日票",
      preview:
        "🎫 曼谷 · Sukhumvit · 今日\n\nThe Work Project\n📶 400 Mbps · 视频会议友好 · 余 6/35 位\n฿450/天 · 即时预订\n\n晚 8 点前客户会首选\n剩余免费次数：4/5",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join DayPass Hub",
    subtitle: "One price, all features. No free tier tricks.",
    recommended: "Best value",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "≈ $0.33/day · cancel anytime",
    perks: [
      "Unlimited coworking day pass bookings",
      "40+ cities with live inventory",
      "WiFi data + video-call filters",
      "Booking confirmations + entry tips",
      "Smart filters by city, price, amenities",
      "Email alerts when new venues go live",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · cards accepted",
    whyTitle: "Why 5 free bookings, then subscribe?",
    whyItems: [
      "Every venue's inventory and WiFi needs hands-on verification",
      "Paying users = quality community, no spam listings",
      "Solo-maintained — $9.9 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入日票通",
    subtitle: "一个价格，全部功能。没有免费档，没有隐藏费用。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限预订联合办公日票",
      "40+ 城市实时库存",
      "WiFi 实测数据 + 视频会议友好筛选",
      "预订确认单 + 入场贴士",
      "按城市/价格/设施智能筛选",
      "新场地上线邮件提醒",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，点击支付将模拟成功",
    checkoutNote: "Stripe / Polar 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每个场地的库存和 WiFi 数据需要实地验证",
      "付费用户 = 高质量社区，没有 spam 场地",
      "一人维护，简单定价才能持续运营",
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
