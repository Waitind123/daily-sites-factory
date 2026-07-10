import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 AI Incident Communication Guide for Indie Hackers",
      description:
        "Statuspage.io starts at $29/mo without AI drafting. Compare incident communication tools for indie SaaS. Find a $29/mo flat-rate tool that turns alerts into status updates, emails, and postmortems.",
    },
    h1: "2026 AI Incident Communication: Indie Hacker Outage Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "Every indie hacker who ships production SaaS eventually faces the 3 AM pager. Your API is down. Customers are tweeting. Your monitoring tool fired an alert — and now you need to write a status page update, email subscribers, ping Slack, and somehow sound professional while debugging.",
      "Statuspage.io charges $29/month for a status page alone — no AI, no email drafting, no postmortem generator. PageCalm and Chirp added AI incident writing in 2026, but most indie founders still paste alerts into Notion and scramble to write customer-facing copy under pressure.",
      "The cost isn't just money. Engineers report spending 15–30 minutes per incident on communication alone. That's time not spent fixing the root cause. Worse: vague updates like \"We're looking into it\" erode customer trust faster than the outage itself.",
      "On Hacker News and r/SaaS, founders repeatedly ask: \"How do you write status page updates during an outage?\" Another wrote: \"I wish there was a tool that turns my PagerDuty alert into a customer email automatically.\" If that sounds like you, this guide compares 2026 incident communication tools and shows how AI drafting changes the game for solo founders.",
      "This guide covers why incident communication needs channel-specific drafts, compares Statuspage alternatives with AI features, and how to pick a tool that won't blow your bootstrap budget.",
    ],
    sections: [
      {
        h2: "Why one alert needs four different drafts",
        paragraphs: ["A single copy-paste of your monitoring alert fails because:"],
        list: [
          "Status page updates need empathetic, customer-facing tone — not raw error codes",
          "Customer emails need subject lines, greetings, and clear next steps",
          "Internal Slack notes need action items, @mentions, and raw alert context",
          "Postmortems need timeline structure, root cause sections, and action items",
          "Each channel's audience expects different detail level and urgency",
        ],
        after: [
          "The classic indie incident stack: acknowledge within 5 minutes, customer update within 30 minutes, postmortem within 48 hours. You don't need an SRE team. You need: alert parsing, severity detection, and one-click copy per channel.",
        ],
      },
      {
        h2: "2026 incident communication tools compared",
        tools: [
          {
            h3: "Statuspage.io — $29+/mo",
            p: "Industry standard status pages from Atlassian. Professional, trusted, but expensive for solo founders. No AI drafting — you write every update manually. Monitoring sold separately.",
          },
          {
            h3: "PageCalm — free tier + paid",
            p: "AI-powered status pages for small teams. Paste alerts to generate updates. Good free tier for solo founders. Focused on status page + email subscribers.",
          },
          {
            h3: "Chirp — from $7/mo",
            p: "Monitoring + status page + AI copilot. Writes incident updates, weekly digests. Great value but bundles monitoring you may already have via UptimeRobot.",
          },
          {
            h3: "StatusPilot — AI incident communication",
            p: "Webhook ingest from PagerDuty/Datadog. AI drafts status updates and postmortems. Newer player, focused purely on communication layer.",
          },
          {
            h3: "Incident AI — $29/mo flat",
            p: "Paste any alert → status page update, customer email, Slack note, postmortem. No monitoring bundle, no GitHub OAuth. Built for founders who already have uptime tools.",
            link: {
              href: "/draft",
              text: "Try 5 free drafts",
              suffix: " on Incident AI.",
            },
          },
        ],
      },
      {
        h2: "What to look for in an incident communication tool",
        paragraphs: ["Before subscribing, check these criteria:"],
        list: [
          "Alert ingest: can you paste raw PagerDuty/Datadog text without webhook setup?",
          "Channel coverage: status page + email + internal + postmortem in one flow",
          "Severity detection: does it auto-classify investigating vs resolved?",
          "Copy quality: empathetic customer tone, not robotic template filler",
          "Pricing: flat rate under $15/mo for unlimited drafts",
          "No bundle bloat: you may already pay for UptimeRobot or Better Stack monitoring",
        ],
        after: [
          "For teams with dedicated SREs, Statuspage.io or PagerDuty's built-in comms may suffice. For solo founders wearing every hat, a paste-and-draft tool saves 20+ minutes per incident.",
        ],
      },
      {
        h2: "The 60-second incident communication workflow",
        ordered: [
          "Alert fires — copy the raw text from PagerDuty, Datadog, or your uptime tool",
          "Paste into an AI draft tool — get 4 channel-specific drafts instantly",
          "Review and edit — AI drafts are 90% there; add your specific ETA if known",
          "Publish status page update — copy to your status page or Pulse Suite dashboard",
          "Send customer email — copy to your email tool or status page subscriber blast",
          "Post internal Slack note — coordinate with any contractors or co-founders",
          "After resolution — use the postmortem draft as your starting template",
        ],
        after: [
          "This workflow turns a 30-minute communication scramble into a 60-second copy-paste routine. The fix still takes as long as the fix takes — but your customers hear from you in minutes, not hours.",
        ],
      },
      {
        h2: "SEO and trust during incidents",
        paragraphs: [
          "Incident communication is also a retention tool. Customers who receive clear, timely updates during outages are more likely to renew than those left guessing. A public status page with professional updates signals maturity — even for a one-person SaaS.",
          "For long-term discoverability, publish postmortems (redacted) as blog posts. Search queries like \"[your product] outage\" or \"[competitor] status page alternative\" bring organic traffic from engineers evaluating tools.",
        ],
        after: [
          "Submit your status page to Google Search Console. Link postmortems from your changelog. Indie hackers who communicate well during incidents build reputation that converts to paying customers.",
        ],
      },
    ],
    cta: {
      title: "Ready to draft your first incident update?",
      subtitle: "5 free drafts · paste alert → 4 channel updates in 60 seconds",
      button: "Draft free",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 AI 事件沟通指南",
      description:
        "Statuspage.io 起步 $29/月且无 AI 草稿。对比独立 SaaS 事件沟通工具。找到 $29/月一口价、将告警转为状态页更新、邮件和复盘报告的工具。",
    },
    h1: "2026 AI 事件沟通：独立开发者宕机应对指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "每个运营生产环境的独立开发者，终将面对凌晨 3 点的告警。API 宕机了，客户在推特上发问。监控工具弹出告警 — 现在你得写状态页更新、发邮件通知订阅者、在 Slack 里协调，同时还要在修 bug 时保持专业语气。",
      "Statuspage.io 光状态页就要 $29/月 — 没有 AI、没有邮件草稿、没有复盘报告生成器。PageCalm 和 Chirp 在 2026 年加入了 AI 事件写作，但大多数独立创始人仍在 Notion 里粘贴告警，手忙脚乱写面向客户的文案。",
      "代价不只是金钱。工程师报告每次事件光是沟通就要花 15–30 分钟。这些时间本可以用来修复根因。更糟的是：「我们正在调查」这类模糊更新，比宕机本身更快侵蚀客户信任。",
      "在 Hacker News 和 r/SaaS 上，创始人反复问：「宕机时怎么写状态页更新？」还有人写道：「希望有个工具能自动把 PagerDuty 告警变成客户邮件。」如果这说的就是你，本指南对比 2026 年事件沟通工具，展示 AI 草稿如何改变独立创始人的游戏规则。",
      "本指南涵盖为什么一条告警需要四份不同草稿、对比带 AI 功能的 Statuspage 替代品，以及如何挑选不超出自举预算的工具。",
    ],
    sections: [
      {
        h2: "为什么一条告警需要四份不同草稿",
        paragraphs: ["直接复制粘贴监控告警会失败，因为："],
        list: [
          "状态页更新需要得体、面向客户的语气 — 不是原始错误码",
          "客户邮件需要主题行、问候语和明确的后续步骤",
          "内部 Slack 通知需要行动项、@提及和原始告警上下文",
          "复盘报告需要时间线结构、根因章节和改进措施",
          "每个渠道的受众期望不同的细节程度和紧急感",
        ],
        after: [
          "经典独立开发者事件流程：5 分钟内确认、30 分钟内更新客户、48 小时内出复盘。你不需要 SRE 团队。你需要的是：告警解析、严重程度识别，以及每个渠道的一键复制。",
        ],
      },
      {
        h2: "2026 年事件沟通工具对比",
        tools: [
          {
            h3: "Statuspage.io — $29+/月",
            p: "Atlassian 旗下行业标准状态页。专业可信，但对独立创始人偏贵。无 AI 草稿 — 每条更新都要手写。监控需单独购买。",
          },
          {
            h3: "PageCalm — 免费档 + 付费",
            p: "面向小团队的 AI 状态页。粘贴告警生成更新。免费档适合独立创始人。聚焦状态页 + 邮件订阅者。",
          },
          {
            h3: "Chirp — 起步 $7/月",
            p: "监控 + 状态页 + AI 助手。写事件更新、周报摘要。性价比高，但捆绑了你可能已通过 UptimeRobot 获得的监控。",
          },
          {
            h3: "StatusPilot — AI 事件沟通",
            p: "从 PagerDuty/Datadog 接入 Webhook。AI 草稿状态更新和复盘报告。较新玩家，纯聚焦沟通层。",
          },
          {
            h3: "AI 事件摘要 — $29/月一口价",
            p: "粘贴任意告警 → 状态页更新、客户邮件、Slack 通知、复盘报告。不捆绑监控，无需 GitHub OAuth。为已有 uptime 工具的创始人打造。",
            link: {
              href: "/draft",
              text: "免费体验 5 次",
              suffix: "，试用 AI 事件摘要。",
            },
          },
        ],
      },
      {
        h2: "如何挑选事件沟通工具",
        paragraphs: ["订阅前检查这些标准："],
        list: [
          "告警接入：能否粘贴原始 PagerDuty/Datadog 文本，无需 Webhook 配置？",
          "渠道覆盖：状态页 + 邮件 + 内部 + 复盘，一次流程搞定",
          "严重程度识别：能否自动分类「调查中」与「已恢复」？",
          "文案质量：得体的客户语气，不是机械的模板填充",
          "定价：$15/月以下一口价，草稿不限量",
          "无捆绑冗余：你可能已为 UptimeRobot 或 Better Stack 付过监控费",
        ],
        after: [
          "有专职 SRE 的团队，Statuspage.io 或 PagerDuty 内置沟通可能够用。身兼数职的独立创始人，粘贴即草稿的工具每次事件可省 20 分钟以上。",
        ],
      },
      {
        h2: "60 秒事件沟通工作流",
        ordered: [
          "告警触发 — 从 PagerDuty、Datadog 或 uptime 工具复制原始文本",
          "粘贴到 AI 草稿工具 — 即时获得 4 个渠道专属草稿",
          "审阅并编辑 — AI 草稿已 90% 就绪；如已知 ETA 可补充",
          "发布状态页更新 — 复制到状态页或 Pulse Suite 仪表盘",
          "发送客户邮件 — 复制到邮件工具或状态页订阅者群发",
          "发布内部 Slack 通知 — 与外包或联创协调",
          "恢复后 — 以复盘草稿为起点完善正式报告",
        ],
        after: [
          "这套流程将 30 分钟的沟通慌乱变成 60 秒的复制粘贴。修复该花多久还花多久 — 但客户在几分钟内就能听到你的声音，而不是几小时后。",
        ],
      },
      {
        h2: "事件期间的 SEO 与信任",
        paragraphs: [
          "事件沟通也是留存工具。宕机期间收到清晰、及时更新的客户，比被晾着的客户更可能续费。有专业更新的公开状态页传递成熟度信号 — 即使是一人 SaaS。",
          "长期可发现性方面，将复盘报告（脱敏后）发布为博客。搜索「某产品 宕机」或「某竞品 状态页 替代品」的工程师，会带来评估工具的有机流量。",
        ],
        after: [
          "将状态页提交到 Google Search Console。从 changelog 链接复盘报告。宕机时沟通到位的独立开发者，会积累转化为付费客户的声誉。",
        ],
      },
    ],
    cta: {
      title: "准备好生成第一份事件更新了吗？",
      subtitle: "免费体验 5 次 · 粘贴告警 → 4 个渠道更新，60 秒搞定",
      button: "免费生成",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
