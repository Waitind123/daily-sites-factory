/** 看板中英双语文案 — 中文 + 英文并列，方便对照理解 */

export const METRIC = {
  pv: "浏览次数 (Pageviews)",
  uv: "独立访客 (Unique Visitors)",
  trial: "试用 (Trial)",
  checkout: "结账 (Checkout)",
  purchase: "付费 (Purchase)",
} as const;

export const DEVICE_LABELS: Record<string, string> = {
  mobile: "手机 (Mobile)",
  desktop: "电脑 (Desktop)",
  tablet: "平板 (Tablet)",
  unknown: "未知设备 (Unknown)",
};

export const LOCALE_LABELS: Record<string, string> = {
  zh: "中文 (Chinese)",
  en: "英语 (English)",
  ja: "日语 (Japanese)",
  ko: "韩语 (Korean)",
  fr: "法语 (French)",
  de: "德语 (German)",
  es: "西班牙语 (Spanish)",
  unknown: "未知语言 (Unknown)",
};

export function labelDevice(key: string) {
  return DEVICE_LABELS[key] || key;
}

export function labelLocale(key: string) {
  return LOCALE_LABELS[key] || `${key}`;
}

export function labelHour(key: string) {
  const h = Number(String(key).replace(/\D/g, ""));
  if (Number.isNaN(h)) return key;
  const zh =
    h < 6
      ? `凌晨 ${h} 点`
      : h < 12
        ? `上午 ${h} 点`
        : h === 12
          ? "中午 12 点"
          : h < 18
            ? `下午 ${h - 12} 点`
            : `晚上 ${h - 12} 点`;
  return `${zh} (${h}:00 CST)`;
}

export const SEO_LABELS = {
  score: "搜索优化得分 (SEO Score)",
  excellent: "优秀站点 ≥80 (Excellent)",
  needsWork: "待优化 <50 (Needs Work)",
  sitemap: "站点地图正常 (Sitemap OK)",
  robots: "爬虫规则正常 (Robots OK)",
  og: "社交分享预览 (Open Graph)",
  jsonLd: "结构化数据 (JSON-LD)",
  guides: "有指南文章 (Guide Pages)",
  scanned: "已检测站点 (Sites Scanned)",
};

export const STRIPE_LABELS = {
  title: "在线收款 Polar / Stripe",
  configured: "收款已配置 Payments",
  configuredYes: "已配置 Configured",
  configuredNo: "未配置 Not Configured",
  live: "真实收款站 (Live)",
  demo: "演示模式站 (Demo)",
  fail: "检测失败 (Failed)",
};

export const REFERRER_LABELS: Record<string, string> = {
  直接访问: "直接访问 Direct",
  搜索引擎: "搜索引擎 Search Engine",
  社交媒体: "社交媒体 Social",
  站内互跳: "站内互跳 Internal",
  开发者社区: "开发者社区 Dev Community",
  其他来源: "其他来源 Other",
};

export function labelReferrer(key: string) {
  return REFERRER_LABELS[key] || key;
}

export const DATE_PRESET_LABELS = {
  today: "今天 Today",
  yesterday: "昨天 Yesterday",
  last7: "近7天 Last 7d",
  last30: "近30天 Last 30d",
  thisMonth: "本月 This Month",
  lastMonth: "上月 Last Month",
  all: "全部 All Time",
  custom: "自定义 Custom",
} as const;

