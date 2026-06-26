import type { Locale } from "./i18n-shared";
import { localizeToolFields } from "./tools-locale";

export type ToolCategory =
  | "payments"
  | "email"
  | "hosting"
  | "auth"
  | "analytics"
  | "database";

export type IndieTool = {
  id: string;
  name: string;
  tagline: string;
  category: ToolCategory;
  pricing: string;
  website: string;
  indieScore: number;
  preview: string;
  review: {
    summary: string;
    bestFor: string[];
    pricingDetail: string;
    alternatives: { name: string; pricing: string; when: string }[];
    pros: string[];
    cons: string[];
    setupTips: string[];
    verdict: string;
  };
};

export const indieTools: IndieTool[] = [
  {
    id: "polar",
    name: "Polar",
    tagline: "开发者优先的 Merchant of Record，SaaS 收款 + 税务合规",
    category: "payments",
    pricing: "4% + $0.40/笔",
    website: "polar.sh",
    indieScore: 9,
    preview:
      "无公司也能收全球订阅费。Polar 作为 MoR 处理 VAT/销售税，提供 SDK 和 webhook，比 Stripe 更适合 solo SaaS。",
    review: {
      summary:
        "Polar 是 2024-2025 年 indie hacker 圈最火的支付方案。它不只是 Stripe wrapper——作为 Merchant of Record，Polar 替你处理全球税务合规，这对没有海外公司的中国/亚洲开发者是刚需。",
      bestFor: ["首次收美元的 SaaS", "需要订阅 + 用量计费", "不想自己处理 VAT"],
      pricingDetail:
        "4% + $0.40/笔，无月费。对比 Stripe 2.9%+$0.30 看似贵，但 MoR 服务（税务、发票、退款处理）通常单独收费 $99+/月。Polar 对 <$10K MRR 的 indie 极划算。",
      alternatives: [
        { name: "Stripe", pricing: "2.9%+$0.30", when: "有美国公司、自己处理税务" },
        { name: "Lemon Squeezy", pricing: "5%+$0.50", when: "需要 hosted storefront + 联盟营销" },
        { name: "Paddle", pricing: "5%+$0.50", when: "企业级 MoR，门槛较高" },
      ],
      pros: [
        "MoR 税务合规开箱即用",
        "开发者友好的 API 和 TypeScript SDK",
        "支持 usage-based billing",
        "GitHub Sponsors 式 dashboard",
      ],
      cons: [
        "费率比裸 Stripe 高",
        "相对较新，生态不如 Stripe 成熟",
        "部分国家提现有限制",
      ],
      setupTips: [
        "用 polar.sh 创建 Organization",
        "npm install @polar-sh/sdk",
        "创建 Product + Price，嵌入 Checkout Link",
        "配置 webhook 到 /api/webhooks/polar",
      ],
      verdict:
        "2026 年 indie SaaS 收款首选。如果你没美国公司、想第一天收费，Polar 比 Stripe 少踩 10 个坑。",
    },
  },
  {
    id: "resend",
    name: "Resend",
    tagline: "开发者友好的事务邮件 API，React Email 模板",
    category: "email",
    pricing: "免费 3000 封/月",
    website: "resend.com",
    indieScore: 9,
    preview:
      "告别 SendGrid 复杂配置。3 行代码发邮件，React 组件写模板，deliverability 优秀。indie SaaS 事务邮件标配。",
    review: {
      summary:
        "Resend 由 Vercel 前员工创建，定位就是「开发者的邮件 API」。对比 SendGrid/Mailgun 的配置地狱，Resend 的 onboarding 5 分钟搞定。React Email 让你用 JSX 写邮件模板，和 Next.js 技术栈无缝。",
      bestFor: ["SaaS 事务邮件", "Next.js 项目", "需要好 deliverability 的冷启动"],
      pricingDetail:
        "免费 3000 封/月 + 100 封/天。Pro $20/月 50K 封。对比 Loops ($49/月起) 和 Customer.io ($100+) 对 indie 友好太多。",
      alternatives: [
        { name: "Loops", pricing: "$49/月起", when: "需要营销邮件 + 产品邮件一体" },
        { name: "Postmark", pricing: "$15/月 10K 封", when: "纯事务邮件、极致 deliverability" },
        { name: "Amazon SES", pricing: "$0.10/千封", when: "量大、愿意自己配 DNS" },
      ],
      pros: [
        "API 极简，文档优秀",
        "React Email 模板生态",
        "免费额度够 MVP 用",
        "Vercel 集成一键配置",
      ],
      cons: [
        "营销邮件功能弱",
        "不支持复杂自动化流程",
        "国内发送偶尔延迟",
      ],
      setupTips: [
        "resend.com 注册 → 添加域名 → 配 SPF/DKIM",
        "npm install resend",
        "用 React Email 写 WelcomeEmail.tsx",
        "先 dev 模式测 localhost:3000/api/send",
      ],
      verdict:
        "indie SaaS 事务邮件第一选择。免费额度够验证 MVP，deliverability 比自建 SMTP 靠谱 100 倍。",
    },
  },
  {
    id: "vercel",
    name: "Vercel",
    tagline: "Next.js 一键部署，全球 CDN，Preview 环境",
    category: "hosting",
    pricing: "免费 Hobby / Pro $20/月",
    website: "vercel.com",
    indieScore: 10,
    preview:
      "levelsio 式快速 ship 的基础设施。git push 即部署，自动 HTTPS，Preview URL 给每个 PR。",
    review: {
      summary:
        "Vercel 是 indie hacker 部署 Next.js 的事实标准。Hobby 免费层够大多数 MVP，Pro $20/月解锁团队协作和更多带宽。与 Next.js 深度集成意味着零配置部署。",
      bestFor: ["Next.js / React 项目", "需要快速迭代", "Show HN 当天上线"],
      pricingDetail:
        "Hobby 免费（个人非商用）。Pro $20/月/成员。对比 Railway ($5+) 和 Fly.io 按用量，Vercel 对前端项目性价比最高。注意 Serverless Function 超时限制。",
      alternatives: [
        { name: "Cloudflare Pages", pricing: "免费", when: "静态站 + Workers，成本敏感" },
        { name: "Railway", pricing: "$5/月起", when: "需要持久化后端/数据库" },
        { name: "Netlify", pricing: "免费/Pro $19", when: "非 Next.js 的 Jamstack" },
      ],
      pros: [
        "git push 自动部署",
        "全球 Edge CDN",
        "Preview 环境每个 branch",
        "Analytics + Speed Insights 内置",
      ],
      cons: [
        "Serverless 冷启动",
        "用量大时费用飙升",
        "Vendor lock-in 风险",
      ],
      setupTips: [
        "GitHub 连接仓库",
        "vercel.json 配置 rewrites",
        "环境变量在 Dashboard 设置",
        "自定义域名 CNAME 到 cname.vercel-dns.com",
      ],
      verdict:
        "第一天 ship 就用 Vercel。没有比这更快的「代码到公网 URL」路径。",
    },
  },
  {
    id: "clerk",
    name: "Clerk",
    tagline: "5 分钟接入 Auth，社交登录 + MFA + 用户管理",
    category: "auth",
    pricing: "免费 10K MAU",
    website: "clerk.com",
    indieScore: 8,
    preview:
      "别自己写 auth。Clerk 提供登录 UI 组件、社交 OAuth、Session 管理，Next.js middleware 一行集成。",
    review: {
      summary:
        "自建 auth 是 indie 开发者的头号时间黑洞。Clerk 提供 drop-in 登录组件，支持 Google/GitHub/Email Magic Link，免费 10K MAU 够大多数 indie 产品用到 $1K MRR。",
      bestFor: ["需要快速上线登录", "SaaS 多租户", "不想维护 auth 安全"],
      pricingDetail:
        "免费 10K MAU。Pro $25/月 + $0.02/MAU 超出。对比 Auth0 ($23/月 1K MAU) 和 Supabase Auth (免费但 UI 自建)，Clerk 开箱体验最好。",
      alternatives: [
        { name: "Supabase Auth", pricing: "免费", when: "已用 Supabase DB，接受自建 UI" },
        { name: "NextAuth.js", pricing: "免费", when: "完全控制、愿意维护" },
        { name: "Lucia", pricing: "免费", when: "轻量、无 UI 组件" },
      ],
      pros: [
        "5 分钟集成 Next.js",
        "精美登录 UI 组件",
        "免费额度慷慨",
        "Organization/B2B 功能内置",
      ],
      cons: [
        "超出免费额度后费用增长",
        "定制 UI 有限制",
        "国内访问偶尔慢",
      ],
      setupTips: [
        "clerk.com 创建 Application",
        "npm install @clerk/nextjs",
        "middleware.ts 配置路由保护",
        "用 <SignIn /> <UserButton /> 组件",
      ],
      verdict:
        "MVP 阶段别自己写 auth。Clerk 省下的 2 周够你 ship 3 个产品。",
    },
  },
  {
    id: "plausible",
    name: "Plausible",
    tagline: "隐私友好、轻量、无 cookie 的网站分析",
    category: "analytics",
    pricing: "$9/月 10K PV",
    website: "plausible.io",
    indieScore: 8,
    preview:
      "Google Analytics 太重太侵隐私。Plausible 一行 script，dashboard 清爽，GDPR 合规，适合 landing page。",
    review: {
      summary:
        "indie landing page 不需要 GA4 的复杂。Plausible 提供核心指标（PV、来源、国家、设备），script 不到 1KB，不影响 Core Web Vitals。欧盟 GDPR 友好，无需 cookie banner。",
      bestFor: ["Landing page 分析", "隐私敏感产品", "需要简单 dashboard"],
      pricingDetail:
        "$9/月 10K pageviews。对比 GA4 (免费但复杂) 和 Fathom ($14/月)，Plausible 性价比好。可自托管 Community Edition 免费。",
      alternatives: [
        { name: "Fathom", pricing: "$14/月", when: "类似 Plausible，美国公司" },
        { name: "Umami", pricing: "免费自托管", when: "技术能力强、要完全控制" },
        { name: "Vercel Analytics", pricing: "Pro 内置", when: "已用 Vercel Pro" },
      ],
      pros: [
        "极简 dashboard，5 秒看懂",
        "无 cookie，无 GDPR 烦恼",
        "script 极轻",
        "可公开分享 stats（build in public）",
      ],
      cons: [
        "无漏斗/事件追踪（需 Plausible Goals）",
        "比 GA4 功能少",
        "国内访问 dashboard 需翻墙",
      ],
      setupTips: [
        "plausible.io 注册 → 添加域名",
        "在 layout.tsx 加 script 标签",
        "设置 Goals 追踪 /join 转化",
        "可选：公开 dashboard 链接做 social proof",
      ],
      verdict:
        "indie landing page 分析首选。$9/月买一个清爽的 dashboard，比免费 GA4 省 10 小时配置。",
    },
  },
  {
    id: "supabase",
    name: "Supabase",
    tagline: "开源 Firebase 替代，Postgres + Auth + Storage + Realtime",
    category: "database",
    pricing: "免费 / Pro $25/月",
    website: "supabase.com",
    indieScore: 9,
    preview:
      "一人全栈的后端。Postgres 数据库 + REST/GraphQL API + 文件存储，免费层够 MVP，Pro $25/月扩展到生产。",
    review: {
      summary:
        "Supabase 让 indie 开发者跳过「选数据库 → 写 API → 配 auth → 部署」的繁琐。一个 Postgres 实例 + 自动生成的 API + Dashboard，周末就能搭完 SaaS 后端。",
      bestFor: ["全栈 indie SaaS", "需要关系型数据库", "快速 MVP 后端"],
      pricingDetail:
        "免费：500MB DB、1GB 存储、50K MAU auth。Pro $25/月：8GB DB、100GB 存储、无暂停。对比 PlanetScale ($29+) 和 Firebase (按量)，Supabase 免费层最慷慨。",
      alternatives: [
        { name: "PlanetScale", pricing: "$29/月起", when: "MySQL、需要分支数据库" },
        { name: "Turso", pricing: "免费/Pro $29", when: "Edge SQLite、低延迟" },
        { name: "Neon", pricing: "免费/Pro $19", when: "Serverless Postgres" },
      ],
      pros: [
        "Postgres 全功能",
        "Dashboard 可视化管理",
        "Row Level Security 内置",
        "Edge Functions 支持",
      ],
      cons: [
        "免费项目 7 天不活跃会暂停",
        "复杂查询性能需优化",
        "Vendor lock-in 中等",
      ],
      setupTips: [
        "supabase.com 创建 Project",
        "npm install @supabase/supabase-js",
        ".env.local 配 SUPABASE_URL + ANON_KEY",
        "用 SQL Editor 建表 + RLS 策略",
      ],
      verdict:
        "2026 indie 全栈标配后端。免费层够验证，$25/月 Pro 够 $5K MRR 产品。",
    },
  },
  {
    id: "lemon-squeezy",
    name: "Lemon Squeezy",
    tagline: "Hosted checkout + MoR，适合数字产品和订阅",
    category: "payments",
    pricing: "5% + $0.50/笔",
    website: "lemonsqueezy.com",
    indieScore: 8,
    preview:
      "比 Polar 更偏「开店」体验。Hosted checkout page、联盟营销、折扣码，适合卖模板/课程/数字产品。",
    review: {
      summary:
        "Lemon Squeezy 被 Stripe 收购后更稳了。它提供完整的「数字产品商店」体验：hosted checkout、自动税务、联盟营销、license key 管理。比 Polar 更适合非纯 SaaS 的数字商品。",
      bestFor: ["卖数字产品/模板", "需要联盟营销", "想要 hosted checkout 不想写代码"],
      pricingDetail:
        "5% + $0.50/笔，无月费。含 MoR 税务。对比 Gumroad (10%) 和 Paddle (5%+$0.50)，LS 对 indie 友好且功能全。",
      alternatives: [
        { name: "Polar", pricing: "4%+$0.40", when: "纯 SaaS API 集成" },
        { name: "Gumroad", pricing: "10%", when: "极简、已有受众" },
        { name: "Stripe", pricing: "2.9%+$0.30", when: "有公司、自己处理税务" },
      ],
      pros: [
        "Hosted checkout 零代码",
        "联盟营销内置",
        "License key 管理",
        "被 Stripe 收购后更可靠",
      ],
      cons: [
        "费率比 Polar 略高",
        "API 不如 Stripe 灵活",
        "定制 checkout 有限",
      ],
      setupTips: [
        "lemonsqueezy.com 注册 → Store",
        "创建 Product + Variant",
        "嵌入 Checkout Overlay 或 Link",
        "配置 Webhook 处理 license 发放",
      ],
      verdict:
        "卖数字产品（模板、课程、图标包）首选。SaaS 订阅更推荐 Polar。",
    },
  },
  {
    id: "posthog",
    name: "PostHog",
    tagline: "开源产品分析 + Feature Flags + Session Replay",
    category: "analytics",
    pricing: "免费 1M events/月",
    website: "posthog.com",
    indieScore: 8,
    preview:
      "比 GA4 强 10 倍的产品分析。事件追踪、漏斗、A/B 测试、Feature Flags，免费 1M events 够 indie SaaS。",
    review: {
      summary:
        "PostHog 是 indie SaaS 的产品分析瑞士军刀。不只要 pageview——追踪用户行为事件、看漏斗转化、做 A/B 测试、控制 Feature Flags，全在一个平台。免费 1M events/月对早期产品绰绰有余。",
      bestFor: ["SaaS 产品分析", "需要 Feature Flags", "想看用户 Session Replay"],
      pricingDetail:
        "免费 1M events/月。超出 $0.00005/event。对比 Mixpanel ($28/月 20K MTU) 和 Amplitude (企业价)，PostHog 免费层碾压。",
      alternatives: [
        { name: "Mixpanel", pricing: "$28/月起", when: "成熟产品、复杂漏斗" },
        { name: "Plausible", pricing: "$9/月", when: "只要 landing page PV" },
        { name: "Umami", pricing: "免费", when: "极简 pageview" },
      ],
      pros: [
        "免费 1M events 极慷慨",
        "Feature Flags 内置",
        "Session Replay 看用户行为",
        "可自托管开源版",
      ],
      cons: [
        "学习曲线比 Plausible 陡",
        "script 比 Plausible 重",
        "国内访问慢",
      ],
      setupTips: [
        "posthog.com 注册 → Project",
        "npm install posthog-js",
        "app/providers.tsx 初始化 PostHog",
        "追踪关键事件：signup, checkout, feature_use",
      ],
      verdict:
        "SaaS 产品分析首选。免费层够从 0 到 $5K MRR，Feature Flags 省下 LaunchDarkly $10/月。",
    },
  },
];

export const categoryKeys: ToolCategory[] = [
  "payments",
  "email",
  "hosting",
  "auth",
  "analytics",
  "database",
];

export function getToolById(id: string, locale: Locale = "en"): IndieTool | undefined {
  const tool = indieTools.find((t) => t.id === id);
  if (!tool) return undefined;
  return localizeToolFields(tool, locale);
}

export function getPublicTools(locale: Locale = "en"): Omit<IndieTool, "review">[] {
  return indieTools.map(({ review: _r, ...rest }) => {
    const localized = localizeToolFields({ ...rest, review: _r }, locale);
    const { review: _rv, ...pub } = localized;
    return pub;
  });
}

export const stats = {
  toolCount: indieTools.length,
  categoryCount: categoryKeys.length,
  avgScore: (
    indieTools.reduce((sum, t) => sum + t.indieScore, 0) / indieTools.length
  ).toFixed(1),
};
