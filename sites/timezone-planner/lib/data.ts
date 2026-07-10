export const features = [
  {
    icon: "🌍",
    title: "多时区重叠可视化",
    desc: "添加团队成员城市，一眼看出工作时段交集，不用手算 UTC 偏移",
  },
  {
    icon: "🎯",
    title: "最佳会议推荐",
    desc: "自动扫描未来 7 天，按痛苦指数排序，推荐最公平的 12 个时段",
  },
  {
    icon: "⚖️",
    title: "公平轮换建议",
    desc: "标记谁要在早/晚时段参会，提示下次轮换，避免同一人总吃亏",
  },
  {
    icon: "📅",
    title: "DST 自动处理",
    desc: "夏令时切换自动适配，不会出现全员空等的尴尬",
  },
  {
    icon: "📤",
    title: "ICS 日历导出",
    desc: "会员一键导出 .ics 文件，直接拖进 Google Calendar / Outlook",
  },
  {
    icon: "👥",
    title: "团队模板保存",
    desc: "会员保存常用团队配置，每周站会 3 秒出方案",
  },
];

export const testimonials = [
  {
    name: "张明",
    role: "远程团队 Lead · 上海-柏林-纽约",
    text: "以前排个周会要在 Slack 来回 20 条消息，现在 30 秒出 3 个公平时段，痛苦指数一目了然。",
  },
  {
    name: "Sarah",
    role: "Agency PM",
    text: "客户分布在 4 个时区，这个工具比 World Time Buddy 好用——因为它会告诉你谁最惨。",
  },
  {
    name: "阿杰",
    role: "独立开发者",
    text: "5 次免费够偶尔用，每周固定站会就订阅了，$9.9 比浪费的协调时间便宜太多。",
  },
];

export const sampleTeam = [
  { name: "上海", timezone: "Asia/Shanghai", offset: "UTC+8", workHours: "09:00–18:00" },
  { name: "伦敦", timezone: "Europe/London", offset: "UTC+1", workHours: "09:00–18:00" },
  { name: "纽约", timezone: "America/New_York", offset: "UTC-4", workHours: "09:00–18:00" },
];

export const durationOptions = [
  { value: 30, label: "30 分钟" },
  { value: 60, label: "60 分钟" },
  { value: 90, label: "90 分钟" },
] as const;
