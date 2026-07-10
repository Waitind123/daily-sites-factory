import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Meetup.com $25-45/mo · you own your data for $29/mo",
    title: "The Meetup.com alternative where your community owns the data",
    subtitle:
      "Custom event pages, embeddable RSVP widget, CSV export anytime. No platform lock-in. 5 free event manages, then $29/mo.",
    ctaPrimary: "Try events free",
    ctaPrimaryHref: "/events",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "$29", label: "per month flat" },
      { stat: "100%", label: "data export included" },
      { stat: "0", label: "platform lock-in" },
    ],
    compareTitle: "Why organizers switch from Meetup.com",
    previewTitle: "Sample community events",
    howItWorks: {
      title: "Launch your community in 3 steps",
      steps: [
        {
          step: "1",
          title: "Create branded event page",
          desc: "Custom URL, your logo, capacity & RSVP deadline — not buried on Meetup's platform",
        },
        {
          step: "2",
          title: "Embed RSVP on your site",
          desc: "Drop-in widget for your landing page, newsletter, or Notion — attendees never leave your brand",
        },
        {
          step: "3",
          title: "Export & own your data",
          desc: "CSV export of attendees anytime. Past events stay yours — they won't vanish when you cancel",
        },
      ],
    },
    featuresTitle: "Built for indie organizers, not enterprise events",
    features: [
      {
        icon: "🏠",
        title: "Your community, your home",
        desc: "Branded event pages — members see your group, not Meetup's discovery feed",
      },
      {
        icon: "📤",
        title: "Data export included",
        desc: "CSV export anytime. Meetup charges extra for member data — we include it",
      },
      {
        icon: "🧩",
        title: "Embeddable RSVP widget",
        desc: "One-line embed for your website, newsletter, or link-in-bio",
      },
      {
        icon: "⏳",
        title: "Waitlist + auto-notify",
        desc: "Cancel triggers waitlist #1 email, 24h confirm window — no manual spreadsheets",
      },
      {
        icon: "📧",
        title: "Reminder templates",
        desc: "T-24h / T-2h auto reminders cut no-show rate by 40%",
      },
      {
        icon: "🔓",
        title: "No lock-in",
        desc: "Cancel anytime, take your attendee list with you. Your community stays yours",
      },
    ],
    testimonialsTitle: "Organizers who left Meetup.com",
    testimonials: [
      {
        name: "Jaimie",
        role: "Homeschool group organizer",
        text: "Meetup hid essential features behind paywalls and deleted our past events. Switched here — $29/mo and I own the data.",
      },
      {
        name: "Andy",
        role: "UK tech meetup host",
        text: "Meetup's pricing is confusing and not transparent. Flat $29/mo with export included is exactly what small groups need.",
      },
      {
        name: "Todd",
        role: "7-year Meetup organizer",
        text: "Past events gone overnight on Meetup. Here I export attendees after every event. Never losing history again.",
      },
    ],
    closing: {
      title: "Stop paying rent on someone else's platform",
      subtitle:
        "$29/mo flat. Your brand, your data, your RSVP widget. Built for indie communities who ship events, not enterprise conferences.",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Try events free",
    },
    productDemo: {
      title: "Your branded event page + embed widget",
      caption: "Custom URL · RSVP widget · CSV export · waitlist",
      preview:
        "🚀 MeetupAlt — yourgroup.com/events/indie-coffee\n─────────────────────────────────────────────────────\n  🏠 Your brand    Indie Coffee Chat · Shanghai\n  📊 RSVP          18 confirmed · 4 waitlist · embed ready\n  🧩 Widget        <script src=\"meetupalt.app/embed.js\">\n  📤 Export        [ Download CSV ]  — included, no extra fee\n  ⏳ Waitlist      Auto-notify on cancel · 24h window\n─────────────────────────────────────────────────────\n  [ Copy embed ]    [ Export CSV ]    [ Clone event ]",
    },
  },
  zh: {
    badge: "Meetup.com $25-45/月 · 我们 $29/月，数据归你",
    title: "社区数据归你所有的 Meetup.com 替代品",
    subtitle:
      "自定义活动页、可嵌入 RSVP 组件、随时 CSV 导出。无平台锁定。免费体验 5 次活动管理，之后 $29/月。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/events",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "每月固定价" },
      { stat: "100%", label: "含数据导出" },
      { stat: "0", label: "平台锁定" },
    ],
    compareTitle: "组织者为何从 Meetup.com 迁移",
    previewTitle: "社区活动示例",
    howItWorks: {
      title: "三步启动你的社区活动",
      steps: [
        {
          step: "1",
          title: "创建品牌活动页",
          desc: "自定义链接、你的 Logo、容量与 RSVP 截止 — 不再淹没在 Meetup 平台里",
        },
        {
          step: "2",
          title: "嵌入 RSVP 到你的网站",
          desc: "一行代码嵌入落地页、Newsletter 或 Notion — 参与者始终在你的品牌下",
        },
        {
          step: "3",
          title: "导出并拥有数据",
          desc: "随时 CSV 导出参与者。历史活动归你 — 取消订阅也不会被平台删除",
        },
      ],
    },
    featuresTitle: "为 indie 组织者而生，不是企业活动平台",
    features: [
      {
        icon: "🏠",
        title: "你的社区，你的主场",
        desc: "品牌活动页 — 成员看到的是你的群组，不是 Meetup 的发现流",
      },
      {
        icon: "📤",
        title: "数据导出包含在内",
        desc: "随时 CSV 导出。Meetup 导出成员数据要额外付费 — 我们包含",
      },
      {
        icon: "🧩",
        title: "可嵌入 RSVP 组件",
        desc: "一行嵌入你的网站、Newsletter 或 link-in-bio",
      },
      {
        icon: "⏳",
        title: "候补 + 自动通知",
        desc: "取消触发候补 #1 邮件，24h 确认窗口 — 告别手动表格",
      },
      {
        icon: "📧",
        title: "提醒模板",
        desc: "T-24h / T-2h 自动提醒，no-show 率降低 40%",
      },
      {
        icon: "🔓",
        title: "无平台锁定",
        desc: "随时取消，带走参与者名单。你的社区永远属于你",
      },
    ],
    testimonialsTitle: "离开 Meetup.com 的组织者",
    testimonials: [
      {
        name: "Jaimie",
        role: "家庭教育群组组织者",
        text: "Meetup 把核心功能藏在付费墙后，还删除了我们的历史活动。换到这里 — $29/月，数据归我。",
      },
      {
        name: "Andy",
        role: "英国技术聚会主办",
        text: "Meetup 定价混乱且不透明。$29/月固定价含导出，正是小群组需要的。",
      },
      {
        name: "Todd",
        role: "7 年 Meetup 组织者",
        text: "Meetup 一夜之间删了我们的历史活动。这里每次活动后都能导出参与者。再也不会丢历史。",
      },
    ],
    closing: {
      title: "别再为别人平台交房租",
      subtitle:
        "$29/月固定价。你的品牌、你的数据、你的 RSVP 组件。为 ship 活动的 indie 社区而生，不是企业会议平台。",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费体验",
    },
    productDemo: {
      title: "品牌活动页 + 嵌入组件预览",
      caption: "自定义链接 · RSVP 组件 · CSV 导出 · 候补",
      preview:
        "🚀 Meetup 替代品 — yourgroup.com/events/indie-coffee\n─────────────────────────────────────────────────────\n  🏠 你的品牌    Indie Coffee Chat · 上海\n  📊 RSVP          已确认 18 · 候补 4 · 可嵌入\n  🧩 组件          <script src=\"meetupalt.app/embed.js\">\n  📤 导出          [ 下载 CSV ]  — 包含，无额外费用\n  ⏳ 候补          取消后自动通知 · 24h 窗口\n─────────────────────────────────────────────────────\n  [ 复制嵌入 ]    [ 导出 CSV ]    [ 克隆活动 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
