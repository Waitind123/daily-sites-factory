import type { Locale } from "./i18n-shared";
import { localizeToolFields } from "./tools-locale";

export type ToolCategory =
  | "analytics"
  | "chat"
  | "project"
  | "database"
  | "productivity"
  | "automation"
  | "publishing"
  | "auth";

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
    id: "plausible",
    name: "Plausible Analytics",
    tagline: "轻量隐私友好的 Google Analytics 开源替代品",
    category: "analytics",
    pricing: "自托管免费 / 云 $9/月",
    website: "plausible.io",
    indieScore: 9,
    preview:
      "GA4 太重且侵犯隐私。Plausible 单脚本、无 Cookie、GDPR 友好 — 独立开发者落地页分析首选。",
    review: {
      summary:
        "Plausible 是最成熟的 GA 开源替代品之一。1KB 脚本、无 Cookie 横幅、核心指标一目了然。自托管 Community Edition 完全免费，Docker Compose 一键部署。",
      bestFor: ["落地页 PV/UV", "隐私敏感产品", "欧盟 GDPR 合规"],
      pricingDetail:
        "自托管 CE：$0/月（仅需 VPS ~$5）。官方云：$9/月 10K PV。对比 GA4 免费但配置复杂，Fathom $14/月。",
      alternatives: [
        { name: "Google Analytics 4", pricing: "免费", when: "需要复杂漏斗、已有 GA 生态" },
        { name: "Umami", pricing: "自托管免费", when: "更极简、完全自控" },
        { name: "PostHog", pricing: "免费 1M events", when: "需要产品事件 + Feature Flags" },
      ],
      pros: [
        "5 秒看懂 dashboard",
        "无 Cookie / GDPR 友好",
        "Docker 自托管成熟",
        "可公开分享 stats 链接",
      ],
      cons: ["漏斗功能需 Goals 配置", "功能少于 GA4", "国内 dashboard 访问慢"],
      setupTips: [
        "git clone plausible/analytics",
        "docker compose up -d（需 Postgres + Clickhouse）",
        "CNAME stats.yourdomain.com 指向 VPS",
        "layout.tsx 插入 script 标签",
      ],
      verdict: "自托管落地页分析首选。$5 VPS 替代 GA4 + 省去 Cookie 横幅律师费。",
    },
  },
  {
    id: "plane",
    name: "Plane",
    tagline: "开源 Jira / Linear 替代品 — 项目管理 + Issue 追踪",
    category: "project",
    pricing: "自托管免费 / 云 $8/用户/月",
    website: "plane.so",
    indieScore: 9,
    preview:
      "Jira $7.75/用户/月太贵。Plane 开源、界面现代、Sprint + Kanban + Roadmap 一体 — 小团队项目管理标配。",
    review: {
      summary:
        "Plane 是 2024-2026 年最火的 Jira 开源替代品。Next.js + Django 构建，UI 比 Jira 现代 10 倍。自托管 Docker 版完全免费，适合 1-20 人 indie 团队。",
      bestFor: ["小团队 Issue 追踪", "Sprint 规划", "公开 Roadmap"],
      pricingDetail:
        "Community 自托管：$0。Cloud：$8/用户/月。对比 Jira $7.75+、Linear $8/用户、Asana $10.99/用户。",
      alternatives: [
        { name: "Jira", pricing: "$7.75+/用户", when: "大企业、复杂工作流" },
        { name: "Linear", pricing: "$8/用户", when: "追求极致 UX、不介意闭源" },
        { name: "GitHub Issues", pricing: "免费", when: "纯 dev 团队、不需要 Sprint" },
      ],
      pros: ["现代 UI/UX", "Sprint + Kanban + List 视图", "Cycles 周期规划", "Docker 自托管成熟"],
      cons: ["自托管需维护 Postgres", "移动端体验一般", "集成生态少于 Jira"],
      setupTips: [
        "docker pull makeplane/plane-backend",
        "使用官方 docker-compose.yml",
        "配置 SMTP 用于邮件通知",
        "导入 GitHub Issues 迁移数据",
      ],
      verdict: "indie 团队项目管理首选。自托管 $0 替代 Jira $100+/月（10 人团队）。",
    },
  },
  {
    id: "mattermost",
    name: "Mattermost",
    tagline: "开源 Slack 替代品 — 自托管团队聊天",
    category: "chat",
    pricing: "自托管免费 / 企业版 $10/用户/月",
    website: "mattermost.com",
    indieScore: 8,
    preview:
      "Slack 免费版 90 天消息限制。Mattermost 自托管无限历史、端到端可选加密 — 数据完全在你手里。",
    review: {
      summary:
        "Mattermost 是企业级开源 Slack 替代品，美国国防部也在用。自托管 Team Edition 完全免费，支持频道、线程、Bot、Webhook。适合 remote indie 团队内部沟通。",
      bestFor: ["Remote 团队聊天", "数据主权要求", "Slack 迁移"],
      pricingDetail:
        "Team Edition 自托管：$0。Enterprise：$10/用户/月。对比 Slack Pro $8.75/用户、Discord 免费但非企业级。",
      alternatives: [
        { name: "Slack", pricing: "$8.75+/用户", when: "需要最大集成生态" },
        { name: "Rocket.Chat", pricing: "自托管免费", when: "需要视频通话内置" },
        { name: "Discord", pricing: "免费", when: "社区驱动、非正式团队" },
      ],
      pros: ["无限消息历史", "自托管数据主权", "Slack 式 UX", "丰富 Bot/Webhook API"],
      cons: ["自托管运维成本", "UI 不如 Slack 精致", "视频通话需插件"],
      setupTips: [
        "docker run mattermost/mattermost-team-edition",
        "配置 Postgres 数据库",
        "设置 SMTP + 自定义域名",
        "导入 Slack export JSON",
      ],
      verdict: "Remote indie 团队自托管聊天首选。$5 VPS 替代 Slack $100+/月。",
    },
  },
  {
    id: "supabase",
    name: "Supabase",
    tagline: "开源 Firebase 替代品 — Postgres + Auth + Storage + Realtime",
    category: "database",
    pricing: "自托管免费 / 云免费层 + Pro $25/月",
    website: "supabase.com",
    indieScore: 9,
    preview:
      "Firebase .vendor lock-in 严重。Supabase 开源 Postgres + 自动生成 API + Auth — 一人全栈后端标配。",
    review: {
      summary:
        "Supabase 是最完整的 Firebase 开源替代品。Postgres 数据库 + REST/GraphQL API + Auth + Storage + Edge Functions + Realtime — 一个 weekend 搭好后端。Docker 自托管完全免费。",
      bestFor: ["全栈 indie SaaS", "关系型数据", "快速 MVP 后端"],
      pricingDetail:
        "自托管 Docker：$0（需 VPS ~$10-20）。云免费层：500MB DB。Pro $25/月：8GB、不暂停。",
      alternatives: [
        { name: "Firebase", pricing: "免费层/按量", when: "NoSQL、Google 生态" },
        { name: "Appwrite", pricing: "自托管免费", when: "需要更多内置服务" },
        { name: "PocketBase", pricing: "单文件免费", when: "极简 MVP、SQLite 够用" },
      ],
      pros: ["完整 Postgres", "Row Level Security", "可视化 Dashboard", "Edge Functions"],
      cons: ["自托管需维护 Postgres", "复杂查询需调优", "有一定 vendor lock-in"],
      setupTips: [
        "git clone supabase/supabase",
        "docker compose -f docker/docker-compose.yml up",
        "配置 SUPABASE_URL + ANON_KEY",
        "SQL Editor 建表 + RLS 策略",
      ],
      verdict: "2026 indie 全栈后端默认选择。自托管 $10 VPS 替代 Firebase + 数据主权。",
    },
  },
  {
    id: "calcom",
    name: "Cal.com",
    tagline: "开源 Calendly 替代品 — 自托管预约调度",
    category: "productivity",
    pricing: "自托管免费 / 云 $12/月",
    website: "cal.com",
    indieScore: 9,
    preview:
      "Calendly $12/月且无法深度定制。Cal.com 开源、可白标、Stripe 集成 — indie 开发者预约页标配。",
    review: {
      summary:
        "Cal.com（原 Calendso）是最流行的 Calendly 开源替代品。Next.js 构建，支持多日历、时区、团队调度、Stripe 付费预约。自托管完全免费，可自定义域名和品牌。",
      bestFor: ["Consulting 预约", "Demo call 调度", "付费咨询时段"],
      pricingDetail:
        "自托管：$0。Cloud Teams：$12/用户/月。对比 Calendly $12/月、Calendly Teams $20/用户。",
      alternatives: [
        { name: "Calendly", pricing: "$12+/月", when: "不需要自托管、要最大品牌信任" },
        { name: "TidyCal", pricing: "$29 终身", when: "一次性付费、功能够用" },
        { name: "BookPulse", pricing: "$9.9/月", when: "极简 indie 预约页" },
      ],
      pros: ["完全开源", "Stripe 付费预约", "白标/custom domain", "团队调度"],
      cons: ["自托管需维护", "Google Calendar 同步偶发问题", "移动端 UI 一般"],
      setupTips: [
        "git clone calcom/cal.com",
        "cp .env.example .env — 配置 DATABASE_URL",
        "yarn && yarn build && yarn start",
        "连接 Google Calendar OAuth",
      ],
      verdict: "indie consulting/销售预约首选。自托管 $0 替代 Calendly $144/年。",
    },
  },
  {
    id: "ghost",
    name: "Ghost",
    tagline: "开源 Substack / Medium 替代品 — 专业发布 + 会员制",
    category: "publishing",
    pricing: "自托管免费 / Ghost(Pro) $9/月",
    website: "ghost.org",
    indieScore: 9,
    preview:
      "Substack 抽 10% 收入。Ghost 自托管 0% 抽成、SEO 优先、内置会员订阅 — indie 博客/newsletter 标配。",
    review: {
      summary:
        "Ghost 是专业级开源 CMS，专为出版和会员制设计。内置 Stripe 订阅、SEO 优化、Newsletter、AMP。自托管完全免费，Node.js + MySQL 部署。",
      bestFor: ["Indie 博客", "Paid newsletter", "内容创作者会员制"],
      pricingDetail:
        "自托管：$0（VPS ~$5-10）。Ghost(Pro) 托管：$9/月。对比 Substack 10% 抽成、Medium Partner Program 不稳定。",
      alternatives: [
        { name: "Substack", pricing: "10% 抽成", when: "要内置读者发现网络" },
        { name: "WordPress", pricing: "自托管免费", when: "需要插件生态、非 newsletter 优先" },
        { name: "Hashnode", pricing: "免费", when: "纯 dev 博客、不需要会员制" },
      ],
      pros: ["0% 平台抽成", "SEO 优先架构", "内置 Stripe 会员", "Markdown + 编辑器"],
      cons: ["自托管需 Node.js 运维", "主题生态小于 WordPress", "无内置读者网络"],
      setupTips: [
        "ghost install local --db=sqlite（开发）",
        "生产：Docker ghost:latest + MySQL",
        "Settings → Integrations → Stripe",
        "配置 custom domain + SSL",
      ],
      verdict: "indie 内容创作者首选。自托管保留 100% 收入，SEO 优于 Substack。",
    },
  },
  {
    id: "n8n",
    name: "n8n",
    tagline: "开源 Zapier / Make 替代品 — 自托管工作流自动化",
    category: "automation",
    pricing: "自托管免费 / 云 $24/月",
    website: "n8n.io",
    indieScore: 9,
    preview:
      "Zapier $29.99/月起按 task 计费。n8n 自托管无限 workflow、400+ 集成 — indie 自动化标配。",
    review: {
      summary:
        "n8n 是最强大的 Zapier 开源替代品。可视化 workflow 编辑器、400+ 集成（Stripe、Slack、GitHub、OpenAI）、支持自定义 Code 节点。自托管 Community Edition 完全免费，无限 execution。",
      bestFor: ["SaaS 自动化", "Webhook 编排", "AI workflow"],
      pricingDetail:
        "Community 自托管：$0 无限 execution。Cloud Starter：$24/月 2500 executions。对比 Zapier $29.99/月 750 tasks。",
      alternatives: [
        { name: "Zapier", pricing: "$29.99+/月", when: "非技术用户、要最大集成" },
        { name: "Make (Integromat)", pricing: "$10.59+/月", when: "复杂 visual workflow" },
        { name: "Activepieces", pricing: "自托管免费", when: "更轻量、新兴项目" },
      ],
      pros: ["无限自托管 execution", "400+ 集成", "Code 节点（JS/Python）", "AI Agent 节点"],
      cons: ["自托管需维护", "学习曲线中等", "UI 不如 Zapier 精致"],
      setupTips: [
        "docker run -it --rm n8nio/n8n",
        "配置 N8N_ENCRYPTION_KEY + WEBHOOK_URL",
        "Settings → Credentials 连接 Stripe/GitHub",
        "Export workflow JSON 备份",
      ],
      verdict: "indie SaaS 自动化首选。自托管 $0 替代 Zapier $360+/年。",
    },
  },
  {
    id: "authentik",
    name: "Authentik",
    tagline: "开源 Auth0 / Okta 替代品 — 身份认证 + SSO",
    category: "auth",
    pricing: "自托管免费 / 企业版联系销售",
    website: "goauthentik.io",
    indieScore: 8,
    preview:
      "Auth0 免费 7K MAU 后 $23/月。Authentik 自托管无限用户、OAuth/SAML/MFA — 数据主权认证方案。",
    review: {
      summary:
        "Authentik 是现代化的开源 IdP（Identity Provider）。支持 OAuth2、OIDC、SAML、LDAP、MFA、Social Login。自托管完全免费，适合 indie SaaS 需要 SSO 或多应用统一认证的场景。",
      bestFor: ["多应用 SSO", "Self-hosted auth", "B2B SAML 需求"],
      pricingDetail:
        "Community 自托管：$0 无限用户。Enterprise：联系销售。对比 Auth0 $23+/月 1000 MAU、Clerk $25/月。",
      alternatives: [
        { name: "Auth0", pricing: "$23+/月", when: "不想运维、要最大生态" },
        { name: "Clerk", pricing: "免费 10K MAU", when: "Next.js 嵌入式 UI 优先" },
        { name: "Keycloak", pricing: "自托管免费", when: "企业级 Java 生态" },
      ],
      pros: ["无限自托管用户", "OAuth + SAML + LDAP", "现代 UI/admin", "Flow 自定义认证"],
      cons: ["自托管运维复杂", "文档不如 Auth0", "小项目可能 overkill"],
      setupTips: [
        "docker compose -f docker-compose.yml up（官方）",
        "Admin → Applications → 创建 OAuth Provider",
        "配置 Outpost 用于 Proxy 认证",
        "集成 Next.js via OIDC",
      ],
      verdict: "需要 SSO/数据主权的 indie SaaS 首选。自托管 $0 替代 Auth0 $276+/年。",
    },
  },
];

export const categoryKeys: ToolCategory[] = [
  "analytics",
  "chat",
  "project",
  "database",
  "productivity",
  "automation",
  "publishing",
  "auth",
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
