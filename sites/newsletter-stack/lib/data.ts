import type { Locale } from "./i18n-shared";
import { categoryKeyByZh, categoryLabels, categoryKeys } from "./copy-app";
import { toolsEn } from "./data-en";

export type PricingTier = {
  name: string;
  monthly: number | null;
  annual: number | null;
  subscriberLimit: string;
  features: string[];
};

export type ComparisonDetail = {
  summary: string;
  lastUpdated: string;
  pricingModel: string;
  transactionFee: string;
  migrationDifficulty: "easy" | "medium" | "hard";
  bestFor: string[];
  pros: string[];
  cons: string[];
  pricingHistory: { date: string; change: string }[];
  featureMatrix: { feature: string; value: string; note?: string }[];
  competitorNotes: string[];
  migrationTips: string[];
  affiliateOffer?: string;
};

export type NewsletterTool = {
  id: string;
  name: string;
  category: string;
  website: string;
  affiliateUrl: string;
  preview: string;
  freeTier: string;
  startingPrice: string;
  currentPricing: PricingTier[];
  comparison: ComparisonDetail;
};

export const newsletterTools: NewsletterTool[] = [
  {
    id: "substack",
    name: "Substack",
    category: "创作者平台",
    website: "substack.com",
    affiliateUrl: "https://substack.com",
    preview: "10% 平台抽成，零月费，自带发现网络。适合从零开始的写作者",
    freeTier: "免费发布，付费订阅抽成 10%",
    startingPrice: "$0 + 10% 抽成",
    currentPricing: [
      { name: "免费", monthly: 0, annual: 0, subscriberLimit: "无限", features: ["无限订阅者", "基础分析", "Substack 发现"] },
      { name: "Pro", monthly: 50, annual: 500, subscriberLimit: "无限", features: ["自定义域名", "高级分析", "优先支持"] },
    ],
    comparison: {
      summary:
        "Substack 是 2026 年最大的 newsletter 创作者平台，核心优势是自带读者发现网络和零门槛启动。10% 平台抽成看似便宜，但当 MRR 超过 $1000 时，月费 $100+ 比 ConvertKit $29/月 贵得多。适合从零开始、依赖平台流量的写作者，不适合已有受众的 indie hacker。",
      lastUpdated: "2026-06-24",
      pricingModel: "平台抽成 + 可选 Pro 月费",
      transactionFee: "付费订阅 10%，Stripe 另收 2.9%+$0.30",
      migrationDifficulty: "medium",
      bestFor: ["从零开始的写作者", "依赖平台发现的创作者", "不想付月费的初学者"],
      pros: [
        "零月费，按收入抽成",
        "自带读者发现网络（Recommendations）",
        "极简写作体验，5 分钟上线",
        "Notes 社交功能带来额外流量",
      ],
      cons: [
        "MRR $1000+ 时 10% 抽成比月费工具贵",
        "数据导出有限，迁移成本高",
        "品牌感弱（xxx.substack.com）",
        "无法自定义邮件模板",
      ],
      pricingHistory: [
        { date: "2024-01", change: "Pro 计划从 $7/月 涨至 $50/月" },
        { date: "2025-06", change: "Notes 功能全面开放，增加社交属性" },
        { date: "2026-03", change: "推荐算法更新，小账号曝光下降 30%" },
      ],
      featureMatrix: [
        { feature: "自定义域名", value: "Pro $50/月", note: "免费版仅 substack.com 子域名" },
        { feature: "自动化序列", value: "基础", note: "仅欢迎邮件，无复杂自动化" },
        { feature: "付费墙", value: "✓ 内置", note: "Stripe 集成，10% 抽成" },
        { feature: "API 访问", value: "有限", note: "无公开 API" },
        { feature: "数据分析", value: "基础免费 / 高级 Pro", note: "打开率、订阅增长" },
        { feature: "RSS 支持", value: "✓", note: "公开 RSS feed" },
      ],
      competitorNotes: [
        "Beehiiv 对已有受众的创作者更便宜（$0 起 + 更低抽成）",
        "ConvertKit 自动化更强，适合课程/产品发售",
        "Ghost 适合想同时拥有博客+newsletter 的创作者",
      ],
      migrationTips: [
        "导出订阅者 CSV（Settings → Import/Export）",
        "付费订阅者需手动迁移 Stripe 连接",
        "建议提前 2 周在新平台发迁移通知",
        "保留 Substack 作为发现渠道，主 newsletter 迁走",
      ],
      affiliateOffer: "通过 Substack 推荐计划获得 $50 推荐奖励",
    },
  },
  {
    id: "beehiiv",
    name: "Beehiiv",
    category: "增长型平台",
    website: "beehiiv.com",
    affiliateUrl: "https://beehiiv.com",
    preview: "Ad Network + 推荐网络，$0 起。Indie Hacker 2026 年最爱",
    freeTier: "2500 订阅者免费",
    startingPrice: "$0 / $49/月 Scale",
    currentPricing: [
      { name: "Launch", monthly: 0, annual: 0, subscriberLimit: "2500", features: ["自定义域名", "基础分析", "推荐网络"] },
      { name: "Scale", monthly: 49, annual: 468, subscriberLimit: "10000", features: ["Ad Network", "A/B 测试", "高级自动化"] },
      { name: "Max", monthly: 99, annual: 948, subscriberLimit: "无限", features: ["优先支持", "白标", "API 访问"] },
    ],
    comparison: {
      summary:
        "Beehiiv 是 2026 年增长最快的 newsletter 平台，核心差异化是 Ad Network（帮创作者接广告）和推荐网络（类似 Substack Recommendations 但更开放）。免费 2500 订阅者额度比 ConvertKit 慷慨，Scale $49/月 包含 Ad Network 是独特卖点。Indie Hackers 上最常见的 Substack 迁移目标。",
      lastUpdated: "2026-06-24",
      pricingModel: "按订阅者数量阶梯月费",
      transactionFee: "0% 平台抽成，仅 Stripe 2.9%+$0.30",
      migrationDifficulty: "easy",
      bestFor: ["从 Substack 迁移的创作者", "想接广告变现的 newsletter", "重视增长的 indie hacker"],
      pros: [
        "2500 订阅者免费，比 ConvertKit 慷慨",
        "Ad Network 帮创作者接广告（被动收入）",
        "推荐网络带来有机增长",
        "迁移工具完善，一键从 Substack 导入",
      ],
      cons: [
        "品牌知名度低于 Substack",
        "写作体验不如 Substack 极简",
        "Ad Network 需要一定订阅量才有广告",
        "Max 计划 $99/月 偏贵",
      ],
      pricingHistory: [
        { date: "2025-03", change: "Launch 免费额度从 1000 提升至 2500" },
        { date: "2025-09", change: "Scale 计划 $39→$49/月" },
        { date: "2026-01", change: "Ad Network 向所有 Scale 用户开放" },
      ],
      featureMatrix: [
        { feature: "自定义域名", value: "✓ 免费", note: "Launch 即含" },
        { feature: "自动化序列", value: "Scale+", note: "欢迎序列、滴灌邮件" },
        { feature: "付费墙", value: "✓", note: "Stripe 集成，0% 抽成" },
        { feature: "Ad Network", value: "Scale+", note: "平台撮合广告，创作者分成" },
        { feature: "A/B 测试", value: "Scale+", note: "标题、发送时间测试" },
        { feature: "API 访问", value: "Max", note: "REST API" },
      ],
      competitorNotes: [
        "比 Substack 便宜（MRR $500+ 时省 $50/月）",
        "ConvertKit 自动化更强但无 Ad Network",
        "Buttondown 更极简但功能少",
      ],
      migrationTips: [
        "使用 Beehiiv 一键 Substack 迁移工具",
        "导入后检查自定义域名 DNS 设置",
        "先在 Beehiiv 发 2-3 期测试，确认送达率",
        "通知订阅者新地址，保留 Substack 3 个月过渡期",
      ],
      affiliateOffer: "推荐新用户注册获得 20% 首年佣金",
    },
  },
  {
    id: "convertkit",
    name: "Kit (ConvertKit)",
    category: "营销自动化",
    website: "kit.com",
    affiliateUrl: "https://kit.com",
    preview: "创作者营销自动化王者，$29/月起。课程发售、漏斗必备",
    freeTier: "10000 订阅者免费（限 1 自动化）",
    startingPrice: "$0 / $29/月 Creator",
    currentPricing: [
      { name: "Newsletter", monthly: 0, annual: 0, subscriberLimit: "10000", features: ["1 自动化", "落地页", "基础表单"] },
      { name: "Creator", monthly: 29, annual: 290, subscriberLimit: "1000", features: ["无限自动化", "序列邮件", "标签分段"] },
      { name: "Creator Pro", monthly: 59, annual: 590, subscriberLimit: "1000", features: ["Facebook 自定义受众", "新闻通讯推荐", "优先支持"] },
    ],
    comparison: {
      summary:
        "Kit（原 ConvertKit）是创作者营销自动化的标杆。2024 年品牌重塑为 Kit，免费层从 1000 扩至 10000 订阅者但限制 1 个自动化。核心优势是可视化自动化构建器、标签分段、课程发售漏斗。适合卖数字产品的 indie hacker，不适合纯写作的 newsletter。",
      lastUpdated: "2026-06-24",
      pricingModel: "按订阅者数量阶梯月费",
      transactionFee: "0% 平台抽成，Commerce 功能另收 3.5%",
      migrationDifficulty: "easy",
      bestFor: ["卖课程/数字产品的创作者", "需要复杂自动化的营销", "已有产品的 indie hacker"],
      pros: [
        "可视化自动化构建器（行业最佳）",
        "标签分段极其灵活",
        "Commerce 功能卖数字产品",
        "10000 订阅者免费层",
      ],
      cons: [
        "纯写作体验不如 Substack/Beehiiv",
        "无自带发现网络",
        "Creator $29/月 仅 1000 订阅者",
        "邮件模板设计感弱",
      ],
      pricingHistory: [
        { date: "2024-10", change: "品牌从 ConvertKit 更名为 Kit" },
        { date: "2025-01", change: "免费层从 1000 扩至 10000 订阅者" },
        { date: "2026-02", change: "Creator Pro 新增 AI 写作助手" },
      ],
      featureMatrix: [
        { feature: "自定义域名", value: "✓", note: "所有计划" },
        { feature: "自动化序列", value: "1 免费 / 无限付费", note: "可视化构建器" },
        { feature: "付费墙", value: "Commerce", note: "卖数字产品，3.5% 抽成" },
        { feature: "落地页", value: "✓", note: "内置落地页构建器" },
        { feature: "A/B 测试", value: "Creator Pro", note: "主题行测试" },
        { feature: "API 访问", value: "✓", note: "V3 + V4 API" },
      ],
      competitorNotes: [
        "Mailchimp 功能更多但复杂，小创作者不友好",
        "Beehiiv 增长功能更强，Kit 自动化更强",
        "ActiveCampaign 企业级但 $29/月起仅 1000 联系人",
      ],
      migrationTips: [
        "CSV 导入订阅者 + 标签映射",
        "使用 Kit 迁移向导自动重建自动化",
        "Commerce 产品需重新设置 Stripe",
        "测试自动化触发条件后再切换主域名",
      ],
      affiliateOffer: "Kit 联盟计划 30% 持续佣金（12 个月）",
    },
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "传统邮件营销",
    website: "mailchimp.com",
    affiliateUrl: "https://mailchimp.com",
    preview: "老牌邮件营销，免费 500 联系人。功能全但对小创作者过重",
    freeTier: "500 联系人 + 1000 发送/月",
    startingPrice: "$0 / $13/月 Essentials",
    currentPricing: [
      { name: "Free", monthly: 0, annual: 0, subscriberLimit: "500", features: ["基础模板", "营销 CRM", "1 受众"] },
      { name: "Essentials", monthly: 13, annual: 156, subscriberLimit: "500", features: ["A/B 测试", "模板", "24/7 邮件支持"] },
      { name: "Standard", monthly: 20, annual: 240, subscriberLimit: "500", features: ["自动化", "行为定向", "预测分段"] },
      { name: "Premium", monthly: 350, annual: 4200, subscriberLimit: "10000", features: ["电话支持", "高级报告", "4 倍受众"] },
    ],
    comparison: {
      summary:
        "Mailchimp 是邮件营销的老牌巨头，2026 年对小创作者越来越不友好：免费层从 2000 缩至 500 联系人，Essentials $13/月 也仅 500 联系人。功能全面（CRM、广告、落地页、电商）但对 indie newsletter 创作者来说过于复杂。Indie Hackers 上最常见的抱怨是「功能太多，我只想发 newsletter」。",
      lastUpdated: "2026-06-24",
      pricingModel: "按联系人数量阶梯月费",
      transactionFee: "2% 电商交易费（Mailchimp Commerce）",
      migrationDifficulty: "medium",
      bestFor: ["电商 + 邮件营销一体", "需要 CRM 的小企业", "已有 Mailchimp 生态的用户"],
      pros: [
        "功能最全面（邮件+CRM+广告+电商）",
        "模板库丰富",
        "品牌知名度高",
        "与 Shopify/WooCommerce 深度集成",
      ],
      cons: [
        "免费层仅 500 联系人（2024 年从 2000 缩减）",
        "界面复杂，学习曲线陡",
        "对纯 newsletter 创作者功能过剩",
        "价格随联系人增长快",
      ],
      pricingHistory: [
        { date: "2024-05", change: "免费层从 2000 联系人降至 500" },
        { date: "2025-08", change: "Essentials $11→$13/月" },
        { date: "2026-01", change: "新增 AI 内容生成器（所有计划）" },
      ],
      featureMatrix: [
        { feature: "自定义域名", value: "付费计划", note: "需连接域名" },
        { feature: "自动化序列", value: "Standard+", note: "客户旅程构建器" },
        { feature: "付费墙", value: "Commerce", note: "需 Mailchimp Commerce" },
        { feature: "CRM", value: "✓", note: "内置营销 CRM" },
        { feature: "A/B 测试", value: "Essentials+", note: "主题行、内容、发送时间" },
        { feature: "API 访问", value: "✓", note: "Marketing API v3" },
      ],
      competitorNotes: [
        "Kit 对创作者更友好，自动化更直观",
        "Beehiiv 对 newsletter 专注，无 CRM 包袱",
        "Brevo (Sendinblue) 免费 300 邮件/天，更便宜",
      ],
      migrationTips: [
        "导出联系人 CSV（Audience → All contacts → Export）",
        "标签和分段需手动重建",
        "自动化无法导出，需截图重建",
        "建议直接迁到 Kit 或 Beehiiv 而非另一个 Mailchimp 账户",
      ],
    },
  },
  {
    id: "buttondown",
    name: "Buttondown",
    category: "极简写作",
    website: "buttondown.email",
    affiliateUrl: "https://buttondown.email",
    preview: "极简 newsletter，$9/月起 100 订阅者。程序员最爱",
    freeTier: "100 订阅者免费",
    startingPrice: "$0 / $9/月 Basic",
    currentPricing: [
      { name: "Free", monthly: 0, annual: 0, subscriberLimit: "100", features: ["Markdown 写作", "RSS", "基础分析"] },
      { name: "Basic", monthly: 9, annual: 90, subscriberLimit: "1000", features: ["自定义域名", "付费订阅", "API"] },
      { name: "Standard", monthly: 29, annual: 290, subscriberLimit: "5000", features: ["自动化", "团队协作", "高级分析"] },
      { name: "Professional", monthly: 79, annual: 790, subscriberLimit: "无限", features: ["白标", "优先支持", "SLA"] },
    ],
    comparison: {
      summary:
        "Buttondown 是程序员和极简主义者的 newsletter 首选。Markdown 原生写作、API 优先设计、无多余功能。$9/月 1000 订阅者比 Kit $29/月 便宜 3 倍。缺点是增长功能几乎为零——没有推荐网络、没有 Ad Network、没有落地页构建器。适合「我只想好好写 newsletter」的人。",
      lastUpdated: "2026-06-24",
      pricingModel: "按订阅者数量阶梯月费",
      transactionFee: "0% 平台抽成，Stripe 2.9%+$0.30",
      migrationDifficulty: "easy",
      bestFor: ["程序员/技术写作者", "极简主义者", "Markdown 爱好者", "小订阅量 newsletter"],
      pros: [
        "Markdown 原生写作体验",
        "API 优先，可编程管理",
        "$9/月 1000 订阅者，性价比高",
        "界面极简，零学习曲线",
      ],
      cons: [
        "无增长功能（推荐网络、Ad Network）",
        "模板设计感弱",
        "自动化功能基础",
        "品牌知名度低",
      ],
      pricingHistory: [
        { date: "2025-01", change: "Basic 从 $8→$9/月" },
        { date: "2025-06", change: "新增付费订阅 Stripe Connect 集成" },
        { date: "2026-04", change: "API v2 发布，支持 webhook" },
      ],
      featureMatrix: [
        { feature: "自定义域名", value: "Basic+", note: "$9/月起" },
        { feature: "Markdown", value: "✓ 原生", note: "唯一 Markdown 优先平台" },
        { feature: "付费墙", value: "Basic+", note: "Stripe Connect" },
        { feature: "API", value: "Basic+", note: "REST API + Webhook" },
        { feature: "自动化", value: "Standard+", note: "基础欢迎序列" },
        { feature: "RSS", value: "✓", note: "公开/私密 RSS" },
      ],
      competitorNotes: [
        "Substack 有发现网络但抽成 10%",
        "Beehiiv 增长功能强但界面复杂",
        "Ghost 适合博客+newsletter 一体",
      ],
      migrationTips: [
        "CSV 导入订阅者",
        "API 可编程批量操作",
        "自定义域名 DNS 指向 Buttondown",
        "适合从 Substack 迁出但不想用复杂平台的人",
      ],
    },
  },
  {
    id: "ghost",
    name: "Ghost",
    category: "博客+Newsletter",
    website: "ghost.org",
    affiliateUrl: "https://ghost.org",
    preview: "开源博客+Newsletter 一体，$9/月起。自有数据，可自托管",
    freeTier: "无（自托管免费）",
    startingPrice: "$9/月 Starter / 自托管 $0",
    currentPricing: [
      { name: "Starter", monthly: 9, annual: 108, subscriberLimit: "500", features: ["自定义主题", "Newsletter", "基础分析"] },
      { name: "Creator", monthly: 25, annual: 300, subscriberLimit: "1000", features: ["付费订阅", "自定义域名", "高级集成"] },
      { name: "Team", monthly: 50, annual: 600, subscriberLimit: "无限", features: ["团队协作", "优先支持", "SLA"] },
    ],
    comparison: {
      summary:
        "Ghost 是唯一同时做好博客和 newsletter 的开源平台。可自托管（$0）或用 Ghost(Pro) 托管（$9/月起）。适合想拥有完整网站+newsletter 的创作者，SEO 友好（独立域名博客）。缺点是 newsletter 增长功能弱于 Beehiiv/Substack，需要自己做 SEO 和流量。",
      lastUpdated: "2026-06-24",
      pricingModel: "月费（托管）或自托管免费",
      transactionFee: "0% 平台抽成，Stripe 2.9%+$0.30",
      migrationDifficulty: "hard",
      bestFor: ["博客+newsletter 一体", "重视 SEO 的创作者", "想自托管的技术用户", "媒体/出版物"],
      pros: [
        "博客+newsletter 一体，SEO 友好",
        "开源可自托管，数据完全自有",
        "主题系统灵活，设计感强",
        "0% 平台抽成",
      ],
      cons: [
        "无自带发现网络",
        "自托管需要技术能力",
        "Newsletter 增长功能弱",
        "迁移和设置比 SaaS 复杂",
      ],
      pricingHistory: [
        { date: "2024-06", change: "Starter 从 $11→$9/月" },
        { date: "2025-03", change: "新增 Portal 2.0 订阅管理" },
        { date: "2026-02", change: "AI 写作助手集成（所有计划）" },
      ],
      featureMatrix: [
        { feature: "博客", value: "✓ 核心", note: "SEO 友好的独立博客" },
        { feature: "Newsletter", value: "✓ 内置", note: "博客订阅自动同步" },
        { feature: "付费墙", value: "Creator+", note: "会员制内容" },
        { feature: "自托管", value: "✓", note: "开源 MIT 许可" },
        { feature: "主题", value: "✓", note: "Handlebars 模板" },
        { feature: "API", value: "✓", note: "Content API + Admin API" },
      ],
      competitorNotes: [
        "WordPress+Mailchimp 组合更灵活但更复杂",
        "Substack 更简单但无博客 SEO",
        "Beehiiv newsletter 专注，Ghost 内容平台",
      ],
      migrationTips: [
        "从 WordPress 用 Ghost 迁移插件",
        "Substack 需 CSV 导入 + 手动重建内容",
        "自托管需配置服务器、SSL、邮件发送",
        "建议先用 Ghost(Pro) 托管，稳定后再考虑自托管",
      ],
      affiliateOffer: "Ghost 推荐计划 20% 持续佣金",
    },
  },
];

