import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "Open-Source SaaS Alternatives Guide 2026 — self-host & save $200+/mo",
      description:
        "Complete guide to replacing Slack, Jira, Zapier, Auth0 with self-hosted open-source tools. Docker configs, savings calculator, migration checklists.",
    },
    h1: "Open-source SaaS alternatives: the 2026 self-hosting guide for indie hackers",
    updated: "Updated June 2026 · 14 min read",
    intro: [
      "Every SaaS subscription you pay is a piece of your sovereign control you're leasing. Slack, Jira, Zapier, Auth0 — the monthly bill for a 10-person indie team easily hits $300–500. The AltStack HN launch (450+ tools) proved demand: developers want one place to discover, compare, and deploy open-source alternatives.",
      "This guide walks you through the highest-ROI migrations indie hackers are making in 2026: which proprietary tools to replace first, how much you'll save, and weekend deploy checklists with Docker Compose.",
      "The goal isn't ideological purity — it's math. A $5–20 VPS running Mattermost + Plane + n8n replaces $200+/mo in subscriptions. That's runway for your actual product.",
    ],
    sections: [
      {
        h2: "Why indie hackers are self-hosting in 2026",
        paragraphs: ["Three forces driving the shift:"],
        list: [
          "Price hikes — UptimeRobot 4×, HoneyBook 89%, enterprise SaaS creeping into indie pricing",
          "Data sovereignty — GDPR, AI training on your data, vendor lock-in anxiety",
          "Tool maturity — Plane, Cal.com, n8n, Authentik are production-ready, not hobby projects",
        ],
        after: [
          "Reddit r/selfhosted and HN Show HN posts consistently show indie founders saving $150–400/mo after migrating chat, PM, and automation to a single VPS.",
        ],
      },
      {
        h2: "The bootstrapper self-host stack (save ~$310/mo)",
        tools: [
          {
            h3: "Chat: Mattermost replaces Slack",
            p: "Slack Pro for 10 users = $87.50/mo. Mattermost Team Edition on a $5 VPS = unlimited history, webhooks, bot API. Migration: export Slack JSON → import to Mattermost.",
          },
          {
            h3: "Project management: Plane replaces Jira",
            p: "Jira Standard 10 users = $77.50/mo. Plane Community self-host = $0 with Sprint, Kanban, Cycles, public roadmap. Modern UI that doesn't feel like 2010.",
            link: { href: "/tools", text: "Browse PM alternatives", suffix: " with Docker configs." },
          },
          {
            h3: "Automation: n8n replaces Zapier",
            p: "Zapier Professional = $49.99/mo for 750 tasks. n8n Community = unlimited executions self-hosted. 400+ integrations including Stripe, GitHub, OpenAI.",
          },
          {
            h3: "Analytics: Plausible replaces GA4",
            p: "GA4 is free but complex and privacy-invasive. Plausible CE self-host = $0 on same VPS. 1KB script, no cookie banner, GDPR-friendly.",
          },
          {
            h3: "Auth: Authentik replaces Auth0",
            p: "Auth0 = $23+/mo after 7K MAU. Authentik Community = unlimited users self-hosted. OAuth, SAML, MFA, social login.",
          },
          {
            h3: "Backend: Supabase replaces Firebase",
            p: "Firebase vendor lock-in is real. Supabase Docker = Postgres + Auth + Storage + Realtime. Full data ownership on your VPS.",
          },
        ],
      },
      {
        h2: "Weekend migration checklist",
        paragraphs: ["Follow this order for lowest risk:"],
        ordered: [
          "Start with analytics (Plausible) — read-only, no team disruption",
          "Add automation (n8n) — parallel to Zapier, switch webhooks one by one",
          "Migrate chat (Mattermost) — run parallel with Slack for 1 week",
          "Move PM (Plane) — import GitHub Issues first, then active sprints",
          "Replace auth last (Authentik) — highest risk, needs staging environment",
        ],
        after: [
          "Total VPS cost: $10–20/mo on Hetzner/DigitalOcean. Total savings: $200–400/mo for a typical indie team.",
        ],
      },
      {
        h2: "When NOT to self-host",
        paragraphs: ["Self-hosting isn't always the answer:"],
        list: [
          "Solo founder with $0 MRR — use free tiers (Clerk, Vercel Hobby) until revenue",
          "Compliance-heavy (HIPAA, SOC2) — managed SaaS may be cheaper than audit costs",
          "Non-technical team — ops burden falls on you when things break at 3am",
          "Tools you use < 1 hour/month — not worth the maintenance",
        ],
        after: [
          "Rule of thumb: self-host tools costing $20+/mo that your team uses daily. Keep payment (Stripe/Polar) and deploy (Vercel) managed.",
        ],
      },
      {
        h2: "Getting started with Alt Stack",
        paragraphs: [
          "Alt Stack curates 50+ open-source alternatives with Docker Compose configs, savings calculators, and sovereignty scores. Free trial: 5 deep dives. Unlimited access: $9.9/mo.",
          "Start by browsing the directory, pick your highest-cost SaaS subscription, and read the deep dive for its open-source replacement. Most migrations take one weekend.",
        ],
        after: [
          "Subscribe for unlimited access — cancel anytime.",
        ],
      },
    ],
    cta: {
      title: "Don't want to hunt Docker configs across 10 repos?",
      subtitle: "50+ alternatives with deployment files, savings calc & migration guides",
      button: "Subscribe $9.9/mo · unlimited deep dives",
    },
  },
  zh: {
    meta: {
      title: "2026 开源 SaaS 替代品指南 — 自托管每月省 $200+",
      description:
        "完整指南：用自托管开源工具替代 Slack、Jira、Zapier、Auth0。Docker 配置、节省计算器、迁移 checklist。",
    },
    h1: "开源 SaaS 替代品：2026 独立开发者自托管指南",
    updated: "更新于 2026 年 6 月 · 14 分钟阅读",
    intro: [
      "你支付的每一笔 SaaS 订阅，都是你在租赁的一部分主权控制权。Slack、Jira、Zapier、Auth0 — 10 人 indie 团队的月费轻松达到 $300–500。AltStack 在 HN 上线（450+ 工具）证明了需求：开发者想要一个地方发现、对比、部署开源替代品。",
      "本指南介绍 2026 年 indie hacker 最高 ROI 的迁移路径：先替换哪些闭源工具、能省多少、以及带 Docker Compose 的周末部署 checklist。",
      "目标不是意识形态 — 是数学。$5–20 的 VPS 运行 Mattermost + Plane + n8n 可替代 $200+/月的订阅。那是你实际产品的 runway。",
    ],
    sections: [
      {
        h2: "为什么 2026 年 indie hacker 开始自托管",
        paragraphs: ["三股推动力："],
        list: [
          "涨价潮 — UptimeRobot 4 倍、HoneyBook 89%、企业 SaaS 定价渗入 indie 市场",
          "数据主权 — GDPR、AI 用你的数据训练、vendor lock-in 焦虑",
          "工具成熟 — Plane、Cal.com、n8n、Authentik 已是生产级，不是 hobby 项目",
        ],
        after: [
          "Reddit r/selfhosted 和 HN Show HN 帖子 consistently 显示 indie 创始人迁移聊天、PM、自动化到单 VPS 后节省 $150–400/月。",
        ],
      },
      {
        h2: "Bootstrapper 自托管栈（省 ~$310/月）",
        tools: [
          {
            h3: "聊天：Mattermost 替代 Slack",
            p: "Slack Pro 10 人 = $87.50/月。Mattermost Team Edition $5 VPS = 无限历史、Webhook、Bot API。迁移：导出 Slack JSON → 导入 Mattermost。",
          },
          {
            h3: "项目管理：Plane 替代 Jira",
            p: "Jira Standard 10 人 = $77.50/月。Plane Community 自托管 = $0，含 Sprint、Kanban、Cycles、公开 Roadmap。现代 UI，不像 2010 年的产品。",
            link: { href: "/tools", text: "浏览 PM 替代品", suffix: "含 Docker 配置。" },
          },
          {
            h3: "自动化：n8n 替代 Zapier",
            p: "Zapier Professional = $49.99/月 750 tasks。n8n Community 自托管 = 无限 execution。400+ 集成含 Stripe、GitHub、OpenAI。",
          },
          {
            h3: "分析：Plausible 替代 GA4",
            p: "GA4 免费但复杂且侵犯隐私。Plausible CE 自托管 = 同一 VPS 上 $0。1KB 脚本、无 Cookie 横幅、GDPR 友好。",
          },
          {
            h3: "认证：Authentik 替代 Auth0",
            p: "Auth0 = 7K MAU 后 $23+/月。Authentik Community 自托管 = 无限用户。OAuth、SAML、MFA、社交登录。",
          },
          {
            h3: "后端：Supabase 替代 Firebase",
            p: "Firebase vendor lock-in 真实存在。Supabase Docker = Postgres + Auth + Storage + Realtime。VPS 上完全数据所有权。",
          },
        ],
      },
      {
        h2: "周末迁移 checklist",
        paragraphs: ["按此顺序风险最低："],
        ordered: [
          "从分析工具开始（Plausible）— 只读，不影响团队",
          "添加自动化（n8n）— 与 Zapier 并行，逐个切换 webhook",
          "迁移聊天（Mattermost）— 与 Slack 并行运行 1 周",
          "迁移 PM（Plane）— 先导入 GitHub Issues，再迁移活跃 Sprint",
          "最后替换认证（Authentik）— 风险最高，需要 staging 环境",
        ],
        after: [
          "VPS 总成本：Hetzner/DigitalOcean $10–20/月。典型 indie 团队总节省：$200–400/月。",
        ],
      },
      {
        h2: "什么时候不该自托管",
        paragraphs: ["自托管不总是正确答案："],
        list: [
          "MRR $0 的 solo founder — 先用免费层（Clerk、Vercel Hobby）直到有收入",
          "合规要求高（HIPAA、SOC2）— 托管 SaaS 可能比审计成本更低",
          "非技术团队 — 凌晨 3 点出问题时运维负担全在你",
          "每月使用 < 1 小时的工具 — 不值得维护",
        ],
        after: [
          "经验法则：自托管团队每天用、月费 $20+ 的工具。支付（Stripe/Polar）和部署（Vercel）保持托管。",
        ],
      },
      {
        h2: "从 Alt Stack 开始",
        paragraphs: [
          "Alt Stack 精选 50+ 开源替代品，含 Docker Compose 配置、节省计算器和主权评分。免费体验 5 次深度查阅。无限访问：$9.9/月。",
          "先浏览目录，找到月费最高的 SaaS 订阅，查阅其开源替代品的深度指南。大多数迁移一个周末搞定。",
        ],
        after: [
          "订阅无限访问 — 随时取消。",
        ],
      },
    ],
    cta: {
      title: "不想在 10 个 repo 里找 Docker 配置？",
      subtitle: "50+ 替代品含部署文件、节省计算与迁移指南",
      button: "订阅 $9.9/月 · 无限深度查阅",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
