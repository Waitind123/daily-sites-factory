import type { Locale } from "./i18n-shared";

export type CoworkingSpace = {
  id: string;
  name: { en: string; zh: string };
  city: { en: string; zh: string };
  country: { en: string; zh: string };
  logo: string;
  neighborhood: { en: string; zh: string };
  dayPassPrice: { en: string; zh: string };
  dayPassUsd: number;
  wifiMbps: number;
  rating: number;
  reviews: number;
  tags: { en: string[]; zh: string[] };
  amenities: { en: string[]; zh: string[] };
  hours: { en: string; zh: string };
  videoCallReady: boolean;
  featured?: boolean;
  tip: { en: string; zh: string };
};

export const spaces: CoworkingSpace[] = [
  {
    id: "wework-shanghai",
    name: { en: "WeWork Jing'an", zh: "WeWork 静安" },
    city: { en: "Shanghai", zh: "上海" },
    country: { en: "China", zh: "中国" },
    logo: "🏢",
    neighborhood: { en: "Jing'an", zh: "静安区" },
    dayPassPrice: { en: "¥180/day", zh: "¥180/天" },
    dayPassUsd: 25,
    wifiMbps: 500,
    rating: 4.6,
    reviews: 234,
    tags: { en: ["CBD", "24h", "meeting rooms"], zh: ["CBD", "24小时", "会议室"] },
    amenities: {
      en: ["Fast WiFi", "Printing", "Unlimited coffee", "Phone booths", "Shower"],
      zh: ["高速 WiFi", "打印", "咖啡无限", "电话亭", "淋浴"],
    },
    hours: { en: "Mon–Sun 8:00–22:00", zh: "周一至周日 8:00–22:00" },
    videoCallReady: true,
    featured: true,
    tip: {
      en: "Arrive before 10am on weekdays for best seats. Floor 3 phone booths have best soundproofing.",
      zh: "工作日 10 点前到有空位。3 楼电话亭隔音最好。",
    },
  },
  {
    id: "hubud-bali",
    name: { en: "Hubud", zh: "Hubud" },
    city: { en: "Ubud", zh: "乌布" },
    country: { en: "Indonesia", zh: "印尼" },
    logo: "🌴",
    neighborhood: { en: "Ubud Center", zh: "乌布中心" },
    dayPassPrice: { en: "$15/day", zh: "$15/天" },
    dayPassUsd: 15,
    wifiMbps: 120,
    rating: 4.8,
    reviews: 891,
    tags: { en: ["nomad", "jungle", "community"], zh: ["数字游民", "丛林", "社区"] },
    amenities: {
      en: ["Organic coffee", "Yoga classes", "Events", "Lockers"],
      zh: ["有机咖啡", "瑜伽课", "活动", "储物柜"],
    },
    hours: { en: "Mon–Sat 8:00–20:00", zh: "周一至周六 8:00–20:00" },
    videoCallReady: true,
    featured: true,
    tip: {
      en: "Fastest WiFi after 3pm. Thursday founder meetups. Monthly pass includes 4 yoga classes.",
      zh: "下午 3 点后网速最快。周四有创业者聚会。月票含 4 次瑜伽课。",
    },
  },
  {
    id: "impact-hub-lisbon",
    name: { en: "Impact Hub Lisbon", zh: "Impact Hub 里斯本" },
    city: { en: "Lisbon", zh: "里斯本" },
    country: { en: "Portugal", zh: "葡萄牙" },
    logo: "🇵🇹",
    neighborhood: { en: "Alcântara", zh: "阿尔坎塔拉" },
    dayPassPrice: { en: "€20/day", zh: "€20/天" },
    dayPassUsd: 22,
    wifiMbps: 300,
    rating: 4.7,
    reviews: 567,
    tags: { en: ["Europe", "startup", "NIF friendly"], zh: ["欧洲", "创业", "NIF 友好"] },
    amenities: {
      en: ["Event space", "Mentor network", "Printer", "Kitchen"],
      zh: ["活动空间", "导师网络", "打印机", "厨房"],
    },
    hours: { en: "Mon–Fri 9:00–19:00", zh: "周一至周五 9:00–19:00" },
    videoCallReady: true,
    tip: {
      en: "Near LX Factory creative district. Monthly Demo Day. Book weekends in advance.",
      zh: "靠近 LX Factory 创意园区。每月 Demo Day。周末需提前预约。",
    },
  },
  {
    id: "the-work-project-bangkok",
    name: { en: "The Work Project", zh: "The Work Project" },
    city: { en: "Bangkok", zh: "曼谷" },
    country: { en: "Thailand", zh: "泰国" },
    logo: "🇹🇭",
    neighborhood: { en: "Sukhumvit", zh: "素坤逸" },
    dayPassPrice: { en: "฿450/day (~$14)", zh: "฿450/天（约 $14）" },
    dayPassUsd: 14,
    wifiMbps: 400,
    rating: 4.4,
    reviews: 298,
    tags: { en: ["Southeast Asia", "premium", "BTS"], zh: ["东南亚", "高端", "BTS 直达"] },
    amenities: {
      en: ["Gym", "Shower", "Meeting rooms", "Lounge"],
      zh: ["健身房", "淋浴", "会议室", "休息区"],
    },
    hours: { en: "Mon–Sun 7:00–22:00", zh: "周一至周日 7:00–22:00" },
    videoCallReady: true,
    featured: true,
    tip: {
      en: "Day pass includes 1hr meeting room. AC is cold — bring a jacket. Amazing food nearby.",
      zh: "日票含 1 小时会议室。空调偏冷带外套。附近美食超多。",
    },
  },
  {
    id: "punspace-chiangmai",
    name: { en: "Punspace", zh: "Punspace" },
    city: { en: "Chiang Mai", zh: "清迈" },
    country: { en: "Thailand", zh: "泰国" },
    logo: "🐘",
    neighborhood: { en: "Nimman", zh: "宁曼" },
    dayPassPrice: { en: "฿250/day (~$7)", zh: "฿250/天（约 $7）" },
    dayPassUsd: 7,
    wifiMbps: 150,
    rating: 4.7,
    reviews: 634,
    tags: { en: ["nomad", "budget", "community"], zh: ["数字游民", "低价", "社区"] },
    amenities: {
      en: ["AC", "Coffee", "Events", "Lockers"],
      zh: ["空调", "咖啡", "活动", "储物柜"],
    },
    hours: { en: "Mon–Sun 9:00–21:00", zh: "周一至周日 9:00–21:00" },
    videoCallReady: true,
    featured: true,
    tip: {
      en: "Best value in Chiang Mai. Wednesday Nomad Meetup. Quietest 2–4pm.",
      zh: "清迈性价比之王。周三 Nomad Meetup。下午 2-4 点最安静。",
    },
  },
  {
    id: "betahaus-berlin",
    name: { en: "betahaus Berlin", zh: "betahaus 柏林" },
    city: { en: "Berlin", zh: "柏林" },
    country: { en: "Germany", zh: "德国" },
    logo: "🇩🇪",
    neighborhood: { en: "Kreuzberg", zh: "克罗伊茨贝格" },
    dayPassPrice: { en: "€25/day", zh: "€25/天" },
    dayPassUsd: 27,
    wifiMbps: 250,
    rating: 4.6,
    reviews: 723,
    tags: { en: ["Europe", "startup", "events"], zh: ["欧洲", "创业", "社区活动"] },
    amenities: {
      en: ["Event hall", "Terrace", "Coffee bar", "Lockers"],
      zh: ["活动厅", "露台", "咖啡吧", "储物柜"],
    },
    hours: { en: "Mon–Fri 9:00–20:00", zh: "周一至周五 9:00–20:00" },
    videoCallReady: true,
    tip: {
      en: "Tuesday Startup Stammtisch. Terrace seats popular in summer. English widely spoken.",
      zh: "周二 Startup Stammtisch。夏季露台工位抢手。英语通用。",
    },
  },
  {
    id: "selina-mexico",
    name: { en: "Selina CoWork CDMX", zh: "Selina CoWork 墨西哥城" },
    city: { en: "Mexico City", zh: "墨西哥城" },
    country: { en: "Mexico", zh: "墨西哥" },
    logo: "🇲🇽",
    neighborhood: { en: "Roma Norte", zh: "罗马北区" },
    dayPassPrice: { en: "$12/day", zh: "$12/天" },
    dayPassUsd: 12,
    wifiMbps: 200,
    rating: 4.5,
    reviews: 412,
    tags: { en: ["Latin America", "social", "coliving"], zh: ["拉美", "社交", "住宿一体"] },
    amenities: {
      en: ["Rooftop bar", "Event space", "Kitchen", "Laundry"],
      zh: ["屋顶酒吧", "活动空间", "厨房", "洗衣"],
    },
    hours: { en: "7:00–23:00", zh: "7:00–23:00" },
    videoCallReady: true,
    tip: {
      en: "Half-price day pass for guests. Friday Happy Hour great for networking. US timezone friendly.",
      zh: "住客日票半价。周五 Happy Hour 社交绝佳。美东时区友好。",
    },
  },
  {
    id: "outpost-canggu",
    name: { en: "Outpost Canggu", zh: "Outpost 仓古" },
    city: { en: "Canggu", zh: "仓古" },
    country: { en: "Indonesia", zh: "印尼" },
    logo: "🏄",
    neighborhood: { en: "Canggu Beach", zh: "仓古海滩" },
    dayPassPrice: { en: "$18/day", zh: "$18/天" },
    dayPassUsd: 18,
    wifiMbps: 200,
    rating: 4.7,
    reviews: 512,
    tags: { en: ["surf", "community", "coliving"], zh: ["冲浪", "社区", "住宿一体"] },
    amenities: {
      en: ["Pool", "Surfboard storage", "Events", "Coffee"],
      zh: ["泳池", "冲浪板存放", "活动", "咖啡"],
    },
    hours: { en: "7:00–22:00", zh: "7:00–22:00" },
    videoCallReady: true,
    tip: {
      en: "Free cowork for guests. Weekly Surf & Work events. Bring 4G hotspot during rainy season.",
      zh: "住客免费 cowork。每周 Surf & Work 活动。雨季备 4G 热点。",
    },
  },
  {
    id: "the-cube-taipei",
    name: { en: "The Cube Taipei", zh: "The Cube 台北" },
    city: { en: "Taipei", zh: "台北" },
    country: { en: "Taiwan", zh: "台湾" },
    logo: "🇹🇼",
    neighborhood: { en: "Da'an", zh: "大安区" },
    dayPassPrice: { en: "NT$400/day (~$13)", zh: "NT$400/天（约 $13）" },
    dayPassUsd: 13,
    wifiMbps: 300,
    rating: 4.5,
    reviews: 345,
    tags: { en: ["Chinese-speaking", "convenient", "food"], zh: ["华语", "便利", "美食"] },
    amenities: {
      en: ["Coffee", "Meeting rooms", "Printing", "Lounge"],
      zh: ["咖啡", "会议室", "打印", "休息区"],
    },
    hours: { en: "Mon–Sun 9:00–22:00", zh: "周一至周日 9:00–22:00" },
    videoCallReady: true,
    tip: {
      en: "Night market downstairs. Quiet on weekends for deep work. EasyCard payment accepted.",
      zh: "楼下就是夜市。周末人少适合深度工作。支持悠游卡付款。",
    },
  },
  {
    id: "cospaces-medellin",
    name: { en: "CoSpaces Medellín", zh: "CoSpaces 麦德林" },
    city: { en: "Medellín", zh: "麦德林" },
    country: { en: "Colombia", zh: "哥伦比亚" },
    logo: "🇨🇴",
    neighborhood: { en: "El Poblado", zh: "埃尔波夫拉多" },
    dayPassPrice: { en: "$10/day", zh: "$10/天" },
    dayPassUsd: 10,
    wifiMbps: 180,
    rating: 4.5,
    reviews: 287,
    tags: { en: ["Latin America", "budget", "spring weather"], zh: ["拉美", "低价", "永春城"] },
    amenities: {
      en: ["Terrace", "Coffee", "Events", "Lockers"],
      zh: ["露台", "咖啡", "活动", "储物柜"],
    },
    hours: { en: "Mon–Sat 8:00–20:00", zh: "周一至周六 8:00–20:00" },
    videoCallReady: true,
    tip: {
      en: "US East Coast timezone friendly. Many backup cafés nearby. Spanish classes on weekends.",
      zh: "美东时区友好。附近咖啡店备选多。周末有西语课。",
    },
  },
];

