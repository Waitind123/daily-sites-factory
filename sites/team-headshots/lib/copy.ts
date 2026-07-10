import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "PhotoAI $99/team? · $29/mo for 10 people",
    title: "Consistent LinkedIn headshots for your whole team",
    subtitle:
      "Upload team selfies, pick one corporate style, batch-generate professional portraits. 5 free generations, then $29/mo unlimited.",
    ctaPrimary: "Try team studio free",
    ctaPrimaryHref: "/team",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs HeadshotPro $59/person" },
      { stat: "10 seats", label: "included per subscription" },
      { stat: "1 style", label: "unified look across your team page" },
    ],
    stylesTitle: "One style, whole team",
    stylesSubtitle: "Corporate, casual, creative, or academic — same look for everyone",
    howItWorks: {
      title: "How it works",
      steps: [
        { step: "1", title: "Add team members", desc: "Name + selfie for each person (up to 10)" },
        { step: "2", title: "Pick unified style", desc: "One corporate look for LinkedIn & About page" },
        { step: "3", title: "Batch download", desc: "HD PNG per member, ready for team directory" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "👥", title: "Batch generation", desc: "Upload 10 selfies, generate all in one click" },
      { icon: "🎯", title: "Style consistency", desc: "Same lighting, background, and tone for every headshot" },
      { icon: "📦", title: "Team export", desc: "Download individual PNGs or share a team gallery link" },
      { icon: "🔒", title: "Privacy first", desc: "Photos auto-delete in 24h, never used for training" },
    ],
    testimonialsTitle: "What team leads say",
    testimonials: [
      {
        name: "Rachel T.",
        role: "Startup COO",
        text: "Onboarded 8 hires with matching LinkedIn photos in one afternoon. Saved $400 vs a photographer.",
      },
      {
        name: "Marcus W.",
        role: "Agency founder",
        text: "Our About page finally looks like a real company — not a collage of vacation selfies.",
      },
      {
        name: "Jenny L.",
        role: "HR at 12-person SaaS",
        text: "New hires used to delay updating LinkedIn for weeks. Now it's day-one onboarding.",
      },
    ],
    closing: {
      title: "HeadshotPro charges $59/person — we're $29/mo flat",
      subtitle: "Up to 10 team members, unlimited regenerations, unified style. We charge day one because GPU isn't free.",
      ctaPrimary: "Try team studio free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Team roster → unified headshots",
      caption: "Add members · pick style · batch generate consistent portraits",
      preview:
        "┌─ TEAM ROSTER ────────────────────────────────────────┐\n│  👤 Alex (CEO)      📷 uploaded   →  👔 corporate   │\n│  👤 Sarah (CTO)     📷 uploaded   →  👔 corporate   │\n│  👤 James (Design)  📷 uploaded   →  👔 corporate   │\n│  👤 Priya (Eng)     ⏳ pending    →  —                │\n├──────────────────────────────────────────────────────┤\n│  Style: Corporate · Background: Studio gray          │\n│  [ Generate all 3 ]  ·  Est. 45 sec  ·  HD PNG each  │\n└──────────────────────────────────────────────────────┘\n\n  ✓ LinkedIn team page  ✓ About us  ✓ Employee directory",
    },
    styles: [
      { id: "corporate", name: "Corporate", desc: "Suit & tie — LinkedIn team page", preview: "👔" },
      { id: "casual", name: "Casual pro", desc: "Shirt or knit — tech startups", preview: "💼" },
      { id: "creative", name: "Creative", desc: "Personality with polish", preview: "🎨" },
      { id: "academic", name: "Academic", desc: "Universities & research teams", preview: "🎓" },
    ],
  },
  zh: {
    badge: "PhotoAI 团队版 $99+？· $29/月 10 人",
    title: "全团队统一 LinkedIn 专业头像",
    subtitle:
      "上传团队成员自拍，选一种商务风格，批量生成专业证件照。免费体验 5 次，之后 $29/月不限量。",
    ctaPrimary: "免费进入团队工作室",
    ctaPrimaryHref: "/team",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，HeadshotPro 每人 $59" },
      { stat: "10 席位", label: "每个订阅包含" },
      { stat: "1 种风格", label: "团队页统一视觉" },
    ],
    stylesTitle: "一种风格，全团队一致",
    stylesSubtitle: "商务、休闲、创意、学术——所有人同一套视觉",
    howItWorks: {
      title: "如何使用",
      steps: [
        { step: "1", title: "添加团队成员", desc: "每人姓名 + 自拍（最多 10 人）" },
        { step: "2", title: "选择统一风格", desc: "一种商务造型，适用于领英与公司介绍页" },
        { step: "3", title: "批量下载", desc: "每人高清 PNG，直接用于员工名录" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "👥", title: "批量生成", desc: "上传 10 张自拍，一键全部生成" },
      { icon: "🎯", title: "风格一致", desc: "相同光线、背景与色调，团队感拉满" },
      { icon: "📦", title: "团队导出", desc: "逐张下载 PNG 或分享团队画廊链接" },
      { icon: "🔒", title: "隐私优先", desc: "照片 24 小时自动删除，不用于训练" },
    ],
    testimonialsTitle: "团队负责人怎么说",
    testimonials: [
      { name: "陈婷", role: "创业公司 COO", text: "一下午给 8 个新员工做了统一领英头像，比请摄影师省了 ¥3000。" },
      { name: "王磊", role: "工作室创始人", text: "公司介绍页终于像正经团队了，不再是旅游自拍大杂烩。" },
      { name: "李静", role: "12 人 SaaS 公司 HR", text: "新员工以前拖几周才换领英头像，现在入职第一天就搞定。" },
    ],
    closing: {
      title: "HeadshotPro 每人 $59——我们只要 $29/月",
      subtitle: "最多 10 名成员、无限重新生成、统一风格。第一天收费，因为 GPU 算力不免费。",
      ctaPrimary: "免费进入团队工作室",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "团队名册 → 统一证件照",
      caption: "添加成员 · 选风格 · 批量生成一致头像",
      preview:
        "┌─ 团队名册 ───────────────────────────────────────────┐\n│  👤 张明（CEO）     📷 已上传   →  👔 商务正装        │\n│  👤 李薇（CTO）     📷 已上传   →  👔 商务正装        │\n│  👤 王浩（设计）    📷 已上传   →  👔 商务正装        │\n│  👤 赵悦（工程）    ⏳ 待上传   →  —                   │\n├──────────────────────────────────────────────────────┤\n│  风格：商务正装 · 背景：棚拍灰                        │\n│  [ 批量生成 3 人 ]  ·  约 45 秒  ·  每人高清 PNG      │\n└──────────────────────────────────────────────────────┘\n\n  ✓ 领英团队页  ✓ 公司介绍  ✓ 员工名录",
    },
    styles: [
      { id: "corporate", name: "商务正装", desc: "西装领带，适合领英团队页", preview: "👔" },
      { id: "casual", name: "休闲专业", desc: "衬衫针织衫，适合科技创业团队", preview: "💼" },
      { id: "creative", name: "创意风格", desc: "有个性但不失专业感", preview: "🎨" },
      { id: "academic", name: "学术正式", desc: "适合高校、研究机构团队", preview: "🎓" },
    ],
  },
} as const;

