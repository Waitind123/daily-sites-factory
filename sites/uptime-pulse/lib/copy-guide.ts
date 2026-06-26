import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 UptimeRobot Alternative for Indie Hackers — Complete Guide",
      description:
        "UptimeRobot raised prices 4× in 2025. Compare uptime monitoring tools for indie developers: pricing, status pages, alerts. Find a $9.9/mo flat-rate alternative.",
    },
    h1: "2026 UptimeRobot Alternative for Indie Hackers: Complete Uptime Monitoring Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "If you ship side projects or bootstrapped SaaS, you have probably lived this nightmare: your API goes down at 2am, you find out at 9am when a user tweets \"is this dead?\" You scramble to fix it, lose trust, and wonder why you did not set up monitoring months ago.",
      "Uptime monitoring is not optional infrastructure — it is the difference between a 5-minute incident and a half-day outage. For indie hackers running 3–10 small apps on Vercel, the math used to be simple: UptimeRobot free tier, 50 monitors, done. Then in 2025, everything changed.",
      "Developers on DEV Community and Indie Hackers reported bills jumping from $8/month to $34/month overnight — same monitors, same checks, 4× the price. One founder wrote: \"I got hit by a 4× price hike — so I built my own uptime monitor.\"",
      "This guide walks through 2026 uptime monitoring options for solo founders, what actually matters at indie scale, and how to pick a tool that will not surprise you with add-on fees.",
    ],
    sections: [
      {
        h2: "Why indie hackers need uptime monitoring",
        paragraphs: ["When you are a team of one, you are also on-call, support, and marketing. A good monitor does three things:"],
        list: [
          "Detects downtime fast — ideally within 1–5 minutes, not when users complain",
          "Alerts where you already work — Slack, Telegram, or email",
          "Shows customers you are on top of incidents — via a public status page",
        ],
        after: [
          "UptimeRobot was long the budget option. But in 2025, they killed legacy plans and raised prices by up to 425%. Users paying $8/month for 50 monitors are now asked to pay $29–34/month. Thousands are actively searching for alternatives.",
        ],
      },
      {
        h2: "2026 uptime monitoring tools compared",
        tools: [
          {
            h3: "UptimeRobot — $8–34/mo",
            p: "Long-time budget king but recent aggressive price hikes alienated users. Free tier now restricted to non-commercial use. Status page feature is basic compared to dedicated tools.",
          },
          {
            h3: "Better Stack — $29+/mo",
            p: "Full incident management and on-call scheduling. Great for teams. Overkill and expensive for solo founders monitoring 5–10 side projects.",
          },
          {
            h3: "Atlassian Statuspage — $29–399/mo",
            p: "Beautiful status pages but no built-in monitoring. You pay for the page, then pay again for a monitor. Double billing for what indie devs need as one product.",
          },
          {
            h3: "Uptime Kuma — free (self-hosted)",
            p: "Popular open-source option with unlimited monitors. \"Free\" ignores your time: patching, backups, and monitoring the monitor itself. Managed tools trade money for focus.",
          },
          {
            h3: "Uptime Pulse — $9.9/mo flat",
            p: "Built for indie hackers post–UptimeRobot price hikes. Unlimited monitors, 1-minute checks, Slack/webhook alerts, public status page, and SSL expiry monitoring.",
            link: { href: "/monitors", text: "Try 5 free URL checks", suffix: ", then $9.9/mo flat. No per-monitor math." },
          },
        ],
      },
      {
        h2: "What to look for in an indie uptime monitor",
        paragraphs: ["Skip the enterprise checklist. At solo-founder scale, prioritize:"],
        ordered: [
          "Commercial use on your plan — read the ToS before relying on free tiers",
          "Check interval — 5 minutes is okay for blogs; APIs need 1 minute",
          "Alert channels — Slack webhook is non-negotiable for most devs",
          "Status page included — not a $12/month add-on per page",
          "SSL monitoring — certificate expiry causes silent failures",
          "Predictable pricing — flat monthly beats per-monitor math",
        ],
      },
      {
        h2: "How to set up monitoring in 10 minutes",
        paragraphs: ["Whether you use Uptime Pulse or another tool, the workflow is the same:"],
        ordered: [
          "Monitor your marketing site (landing page)",
          "Monitor API health endpoint (/api/health returning 200)",
          "Monitor critical third-party dependencies if user-facing",
          "Connect Slack — test the alert by stopping your dev server once",
          "Publish a status page URL in your app footer",
        ],
        after: [
          "Start with three monitors. Add more as you ship features. The goal is coverage without configuration fatigue.",
        ],
      },
      {
        h2: "Pricing psychology: why $9.9/month works",
        paragraphs: [
          "Solo founders mentally budget $9–15/month per utility. Above $20, you start justifying and procrastinating. Below $5, users question reliability.",
          "$9.9/month for uptime monitoring is less than one lost customer. It is less than an hour of your debugging time. If your product makes any revenue, monitoring pays for itself the first time it wakes you up before users notice.",
        ],
      },
    ],
    cta: {
      title: "Run a free URL check now",
      subtitle: "5 free checks · 1-min monitoring · $9.9/mo unlimited",
      button: "Open monitors →",
      href: "/monitors",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 UptimeRobot 平替指南 — Uptime 监控选型",
      description:
        "UptimeRobot 2025 年涨价 4 倍。对比独立开发者 uptime 监控工具：定价、状态页、告警。找到 $9.9/月一口价替代方案。",
    },
    h1: "2026 独立开发者 UptimeRobot 平替：Uptime 监控完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "如果你 ship 副业项目或自举 SaaS，大概经历过这种噩梦：凌晨 2 点 API 挂了，早上 9 点用户发推问「是不是死了？」你手忙脚乱修复，失去信任，后悔几个月前没配监控。",
      "Uptime 监控不是可选项 — 它是 5 分钟故障和半天宕机的区别。对跑 3–10 个小应用的独立开发者，过去算得简单：UptimeRobot 免费版，50 个监控，搞定。然后 2025 年，一切变了。",
      "DEV Community 和 Indie Hackers 上的开发者报告账单一夜之间从 $8/月涨到 $34/月 — 同样监控、同样检测，价格 4 倍。一位创始人写道：「我被 4 倍涨价砸了 — 所以我自己做了 uptime 监控。」",
      "本指南梳理 2026 年适合独立开发者的 uptime 监控选项、indie 规模真正重要的功能，以及如何选择不会用附加费惊吓你的工具。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要 uptime 监控",
        paragraphs: ["一人团队时，你也是值班、客服和营销。好的监控做三件事："],
        list: [
          "快速发现宕机 — 理想 1–5 分钟内，而不是等用户投诉",
          "在你已有的地方告警 — Slack、Telegram 或邮件",
          "向客户展示你在处理故障 — 通过公开状态页",
        ],
        after: [
          "UptimeRobot 曾是预算之选。但 2025 年取消旧套餐，涨价最高 425%。付 $8/月监控 50 个 URL 的用户现在要付 $29–34/月。数千人正在积极寻找替代品。",
        ],
      },
      {
        h2: "2026 uptime 监控工具对比",
        tools: [
          {
            h3: "UptimeRobot — $8–34/月",
            p: "长期预算之王，但近期激进涨价疏远用户。免费版现限制非商业用途。状态页功能比专用工具简陋。",
          },
          {
            h3: "Better Stack — $29+/月",
            p: "完整事件管理与值班排班。适合团队。对监控 5–10 个副业项目的独立开发者过重过贵。",
          },
          {
            h3: "Atlassian Statuspage — $29–399/月",
            p: "漂亮状态页但无内置监控。状态页要付费，监控还要再付费。独立开发者需要的一体化产品被拆成两次账单。",
          },
          {
            h3: "Uptime Kuma — 免费（自托管）",
            p: "流行的开源方案，监控不限量。「免费」忽略你的时间：打补丁、备份、还要监控监控器本身。托管工具用钱换专注。",
          },
          {
            h3: "Uptime Pulse — $9.9/月 一口价",
            p: "为 UptimeRobot 涨价后的独立开发者打造。无限监控、1 分钟检测、Slack/Webhook 告警、公开状态页、SSL 到期监控。",
            link: { href: "/monitors", text: "免费体验 5 次 URL 检测", suffix: "，之后 $9.9/月一口价。无按监控数计费。" },
          },
        ],
      },
      {
        h2: "indie 规模该看什么",
        paragraphs: ["跳过企业级清单。独立开发者阶段优先："],
        ordered: [
          "商业用途许可 — 依赖免费版前读服务条款",
          "检测间隔 — 博客 5 分钟可以；API 需要 1 分钟",
          "告警渠道 — 多数开发者离不开 Slack Webhook",
          "含状态页 — 不是每个页面 $12/月的附加项",
          "SSL 监控 — 证书到期导致静默故障",
          "可预测定价 — 月付一口价胜过按监控数计费",
        ],
      },
      {
        h2: "10 分钟配好监控",
        paragraphs: ["无论用 Uptime Pulse 还是其他工具，流程一样："],
        ordered: [
          "监控营销站（落地页）",
          "监控 API 健康端点（/api/health 返回 200）",
          "如面向用户，监控关键第三方依赖",
          "连接 Slack — 停一次开发服务器测试告警",
          "在应用页脚发布状态页链接",
        ],
        after: [
          "从三个监控开始。随功能增加再扩展。目标是覆盖到位，而非配置疲劳。",
        ],
      },
      {
        h2: "定价心理：为什么 $9.9/月合适",
        paragraphs: [
          "独立开发者心里为每个工具预算 $9–15/月。超过 $20 就开始纠结比较拖延。低于 $5 用户会质疑可靠性。",
          "$9.9/月的 uptime 监控比一个流失客户便宜，比一小时排错时间便宜。产品有收入的话，第一次在用户发现前叫醒你就回本了。",
        ],
      },
    ],
    cta: {
      title: "立即免费检测 URL",
      subtitle: "免费 5 次检测 · 1 分钟监控 · $9.9/月 不限量",
      button: "打开监控台 →",
      href: "/monitors",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
