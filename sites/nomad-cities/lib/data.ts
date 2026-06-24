export interface City {
  rank: number;
  name: string;
  country: string;
  flag: string;
  score: number;
  cost: number;
  internet: number;
  safety: number;
  visa: string;
  locked?: boolean;
}

export const cities: City[] = [
  { rank: 1, name: "清迈", country: "泰国", flag: "🇹🇭", score: 92, cost: 8500, internet: 45, safety: 78, visa: "落地签/DTV" },
  { rank: 2, name: "里斯本", country: "葡萄牙", flag: "🇵🇹", score: 89, cost: 12000, internet: 120, safety: 85, visa: "D7 数字游民" },
  { rank: 3, name: "巴厘岛", country: "印尼", flag: "🇮🇩", score: 87, cost: 7500, internet: 35, safety: 72, visa: "B211A" },
  { rank: 4, name: "墨西哥城", country: "墨西哥", flag: "🇲🇽", score: 85, cost: 9000, internet: 55, safety: 65, visa: "180天免签" },
  { rank: 5, name: "布达佩斯", country: "匈牙利", flag: "🇭🇺", score: 84, cost: 8000, internet: 80, safety: 82, visa: "白卡" },
  { rank: 6, name: "台北", country: "台湾", flag: "🇹🇼", score: 83, cost: 11000, internet: 200, safety: 90, visa: "需签证" },
  { rank: 7, name: "巴塞罗那", country: "西班牙", flag: "🇪🇸", score: 82, cost: 13000, internet: 100, safety: 80, visa: "申根" },
  { rank: 8, name: "东京", country: "日本", flag: "🇯🇵", score: 81, cost: 15000, internet: 180, safety: 95, visa: "需签证" },
  { rank: 9, name: "迪拜", country: "阿联酋", flag: "🇦🇪", score: 80, cost: 14000, internet: 150, safety: 88, visa: "远程工签" },
  { rank: 10, name: "波哥大", country: "哥伦比亚", flag: "🇨🇴", score: 79, cost: 6500, internet: 40, safety: 60, visa: "180天免签" },
  { rank: 11, name: "布拉格", country: "捷克", flag: "🇨🇿", score: 78, cost: 9500, internet: 90, safety: 84, visa: "申根", locked: true },
  { rank: 12, name: "吉隆坡", country: "马来西亚", flag: "🇲🇾", score: 77, cost: 7000, internet: 60, safety: 75, visa: "DE Rantau", locked: true },
  { rank: 13, name: "雅典", country: "希腊", flag: "🇬🇷", score: 76, cost: 8500, internet: 70, safety: 78, visa: "数字游民签", locked: true },
  { rank: 14, name: "布宜诺斯艾利斯", country: "阿根廷", flag: "🇦🇷", score: 75, cost: 5500, internet: 30, safety: 62, visa: "90天免签", locked: true },
  { rank: 15, name: "首尔", country: "韩国", flag: "🇰🇷", score: 74, cost: 12000, internet: 250, safety: 92, visa: "K-ETA", locked: true },
];

export const features = [
  { icon: "📊", title: "200+ 城市数据", desc: "生活成本、网速、安全、签证政策一表看清" },
  { icon: "🔄", title: "每日更新", desc: "汇率、租金、网速实测数据自动刷新" },
  { icon: "💬", title: "会员社区", desc: "在榜城市实时交流，问签证、找合租" },
  { icon: "🔔", title: "价格提醒", desc: "目标城市成本变动邮件通知" },
];

export const faq = [
  {
    question: "数据从哪里来？",
    answer:
      "综合 Numbeo、Speedtest、各国签证官网和游民社区实测数据，每日自动刷新。200+ 城市覆盖亚洲、欧洲、拉美主要游民目的地。",
  },
  {
    question: "前 10 名免费看，会员解锁什么？",
    answer:
      "免费用户可查看前 10 名城市排名。会员 ¥699/年解锁全部 200+ 城市、历史趋势、CSV 导出和会员社区。",
  },
  {
    question: "为什么没有免费档？",
    answer:
      "数据采集和更新有真实成本。付费用户 = 高质量社区，没有广告和垃圾信息。一人维护，简单定价才能持续运营。",
  },
  {
    question: "支持哪些支付方式？",
    answer: "支持信用卡、支付宝和微信支付。年度会员 ¥699，无自动续费。",
  },
];