export function getCities(locale: Locale): string[] {
  const seen = new Set<string>();
  const cities: string[] = [];
  for (const s of spaces) {
    const c = s.city[locale];
    if (!seen.has(c)) {
      seen.add(c);
      cities.push(c);
    }
  }
  return cities.sort();
}

export function searchSpaces(
  locale: Locale,
  query?: string,
  city?: string,
  videoOnly?: boolean
): CoworkingSpace[] {
  const q = (query ?? "").toLowerCase().trim();
  return spaces
    .filter((space) => {
      const cityName = space.city[locale];
      const matchCity = !city || cityName === city;
      const matchVideo = !videoOnly || space.videoCallReady;
      if (!q) return matchCity && matchVideo;
      const haystack = `${space.name[locale]} ${cityName} ${space.country[locale]} ${space.neighborhood[locale]} ${space.tags[locale].join(" ")}`.toLowerCase();
      return matchCity && matchVideo && haystack.includes(q);
    })
    .sort((a, b) => a.dayPassUsd - b.dayPassUsd);
}

export function getSpaceById(id: string): CoworkingSpace | undefined {
  return spaces.find((s) => s.id === id);
}

export function localizeSpace(space: CoworkingSpace, locale: Locale) {
  return {
    id: space.id,
    name: space.name[locale],
    city: space.city[locale],
    country: space.country[locale],
    logo: space.logo,
    neighborhood: space.neighborhood[locale],
    dayPassPrice: space.dayPassPrice[locale],
    dayPassUsd: space.dayPassUsd,
    wifiMbps: space.wifiMbps,
    rating: space.rating,
    reviews: space.reviews,
    tags: space.tags[locale],
    amenities: space.amenities[locale],
    hours: space.hours[locale],
    videoCallReady: space.videoCallReady,
    featured: space.featured,
    tip: space.tip[locale],
  };
}

export type LocalizedSpace = ReturnType<typeof localizeSpace>;