export const joinCopy = {
  en: {
    title: "Subscribe Team Headshots",
    subtitle: "One price for up to 10 team members. Unlimited batch generations.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsPhotoAI: "vs HeadshotPro $59/person · cancel anytime",
    perks: [
      "Up to 10 team member seats",
      "Unlimited batch AI headshot generations",
      "All 4 unified professional styles",
      "HD PNG download per member",
      "Priority GPU queue",
      "Cancel anytime",
    ],
    subscribe: "Subscribe · $29/mo",
    polarConnected: "✓ Polar checkout connected",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "Polar / Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Batch GPU inference costs real money per team member",
      "Paying users = founders who ship products people see",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅团队 AI 头像",
    subtitle: "一口价最多 10 名成员，不限批量生成次数。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsPhotoAI: "对比 HeadshotPro 每人 $59 · 随时可取消",
    perks: [
      "最多 10 名团队成员席位",
      "无限次批量 AI 头像生成",
      "全部 4 种统一专业风格",
      "每人高清 PNG 下载",
      "优先 GPU 队列",
      "随时取消订阅",
    ],
    subscribe: "订阅 · $29/月",
    polarConnected: "✓ 已连接 Polar 收款",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Polar / Stripe 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "每位成员的批量生成都有真实 GPU 成本",
      "付费用户 = 真正需要团队形象的小公司",
      "一人维护 — 一口价才能持续运营",
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
