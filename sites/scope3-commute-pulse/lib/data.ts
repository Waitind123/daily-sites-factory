export const features = [
  {
    icon: "🚗",
    title: "通勤碳排",
    desc: "按距离、交通方式、到岗天数，精确计算往返通勤 CO₂e",
  },
  {
    icon: "🏠",
    title: "居家办公能耗",
    desc: "计入笔记本、照明、空调分摊，基于 GHG Protocol 居家办公方法论",
  },
  {
    icon: "📊",
    title: "三场景对比",
    desc: "当前混合 vs 全勤 vs 完全远程，一眼看出减排空间",
  },
  {
    icon: "🌍",
    title: "多电网因子",
    desc: "中国、美国、欧盟、全球平均电网排放因子可选",
  },
  {
    icon: "📄",
    title: "ESG 报告导出",
    desc: "会员可导出 PDF/CSV，直接用于 B 端招标与 Scope 3 披露",
  },
  {
    icon: "👥",
    title: "团队批量计算",
    desc: "会员支持多人汇总，HR/CSO 一键生成团队碳足迹基线",
  },
];

export const testimonials = [
  {
    name: "陈薇",
    role: "HR 总监 · 120 人团队",
    text: "政府招标要求 Carbon Reduction Plan，用这个 10 分钟出基线数据，比找咨询公司省 5 万。",
  },
  {
    name: "Tom",
    role: "远程团队 Lead",
    text: "混合办公政策争论了半年，用数据说话：每周少来 2 天，团队减排 34%。",
  },
  {
    name: "小李",
    role: "独立开发者",
    text: "终于有个不 corporate 的碳排计算器，5 次免费够个人用，公司用再订阅。",
  },
];

export const sampleComparison = [
  { label: "全勤通勤", kg: 2840, pct: 100 },
  { label: "当前混合", kg: 1680, pct: 59 },
  { label: "完全远程", kg: 820, pct: 29 },
];

export const transportOptions = [
  { id: "car", label: "私家车", icon: "🚗" },
  { id: "bus", label: "公交", icon: "🚌" },
  { id: "subway", label: "地铁", icon: "🚇" },
  { id: "ebike", label: "电动车", icon: "🛵" },
  { id: "walk", label: "步行/骑行", icon: "🚶" },
] as const;
