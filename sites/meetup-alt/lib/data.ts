export type Attendee = {
  id: string;
  name: string;
  email: string;
  status: "confirmed" | "waitlist" | "checked-in" | "no-show";
  rsvpAt: string;
  notes?: string;
};

export type MeetupEvent = {
  id: string;
  title: string;
  city: string;
  venue: string;
  date: string;
  time: string;
  capacity: number;
  category: string;
  description: string;
  organizer: string;
  preview: string;
  management: {
    summary: string;
    confirmedCount: number;
    waitlistCount: number;
    noShowRate: string;
    attendees: Attendee[];
    waitlistTips: string[];
    reminderTemplate: string;
    checkInNotes: string[];
    capacityAdvice: string;
  };
};

export const meetupEvents: MeetupEvent[] = [
  {
    id: "sh-indie-coffee",
    title: "上海 Indie Coffee Chat",
    city: "上海",
    venue: "WeWork 静安寺",
    date: "2026-07-05",
    time: "14:00-17:00",
    capacity: 20,
    category: "社交",
    description: "每月第一个周六，独立开发者线下交流。聊聊 side project、收款方案、ship 进度。",
    organizer: "小林",
    preview: "已确认 18/20 人，候补 4 人。最近一期 no-show 率 15%，建议发 T-24h 提醒。",
    management: {
      summary:
        "这是上海最活跃的 indie 线下聚会之一。场地限 20 人，通常 48 小时内满员。候补队列需要自动通知机制，否则空位浪费。",
      confirmedCount: 18,
      waitlistCount: 4,
      noShowRate: "15%",
      attendees: [
        { id: "a1", name: "Amy", email: "amy@example.com", status: "confirmed", rsvpAt: "2026-06-20", notes: "做 SaaS 收款工具" },
        { id: "a2", name: "老周", email: "zhou@example.com", status: "confirmed", rsvpAt: "2026-06-21" },
        { id: "a3", name: "Kevin", email: "kevin@example.com", status: "confirmed", rsvpAt: "2026-06-22", notes: "远程全栈" },
        { id: "a4", name: "小雨", email: "yu@example.com", status: "waitlist", rsvpAt: "2026-06-23", notes: "候补 #1" },
        { id: "a5", name: "Mark", email: "mark@example.com", status: "waitlist", rsvpAt: "2026-06-23", notes: "候补 #2" },
        { id: "a6", name: "Lisa", email: "lisa@example.com", status: "waitlist", rsvpAt: "2026-06-24", notes: "候补 #3" },
        { id: "a7", name: "Tom", email: "tom@example.com", status: "waitlist", rsvpAt: "2026-06-24", notes: "候补 #4" },
      ],
      waitlistTips: [
        "有人取消后自动邮件通知候补 #1，24h 内未确认则顺延",
        "记录历史出席率，优先邀请可靠参与者",
        "T-24h 和 T-2h 各发一次提醒，no-show 率可降 40%",
      ],
      reminderTemplate:
        "Hi {name}，提醒明天 14:00 上海 Indie Coffee Chat @ WeWork 静安寺。如无法参加请尽快取消，让候补朋友有机会。回复 YES 确认出席。",
      checkInNotes: [
        "活动当天打开签到视图，一键标记出席/缺席",
        "连续 2 次 no-show 的用户下次 RSVP 进入审核",
        "签到后自动发感谢邮件 + 下次活动预告",
      ],
      capacityAdvice: "20 人场地建议开放 22 个 RSVP 名额（预留 10% no-show buffer）",
    },
  },
  {
    id: "bj-build-in-public",
    title: "北京 Build in Public 夜谈",
    city: "北京",
    venue: "中关村创业大街",
    date: "2026-07-12",
    time: "19:00-21:30",
    capacity: 30,
    category: "创业",
    description: "每周四晚，展示你这周 ship 了什么。5 分钟 demo + 互相反馈。",
    organizer: "大伟",
    preview: "已确认 24/30 人。上周 3 人 no-show，候补队列有 6 人未收到空位通知。",
    management: {
      summary:
        "Build in Public 聚会对准时开始要求高。no-show 直接影响 demo 顺序和场地安排。需要可靠的 RSVP 追踪和候补自动补位。",
      confirmedCount: 24,
      waitlistCount: 6,
      noShowRate: "12%",
      attendees: [
        { id: "b1", name: "Jason", email: "jason@example.com", status: "confirmed", rsvpAt: "2026-06-18", notes: "展示 AI 写作工具" },
        { id: "b2", name: "晓雯", email: "xw@example.com", status: "confirmed", rsvpAt: "2026-06-19" },
        { id: "b3", name: "Pete", email: "pete@example.com", status: "confirmed", rsvpAt: "2026-06-20", notes: "远程团队管理 SaaS" },
        { id: "b4", name: "阿杰", email: "jie@example.com", status: "waitlist", rsvpAt: "2026-06-21", notes: "候补 #1" },
        { id: "b5", name: "Sara", email: "sara@example.com", status: "waitlist", rsvpAt: "2026-06-22", notes: "候补 #2" },
      ],
      waitlistTips: [
        "demo 名额有限，候补转正后需确认 demo 意愿",
        "设置 RSVP 截止时间（活动前 6h），减少临时取消",
        "用出席率排序候补优先级",
      ],
      reminderTemplate:
        "Hi {name}，今晚 19:00 Build in Public @ 中关村创业大街。请带上 laptop 准备 5 分钟 demo。无法参加？点这里取消 → {cancel_link}",
      checkInNotes: [
        "签到后按到达顺序安排 demo 时段",
        "标记 no-show 并自动通知候补",
        "活动结束后一键导出出席名单",
      ],
      capacityAdvice: "30 人场地 + demo 环节，建议上限 28 确认 + 10 候补",
    },
  },
  {
    id: "sz-saas-founders",
    title: "深圳 SaaS Founders 午餐会",
    city: "深圳",
    venue: "南山科技园 Co-working",
    date: "2026-07-08",
    time: "12:00-14:00",
    capacity: 12,
    category: "商业",
    description: "小圈子午餐，讨论收款、获客、定价。仅限已上线产品的创始人。",
    organizer: "Chris",
    preview: "已确认 12/12 满员，候补 8 人。高质量小圈子，需要严格审核 RSVP。",
    management: {
      summary:
        "12 人小餐桌，每位参与者都需要审核。满员后候补压力大，必须自动化通知否则组织者要花 2 小时手动处理微信消息。",
      confirmedCount: 12,
      waitlistCount: 8,
      noShowRate: "8%",
      attendees: [
        { id: "c1", name: "David", email: "david@example.com", status: "confirmed", rsvpAt: "2026-06-15", notes: "B2B SaaS $3K MRR" },
        { id: "c2", name: "小芳", email: "fang@example.com", status: "confirmed", rsvpAt: "2026-06-16", notes: "教育 SaaS" },
        { id: "c3", name: "Alex", email: "alex@example.com", status: "waitlist", rsvpAt: "2026-06-17", notes: "候补 #1，AI 工具" },
        { id: "c4", name: "明明", email: "ming@example.com", status: "waitlist", rsvpAt: "2026-06-18", notes: "候补 #2" },
      ],
      waitlistTips: [
        "小圈子活动建议加审核问题：产品链接 + MRR 区间",
        "候补转正需 12h 内确认付款/押金（可选）",
        "满员后关闭 RSVP，避免超额",
      ],
      reminderTemplate:
        "Hi {name}，明天 12:00 深圳 SaaS Founders 午餐 @ 南山科技园。请准备 1 分钟自我介绍 + 当前最大挑战。地点导航 → {venue_link}",
      checkInNotes: [
        "签到时核对身份（防冒名 RSVP）",
        "记录每人讨论话题，下次精准匹配",
        "活动后 24h 内发跟进邮件",
      ],
      capacityAdvice: "12 人午餐桌，严格满员即止，候补不超过 15 人",
    },
  },
  {
    id: "hz-design-critique",
    title: "杭州设计 Critique 下午茶",
    city: "杭州",
    venue: "西溪印象城 WeWork",
    date: "2026-07-19",
    time: "15:00-18:00",
    capacity: 15,
    category: "设计",
    description: "设计师 + 开发者互评 UI/UX。带上你的 landing page 或 app 截图。",
    organizer: "Mia",
    preview: "已确认 9/15 人。开放 RSVP 中，预计 3 天内满员。",
    management: {
      summary:
        "设计 critique 活动需要参与者提前提交作品链接。RSVP 表单应包含作品 URL 字段，方便组织者提前分配点评顺序。",
      confirmedCount: 9,
      waitlistCount: 2,
      noShowRate: "10%",
      attendees: [
        { id: "d1", name: "Luna", email: "luna@example.com", status: "confirmed", rsvpAt: "2026-06-22", notes: "作品集: luna.design" },
        { id: "d2", name: "浩然", email: "hr@example.com", status: "confirmed", rsvpAt: "2026-06-23" },
        { id: "d3", name: "Emma", email: "emma@example.com", status: "waitlist", rsvpAt: "2026-06-24", notes: "候补 #1" },
      ],
      waitlistTips: [
        "RSVP 表单加「作品链接」必填项",
        "按提交顺序安排 critique 时段",
        "满员后自动关闭表单",
      ],
      reminderTemplate:
        "Hi {name}，周六 15:00 杭州设计 Critique @ 西溪印象城。请确保作品链接可访问。无法参加请取消 → {cancel_link}",
      checkInNotes: [
        "签到后投屏作品链接",
        "记录 critique 反馈摘要",
        "活动后分享合影和反馈文档",
      ],
      capacityAdvice: "15 人 critique，每人 10 分钟，预留 30 分钟自由交流",
    },
  },
  {
    id: "cd-remote-workers",
    title: "成都远程工作者共工",
    city: "成都",
    venue: "太古里附近咖啡馆",
    date: "2026-07-26",
    time: "10:00-18:00",
    capacity: 25,
    category: "共工",
    description: "全天安静共工 + 午餐一起。适合远程工作者逃离在家办公的孤独感。",
    organizer: "阿川",
    preview: "已确认 16/25 人。全天活动 no-show 率通常更高，建议收小额押金。",
    management: {
      summary:
        "全天共工活动参与者到达时间分散。需要灵活签到（到场即签），而非固定时间点名。押金机制可显著降低 no-show。",
      confirmedCount: 16,
      waitlistCount: 3,
      noShowRate: "20%",
      attendees: [
        { id: "e1", name: "小林", email: "lin@example.com", status: "confirmed", rsvpAt: "2026-06-20" },
        { id: "e2", name: "Vivian", email: "viv@example.com", status: "confirmed", rsvpAt: "2026-06-21", notes: "预计 10:30 到" },
        { id: "e3", name: "大刘", email: "liu@example.com", status: "waitlist", rsvpAt: "2026-06-22", notes: "候补 #1" },
      ],
      waitlistTips: [
        "全天活动建议收 ¥20 押金，到场退还",
        "允许「预计到达时间」字段，方便安排座位",
        "候补转正通知需说明全天时间承诺",
      ],
      reminderTemplate:
        "Hi {name}，明天 10:00 成都远程共工 @ 太古里咖啡馆。全天安静工作，12:30 一起午餐。押金 ¥20 到场退还。",
      checkInNotes: [
        "到场即签到，记录实际到达时间",
        "未到场不退押金，转给组织者补贴场地",
        "下班前拍合影发群",
      ],
      capacityAdvice: "25 人咖啡馆共工，建议收押金 + 开放 30 RSVP（预期 20% no-show）",
    },
  },
];

