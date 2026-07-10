import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Zendesk $98/agent? · $29/mo flat",
    title: "Help desk for indie hackers — without the Zendesk tax",
    subtitle:
      "Shared inbox, AI reply suggestions, built-in knowledge base. 5 free tickets, then $29/mo unlimited.",
    ctaPrimary: "Open inbox free",
    ctaPrimaryHref: "/inbox",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Zendesk $98+/agent" },
      { stat: "AI", label: "reply suggestions from your KB" },
      { stat: "2 min", label: "to handle your first ticket" },
    ],
    howItWorks: {
      title: "Workflow",
      steps: [
        {
          step: "1",
          title: "Capture tickets",
          desc: "Paste customer emails or create tickets manually — shared inbox for solo founders",
        },
        {
          step: "2",
          title: "AI suggests replies",
          desc: "Knowledge base matches keywords and drafts a reply you can edit and send",
        },
        {
          step: "3",
          title: "Close faster",
          desc: "Track open, pending, resolved — no per-agent pricing when you hire help",
        },
      ],
    },
    featuresTitle: "Built for indie scale",
    features: [
      {
        icon: "📥",
        title: "Shared inbox",
        desc: "One place for support@ emails. No complex routing rules or enterprise setup.",
      },
      {
        icon: "🤖",
        title: "AI reply drafts",
        desc: "Keyword-matched knowledge base generates reply suggestions in seconds.",
      },
      {
        icon: "📚",
        title: "Knowledge base",
        desc: "Pre-built articles for billing, trials, integrations. Edit and expand as you grow.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited tickets and AI suggestions. No per-seat fees like Zendesk $98/agent.",
      },
    ],
    testimonialsTitle: "What solo founders say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "SaaS founder",
        text: "Zendesk wanted $98/agent for me and my VA. Desk Pulse handles both for $29/mo.",
      },
      {
        name: "Yuki K.",
        role: "Indie hacker",
        text: "AI reply suggestions cut my support time from 20 min to 3 min per ticket.",
      },
      {
        name: "Sam R.",
        role: "Bootstrapped dev",
        text: "ElkDesk rage-quit Zendesk on HN — this is exactly what I needed instead.",
      },
    ],
    closing: {
      title: "Stop paying per agent",
      subtitle: "5 free tickets · then $29/mo for unlimited inbox + AI",
      ctaPrimary: "Open inbox free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Inbox preview",
      caption: "Ticket list · AI reply draft · knowledge base match",
      preview:
        "🎫 Desk Pulse Inbox\n─────────────────────────────────\n   OPEN (2)  ·  PENDING (1)  ·  RESOLVED (12)\n\n   #1042  Refund request — billing@...\n   \"I was charged twice this month...\"\n   ┌─ AI Suggestion (matched: Billing) ─┐\n   │ Hi there, thanks for reaching out. │\n   │ Refunds within 14 days are handled │\n   │ manually — reply with order email. │\n   └────────────────────────────────────┘\n   [ Edit & Send ]  [ Mark Resolved ]\n\n   #1041  Can't cancel subscription\n   Status: Pending · KB: Account & login",
    },
  },
  zh: {
    badge: "Zendesk $98/坐席？· $29/月一口价",
    title: "独立开发者的极简客服 — 不交 Zendesk 税",
    subtitle:
      "共享收件箱、AI 回复建议、内置知识库。免费体验 5 次，之后 $29/月不限量。",
    ctaPrimary: "免费打开收件箱",
    ctaPrimaryHref: "/inbox",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Zendesk 要 $98+/坐席" },
      { stat: "AI", label: "基于知识库生成回复建议" },
      { stat: "2 分钟", label: "处理第一张工单" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "收集工单",
          desc: "粘贴客户邮件或手动创建 — 一人创始人的共享收件箱",
        },
        {
          step: "2",
          title: "AI 建议回复",
          desc: "知识库匹配关键词，自动生成可编辑的回复草稿",
        },
        {
          step: "3",
          title: "更快结案",
          desc: "追踪待处理、跟进中、已解决 — 招人帮忙也不按坐席收费",
        },
      ],
    },
    featuresTitle: "为独立开发者规模设计",
    features: [
      {
        icon: "📥",
        title: "共享收件箱",
        desc: "support@ 邮件统一入口。无需复杂路由规则或企业级配置。",
      },
      {
        icon: "🤖",
        title: "AI 回复草稿",
        desc: "关键词匹配知识库，几秒内生成回复建议。",
      },
      {
        icon: "📚",
        title: "知识库",
        desc: "预置账单、试用、集成等文章。随业务增长编辑扩展。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "工单与 AI 建议不限量。不像 Zendesk 按 $98/坐席收费。",
      },
    ],
    testimonialsTitle: "一人创始人怎么说",
    testimonials: [
      {
        name: "Marcus T.",
        role: "SaaS 创始人",
        text: "Zendesk 我和助理两个人要 $98/坐席。极简客服 $29/月全搞定。",
      },
      {
        name: "Yuki K.",
        role: "独立开发者",
        text: "AI 回复建议把每张工单从 20 分钟缩到 3 分钟。",
      },
      {
        name: "Sam R.",
        role: "自举创业者",
        text: "HN 上 ElkDesk 怒退 Zendesk — 这正是我需要的替代品。",
      },
    ],
    closing: {
      title: "别再按坐席付费",
      subtitle: "免费 5 次 · 之后 $29/月 无限收件箱 + AI",
      ctaPrimary: "免费打开收件箱",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "收件箱预览",
      caption: "工单列表 · AI 回复草稿 · 知识库匹配",
      preview:
        "🎫 极简客服收件箱\n─────────────────────────────────\n   待处理 (2)  ·  跟进中 (1)  ·  已解决 (12)\n\n   #1042  退款申请 — billing@...\n   「本月被扣了两次款...」\n   ┌─ AI 建议（匹配：账单）─────────┐\n   │ 你好，感谢来信。14 天内首次   │\n   │ 扣款可申请退款，请回复订单邮箱 │\n   └──────────────────────────────┘\n   [ 编辑并发送 ]  [ 标记已解决 ]\n\n   #1041  无法取消订阅\n   状态：跟进中 · 知识库：账号与登录",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Desk Pulse",
    subtitle: "One price, unlimited tickets, AI reply suggestions, and knowledge base.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Zendesk $98+/agent · cancel anytime",
    perks: [
      "Unlimited tickets",
      "AI reply suggestions",
      "Built-in knowledge base",
      "Shared inbox",
      "Open / pending / resolved tracking",
      "No per-agent fees",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "AI suggestions and inbox hosting cost real infrastructure",
      "Paying users = founders who actually support customers",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅极简客服工单",
    subtitle: "一口价，工单不限量、AI 回复建议、内置知识库。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Zendesk $98+/坐席 · 随时可取消",
    perks: [
      "工单不限量",
      "AI 回复建议",
      "内置知识库",
      "共享收件箱",
      "待处理 / 跟进 / 已解决追踪",
      "不按坐席收费",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "AI 建议与收件箱托管有真实基础设施成本",
      "付费用户 = 真正在服务客户的创始人",
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
