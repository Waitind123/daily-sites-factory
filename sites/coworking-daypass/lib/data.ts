export type DayPassVenue = {
  id: string;
  name: string;
  city: string;
  country: string;
  logo: string;
  neighborhood: string;
  dayPassPrice: string;
  wifiMbps: number;
  rating: number;
  reviews: number;
  tags: string[];
  amenities: string[];
  hours: string;
  videoCallReady: boolean;
  spotsLeftToday: number;
  totalSpots: number;
  instantBook: boolean;
  featured?: boolean;
  bookingUrl?: string;
  description?: string;
  bookingTips?: string[];
};

export const venues: DayPassVenue[] = [
  {
    id: "wework-shanghai",
    name: "WeWork 静安",
    city: "上海",
    country: "中国",
    logo: "🏢",
    neighborhood: "静安区",
    dayPassPrice: "¥180/天",
    wifiMbps: 500,
    rating: 4.6,
    reviews: 234,
    tags: ["CBD", "即时预订", "视频会议"],
    amenities: ["高速 WiFi", "打印", "咖啡无限", "电话亭", "淋浴"],
    hours: "周一至周日 8:00–22:00",
    videoCallReady: true,
    spotsLeftToday: 8,
    totalSpots: 40,
    instantBook: true,
    featured: true,
    bookingUrl: "https://wework.com",
    description: "静安寺商圈核心位置，支持当日 walk-in 和在线日票预订。适合出差见客户、开视频会。",
    bookingTips: ["工作日 10 点前库存充足", "日票含 2 小时会议室", "3 楼电话亭隔音最好"],
  },
  {
    id: "hubud-bali",
    name: "Hubud",
    city: "乌布",
    country: "印尼",
    logo: "🌴",
    neighborhood: "Ubud Center",
    dayPassPrice: "$15/天",
    wifiMbps: 120,
    rating: 4.8,
    reviews: 891,
    tags: ["数字游民", "丛林", "社区"],
    amenities: ["有机咖啡", "瑜伽课", "活动日历", "储物柜"],
    hours: "周一至周六 8:00–20:00",
    videoCallReady: true,
    spotsLeftToday: 12,
    totalSpots: 30,
    instantBook: true,
    featured: true,
    bookingUrl: "https://hubud.org",
    description: "巴厘岛数字游民据点，日票可当天预订。稻田景观 + 强社区氛围。",
    bookingTips: ["下午 3 点后网速最快", "建议提前 1 天预订周末", "月票含 4 次瑜伽课"],
  },
  {
    id: "selina-mexico",
    name: "Selina CoWork CDMX",
    city: "墨西哥城",
    country: "墨西哥",
    logo: "🇲🇽",
    neighborhood: "Roma Norte",
    dayPassPrice: "$12/天",
    wifiMbps: 200,
    rating: 4.5,
    reviews: 412,
    tags: ["拉美", "社交", "住宿一体"],
    amenities: ["屋顶酒吧", "活动空间", "厨房", "洗衣"],
    hours: "7:00–23:00",
    videoCallReady: true,
    spotsLeftToday: 5,
    totalSpots: 25,
    instantBook: true,
    bookingUrl: "https://selina.com",
    description: "Roma Norte 文艺区，联合办公 + 青旅一体。住客日票半价。",
    bookingTips: ["住客日票半价", "周五 Happy Hour 社交绝佳", "美东时区友好"],
  },
  {
    id: "impact-hub-lisbon",
    name: "Impact Hub Lisbon",
    city: "里斯本",
    country: "葡萄牙",
    logo: "🇵🇹",
    neighborhood: "Alcântara",
    dayPassPrice: "€20/天",
    wifiMbps: 300,
    rating: 4.7,
    reviews: 567,
    tags: ["欧洲", "创业", "NIF 友好"],
    amenities: ["活动空间", "导师网络", "打印机", "厨房"],
    hours: "周一至周五 9:00–19:00",
    videoCallReady: true,
    spotsLeftToday: 3,
    totalSpots: 20,
    instantBook: false,
    bookingUrl: "https://lisbon.impacthub.net",
    description: "里斯本数字游民聚集地，周末需提前预约日票。",
    bookingTips: ["周末需提前 24h 预订", "每月 Demo Day", "可申请 D7 签证咨询"],
  },
  {
    id: "the-work-project-bangkok",
    name: "The Work Project",
    city: "曼谷",
    country: "泰国",
    logo: "🇹🇭",
    neighborhood: "Sukhumvit",
    dayPassPrice: "฿450/天",
    wifiMbps: 400,
    rating: 4.4,
    reviews: 298,
    tags: ["东南亚", "豪华", "BTS 直达"],
    amenities: ["健身房", "淋浴", "会议室", "休息区"],
    hours: "周一至周日 7:00–22:00",
    videoCallReady: true,
    spotsLeftToday: 6,
    totalSpots: 35,
    instantBook: true,
    bookingUrl: "https://theworkproject.com",
    description: "曼谷 Sukhumvit 高端联合办公，BTS Asok 站步行 3 分钟，支持当日预订。",
    bookingTips: ["日票含 1 小时会议室", "空调偏冷带外套", "附近美食超多"],
  },
  {
    id: "betahaus-berlin",
    name: "betahaus Berlin",
    city: "柏林",
    country: "德国",
    logo: "🇩🇪",
    neighborhood: "Kreuzberg",
    dayPassPrice: "€25/天",
    wifiMbps: 250,
    rating: 4.6,
    reviews: 723,
    tags: ["欧洲", "创业", "社区活动"],
    amenities: ["活动厅", "露台", "咖啡吧", "储物柜"],
    hours: "周一至周五 9:00–20:00",
    videoCallReady: true,
    spotsLeftToday: 10,
    totalSpots: 50,
    instantBook: true,
    bookingUrl: "https://betahaus.com",
    description: "柏林 Kreuzberg 创业社区老牌据点，日票可 walk-in 或在线预订。",
    bookingTips: ["周二 Startup Stammtisch", "夏季露台工位抢手", "英语通用"],
  },
  {
    id: "punspace-chiangmai",
    name: "Punspace",
    city: "清迈",
    country: "泰国",
    logo: "🐘",
    neighborhood: "Nimman",
    dayPassPrice: "฿250/天",
    wifiMbps: 150,
    rating: 4.7,
    reviews: 634,
    tags: ["数字游民", "低价", "社区"],
    amenities: ["空调", "咖啡", "活动", "储物柜"],
    hours: "周一至周日 9:00–21:00",
    videoCallReady: true,
    spotsLeftToday: 15,
    totalSpots: 45,
    instantBook: true,
    featured: true,
    bookingUrl: "https://punspace.com",
    description: "清迈 Nimman 性价比之王，日票随时可订，数字游民大本营。",
    bookingTips: ["月票送 Wiang Kaew 分店", "周三 Nomad Meetup", "下午 2-4 点最安静"],
  },
  {
    id: "the-cube-taipei",
    name: "The Cube 台北",
    city: "台北",
    country: "台湾",
    logo: "🇹🇼",
    neighborhood: "大安区",
    dayPassPrice: "NT$400/天",
    wifiMbps: 300,
    rating: 4.5,
    reviews: 345,
    tags: ["华语", "便利", "美食"],
    amenities: ["咖啡", "会议室", "打印", "休息区"],
    hours: "周一至周日 9:00–22:00",
    videoCallReady: true,
    spotsLeftToday: 7,
    totalSpots: 28,
    instantBook: true,
    bookingUrl: "https://thecube.com.tw",
    description: "台北东区精品联合办公，支持当日 walk-in 和在线日票。",
    bookingTips: ["楼下就是夜市", "周末人少适合深度工作", "支持悠游卡付款"],
  },
  {
    id: "outpost-bali",
    name: "Outpost Canggu",
    city: "仓古",
    country: "印尼",
    logo: "🏄",
    neighborhood: "Canggu",
    dayPassPrice: "$18/天",
    wifiMbps: 200,
    rating: 4.7,
    reviews: 512,
    tags: ["冲浪", "社区", "住宿一体"],
    amenities: ["泳池", "冲浪板存放", "活动", "咖啡"],
    hours: "7:00–22:00",
    videoCallReady: true,
    spotsLeftToday: 4,
    totalSpots: 22,
    instantBook: true,
    bookingUrl: "https://outpost.co",
    description: "仓古海滩边，冲浪 + 办公完美结合。住客免费 cowork。",
    bookingTips: ["住客免费 cowork", "每周 Surf & Work 活动", "雨季备 4G 热点"],
  },
  {
    id: "mindspace-telaviv",
    name: "Mindspace Tel Aviv",
    city: "特拉维夫",
    country: "以色列",
    logo: "🇮🇱",
    neighborhood: "Rothschild",
    dayPassPrice: "₪120/天",
    wifiMbps: 450,
    rating: 4.6,
    reviews: 198,
    tags: ["创业", "科技", "设计"],
    amenities: ["设计空间", "活动", "咖啡吧", "露台"],
    hours: "周一至周五 8:00–20:00",
    videoCallReady: true,
    spotsLeftToday: 2,
    totalSpots: 18,
    instantBook: false,
    bookingUrl: "https://mindspace.me",
    description: "特拉维夫 Rothschild 大道，以色列创业生态核心。日票需提前预订。",
    bookingTips: ["周五提前关门", "附近创业活动多", "英语+希伯来语"],
  },
];

