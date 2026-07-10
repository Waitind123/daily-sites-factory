import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Uptime Monitoring + Status Page Guide for Indie Hackers",
      description:
        "Statuspage.io starts at $29/mo without monitoring. UptimeRobot has basic status pages. Compare all-in-one tools for indie SaaS. Find a $29/mo flat-rate monitor + status page combo.",
    },
    h1: "2026 Uptime + Status Page: Indie Hacker Reliability Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "Every indie SaaS founder faces the same reliability stack: monitor your endpoints, tell users when things break. The classic setup? UptimeRobot for pings ($7–34/mo) plus Statuspage.io for customer communication ($29+/mo). Two subscriptions, two dashboards, two logins.",
      "On r/SaaS and Indie Hackers, founders repeatedly ask: \"Is there a tool that does uptime monitoring AND a proper status page?\" Another wrote: \"I wish UptimeRobot's status page wasn't so bare-bones.\" Statuspage.io doesn't include monitoring at all — you pay $29 just for the green dot.",
      "Chirp, StillUp, and StillOnline emerged in 2026 to fill this gap. But many solo founders want something simpler: add URLs, get alerts, publish a status page, post incidents — flat $29/mo, no enterprise sales call.",
      "This guide compares 2026 uptime + status page tools for solo founders, what 'all-in-one' actually means, and how to pick a stack that won't eat your runway before your first paying customer.",
    ],
    sections: [
      {
        h2: "Why indie hackers need both monitoring and status pages",
        paragraphs: ["When your API goes down at 3am, two things happen:"],
        list: [
          "You need to know immediately — 1-minute HTTP checks with Slack/email alerts",
          "Your users need a place to check — a public status page instead of 60 support tickets",
          "During incidents, you need to post updates — investigating → identified → resolved timeline",
          "After recovery, subscribers should get the all-clear — email notifications build trust",
          "Enterprise customers expect status.yourapp.com in your footer — it's table stakes for B2B SaaS",
        ],
        after: [
          "Monitoring without a status page means you're the human status page — answering DMs at 3am. A status page without monitoring means manual updates during every deploy. You need both.",
        ],
      },
      {
        h2: "2026 uptime + status page tools compared",
        tools: [
          {
            h3: "Statuspage.io — $29+/mo (no monitoring)",
            p: "Industry standard for enterprise status communication. Beautiful pages, incident management, subscriber emails. But zero uptime monitoring — you need a separate tool.",
          },
          {
            h3: "UptimeRobot — $7–34/mo (basic status page)",
            p: "50 free monitors is generous. Status page exists but it's bare-bones — no incident management, no subscriber emails, dated UI.",
          },
          {
            h3: "Better Stack — $24+/mo",
            p: "Comprehensive: monitoring, status pages, logs, on-call. Great for growing teams. Overkill and expensive for solo founders with 3 endpoints.",
          },
          {
            h3: "Chirp — $7+/mo",
            p: "Built for indie hackers with AI incident summaries. Monitoring + status pages included. Newer player with solid free tier.",
          },
          {
            h3: "Pulse Suite — $29/mo flat",
            p: "Built for indie hackers who want monitoring + status pages in one dashboard. 1-minute checks, incident posts, email subscribers. No per-monitor fees.",
            link: { href: "/join", text: "5 free actions to try", suffix: ", then $29/mo flat." },
          },
        ],
      },
      {
        h2: "What to look for in an all-in-one reliability tool",
        paragraphs: ["Before subscribing, check these five criteria:"],
        ordered: [
          "Check interval — 1-minute detection vs 5-minute free tiers that miss short outages",
          "Status page quality — component health, incident timeline, subscriber emails (not just a green dot)",
          "Incident workflow — can you post investigating → resolved updates without switching tools?",
          "Flat pricing — $29/mo unlimited beats per-monitor + per-status-page stacking",
          "Setup time — live in 5 minutes, not 45 minutes of webhook configuration",
        ],
        after: [
          "For teams with 20+ microservices and on-call rotation, Better Stack may be worth the complexity. For solo founders shipping 1–5 endpoints, an all-in-one tool saves money and mental overhead.",
        ],
      },
      {
        h2: "Reliability workflow that actually works",
        paragraphs: ["Here's the workflow I recommend for solo founders:"],
        ordered: [
          "Add your landing page, API health endpoint, and docs site to monitoring",
          "Create a public status page with API, Web App, Database components",
          "Add status.yourapp.com to your footer and docs sidebar",
          "When checks fail, post an incident — subscribers get email updates automatically",
          "Resolve the incident when checks pass — components return to operational",
        ],
        after: [
          "This workflow takes 5 minutes to set up and saves hours during every outage. Your users check the status page. You fix the bug. Nobody asks 'is it just me?' in your DMs.",
        ],
      },
      {
        h2: "When to upgrade from free tiers",
        paragraphs: [
          "UptimeRobot's 50 free monitors are tempting. Chirp's free tier covers 3 monitors. But free tiers have limits:",
        ],
        list: [
          "No custom domain on status pages (status.yourapp.com)",
          "Limited incident management and subscriber emails",
          "Branding from the tool vendor on your public page",
          "5-minute check intervals that miss brief outages",
        ],
        after: [
          "Once you have paying customers, $29/mo for professional reliability infrastructure is the cheapest insurance you'll buy. One prevented churn event pays for a year.",
        ],
      },
    ],
    cta: {
      title: "Ready to stop juggling two reliability tools?",
      subtitle: "Try Pulse Suite free — 5 actions to test monitoring and status pages. Then $29/mo flat.",
      button: "Try free",
      href: "/dashboard",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Uptime 监控 + 状态页指南",
      description:
        "Statuspage.io $29/月起且不含监控。UptimeRobot 状态页过于简陋。对比一体化工具，找到 $29/月监控+状态页组合。",
    },
    h1: "2026 Uptime 监控 + 状态页：独立开发者可靠性指南",
    updated: "2026 年 6 月更新 · 阅读约 10 分钟",
    intro: [
      "每个独立 SaaS 创始人都面临同样的可靠性栈：监控端点，故障时通知用户。经典方案？UptimeRobot 做检测（$7–34/月）加 Statuspage.io 做客户沟通（$29+/月）。两个订阅、两个控制台、两套登录。",
      "在 r/SaaS 和 Indie Hackers 上，创始人反复问：「有没有同时做 Uptime 监控和正经状态页的工具？」还有人写：「希望 UptimeRobot 的状态页别那么简陋。」Statuspage.io 根本不含监控 — 你付 $29 只为一个绿点。",
      "2026 年 Chirp、StillUp、StillOnline 填补了这个空白。但很多 solo 创始人想要更简单的：加 URL、收告警、发状态页、发事件 — $29/月一口价，不用企业销售电话。",
      "本指南对比 2026 年面向 solo 创始人的监控+状态页工具、「一体化」真正意味着什么，以及如何选型不至于在第一个付费客户前就烧光跑道。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要监控和状态页",
        paragraphs: ["当你的 API 凌晨 3 点宕机，两件事同时发生："],
        list: [
          "你需要立刻知道 — 1 分钟 HTTP 检测 + Slack/邮件告警",
          "用户需要地方自查 — 公开状态页代替 60 条工单",
          "故障期间你需要发更新 — 调查中 → 已识别 → 已解决时间线",
          "恢复后订阅者应收到全部正常通知 — 邮件通知建立信任",
          "企业客户期望页脚有 status.yourapp.com — B2B SaaS 的标配",
        ],
        after: [
          "只有监控没有状态页，你就是人肉状态页 — 凌晨 3 点回私信。只有状态页没有监控，每次部署都要手动更新。两者缺一不可。",
        ],
      },
      {
        h2: "2026 监控 + 状态页工具对比",
        tools: [
          {
            h3: "Statuspage.io — $29+/月（不含监控）",
            p: "企业级状态沟通的行业标准。精美页面、事件管理、订阅者邮件。但零 Uptime 监控 — 需要另买工具。",
          },
          {
            h3: "UptimeRobot — $7–34/月（基础状态页）",
            p: "50 个免费监控很慷慨。状态页存在但过于简陋 — 无事件管理、无订阅者邮件、界面老旧。",
          },
          {
            h3: "Better Stack — $24+/月",
            p: "全面：监控、状态页、日志、值班。适合成长中的团队。对只有 3 个端点的 solo 创始人过于复杂昂贵。",
          },
          {
            h3: "Chirp — $7+/月",
            p: "为独立开发者打造，含 AI 事件摘要。监控+状态页一体。较新玩家，免费层不错。",
          },
          {
            h3: "监控状态一体 — $29/月一口价",
            p: "为想要监控+状态页一个控制台的独立开发者打造。1 分钟检测、事件发布、邮件订阅者。不按监控数收费。",
            link: { href: "/join", text: "免费体验 5 次", suffix: "，之后 $29/月一口价。" },
          },
        ],
      },
      {
        h2: "一体化可靠性工具选购要点",
        paragraphs: ["订阅前检查这五项："],
        ordered: [
          "检测间隔 — 1 分钟发现 vs 5 分钟免费层漏掉短暂故障",
          "状态页质量 — 组件健康、事件时间线、订阅者邮件（不只是绿点）",
          "事件流程 — 能否在同一工具发调查中 → 已解决更新？",
          "一口价 — $29/月无限优于按监控数+按状态页叠加",
          "配置时间 — 5 分钟上线，不是 45 分钟 webhook 配置",
        ],
        after: [
          "有 20+ 微服务和值班轮班的团队，Better Stack 的复杂度可能值得。对发布 1–5 个端点的 solo 创始人，一体化工具省钱又省心。",
        ],
      },
      {
        h2: "真正有效的可靠性工作流",
        paragraphs: ["推荐给 solo 创始人的流程："],
        ordered: [
          "将落地页、API 健康端点、文档站加入监控",
          "创建带 API、Web 应用、数据库组件的公开状态页",
          "在页脚和文档侧栏添加 status.yourapp.com",
          "检测失败时发布事件 — 订阅者自动收到邮件更新",
          "检测恢复后解决事件 — 组件回归正常",
        ],
        after: [
          "这套流程 5 分钟配好，每次故障省数小时。用户查状态页，你修 bug，没人私信问「是我这边的问题吗？」",
        ],
      },
      {
        h2: "何时从免费层升级",
        paragraphs: [
          "UptimeRobot 50 个免费监控很诱人。Chirp 免费层覆盖 3 个监控。但免费层有限制：",
        ],
        list: [
          "状态页无自定义域名（status.yourapp.com）",
          "事件管理与订阅者邮件受限",
          "公开页带工具商品牌",
          "5 分钟检测间隔漏掉短暂故障",
        ],
        after: [
          "一旦有付费客户，$29/月买专业可靠性基础设施是最便宜的保险。少流失一个客户就值一年订阅。",
        ],
      },
    ],
    cta: {
      title: "准备好不再 juggling 两个可靠性工具？",
      subtitle: "免费试用监控状态一体 — 5 次操作测试监控与状态页。之后 $29/月一口价。",
      button: "免费试用",
      href: "/dashboard",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
