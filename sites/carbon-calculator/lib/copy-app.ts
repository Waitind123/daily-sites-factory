import type { Locale } from "./i18n-shared";

export const calcCopy = {
  en: {
    title: "Carbon footprint calculator",
    subtitle:
      "Enter commute parameters and compare annual CO₂e across full office, hybrid, and fully remote scenarios.",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free calculations left`,
    subscribeCta: "Subscribe · $9.9/mo →",
    memberBadge: "✓ Member active · unlimited calculations + report export",
    commuteLabel: (km: number) => `One-way commute distance: ${km} km`,
    officeDaysLabel: (days: number) => `Office days per week: ${days} days`,
    transportLabel: "Commute mode",
    gridLabel: "Grid region",
    rangeMin: "0 km",
    rangeMax: "80 km",
    officeMin: "Fully remote",
    officeMax: "5 days / week",
    calculating: "Calculating…",
    calculate: "Calculate footprint",
    calcFailed: "Calculation failed",
    subscribeNow: "Subscribe now",
    savingsTitle: "Annual savings vs full office commute",
    savingsUnit: "kg CO₂e",
    savingsDetail: (pct: number, trees: number) =>
      `${pct}% reduction · ≈ ${trees} trees / year`,
    breakdownCommute: (kg: number) => `Commute ${kg} kg`,
    breakdownOffice: (kg: number) => `Office ${kg} kg`,
    breakdownHome: (kg: number) => `Home ${kg} kg`,
    resultMeta: (transport: string, grid: string) =>
      `Transport: ${transport} · Grid: ${grid}`,
    methodology:
      "Methodology based on GHG Protocol commuting + EcoAct home-office energy allocation. For ESG baselines only — consult certified auditors for formal audits.",
    scenarios: {
      current: "Current hybrid",
      fullOffice: "Full office",
      fullRemote: "Fully remote",
    },
    perYear: "kg/yr",
  },
  zh: {
    title: "碳足迹计算器",
    subtitle: "输入通勤参数，对比全勤、混合、完全远程三种场景的年度 CO₂e 排放。",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeCta: "订阅 $9.9/月 →",
    memberBadge: "✓ 会员已激活 · 无限计算 + 报告导出",
    commuteLabel: (km: number) => `单程通勤距离：${km} km`,
    officeDaysLabel: (days: number) => `每周到岗天数：${days} 天`,
    transportLabel: "通勤方式",
    gridLabel: "电网区域",
    rangeMin: "0 km",
    rangeMax: "80 km",
    officeMin: "完全远程",
    officeMax: "全勤 5 天",
    calculating: "计算中…",
    calculate: "计算碳足迹",
    calcFailed: "计算失败",
    subscribeNow: "立即订阅",
    savingsTitle: "相比全勤通勤，你每年减排",
    savingsUnit: "kg CO₂e",
    savingsDetail: (pct: number, trees: number) =>
      `减排 ${pct}% · 约等于 ${trees} 棵树 / 年`,
    breakdownCommute: (kg: number) => `通勤 ${kg} kg`,
    breakdownOffice: (kg: number) => `办公室 ${kg} kg`,
    breakdownHome: (kg: number) => `居家 ${kg} kg`,
    resultMeta: (transport: string, grid: string) =>
      `交通方式：${transport} · 电网：${grid}`,
    methodology:
      "方法论基于 GHG Protocol 通勤计算 + EcoAct 居家办公能耗分摊。仅供 ESG 基线参考，正式审计请咨询认证机构。",
    scenarios: {
      current: "当前混合办公",
      fullOffice: "全勤通勤",
      fullRemote: "完全远程",
    },
    perYear: "kg/年",
  },
} as const;

export const transportOptions = {
  en: [
    { id: "car", label: "Car", icon: "🚗" },
    { id: "bus", label: "Bus", icon: "🚌" },
    { id: "subway", label: "Subway", icon: "🚇" },
    { id: "ebike", label: "E-bike", icon: "🛵" },
    { id: "walk", label: "Walk / bike", icon: "🚶" },
  ],
  zh: [
    { id: "car", label: "私家车", icon: "🚗" },
    { id: "bus", label: "公交", icon: "🚌" },
    { id: "subway", label: "地铁", icon: "🚇" },
    { id: "ebike", label: "电动车", icon: "🛵" },
    { id: "walk", label: "步行/骑行", icon: "🚶" },
  ],
} as const;

export const gridLabels = {
  en: {
    cn: "China grid",
    us: "US grid",
    eu: "EU grid",
    global: "Global average",
  },
  zh: {
    cn: "中国电网",
    us: "美国电网",
    eu: "欧盟电网",
    global: "全球平均",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Carbon Calculator!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited calculations and ESG report export are now active.",
    order: "Order:",
    openCalc: "Start calculating",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入远程碳足迹！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限计算并导出 ESG 报告。",
    order: "订单号：",
    openCalc: "开始计算",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Carbon Calculator · Monthly",
    description: "Unlimited calculations, team rollup, PDF/CSV export, ESG templates.",
  },
  zh: {
    name: "远程碳足迹 · 月付",
    description: "无限计算、团队汇总、PDF/CSV 导出、ESG 报告模板。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    INVALID_COMMUTE_KM: "Invalid commute distance.",
    INVALID_OFFICE_DAYS: "Invalid office days per week.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    INVALID_COMMUTE_KM: "通勤距离无效。",
    INVALID_OFFICE_DAYS: "到岗天数无效。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getCalcCopy(locale: Locale) {
  return calcCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getTransportOptions(locale: Locale) {
  return transportOptions[locale];
}

export function getGridLabels(locale: Locale) {
  return gridLabels[locale];
}

export function getScenarioLabels(locale: Locale) {
  return calcCopy[locale].scenarios;
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const errors = apiErrors[locale];
  if (code && code in errors) {
    return errors[code as ApiErrorCode];
  }
  return errors.CHECKOUT_FAILED;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