export const DASHBOARD_COPY = {
  brand: "每日站点工厂 Daily Sites Factory",
  title: "全站运营看板 Factory Dashboard",
  subtitle: "流量 Traffic · 转化 Conversion · 搜索优化 SEO · 收款 Payments",
  realUsersOnly: "仅统计真实用户 Real users only（已排除 CI / 测试流量）",
  autoRefresh: "每 20 秒自动刷新 Auto-refresh 20s",
  dataUpdated: "数据更新 Updated",
  pageFetched: "页面拉取 Fetched",
  loading: "正在拉取最新数据… Loading…",
  fetchError: "拉取失败 Fetch failed",
  retryHint: "20 秒后重试 Retry in 20s",
  openSite: "打开站点 Open site →",

  filtersTitle: "筛选条件 Filters",
  filtersCurrent: "当前查看 Viewing",
  allSites: "全部站点 All Sites",
  startDate: "开始日期 Start",
  endDate: "结束日期 End",
  rangeTo: "至 to",

  revenueGoal: "收入目标 Revenue Goal",
  revenueGoalSub: "距离目标还有多远 Progress to goal",
  targetAmount: "目标金额 Target",
  estimatedRevenue: "估算已收 Est. Revenue",
  estimatedHint: "每次付费估算 Est. per purchase",
  progress: "完成度 Progress",
  daysLeft: "剩余天数 Days Left",
  deadline: "截止 Due",

  sprintTitle: "还剩 {days} 天冲刺 · {days}d Revenue Sprint",
  sprintSub: "目标 $20 = Cursor 续费 · 需要真实付费订阅",
  sprintNeed: "还需付费 Need purchases",
  sprintGap: "还差金额 Gap",
  sprintBlockers: "卡点 Blockers",
  sprintLive: "现在能收钱 Live checkout — 优先推广",
  sprintActions: "今天就做 Do today",
  sprintPromote: "推广 Promote",
  sprintShare: "一键发帖 Share posts（打开发帖页）",
  sprintAutoPromo: "Reddit 自动发帖需配置 GitHub Secrets → docs/SOCIAL-PROMO-SETUP.md",

  periodData: "数据 Metrics",
  periodDataSub: "以下数字均按所选日期范围统计 Filtered by date range",
  siteCount: "站点数 Sites",
  activeSites: "有流量的站 Sites with Traffic",
  activeSitesHint: "该时段内有浏览 PV > 0 in period",
  payingSites: "有付费的站 Paying Sites",
  estimatedIncome: "估算收入 Est. Income",

  funnelTitle: "转化漏斗 Conversion Funnel",
  funnelSub: "看访客在哪一步流失最多 Where visitors drop off",
  funnelVisitTrial: "浏览→试用 View→Trial",
  funnelTrialCheckout: "试用→结账 Trial→Checkout",
  funnelCheckoutPurchase: "结账→付费 Checkout→Purchase",
  funnelVisitCheckout: "浏览→结账 View→Checkout",
  funnelVisitPurchase: "浏览→付费 View→Purchase",
  funnelVisitorPurchase: "访客→付费 Visitor→Purchase",

  promoTitle: "推广效果 Promotions",
  promoSub: "自动发帖记录 + UTM 带来的访问量（可溯源到具体帖子）",
  promoTotalPosts: "累计发帖 Posts",
  promoUtmVisits: "推广带来访问 UTM Visits",
  promoLastPost: "上次发帖 Last post",
  promoChannel: "渠道 Channel",
  promoVisits: "访问 Visits",
  promoNoUtm: "该时段暂无 UTM 推广流量。发帖时请带 ?utm_source=reddit 等参数。",
  promoNoPosts: "暂无发帖记录。配置 Reddit Secrets 后 CI 会自动推广。",

  healthTitle: "站点健康巡检 Health Watch",
  healthSub: "每小时自动测试核心功能、付款链路与看板管道；异常时自动 redeploy",
  healthOk: "全部正常 All clear",
  healthFail: "存在异常 Failures",
  healthLastRun: "上次巡检",
  healthPass: "通过 Pass",
  healthWarn: "警告 Warn",
  healthFailCount: "失败 Fail",
  healthAllClear: "最近一轮巡检无失败项。",
  promoPostTime: "发帖时间",
  promoPostPlatform: "平台",
  promoPostTitle: "标题",
  promoPostLink: "链接",
  promoViewPost: "查看帖子",

  visitorTitle: "访客画像分析 Visitor Insights",
  visitorSub: "来源、设备、语言、时段与购买意向 Source, device, locale & intent",
  visitorTableTitle: "访客明细表 Live Visitors",
  visitorTableSub: "实时更新每位访客的 ID、站点、路径、来源与设备信息",
  visitorTableEmpty: "该时段暂无访客记录 No visitors in this period",
  visitorColId: "访客 ID",
  visitorColSite: "站点 Site",
  visitorColLastSeen: "最近访问 Last seen",
  visitorColPv: "浏览次数 PV",
  visitorColPath: "最近路径 Path",
  visitorColReferrer: "来源 Referrer",
  visitorColDevice: "设备 Device",
  visitorColLocale: "语言 Locale",
  visitorColTimezone: "时区 Timezone",
  visitorColUtm: "UTM",
  newVisitors: "第一次来 New",
  returningVisitors: "再次访问 Returning",
  deviceChart: "使用设备 Devices",
  intentChart: "购买意向分层 Intent",
  intentBrowse: "只看了看 Browse only",
  intentTrial: "想试用 Trial intent",
  intentCheckout: "想付款 Checkout intent",
  intentPaid: "已经付费 Paid",
  referrers: "访客从哪来 Referrers",
  locales: "使用语言 Languages",
  timezones: "所在时区 Timezones",
  utmSources: "推广链接来源 UTM Source",
  hours: "活跃时段 Peak Hours (CST)",
  landingPages: "从哪个页面进入 Landing Pages",
  noAudienceData: "该时段暂无画像数据 No audience data in this period",
  noDataYet: "暂无 N/A",
  peopleUnit: "人 visitors",
  newVsReturningTitle: "新老访客 New vs Returning",
  unknownUtm: "未知推广来源 Unknown UTM",

  seoTitle: "搜索优化健康度 SEO Health",
  seoSub: "影响自然搜索流量能否持续增长 Organic growth readiness",
  stripeSub: "Polar API 已配 = 每站独立回调；仅静态链接则付完跳 ai-headshots",

  topSitesTitle: "流量排名 Top Traffic",
  topSitesSub: "优先推广排名靠前的站点 Focus on top performers",
  siteColumn: "站点 Site",

  allSitesTitle: "全部站点 All Sites",
  allSitesSub: "按所选时段浏览次数排序 Sorted by pageviews in period",

  footer: "每日站点工厂 Daily Sites Factory · 实时数据看板 Live Dashboard",

  siteSeoScore: "搜索优化 SEO",
  siteGuides: "篇指南 guides",
  seoSitemapOk: "✓ 站点地图 Sitemap",
  seoSitemapFail: "✗ 站点地图 Sitemap",
  seoRobotsOk: "✓ 爬虫规则 Robots",
  seoRobotsFail: "✗ 爬虫规则 Robots",
  funnelBrowseTrial: "浏览→试用 View→Trial",
  funnelTrialCheckoutShort: "试用→结账 Trial→Checkout",
  funnelCheckoutPaid: "结账→付费 Checkout→Purchase",
  funnelBrowsePaid: "浏览→付费 View→Purchase",
  funnelVisitorPaid: "访客→付费 Visitor→Purchase",
  purchaseCountHint: "次付费 purchases ×",
  requestFailed: "请求失败 Request failed",
  loadFailed: "加载失败 Load failed",
} as const;

export const INTENT_SEGMENT_LABELS: Record<string, string> = {
  browse: DASHBOARD_COPY.intentBrowse,
  trial: DASHBOARD_COPY.intentTrial,
  checkout: DASHBOARD_COPY.intentCheckout,
  paid: DASHBOARD_COPY.intentPaid,
};

export function formatRangeLabelBilingual(range: { from: string; to: string }) {
  if (range.from === range.to) return range.from;
  return `${range.from} ${DASHBOARD_COPY.rangeTo} ${range.to}`;
}

export function estimatedPurchaseHint(priceUsd: number) {
  return `每次付费按 $${priceUsd} 估算 · Est. $${priceUsd} per purchase`;
}
