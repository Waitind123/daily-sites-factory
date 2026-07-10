import type { Locale } from "./i18n-shared";

export interface City {
  rank: number;
  name: { en: string; zh: string };
  country: { en: string; zh: string };
  flag: string;
  score: number;
  cost: number;
  internet: number;
  safety: number;
  visa: { en: string; zh: string };
  locked?: boolean;
}

export const cities: City[] = [
  { rank: 1, name: { en: "Chiang Mai", zh: "清迈" }, country: { en: "Thailand", zh: "泰国" }, flag: "🇹🇭", score: 92, cost: 8500, internet: 45, safety: 78, visa: { en: "DTV / visa on arrival", zh: "落地签/DTV" } },
  { rank: 2, name: { en: "Lisbon", zh: "里斯本" }, country: { en: "Portugal", zh: "葡萄牙" }, flag: "🇵🇹", score: 89, cost: 12000, internet: 120, safety: 85, visa: { en: "D7 digital nomad", zh: "D7 数字游民" } },
  { rank: 3, name: { en: "Bali", zh: "巴厘岛" }, country: { en: "Indonesia", zh: "印尼" }, flag: "🇮🇩", score: 87, cost: 7500, internet: 35, safety: 72, visa: { en: "B211A", zh: "B211A" } },
  { rank: 4, name: { en: "Mexico City", zh: "墨西哥城" }, country: { en: "Mexico", zh: "墨西哥" }, flag: "🇲🇽", score: 85, cost: 9000, internet: 55, safety: 65, visa: { en: "180 days visa-free", zh: "180天免签" } },
  { rank: 5, name: { en: "Budapest", zh: "布达佩斯" }, country: { en: "Hungary", zh: "匈牙利" }, flag: "🇭🇺", score: 84, cost: 8000, internet: 80, safety: 82, visa: { en: "White Card", zh: "白卡" } },
  { rank: 6, name: { en: "Taipei", zh: "台北" }, country: { en: "Taiwan", zh: "台湾" }, flag: "🇹🇼", score: 83, cost: 11000, internet: 200, safety: 90, visa: { en: "Visa required", zh: "需签证" } },
  { rank: 7, name: { en: "Barcelona", zh: "巴塞罗那" }, country: { en: "Spain", zh: "西班牙" }, flag: "🇪🇸", score: 82, cost: 13000, internet: 100, safety: 80, visa: { en: "Schengen", zh: "申根" } },
  { rank: 8, name: { en: "Tokyo", zh: "东京" }, country: { en: "Japan", zh: "日本" }, flag: "🇯🇵", score: 81, cost: 15000, internet: 180, safety: 95, visa: { en: "Visa required", zh: "需签证" } },
  { rank: 9, name: { en: "Dubai", zh: "迪拜" }, country: { en: "UAE", zh: "阿联酋" }, flag: "🇦🇪", score: 80, cost: 14000, internet: 150, safety: 88, visa: { en: "Remote work visa", zh: "远程工签" } },
  { rank: 10, name: { en: "Bogotá", zh: "波哥大" }, country: { en: "Colombia", zh: "哥伦比亚" }, flag: "🇨🇴", score: 79, cost: 6500, internet: 40, safety: 60, visa: { en: "180 days visa-free", zh: "180天免签" } },
  { rank: 11, name: { en: "Prague", zh: "布拉格" }, country: { en: "Czechia", zh: "捷克" }, flag: "🇨🇿", score: 78, cost: 9500, internet: 90, safety: 84, visa: { en: "Schengen", zh: "申根" }, locked: true },
  { rank: 12, name: { en: "Kuala Lumpur", zh: "吉隆坡" }, country: { en: "Malaysia", zh: "马来西亚" }, flag: "🇲🇾", score: 77, cost: 7000, internet: 60, safety: 75, visa: { en: "DE Rantau", zh: "DE Rantau" }, locked: true },
  { rank: 13, name: { en: "Athens", zh: "雅典" }, country: { en: "Greece", zh: "希腊" }, flag: "🇬🇷", score: 76, cost: 8500, internet: 70, safety: 78, visa: { en: "Digital nomad visa", zh: "数字游民签" }, locked: true },
  { rank: 14, name: { en: "Buenos Aires", zh: "布宜诺斯艾利斯" }, country: { en: "Argentina", zh: "阿根廷" }, flag: "🇦🇷", score: 75, cost: 5500, internet: 30, safety: 62, visa: { en: "90 days visa-free", zh: "90天免签" }, locked: true },
  { rank: 15, name: { en: "Seoul", zh: "首尔" }, country: { en: "South Korea", zh: "韩国" }, flag: "🇰🇷", score: 74, cost: 12000, internet: 250, safety: 92, visa: { en: "K-ETA", zh: "K-ETA" }, locked: true },
];

export function getCityByRank(rank: number): City | undefined {
  return cities.find((c) => c.rank === rank);
}

export function formatCost(cost: number, locale: Locale): string {
  if (locale === "zh") return `¥${cost.toLocaleString("zh-CN")}`;
  const usd = Math.round(cost / 7);
  return `$${usd.toLocaleString("en-US")}`;
}

export function localizeCity(city: City, locale: Locale) {
  return {
    rank: city.rank,
    name: city.name[locale],
    country: city.country[locale],
    flag: city.flag,
    score: city.score,
    cost: city.cost,
    costLabel: formatCost(city.cost, locale),
    internet: city.internet,
    safety: city.safety,
    visa: city.visa[locale],
    locked: city.locked ?? false,
  };
}

export type LocalizedCity = ReturnType<typeof localizeCity>;

export const features = {
  en: [
    { icon: "📊", title: "200+ city data", desc: "Cost, internet, safety, visa — one sortable table" },
    { icon: "🔄", title: "Daily updates", desc: "Exchange rates, rent, and speed tests auto-refreshed" },
    { icon: "💬", title: "Member community", desc: "Ask visa questions and find roommates in target cities" },
    { icon: "🔔", title: "Price alerts", desc: "Email when your target city's cost shifts significantly" },
  ],
  zh: [
    { icon: "📊", title: "200+ 城市数据", desc: "生活成本、网速、安全、签证政策一表看清" },
    { icon: "🔄", title: "每日更新", desc: "汇率、租金、网速实测数据自动刷新" },
    { icon: "💬", title: "会员社区", desc: "在榜城市实时交流，问签证、找合租" },
    { icon: "🔔", title: "价格提醒", desc: "目标城市成本变动邮件通知" },
  ],
} as const;

export function getFeatures(locale: Locale) {
  return features[locale];
}
