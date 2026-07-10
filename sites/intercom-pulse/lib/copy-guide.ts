import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Intercom Alternative for Indie Hackers — Customer Chat Guide",
      description:
        "Intercom starts at $29/seat plus $0.99 per Fin resolution. Compare customer chat tools for indie SaaS. Find a $29/mo flat-rate alternative with AI agent and help center.",
    },
    h1: "2026 Intercom Alternative for Indie Hackers: Customer Chat Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You shipped your SaaS. Visitors land on your pricing page and ask questions in real time. You paste the same answers in Slack, Gmail, and a broken Crisp widget. Intercom solves this — until you see $29 per seat per month plus $0.99 for every AI resolution on the Fin add-on.",
      "Customer chat software gives you an embeddable messenger, shared inbox, help center, and increasingly an AI agent that deflects repetitive questions. Enterprise tools add product tours, Series campaigns, and 50 integrations you'll never wire up in year one.",
      "The problem? Intercom Essential is $29/seat/month (annual). Advanced is $85/seat. Fin AI charges $0.99 per successful resolution on every plan — a 50% resolution rate on 2,000 monthly conversations means $990 in Fin fees alone, on top of seat costs.",
      "On Hacker News #47194196, founders discuss Opencom and other Intercom alternatives after years of UI churn and pricing surprises. On r/SaaS, bootstrapped devs ask weekly: \"What's the cheapest live chat that doesn't charge per AI reply?\" Another wrote: \"I need chat widget + help center + inbox for under $20/mo — Intercom Fin math is insane for a solo founder.\"",
      "This guide compares 2026 customer chat options for bootstrapped founders, what actually matters at indie scale, and how to pick tooling that won't punish you for adding your first support helper or scaling chat volume.",
    ],
    sections: [
      {
        h2: "Why indie hackers need customer chat (not just email)",
        paragraphs: ["Email-only support breaks when visitors need answers before they buy. Live chat does four things email can't:"],
        list: [
          "Real-time conversion — answer pricing questions while the visitor is on your page",
          "Shared inbox — one queue for chat and email handoffs, no lost threads",
          "Help center — deflect billing and trial questions before they become tickets",
          "AI agent — draft replies from your docs without $0.99 per resolution fees",
        ],
        after: [
          "The classic indie stack: embed a chat widget, seed 4 help center articles, let AI handle FAQs, hand complex chats to your inbox. You don't need product tours or multi-brand messengers in month one. You need: flat pricing, AI that doesn't meter every reply, and a help center that grows with your product.",
        ],
      },
      {
        h2: "2026 customer chat tools compared",
        tools: [
          {
            h3: "Intercom — $29–132+/seat/mo + Fin fees",
            p: "Industry leader, powerful AI (Fin), product tours, in-app messaging. Priced for funded teams with predictable support budget. Per-seat plus per-resolution AI fees hurt bootstrappers.",
          },
          {
            h3: "Crisp — €45/mo flat workspace",
            p: "Popular indie pick with flat billing. Live chat focused, help center included. AI capped on lower tiers. Good but still €45/mo for full features.",
          },
          {
            h3: "Selvo — $29–74/mo flat",
            p: "Direct Intercom competitor with flat workspace pricing. Help center, chat, inbox. AI agent shipping. Solid but 3× Intercom Pulse price at starter tier.",
          },
          {
            h3: "Fernand — $29/user/mo",
            p: "Calm inbox for SaaS founders. AI agents included without per-resolution fees. Per-user pricing adds up when you hire help.",
          },
          {
            h3: "Intercom Pulse — $29/mo flat",
            p: "Built for indie hackers who rage-quit Intercom pricing. Live chat widget, AI agent from keyword-matched help center, shared inbox. No per-seat or per-resolution fees.",
            link: { href: "/join", text: "5 free conversation actions", suffix: ", then $29/mo flat. Cancel anytime." },
          },
        ],
      },
      {
        h2: "What to look for in an indie chat tool",
        paragraphs: ["Before comparing feature matrices, decide what you need in month one:"],
        ordered: [
          "Embeddable chat widget — one script tag, works on your marketing site and app",
          "AI agent without metered fees — draft answers from help center, you control send",
          "Help center — billing, refunds, trial limits articles ready day one",
          "Flat pricing — no per-seat surprise when you add a VA",
          "Human handoff inbox — open / pending / resolved, not 12 custom workflows",
        ],
        after: [
          "Skip enterprise features you won't touch: Series campaigns, multi-brand messengers, phone support, HIPAA compliance. Add complexity when chat volume demands it, not before.",
        ],
      },
      {
        h2: "How to set up customer chat in 15 minutes",
        paragraphs: ["The fastest path for a solo founder post-launch:"],
        ordered: [
          "Embed the chat widget script on your landing page and app shell",
          "Seed 4 help center articles: billing, free trial, integrations, account access",
          "Start your first conversation from a real visitor question",
          "Hit AI suggest reply — edit the draft, send to visitor",
          "Mark resolved and track which articles deflect the most questions",
        ],
        after: [
          "Most founders over-build chat systems before they have 10 conversations. Start with widget + help center + AI drafts. Add email forwarding and automations when volume justifies it.",
        ],
      },
      {
        h2: "Intercom Fin pricing: why indie hackers get caught",
        paragraphs: [
          "Intercom's Fin AI agent is powerful — and expensive. At $0.99 per successful resolution, a bootstrapped SaaS with 500 monthly chats and 40% AI resolution pays $198/mo in Fin fees alone. Add one Essential seat ($29) and you're at $227/mo before AWS.",
          "Real scenario from devtoolpicks.com 2026 comparison: 2,000 monthly conversations at 50% Fin resolution = $990/mo in AI fees. That's more than many indie products' entire MRR.",
          "Intercom Pulse matches conversation text against your help center (billing, trial limits, integrations, account). The AI draft isn't magic — it's your documented answers, formatted as a reply you control. Zero per-resolution charges.",
          "At indie scale, flat AI is the difference between \"I can't afford to answer chat\" and \"AI handles 60% of questions before I wake up.\"",
        ],
      },
      {
        h2: "Pricing math for bootstrapped founders",
        paragraphs: [
          "Intercom Essential + Fin (moderate volume): $29/seat + ~$300 Fin/mo × 12 = ~$3,948/year for one founder with modest AI usage.",
          "Intercom Pulse: $29/mo × 12 = $118.80/year, unlimited conversations and AI replies. Add a VA without adding a seat fee.",
          "For bootstrapped founders, flat pricing means you can afford to actually talk to customers. Metered AI tools train you to hide the chat widget until churn spikes.",
        ],
        after: [
          "Ready to try? Open your inbox free, start a conversation, generate an AI reply from the help center, and upgrade only when you need unlimited.",
        ],
      },
    ],
    cta: {
      title: "Open your chat inbox free",
      subtitle: "5 free conversation actions · AI agent · $29/mo unlimited",
      button: "Start chatting →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Intercom 平替指南 — 客户聊天选型",
      description:
        "Intercom 起步 $29/坐席/月，Fin AI 另收 $0.99/次。对比独立开发者客户聊天工具，找到 $29/月一口价、AI 客服与帮助中心的替代方案。",
    },
    h1: "2026 独立开发者 Intercom 平替：客户聊天选型指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "你上线了 SaaS。访客在定价页实时提问。你在 Slack、Gmail 和半残的 Crisp 组件里复制同一套答案。Intercom 能解决这个问题 — 直到你看到每个坐席 $29/月，Fin AI 插件每次成功解决另收 $0.99。",
      "客户聊天软件提供可嵌入通讯组件、共享收件箱、帮助中心，以及 increasingly 用 AI 客服拦截重复问题。企业级工具还有产品导览、Series 营销活动和 50 个集成 — 第一年你根本不会接。",
      "问题在于？Intercom Essential 年费 $29/坐席/月，Advanced $85/坐席。Fin AI 每个计划都按成功解决 $0.99 收费 — 月 2000 次对话、50% AI 解决率意味着仅 Fin 费就 $990/月，还不算坐席。",
      "在 HN #47194196 讨论串中，创始人在多年 UI 变动和定价意外后讨论 Opencom 等 Intercom 替代品。r/SaaS 上自举开发者每周问：「有没有不按 AI 回复次数收费的便宜在线聊天？」还有人写：「我需要聊天组件 + 帮助中心 + 收件箱，$20 以下 — Intercom Fin 的账对一人创始人太离谱。」",
      "本指南对比 2026 年适合自举创始人的客户聊天方案、在 indie 规模真正重要的功能，以及如何选择不会因加第一个客服助手或对话量上涨而惩罚你的工具。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要客户聊天（不只是邮件）",
        paragraphs: ["纯邮件支持在访客购买前需要答案时就撑不住。在线聊天做四件邮件做不到的事："],
        list: [
          "实时转化 — 访客还在页面上时回答定价问题",
          "共享收件箱 — 聊天与邮件接管统一入口，线程不丢",
          "帮助中心 — 在变成工单前拦截账单和试用问题",
          "AI 客服 — 从文档起草回复，没有 $0.99/次 费用",
        ],
        after: [
          "经典 indie 流程：嵌入聊天组件、预置 4 篇帮助中心文章、AI 处理 FAQ、复杂对话进收件箱。第一个月不需要产品导览或多品牌通讯。你需要的是：一口价、不按次计费的 AI、随产品增长的帮助中心。",
        ],
      },
      {
        h2: "2026 客户聊天工具对比",
        tools: [
          {
            h3: "Intercom — $29–132+/坐席/月 + Fin 费",
            p: "行业领导者、强大 AI（Fin）、产品导览、应用内消息。为有预算的团队定价。按坐席加按次 AI 费伤害自举开发者。",
          },
          {
            h3: "Crisp — €45/月 工作区一口价",
            p: "独立开发者热门选择，一口价计费。以在线聊天为主，含帮助中心。低档 AI 有上限。不错但全功能仍要 €45/月。",
          },
          {
            h3: "Selvo — $29–74/月 一口价",
            p: "Intercom 直接竞品，工作区一口价。帮助中心、聊天、收件箱。AI 客服即将上线。入门档仍是 Intercom 平替 3 倍价。",
          },
          {
            h3: "Fernand — $29/人/月",
            p: "面向 SaaS 创始人的简洁收件箱。AI 客服含在价内不按次收费。按人头加价，招人帮忙就疼。",
          },
          {
            h3: "Intercom 平替 — $29/月 一口价",
            p: "为怒退 Intercom 定价的独立开发者打造。在线聊天组件、关键词匹配帮助中心的 AI 客服、共享收件箱。不按坐席或按次 AI 收费。",
            link: { href: "/join", text: "免费体验 5 次", suffix: "，之后 $29/月一口价。随时可取消。" },
          },
        ],
      },
      {
        h2: "indie 聊天工具该看什么",
        paragraphs: ["对比功能表之前，先确定第一个月真正需要什么："],
        ordered: [
          "可嵌入聊天组件 — 一行脚本，营销站和应用都能用",
          "AI 客服不按次计费 — 从帮助中心起草，你控制发送",
          "帮助中心 — 账单、退款、试用额度文章第一天就位",
          "一口价 — 加 VA 不按坐席加钱",
          "人工接管收件箱 — 待处理/跟进/已解决，不要 12 条自定义工作流",
        ],
        after: [
          "跳过第一年碰不到的企业功能：Series 营销、多品牌通讯、电话支持、HIPAA 合规。对话量逼你时再上复杂度。",
        ],
      },
      {
        h2: "15 分钟搭好客户聊天",
        paragraphs: ["上线后一人创始人最快路径："],
        ordered: [
          "在落地页和应用壳嵌入聊天组件脚本",
          "预置 4 篇帮助中心：账单、免费试用、集成、账号访问",
          "用真实访客问题开始第一次对话",
          "点 AI 建议回复 — 改草稿，发给访客",
          "标记已解决，追踪哪篇文章拦截最多问题",
        ],
        after: [
          "大多数创始人在不到 10 次对话时就过度搭建聊天系统。从组件 + 帮助中心 + AI 草稿开始。量上来再加邮件转发和自动化。",
        ],
      },
      {
        h2: "Intercom Fin 定价：indie 开发者怎么被坑",
        paragraphs: [
          "Intercom 的 Fin AI 客服很强大 — 也很贵。按成功解决 $0.99，月 500 次对话、40% AI 解决率仅 Fin 费就 $198/月。加一个 Essential 坐席（$29）AWS 之前就到 $227/月。",
          "devtoolpicks.com 2026 对比的真实场景：月 2000 次对话、50% Fin 解决率 = AI 费 $990/月。比许多 indie 产品整月 MRR 还高。",
          "Intercom 平替把对话文本与帮助中心（账单、试用额度、集成、账号）匹配。AI 草稿不是魔法 — 是你已文档化的答案，格式化成你可控的回复。零按次收费。",
          "在 indie 规模，一口价 AI 是「我付不起回答聊天」和「AI 在我起床前处理 60% 问题」的区别。",
        ],
      },
      {
        h2: "自举创始人的定价账",
        paragraphs: [
          "Intercom Essential + Fin（中等用量）：$29/坐席 + 约 $300 Fin/月 × 12 = 约 $3,948/年（一人创始人适度 AI 使用）。",
          "Intercom 平替：$29/月 × 12 = $118.80/年，对话与 AI 回复不限量。加助理不加坐席费。",
          "对自举创始人，一口价意味着你付得起真正与客户对话。按次 AI 工具训练你藏起聊天组件直到流失飙升。",
        ],
        after: [
          "准备好试试？免费打开收件箱、开始对话、从帮助中心生成 AI 回复，需要无限量时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费打开聊天收件箱",
      subtitle: "免费体验 5 次 · AI 客服 · $29/月 不限量",
      button: "开始聊天 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