export const features = [
  {
    icon: "⚡",
    title: "当日可用库存",
    desc: "实时显示今日剩余工位数，出差落地不再扑空",
  },
  {
    icon: "📶",
    title: "WiFi 实测验证",
    desc: "每个场地标注实测网速，视频会议 suitability 一目了然",
  },
  {
    icon: "🎫",
    title: "一键预订日票",
    desc: "会员可生成预订确认单，含地址、价格和入场贴士",
  },
  {
    icon: "🎥",
    title: "视频会议友好",
    desc: "筛选有隔音电话亭、稳定网络的空间，客户会议不翻车",
  },
  {
    icon: "🌍",
    title: "40+ 城市覆盖",
    desc: "从清迈到柏林，出差数字游民全球日票一站搞定",
  },
  {
    icon: "💡",
    title: "预订贴士",
    desc: "真实用户贡献：最佳时段、隐藏福利、walk-in 攻略",
  },
];

export const testimonials = [
  {
    name: "李薇",
    role: "产品经理 · 频繁出差",
    text: "落地曼谷当晚就要开客户会，日票通帮我 5 分钟找到 The Work Project 当日有空位，WiFi 数据很准。",
  },
  {
    name: "Marcus Chen",
    role: "Indie Hacker · Digital Nomad",
    text: "Deskpass is US-only. This shows real availability for Asia and Europe day passes. Worth $9.9.",
  },
  {
    name: "佐藤美咲",
    role: "设计师 · 东京⇄清迈",
    text: "Punspace 和 Hubud 的预订贴士太实用了，直接帮我避开了周末满座的情况。",
  },
];

