import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Statuspage Embed Widget Alternative — One-Line Status Badge Guide",
      description:
        "Statuspage embed widgets cost $299+/mo. Learn how indie SaaS founders add a live status badge to footers and docs with one line of code, auto incident detection, and $29/mo flat pricing.",
    },
    h1: "2026 Statuspage Embed Widget Alternative: One-Line Status Badge Guide",
    updated: "Updated July 2026 · 12 min read",
    intro: [
      "Your users don't visit status.yourapp.com. They look at your app footer, your docs sidebar, or your dashboard — and wonder if the green dot means everything is fine.",
      "An embeddable status widget solves this. One line of iframe or script code dropped into your footer shows live operational status without sending users to a separate page. When something breaks, the badge turns yellow or red instantly.",
      "The problem? Statuspage.io charges $299/month for embed widgets on their Business tier. Instatus and Better Stack include embeds on higher plans too. For a solo founder with 50 users, that's runway you can't afford.",
      "On Indie Hackers, a founder posted in March 2026: \"I just want a status badge in my footer — Statuspage wants $299/mo for an iframe.\" Another on r/SaaS wrote: \"looking for alternative to Statuspage embed widget, would pay for something under $20/mo.\"",
      "This guide covers why embed widgets matter, how to implement them in 60 seconds, auto incident detection from uptime pings, and how Status Embed Lite compares to enterprise tools at indie pricing.",
    ],
    sections: [
      {
        h2: "Why embed a status widget instead of just a link",
        paragraphs: ["A footer link to status.yourapp.com requires users to leave your product. An embed widget keeps them in context:"],
        list: [
          "Instant visibility — users see 🟢 All Systems Operational without clicking",
          "Reduced support tickets — \"is it down?\" questions drop when status is always visible",
          "Trust signal — transparency in your app footer shows you take reliability seriously",
          "Subscriber funnel — clicking the widget opens your full status page for email alerts",
        ],
        after: [
          "The best indie SaaS products embed status in three places: website footer, documentation sidebar, and logged-in dashboard. One embed snippet, three placements, zero extra configuration.",
        ],
      },
      {
        h2: "2026 embed widget tools compared",
        tools: [
          {
            h3: "Statuspage.io — $299+/mo for embed",
            p: "Enterprise embed widgets with custom CSS, subscriber management, and SLA metrics. Built for companies with dedicated SRE teams. The embed alone costs more than most indie SaaS monthly revenue.",
          },
          {
            h3: "Instatus — $20–40/mo",
            p: "Modern embed widgets with clean design. Good for small teams. Embed available on paid tiers but still priced above what bootstrapped founders want for a footer badge.",
          },
          {
            h3: "Better Stack — $20+/mo",
            p: "Monitoring + status page combined. Embed widgets on higher tiers. Great if you need monitoring too, but overkill if you already have UptimeRobot and just need the embed.",
          },
          {
            h3: "DIY iframe — free but manual",
            p: "Build your own /status endpoint and iframe it. Free but requires maintenance, incident posting, and subscriber management you build yourself.",
          },
          {
            h3: "Status Embed Lite — $29/mo flat",
            p: "Built for indie hackers who need a one-line embed widget without enterprise pricing. Auto incident detection from uptime pings, unlimited embeds, email subscribers.",
            link: { href: "/join", text: "5 free embed widgets to try", suffix: ", then $29/mo flat. Copy-paste iframe in 60 seconds." },
          },
        ],
      },
      {
        h2: "How to embed a status widget in 60 seconds",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create an embed widget named after your product",
          "Copy the iframe snippet from your dashboard",
          "Paste into your website footer, docs template, or app layout",
          "Optionally add a ping URL for auto incident detection",
          "Test by visiting your site — the badge should show live status",
        ],
        after: [
          "Example embed code: <iframe src=\"https://status-embed-lite.vercel.app/embed/my-saas\" width=\"180\" height=\"28\" frameborder=\"0\"></iframe>. The widget auto-updates when you post incidents or when uptime checks fail.",
        ],
      },
      {
        h2: "Auto incident detection from uptime pings",
        paragraphs: [
          "Manual incident posting works until you're asleep during an outage. Auto-detection pings your API every 60 seconds. When checks fail twice in a row, Status Embed Lite auto-creates an incident, degrades affected components, and emails subscribers.",
          "Connect your health endpoint — /health, /api/status, or any URL returning 200. No agent installation, no Kubernetes sidecar. Just a URL we ping from our infrastructure.",
          "When checks recover, the incident auto-resolves and the embed badge turns green again. You wake up to a timeline of what happened, not 40 support tickets.",
        ],
      },
      {
        h2: "Embed widget best practices for indie SaaS",
        paragraphs: ["Placement and design tips that reduce support load:"],
        list: [
          "Footer placement — bottom-right corner, small badge, links to full status page",
          "Docs sidebar — persistent widget so users checking docs during outages see status",
          "Dashboard header — logged-in users see status without leaving your app",
          "Keep it small — 180×28px iframe is enough; don't block your UI",
          "Match your theme — dark or light embed variants available on paid plans",
        ],
        after: [
          "Founders who embed status widgets report 60–80% fewer \"is it down?\" support tickets during deploys. The widget pays for itself in one incident.",
        ],
      },
      {
        h2: "Embed widget + full status page: you need both",
        paragraphs: [
          "The embed widget is the entry point. The full status page is where users subscribe, read incident timelines, and see component-level health. They work together:",
        ],
        list: [
          "Embed widget — always-visible badge in your product (footer, docs, dashboard)",
          "Status page — detailed component health, incident history, email subscription",
          "Auto-detect — uptime pings bridge monitoring and communication automatically",
        ],
        after: [
          "Status Embed Lite gives you both in one tool. Create once, get embed code + public status page + auto-detection. No stitching together UptimeRobot + Statuspage + custom iframe.",
        ],
      },
    ],
    cta: {
      title: "Ready to embed status in 60 seconds?",
      subtitle: "5 free embed widgets · unlimited after subscribe",
      button: "Create your first embed widget",
    },
  },
  zh: {
    meta: {
      title: "2026 Statuspage 嵌入组件平替 — 一行状态角标完整指南",
      description:
        "Statuspage 嵌入组件要 $299+/月。了解独立开发者如何用一行代码在页脚和文档添加实时状态角标、自动事件检测，$29/月 一口价。",
    },
    h1: "2026 Statuspage 嵌入组件平替：一行状态角标完整指南",
    updated: "2026 年 7 月更新 · 阅读约 12 分钟",
    intro: [
      "用户不会主动访问 status.yourapp.com。他们看你的应用页脚、文档侧栏或控制台 — 想知道那个绿点是不是代表一切正常。",
      "可嵌入状态组件解决这个问题。一行 iframe 或 script 代码贴到页脚，无需跳转就能显示实时运行状态。出故障时，角标立刻变黄或变红。",
      "问题是？Statuspage.io 的商业版嵌入组件要 $299/月。Instatus 和 Better Stack 的高档计划才含嵌入。对只有 50 个用户的 solo founder 来说，这是吃不起的跑道。",
      "2026 年 3 月 Indie Hackers 上有人发帖：「我只想在页脚放个状态角标 — Statuspage 一个 iframe 要 $299/月。」r/SaaS 上也有人写：「找 Statuspage 嵌入组件替代品，愿意付 $20/月以下。」",
      "本指南涵盖嵌入组件为什么重要、60 秒如何上线、uptime 心跳自动事件检测，以及极简状态页如何用独立开发者定价对标企业工具。",
    ],
    sections: [
      {
        h2: "为什么嵌入组件比单纯放链接更好",
        paragraphs: ["页脚链接到 status.yourapp.com 需要用户离开你的产品。嵌入组件让用户留在当前页面："],
        list: [
          "即时可见 — 用户不用点击就能看到 🟢 所有系统正常",
          "减少工单 — 状态始终可见时「是不是挂了？」的问题大幅减少",
          "信任信号 — 应用页脚的透明状态说明你重视可靠性",
          "订阅漏斗 — 点击组件打开完整状态页，用户可订阅邮件告警",
        ],
        after: [
          "最好的独立 SaaS 产品在三个地方嵌入状态：网站页脚、文档侧栏、登录后控制台。一段嵌入代码，三个位置，零额外配置。",
        ],
      },
      {
        h2: "2026 嵌入组件工具对比",
        tools: [
          {
            h3: "Statuspage.io — 嵌入要 $299+/月",
            p: "企业级嵌入组件，含自定义 CSS、订阅者管理、SLA 指标。为有专职 SRE 团队的公司打造。仅嵌入功能就比大多数独立 SaaS 月营收还高。",
          },
          {
            h3: "Instatus — $20–40/月",
            p: "界面现代的嵌入组件。适合小团队。付费档才有嵌入，定价仍高于很多自举创始人愿意为页脚角标付的价。",
          },
          {
            h3: "Better Stack — $20+/月",
            p: "监控 + 状态页一体。高档才有嵌入。若已有 UptimeRobot 只需要嵌入就太重了。",
          },
          {
            h3: "自建 iframe — 免费但费工",
            p: "自己做 /status 端点再 iframe。免费但要自己维护、发事件、管订阅者。",
          },
          {
            h3: "极简状态页 — $29/月 一口价",
            p: "为独立开发者打造：一行嵌入组件，无企业定价。uptime 心跳自动事件检测、嵌入不限量、邮件订阅者不限量。",
            link: { href: "/join", text: "免费体验 5 个嵌入组件", suffix: "，之后 $29/月 一口价。60 秒复制粘贴 iframe。" },
          },
        ],
      },
      {
        h2: "60 秒嵌入状态组件",
        paragraphs: ["一人创始人最快路径："],
        ordered: [
          "用产品名创建嵌入组件",
          "从控制台复制 iframe 代码片段",
          "粘贴到网站页脚、文档模板或应用布局",
          "可选：添加 Ping 地址启用自动事件检测",
          "访问你的网站测试 — 角标应显示实时状态",
        ],
        after: [
          "示例嵌入代码：<iframe src=\"https://status-embed-lite.vercel.app/embed/my-saas\" width=\"180\" height=\"28\" frameborder=\"0\"></iframe>。你发布事件或 uptime 检测失败时，组件自动更新。",
        ],
      },
      {
        h2: "uptime 心跳自动事件检测",
        paragraphs: [
          "手动发事件可以，直到你睡着时 API 挂了。自动检测每 60 秒 ping 你的 API。连续两次失败时，极简状态页自动创建事件、降级组件并邮件通知订阅者。",
          "连接你的健康检查端点 — /health、/api/status 或任何返回 200 的 URL。无需安装 agent，无需 Kubernetes sidecar。只要一个我们 ping 的 URL。",
          "检测恢复后事件自动解决，嵌入角标变回绿色。你醒来看到的是完整时间线，不是 40 条支持工单。",
        ],
      },
      {
        h2: "独立 SaaS 嵌入组件最佳实践",
        paragraphs: ["减少支持负担的放置与设计建议："],
        list: [
          "页脚放置 — 右下角小角标，链接到完整状态页",
          "文档侧栏 — 持久组件，用户查文档时能看到状态",
          "控制台顶栏 — 登录用户不用离开应用就能看到状态",
          "保持小巧 — 180×28 像素 iframe 足够，别挡住界面",
          "匹配主题 — 付费计划可选深色或浅色嵌入样式",
        ],
        after: [
          "嵌入状态组件的创始人报告部署期间「是不是挂了？」工单减少 60–80%。一次故障就能回本。",
        ],
      },
      {
        h2: "嵌入组件 + 完整状态页：两个都需要",
        paragraphs: [
          "嵌入组件是入口。完整状态页是用户订阅、读事件时间线、看组件级健康的地方。两者配合：",
        ],
        list: [
          "嵌入组件 — 产品中始终可见的角标（页脚、文档、控制台）",
          "状态页 — 详细组件健康、事件历史、邮件订阅",
          "自动检测 — uptime 心跳自动桥接监控与沟通",
        ],
        after: [
          "极简状态页一个工具给你两者。创建一次，获得嵌入代码 + 公开状态页 + 自动检测。不用拼凑 UptimeRobot + Statuspage + 自建 iframe。",
        ],
      },
    ],
    cta: {
      title: "准备 60 秒嵌入状态组件了吗？",
      subtitle: "免费 5 个嵌入组件 · 订阅后不限量",
      button: "创建第一个嵌入组件",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
