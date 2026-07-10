import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "Indie meetup organizer guide — RSVP from 0 to 50 attendees",
      description:
        "How to run indie hacker meetups in Shanghai, Beijing, Shenzhen: venue picks, RSVP management, waitlist queues, no-show tactics. 10x cheaper than Meetup.com.",
    },
    h1: "Indie meetup organizer guide: RSVP management from 0 to 50",
    updated: "Updated June 2026 · 15 min read",
    intro: [
      "Offline meetups are the most underrated growth channel for indie devs. Many Product Hunt hits started with local Coffee Chats or Build in Public nights. But organizers face real pain: Meetup.com costs $170/yr, Google Forms can't handle waitlists, WeChat RSVP is chaos.",
      "This guide helps you run your first indie meetup in major cities, keep costs under $70/mo, and manage RSVP + waitlist with lightweight tools.",
    ],
    sections: [
      {
        h2: "Why indie organizers need their own RSVP tool",
        list: [
          "Meetup.com too expensive — Pro is $170+/yr for unpaid community organizers",
          "Google Forms too clumsy — doesn't auto-close when full, manual waitlist spreadsheets",
          "WeChat RSVP chaos — \"+1\" spam, no attendance tracking",
          "High no-show rate — free RSVP with no constraints = 30-40% no-shows",
        ],
        after: [
          "What organizers actually need: one platform for RSVP + waitlist + reminders — not Meetup + Zoom + WhatsApp + Telegram.",
        ],
      },
      {
        h2: "Step 1: Pick venue & format",
        list: [
          "Coffee chat (10-20 people) — WeWork lounge, café corner, 2-3 hours",
          "Build in Public (20-30) — co-working event space, evening 2.5h",
          "Small-circle lunch (8-12) — restaurant private room, vet attendees",
        ],
        after: [
          "Start with 15-person cap. Better full + waitlist than half-empty room.",
        ],
      },
      {
        h2: "Step 2: RSVP + waitlist setup",
        list: [
          "Set hard capacity — auto-close RSVP when full",
          "Open waitlist immediately — auto-notify #1 on cancel",
          "Add T-24h + T-2h reminder templates",
          "Track no-show rate per attendee for future priority",
        ],
        after: [
          "Meetup Host handles all four for $29/mo vs Meetup Pro $170/yr.",
        ],
        link: { href: "/join", text: "Try Meetup Host free", suffix: " — 5 event manages included." },
      },
      {
        h2: "Step 3: Day-of check-in",
        list: [
          "Open check-in view 30 min before start",
          "Mark attended / no-show in one tap",
          "Auto-notify waitlist when no-show confirmed",
          "Export attendee list for follow-up email",
        ],
      },
      {
        h2: "No-show reduction tactics",
        ordered: [
          "T-24h reminder with cancel link",
          "T-2h final reminder",
          "Small deposit for all-day events (refund on arrival)",
          "2-strike rule: 2 no-shows → manual RSVP review",
          "Prioritize reliable attendees in waitlist",
        ],
      },
    ],
    cta: {
      title: "Ready to run your first indie meetup?",
      body: "5 free event manages. RSVP + waitlist + check-in + reminders for $29/mo.",
      primary: "Subscribe · $29/mo",
      secondary: "Browse sample events",
    },
  },
  zh: {
    meta: {
      title: "中国 indie 线下聚会组织指南 — 从 0 到 50 人 RSVP 管理",
      description:
        "手把手教你在上海、北京、深圳组织 indie hacker 线下聚会：场地选择、RSVP 管理、候补队列、no-show 应对。比 Meetup.com 便宜 10 倍的轻量方案。",
    },
    h1: "中国 indie 线下聚会组织指南：从 0 到 50 人 RSVP 管理",
    updated: "更新于 2026 年 6 月 · 阅读约 15 分钟",
    intro: [
      "独立开发者社区最被低估的增长渠道是线下聚会。Product Hunt 上爆的产品，很多最初用户来自创始人在本地组织的 Coffee Chat 或 Build in Public 夜谈。但组织者的真实痛点是：Meetup.com 一年 $170、Google Forms 管不了候补、微信群 RSVP 一团糟。",
      "这篇指南帮你在上海、北京、深圳等城市组织第一场 indie 线下聚会，控制成本在 ¥500/月以内，同时用轻量工具管理 RSVP 和候补队列。",
    ],
    sections: [
      {
        h2: "一、为什么 indie 组织者需要自己的 RSVP 工具？",
        list: [
          "Meetup.com 太贵 — Pro 订阅一年 $170+，对无收入的社区组织者是负担",
          "Google Forms 太笨 — 满员后不会自动关闭，候补要手动管表格",
          "微信群 RSVP 混乱 — 「+1」「我也来」刷屏，无法追踪出席率",
          "no-show 率高 — 免费 RSVP 无约束，30-40% 的人不来",
        ],
        after: [
          "组织者真正需要的是「一个平台管 RSVP + 候补 + 提醒」，而不是 Meetup + Zoom + WhatsApp + Telegram 六件套。",
        ],
      },
      {
        h2: "二、选场地与活动形式",
        list: [
          "Coffee Chat（10-20 人）— WeWork 休息区、咖啡馆角落，2-3 小时",
          "Build in Public（20-30 人）— 联合办公活动空间，晚间 2.5 小时",
          "小圈子午餐（8-12 人）— 餐厅包间，审核参与者",
        ],
        after: ["建议从 15 人容量起步。满员 + 候补比半空场地更有氛围。"],
      },
      {
        h2: "三、RSVP + 候补设置",
        list: [
          "设置硬性容量 — 满员自动关闭 RSVP",
          "立即开放候补 — 取消后自动通知 #1",
          "配置 T-24h + T-2h 提醒模板",
          "追踪每位参与者的 no-show 率，下次优先邀请可靠的人",
        ],
        after: ["Meetup Host 四件事全包，$29/月 vs Meetup Pro $170/年。"],
        link: { href: "/join", text: "免费体验 Meetup Host", suffix: " — 含 5 次活动管理。" },
      },
      {
        h2: "四、活动当天签到",
        list: [
          "活动前 30 分钟打开签到视图",
          "一键标记出席 / 缺席",
          "确认 no-show 后自动通知候补",
          "导出出席名单用于跟进邮件",
        ],
      },
      {
        h2: "五、降低 no-show 的实战技巧",
        ordered: [
          "T-24h 提醒 + 取消链接",
          "T-2h 最终提醒",
          "全天活动收小额押金（到场退还）",
          "两振出局：连续 2 次 no-show → 下次 RSVP 需审核",
          "候补按出席率排序优先",
        ],
      },
    ],
    cta: {
      title: "准备好组织第一场 indie 聚会了吗？",
      body: "免费体验 5 次活动管理。RSVP + 候补 + 签到 + 提醒，$29/月。",
      primary: "立即订阅 $29/月",
      secondary: "浏览示例活动",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
