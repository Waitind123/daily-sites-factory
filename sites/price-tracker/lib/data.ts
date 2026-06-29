import type { Locale } from "./i18n-shared";

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
  {
    id: "intercom",
    name: "Intercom",
    category: "客服工具",
    website: "intercom.com",
    pricingUrl: "intercom.com/pricing",
    billingModel: "按席位",
    preview: "Essential $39→$74/席位（+90%），90 天内 indie 最大痛点",
    currentPricing: [
      { name: "Essential", monthly: 74, annual: 708, features: ["收件箱", "实时聊天", "基础自动化"] },
      { name: "Advanced", monthly: 149, annual: 1428, features: ["工作流", "报告", "SLA"] },
      { name: "Expert", monthly: null, annual: null, features: ["专属 CSM", "自定义集成", "审计"] },
    ],
    tracking: {
      summary:
        "Intercom 2026 Q2 将 Essential 从 $39/席位涨至 $74/席位，新账号取消免费层。典型大企业挤压 indie 创始人。",
      lastChecked: "2026-06-29",
      checkFrequency: "每日",
      changesLast90Days: 3,
      history: [
        {
          date: "2026-04-01",
          type: "price_increase",
          summary: "Essential $39/席位 → $59/席位（+51%）",
          impact: "high",
          before: "$39/席位",
          after: "$59/席位",
        },
        {
          date: "2026-05-15",
          type: "price_increase",
          summary: "Essential $59/席位 → $74/席位（+25%）",
          impact: "high",
          before: "$59/席位",
          after: "$74/席位",
        },
        {
          date: "2026-06-01",
          type: "removed_tier",
          summary: "新注册用户取消免费层",
          impact: "high",
          before: "免费计划",
          after: "仅付费",
        },
      ],
      competitiveNotes: [
        "Crisp $25/月固定价 — indie 热门替代",
        "Help Scout $20/用户 — 定价更简单",
        "desk-pulse $9.9/月 — 为 solo 创始人打造",
      ],
      alertRecommendations: [
        "若在用 Intercom，预算需按年涨 90% 或立即迁移",
        "竞品营销：「我们 90 天没涨 2 倍」",
        "关注 Advanced 套餐 — Q3 可能继续涨",
      ],
      marketPosition: "高端在位者 — indie 流失加速",
    },
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "客服工具",
    website: "zendesk.com",
    pricingUrl: "zendesk.com/pricing",
    billingModel: "按客服",
    preview: "Suite Team $55→$69/客服 — 取消多年折扣",
    currentPricing: [
      { name: "Suite Team", monthly: 69, annual: 828, features: ["工单", "聊天", "电话", "知识库"] },
      { name: "Suite Growth", monthly: 115, annual: 1380, features: ["SLA", "自定义角色", "沙盒"] },
      { name: "Suite Professional", monthly: 149, annual: 1788, features: ["技能路由", "社区论坛", "分析"] },
    ],
    tracking: {
      summary:
        "Zendesk 2026 年取消多年折扣并上调 Suite Team 按客服定价。Support Suite 现价 $69/客服，去年 $49 起。",
      lastChecked: "2026-06-29",
      checkFrequency: "每日",
      changesLast90Days: 2,
      history: [
        {
          date: "2026-03-20",
          type: "price_increase",
          summary: "Suite Team $55/客服 → $69/客服（+25%）",
          impact: "high",
          before: "$55/客服",
          after: "$69/客服",
        },
        {
          date: "2026-05-01",
          type: "feature_change",
          summary: "年付折扣上限 10%（原 20%）",
          impact: "medium",
          before: "年付 8 折",
          after: "年付 9 折",
        },
      ],
      competitiveNotes: [
        "Freshdesk $15/客服 — 预算替代",
        "Intercom Essential 现 $74/席位 — 都很贵",
        "desk-pulse $9.9/月固定价适合 indie 团队",
      ],
      alertRecommendations: [
        "5 人客服团队现 $345/月，去年 $275",
        "评估按席位 vs 固定月费替代方案",
        "续约季：自动续费前谈判或迁移",
      ],
      marketPosition: "企业默认选择 — 中小企业 increasingly 被挤出",
    },
  },
];

