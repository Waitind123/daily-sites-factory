export type StartupIdea = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  mrrPotential: string;
  buildTime: string;
  difficulty: "低" | "中" | "高";
  preview: string;
  analysis: {
    problem: string;
    marketSize: string;
    competitors: { name: string; pricing: string; gap: string }[];
    monetization: string;
    channels: string[];
    mvp: string[];
    risks: string[];
  };
};

export const startupIdeas: StartupIdea[] = [
  {
    id: "api-usage-tracker",
    title: "API 用量追踪器",
    tagline: "帮 indie dev 监控 OpenAI / Stripe / Replicate 账单，超阈值告警",
    category: "DevTools",
    mrrPotential: "$3K–$12K",
    buildTime: "1 周末",
    difficulty: "低",
    preview:
      "独立开发者常在 Vercel + 多个 API 上跑项目，月底才发现 OpenAI 账单爆了。做一个只读 dashboard，连接常见 API key，实时显示用量和预估费用。",
    analysis: {
      problem:
        "HN 和 r/indiehackers 上每周都有「我的 OpenAI 账单怎么突然 $200」的帖子。开发者需要跨平台统一视图，而不是逐个登录控制台。",
      marketSize:
        "全球独立开发者约 500 万+，其中 30% 使用付费 API。按 $9/月、1% 转化 = 15K 潜在用户，$135K MRR 天花板。",
      competitors: [
        { name: "OpenAI Usage Dashboard", pricing: "免费（仅 OpenAI）", gap: "不支持多 API 聚合" },
        { name: "Datadog", pricing: "$15/主机起", gap: "太重，indie 用不起" },
        { name: "Helicone", pricing: "$20/月起", gap: "专注 LLM，缺 Stripe/Vercel" },
      ],
      monetization: "$9/月 Pro（5 个 API 连接）+ $29/月 Team。免费档 1 个 API。",
      channels: ["Show HN", "r/SideProject", "Indie Hackers", "Dev Twitter", "Product Hunt"],
      mvp: [
        "连接 OpenAI + Stripe API key",
        "7 天用量折线图 + 本月预估",
        "邮件/Slack 超 $50 告警",
        "Landing + Stripe Checkout",
      ],
      risks: ["API key 安全存储是信任门槛", "大厂可能内置类似功能", "需持续适配 API 变更"],
    },
  },
  {
    id: "changelog-as-a-service",
    title: "Changelog 即服务",
    tagline: "SaaS 产品更新日志托管 + 用户订阅通知",
    category: "SaaS",
    mrrPotential: "$2K–$8K",
    buildTime: "2 周末",
    difficulty: "低",
    preview:
      "每个 SaaS 都需要 changelog，但自建页面很烦。提供 embeddable widget + 邮件推送，Markdown 编辑，5 分钟接入。",
    analysis: {
      problem:
        "Product Hunt 上大量 indie SaaS 用 Notion 或 GitHub Releases 当 changelog，体验差、无法推送给用户。Beamer 和 Canny 太贵（$49+）。",
      marketSize:
        "全球活跃 micro-SaaS 约 10 万+。$19/月 × 500 客户 = $9.5K MRR 现实目标。",
      competitors: [
        { name: "Beamer", pricing: "$49/月起", gap: "价格对 indie 太高" },
        { name: "Headway", pricing: "$29/月起", gap: "功能臃肿" },
        { name: "GitHub Releases", pricing: "免费", gap: "非用户友好，无推送" },
      ],
      monetization: "$19/月（无限更新 + 1000 订阅者邮件）+ $49/月（白标 + 分析）。",
      channels: ["Indie Hackers", "MicroConf 社区", "SaaS Twitter", "r/SaaS"],
      mvp: [
        "Markdown 编辑器 + 公开 changelog 页",
        "Embeddable JS widget",
        "邮件订阅 + 新更新自动推送",
        "自定义域名 CNAME",
      ],
      risks: ["Beamer 可能降价", "邮件送达率", "需持续维护 widget 兼容性"],
    },
  },
  {
    id: "waitlist-with-referrals",
    title: "带推荐机制的 Waitlist",
    tagline: "Product Hunt 发布前的 waitlist + 病毒式推荐排名",
    category: "Marketing",
    mrrPotential: "$5K–$20K",
    buildTime: "1 周末",
    difficulty: "低",
    preview:
      "Launch 前收集邮箱不够，要推荐排名才 viral。类似 LaunchList / Viral Loops 的轻量版，$29 一次性或 $9/月。",
    analysis: {
      problem:
        "Indie hacker 发布前需要 waitlist，但 Mailchimp 没推荐机制，Viral Loops 要 $49/月。levelsio 式产品：简单、便宜、当天上线。",
      marketSize:
        "每月约 5000+ 新产品在 PH 发布。$9/月 × 800 活跃 waitlist = $7.2K MRR。",
      competitors: [
        { name: "LaunchList", pricing: "$29/次", gap: "按次收费，无持续服务" },
        { name: "Viral Loops", pricing: "$49/月起", gap: "复杂且贵" },
        { name: "Prefinery", pricing: "$99/月起", gap: "企业向" },
      ],
      monetization: "$9/月（1 个 waitlist，5000 邮箱）+ $29/月（无限 + 自定义域名）。",
      channels: ["Product Hunt 发布", "Indie Hackers", "Twitter build in public", "r/Entrepreneur"],
      mvp: [
        "注册页 + 推荐链接生成",
        "Leaderboard 排名展示",
        "Mailchimp/ConvertKit 导出",
        "Embeddable signup form",
      ],
      risks: ["LaunchList 已占心智", "垃圾邮箱注册", "GDPR 合规"],
    },
  },
  {
    id: "screenshot-beautifier",
    title: "截图美化工具",
    tagline: "一键给 App 截图加设备框 + 渐变背景，用于 App Store / 落地页",
    category: "Design",
    mrrPotential: "$1K–$5K",
    buildTime: "3 天",
    difficulty: "低",
    preview:
      "独立开发者做 landing page 需要好看的 product screenshot。上传截图 → 选设备框 → 导出 PNG/SVG，$5/月或按次 $0.5。",
    analysis: {
      problem:
        "r/SideProject 上常见「我的 landing page 截图太丑」的帖子。Screenshot.rocks 免费但功能有限，Shots.so 要 $12/月。",
      marketSize: "App Store 有 200 万+ app，每月新增 3 万+。$5/月 × 300 用户 = $1.5K MRR 起步。",
      competitors: [
        { name: "Screenshot.rocks", pricing: "免费", gap: "无批量、无品牌色" },
        { name: "Shots.so", pricing: "$12/月", gap: "偏设计师" },
        { name: "Figma 模板", pricing: "免费/付费", gap: "手动操作慢" },
      ],
      monetization: "$5/月（无限导出）+ 免费 3 次/天。",
      channels: ["Twitter indie dev", "Product Hunt", "App Store 优化社区", "r/iOSProgramming"],
      mvp: [
        "上传截图 + 选 iPhone/Mac 框",
        "5 种渐变背景预设",
        "一键导出 2x PNG",
        "批量处理 10 张",
      ],
      risks: ["免费替代品多", "需持续更新设备框", "Canva 可能内置"],
    },
  },
  {
    id: "stripe-metrics-dashboard",
    title: "Stripe MRR 仪表盘",
    tagline: "只读连接 Stripe，显示 MRR、churn、LTV，专为 solo founder 设计",
    category: "Analytics",
    mrrPotential: "$4K–$15K",
    buildTime: "2 周末",
    difficulty: "中",
    preview:
      "Baremetrics 要 $108/月，indie 用不起。做一个只读 Stripe OAuth 连接，显示核心 SaaS 指标，$19/月。",
    analysis: {
      problem:
        "Indie hacker 在 IH 上频繁问「你们怎么追踪 MRR」。ChartMogul 和 Baremetrics 面向 VC-backed 公司，solo founder 只需要 5 个数字。",
      marketSize: "Stripe 活跃商户 500 万+，micro-SaaS 约 10 万。$19/月 × 400 = $7.6K MRR。",
      competitors: [
        { name: "Baremetrics", pricing: "$108/月起", gap: "太贵" },
        { name: "ChartMogul", pricing: "$100/月起", gap: "复杂" },
        { name: "Stripe Dashboard", pricing: "免费", gap: "无 MRR/churn 视图" },
      ],
      monetization: "$19/月 Solo + $49/月（多 Stripe 账户 + 邮件周报）。",
      channels: ["Indie Hackers", "Stripe 生态", "Micro SaaS 社区", "Twitter"],
      mvp: [
        "Stripe Connect OAuth",
        "MRR / 新增 / Churn 三指标",
        "30 天趋势图",
        "每周邮件摘要",
      ],
      risks: ["Stripe API 变更", "数据准确性责任", "Baremetrics 可能出 lite 版"],
    },
  },
  {
    id: "nomad-visa-alerts",
    title: "数字游民签证变更提醒",
    tagline: "追踪 40+ 国远程签证政策变化，邮件提醒 + 对比表",
    category: "Content",
    mrrPotential: "$2K–$6K",
    buildTime: "1 周",
    difficulty: "中",
    preview:
      "数字游民签证政策频繁变化，Nomad List 有数据但不推送。做订阅制政策追踪 + 对比计算器，$29/月。",
    analysis: {
      problem:
        "Reddit r/digitalnomad 每周有人问「葡萄牙 D7 签证还开放吗」。信息分散在政府官网，无 centralized alert service。",
      marketSize: "全球数字游民约 3500 万（2025 估计）。$29/月 × 300 = $3K MRR。",
      competitors: [
        { name: "Nomad List", pricing: "$99/终身", gap: "无政策变更推送" },
        { name: "VisaGuide", pricing: "免费广告", gap: "信息过载、无订阅" },
        { name: "政府官网", pricing: "免费", gap: "难追踪、多语言" },
      ],
      monetization: "$29/月（3 国追踪 + 邮件提醒）+ $29/月（无限国 + PDF 报告）。",
      channels: ["r/digitalnomad", "Nomad List 社区", "Twitter nomad", "Facebook 群组"],
      mvp: [
        "15 国签证数据库",
        "政策变更 RSS 监控 + 人工审核",
        "对比表（费用/时长/要求）",
        "邮件 weekly digest",
      ],
      risks: ["政策信息准确性法律责任", "需持续人工维护", "Nomad List 可能加此功能"],
    },
  },
  {
    id: "indie-bookkeeping",
    title: "Indie 简易记账",
    tagline: "Stripe + PayPal + 银行 CSV 导入，自动生成 P&L，专为 solo SaaS",
    category: "Finance",
    mrrPotential: "$3K–$10K",
    buildTime: "2 周",
    difficulty: "中",
    preview:
      "QuickBooks 对 indie 太重，Wave 免费但缺 Stripe 集成。做「连接 Stripe → 看利润」的极简记账，$15/月。",
    analysis: {
      problem:
        "Tax season 时 r/indiehackers 爆发「怎么整理 Stripe 收入」帖子。开发者不想学会计，只想知道赚了多少钱、交多少税。",
      marketSize: "美国 solo self-employed 4100 万+。$15/月 × 400 = $6K MRR（美国市场为主）。",
      competitors: [
        { name: "QuickBooks", pricing: "$30/月起", gap: "太复杂" },
        { name: "Wave", pricing: "免费", gap: "Stripe 集成弱" },
        { name: "Bench", pricing: "$299/月起", gap: "人工记账太贵" },
      ],
      monetization: "$15/月（1 Stripe + CSV 导入）+ $39/月（多账户 + 税表导出）。",
      channels: ["r/indiehackers", "MicroConf", "Stripe Atlas 社区", "Tax Twitter"],
      mvp: [
        "Stripe 收入自动同步",
        "支出 CSV 导入分类",
        "月度 P&L 报表",
        "Schedule C 导出（美国）",
      ],
      risks: ["税务建议需免责声明", "多国税法差异", "Wave 可能加强 Stripe 集成"],
    },
  },
  {
    id: "micro-testimonial-collector",
    title: "Micro 用户评价收集",
    tagline: "嵌入一行 JS，收集文字+头像 testimonial，展示在 landing page",
    category: "Marketing",
    mrrPotential: "$2K–$7K",
    buildTime: "4 天",
    difficulty: "低",
    preview:
      "Senja 和 Testimonial.to 功能强大但 $29+。做极简版：发链接给客户 → 他们填表单 → 你 embed widget，$9/月。",
    analysis: {
      problem:
        "每个 SaaS landing page 都需要 social proof，但手动截图 testimonial 很土。Testimonial.to 的 wall of love 是标配，但价格对 pre-revenue indie 偏高。",
      marketSize: "micro-SaaS 10 万+。$9/月 × 500 = $4.5K MRR。",
      competitors: [
        { name: "Testimonial.to", pricing: "$29/月起", gap: "视频 testimonial 对 indie 过度" },
        { name: "Senja", pricing: "$29/月起", gap: "功能多但贵" },
        { name: "手动 Notion", pricing: "免费", gap: "不专业、无 embed" },
      ],
      monetization: "$9/月（20 条 testimonial + widget）+ $19/月（无限 + 视频）。",
      channels: ["Product Hunt", "Indie Hackers", "SaaS landing page 社区", "Twitter"],
      mvp: [
        "客户填写表单（文字+头像+公司）",
        "Embeddable carousel widget",
        "一键导入 Twitter 好评",
        "Wall of Love 公开页",
      ],
      risks: ["Testimonial.to 可能降价", "假评价问题", "widget 加载速度"],
    },
  },
];

