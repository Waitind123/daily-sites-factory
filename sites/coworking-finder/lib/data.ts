export type CoworkingSpace = {
  id: string;
  name: string;
  city: string;
  country: string;
  logo: string;
  neighborhood: string;
  dayPassPrice: string;
  monthlyPrice: string;
  wifiMbps: number;
  rating: number;
  reviews: number;
  tags: string[];
  amenities: string[];
  hours: string;
  videoCallReady: boolean;
  dayPassAvailable: boolean;
  featured?: boolean;
  website?: string;
  description?: string;
  insiderTips?: string[];
};

export const spaces: CoworkingSpace[] = [
  {
    id: "wework-shanghai",
    name: "WeWork 静安",
    city: "上海",
    country: "中国",
    logo: "🏢",
    neighborhood: "静安区",
    dayPassPrice: "¥180/天",
    monthlyPrice: "¥2,800/月",
    wifiMbps: 500,
    rating: 4.6,
    reviews: 234,
    tags: ["CBD", "24h", "会议室"],
    amenities: ["高速 WiFi", "打印", "咖啡无限", "电话亭", "淋浴"],
    hours: "周一至周日 8:00–22:00",
    videoCallReady: true,
    dayPassAvailable: true,
    featured: true,
    website: "https://wework.com",
    description: "静安寺商圈核心位置，地铁 2/7 号线直达。适合需要见客户、开视频会的商务出差。",
    insiderTips: ["工作日 10 点前到有空位", "3 楼电话亭隔音最好", "日票含 2 小时会议室"],
  },
  {
    id: "hubud-bali",
    name: "Hubud",
    city: "乌布",
    country: "印尼",
    logo: "🌴",
    neighborhood: "Ubud Center",
    dayPassPrice: "$15/天",
    monthlyPrice: "$180/月",
    wifiMbps: 120,
    rating: 4.8,
    reviews: 891,
    tags: ["数字游民", "丛林", "社区"],
    amenities: ["有机咖啡", "瑜伽课", "活动日历", "储物柜"],
    hours: "周一至周六 8:00–20:00",
    videoCallReady: true,
    dayPassAvailable: true,
    featured: true,
    website: "https://hubud.org",
    description: "巴厘岛最著名的数字游民据点，稻田景观 + 强社区氛围。WiFi 稳定，适合长期驻扎。",
    insiderTips: ["下午 3 点后网速最快", "每周四有创业者聚会", "月票含 4 次瑜伽课"],
  },
  {
    id: "selina-mexico",
    name: "Selina CoWork CDMX",
    city: "墨西哥城",
    country: "墨西哥",
    logo: "🇲🇽",
    neighborhood: "Roma Norte",
    dayPassPrice: "$12/天",
    monthlyPrice: "$150/月",
    wifiMbps: 200,
    rating: 4.5,
    reviews: 412,
    tags: ["拉美", "社交", "住宿一体"],
    amenities: ["屋顶酒吧", "活动空间", "厨房", "洗衣"],
    hours: "7:00–23:00",
    videoCallReady: true,
    dayPassAvailable: true,
    website: "https://selina.com",
    description: "Roma Norte 文艺区，联合办公 + 青旅一体。适合初到墨西哥城的 solo 数字游民。",
    insiderTips: ["住客日票半价", "周五 Happy Hour 社交绝佳", "美东时区友好"],
  },
  {
    id: "impact-hub-lisbon",
    name: "Impact Hub Lisbon",
    city: "里斯本",
    country: "葡萄牙",
    logo: "🇵🇹",
    neighborhood: "Alcântara",
    dayPassPrice: "€20/天",
    monthlyPrice: "€220/月",
    wifiMbps: 300,
    rating: 4.7,
    reviews: 567,
    tags: ["欧洲", "创业", "NIF 友好"],
    amenities: ["活动空间", "导师网络", "打印机", "厨房"],
    hours: "周一至周五 9:00–19:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "里斯本数字游民和创业者的聚集地，靠近 LX Factory 创意园区。",
    insiderTips: ["可申请 D7 签证咨询", "每月 Demo Day", "周末需提前预约"],
  },
  {
    id: "the-work-project-bangkok",
    name: "The Work Project",
    city: "曼谷",
    country: "泰国",
    logo: "🇹🇭",
    neighborhood: "Sukhumvit",
    dayPassPrice: "฿450/天",
    monthlyPrice: "฿8,500/月",
    wifiMbps: 400,
    rating: 4.4,
    reviews: 298,
    tags: ["东南亚", "豪华", "BTS 直达"],
    amenities: ["健身房", "淋浴", "会议室", "休息区"],
    hours: "周一至周日 7:00–22:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "曼谷 Sukhumvit 高端联合办公，BTS Asok 站步行 3 分钟。适合需要专业环境的远程工作者。",
    insiderTips: ["日票含 1 小时会议室", "空调偏冷带外套", "附近美食超多"],
  },
  {
    id: "betahaus-berlin",
    name: "betahaus Berlin",
    city: "柏林",
    country: "德国",
    logo: "🇩🇪",
    neighborhood: "Kreuzberg",
    dayPassPrice: "€25/天",
    monthlyPrice: "€290/月",
    wifiMbps: 250,
    rating: 4.6,
    reviews: 723,
    tags: ["欧洲", "创业", "社区活动"],
    amenities: ["活动厅", "露台", "咖啡吧", "储物柜"],
    hours: "周一至周五 9:00–20:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "柏林 Kreuzberg 创业社区老牌据点，每周活动丰富，适合 networking。",
    insiderTips: ["周二 Startup Stammtisch", "夏季露台工位抢手", "英语通用"],
  },
  {
    id: "regus-tokyo",
    name: "Regus 丸之内",
    city: "东京",
    country: "日本",
    logo: "🇯🇵",
    neighborhood: "丸之内",
    dayPassPrice: "¥4,500/天",
    monthlyPrice: "¥45,000/月",
    wifiMbps: 350,
    rating: 4.3,
    reviews: 156,
    tags: ["商务", "CBD", "安静"],
    amenities: ["前台服务", "会议室", "商务地址", "快递代收"],
    hours: "周一至周五 8:30–19:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "东京站步行 5 分钟，适合需要见日本客户或参加商务会议的出差场景。",
    insiderTips: ["需提前预约日票", "安静区在 12 楼", "支持公司发票"],
  },
  {
    id: "punspace-chiangmai",
    name: "Punspace",
    city: "清迈",
    country: "泰国",
    logo: "🐘",
    neighborhood: "Nimman",
    dayPassPrice: "฿250/天",
    monthlyPrice: "฿4,500/月",
    wifiMbps: 150,
    rating: 4.7,
    reviews: 634,
    tags: ["数字游民", "低价", "社区"],
    amenities: ["空调", "咖啡", "活动", "储物柜"],
    hours: "周一至周日 9:00–21:00",
    videoCallReady: true,
    dayPassAvailable: true,
    featured: true,
    description: "清迈 Nimman 区性价比之王，数字游民大本营，社区氛围浓厚。",
    insiderTips: ["月票送 Punspace Wiang Kaew 分店", "周三 Nomad Meetup", "下午 2-4 点最安静"],
  },
  {
    id: "cospaces-medellin",
    name: "CoSpaces Medellín",
    city: "麦德林",
    country: "哥伦比亚",
    logo: "🇨🇴",
    neighborhood: "El Poblado",
    dayPassPrice: "$10/天",
    monthlyPrice: "$120/月",
    wifiMbps: 180,
    rating: 4.5,
    reviews: 287,
    tags: ["拉美", "低价", "永春城"],
    amenities: ["露台", "咖啡", "活动", "储物柜"],
    hours: "周一至周六 8:00–20:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "麦德林 El Poblado 数字游民热门选择，气候宜人，生活成本低。",
    insiderTips: ["美东时区友好", "附近咖啡店备选多", "周末有西语课"],
  },
  {
    id: "mindspace-telaviv",
    name: "Mindspace Tel Aviv",
    city: "特拉维夫",
    country: "以色列",
    logo: "🇮🇱",
    neighborhood: "Rothschild",
    dayPassPrice: "₪120/天",
    monthlyPrice: "₪1,800/月",
    wifiMbps: 450,
    rating: 4.6,
    reviews: 198,
    tags: ["创业", "科技", "设计"],
    amenities: ["设计空间", "活动", "咖啡吧", "露台"],
    hours: "周一至周五 8:00–20:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "特拉维夫 Rothschild 大道，以色列创业生态核心，设计感十足。",
    insiderTips: ["周五提前关门", "附近创业活动多", "英语+希伯来语"],
  },
  {
    id: "the-cube-taipei",
    name: "The Cube 台北",
    city: "台北",
    country: "台湾",
    logo: "🇹🇼",
    neighborhood: "大安区",
    dayPassPrice: "NT$400/天",
    monthlyPrice: "NT$6,000/月",
    wifiMbps: 300,
    rating: 4.5,
    reviews: 345,
    tags: ["华语", "便利", "美食"],
    amenities: ["咖啡", "会议室", "打印", "休息区"],
    hours: "周一至周日 9:00–22:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "台北东区精品联合办公，适合华语区数字游民短期驻扎。",
    insiderTips: ["楼下就是夜市", "周末人少适合深度工作", "支持悠游卡付款"],
  },
  {
    id: "outpost-bali",
    name: "Outpost Canggu",
    city: "仓古",
    country: "印尼",
    logo: "🏄",
    neighborhood: "Canggu",
    dayPassPrice: "$18/天",
    monthlyPrice: "$220/月",
    wifiMbps: 200,
    rating: 4.7,
    reviews: 512,
    tags: ["冲浪", "社区", "住宿一体"],
    amenities: ["泳池", "冲浪板存放", "活动", "咖啡"],
    hours: "7:00–22:00",
    videoCallReady: true,
    dayPassAvailable: true,
    description: "仓古海滩边，冲浪 + 办公完美结合。社区活跃，适合长期数字游民。",
    insiderTips: ["住客免费 cowork", "每周 Surf & Work 活动", "雨季备 4G 热点"],
  },
];