export const saasProductsEn: SaasProduct[] = [
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    website: "notion.so",
    pricingUrl: "notion.so/pricing",
    billingModel: "Per seat",
    preview: "Plus plan $10→$12/mo (+20%), 3 pricing changes in 90 days",
    currentPricing: [
      { name: "Free", monthly: 0, annual: 0, features: ["Unlimited blocks", "10 guests", "Basic collab"] },
      { name: "Plus", monthly: 12, annual: 96, features: ["Unlimited uploads", "30-day history", "100 guests"] },
      { name: "Business", monthly: 18, annual: 180, features: ["SAML SSO", "Advanced permissions", "Bulk export"] },
      { name: "Enterprise", monthly: null, annual: null, features: ["Audit log", "SCIM", "Dedicated support"] },
    ],
    tracking: {
      summary:
        "Notion raised Plus and Business plans 20% in Q1 2026. Free tier AI limits cut to push upgrades — classic feature gating + gentle price hike combo.",
      lastChecked: "2026-06-24",
      checkFrequency: "Daily",
      changesLast90Days: 3,
      history: [
        { date: "2026-04-15", type: "price_increase", summary: "Plus $10/mo → $12/mo (+20%)", impact: "high", before: "$10/mo", after: "$12/mo" },
        { date: "2026-05-01", type: "feature_change", summary: "Free AI from unlimited to 20 uses/mo", impact: "medium", before: "Unlimited AI", after: "20/mo" },
        { date: "2026-06-10", type: "price_increase", summary: "Business $15/mo → $18/mo (+20%)", impact: "high", before: "$15/mo", after: "$18/mo" },
      ],
      competitiveNotes: ["Plus now 20% above Coda Pro ($10/mo)", "Obsidian Sync $10/mo, different scope", "Enterprise may shift to Confluence"],
      alertRecommendations: ["If you're a Notion competitor, \"we didn't raise\" is timely messaging", "Watch Free→Plus conversion 30 days post-hike", "Business hike may churn SMB customers"],
      marketPosition: "Market leader with pricing power, but watch low-cost alternatives",
    },
  },
  {
    id: "linear",
    name: "Linear",
    category: "Project Mgmt",
    website: "linear.app",
    pricingUrl: "linear.app/pricing",
    billingModel: "Per seat",
    preview: "Standard $8→$10/mo, AI gating moved to Business tier",
    currentPricing: [
      { name: "Free", monthly: 0, annual: 0, features: ["250 issues", "Unlimited members", "2 teams"] },
      { name: "Standard", monthly: 10, annual: 96, features: ["Unlimited issues", "Unlimited teams", "Advanced integrations"] },
      { name: "Plus", monthly: 16, annual: 168, features: ["SAML SSO", "Audit log", "Priority support"] },
      { name: "Enterprise", monthly: null, annual: null, features: ["SCIM", "Dedicated CSM", "SLA"] },
    ],
    tracking: {
      summary:
        "Linear raised Standard 25% ($8→$10) in May 2026 and moved AI auto-classify to Plus. Classic feature upshift + price hike under Jira/Height pressure.",
      lastChecked: "2026-06-24",
      checkFrequency: "Daily",
      changesLast90Days: 2,
      history: [
        { date: "2026-05-20", type: "price_increase", summary: "Standard $8/mo → $10/mo (+25%)", impact: "high", before: "$8/mo", after: "$10/mo" },
        { date: "2026-06-01", type: "feature_change", summary: "AI auto-classify moved from Standard to Plus", impact: "medium", before: "Standard incl. AI", after: "Plus incl. AI" },
      ],
      competitiveNotes: ["Still above Jira Standard ($8.15/seat)", "Height holds $8.99/mo", "Generous Free tier drives acquisition"],
      alertRecommendations: ["$8-10/mo is indie team sweet spot for PM tools", "AI gating is 2026's dominant pricing trend", "Watch Linear Free→paid conversion"],
      marketPosition: "Premium positioning, room to raise but must balance growth",
    },
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "Dev Tools",
    website: "cursor.com",
    pricingUrl: "cursor.com/pricing",
    billingModel: "Per seat + usage",
    preview: "Pro stable at $20/mo, new Ultra tier at $200/mo",
    currentPricing: [
      { name: "Hobby", monthly: 0, annual: 0, features: ["2000 completions/mo", "50 slow requests", "Basic models"] },
      { name: "Pro", monthly: 20, annual: 192, features: ["Unlimited completions", "500 fast requests", "All models"] },
      { name: "Business", monthly: 40, annual: 384, features: ["Team admin", "Privacy mode", "SSO"] },
      { name: "Ultra", monthly: 200, annual: null, features: ["10x Pro usage", "Priority queue", "Early access"] },
    ],
    tracking: {
      summary:
        "Cursor launched Ultra at $200/mo in June 2026 for power users. Pro price stable but Hobby free completions cut 5000→2000. Classic free-tier shrink + premium tier launch.",
      lastChecked: "2026-06-24",
      checkFrequency: "Daily",
      changesLast90Days: 2,
      history: [
        { date: "2026-06-01", type: "new_tier", summary: "New Ultra plan $200/mo, 10x Pro usage", impact: "high", after: "$200/mo" },
        { date: "2026-06-15", type: "feature_change", summary: "Hobby completions 5000/mo → 2000/mo", impact: "medium", before: "5000/mo", after: "2000/mo" },
      ],
      competitiveNotes: ["GitHub Copilot Pro $10/mo", "Windsurf $15/mo direct competitor", "Ultra targets enterprise power users"],
      alertRecommendations: ["AI coding price war — watch Copilot response", "Free cut signals conversion push", "$15-20/mo is mainstream indie pricing band"],
      marketPosition: "Rapid growth — premium tier lifts ARPU",
    },
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    website: "figma.com",
    pricingUrl: "figma.com/pricing",
    billingModel: "Per seat",
    preview: "Professional $15/mo stable, Dev Mode now paid add-on",
    currentPricing: [
      { name: "Starter", monthly: 0, annual: 0, features: ["3 files", "Unlimited collaborators", "Basic prototypes"] },
      { name: "Professional", monthly: 15, annual: 144, features: ["Unlimited files", "Dev Mode", "Advanced prototypes"] },
      { name: "Organization", monthly: 45, annual: 540, features: ["Design systems", "Branching", "Analytics"] },
      { name: "Enterprise", monthly: 75, annual: 900, features: ["SCIM", "Audit", "Dedicated support"] },
    ],
    tracking: {
      summary:
        "Figma's biggest 2026 move: Dev Mode split from Professional into $12/editor/mo add-on. Post-Adobe acquisition, more aggressive monetization of developers.",
      lastChecked: "2026-06-24",
      checkFrequency: "Daily",
      changesLast90Days: 1,
      history: [
        { date: "2026-03-01", type: "feature_change", summary: "Dev Mode from free to $12/editor/mo add-on", impact: "high", before: "Pro incl. Dev Mode", after: "Dev Mode $12/mo add-on" },
      ],
      competitiveNotes: ["Sketch $10/mo, weaker collab", "Penpot open-source free", "Dev Mode fee impacts design-dev workflow"],
      alertRecommendations: ["Feature-split pricing is 2026 trend", "Watch Penpot/Sketch user migration", "Dev Mode fee may push devs to alt annotation tools"],
      marketPosition: "Dominant position with strong pricing power",
    },
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Deploy",
    website: "vercel.com",
    pricingUrl: "vercel.com/pricing",
    billingModel: "Usage + seats",
    preview: "Pro $20/mo, bandwidth overage $40→$55/TB",
    currentPricing: [
      { name: "Hobby", monthly: 0, annual: 0, features: ["Personal projects", "100GB bandwidth", "Serverless"] },
      { name: "Pro", monthly: 20, annual: 240, features: ["Commercial use", "1TB bandwidth", "Analytics"] },
      { name: "Enterprise", monthly: null, annual: null, features: ["SLA", "SSO", "Dedicated support"] },
    ],
    tracking: {
      summary:
        "Vercel Q2 2026 raised bandwidth overage ($40→$55/TB) and cut Pro Serverless hours 1000h→800h. Significant impact on high-traffic indie projects.",
      lastChecked: "2026-06-24",
      checkFrequency: "Daily",
      changesLast90Days: 2,
      history: [
        { date: "2026-04-01", type: "price_increase", summary: "Bandwidth overage $40/TB → $55/TB (+37.5%)", impact: "high", before: "$40/TB", after: "$55/TB" },
        { date: "2026-05-15", type: "feature_change", summary: "Pro Serverless hours 1000h → 800h", impact: "medium", before: "1000h/mo", after: "800h/mo" },
      ],
      competitiveNotes: ["Cloudflare Pages more generous bandwidth", "Railway from $5/mo for small projects", "Netlify Pro $19/mo includes more bandwidth"],
      alertRecommendations: ["High-traffic projects: evaluate Cloudflare Pages migration", "Bandwidth hikes are 2026 infra trend", "Watch for Vercel usage warning features"],
      marketPosition: "Developer default, but usage pricing pressure rising",
    },
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Payments",
    website: "stripe.com",
    pricingUrl: "stripe.com/pricing",
    billingModel: "Transaction fees",
    preview: "Standard 2.9%+$0.30 stable, Billing adds 0.7% platform fee",
    currentPricing: [
      { name: "Payments", monthly: null, annual: null, features: ["2.9% + $0.30/txn", "Global cards", "Fraud detection"] },
      { name: "Billing", monthly: null, annual: null, features: ["0.7% subscription revenue", "Usage billing", "Invoicing"] },
      { name: "Connect", monthly: null, annual: null, features: ["Platform splits", "Multi-account", "KYC"] },
    ],
    tracking: {
      summary:
        "Stripe added 0.7% platform fee on Billing in 2026 (previously payment fees only). $10K MRR SaaS pays $70/mo extra. Core payment rates stable.",
      lastChecked: "2026-06-24",
      checkFrequency: "Weekly",
      changesLast90Days: 1,
      history: [
        { date: "2026-02-01", type: "new_tier", summary: "Stripe Billing adds 0.7% platform fee", impact: "high", after: "0.7% of subscription revenue" },
      ],
      competitiveNotes: ["Lemon Squeezy 5% + $0.50 incl. tax", "Paddle 5% + $0.50 MoR", "Polar.sh 4% + $0.40 indie-friendly"],
      alertRecommendations: ["High MRR: compare Lemon Squeezy/Paddle total cost", "0.7% Billing fee may push indies to Polar", "Stable payment rates, but add-on fees are hidden hikes"],
      marketPosition: "Infrastructure monopoly — add-on fees are profit growth",
    },
  },
  {
    id: "intercom",
    name: "Intercom",
    category: "Customer Support",
    website: "intercom.com",
    pricingUrl: "intercom.com/pricing",
    billingModel: "Per seat",
    preview: "Essential $39→$74/seat (+90%) in 90 days — biggest indie pain point",
    currentPricing: [
      { name: "Essential", monthly: 74, annual: 708, features: ["Inbox", "Live chat", "Basic automation"] },
      { name: "Advanced", monthly: 149, annual: 1428, features: ["Workflows", "Reporting", "SLA"] },
      { name: "Expert", monthly: null, annual: null, features: ["Dedicated CSM", "Custom integrations", "Audit"] },
    ],
    tracking: {
      summary:
        "Intercom raised Essential from $39 to $74/seat in Q2 2026 and removed the free tier for new accounts. Classic enterprise squeeze on indie founders.",
      lastChecked: "2026-06-29",
      checkFrequency: "Daily",
      changesLast90Days: 3,
      history: [
        { date: "2026-04-01", type: "price_increase", summary: "Essential $39/seat → $59/seat (+51%)", impact: "high", before: "$39/seat", after: "$59/seat" },
        { date: "2026-05-15", type: "price_increase", summary: "Essential $59/seat → $74/seat (+25%)", impact: "high", before: "$59/seat", after: "$74/seat" },
        { date: "2026-06-01", type: "removed_tier", summary: "Free tier removed for new signups", impact: "high", before: "Free plan", after: "Paid only" },
      ],
      competitiveNotes: ["Crisp $25/mo flat — popular indie alternative", "Help Scout $20/user — simpler pricing", "desk-pulse $9.9/mo — built for solo founders"],
      alertRecommendations: ["If you use Intercom, budget +90% YoY or migrate now", "Competitors: pitch「we didn't 2x in 90 days」", "Watch Advanced tier — next hike likely Q3"],
      marketPosition: "Premium incumbent — indie exodus accelerating",
    },
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Customer Support",
    website: "zendesk.com",
    pricingUrl: "zendesk.com/pricing",
    billingModel: "Per agent",
    preview: "Suite Team $55→$69/agent — annual-only discounts removed",
    currentPricing: [
      { name: "Suite Team", monthly: 69, annual: 828, features: ["Tickets", "Chat", "Phone", "Knowledge base"] },
      { name: "Suite Growth", monthly: 115, annual: 1380, features: ["SLA", "Custom roles", "Sandbox"] },
      { name: "Suite Professional", monthly: 149, annual: 1788, features: ["Skills routing", "Community", "Analytics"] },
    ],
    tracking: {
      summary:
        "Zendesk removed multi-year discounts in 2026 and raised Suite Team per-agent pricing. Support Suite now starts at $69/agent vs $49 last year.",
      lastChecked: "2026-06-29",
      checkFrequency: "Daily",
      changesLast90Days: 2,
      history: [
        { date: "2026-03-20", type: "price_increase", summary: "Suite Team $55/agent → $69/agent (+25%)", impact: "high", before: "$55/agent", after: "$69/agent" },
        { date: "2026-05-01", type: "feature_change", summary: "Annual discount capped at 10% (was 20%)", impact: "medium", before: "20% annual off", after: "10% annual off" },
      ],
      competitiveNotes: ["Freshdesk $15/agent — budget alternative", "Intercom Essential now $74/seat — both expensive", "desk-pulse $9.9/mo flat for indie teams"],
      alertRecommendations: ["5-agent team now pays $345/mo vs $275 last year", "Evaluate per-seat vs flat-rate alternatives", "Renewal season: negotiate or switch before auto-renew"],
      marketPosition: "Enterprise default — SMBs increasingly priced out",
    },
  },
];

function productsForLocale(locale: Locale): SaasProduct[] {
  return locale === "en" ? saasProductsEn : saasProducts;
}

export function getProductById(id: string, locale: Locale = "zh"): SaasProduct | undefined {
  return productsForLocale(locale).find((p) => p.id === id);
}

export function getPublicProducts(locale: Locale = "zh"): Omit<SaasProduct, "tracking">[] {
  return productsForLocale(locale).map(({ tracking: _t, ...rest }) => rest);
}

export function getStats(locale: Locale = "zh") {
  const products = productsForLocale(locale);
  return {
    productCount: products.length,
    avgChanges90d: Math.round(
      products.reduce((sum, p) => sum + p.tracking.changesLast90Days, 0) / products.length
    ),
    categories: 7,
  };
}
