import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "GitBook $65/mo + per seat? · $9.9/mo flat",
    title: "API docs that ship — without the GitBook tax",
    subtitle:
      "Visual editor, custom domain, auto llms.txt. 5 free doc sites, then $9.9/mo unlimited pages.",
    ctaPrimary: "Create docs free",
    ctaPrimaryHref: "/docs",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free doc sites · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs GitBook $65+" },
      { stat: "∞", label: "pages, no per-seat fees" },
      { stat: "5 min", label: "to publish your first docs" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a doc site",
          desc: "Name your API docs, get a public URL and llms.txt instantly",
        },
        {
          step: "2",
          title: "Add pages",
          desc: "Write guides, API reference, and changelog in markdown",
        },
        {
          step: "3",
          title: "Go live",
          desc: "Custom domain, SEO-ready, indexed by ChatGPT and Claude",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📝",
        title: "Markdown editor",
        desc: "Write docs in markdown with live preview. Code blocks, callouts, and tabs built in.",
      },
      {
        icon: "🤖",
        title: "Auto llms.txt",
        desc: "Every site ships llms.txt so ChatGPT, Claude, and Cursor index your docs.",
      },
      {
        icon: "🌐",
        title: "Custom domain",
        desc: "docs.yourproduct.com on Pro. No GitBook $65/mo + $12/seat surprise.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited doc sites and pages. No per-editor or per-seat pricing.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo founder",
        text: "GitBook wanted $65/mo plus $12 per editor. Docs Pulse gave me unlimited docs for $9.9/mo.",
      },
      {
        name: "Priya S.",
        role: "Indie hacker",
        text: "llms.txt auto-generated on publish. My API docs now show up in Claude and Cursor search.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "Shipped API docs in 5 minutes. Dark theme, custom domain, no enterprise sales call.",
      },
    ],
    closing: {
      title: "Stop paying per seat for docs",
      subtitle: "5 free doc sites · then $9.9/mo for unlimited",
      ctaPrimary: "Create docs free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live docs preview",
      caption: "Sidebar nav · markdown pages · llms.txt ready",
      preview:
        "📚 My API Docs                    docs.mysaas.com\n─────────────────────────────────────────\n│ Getting Started  │  # Authentication\n│ Authentication   │\n│ API Reference    │  All requests require a Bearer token:\n│ Changelog        │\n│                  │  ```\n│                  │  Authorization: Bearer sk_live_xxx\n│                  │  ```\n│                  │\n│                  │  ## POST /v1/items\n│                  │  Create a new item.\n─────────────────────────────────────────\n   llms.txt ✓  ·  SEO ✓  ·  3 pages live",
    },
  },
  zh: {
    badge: "GitBook $65/月 + 按人头？· $9.9/月一口价",
    title: "快速上线 API 文档 — 不用交 GitBook 税",
    subtitle:
      "可视化编辑、自定义域名、自动生成 llms.txt。免费体验 5 个文档站，之后 $9.9/月无限页面。",
    ctaPrimary: "免费创建文档",
    ctaPrimaryHref: "/docs",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，GitBook 要 $65+" },
      { stat: "∞", label: "页面不限量，无按人头收费" },
      { stat: "5 分钟", label: "发布第一份 API 文档" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建文档站",
          desc: "命名 API 文档，几秒内获得公开链接和 llms.txt",
        },
        {
          step: "2",
          title: "添加页面",
          desc: "用 Markdown 编写指南、API 参考和更新日志",
        },
        {
          step: "3",
          title: "上线发布",
          desc: "自定义域名、SEO 就绪，可被 ChatGPT 和 Claude 索引",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📝",
        title: "Markdown 编辑器",
        desc: "Markdown 实时预览编写文档。内置代码块、提示框和标签页。",
      },
      {
        icon: "🤖",
        title: "自动 llms.txt",
        desc: "每个文档站自动生成 llms.txt，供 ChatGPT、Claude 和 Cursor 索引。",
      },
      {
        icon: "🌐",
        title: "自定义域名",
        desc: "Pro 版支持 docs.yourproduct.com。告别 GitBook $65/月 + $12/人。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "文档站与页面不限量。无按编辑者或人头收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人创始人",
        text: "GitBook 要 $65/月再加 $12/编辑者。API 文档托管 $9.9/月无限用。",
      },
      {
        name: "Priya S.",
        role: "独立开发者",
        text: "发布时自动生成 llms.txt。我的 API 文档现在能被 Claude 和 Cursor 搜到。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "5 分钟上线 API 文档。深色主题、自定义域名，不用打企业销售电话。",
      },
    ],
    closing: {
      title: "别再按人头为文档付费",
      subtitle: "免费 5 个文档站 · 之后 $9.9/月 不限量",
      ctaPrimary: "免费创建文档",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "文档实时预览",
      caption: "侧边栏导航 · Markdown 页面 · llms.txt 就绪",
      preview:
        "📚 我的 API 文档                    docs.mysaas.com\n─────────────────────────────────────────\n│ 快速开始         │  # 身份验证\n│ 身份验证         │\n│ API 参考         │  所有请求需要 Bearer 令牌：\n│ 更新日志         │\n│                  │  ```\n│                  │  Authorization: Bearer sk_live_xxx\n│                  │  ```\n│                  │\n│                  │  ## POST /v1/items\n│                  │  创建新项目。\n─────────────────────────────────────────\n   llms.txt ✓  ·  SEO ✓  ·  3 页已上线",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Docs Pulse",
    subtitle: "One price, unlimited doc sites and pages. No per-seat fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs GitBook $65+/mo · cancel anytime",
    perks: [
      "Unlimited doc sites",
      "Unlimited pages",
      "Auto llms.txt generation",
      "Custom domain support",
      "Markdown + code blocks",
      "SEO metadata per page",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free doc sites, then subscribe?",
    whyItems: [
      "Hosting docs and llms.txt costs real infrastructure",
      "Paying users = founders who actually ship API docs",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 API 文档托管",
    subtitle: "一口价，文档站与页面不限量。无按人头收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 GitBook $65+/月 · 随时可取消",
    perks: [
      "不限文档站数量",
      "不限页面数量",
      "自动生成 llms.txt",
      "自定义域名支持",
      "Markdown + 代码块",
      "每页 SEO 元数据",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个文档站，之后订阅？",
    whyItems: [
      "托管文档与 llms.txt 有真实基础设施成本",
      "付费用户 = 真正在发布 API 文档的创始人",
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
