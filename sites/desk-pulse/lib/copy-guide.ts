import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Zendesk Alternative for Indie Hackers — Help Desk Guide",
      description:
        "Zendesk starts at $98/agent/month. Compare help desk tools for indie SaaS. Find a $9.9/mo flat-rate alternative with AI reply suggestions and shared inbox.",
    },
    h1: "2026 Zendesk Alternative for Indie Hackers: Help Desk Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "You launched your SaaS. Customers are emailing support@. You're copying replies from Notion docs, losing track of open threads, and spending 30 minutes per refund request. Zendesk solves this — until you see $98 per agent per month on the pricing page.",
      "Help desk software gives you a shared inbox, ticket status tracking, and reply templates. Enterprise tools add AI copilots, SLA rules, and 200 integrations you'll never configure in year one.",
      "The problem? Zendesk Suite Team starts at $55/agent/month (annual). Suite Professional is $115/agent. Add your VA or co-founder and you're at $200+/month before a single customer pays you.",
      "On Hacker News thread #46697929, ElkDesk publicly rage-quit Zendesk after years of price hikes. On r/SaaS, founders ask weekly: \"What's the cheapest help desk that doesn't charge per seat?\" Another wrote: \"I need AI reply suggestions and a knowledge base for under $20/mo — Zendesk is insane for a solo founder.\"",
      "This guide compares 2026 help desk options for bootstrapped founders, what actually matters at indie scale, and how to pick tooling that won't punish you for hiring your first support helper.",
    ],
    sections: [
      {
        h2: "Why indie hackers need a real help desk",
        paragraphs: ["Gmail + labels breaks down fast. A proper help desk does four things:"],
        list: [
          "Shared inbox — one queue for support@, no lost threads in personal email",
          "Ticket status — open, pending, resolved so nothing falls through cracks",
          "Knowledge base — answer billing/refund questions without rewriting every time",
          "AI reply drafts — cut response time from 20 minutes to 3 on repetitive tickets",
        ],
        after: [
          "The classic indie stack: forward support@ to your tool, paste customer messages, draft replies from KB articles, mark resolved. You don't need SLA dashboards or 50-agent routing in month one. You need: flat pricing, AI suggestions, and a KB that grows with your product.",
        ],
      },
      {
        h2: "2026 help desk tools compared",
        tools: [
          {
            h3: "Zendesk — $55–115+/agent/mo",
            p: "Industry standard, powerful automations, massive integration ecosystem. Priced for support teams of 10+, not solo founders. Per-agent pricing hurts when you add a part-time VA.",
          },
          {
            h3: "Freshdesk — $15–79/agent/mo",
            p: "Cheaper than Zendesk but still per-seat. Free tier limited to 2 agents with basic features. AI features on higher tiers.",
          },
          {
            h3: "Help Scout — $25–75/user/mo",
            p: "Clean UX, beloved by small teams. Per-user pricing adds up. Knowledge base on Plus plan ($45/user). Good but not indie-budget friendly at scale.",
          },
          {
            h3: "Crisp — free tier / $25+/mo",
            p: "Live chat focused. Ticketing exists but secondary. Good for chat-first products, less ideal for email-heavy async support.",
          },
          {
            h3: "Desk Pulse — $9.9/mo flat",
            p: "Built for indie hackers who rage-quit Zendesk pricing. Unlimited tickets, AI reply suggestions from keyword-matched knowledge base, shared inbox. No per-agent fees.",
            link: { href: "/join", text: "5 free ticket actions", suffix: ", then $9.9/mo flat. Cancel anytime." },
          },
        ],
      },
      {
        h2: "What to look for in an indie help desk",
        paragraphs: ["Before comparing feature matrices, decide what you need in month one:"],
        ordered: [
          "Shared inbox — capture support@ without forwarding chaos",
          "AI reply suggestions — draft answers from your KB, edit and send",
          "Knowledge base — billing, refunds, account access articles ready day one",
          "Flat pricing — no per-seat surprise when you hire help",
          "Simple status tracking — open / pending / resolved, not 12 custom workflows",
        ],
        after: [
          "Skip enterprise features you won't touch: multi-brand portals, SLA breach alerts, 50-language auto-translation. Add complexity when ticket volume demands it, not before.",
        ],
      },
      {
        h2: "How to set up support in 15 minutes",
        paragraphs: ["The fastest path for a solo founder post-launch:"],
        ordered: [
          "Forward support@ to your help desk inbox (or paste tickets manually at first)",
          "Seed 4 KB articles: billing, free trial, integrations, account access",
          "Create your first ticket from a real customer email",
          "Hit AI suggest reply — edit the draft, send from your email client",
          "Mark resolved and track how long each ticket took",
        ],
        after: [
          "Most founders over-build support systems before they have 10 tickets. Start with inbox + KB + AI drafts. Add email forwarding and automations when volume justifies it.",
        ],
      },
      {
        h2: "AI reply suggestions: the feature that saves hours",
        paragraphs: [
          "Real scenario: you get 5 refund requests after a billing bug. Without AI, you rewrite the same policy 5 times — 15 minutes each. With keyword-matched KB suggestions, you get a draft in 3 seconds, personalize the greeting, send.",
          "Desk Pulse matches ticket text against your knowledge base articles (billing, trial limits, integrations, account). The AI draft isn't magic — it's your documented answers, formatted as a reply you control.",
          "At indie scale, this is the difference between \"support is eating my dev time\" and \"I handle tickets in 10 minutes before standup.\"",
        ],
      },
      {
        h2: "Pricing math for bootstrapped founders",
        paragraphs: [
          "Zendesk Suite Team: $55/agent/mo × 2 agents × 12 = $1,320/year. Suite Professional with AI: $115 × 2 × 12 = $2,760/year.",
          "Desk Pulse: $9.9/mo × 12 = $118.80/year, unlimited tickets and AI suggestions. Add a VA without adding a seat fee.",
          "For bootstrapped founders, flat pricing means you can afford to actually respond to customers. Per-seat tools train you to ignore support until it's painful.",
        ],
        after: [
          "Ready to try? Open your inbox free, create a ticket, generate an AI reply from the knowledge base, and upgrade only when you need unlimited.",
        ],
      },
    ],
    cta: {
      title: "Open your inbox free",
      subtitle: "5 free ticket actions · AI reply suggestions · $9.9/mo unlimited",
      button: "Start supporting →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Zendesk 平替指南 — 客服工单选型",
      description:
        "Zendesk 起步 $98/坐席/月。对比独立开发者客服工具，找到 $9.9/月一口价、AI 回复建议与共享收件箱的替代方案。",
    },
    h1: "2026 独立开发者 Zendesk 平替：客服工单选型指南",
    updated: "更新于 2026 年 6 月 · 阅读约 10 分钟",
    intro: [
      "你上线了 SaaS，客户开始给 support@ 发邮件。你从 Notion 文档复制回复、丢失未结线程、每张退款工单花 30 分钟。Zendesk 能解决这个问题 — 直到你看到定价页上每个坐席 $98/月。",
      "客服工单软件提供共享收件箱、工单状态追踪和回复模板。企业级工具还有 AI 助手、SLA 规则和 200 个集成 — 第一年你根本不会配置。",
      "问题在于？Zendesk Suite Team 年费起步 $55/坐席/月，Professional 版 $115/坐席。加上助理或联创，在第一个付费客户之前你就得掏 $200+/月。",
      "在 HN #46697929 讨论串中，ElkDesk 公开怒退 Zendesk，抱怨多年涨价。r/SaaS 上创始人每周问：「有没有不按坐席收费的便宜客服工具？」还有人写：「我需要 AI 回复建议和知识库，$20 以下 — Zendesk 对一人创始人太离谱。」",
      "本指南对比 2026 年适合自举创始人的客服方案、在 indie 规模真正重要的功能，以及如何选择不会因招第一个客服助手而惩罚你的工具。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要真正的客服系统",
        paragraphs: ["Gmail + 标签很快撑不住。专业客服工单做四件事："],
        list: [
          "共享收件箱 — support@ 统一入口，线程不会丢在个人邮箱",
          "工单状态 — 待处理、跟进中、已解决，没有遗漏",
          "知识库 — 账单/退款问题不用每次重写",
          "AI 回复草稿 — 重复工单从 20 分钟缩到 3 分钟",
        ],
        after: [
          "经典 indie 流程：转发 support@ 到工具、粘贴客户消息、从知识库起草回复、标记已解决。第一个月不需要 SLA 仪表盘或 50 人路由规则。你需要的是：一口价、AI 建议、随产品增长的知识库。",
        ],
      },
      {
        h2: "2026 客服工具对比",
        tools: [
          {
            h3: "Zendesk — $55–115+/坐席/月",
            p: "行业标准、强大自动化、庞大集成生态。为 10+ 人客服团队定价，不是一人创始人。按坐席收费，招兼职助理就疼。",
          },
          {
            h3: "Freshdesk — $15–79/坐席/月",
            p: "比 Zendesk 便宜但仍按坐席。免费版限 2 坐席且功能基础。AI 功能在更高档位。",
          },
          {
            h3: "Help Scout — $25–75/人/月",
            p: "界面干净，小团队喜爱。按人头加价。知识库在 Plus 版（$45/人）。不错但规模上来后对 indie 预算不友好。",
          },
          {
            h3: "Crisp — 免费档 / $25+/月",
            p: "以在线聊天为主。工单功能是配角。适合聊天优先的产品，邮件异步支持较弱。",
          },
          {
            h3: "极简客服工单 — $9.9/月一口价",
            p: "为怒退 Zendesk 定价的独立开发者打造。工单不限量、关键词匹配知识库的 AI 回复建议、共享收件箱。不按坐席收费。",
            link: { href: "/join", text: "免费体验 5 次", suffix: "，之后 $9.9/月一口价。随时可取消。" },
          },
        ],
      },
      {
        h2: "indie 客服工具该看什么",
        paragraphs: ["对比功能表之前，先确定第一个月真正需要什么："],
        ordered: [
          "共享收件箱 — 接住 support@，告别转发混乱",
          "AI 回复建议 — 从知识库起草，编辑后发送",
          "知识库 — 账单、退款、账号访问文章第一天就位",
          "一口价 — 招人帮忙不按坐席加钱",
          "简单状态 — 待处理/跟进/已解决，不要 12 条自定义工作流",
        ],
        after: [
          "跳过第一年碰不到的企业功能：多品牌门户、SLA 违约告警、50 语言自动翻译。工单量逼你时再上复杂度。",
        ],
      },
      {
        h2: "15 分钟搭好客服体系",
        paragraphs: ["上线后一人创始人最快路径："],
        ordered: [
          "把 support@ 转发到客服收件箱（或先手动粘贴工单）",
          "预置 4 篇知识库：账单、免费试用、集成、账号访问",
          "用真实客户邮件创建第一张工单",
          "点 AI 建议回复 — 改草稿，从你的邮箱客户端发送",
          "标记已解决，记录每张工单耗时",
        ],
        after: [
          "大多数创始人在不到 10 张工单时就过度搭建客服系统。从收件箱 + 知识库 + AI 草稿开始。量上来再加邮件转发和自动化。",
        ],
      },
      {
        h2: "AI 回复建议：省时间的核心功能",
        paragraphs: [
          "真实场景：账单 bug 后收到 5 张退款工单。没有 AI，你重写同一政策 5 次 — 每次 15 分钟。有关键词匹配知识库建议，3 秒出草稿，改称呼就发。",
          "极简客服工单把工单文本与知识库文章（账单、试用额度、集成、账号）匹配。AI 草稿不是魔法 — 是你已文档化的答案，格式化成你可控的回复。",
          "在 indie 规模，这是「客服吃掉开发时间」和「站会前 10 分钟处理完工单」的区别。",
        ],
      },
      {
        h2: "自举创始人的定价账",
        paragraphs: [
          "Zendesk Suite Team：$55/坐席/月 × 2 坐席 × 12 = $1,320/年。带 AI 的 Professional：$115 × 2 × 12 = $2,760/年。",
          "极简客服工单：$9.9/月 × 12 = $118.80/年，工单与 AI 建议不限量。加助理不加坐席费。",
          "对自举创始人，一口价意味着你付得起真正回复客户。按坐席工具训练你忽略客服直到痛不欲生。",
        ],
        after: [
          "准备好试试？免费打开收件箱、创建工单、从知识库生成 AI 回复，需要无限量时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费打开收件箱",
      subtitle: "免费体验 5 次 · AI 回复建议 · $9.9/月 不限量",
      button: "开始处理工单 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
