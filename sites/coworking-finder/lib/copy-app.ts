import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Coworking Finder",
    subtitle: "One price, all features. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited space detail views & booking links",
      "120+ global coworking spaces",
      "WiFi speed data + video-call ready filter",
      "Insider tips: best hours, hidden perks",
      "Smart filters by city / price / amenities",
      "Email alerts when new spaces launch",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free views, then subscribe?",
    whyItems: [
      "Each space's WiFi data and pricing requires on-site verification",
      "Paying users = quality community, no spam listings",
      "Solo-maintained — simple pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入联合办公 Finder",
    subtitle: "一个价格，全部功能。没有免费档，没有隐藏费用。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限查看空间详情与预订链接",
      "120+ 全球联合办公空间",
      "WiFi 实测数据 + 视频会议友好筛选",
      "内部贴士：最佳时段、隐藏福利",
      "按城市/价格/设施智能筛选",
      "新空间上线邮件提醒",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，点击支付将模拟成功",
    checkoutNote: "Stripe / Polar 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每个空间的 WiFi 数据和价格需要实地验证",
      "付费用户 = 高质量社区，没有 spam 空间",
      "一人维护，简单定价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const spacesCopy = {
  en: {
    title: "Global coworking spaces",
    spacesCount: "spaces",
    citiesLabel: "40+ cities",
    memberBadge: "✓ Member · unlimited views",
    freeTrial: "free views remaining",
    searchPlaceholder: "Search spaces, cities, countries…",
    allCities: "All cities",
    tags: ["Digital nomad", "Day pass", "Video call", "Budget", "Startup"],
    paywallTitle: "Free trial used up",
    paywallBody: "Subscribe $9.9/mo for unlimited space details + WiFi data + insider tips",
    paywallCta: "Subscribe now",
    videoCall: "Video call",
    dayPass: "Day pass",
    monthlyPass: "Monthly pass",
    wifiTested: "WiFi tested",
    hours: "Hours",
    description: "About",
    amenities: "Amenities",
    insiderTips: "Insider tips",
    reviews: "reviews",
    bookWebsite: "Book on official site →",
    emptyTitle: "Click a space on the left to view full details",
    emptySubtitle: "Non-members get 5 free views",
    tableSpace: "Space",
    tableCity: "City",
    tableWifi: "WiFi",
    tableDayPass: "Day pass",
    loadFailed: "load_failed",
  },
  zh: {
    title: "全球联合办公空间",
    spacesCount: "个空间",
    citiesLabel: "40+ 城市",
    memberBadge: "✓ 会员 · 无限查看",
    freeTrial: "次免费体验",
    searchPlaceholder: "搜索空间、城市、国家…",
    allCities: "全部城市",
    tags: ["数字游民", "日票", "视频会议", "低价", "创业"],
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅 $9.9/月，无限查看空间详情 + WiFi 数据 + 内部贴士",
    paywallCta: "立即订阅",
    videoCall: "视频会议",
    dayPass: "日票价格",
    monthlyPass: "月票价格",
    wifiTested: "WiFi 实测",
    hours: "营业时间",
    description: "空间介绍",
    amenities: "设施",
    insiderTips: "内部贴士",
    reviews: "评价",
    bookWebsite: "访问官网预订 →",
    emptyTitle: "点击左侧空间查看完整详情",
    emptySubtitle: "非会员免费体验 5 次",
    tableSpace: "空间",
    tableCity: "城市",
    tableWifi: "WiFi",
    tableDayPass: "日票",
    loadFailed: "load_failed",
  },
} as const;

export const apiErrorCopy = {
  en: {
    SPACE_ID_REQUIRED: "Space ID is required",
    SPACE_NOT_FOUND: "Space not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    LOAD_FAILED: "Failed to load space details",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    SPACE_ID_REQUIRED: "缺少空间 ID",
    SPACE_NOT_FOUND: "空间不存在",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    LOAD_FAILED: "加载失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to Coworking Finder!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited space details, WiFi data & insider tips.",
    order: "Order:",
    openSpaces: "Browse coworking spaces",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入联合办公 Finder！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是会员，可无限查看全球空间详情、WiFi 数据和内部贴士。",
    order: "订单:",
    openSpaces: "浏览联合办公空间",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Coworking Finder · Monthly",
    description: "Unlimited coworking space details & insider tips.",
  },
  zh: {
    name: "联合办公 Finder · 月付",
    description: "无限查看联合办公空间详情与内部贴士。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getSpacesCopy(locale: Locale) {
  return spacesCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