export const features = [
  {
    icon: "📊",
    title: "深度工具对比",
    desc: "定价、功能矩阵、迁移难度、最佳场景一目了然",
  },
  {
    icon: "💰",
    title: "真实成本计算",
    desc: "不只看月费，还算平台抽成、Stripe 费用、隐藏成本",
  },
  {
    icon: "🔄",
    title: "迁移指南",
    desc: "从 Substack/Mailchimp 迁出的实操步骤，避免丢订阅者",
  },
  {
    icon: "📈",
    title: "定价变动追踪",
    desc: "免费层缩减、涨价历史记录，不再被悄悄改条款",
  },
  {
    icon: "🎯",
    title: "场景推荐",
    desc: "根据你的阶段（0→1000→10000 订阅者）推荐最佳工具",
  },
  {
    icon: "🏷️",
    title: "联盟优惠码",
    desc: "会员专享各平台注册优惠和推荐奖励",
  },
];

export const testimonials = [
  {
    name: "小林",
    role: "Indie Hacker",
    text: "在 Substack 交了 10% 抽成两年，MRR $800 时每月多付 $80。迁到 Beehiiv 后省了 $60/月。",
  },
  {
    name: "Amy",
    role: "课程创作者",
    text: "Kit 的自动化帮我课程发售多卖了 30%。但刚开始写 newsletter 时用 Buttondown 就够了。",
  },
  {
    name: "David",
    role: "技术博主",
    text: "对比了 6 个平台才决定用 Ghost。博客 SEO + newsletter 一体，自托管数据在自己手里。",
  },
];