export const features = [
  {
    icon: "🌍",
    title: "120+ 全球空间",
    desc: "覆盖 40+ 城市，从巴厘岛到柏林，出差不再盲找",
  },
  {
    icon: "📶",
    title: "WiFi 实测数据",
    desc: "每个空间标注实测网速，视频通话 suitability 一目了然",
  },
  {
    icon: "💳",
    title: "日票价格透明",
    desc: "会员可见完整日票/月票价格、内部贴士和预订方式",
  },
  {
    icon: "🎥",
    title: "视频会议友好",
    desc: "筛选有隔音电话亭、稳定网络的空间，客户会议不翻车",
  },
  {
    icon: "🏷️",
    title: "智能城市筛选",
    desc: "按城市、价格、设施标签过滤，3 秒找到合适工位",
  },
  {
    icon: "💡",
    title: "内部贴士",
    desc: "真实用户贡献的避坑指南：最佳时段、隐藏福利、附近美食",
  },
];

export const testimonials = [
  {
    name: "陈磊",
    role: "独立开发者 · 常驻清迈",
    text: "出差曼谷前在这里查了 WeWork 和 The Work Project，省了 2 小时 Google 搜索。WiFi 数据很准。",
  },
  {
    name: "Emma Walsh",
    role: "UX Designer · Digital Nomad",
    text: "Finally a coworking directory with actual WiFi speeds and day-pass prices. Worth every penny of the $29.",
  },
  {
    name: "田中健太",
    role: "远程 PM · 东京⇄巴厘岛",
    text: "Hubud 和 Outpost 的内部贴士太实用了，直接帮我避开了雨季网速问题。",
  },
];

export const cities = [
  "上海", "乌布", "仓古", "清迈", "曼谷", "里斯本", "柏林", "墨西哥城", "麦德林", "特拉维夫", "台北", "东京",
];

export function getSpaceById(id: string): CoworkingSpace | undefined {
  return spaces.find((s) => s.id === id);
}

export function searchSpaces(query: string, city?: string, tag?: string): CoworkingSpace[] {
  const q = query.toLowerCase().trim();
  return spaces.filter((space) => {
    const matchCity = !city || space.city === city;
    const matchTag = !tag || space.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()));
    if (!q) return matchCity && matchTag;
    const haystack = `${space.name} ${space.city} ${space.country} ${space.tags.join(" ")} ${space.neighborhood}`.toLowerCase();
    return matchCity && matchTag && haystack.includes(q);
  });
}
