import type { Locale } from "./i18n-shared";

export const passesCopy = {
  en: {
    title: "Day pass search",
    subtitle: "Compare prices, check WiFi, book today's desk — no monthly membership.",
    memberBadge: "✓ Member · unlimited bookings",
    freeBookings: "Free bookings:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free bookings. Subscribe for unlimited day-pass bookings and price alerts.",
    paywallCta: "Subscribe · $29/mo",
    searchPlaceholder: "Search city or space name…",
    allCities: "All cities",
    videoOnly: "Video-call ready only",
    bookToday: "Book today",
    booking: "Booking…",
    booked: "Booked!",
    confirmation: "Confirmation code:",
    wifi: "WiFi",
    rating: "rating",
    reviews: "reviews",
    tip: "Insider tip",
    cheapest: "Cheapest today",
    featured: "Featured",
    noResults: "No spaces match your filters. Try another city.",
    exampleTitle: "Popular day passes",
  },
  zh: {
    title: "日票搜索",
    subtitle: "比价、查 WiFi、预订今日工位 — 无需月费会员。",
    memberBadge: "✓ 会员 · 预订不限次数",
    freeBookings: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费预订。订阅后可无限预订日票并接收降价提醒。",
    paywallCta: "订阅 · $29/月",
    searchPlaceholder: "搜索城市或空间名称…",
    allCities: "全部城市",
    videoOnly: "仅显示适合视频会议",
    bookToday: "预订今日",
    booking: "预订中…",
    booked: "已预订！",
    confirmation: "确认码：",
    wifi: "WiFi",
    rating: "评分",
    reviews: "条评价",
    tip: "内部贴士",
    cheapest: "今日最低价",
    featured: "精选",
    noResults: "没有匹配的空间，试试其他城市。",
    exampleTitle: "热门日票",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Coworking Pass!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "unlimited day-pass bookings and price alerts are now active.",
    order: "Order:",
    openPasses: "Find a day pass",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用联合办公日票！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "日票预订已解锁，次数不限，降价提醒已开启。",
    order: "订单号：",
    openPasses: "查找日票",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Coworking Pass · Monthly",
    description: "Unlimited day-pass bookings, WiFi data & price alerts across 40+ cities.",
  },
  zh: {
    name: "联合办公日票 · 月付",
    description: "日票预订不限次数，40+ 城市 WiFi 数据与降价提醒。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    BOOKING_FAILED: "Booking failed. Please try again.",
    INVALID_SPACE: "Space not found.",
    MISSING_FIELDS: "Please select a space and date.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    BOOKING_FAILED: "预订失败，请重试。",
    INVALID_SPACE: "未找到该空间。",
    MISSING_FIELDS: "请选择空间和日期。",
    CHECKOUT_FAILED: "结账失败，请重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getPassesCopy(locale: Locale) {
  return passesCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const errors = apiErrors[locale];
  if (code && code in errors) {
    return errors[code as ApiErrorCode];
  }
  return errors.BOOKING_FAILED;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
