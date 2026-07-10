import type { Locale } from "./i18n-shared";
import { joinCopy } from "./copy";

export const surveyCopy = {
  en: {
    title: "Team commute survey",
    subtitle:
      "Add employees with commute data. Get instant Scope 3 Cat.7 team rollup with transport breakdown.",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free team baselines left`,
    subscribeCta: "Subscribe · $29/mo →",
    memberBadge: "✓ Member active · unlimited baselines + CSRD export",
    addEmployee: "Add employee",
    removeEmployee: "Remove",
    employeeName: "Name",
    commuteLabel: (km: number) => `One-way commute: ${km} km`,
    officeDaysLabel: (days: number) => `Office days/week: ${days}`,
    transportLabel: "Transport mode",
    gridLabel: "Grid region",
    rangeMin: "0 km",
    rangeMax: "80 km",
    officeMin: "Fully remote",
    officeMax: "5 days / week",
    calculating: "Calculating…",
    calculate: "Calculate team baseline",
    calcFailed: "Baseline failed",
    subscribeNow: "Subscribe now",
    teamTotal: "Team Scope 3 Cat.7 total",
    savingsTitle: "Hybrid savings vs full office",
    savingsUnit: "kg CO₂e / year",
    savingsDetail: (pct: number, kg: number) =>
      `${pct}% reduction · ${kg.toLocaleString()} kg saved annually`,
    avgPerEmployee: (kg: number) => `Avg ${kg.toLocaleString()} kg / employee`,
    transportBreakdown: "By transport mode",
    employeeCount: (n: number) => `${n} employees`,
    csrdNote:
      "GHG Protocol Scope 3 Category 7 — Employee Commuting. For ESG baselines; consult certified auditors for formal audits.",
    scenarios: {
      current: "Current hybrid",
      fullOffice: "Full office",
      fullRemote: "Fully remote",
    },
    perYear: "kg/yr",
    maxEmployees: "Max 20 employees in free trial",
  },
  zh: {
    title: "团队通勤调研",
    subtitle: "添加员工通勤数据，即时获得 Scope 3 第 7 类团队汇总与交通方式拆分。",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费团队基线`,
    subscribeCta: "订阅 $29/月 →",
    memberBadge: "✓ 会员已激活 · 无限基线 + CSRD 导出",
    addEmployee: "添加员工",
    removeEmployee: "删除",
    employeeName: "姓名",
    commuteLabel: (km: number) => `单程通勤：${km} km`,
    officeDaysLabel: (days: number) => `每周到岗：${days} 天`,
    transportLabel: "交通方式",
    gridLabel: "电网区域",
    rangeMin: "0 km",
    rangeMax: "80 km",
    officeMin: "完全远程",
    officeMax: "全勤 5 天",
    calculating: "计算中…",
    calculate: "计算团队基线",
    calcFailed: "基线计算失败",
    subscribeNow: "立即订阅",
    teamTotal: "团队 Scope 3 第 7 类总量",
    savingsTitle: "混合办公相比全勤减排",
    savingsUnit: "kg CO₂e / 年",
    savingsDetail: (pct: number, kg: number) =>
      `减排 ${pct}% · 每年节省 ${kg.toLocaleString()} kg`,
    avgPerEmployee: (kg: number) => `人均 ${kg.toLocaleString()} kg`,
    transportBreakdown: "按交通方式",
    employeeCount: (n: number) => `${n} 位员工`,
    csrdNote:
      "GHG Protocol Scope 3 第 7 类 — 员工通勤。仅供 ESG 基线参考，正式审计请咨询认证机构。",
    scenarios: {
      current: "当前混合办公",
      fullOffice: "全勤通勤",
      fullRemote: "完全远程",
    },
    perYear: "kg/年",
    maxEmployees: "免费体验最多 20 位员工",
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
  en: { cn: "China grid", us: "US grid", eu: "EU grid", global: "Global average" },
  zh: { cn: "中国电网", us: "美国电网", eu: "欧盟电网", global: "全球平均" },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Scope3 Commute Pulse!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited team baselines and CSRD export are now active.",
    order: "Order:",
    openCalc: "Start team survey",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Scope 3 员工通勤！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限团队基线并导出 CSRD 报告。",
    order: "订单号：",
    openCalc: "开始团队调研",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Scope3 Commute Pulse · Monthly",
    description: "Unlimited team baselines, Cat.7 rollup, CSV/PDF CSRD export.",
  },
  zh: {
    name: "Scope 3 员工通勤 · 月付",
    description: "无限团队基线、第 7 类汇总、CSV/PDF CSRD 导出。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    INVALID_COMMUTE_KM: "Invalid commute distance.",
    INVALID_OFFICE_DAYS: "Invalid office days per week.",
    INVALID_EMPLOYEES: "Invalid employee list.",
    TOO_MANY_EMPLOYEES: "Too many employees for free trial.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    INVALID_COMMUTE_KM: "通勤距离无效。",
    INVALID_OFFICE_DAYS: "到岗天数无效。",
    INVALID_EMPLOYEES: "员工列表无效。",
    TOO_MANY_EMPLOYEES: "免费体验员工数超限。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getSurveyCopy(locale: Locale) {
  return surveyCopy[locale];
}

export function getCalcCopy(locale: Locale) {
  return getSurveyCopy(locale);
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
  return surveyCopy[locale].scenarios;
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

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
