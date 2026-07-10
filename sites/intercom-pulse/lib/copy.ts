import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Intercom $29/seat + $0.99/resolution? · $29/mo flat",
    title: "Customer chat for indie SaaS — without the Intercom bill",
    subtitle:
      "Live chat widget, shared inbox, AI agent, built-in help center. 5 free conversations, then $29/mo unlimited.",
    ctaPrimary: "Open inbox free",
    ctaPrimaryHref: "/inbox",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Intercom $29+/seat + Fin fees" },
      { stat: "AI", label: "agent with zero per-resolution charges" },
      { stat: "2 min", label: "to embed chat on your site" },
    ],
    howItWorks: {
      title: "Workflow",
      steps: [
        {
          step: "1",
          title: "Embed chat widget",
          desc: "Drop one script tag on your site — visitors get live chat without Intercom's setup maze",
        },
        {
          step: "2",
          title: "AI resolves common questions",
          desc: "Help center articles power an AI agent that drafts replies — no $0.99 per resolution fee",
        },
        {
          step: "3",
          title: "Hand off in shared inbox",
          desc: "Complex chats land in one inbox. Reply, resolve, track — flat price when you add teammates",
        },
      ],
    },
    featuresTitle: "Built for indie scale",
    features: [
      {
        icon: "💬",
        title: "Live chat widget",
        desc: "Embeddable messenger for your SaaS. No product tours bloat — just chat that converts visitors.",
      },
      {
        icon: "🤖",
        title: "AI agent included",
        desc: "Keyword-matched help center generates reply drafts. Intercom charges $0.99 per Fin resolution — we don't.",
      },
      {
        icon: "📚",
        title: "Help center",
        desc: "Pre-built articles for billing, trials, integrations. Publish docs and deflect tickets day one.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited conversations and AI replies. No per-seat or per-resolution surprise bills.",
      },
    ],
    testimonialsTitle: "What solo founders say",
    testimonials: [
      {
        name: "Alex P.",
        role: "SaaS founder",
        text: "Intercom Fin wanted $990/mo on top of seats for 2k chats. Intercom Pulse handles it for $29 flat.",
      },
      {
        name: "Lin M.",
        role: "Indie hacker",
        text: "HN #47194196 Opencom thread sent me here — finally a chat tool that won't eat my runway.",
      },
      {
        name: "Jordan K.",
        role: "Bootstrapped dev",
        text: "Shared inbox + AI drafts cut my support from 45 min to 8 min per day. No per-agent math.",
      },
    ],
    closing: {
      title: "Stop paying per seat and per resolution",
      subtitle: "5 free conversations · then $29/mo for chat + AI + inbox",
      ctaPrimary: "Open inbox free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Chat + inbox preview",
      caption: "Live widget · AI agent draft · help center match",
      preview:
        "💬 Intercom Pulse\n─────────────────────────────────\n   LIVE CHATS (3)  ·  AI RESOLVED (18)  ·  INBOX (2)\n\n   Visitor: \"How do I cancel my subscription?\"\n   ┌─ AI Agent (matched: Billing) ─────────┐\n   │ You can cancel anytime from Settings →  │\n   │ Billing. Refunds within 14 days are     │\n   │ handled manually — reply with order email│\n   └─────────────────────────────────────────┘\n   [ Send to visitor ]  [ Hand off to human ]\n\n   #2047  Integration question — dev@...\n   Status: Open · Help center: Integrations",
    },
  },
  zh: {
    badge: "Intercom $29/坐席 + $0.99/次 AI？· $29/月一口价",
    title: "独立开发者的客户聊天 — 不交 Intercom 税",
    subtitle:
      "在线聊天组件、共享收件箱、AI 客服、内置帮助中心。免费体验 5 次，之后 $29/月不限量。",
    ctaPrimary: "免费打开收件箱",
    ctaPrimaryHref: "/inbox",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Intercom 要 $29+/坐席 + Fin 费" },
      { stat: "AI", label: "客服零按次收费" },
      { stat: "2 分钟", label: "嵌入网站聊天组件" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "嵌入聊天组件",
          desc: "一行脚本嵌入网站 — 访客即时聊天，无需 Intercom 复杂配置",
        },
        {
          step: "2",
          title: "AI 解答常见问题",
          desc: "帮助中心文章驱动 AI 客服起草回复 — 没有 $0.99/次 的 Fin 费用",
        },
        {
          step: "3",
          title: "复杂对话进共享收件箱",
          desc: "疑难会话统一入口。回复、结案、追踪 — 加队友也不按坐席收费",
        },
      ],
    },
    featuresTitle: "为独立开发者规模设计",
    features: [
      {
        icon: "💬",
        title: "在线聊天组件",
        desc: "可嵌入 SaaS 的即时通讯。没有产品导览臃肿功能 — 只有转化访客的聊天。",
      },
      {
        icon: "🤖",
        title: "内置 AI 客服",
        desc: "关键词匹配帮助中心生成回复草稿。Intercom Fin 按次 $0.99 — 我们不收。",
      },
      {
        icon: "📚",
        title: "帮助中心",
        desc: "预置账单、试用、集成等文章。第一天发布文档、减少工单。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "对话与 AI 回复不限量。没有按坐席或按次 AI 的意外账单。",
      },
    ],
    testimonialsTitle: "一人创始人怎么说",
    testimonials: [
      {
        name: "Alex P.",
        role: "SaaS 创始人",
        text: "Intercom Fin 在坐席费之外每月还要 $990（2000 次对话）。Intercom 平替 $29 一口价搞定。",
      },
      {
        name: "Lin M.",
        role: "独立开发者",
        text: "HN #47194196 Opencom 讨论串找来的 — 终于有个不会吃跑道的聊天工具。",
      },
      {
        name: "Jordan K.",
        role: "自举创业者",
        text: "共享收件箱 + AI 草稿把客服从每天 45 分钟缩到 8 分钟。不用算坐席费。",
      },
    ],
    closing: {
      title: "别再按坐席和按次 AI 付费",
      subtitle: "免费 5 次 · 之后 $29/月 聊天 + AI + 收件箱",
      ctaPrimary: "免费打开收件箱",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "聊天 + 收件箱预览",
      caption: "在线组件 · AI 客服草稿 · 帮助中心匹配",
      preview:
        "💬 Intercom 平替\n─────────────────────────────────\n   在线对话 (3)  ·  AI 已解决 (18)  ·  收件箱 (2)\n\n   访客：「怎么取消订阅？」\n   ┌─ AI 客服（匹配：账单）──────────┐\n   │ 可随时在设置 → 账单中取消。14 天内 │\n   │ 首次扣款可退款，请回复订单邮箱。   │\n   └──────────────────────────────┘\n   [ 发送给访客 ]  [ 转人工 ]\n\n   #2047  集成问题 — dev@...\n   状态：待处理 · 帮助中心：集成",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Intercom Pulse",
    subtitle: "One price: live chat widget, AI agent, shared inbox, and help center.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Intercom $29+/seat + Fin fees · cancel anytime",
    perks: [
      "Embeddable live chat widget",
      "AI agent — no per-resolution fees",
      "Shared inbox for human handoff",
      "Built-in help center",
      "Unlimited conversations",
      "No per-seat pricing",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "AI agent and chat hosting cost real infrastructure",
      "Paying users = founders who actually talk to customers",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Intercom 平替",
    subtitle: "一口价：在线聊天组件、AI 客服、共享收件箱、帮助中心。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Intercom $29+/坐席 + Fin 费 · 随时可取消",
    perks: [
      "可嵌入在线聊天组件",
      "AI 客服 — 零按次收费",
      "人工接管共享收件箱",
      "内置帮助中心",
      "对话不限量",
      "不按坐席收费",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "AI 客服与聊天托管有真实基础设施成本",
      "付费用户 = 真正与客户对话的创始人",
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
