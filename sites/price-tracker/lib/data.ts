export type PriceTier = {
  name: string;
  monthly: number | null;
  annual: number | null;
  features: string[];
};

export type PriceChange = {
  date: string;
  type: "price_increase" | "price_decrease" | "new_tier" | "removed_tier" | "feature_change";
  summary: string;
  impact: "high" | "medium" | "low";
  before?: string;
  after?: string;
};

export type SaasProduct = {
  id: string;
  name: string;
  category: string;
  website: string;
  pricingUrl: string;
  billingModel: string;
  preview: string;
  currentPricing: PriceTier[];
  tracking: {
    summary: string;
    lastChecked: string;
    checkFrequency: string;
    changesLast90Days: number;
    history: PriceChange[];
    competitiveNotes: string[];
    alertRecommendations: string[];
    marketPosition: string;
  };
};

export const saasProducts: SaasProduct[] = [
  {
    id: "notion",
    name: "Notion",
    category: "生产力",
    website: "notion.so",
    pricingUrl: "notion.so/pricing",
    billingModel: "按席位",
    preview: "Plus 计划 $10→$12/月（+20%），90 天内 3 次定价变动",
    currentPricing: [
      { name: "Free", monthly: 0, annual: 0, features: ["个人无限块", "10 访客", "基础协作"] },
      { name: "Plus", monthly: 12, annual: 96, features: ["无限文件上传", "30 天版本历史", "100 访客"] },
      { name: "Business", monthly: 18, annual: 180, features: ["SAML SSO", "高级权限", "批量导出"] },
      { name: "Enterprise", monthly: null, annual: null, features: ["审计日志", "SCIM", "专属支持"] },
    ],
    tracking: {
      summary:
        "Notion 2026 年 Q1 对 Plus 和 Business 计划各涨价 20%。同时 Free 计划限制 AI 功能次数，推动用户升级。这是典型的「功能门控 + 温和涨价」组合策略。",
      lastChecked: "2026-06-24",
      checkFrequency: "每日",
      changesLast90Days: 3,
      history: [
        {
          date: "2026-04-15",
          type: "price_increase",
          summary: "Plus 计划 $10/月 → $12/月（+20%）",
          impact: "high",
          before: "$10/月",
          after: "$12/月",
        },
        {
          date: "2026-05-01",
          type: "feature_change",
          summary: "Free 计划 AI 功能从无限改为每月 20 次",
          impact: "medium",
          before: "AI 无限",
          after: "20 次/月",
        },
        {
          date: "2026-06-10",
          type: "price_increase",
          summary: "Business 计划 $15/月 → $18/月（+20%）",
          impact: "high",
          before: "$15/月",
          after: "$18/月",
        },
      ],
      competitiveNotes: [
        "涨价后 Plus 仍比 Coda Pro（$10/月）贵 20%",
        "Obsidian Sync $10/月，但功能范围不同",
        "企业客户可能转向 Confluence（按席位更便宜）",
      ],
      alertRecommendations: [
        "若你是 Notion 竞品，现在是用「我们没涨价」做营销的好时机",
        "关注 Free→Plus 转化率变化，通常涨价后 30 天可见",
        "Business 涨价可能影响 SMB 客户，留意流失信号",
      ],
      marketPosition: "市场领导者，有定价权，但需防低价替代",
    },
  },
  {
    id: "linear",
    name: "Linear",
    category: "项目管理",
    website: "linear.app",
    pricingUrl: "linear.app/pricing",
    billingModel: "按席位",
    preview: "Standard $8→$10/月，新增 AI 功能门控到 Business 层",
    currentPricing: [
      { name: "Free", monthly: 0, annual: 0, features: ["250 问题", "无限成员", "2 团队"] },
      { name: "Standard", monthly: 10, annual: 96, features: ["无限问题", "无限团队", "高级集成"] },
      { name: "Plus", monthly: 16, annual: 168, features: ["SAML SSO", "审计日志", "优先支持"] },
      { name: "Enterprise", monthly: null, annual: null, features: ["SCIM", "专属 CSM", "SLA"] },
    ],
    tracking: {
      summary:
        "Linear 2026 年 5 月 Standard 计划涨价 25%（$8→$10），同时将 AI 自动分类功能从 Standard 移到 Plus。这是典型的「功能上移 + 涨价」策略，对标 Jira 和 Height 的竞争压力。",
      lastChecked: "2026-06-24",
      checkFrequency: "每日",
      changesLast90Days: 2,
      history: [
        {
          date: "2026-05-20",
          type: "price_increase",
          summary: "Standard 计划 $8/月 → $10/月（+25%）",
          impact: "high",
          before: "$8/月",
          after: "$10/月",
        },
        {
          date: "2026-06-01",
          type: "feature_change",
          summary: "AI 自动分类从 Standard 移至 Plus 计划",
          impact: "medium",
          before: "Standard 含 AI",
          after: "Plus 起含 AI",
        },
      ],
      competitiveNotes: [
        "涨价后仍比 Jira Standard（$8.15/月）贵",
        "Height 保持 $8.99/月，可能吸引价格敏感团队",
        "Free 计划慷慨，是主要获客渠道",
      ],
      alertRecommendations: [
        "若你做项目管理工具，$8-10/月是 indie 团队甜蜜点",
        "AI 功能门控是 2026 年 SaaS 定价主流趋势",
        "关注 Linear Free 用户升级率变化",
      ],
      marketPosition: "高端定位，涨价空间仍存但需平衡增长",
    },
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "开发工具",
    website: "cursor.com",
    pricingUrl: "cursor.com/pricing",
    billingModel: "按席位 + 用量",
    preview: "Pro $20/月稳定，但新增 Ultra $200/月高端层",
    currentPricing: [
      { name: "Hobby", monthly: 0, annual: 0, features: ["2000 补全/月", "50 慢速请求", "基础模型"] },
      { name: "Pro", monthly: 20, annual: 192, features: ["无限补全", "500 快速请求", "全模型"] },
      { name: "Business", monthly: 40, annual: 384, features: ["团队管理", "隐私模式", "SSO"] },
      { name: "Ultra", monthly: 200, annual: null, features: ["10x Pro 用量", "优先队列", "早期功能"] },
    ],
    tracking: {
      summary:
        "Cursor 2026 年 6 月推出 Ultra $200/月计划，瞄准重度 AI 编码用户。Pro 价格保持稳定，但 Hobby 免费额度缩减（补全从 5000→2000）。典型的「缩减免费 + 推出高端层」策略。",
      lastChecked: "2026-06-24",
      checkFrequency: "每日",
      changesLast90Days: 2,
      history: [
        {
          date: "2026-06-01",
          type: "new_tier",
          summary: "新增 Ultra 计划 $200/月，10x Pro 用量",
          impact: "high",
          after: "$200/月",
        },
        {
          date: "2026-06-15",
          type: "feature_change",
          summary: "Hobby 免费补全从 5000/月降至 2000/月",
          impact: "medium",
          before: "5000/月",
          after: "2000/月",
        },
      ],
      competitiveNotes: [
        "GitHub Copilot Pro $10/月，价格优势明显",
        "Windsurf $15/月，直接竞品",
        "Ultra 层瞄准企业重度用户，ARPU 提升策略",
      ],
      alertRecommendations: [
        "AI 编码工具价格战激烈，关注 Copilot 是否跟进",
        "免费额度缩减是转化信号，观察 Pro 订阅增长",
        "若你做 AI 开发工具，$15-20/月是主流定价带",
      ],
      marketPosition: "快速增长期，通过高端层提升 ARPU",
    },
  },
  {
    id: "figma",
    name: "Figma",
    category: "设计工具",
    website: "figma.com",
    pricingUrl: "figma.com/pricing",
    billingModel: "按席位",
    preview: "Professional $15/月稳定，Dev Mode 从免费改为付费",
    currentPricing: [
      { name: "Starter", monthly: 0, annual: 0, features: ["3 个文件", "无限协作者", "基础原型"] },
      { name: "Professional", monthly: 15, annual: 144, features: ["无限文件", "Dev Mode", "高级原型"] },
      { name: "Organization", monthly: 45, annual: 540, features: ["设计系统", "分支", "分析"] },
      { name: "Enterprise", monthly: 75, annual: 900, features: ["SCIM", "审计", "专属支持"] },
    ],
    tracking: {
      summary:
        "Figma 2026 年最大变动是将 Dev Mode 从 Professional 免费功能改为独立付费（$12/编辑者/月）。Adobe 收购后定价策略更激进，推动开发者付费。",
      lastChecked: "2026-06-24",
      checkFrequency: "每日",
      changesLast90Days: 1,
      history: [
        {
          date: "2026-03-01",
          type: "feature_change",
          summary: "Dev Mode 从免费改为 $12/编辑者/月附加费",
          impact: "high",
          before: "Professional 含 Dev Mode",
          after: "Dev Mode $12/月附加",
        },
      ],
      competitiveNotes: [
        "Sketch $10/月，但协作弱于 Figma",
        "Penpot 开源免费，吸引预算敏感团队",
        "Dev Mode 付费可能影响设计-开发协作流程",
      ],
      alertRecommendations: [
        "设计工具「功能拆分付费」是 2026 趋势",
        "关注 Penpot 和 Sketch 是否趁机抢用户",
        "Dev Mode 付费可能推动开发者寻找替代标注工具",
      ],
      marketPosition: "垄断地位，有强定价权",
    },
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "部署平台",
    website: "vercel.com",
    pricingUrl: "vercel.com/pricing",
    billingModel: "用量 + 席位",
    preview: "Pro $20/月，Bandwidth 超额费从 $40→$55/TB",
    currentPricing: [
      { name: "Hobby", monthly: 0, annual: 0, features: ["个人项目", "100GB 带宽", "Serverless"] },
      { name: "Pro", monthly: 20, annual: 240, features: ["商业使用", "1TB 带宽", "分析"] },
      { name: "Enterprise", monthly: null, annual: null, features: ["SLA", "SSO", "专属支持"] },
    ],
    tracking: {
      summary:
        "Vercel 2026 年 Q2 上调超额带宽费用（$40→$55/TB），同时 Pro 计划包含的 Serverless 执行时间从 1000h 降至 800h。对高流量 indie 项目影响显著。",
      lastChecked: "2026-06-24",
      checkFrequency: "每日",
      changesLast90Days: 2,
      history: [
        {
          date: "2026-04-01",
          type: "price_increase",
          summary: "超额带宽 $40/TB → $55/TB（+37.5%）",
          impact: "high",
          before: "$40/TB",
          after: "$55/TB",
        },
        {
          date: "2026-05-15",
          type: "feature_change",
          summary: "Pro Serverless 执行时间 1000h → 800h",
          impact: "medium",
          before: "1000h/月",
          after: "800h/月",
        },
      ],
      competitiveNotes: [
        "Cloudflare Pages 带宽更慷慨",
        "Railway $5/月起，适合小项目",
        "Netlify Pro $19/月，带宽包含更多",
      ],
      alertRecommendations: [
        "高流量项目建议评估 Cloudflare Pages 迁移成本",
        "带宽涨价是基础设施 SaaS 2026 年普遍趋势",
        "关注 Vercel 是否推出用量预警功能",
      ],
      marketPosition: "开发者首选，但用量定价压力增大",
    },
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "支付",
    website: "stripe.com",
    pricingUrl: "stripe.com/pricing",
    billingModel: "交易费率",
    preview: "标准费率 2.9%+$0.30 稳定，Billing 新增 0.7% 平台费",
    currentPricing: [
      { name: "Payments", monthly: null, annual: null, features: ["2.9% + $0.30/笔", "全球卡支持", "欺诈检测"] },
      { name: "Billing", monthly: null, annual: null, features: ["0.7% 订阅收入", "用量计费", "发票"] },
      { name: "Connect", monthly: null, annual: null, features: ["平台分成", "多账户", "KYC"] },
    ],
    tracking: {
      summary:
        "Stripe 2026 年对 Billing 产品新增 0.7% 平台费（之前仅收支付费率）。对高 MRR SaaS 影响显著：$10K MRR 每月多付 $70。支付核心费率保持稳定。",
      lastChecked: "2026-06-24",
      checkFrequency: "每周",
      changesLast90Days: 1,
      history: [
        {
          date: "2026-02-01",
          type: "new_tier",
          summary: "Stripe Billing 新增 0.7% 平台费",
          impact: "high",
          after: "0.7% of subscription revenue",
        },
      ],
      competitiveNotes: [
        "Lemon Squeezy 5% + $0.50，但含税务处理",
        "Paddle 5% + $0.50，Merchant of Record",
        "Polar.sh 4% + $0.40，indie 友好",
      ],
      alertRecommendations: [
        "高 MRR SaaS 应评估 Lemon Squeezy / Paddle 总成本",
        "0.7% Billing 费可能推动 indie 转向 Polar",
        "支付费率稳定，但附加产品费是隐性涨价",
      ],
      marketPosition: "基础设施垄断，附加费是利润增长点",
    },
  },
];

