import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 DocSend Alternative Guide for Indie Founders",
      description:
        "DocSend $45–300/mo? Dropbox killed free Send & Track. Compare Peony, Papermark, and DocSend Pulse. Secure doc sharing with page-level analytics at $29/mo.",
    },
    h1: "2026 DocSend Alternative Guide for Indie Founders",
    updated: "Updated July 2026 · 12 min read",
    intro: [
      "You built a SaaS and need to send your pitch deck to investors. DocSend wants $45/user/month for Standard — and page-level analytics, NDA gating, and watermarks are locked behind the $150/month Advanced tier. A 5-person team on DocSend Advanced costs over $9,000/year.",
      "In March 2025, Dropbox discontinued its free Send & Track feature, pushing millions of founders toward paid DocSend plans. Meanwhile, indie alternatives like Peony, Papermark, and SendNow emerged with flat-rate pricing and page-level analytics starting at $0–$12/month.",
      "On Hacker News, founders repeatedly post: \"I just need to track if VCs read my deck — not pay $150/month for watermarks I'll never use.\" Another wrote: \"Saw which slide investors dropped off on. Closed our seed round because I followed up at the right moment.\"",
      "This guide explains why document tracking matters for fundraising, how page-level analytics beat simple open counts, which DocSend alternatives fit indie budgets, and how to send your first tracked deck in under 2 minutes.",
    ],
    sections: [
      {
        h2: "Why page-level analytics matter for pitch decks",
        paragraphs: [
          "A simple 'document opened' notification tells you someone clicked your link. It doesn't tell you whether they read slide 3 (your traction chart) or bounced at slide 2 (the problem statement). Page-level analytics show exactly where investors spend time — and where they lose interest.",
          "For indie founders fundraising, this data is gold: if 80% of viewers drop off at your pricing slide, you know to rewrite it before the next investor meeting. If a specific VC spent 4 minutes on your team slide, that's your follow-up hook.",
        ],
        list: [
          "Open count alone: tells you someone clicked — not what they read",
          "Page-level time: shows which slides earn attention vs get skipped",
          "Drop-off per page: identifies weak slides before investor meetings",
          "Viewer sessions: location, device, and total time per prospect",
          "Download attempts: signals high intent — follow up within 24 hours",
        ],
        after: [
          "At indie scale (sending 5–20 decks per fundraise), you don't need enterprise data rooms. You need: who viewed, which pages they read, and when to follow up.",
        ],
      },
      {
        h2: "2026 DocSend alternatives compared",
        tools: [
          {
            h3: "DocSend — $45–300/mo",
            p: "Industry standard for VC-backed teams. Per-seat pricing adds up fast. Advanced features (watermarks, NDA gating) require $150+/month. No free plan — 14-day trial only.",
          },
          {
            h3: "Peony — free tier",
            p: "AI-powered data rooms with page analytics on free plan. Great for early-stage founders. Paid tiers scale for teams needing e-signatures and advanced permissions.",
          },
          {
            h3: "Papermark — open source",
            p: "Self-host for free or use SaaS from €29/month. True open-source VDR with page analytics. Best for teams needing data sovereignty.",
          },
          {
            h3: "DocSend Pulse — $29/mo flat",
            p: "Built for indie founders: create secure tracking links, get page-by-page analytics, viewer sessions, and view notifications. 5 free shares, no per-seat fees.",
            link: { href: "/share", text: "Share your first deck", suffix: " — five free tracked shares, no credit card." },
          },
        ],
      },
      {
        h2: "What to track when sending investor decks",
        paragraphs: [
          "Before choosing a tool, define what 'success' looks like for each deck send: (1) Link opened, (2) Read past problem slide, (3) Reached traction/financials, (4) Downloaded or forwarded internally.",
          "Page completion rate is your north star. A deck with 78% completion means investors read most slides. Below 50% means your narrative loses them early — fix before the next batch of sends.",
        ],
        ordered: [
          "Upload your pitch deck and create a tracking link",
          "Send to 3–5 warm intros first (calibrate analytics baseline)",
          "Review page-by-page drop-off after 48 hours",
          "Rewrite the slide with highest drop-off rate",
          "Re-send with updated deck and compare completion rates",
        ],
      },
      {
        h2: "Security features indie founders actually need",
        paragraphs: [
          "Enterprise teams need NDA gating, dynamic watermarks, and audit logs. Solo founders sending seed decks need three things: password protection, link expiry, and the ability to revoke access.",
        ],
        list: [
          "Password-protected links: prevent forwarding to unintended recipients",
          "Expiry dates: auto-disable links after your fundraise closes",
          "Revoke access: kill a link if it was sent to the wrong person",
          "View notifications: email alert when a prospect opens your deck",
          "No download option: keep investors reading in-browser (optional)",
        ],
        after: [
          "DocSend locks watermarks and NDA gating behind $150/month. For a solo founder sending 10 decks, password + expiry covers 95% of security needs.",
        ],
      },
      {
        h2: "How to send your first tracked deck",
        paragraphs: [
          "The fastest path from zero to page-level analytics:",
        ],
        ordered: [
          "Name your deck clearly (e.g., 'Seed Deck v3 — Q2 2026')",
          "Set page count so analytics can map per-slide data",
          "Add recipient email for view notifications (optional)",
          "Copy the tracking link and send via your warm intro email",
          "Check analytics dashboard after 24 hours for follow-up timing",
        ],
        after: [
          "Most founders see their first viewer session within 48 hours of sending to warm intros. Cold outreach typically takes 5–7 days for first opens.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try DocSend Pulse free",
          prefix: "DocSend is built for funded teams with per-seat pricing. If you need page-level analytics and $29/mo flat pricing, ",
          suffix: ". Five free tracked shares, no credit card. Stop guessing — start tracking.",
        },
      },
    ],
    cta: {
      title: "Ready to track your pitch deck?",
      subtitle: "5 free tracked shares · then $29/mo for unlimited page-level analytics",
      button: "Share document free",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 DocSend 替代品完全指南",
      description:
        "DocSend $45–300/月？Dropbox 关了免费 Send & Track。对比 Peony、Papermark 与文档追踪脉冲。$29/月安全文档分享 + 逐页分析。",
    },
    h1: "2026 独立开发者 DocSend 替代品完全指南",
    updated: "2026 年 7 月更新 · 阅读约 12 分钟",
    intro: [
      "你做了 SaaS，需要向投资人发路演稿。DocSend 标准版要 $45/席位/月 — 逐页分析、NDA 门禁和水印锁在 $150/月 高级版后面。5 人团队用 DocSend 高级版一年超 $9,000。",
      "2025 年 3 月 Dropbox 停用免费 Send & Track，数百万创始人被迫转向付费 DocSend。同时 Peony、Papermark、SendNow 等独立替代品以固定价和逐页分析出现，起步 $0–$12/月。",
      "Hacker News 上创始人反复说：「我只需知道 VC 有没有看路演稿 — 不用为永远用不上的水印付 $150/月。」另一位写：「看清投资人在哪页退出。在正确时机跟进，拿下了种子轮。」",
      "本指南说明文档追踪对融资为何重要、逐页分析如何胜过简单打开计数、哪些 DocSend 替代品适合独立开发者预算，以及如何在 2 分钟内发出第一份追踪路演稿。",
    ],
    sections: [
      {
        h2: "路演稿为什么需要逐页分析",
        paragraphs: [
          "简单的「文档已打开」通知只告诉你有人点了链接。它不知道对方有没有读到第 3 页（增长图表），还是在第 2 页（问题陈述）就退出。逐页分析精确显示投资人在哪页停留 — 在哪页失去兴趣。",
          "对独立开发者融资来说，这些数据价值极高：若 80% 观众在定价页退出，你就知道下次见投资人前要重写。若某位 VC 在团队页停留 4 分钟，那就是你的跟进切入点。",
        ],
        list: [
          "仅打开计数：只知道有人点击 — 不知道读了什么",
          "每页停留时长：显示哪些幻灯片获关注、哪些被跳过",
          "每页流失率：在见投资人前找出薄弱页",
          "访客会话：地区、设备与每位潜在客户的总时长",
          "下载尝试：高意向信号 — 24 小时内跟进",
        ],
        after: [
          "独立开发者规模（每轮融资发 5–20 份路演稿）不需要企业级数据室。你需要：谁看了、读了哪些页、何时跟进。",
        ],
      },
      {
        h2: "2026 DocSend 替代品对比",
        tools: [
          {
            h3: "DocSend — $45–300/月",
            p: "有 VC 背景团队的行业标准。按席位计价迅速累积。高级功能（水印、NDA 门禁）需 $150+/月。无免费档 — 仅 14 天试用。",
          },
          {
            h3: "Peony — 免费档",
            p: "AI 驱动数据室，免费档含逐页分析。适合早期创始人。付费档面向需要电子签名与高级权限的团队。",
          },
          {
            h3: "Papermark — 开源",
            p: "可免费自托管或 SaaS 从 €29/月起。真正开源 VDR 含逐页分析。最适合需要数据主权的团队。",
          },
          {
            h3: "文档追踪脉冲 — $29/月 固定价",
            p: "为独立开发者打造：创建安全追踪链接，获取逐页分析、访客会话与浏览通知。免费体验 5 次，不按席位收费。",
            link: { href: "/share", text: "分享你的第一份路演稿", suffix: " — 免费 5 次追踪分享，无需信用卡。" },
          },
        ],
      },
      {
        h2: "向投资人发路演稿应追踪什么",
        paragraphs: [
          "选工具前先定义每次发送的「成功」标准：(1) 链接被打开，(2) 读过问题页，(3) 到达增长/财务页，(4) 下载或内部转发。",
          "页面完成率是北极星指标。78% 完成率表示投资人读了大部分幻灯片。低于 50% 表示叙事早期就失去他们 — 下一批发送前先修复。",
        ],
        ordered: [
          "上传路演稿并创建追踪链接",
          "先发给 3–5 个暖介绍（校准分析基线）",
          "48 小时后查看逐页流失",
          "重写流失率最高的那一页",
          "用更新后的路演稿重发并对比完成率",
        ],
      },
      {
        h2: "独立开发者真正需要的安全功能",
        paragraphs: [
          "企业团队需要 NDA 门禁、动态水印与审计日志。独立开发者发种子轮路演稿只需三件事：密码保护、链接过期、撤销访问。",
        ],
        list: [
          "密码保护链接：防止转发给非目标收件人",
          "过期日期：融资结束后自动禁用链接",
          "撤销访问：发错人时可立即作废链接",
          "浏览通知：潜在客户打开时邮件提醒",
          "禁止下载：让投资人在浏览器内阅读（可选）",
        ],
        after: [
          "DocSend 把水印和 NDA 门禁锁在 $150/月 后面。独立开发者发 10 份路演稿，密码 + 过期覆盖 95% 安全需求。",
        ],
      },
      {
        h2: "如何发出第一份追踪路演稿",
        paragraphs: [
          "从零到逐页分析的最快路径：",
        ],
        ordered: [
          "清晰命名路演稿（如「种子轮路演 v3 — 2026 Q2」）",
          "设置页数以便分析映射每页数据",
          "添加收件人邮箱以接收浏览通知（可选）",
          "复制追踪链接通过暖介绍邮件发送",
          "24 小时后查看分析面板确定跟进时机",
        ],
        after: [
          "大多数创始人在向暖介绍发送后 48 小时内看到首个访客会话。冷触达通常需 5–7 天才有首次打开。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用文档追踪脉冲",
          prefix: "DocSend 面向有 VC 背景、按席位收费的团队。若你需要逐页分析与 $29/月 一口价，可",
          suffix: "。免费 5 次追踪分享，无需信用卡。别再猜 — 开始追踪。",
        },
      },
    ],
    cta: {
      title: "准备好追踪你的路演稿了吗？",
      subtitle: "免费体验 5 次追踪分享 · 之后 $29/月 无限逐页分析",
      button: "免费分享文档",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