export const features = [
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
];

export const testimonials = [
  {
    name: "小林",
    role: "上海 Indie 组织者",
    text: "Meetup.com 一年 $170，这个 $9.9/月搞定 RSVP + 候补。省了每周 2 小时手动管表格。",
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
];

import type { Locale } from "./i18n-shared";

const meetupEventsEn: MeetupEvent[] = [
  {
    id: "sh-indie-coffee",
    title: "Shanghai Indie Coffee Chat",
    city: "Shanghai",
    venue: "WeWork Jing'an",
    date: "2026-07-05",
    time: "14:00-17:00",
    capacity: 20,
    category: "Social",
    description:
      "First Saturday monthly — indie devs meet offline. Side projects, payments, ship progress.",
    organizer: "Ken",
    preview: "18/20 confirmed, 4 waitlist. Recent no-show 15% — send T-24h reminder.",
    management: {
      summary:
        "Shanghai's most active indie meetup. Venue caps at 20, usually full in 48h. Waitlist needs auto-notify or seats go wasted.",
      confirmedCount: 18,
      waitlistCount: 4,
      noShowRate: "15%",
      attendees: [
        { id: "a1", name: "Amy", email: "amy@example.com", status: "confirmed", rsvpAt: "2026-06-20", notes: "SaaS payments tool" },
        { id: "a2", name: "Zhou", email: "zhou@example.com", status: "confirmed", rsvpAt: "2026-06-21" },
        { id: "a3", name: "Kevin", email: "kevin@example.com", status: "confirmed", rsvpAt: "2026-06-22", notes: "Remote full-stack" },
        { id: "a4", name: "Yu", email: "yu@example.com", status: "waitlist", rsvpAt: "2026-06-23", notes: "Waitlist #1" },
        { id: "a5", name: "Mark", email: "mark@example.com", status: "waitlist", rsvpAt: "2026-06-23", notes: "Waitlist #2" },
      ],
      waitlistTips: [
        "Auto-email waitlist #1 on cancel, pass to next if no confirm in 24h",
        "Track attendance history, prioritize reliable attendees",
        "T-24h and T-2h reminders cut no-show rate by 40%",
      ],
      reminderTemplate:
        "Hi {name}, reminder: tomorrow 14:00 Shanghai Indie Coffee Chat @ WeWork Jing'an. Cancel if you can't make it so waitlist friends get a chance. Reply YES to confirm.",
      checkInNotes: [
        "Open check-in view on event day, one-tap mark attended/absent",
        "2 consecutive no-shows → manual review for next RSVP",
        "Post check-in thank-you email + next event preview",
      ],
      capacityAdvice: "20-seat venue: open 22 RSVP slots (10% no-show buffer)",
    },
  },
  {
    id: "bj-build-in-public",
    title: "Beijing Build in Public Night",
    city: "Beijing",
    venue: "Zhongguancun Startup Alley",
    date: "2026-07-12",
    time: "19:00-21:30",
    capacity: 30,
    category: "Startup",
    description: "Thursday nights — show what you shipped this week. 5-min demo + feedback.",
    organizer: "David",
    preview: "24/30 confirmed. Last week 3 no-shows, 6 waitlist didn't get seat notifications.",
    management: {
      summary:
        "Build in Public needs punctual starts. No-shows affect demo order and venue. Reliable RSVP tracking and waitlist backfill required.",
      confirmedCount: 24,
      waitlistCount: 6,
      noShowRate: "12%",
      attendees: [
        { id: "b1", name: "Jason", email: "jason@example.com", status: "confirmed", rsvpAt: "2026-06-18", notes: "AI writing tool demo" },
        { id: "b2", name: "Xiaowen", email: "xw@example.com", status: "confirmed", rsvpAt: "2026-06-19" },
        { id: "b3", name: "Pete", email: "pete@example.com", status: "confirmed", rsvpAt: "2026-06-20", notes: "Remote team SaaS" },
        { id: "b4", name: "Jie", email: "jie@example.com", status: "waitlist", rsvpAt: "2026-06-21", notes: "Waitlist #1" },
      ],
      waitlistTips: [
        "Demo slots limited — confirm demo intent when waitlist converts",
        "Set RSVP deadline (6h before event) to reduce last-minute cancels",
        "Sort waitlist by attendance rate",
      ],
      reminderTemplate:
        "Hi {name}, tonight 19:00 Build in Public @ Zhongguancun. Bring laptop for 5-min demo. Can't make it? Cancel here → {cancel_link}",
      checkInNotes: [
        "Check-in sets demo order by arrival time",
        "Mark no-show and auto-notify waitlist",
        "One-click export attendee list after event",
      ],
      capacityAdvice: "30-seat venue + demos: cap at 28 confirmed + 10 waitlist",
    },
  },
  {
    id: "sz-saas-founders",
    title: "Shenzhen SaaS Founders Lunch",
    city: "Shenzhen",
    venue: "Nanshan Tech Park Co-working",
    date: "2026-07-08",
    time: "12:00-14:00",
    capacity: 12,
    category: "Business",
    description: "Small-circle lunch on payments, acquisition, pricing. Launched founders only.",
    organizer: "Chris",
    preview: "12/12 full, 8 waitlist. High-quality circle needs strict RSVP vetting.",
    management: {
      summary:
        "12-seat table, every attendee vetted. Waitlist pressure after full — must automate notifications or 2h of manual WeChat messages.",
      confirmedCount: 12,
      waitlistCount: 8,
      noShowRate: "8%",
      attendees: [
        { id: "c1", name: "David", email: "david@example.com", status: "confirmed", rsvpAt: "2026-06-15", notes: "B2B SaaS $3K MRR" },
        { id: "c2", name: "Fang", email: "fang@example.com", status: "confirmed", rsvpAt: "2026-06-16", notes: "EdTech SaaS" },
        { id: "c3", name: "Alex", email: "alex@example.com", status: "waitlist", rsvpAt: "2026-06-17", notes: "Waitlist #1, AI tool" },
      ],
      waitlistTips: [
        "Add vetting questions: product link + MRR range",
        "Waitlist convert needs 12h payment/deposit confirm (optional)",
        "Close RSVP when full to avoid overbooking",
      ],
      reminderTemplate:
        "Hi {name}, tomorrow 12:00 Shenzhen SaaS Founders Lunch @ Nanshan. Prepare 1-min intro + biggest challenge. Directions → {venue_link}",
      checkInNotes: [
        "Verify identity at check-in (prevent impersonation)",
        "Log discussion topics for better matching next time",
        "Follow-up email within 24h after event",
      ],
      capacityAdvice: "12-seat lunch: strict cap, waitlist max 15",
    },
  },
  {
    id: "hz-design-critique",
    title: "Hangzhou Design Critique Tea",
    city: "Hangzhou",
    venue: "Xixi Impression City WeWork",
    date: "2026-07-19",
    time: "15:00-18:00",
    capacity: 15,
    category: "Design",
    description: "Designers + devs critique UI/UX. Bring your landing page or app screenshots.",
    organizer: "Mia",
    preview: "9/15 confirmed. RSVP open, expected full in 3 days.",
    management: {
      summary:
        "Design critique needs portfolio links upfront. RSVP form should include work URL for organizer to schedule review order.",
      confirmedCount: 9,
      waitlistCount: 2,
      noShowRate: "10%",
      attendees: [
        { id: "d1", name: "Luna", email: "luna@example.com", status: "confirmed", rsvpAt: "2026-06-22", notes: "Portfolio: luna.design" },
        { id: "d2", name: "Haoran", email: "hr@example.com", status: "confirmed", rsvpAt: "2026-06-23" },
        { id: "d3", name: "Emma", email: "emma@example.com", status: "waitlist", rsvpAt: "2026-06-24", notes: "Waitlist #1" },
      ],
      waitlistTips: [
        "Add required「portfolio link」field to RSVP form",
        "Schedule critique slots by submission order",
        "Auto-close form when full",
      ],
      reminderTemplate:
        "Hi {name}, Saturday 15:00 Hangzhou Design Critique @ Xixi. Ensure portfolio link is accessible. Cancel if needed → {cancel_link}",
      checkInNotes: [
        "Screen-share portfolio links after check-in",
        "Record critique feedback summary",
        "Share group photo and feedback doc after event",
      ],
      capacityAdvice: "15-person critique, 10 min each, 30 min free networking",
    },
  },
  {
    id: "cd-remote-workers",
    title: "Chengdu Remote Workers Cowork",
    city: "Chengdu",
    venue: "Café near Taikoo Li",
    date: "2026-07-26",
    time: "10:00-18:00",
    capacity: 25,
    category: "Cowork",
    description: "All-day quiet cowork + lunch together. Escape WFH loneliness.",
    organizer: "Chuan",
    preview: "16/25 confirmed. All-day events have higher no-show — consider small deposit.",
    management: {
      summary:
        "All-day cowork has scattered arrival times. Flexible check-in (on arrival), not fixed roll call. Deposit significantly reduces no-show.",
      confirmedCount: 16,
      waitlistCount: 3,
      noShowRate: "20%",
      attendees: [
        { id: "e1", name: "Lin", email: "lin@example.com", status: "confirmed", rsvpAt: "2026-06-20" },
        { id: "e2", name: "Vivian", email: "viv@example.com", status: "confirmed", rsvpAt: "2026-06-21", notes: "ETA 10:30" },
        { id: "e3", name: "Liu", email: "liu@example.com", status: "waitlist", rsvpAt: "2026-06-22", notes: "Waitlist #1" },
      ],
      waitlistTips: [
        "All-day events: suggest ¥20 deposit, refund on arrival",
        "Allow「expected arrival time」field for seat planning",
        "Waitlist convert notice must state full-day commitment",
      ],
      reminderTemplate:
        "Hi {name}, tomorrow 10:00 Chengdu Remote Cowork @ Taikoo Li café. Quiet work all day, lunch at 12:30. ¥20 deposit refunded on arrival.",
      checkInNotes: [
        "Check in on arrival, log actual arrival time",
        "No-show forfeits deposit to organizer for venue subsidy",
        "Group photo before end of day",
      ],
      capacityAdvice: "25-seat café cowork: deposit + 30 RSVP slots (expect 20% no-show)",
    },
  },
];

function eventsForLocale(locale: Locale): MeetupEvent[] {
  return locale === "en" ? meetupEventsEn : meetupEvents;
}

export function getEventById(id: string, locale: Locale = "zh"): MeetupEvent | undefined {
  return eventsForLocale(locale).find((e) => e.id === id);
}

export function getPublicEvents(locale: Locale = "zh"): Omit<MeetupEvent, "management">[] {
  return eventsForLocale(locale).map(({ management: _m, ...rest }) => rest);
}
