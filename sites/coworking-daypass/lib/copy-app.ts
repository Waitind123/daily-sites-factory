import type { Locale } from "./i18n-shared";

export const stripeProductCopy = {
  en: {
    name: "DayPass Hub · Monthly",
    description: "Unlimited coworking day pass bookings + live inventory + WiFi data",
  },
  zh: {
    name: "日票通 · 月度会员",
    description: "无限预订联合办公日票 + 实时库存 + WiFi 验证数据",
  },
} as const;

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export const passesCopy = {
  en: {
    title: "Book today's day pass",
    subtitle: (count: number) => `${count} venues · live inventory`,
    memberBadge: "✓ Member · unlimited bookings",
    trialBadge: (remaining: number, limit: number) =>
      `${remaining}/${limit} free bookings left`,
    searchPlaceholder: "Search city or venue…",
    allCities: "All cities",
    tags: ["Instant book", "Video calls", "Budget", "Nomad"],
    paywallTitle: "Free trial used up",
    paywallDesc: "Subscribe $29/mo for unlimited day passes + live inventory + confirmations",
    subscribeNow: "Subscribe now",
    bookingFailed: "Booking failed",
    venueCol: "Venue",
    cityCol: "City",
    spotsCol: "Today",
    priceCol: "Day pass",
    spotsToday: (left: number, total: number) => `${left}/${total} left`,
    instantBook: "Instant book",
    confirmationTitle: "Booking confirmation",
    priceLabel: "Day pass price",
    wifiLabel: "WiFi tested",
    hoursLabel: "Hours",
    methodLabel: "Booking",
    instantEntry: "Walk in today",
    advanceRequired: "Book ahead",
    tipsTitle: "Entry tips",
    payOnSite: "Complete payment on venue site →",
    disclaimer: "This is a booking guide — pay on the venue's official site",
    loading: "Loading booking…",
    emptyTitle: "Tap a venue on the left to book today's pass",
    emptyHint: "Non-members get 5 free bookings",
  },
  zh: {
    title: "今日可订日票",
    subtitle: (count: number) => `${count} 个场地 · 实时库存更新`,
    memberBadge: "✓ 会员 · 无限预订",
    trialBadge: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    searchPlaceholder: "搜索城市、场地名称…",
    allCities: "全部城市",
    tags: ["即时预订", "视频会议", "低价", "数字游民"],
    paywallTitle: "免费体验已用完",
    paywallDesc: "订阅 $29/月，无限预订日票 + 实时库存 + 预订确认单",
    subscribeNow: "立即订阅",
    bookingFailed: "预订失败",
    venueCol: "场地",
    cityCol: "城市",
    spotsCol: "今日余量",
    priceCol: "日票",
    spotsToday: (left: number, total: number) => `今日余 ${left}/${total}`,
    instantBook: "即时预订",
    confirmationTitle: "预订确认单",
    priceLabel: "日票价格",
    wifiLabel: "WiFi 实测",
    hoursLabel: "营业时间",
    methodLabel: "预订方式",
    instantEntry: "即时入场",
    advanceRequired: "需提前预约",
    tipsTitle: "入场贴士",
    payOnSite: "前往官网完成付款 →",
    disclaimer: "此为预订指引确认单，实际付款请在场地官网完成",
    loading: "加载预订信息中…",
    emptyTitle: "点击左侧场地预订今日日票",
    emptyHint: "非会员免费体验 5 次",
  },
} as const;

export function getPassesCopy(locale: Locale) {
  return passesCopy[locale];
}

export const successCopy = {
  en: {
    title: "Welcome to DayPass Hub!",
    demoPaid: "Demo payment successful.",
    paidBody:
      "Payment successful — unlimited day pass bookings, live inventory, and confirmations are active.",
    order: "Order:",
    openPasses: "Book today's pass",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入日票通！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是会员，可无限预订联合办公日票、查看实时库存和预订确认单。",
    order: "订单:",
    openPasses: "预订今日日票",
    backHome: "返回首页",
  },
} as const;

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export const apiErrorCopy = {
  en: {
    GENERIC: "Something went wrong. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    MISSING_VENUE_ID: "Venue ID is required",
    VENUE_NOT_FOUND: "Venue not found",
    BOOKING_FAILED: "Booking failed",
    TRIAL_EXHAUSTED: "Free trial used up — please subscribe",
  },
  zh: {
    GENERIC: "出错了，请稍后再试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    MISSING_VENUE_ID: "缺少场地 ID",
    VENUE_NOT_FOUND: "场地不存在",
    BOOKING_FAILED: "预订失败",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}