export const categories = ["全部", "创作者平台", "增长型平台", "营销自动化", "传统邮件营销", "极简写作", "博客+Newsletter"];

export const stats = {
  toolCount: newsletterTools.length,
  freeOptions: newsletterTools.filter((t) => t.currentPricing.some((p) => p.monthly === 0)).length,
  categories: categories.length - 1,
};

function localizeTool(tool: NewsletterTool, locale: Locale): NewsletterTool {
  if (locale === "zh") return tool;
  const en = toolsEn[tool.id];
  if (!en) return tool;
  return {
    ...tool,
    category: categoryLabels.en[en.categoryKey],
    preview: en.preview,
    freeTier: en.freeTier,
    comparison: en.comparison,
  };
}

export function getToolById(id: string, locale: Locale = "en"): NewsletterTool | undefined {
  const tool = newsletterTools.find((t) => t.id === id);
  return tool ? localizeTool(tool, locale) : undefined;
}

export function getPublicTools(locale: Locale = "en"): Omit<NewsletterTool, "comparison">[] {
  return newsletterTools.map(({ comparison: _c, ...rest }) => {
    const localized = localizeTool({ ...rest, comparison: _c }, locale);
    const { comparison: _drop, ...pub } = localized;
    return pub;
  });
}

export function getCategoryKey(category: string): (typeof categoryKeys)[number] {
  return categoryKeyByZh[category] ?? "all";
}
