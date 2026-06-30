/** 看板中文文案 — 避免英文缩写看不懂 */

export const METRIC = {
  pv: "浏览次数",
  uv: "独立访客",
  trial: "试用",
  checkout: "结账",
  purchase: "付费",
} as const;

export const DEVICE_LABELS: Record<string, string> = {
  mobile: "手机",
  desktop: "电脑",
  tablet: "平板",
  unknown: "未知设备",
};

export const LOCALE_LABELS: Record<string, string> = {
  zh: "中文",
  en: "英语",
  ja: "日语",
  ko: "韩语",
  fr: "法语",
  de: "德语",
  es: "西班牙语",
  unknown: "未知语言",
};

export function labelDevice(key: string) {
  return DEVICE_LABELS[key] || key;
}

export function labelLocale(key: string) {
  return LOCALE_LABELS[key] || `语言：${key}`;
}

export function labelHour(key: string) {
  const h = Number(String(key).replace(/\D/g, ""));
  if (Number.isNaN(h)) return key;
  if (h < 6) return `凌晨 ${h} 点`;
  if (h < 12) return `上午 ${h} 点`;
  if (h === 12) return "中午 12 点";
  if (h < 18) return `下午 ${h - 12} 点`;
  return `晚上 ${h - 12} 点`;
}

export const SEO_LABELS = {
  score: "搜索优化得分",
  excellent: "优秀站点（≥80分）",
  needsWork: "待优化站点（<50分）",
  sitemap: "站点地图正常",
  robots: "爬虫规则正常",
  og: "社交分享预览",
  jsonLd: "结构化数据",
  guides: "有指南文章",
  scanned: "已检测站点",
};

export const STRIPE_LABELS = {
  title: "在线收款（Stripe）",
  configured: "收款密钥",
  live: "真实收款站点",
  demo: "演示模式站点",
  fail: "检测失败",
};
