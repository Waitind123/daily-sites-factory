export type RoomType = {
  id: string;
  name: string;
  icon: string;
  duration: number;
  description: string;
  activeUsers: number;
};

export type AmbientSound = {
  id: string;
  name: string;
  icon: string;
};

export const roomTypes: RoomType[] = [
  {
    id: "deep-focus",
    name: "深度专注",
    icon: "🎯",
    duration: 90,
    description: "90 分钟无打扰深度工作，适合写代码、写文章",
    activeUsers: 47,
  },
  {
    id: "pomodoro",
    name: "番茄钟",
    icon: "🍅",
    duration: 25,
    description: "25 分钟专注 + 5 分钟休息，经典番茄工作法",
    activeUsers: 83,
  },
  {
    id: "creative",
    name: "创意发散",
    icon: "💡",
    duration: 45,
    description: "45 分钟创意时间，适合设计、头脑风暴",
    activeUsers: 31,
  },
  {
    id: "morning-sync",
    name: "晨间共工",
    icon: "🌅",
    duration: 60,
    description: "60 分钟晨间启动，和全球远程工作者一起开工",
    activeUsers: 56,
  },
];

export const ambientSounds: AmbientSound[] = [
  { id: "cafe", name: "咖啡馆", icon: "☕" },
  { id: "rain", name: "雨声", icon: "🌧️" },
  { id: "library", name: "图书馆", icon: "📚" },
  { id: "forest", name: "森林", icon: "🌲" },
  { id: "none", name: "静音", icon: "🔇" },
];

export const virtualCoworkers = [
  { id: "1", name: "Alex", role: "独立开发者", avatar: "👨‍💻", status: "coding" },
  { id: "2", name: "Mia", role: "设计师", avatar: "👩‍🎨", status: "designing" },
  { id: "3", name: "Ken", role: "写作者", avatar: "✍️", status: "writing" },
  { id: "4", name: "Sara", role: "产品经理", avatar: "📋", status: "planning" },
  { id: "5", name: "Leo", role: "数据分析师", avatar: "📊", status: "analyzing" },
  { id: "6", name: "Yuki", role: "前端工程师", avatar: "⚛️", status: "coding" },
  { id: "7", name: "Emma", role: "UX 研究员", avatar: "🔍", status: "researching" },
  { id: "8", name: "Tom", role: "创业者", avatar: "🚀", status: "building" },
];

export const features = [
  {
    icon: "👥",
    title: "虚拟同伴",
    desc: "看到其他远程工作者正在专注，告别独自办公的孤独感",
  },
  {
    icon: "🍅",
    title: "番茄钟",
    desc: "内置 25/45/90 分钟计时器，专注结束自动提醒休息",
  },
  {
    icon: "🎧",
    title: "白噪音",
    desc: "咖啡馆、雨声、图书馆、森林四种环境音，营造专注氛围",
  },
  {
    icon: "📊",
    title: "专注统计",
    desc: "每日/每周专注时长追踪，看到自己的进步",
  },
  {
    icon: "🔕",
    title: "零打扰",
    desc: "没有聊天、没有视频、没有社交压力，只有安静的陪伴",
  },
  {
    icon: "🌍",
    title: "全球共工",
    desc: "和世界各地的远程工作者同时在线，感受集体能量",
  },
];

export const testimonials = [
  {
    name: "小陈",
    role: "独立开发者",
    text: "在家写代码太孤独了。打开共工室看到 80 多人在专注，莫名就有动力继续写。",
  },
  {
    name: "Lisa",
    role: "自由撰稿人",
    text: "Focusmate 要预约还要视频，这个只要点一下就能开始。雨声 + 番茄钟，我的写作效率翻倍。",
  },
  {
    name: "阿杰",
    role: "远程前端",
    text: "$9.9 比一杯咖啡便宜，但每天帮我多专注 2 小时。body doubling 真的有用。",
  },
];

export const todayStats = {
  activeSessions: 217,
  totalFocusHours: 1843,
  avgSessionMin: 52,
};