export const features = [
  {
    icon: "📊",
    title: "定价历史追踪",
    desc: "自动记录竞品每次涨价、降价、新套餐、功能门控变动",
  },
  {
    icon: "🔔",
    title: "变动邮件提醒",
    desc: "竞品调价后 24h 内收到摘要，不再靠销售电话才知道",
  },
  {
    icon: "📈",
    title: "趋势分析",
    desc: "90 天变动次数、市场定位、竞争建议一目了然",
  },
  {
    icon: "🎯",
    title: "竞品对比",
    desc: "同品类工具定价并排对比，找甜蜜价位",
  },
  {
    icon: "⚡",
    title: "每日自动检查",
    desc: "不用每周手动开 5 个标签页截图对比",
  },
  {
    icon: "💡",
    title: "策略建议",
    desc: "每次变动附带「你应该怎么做」的 actionable 建议",
  },
];

export const testimonials = [
  {
    name: "阿杰",
    role: "SaaS 创始人",
    text: "竞品降价 3 周后我才知道，丢了一单。现在每天自动追踪，$9.9/月太值了。",
  },
  {
    name: "Mia",
    role: "产品负责人",
    text: "定价会议前不用手动截图了。打开就有 90 天历史，老板问「他们涨了多少」秒答。",
  },
  {
    name: "Kevin",
    role: "Indie Hacker",
    text: "RivalPeek $49/月 0 客户，这个 $9.9/月 功能够用。levelsio 思路对了。",
  },
];

export const categories = ["全部", "生产力", "项目管理", "开发工具", "设计工具", "部署平台", "支付"];

export const stats = {
  productCount: saasProducts.length,
  avgChanges90d: Math.round(
    saasProducts.reduce((sum, p) => sum + p.tracking.changesLast90Days, 0) / saasProducts.length
  ),
  categories: categories.length - 1,
};

export function getProductById(id: string): SaasProduct | undefined {
  return saasProducts.find((p) => p.id === id);
}

export function getPublicProducts(): Omit<SaasProduct, "tracking">[] {
  return saasProducts.map(({ tracking: _t, ...rest }) => rest);
}
