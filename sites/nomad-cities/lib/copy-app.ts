import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Nomad Cities",
    subtitle: "One price, full access. No per-city fees, no hidden tiers.",
    socialProof: "200+ cities · updated daily · 89 nomads joined this month",
    recommended: "Best value",
    monthly: "Monthly",
    annual: "Annual",
    perMonth: "/mo",
    perYear: "/yr",
    saveAnnual: "Save 17% vs monthly",
    monthlyPrice: "$29",
    annualPrice: "$99",
    vsCanny: "vs Nomad List $99+/yr · cancel anytime",
    compareTitle: "Nomad Cities vs Nomad List",
    compareHeaderUs: "Nomad Cities",
    compareHeaderThem: "Nomad List",
    compareRows: [
      { label: "Annual price", us: "$29/mo flat", them: "$99–$299/yr tiers" },
      { label: "Cities ranked", us: "200+ with daily refresh", them: "1,400+ crowdsourced" },
      { label: "Free trial", us: "Top 10 + 5 unlocks", them: "Limited free tier" },
      { label: "Visa data", us: "Per-city visa notes", them: "Community reports" },
      { label: "UI focus", us: "Rankings-first, no feed", them: "Social + chat heavy" },
    ],
    faqTitle: "FAQ",
    faq: [
      {
        q: "Can I try before paying?",
        a: "Yes — top 10 cities are always free. You also get 5 unlocks to peek at locked city profiles.",
      },
      {
        q: "How is this different from Nomad List?",
        a: "Same ballpark price, but rankings-first UI. No social feed noise — just cost, internet, safety, and visa data.",
      },
      {
        q: "Is the data updated?",
        a: "Exchange rates, rent estimates, and speed tests refresh daily. Visa notes are reviewed monthly.",
      },
    ],
    perks: [
      "200+ cities with full rankings & trends",
      "Cost, internet, safety, visa details",
      "Member community (Slack invite)",
      "Price-change email alerts",
      "Monthly deep-dive city reports",
      "CSV data export",
    ],
    subscribe: "Join · $29/mo",
    subscribeAnnual: "Join · $29/mo",
    guarantee: "7-day money-back guarantee · cancel anytime",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free unlocks, then subscribe?",
    whyItems: [
      "City data collection and daily updates cost real infrastructure",
      "Paying members = high-quality community without spam",
      "Solo-maintained — flat annual pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入游民城市榜",
    subtitle: "一口价，全部功能。无按城市收费，无隐藏档位。",
    socialProof: "200+ 城市 · 每日更新 · 本月 89 位游民已加入",
    recommended: "最佳方案",
    monthly: "月付",
    annual: "年付",
    perMonth: "/月",
    perYear: "/年",
    saveAnnual: "比月付省 17%",
    monthlyPrice: "¥199",
    annualPrice: "¥699",
    vsCanny: "对比 Nomad List $99+/年 · 随时可取消",
    compareTitle: "游民城市榜 vs Nomad List",
    compareHeaderUs: "游民城市榜",
    compareHeaderThem: "Nomad List",
    compareRows: [
      { label: "年费", us: "¥199/月一口价", them: "$99–$299/年多档" },
      { label: "城市数量", us: "200+ 每日刷新", them: "1,400+ 众包数据" },
      { label: "免费体验", us: "前 10 名 + 5 次解锁", them: "有限免费档" },
      { label: "签证数据", us: "每城签证备注", them: "社区上报" },
      { label: "界面重点", us: "排名优先，无信息流", them: "社交聊天为主" },
    ],
    faqTitle: "常见问题",
    faq: [
      {
        q: "付费前能试用吗？",
        a: "可以 — 前 10 名城市始终免费。另有 5 次解锁额度查看锁定城市档案。",
      },
      {
        q: "和 Nomad List 有什么不同？",
        a: "价格相近，但界面以排名为核心。无社交信息流干扰 — 只看成本、网速、安全与签证。",
      },
      {
        q: "数据会更新吗？",
        a: "汇率、租金估算、网速实测每日刷新。签证备注每月审核。",
      },
    ],
    perks: [
      "200+ 城市完整排名与历史趋势",
      "生活成本、网速、安全、签证详情",
      "会员专属社区（Slack 邀请）",
      "目标城市价格变动邮件提醒",
      "每月新增城市深度报告",
      "数据 CSV 导出",
    ],
    subscribe: "加入会员 · ¥199/月",
    subscribeAnnual: "加入会员 · ¥199/月",
    guarantee: "7 天无理由退款 · 随时可取消",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费解锁 5 个城市，之后订阅？",
    whyItems: [
      "城市数据采集与每日更新有真实基础设施成本",
      "付费会员 = 高质量社区，无广告和垃圾信息",
      "一人维护 — 简单年付定价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "City Rankings",
    subtitle: "Browse 200+ nomad cities. Unlock locked profiles with your free trial.",
    memberBadge: "✓ Member · all 200+ cities unlocked",
    freeSyncs: "Free unlocks remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've unlocked 5 cities on trial. Subscribe for full access to 200+ rankings, trends, and community.",
    paywallCta: "Join · $29/mo",
    stickyTrialTitle: "Only {n} free unlocks left",
    stickyTrialBody: "Unlock all 200+ cities with a membership — from $29/mo.",
    stickyTrialCta: "View pricing",
    createTitle: "Unlock city profile",
    productName: "City rank to unlock",
    productNamePlaceholder: "e.g. 11 for Prague",
    stripeKey: "Or pick from locked cities below",
    stripeKeyPlaceholder: "",
    stripeKeyHint: "Top 10 cities are always free. Locked cities require unlock or membership.",
    creating: "Unlocking…",
    createDashboard: "Unlock city",
    createdTitle: "City unlocked!",
    createdHint: "Full cost, visa, and safety details are now visible.",
    syncNow: "View details",
    syncing: "Loading…",
    yourDashboards: "Recently unlocked",
    notSynced: "Locked",
    costLabel: "Monthly cost",
    internetLabel: "Internet",
    safetyLabel: "Safety",
    visaLabel: "Visa",
    customers: "City",
    newCustomers: "Country",
    expansion: "Score",
    contraction: "Rank",
    syncedAt: "Status",
    copyLink: "Unlock",
    copied: "Unlocked!",
    tableRank: "#",
    tableCity: "City",
    tableCost: "Cost/mo",
    tableSpeed: "Speed",
    tableSafety: "Safety",
    tableVisa: "Visa",
    tableScore: "Score",
    memberOnly: "Member",
    freeLabel: "Free",
    unlockBtn: "Unlock",
    viewBtn: "Details",
    topTenNote: "Top 10 always free",
  },
  zh: {
    title: "城市排名",
    subtitle: "浏览 200+ 游民城市。用免费试用解锁锁定城市的完整档案。",
    memberBadge: "✓ 会员 · 全部 200+ 城市已解锁",
    freeSyncs: "剩余免费解锁：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已用试用解锁 5 个城市。订阅后可访问 200+ 排名、趋势与社区。",
    paywallCta: "加入会员 · ¥199/月",
    stickyTrialTitle: "仅剩 {n} 次免费解锁",
    stickyTrialBody: "加入会员即可访问全部 200+ 城市 — 月付 ¥69 起。",
    stickyTrialCta: "查看定价",
    createTitle: "解锁城市档案",
    productName: "要解锁的城市排名",
    productNamePlaceholder: "例如 11 代表布拉格",
    stripeKey: "或从下方锁定城市中选择",
    stripeKeyPlaceholder: "",
    stripeKeyHint: "前 10 名城市始终免费。锁定城市需解锁或成为会员。",
    creating: "解锁中…",
    createDashboard: "解锁城市",
    createdTitle: "城市已解锁！",
    createdHint: "完整成本、签证与安全详情现已可见。",
    syncNow: "查看详情",
    syncing: "加载中…",
    yourDashboards: "最近解锁",
    notSynced: "已锁定",
    costLabel: "月生活成本",
    internetLabel: "网速",
    safetyLabel: "安全指数",
    visaLabel: "签证",
    customers: "城市",
    newCustomers: "国家",
    expansion: "评分",
    contraction: "排名",
    syncedAt: "状态",
    copyLink: "解锁",
    copied: "已解锁！",
    tableRank: "#",
    tableCity: "城市",
    tableCost: "月成本",
    tableSpeed: "网速",
    tableSafety: "安全",
    tableVisa: "签证",
    tableScore: "评分",
    memberOnly: "会员",
    freeLabel: "免费",
    unlockBtn: "解锁",
    viewBtn: "详情",
    topTenNote: "前 10 名始终免费",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Nomad Cities!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have full access to 200+ city rankings, trends, and member community.",
    order: "Order:",
    openDashboard: "Open rankings",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入游民城市榜！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以访问 200+ 城市排名、趋势数据与会员社区。",
    order: "订单号：",
    openDashboard: "打开排名",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    CITY_RANK_REQUIRED: "City rank is required",
    CITY_NOT_FOUND: "City not found",
    CITY_ALREADY_FREE: "This city is already free to view",
    CITY_ALREADY_UNLOCKED: "City already unlocked",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    CITY_RANK_REQUIRED: "请填写城市排名",
    CITY_NOT_FOUND: "城市不存在",
    CITY_ALREADY_FREE: "该城市已免费开放",
    CITY_ALREADY_UNLOCKED: "该城市已解锁",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Nomad Cities · Monthly",
    description: "200+ city rankings, trends, community & price alerts.",
    annualName: "Nomad Cities · Annual",
    annualDescription: "200+ cities for a full year — save 17% vs monthly.",
  },
  zh: {
    name: "游民城市榜 · 月付",
    description: "200+ 城市排名、趋势、社区与价格提醒。",
    annualName: "游民城市榜 · 年付",
    annualDescription: "200+ 城市全年访问 — 比月付省 17%。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getDashboardCopy(locale: Locale) {
  return dashboardCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
