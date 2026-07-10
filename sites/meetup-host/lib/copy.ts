import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Meetup.com $170/yr · we do RSVP + waitlist for $29/mo",
    title: "Lightweight meetup RSVP, waitlist & check-in for indie organizers",
    subtitle:
      "Auto capacity control, waitlist notifications, check-in view & reminder templates. 5 free event manages, then $29/mo.",
    ctaPrimary: "Try events free",
    ctaPrimaryHref: "/events",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "5", label: "sample events" },
      { stat: "6", label: "cities covered" },
      { stat: "20", label: "avg capacity" },
    ],
    compareTitle: "Platform comparison",
    previewTitle: "Upcoming events",
    howItWorks: {
      title: "Run your meetup in 3 steps",
      steps: [
        {
          step: "1",
          title: "Create event",
          desc: "Set capacity, venue, RSVP deadline — clone recurring meetups in one click",
        },
        {
          step: "2",
          title: "Manage RSVP",
          desc: "Auto-close when full, waitlist queue, T-24h/T-2h reminder templates",
        },
        {
          step: "3",
          title: "Check in & analyze",
          desc: "Day-of check-in view, no-show tracking, reliable attendee ranking",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📋",
        title: "Smart RSVP",
        desc: "Auto capacity control — no more manual Google Forms checks",
      },
      {
        icon: "⏳",
        title: "Waitlist queue",
        desc: "Cancel triggers auto-notify waitlist #1, 24h to confirm or pass",
      },
      {
        icon: "✅",
        title: "Check-in view",
        desc: "One-tap check-in on event day, track attendance & reliable members",
      },
      {
        icon: "📧",
        title: "Reminder templates",
        desc: "T-24h / T-2h auto reminders — cut no-show rate by 40%",
      },
      {
        icon: "📊",
        title: "Attendance analytics",
        desc: "Historical no-show rate, waitlist conversion, reliable attendee ranking",
      },
      {
        icon: "🔄",
        title: "Event clone",
        desc: "Copy recurring meetups — no rebuilding forms every month",
      },
    ],
    testimonialsTitle: "What organizers say",
    testimonials: [
      {
        name: "Ken",
        role: "Shanghai indie organizer",
        text: "Meetup.com is $170/yr. This is $29/mo for RSVP + waitlist. Saves 2+ hours/week on spreadsheets.",
      },
      {
        name: "David",
        role: "Beijing Build in Public",
        text: "Waitlist auto-notify is essential. I used to forget to notify waitlist when someone cancelled — 3 empty seats.",
      },
      {
        name: "Chris",
        role: "Shenzhen SaaS lunch",
        text: "12-person circle needs RSVP vetting. Attendance ranking makes it way more reliable now.",
      },
    ],
    closing: {
      title: "Meetup.com is expensive. Google Forms is clumsy.",
      subtitle:
        "$29/mo flat. RSVP + waitlist + check-in + reminders. Built for indie organizers who ship community, not enterprise events.",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Try events free",
    },
    productDemo: {
      title: "Live RSVP management preview",
      caption: "Capacity · waitlist · reminders · check-in",
      preview:
        "📍 Meetup Host — Shanghai Indie Coffee Chat\n─────────────────────────────────────────────────────\n  📊 Overview     18 confirmed · 4 waitlist · 15% no-show\n  👥 Attendees    Amy ✓  Kevin ✓  小雨 ⏳ waitlist #1\n  ⏳ Waitlist     Auto-notify on cancel · 24h confirm window\n  📧 Reminder     T-24h: \"Hi {name}, tomorrow 14:00 @ WeWork...\"\n─────────────────────────────────────────────────────\n  [ Check in ]    [ Notify waitlist ]    [ Clone event ]",
    },
  },
  zh: {
    badge: "Meetup.com 一年 $170 · 我们 $29/月搞定 RSVP + 候补",
    title: "轻量线下聚会 RSVP、候补与签到管理",
    subtitle:
      "自动容量控制、候补通知、签到视图与提醒模板。免费体验 5 次活动管理，之后 $29/月。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/events",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "5", label: "示例活动" },
      { stat: "6", label: "覆盖城市" },
      { stat: "20", label: "平均容量" },
    ],
    compareTitle: "平台对比",
    previewTitle: "近期活动示例",
    howItWorks: {
      title: "三步搞定线下聚会",
      steps: [
        {
          step: "1",
          title: "创建活动",
          desc: "设置容量、场地、RSVP 截止时间 — 周期性聚会一键克隆",
        },
        {
          step: "2",
          title: "管理 RSVP",
          desc: "满员自动关闭、候补队列、T-24h/T-2h 提醒模板",
        },
        {
          step: "3",
          title: "签到与分析",
          desc: "活动当天签到视图、no-show 追踪、可靠参与者排行",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📋",
        title: "智能 RSVP",
        desc: "自动容量控制，满员即关，告别 Google Forms 手动检查",
      },
      {
        icon: "⏳",
        title: "候补队列",
        desc: "取消自动通知候补，24h 未确认顺延下一位",
      },
      {
        icon: "✅",
        title: "签到视图",
        desc: "活动当天一键签到，追踪出席率，识别可靠参与者",
      },
      {
        icon: "📧",
        title: "提醒模板",
        desc: "T-24h / T-2h 自动提醒，no-show 率降低 40%",
      },
      {
        icon: "📊",
        title: "出席分析",
        desc: "历史 no-show 率、候补转化率、可靠参与者排行",
      },
      {
        icon: "🔄",
        title: "活动克隆",
        desc: "周期性聚会一键复制，不用每次重新建表单",
      },
    ],
    testimonialsTitle: "组织者怎么说",
    testimonials: [
      {
        name: "小林",
        role: "上海 Indie 组织者",
        text: "Meetup.com 一年 $170，这个 $29/月搞定 RSVP + 候补。省了每周 2 小时手动管表格。",
      },
      {
        name: "大伟",
        role: "北京 Build in Public",
        text: "候补自动通知是刚需。以前有人取消我忘了通知候补，空着 3 个位子。",
      },
      {
        name: "Chris",
        role: "深圳 SaaS 午餐会",
        text: "12 人小圈子审核 RSVP 很头疼，现在有出席率排序，靠谱多了。",
      },
    ],
    closing: {
      title: "Meetup.com 太贵，Google Forms 太笨",
      subtitle:
        "我们只要 $29/月。RSVP + 候补 + 签到 + 提醒。为 indie 组织者而生，不是企业活动平台。",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费体验",
    },
    productDemo: {
      title: "RSVP 管理面板实时预览",
      caption: "容量 · 候补 · 提醒 · 签到",
      preview:
        "📍 线下 Meetup 组织 — 上海 Indie Coffee Chat\n─────────────────────────────────────────────────────\n  📊 概览     已确认 18 · 候补 4 · no-show 15%\n  👥 参与者   Amy ✓  Kevin ✓  小雨 ⏳ 候补 #1\n  ⏳ 候补     取消后自动通知 · 24h 确认窗口\n  📧 提醒     T-24h：「Hi {name}，明天 14:00 @ WeWork...」\n─────────────────────────────────────────────────────\n  [ 签到 ]    [ 通知候补 ]    [ 克隆活动 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