export const features = [
  {
    icon: "💡",
    title: "每日精选点子",
    desc: "从 HN、Reddit、IH 提炼可落地方向，不是空洞灵感",
  },
  {
    icon: "📊",
    title: "深度市场分析",
    desc: "市场规模、竞品定价、差异化缺口，帮你在写代码前验证",
  },
  {
    icon: "🛠️",
    title: "MVP 路线图",
    desc: "每个点子含 4 步 MVP 清单，周末可 ship",
  },
  {
    icon: "💰",
    title: "变现模型",
    desc: "具体定价建议 + MRR 预估区间，第一天就设计收费点",
  },
  {
    icon: "📣",
    title: "获客渠道",
    desc: "Show HN、Reddit、PH 等实战渠道，不是泛泛 SEO",
  },
  {
    icon: "⚠️",
    title: "风险清单",
    desc: "诚实标注每个点子的坑，避免 build 六个月没人要",
  },
];

export const testimonials = [
  {
    name: "阿凯",
    role: "全栈独立开发者",
    text: "看了 3 个深度分析就找到一个周末能做完的方向，比刷 Twitter 灵感强一百倍。",
  },
  {
    name: "Lisa",
    role: "前 PM 转 indie",
    text: "竞品定价表格直接抄去做 landing page 定价测试，省了 2 天 research。",
  },
  {
    name: "大刘",
    role: "副业探索者",
    text: "$29 不贵，一个点子回本。已经 ship 了 API 用量追踪器的 MVP。",
  },
];

export const categories = [
  "全部",
  "DevTools",
  "SaaS",
  "Marketing",
  "Design",
  "Analytics",
  "Content",
  "Finance",
];

export function getIdeaById(id: string): StartupIdea | undefined {
  return startupIdeas.find((i) => i.id === id);
}

export function getPublicIdeas(): Omit<StartupIdea, "analysis">[] {
  return startupIdeas.map(({ analysis: _a, ...rest }) => rest);
}