export const cities = [
  "上海", "乌布", "仓古", "清迈", "曼谷", "里斯本", "柏林", "墨西哥城", "特拉维夫", "台北",
];

export function getVenueById(id: string): DayPassVenue | undefined {
  return venues.find((v) => v.id === id);
}

export function searchVenues(query: string, city?: string, tag?: string): DayPassVenue[] {
  const q = query.toLowerCase().trim();
  return venues.filter((venue) => {
    const matchCity = !city || venue.city === city;
    const matchTag = !tag || venue.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()));
    if (!q) return matchCity && matchTag;
    const haystack = `${venue.name} ${venue.city} ${venue.country} ${venue.tags.join(" ")} ${venue.neighborhood}`.toLowerCase();
    return matchCity && matchTag && haystack.includes(q);
  });
}

export function generateBookingConfirmation(venue: DayPassVenue) {
  const today = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const ref = `DP-${Date.now().toString(36).toUpperCase()}`;
  return {
    ref,
    date: today,
    venue: venue.name,
    city: `${venue.city}, ${venue.country}`,
    neighborhood: venue.neighborhood,
    price: venue.dayPassPrice,
    hours: venue.hours,
    wifiMbps: venue.wifiMbps,
    tips: venue.bookingTips ?? [],
    instantBook: venue.instantBook,
    bookingUrl: venue.bookingUrl,
  };
}
