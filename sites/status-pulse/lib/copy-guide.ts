import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Statuspage.io Alternative for Indie Hackers — Status Page Guide",
      description:
        "Statuspage.io costs $29–299/mo before you have paying users. Compare status page tools for indie SaaS. Find a $9.9/mo flat-rate alternative with incident management and email subscribers.",
    },
    h1: "2026 Statuspage.io Alternative for Indie Hackers: Status Page Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "Every founder learns this lesson the hard way: a 45-minute outage, no status page, and 60 support tickets asking \"is it just me?\" Your users don't know you're deploying. Your inbox becomes the incident channel.",
      "Status pages solve this. A public URL — status.yourapp.com — shows component health, active incidents, and a timeline of updates. Users subscribe for email alerts instead of flooding your support queue.",
      "The problem? Statuspage.io by Atlassian starts at $29/month and scales to $299/month for features indie hackers don't need on day one. Better Stack, Instatus, and similar tools are great but priced for teams with dedicated SRE staff.",
      "On Indie Hackers and r/SaaS, founders repeatedly ask: \"What's the cheapest way to set up a status page?\" Another wrote: \"I just need a page that says 'All Systems Operational' — why is that $29/mo?\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 status page tools for solo founders, what actually matters at indie scale, and how to pick a tool that won't eat your runway before your first paying customer.",
    ],
    sections: [
      {
        h2: "Why indie hackers need a status page",
        paragraphs: ["A dedicated status page does three things your Twitter account cannot:"],
        list: [
          "Reduces support load — users check status instead of emailing \"is it down?\"",
          "Builds trust — transparency during incidents shows you take reliability seriously",
          "Closes the loop — subscribers get notified when you resolve, not when they remember to ask",
        ],
        after: [
          "The classic indie stack: create a status page, add the link to your footer and docs, post an incident when deploys go wrong, resolve and notify subscribers. You don't need multi-region monitoring, SLA reporting, or SSO in week one. You need: a clean public page, incident posts, and email subscribers at flat pricing.",
        ],
      },
      {
        h2: "2026 status page tools compared",
        tools: [
          {
            h3: "Statuspage.io — $29–299/mo",
            p: "The enterprise standard. Deep integrations, subscriber management, SLA metrics. Built for companies with SRE teams. Overkill and expensive for a solo dev with one API and a landing page.",
          },
          {
            h3: "Better Stack / Instatus — $20–25/mo",
            p: "Modern UI, monitoring included on some tiers. Good for small teams. Still more than many bootstrapped founders want to pay for a green dot and incident posts.",
          },
          {
            h3: "Upptime — free (self-hosted)",
            p: "GitHub Actions + YAML config. Free but requires setup time. Not ideal when you want status.yourapp.com live in 5 minutes without touching CI.",
          },
          {
            h3: "StatusPageBuddy — free tier / $9/mo Pro",
            p: "No-config public pages. Pair with your own monitoring. Good if you already use UptimeRobot and just need the public-facing page.",
          },
          {
            h3: "Status Pulse — $9.9/mo flat",
            p: "Built for indie hackers who want Statuspage-style pages without per-component pricing. Unlimited pages, unlimited subscribers, incident management, embeddable widget.",
            link: { href: "/join", text: "5 free status pages to try", suffix: ", then $9.9/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What to look for in a status page tool",
        paragraphs: ["Before comparing prices, decide what you actually need:"],
        ordered: [
          "Public status page — shareable URL at status.yourapp.com or /s/yourapp",
          "Component health — API, Web App, Database at minimum",
          "Incident timeline — investigating → identified → resolved updates",
          "Email subscribers — users opt in once, get notified on every update",
          "Flat pricing — no per-component or per-subscriber fees that punish growth",
        ],
        after: [
          "Skip enterprise features you won't use in month one: multi-team permissions, SLA dashboards, phone call alerts, custom CSS on every tier.",
        ],
      },
      {
        h2: "How to launch your first status page in 5 minutes",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create a status page named after your product",
          "Review default components (API, Web App, Database) — edit if needed",
          "Add the public link to your footer, docs, and README",
          "Encourage users to subscribe for email updates",
          "When something breaks, post an incident — don't wait for Twitter DMs",
        ],
        after: [
          "Most indie outages become support nightmares because users have no other channel. A status page gives them one — and gives you a single place to communicate.",
        ],
      },
      {
        h2: "Incident communication: the indie playbook",
        paragraphs: [
          "During an outage, founders often go silent — afraid to admit something broke. Users assume the worst. A simple incident post: \"We're investigating elevated API latency\" reduces anxiety immediately.",
          "Update every 30–60 minutes even if nothing changed: \"Still investigating, team is on it.\" When resolved, post the fix: \"Deployed a rollback, all systems operational.\" Subscribers get each update by email — you don't need to tweet every 20 minutes.",
        ],
      },
      {
        h2: "Status page + uptime monitoring: do you need both?",
        paragraphs: [
          "Uptime monitoring pings your URLs and alerts you. Status pages communicate to users. They're complementary:",
        ],
        list: [
          "Monitoring tells YOU something broke",
          "Status page tells YOUR USERS what's happening and when it's fixed",
        ],
        after: [
          "Many indie hackers use free UptimeRobot for monitoring and a dedicated status page tool for the public-facing communication. Status Pulse focuses on the communication layer — post incidents, notify subscribers, embed a widget.",
        ],
      },
    ],
    cta: {
      title: "Ready to stop being your own status page?",
      subtitle: "5 free status pages · unlimited after subscribe",
      button: "Create your first status page",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Statuspage.io 平替指南 — 状态页完整教程",
      description:
        "Statuspage.io 还没付费用户就要 $29–299/月。对比状态页工具，找到 $9.9/月 一口价、含事件管理与邮件订阅的平替方案。",
    },
    h1: "2026 独立开发者 Statuspage.io 平替：状态页完整指南",
    updated: "2026 年 6 月更新 · 阅读约 10 分钟",
    intro: [
      "每个创始人都会硬吃一课：故障 45 分钟，没有状态页，60 条工单问「是不是只有我这样？」用户在部署时不知道。你的收件箱变成了事件频道。",
      "状态页解决这个问题。公开链接 — status.yourapp.com — 展示组件健康、进行中事件和更新时间线。用户订阅邮件告警，而不是淹没你的支持队列。",
      "问题是？Atlassian 的 Statuspage.io 起步 $29/月，功能齐全的档位要到 $299/月 — 独立开发者第一天根本用不到。Better Stack、Instatus 等工具界面现代，但定价面向有专职 SRE 的团队。",
      "在 Indie Hackers 和 r/SaaS 上，创始人反复问：「最便宜的 status page 怎么搭？」还有人说：「我只要一个写『所有系统正常』的页面 — 为什么要 $29/月？」如果这也是你，这篇指南就是写给你的。",
      "本文对比 2026 年适合一人创始人的状态页工具、独立规模真正需要的功能，以及如何在第一个付费用户之前不被工具费用吃掉跑道。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要状态页",
        paragraphs: ["专用状态页比推特账号多做好三件事："],
        list: [
          "减少支持负担 — 用户查状态而不是发邮件问「挂了吗？」",
          "建立信任 — 故障期间透明沟通说明你重视可靠性",
          "闭环通知 — 解决后通知订阅者，不用等他们想起来再问",
        ],
        after: [
          "经典独立技术栈：创建状态页 → 链接放到页脚和文档 → 部署出问题就发事件 → 解决后通知订阅者。第一周你不需要多区域监控、SLA 报表或 SSO。你需要的是：干净的公开页、事件发布、一口价的邮件订阅。",
        ],
      },
      {
        h2: "2026 状态页工具对比",
        tools: [
          {
            h3: "Statuspage.io — $29–299/月",
            p: "企业级标准。深度集成、订阅者管理、SLA 指标。为有 SRE 团队的公司打造。对只有一个 API 和落地页的 solo dev 来说太贵也太重。",
          },
          {
            h3: "Better Stack / Instatus — $20–25/月",
            p: "界面现代，部分档位含监控。适合小团队。对很多自举创始人来说，为一个绿点和事件发布付这个价仍然偏高。",
          },
          {
            h3: "Upptime — 免费（自托管）",
            p: "GitHub Actions + YAML 配置。免费但要花时间搭建。想 5 分钟上线 status.yourapp.com 又不想碰 CI 就不太合适。",
          },
          {
            h3: "StatusPageBuddy — 免费档 / $9/月 Pro",
            p: "零配置公开页。搭配自有监控使用。已用 UptimeRobot 只需要对外页面的可以考虑。",
          },
          {
            h3: "状态页发布 — $9.9/月 一口价",
            p: "为独立开发者打造：Statuspage 式页面，不按组件收费。页面不限量、订阅者不限量、事件管理、可嵌入组件。",
            link: { href: "/join", text: "免费体验 5 个状态页", suffix: "，之后 $9.9/月 一口价，无年约。" },
          },
        ],
      },
      {
        h2: "选购状态页工具要看什么",
        paragraphs: ["比价格之前，先想清楚你真正需要什么："],
        ordered: [
          "公开状态页 — 可分享链接 status.yourapp.com 或 /s/yourapp",
          "组件健康 — 至少 API、网站、数据库",
          "事件时间线 — 调查中 → 已定位 → 已解决",
          "邮件订阅 — 用户一次订阅，每次更新自动通知",
          "一口价 — 不按组件或订阅者收费，增长不惩罚你",
        ],
        after: ["第一个月用不到的企业功能可以跳过：多团队权限、SLA 仪表盘、电话告警、每档都送自定义 CSS。"],
      },
      {
        h2: "5 分钟上线第一个状态页",
        paragraphs: ["一人创始人最快路径："],
        ordered: [
          "用产品名创建状态页",
          "检查默认组件（API、网站、数据库）— 按需修改",
          "把公开链接加到页脚、文档和 README",
          "鼓励用户订阅邮件更新",
          "出问题时发事件 — 别等推特私信",
        ],
        after: [
          "很多独立产品故障变成支持噩梦，因为用户没有其他渠道。状态页给他们一个 — 也给你一个地方统一沟通。",
        ],
      },
      {
        h2: "事件沟通：独立开发者操作手册",
        paragraphs: [
          "故障期间，创始人常常沉默 — 不敢承认出了问题。用户往最坏想。一条简单的事件：「我们正在调查 API 延迟升高」能立刻缓解焦虑。",
          "每 30–60 分钟更新一次，即使没新进展：「仍在调查中，团队在跟进。」解决后说明修复：「已回滚部署，所有系统正常。」订阅者每步都收邮件 — 不用每 20 分钟发一条推特。",
        ],
      },
      {
        h2: "状态页 + 监控：你需要两个吗？",
        paragraphs: ["Uptime 监控 ping 你的 URL 并告警。状态页向用户沟通。两者互补："],
        list: [
          "监控告诉你「出事了」",
          "状态页告诉用户「发生了什么、什么时候修好」",
        ],
        after: [
          "很多独立开发者用免费 UptimeRobot 做监控，专用状态页工具做对外沟通。状态页发布专注沟通层 — 发事件、通知订阅者、嵌入组件。",
        ],
      },
    ],
    cta: {
      title: "准备别再亲自当状态页了吗？",
      subtitle: "免费 5 个状态页 · 订阅后不限量",
      button: "创建第一个状态页",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
