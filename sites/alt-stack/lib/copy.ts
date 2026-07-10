import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "450+ tools on AltStack · fragmented discovery · $29/mo",
    title: "Open-source SaaS alternatives — self-host & stop paying subscriptions",
    subtitle:
      "Curated directory with Docker configs, pricing vs proprietary SaaS, and setup guides. 5 free deep dives, then $29/mo.",
    ctaPrimary: "Browse alternatives free",
    ctaPrimaryHref: "/tools",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free deep dives · then $29/mo",
    stats: [
      { stat: "50+", label: "curated alternatives" },
      { stat: "8", label: "stack categories" },
      { stat: "8.9", label: "avg sovereignty score" },
    ],
    previewTitle: "Top-rated alternatives",
    previewNote: "Docker Compose configs, self-host steps & savings calc require",
    previewLink: "deep dive",
    paymentCompareLabel: "Analytics: which to self-host?",
    productDemo: {
      title: "See your savings before you migrate",
      caption: "Compare proprietary SaaS cost vs self-hosted stack",
      preview: `┌─────────────────────────────────────────────────┐
│  💰 Monthly savings calculator                  │
├─────────────────────────────────────────────────┤
│  Slack Pro (10 users)      $87.50/mo            │
│  → Mattermost self-host    $5 VPS    ✅ -$82   │
│  Jira (10 users)           $77.50/mo            │
│  → Plane self-host         $0       ✅ -$77   │
│  Zapier Professional       $49.99/mo            │
│  → n8n self-host           $0       ✅ -$50   │
│  Total savings:            ~$209/mo  🎉         │
└─────────────────────────────────────────────────┘`,
    },
    howItWorks: {
      title: "Escape subscription feudalism in 3 steps",
      steps: [
        {
          step: "1",
          title: "Find your SaaS replacement",
          desc: "Filter by category — analytics, chat, PM, auth, automation, publishing",
        },
        {
          step: "2",
          title: "Read deep dives",
          desc: "Docker Compose configs, real savings vs proprietary, pros/cons — not SEO listicles",
        },
        {
          step: "3",
          title: "Deploy this weekend",
          desc: "Copy-paste self-host checklists — from discovery to running in hours",
        },
      ],
    },
    featuresTitle: "Member features",
    features: [
      {
        icon: "🔓",
        title: "50+ curated alternatives",
        desc: "Only tools worth self-hosting — not a 5000-link junk directory",
      },
      {
        icon: "🐳",
        title: "Docker Compose configs",
        desc: "Production-hardened deployment files for Plausible, Plane, n8n, Supabase & more",
      },
      {
        icon: "💰",
        title: "Savings calculator",
        desc: "See exactly how much you save vs Slack, Jira, Zapier, Auth0 monthly",
      },
      {
        icon: "⚡",
        title: "Weekend deploy guides",
        desc: "Step-by-step self-host checklists — no doc-hopping across 10 repos",
      },
      {
        icon: "📊",
        title: "Sovereignty score 1–10",
        desc: "Community-driven ratings: self-hostability, activity, migration ease",
      },
      {
        icon: "🎯",
        title: "Stack bundles",
        desc: "\"Bootstrapper stack\" \"Privacy stack\" — pre-built tool combos for common use cases",
      },
    ],
    testimonialsTitle: "What builders say",
    testimonials: [
      {
        name: "Alex",
        role: "Solo SaaS founder",
        text: "Replaced Slack + Jira + Zapier with self-hosted stack. Saving $200+/mo on a $5 VPS.",
      },
      {
        name: "Mika",
        role: "Digital nomad dev",
        text: "Finally one place to find Docker configs. No more hunting GitHub READMEs at 2am.",
      },
      {
        name: "Chris",
        role: "Indie hacker",
        text: "The savings breakdown convinced me to self-host Plausible + Ghost. Paid for itself day 1.",
      },
    ],
    closing: {
      title: "Stop leasing your stack. Own it.",
      subtitle: "5 free deep dives · unlimited after $29/mo",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Browse alternatives free",
    },
  },
  zh: {
    badge: "AltStack 450+ 工具 · 发现碎片化 · $29/月",
    title: "开源 SaaS 替代品目录 — 自托管，停止订阅",
    subtitle:
      "精选目录含 Docker 配置、对比闭源 SaaS 定价、自托管指南。免费体验 5 次深度查阅，之后 $29/月。",
    ctaPrimary: "免费浏览替代品",
    ctaPrimaryHref: "/tools",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "50+", label: "精选替代品" },
      { stat: "8", label: "技术栈分类" },
      { stat: "8.9", label: "平均主权评分" },
    ],
    previewTitle: "高评分替代品",
    previewNote: "Docker Compose 配置、自托管步骤与节省计算需",
    previewLink: "深度查阅",
    paymentCompareLabel: "分析工具：该自托管哪个？",
    productDemo: {
      title: "迁移前先算清楚能省多少",
      caption: "对比闭源 SaaS 月费 vs 自托管成本",
      preview: `┌─────────────────────────────────────────────────┐
│  💰 月度节省计算器                              │
├─────────────────────────────────────────────────┤
│  Slack Pro（10 人）        $87.50/月            │
│  → Mattermost 自托管       $5 VPS    ✅ -$82   │
│  Jira（10 人）             $77.50/月            │
│  → Plane 自托管              $0       ✅ -$77   │
│  Zapier Professional       $49.99/月            │
│  → n8n 自托管                $0       ✅ -$50   │
│  合计节省：                ~$209/月  🎉         │
└─────────────────────────────────────────────────┘`,
    },
    howItWorks: {
      title: "3 步摆脱订阅束缚",
      steps: [
        {
          step: "1",
          title: "找到 SaaS 替代品",
          desc: "按分类筛选 — 分析、聊天、项目管理、认证、自动化、出版",
        },
        {
          step: "2",
          title: "深度查阅",
          desc: "Docker Compose 配置、对比闭源真实节省、优缺点 — 不是 SEO 水文",
        },
        {
          step: "3",
          title: "本周末部署",
          desc: "复制粘贴自托管 checklist — 从发现到运行只需几小时",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "🔓",
        title: "50+ 精选替代品",
        desc: "只收录值得自托管的工具 — 不是 5000 链接垃圾目录",
      },
      {
        icon: "🐳",
        title: "Docker Compose 配置",
        desc: "Plausible、Plane、n8n、Supabase 等生产级部署文件",
      },
      {
        icon: "💰",
        title: "节省计算器",
        desc: "精确对比 Slack、Jira、Zapier、Auth0 月度花费",
      },
      {
        icon: "⚡",
        title: "周末部署指南",
        desc: "逐步自托管 checklist — 不用在 10 个 repo README 间跳转",
      },
      {
        icon: "📊",
        title: "主权评分 1–10",
        desc: "社区驱动评分：自托管难度、活跃度、迁移便利性",
      },
      {
        icon: "🎯",
        title: "预置技术栈",
        desc: "「Bootstrapper 栈」「隐私栈」— 常见场景的预组合工具包",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "Alex",
        role: "独立 SaaS 创始人",
        text: "用自托管栈替代 Slack + Jira + Zapier。$5 VPS 每月省 $200+。",
      },
      {
        name: "Mika",
        role: "数字游民开发者",
        text: "终于有一个地方找 Docker 配置。不用凌晨 2 点翻 GitHub README 了。",
      },
      {
        name: "Chris",
        role: "Indie hacker",
        text: "节省对比让我决定自托管 Plausible + Ghost。第一天就回本。",
      },
    ],
    closing: {
      title: "停止租赁你的技术栈。拥有它。",
      subtitle: "免费体验 5 次 · $29/月无限查阅",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费浏览替代品",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
