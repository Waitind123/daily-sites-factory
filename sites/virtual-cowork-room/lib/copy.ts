import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Flow Club $40/mo? · $29/mo flat",
    title: "Virtual cowork room for remote workers",
    subtitle:
      "Quiet virtual coworking with pomodoro, ambient sounds & body doubling. 5 free sessions, then $29/mo.",
    ctaPrimary: "Start coworking",
    ctaPrimaryHref: "/room",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free sessions · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Flow Club $40+" },
      { stat: "217", label: "active sessions right now" },
      { stat: "0", label: "video calls — zero social pressure" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Pick a mode",
          desc: "Deep focus 90 min, pomodoro 25 min, creative 45 min, or morning sync",
        },
        {
          step: "2",
          title: "Set ambient sound",
          desc: "Café, rain, library, or forest — build your focus atmosphere",
        },
        {
          step: "3",
          title: "Focus together",
          desc: "See remote workers online worldwide — body doubling boosts output",
        },
      ],
    },
    liveStatsTitle: "Live cowork stats",
    featuresTitle: "Core features",
    features: [
      {
        icon: "👥",
        title: "Virtual companions",
        desc: "See others focusing — beat remote-work loneliness without video calls",
      },
      {
        icon: "🍅",
        title: "Pomodoro timer",
        desc: "Built-in 25/45/90 min timers with automatic break reminders",
      },
      {
        icon: "🎧",
        title: "Ambient sounds",
        desc: "Café, rain, library, forest — four sounds to stay in flow",
      },
      {
        icon: "📊",
        title: "Focus stats",
        desc: "Daily and weekly focus time tracking to see your progress",
      },
      {
        icon: "🔕",
        title: "Zero distraction",
        desc: "No chat, no video, no social pressure — just quiet company",
      },
      {
        icon: "🌍",
        title: "Global cowork",
        desc: "Work alongside remote workers worldwide — feel the collective energy",
      },
    ],
    testimonialsTitle: "What remote workers say",
    testimonials: [
      {
        name: "Alex C.",
        role: "Indie developer",
        text: "Coding alone at home felt empty. Seeing 80+ people in focus mode keeps me going.",
      },
      {
        name: "Lisa M.",
        role: "Freelance writer",
        text: "Focusmate needs scheduling and video. This is one click — rain + pomodoro doubled my output.",
      },
      {
        name: "Jay W.",
        role: "Remote frontend",
        text: "$29 is less than a coffee, but buys me 2 extra focused hours daily. Body doubling works.",
      },
    ],
    closing: {
      title: "Focusmate needs video. Cafés are loud.",
      subtitle: "Just $29/mo. Open → pick mode → focus. No camera, no pressure.",
      ctaPrimary: "Start coworking",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Cowork room preview",
      caption: "Pick mode · set ambient sound · start focusing in one tap",
      preview:
        "🎯 Deep focus · 90 min          47 online\n🍅 Pomodoro · 25 min            83 online\n💡 Creative · 45 min             31 online\n\n☕ Café ambient · 🔇 Silent\n⏱  25:00 remaining · 6 coworkers nearby\n\n→ Start session · body doubling on",
    },
  },
  zh: {
    badge: "Flow Club $40/月？· $29/月一口价",
    title: "远程工作者的虚拟共工室",
    subtitle:
      "安静虚拟共工环境：番茄钟、白噪音、body doubling。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "开始共工",
    ctaPrimaryHref: "/room",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Flow Club 要 $40+" },
      { stat: "217", label: "当前正在共工" },
      { stat: "0", label: "次视频通话 — 零社交压力" },
    ],
    howItWorks: {
      title: "三步开始共工",
      steps: [
        {
          step: "1",
          title: "选模式",
          desc: "深度专注 90 分钟、番茄钟 25 分钟、创意 45 分钟或晨间共工",
        },
        {
          step: "2",
          title: "开环境音",
          desc: "咖啡馆、雨声、图书馆、森林，营造专注氛围",
        },
        {
          step: "3",
          title: "一起专注",
          desc: "看到全球远程工作者在线，body doubling 提升效率",
        },
      ],
    },
    liveStatsTitle: "实时共工数据",
    featuresTitle: "会员功能",
    features: [
      {
        icon: "👥",
        title: "虚拟同伴",
        desc: "看到其他远程工作者正在专注，告别独自办公的孤独感",
      },
      {
        icon: "🍅",
        title: "番茄钟",
        desc: "内置 25/45/90 分钟计时器，专注结束自动提醒休息",
      },
      {
        icon: "🎧",
        title: "白噪音",
        desc: "咖啡馆、雨声、图书馆、森林四种环境音，营造专注氛围",
      },
      {
        icon: "📊",
        title: "专注统计",
        desc: "每日/每周专注时长追踪，看到自己的进步",
      },
      {
        icon: "🔕",
        title: "零打扰",
        desc: "没有聊天、没有视频、没有社交压力，只有安静的陪伴",
      },
      {
        icon: "🌍",
        title: "全球共工",
        desc: "和世界各地的远程工作者同时在线，感受集体能量",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "小陈",
        role: "独立开发者",
        text: "在家写代码太孤独了。打开共工室看到 80 多人在专注，莫名就有动力继续写。",
      },
      {
        name: "Lisa",
        role: "自由撰稿人",
        text: "Focusmate 要预约还要视频，这个只要点一下就能开始。雨声 + 番茄钟，我的写作效率翻倍。",
      },
      {
        name: "阿杰",
        role: "远程前端",
        text: "$29 比一杯咖啡便宜，但每天帮我多专注 2 小时。body doubling 真的有用。",
      },
    ],
    closing: {
      title: "Focusmate 要预约视频，咖啡馆太吵",
      subtitle: "只要 $29/月。打开 → 选模式 → 专注。没有摄像头，没有社交压力。",
      ctaPrimary: "开始共工",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "共工室预览",
      caption: "选模式 · 设环境音 · 一键开始专注",
      preview:
        "🎯 深度专注 · 90 分钟          47 人在线\n🍅 番茄钟 · 25 分钟            83 人在线\n💡 创意发散 · 45 分钟           31 人在线\n\n☕ 咖啡馆环境音 · 🔇 静音\n⏱  25:00 剩余 · 6 位同伴在线\n\n→ 开始会话 · body doubling 已开启",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Virtual Cowork",
    subtitle: "One price, all features. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Flow Club $40+/mo · cancel anytime",
    perks: [
      "Unlimited cowork sessions",
      "4 modes (deep / pomodoro / creative / morning)",
      "Ambient sounds (café / rain / library / forest)",
      "Pomodoro + automatic break reminders",
      "Virtual companions online",
      "Daily & weekly focus stats",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free sessions, then subscribe?",
    whyItems: [
      "Live cowork rooms need servers to stay online",
      "Paying users = a quality community, no bot spam",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入远程共工室",
    subtitle: "一个价格，全部功能。没有免费档，没有隐藏费用。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Flow Club $40+/月 · 随时可取消",
    perks: [
      "无限共工会话",
      "4 种共工模式（深度/番茄/创意/晨间）",
      "白噪音环境音（咖啡馆/雨声/图书馆/森林）",
      "番茄钟 + 自动休息提醒",
      "虚拟同伴在线陪伴",
      "每日/每周专注统计",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "实时共工室需要服务器维持在线状态",
      "付费用户 = 高质量社区，没有 bot 刷量",
      "一人维护，简单定价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
