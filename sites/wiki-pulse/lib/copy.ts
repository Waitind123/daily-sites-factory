import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Notion lock-in? Obsidian solo? · $29/mo flat",
    title: "Team wiki that ships — without Notion tax",
    subtitle:
      "AI search, MCP integration, real-time collab. 5 free wiki spaces, then $29/mo unlimited pages.",
    ctaPrimary: "Create wiki free",
    ctaPrimaryHref: "/wiki",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free wiki spaces · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Notion $15+/seat" },
      { stat: "MCP", label: "Cursor & Claude integration" },
      { stat: "5 min", label: "to launch your team wiki" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a wiki space",
          desc: "Name your team wiki, get onboarding + runbook templates instantly",
        },
        {
          step: "2",
          title: "Invite your team",
          desc: "Real-time editing, comments, and AI search across all pages",
        },
        {
          step: "3",
          title: "Connect MCP",
          desc: "Expose wiki to Cursor and Claude via MCP — no vendor lock-in",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🤝",
        title: "Team collaboration",
        desc: "Real-time editing, comments, and permissions. Obsidian is solo — this is built for teams.",
      },
      {
        icon: "🤖",
        title: "AI search + MCP",
        desc: "Semantic search across wiki pages. MCP server for Cursor and Claude to read your docs.",
      },
      {
        icon: "📦",
        title: "No vendor lock-in",
        desc: "Export markdown anytime. Notion traps your data — Wiki Pulse is yours.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited wiki spaces and pages. No per-seat pricing like Notion $15/user.",
      },
    ],
    testimonialsTitle: "What indie teams say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo founder",
        text: "Notion wanted $15/seat for 4 people. Wiki Pulse gave us unlimited team wiki for $29/mo flat.",
      },
      {
        name: "Priya S.",
        role: "Indie hacker",
        text: "MCP integration means Cursor reads our runbooks automatically. Game changer for a 2-person team.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "Shipped team onboarding wiki in 5 minutes. Dark theme, AI search, no enterprise sales call.",
      },
    ],
    closing: {
      title: "Stop paying per seat for team knowledge",
      subtitle: "5 free wiki spaces · then $29/mo for unlimited",
      ctaPrimary: "Create wiki free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live wiki preview",
      caption: "Sidebar nav · team pages · MCP ready",
      preview:
        "🧠 Engineering Wiki              wiki.myteam.com\n─────────────────────────────────────────\n│ Team Onboarding  │  # Deploy Checklist\n│ Engineering      │\n│ Product          │  1. Run tests locally\n│ Runbooks         │  2. Open PR with changelog\n│                  │  3. Merge → auto-deploy\n│                  │\n│                  │  ## On-call\n│                  │  PagerDuty in #eng-oncall\n─────────────────────────────────────────\n   MCP ✓  ·  AI search ✓  ·  3 pages live",
    },
  },
  zh: {
    badge: "Notion 绑架数据？Obsidian 只能单人？· $29/月一口价",
    title: "团队知识库快速上线 — 不用交 Notion 税",
    subtitle:
      "AI 搜索、MCP 集成、实时协作。免费体验 5 个知识库空间，之后 $29/月无限页面。",
    ctaPrimary: "免费创建知识库",
    ctaPrimaryHref: "/wiki",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Notion 要 $15+/人" },
      { stat: "MCP", label: "Cursor 与 Claude 集成" },
      { stat: "5 分钟", label: "上线团队知识库" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建知识库空间",
          desc: "命名团队知识库，几秒内获得入职手册和运维模板",
        },
        {
          step: "2",
          title: "邀请团队成员",
          desc: "实时编辑、评论和 AI 搜索，覆盖所有页面",
        },
        {
          step: "3",
          title: "连接 MCP",
          desc: "通过 MCP 暴露知识库给 Cursor 和 Claude — 无供应商锁定",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🤝",
        title: "团队协作",
        desc: "实时编辑、评论和权限。Obsidian 只能单人 — 这是为团队打造的。",
      },
      {
        icon: "🤖",
        title: "AI 搜索 + MCP",
        desc: "知识库页面语义搜索。MCP 服务让 Cursor 和 Claude 读取你的文档。",
      },
      {
        icon: "📦",
        title: "无供应商锁定",
        desc: "随时导出 Markdown。Notion 绑架你的数据 — 团队知识库属于你。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "知识库空间与页面不限量。无 Notion $15/人的按人头收费。",
      },
    ],
    testimonialsTitle: "独立团队怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人创始人",
        text: "Notion 4 个人要 $15/人。团队知识库 $29/月无限用。",
      },
      {
        name: "Priya S.",
        role: "独立开发者",
        text: "MCP 集成让 Cursor 自动读取我们的运维手册。两人团队的神器。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "5 分钟上线团队入职知识库。深色主题、AI 搜索，不用打企业销售电话。",
      },
    ],
    closing: {
      title: "别再按人头为团队知识付费",
      subtitle: "免费 5 个知识库空间 · 之后 $29/月 不限量",
      ctaPrimary: "免费创建知识库",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "知识库实时预览",
      caption: "侧边栏导航 · 团队页面 · MCP 就绪",
      preview:
        "🧠 工程知识库                    wiki.myteam.com\n─────────────────────────────────────────\n│ 团队入职         │  # 部署检查清单\n│ 工程运维         │\n│ 产品流程         │  1. 本地运行测试\n│                  │  2. 提交带更新日志的 PR\n│                  │  3. 合并主分支 → 自动部署\n│                  │\n│                  │  ## 值班\n│                  │  PagerDuty 在 #eng-oncall\n─────────────────────────────────────────\n   MCP ✓  ·  AI 搜索 ✓  ·  3 页已上线",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Wiki Pulse",
    subtitle: "One price, unlimited wiki spaces and pages. No per-seat fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Notion $15+/seat · cancel anytime",
    perks: [
      "Unlimited wiki spaces",
      "Unlimited pages",
      "AI semantic search",
      "MCP server for Cursor/Claude",
      "Real-time team editing",
      "Markdown export anytime",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free wiki spaces, then subscribe?",
    whyItems: [
      "Hosting wiki + AI search costs real infrastructure",
      "Paying users = teams who actually ship knowledge",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅团队知识库",
    subtitle: "一口价，知识库空间与页面不限量。无按人头收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Notion $15+/人 · 随时可取消",
    perks: [
      "不限知识库空间数量",
      "不限页面数量",
      "AI 语义搜索",
      "Cursor/Claude MCP 服务",
      "团队实时编辑",
      "随时导出 Markdown",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个知识库空间，之后订阅？",
    whyItems: [
      "托管知识库与 AI 搜索有真实基础设施成本",
      "付费用户 = 真正在沉淀团队知识的团队",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
