import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "PhotoAI $29/mo? · $9.9/mo flat",
    title: "AI professional headshots in 30 seconds",
    subtitle:
      "Upload a selfie, pick a style, download LinkedIn-ready portraits. 5 free generations, then $9.9/mo unlimited.",
    ctaPrimary: "Try free in studio",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs PhotoAI $29+" },
      { stat: "30 sec", label: "from selfie to pro headshot" },
      { stat: "4 styles", label: "corporate, casual, creative, academic" },
    ],
    stylesTitle: "Four professional styles",
    stylesSubtitle: "Members unlock all styles + custom backgrounds",
    howItWorks: {
      title: "How it works",
      steps: [
        { step: "1", title: "Upload a selfie", desc: "Front-facing, good light, full face visible" },
        { step: "2", title: "Pick a style", desc: "Corporate / casual / creative / academic" },
        { step: "3", title: "Download & use", desc: "HD PNG in LinkedIn, resume, badge sizes" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "⚡", title: "30-second output", desc: "Upload once, AI generates 20+ pro headshots" },
      { icon: "🎯", title: "Multi-style", desc: "Corporate, casual, creative, academic — one click" },
      { icon: "📐", title: "Standard sizes", desc: "1:1 / 4:5 / ID photo specs, ready to use" },
      { icon: "🔒", title: "Privacy first", desc: "Photos auto-delete in 24h, never used for training" },
    ],
    testimonialsTitle: "What users say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Product manager",
        text: "LinkedIn profile views tripled after I swapped my selfie for an AI headshot.",
      },
      {
        name: "Sarah L.",
        role: "Freelance designer",
        text: "Saved $200 vs a photo studio — and the results look more polished.",
      },
      {
        name: "James K.",
        role: "Founder",
        text: "Investor call in 5 minutes. Fixed my headshot in 30 seconds. Lifesaver.",
      },
    ],
    closing: {
      title: "Studio once $299 — we're $9.9/mo",
      subtitle: "Unlimited generations, all styles, HD download. We charge day one because GPU isn't free.",
      ctaPrimary: "Try free in studio",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Before → After preview",
      caption: "Selfie upload · style pick · LinkedIn-ready output",
      preview:
        "┌─ BEFORE ─────────────┐  ┌─ AFTER ──────────────┐\n│  📷 Casual selfie    │  │  👔 Corporate style  │\n│  Kitchen background  │→ │  Clean studio bg     │\n│  Harsh shadows       │  │  Soft pro lighting   │\n└──────────────────────┘  └──────────────────────┘\n\n  Style: Corporate · 18s · 2048×2048 PNG\n  ✓ LinkedIn · ✓ Resume · ✓ Company badge",
    },
    styles: [
      { id: "corporate", name: "Corporate", desc: "Suit & tie — LinkedIn / resume", preview: "👔" },
      { id: "casual", name: "Casual pro", desc: "Shirt or knit — tech industry", preview: "💼" },
      { id: "creative", name: "Creative", desc: "Personality without losing polish", preview: "🎨" },
      { id: "academic", name: "Academic", desc: "Universities & research institutes", preview: "🎓" },
    ],
  },
  zh: {
    badge: "PhotoAI $29/月？· $9.9/月一口价",
    title: "30 秒生成 AI 专业证件照",
    subtitle:
      "上传自拍、选风格、下载 LinkedIn 级头像。免费体验 5 次，之后 $9.9/月不限量生成。",
    ctaPrimary: "免费进入工作室",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，PhotoAI 要 $29+" },
      { stat: "30 秒", label: "自拍变专业证件照" },
      { stat: "4 种", label: "商务、休闲、创意、学术风格" },
    ],
    stylesTitle: "四种专业风格",
    stylesSubtitle: "会员解锁全部风格 + 自定义背景",
    howItWorks: {
      title: "如何使用",
      steps: [
        { step: "1", title: "上传自拍", desc: "正面照，光线好，露全脸" },
        { step: "2", title: "选择风格", desc: "商务 / 休闲 / 创意 / 学术" },
        { step: "3", title: "下载使用", desc: "高清 PNG，适用于领英、简历、工牌" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "⚡", title: "30 秒出图", desc: "上传自拍，AI 自动生成 20+ 张专业头像" },
      { icon: "🎯", title: "多风格可选", desc: "商务、休闲、创意、学术，一键切换" },
      { icon: "📐", title: "标准尺寸", desc: "1:1 / 4:5 / 证件照规格，直接可用" },
      { icon: "🔒", title: "隐私优先", desc: "照片 24 小时自动删除，不用于训练" },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      { name: "张明", role: "产品经理", text: "换了头像后领英浏览量涨了 3 倍" },
      { name: "李薇", role: "自由设计师", text: "比去照相馆省 500 块，效果还更好" },
      { name: "王浩", role: "创业者", text: "投资人会议前 5 分钟搞定，救了我" },
    ],
    closing: {
      title: "照相馆一次 ¥299，我们只要 $9.9/月",
      subtitle: "无限生成、全部风格、高清下载。第一天收费，因为 GPU 算力不免费。",
      ctaPrimary: "免费进入工作室",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "前后对比预览",
      caption: "自拍上传 · 风格选择 · 领英级输出",
      preview:
        "┌─ 原图 ───────────────┐  ┌─ 生成结果 ───────────┐\n│  📷 日常自拍         │  │  👔 商务正装风格     │\n│  杂乱背景            │→ │  干净棚拍背景        │\n│  光线不均            │  │  柔和专业打光        │\n└──────────────────────┘  └──────────────────────┘\n\n  风格：商务正装 · 18 秒 · 2048×2048 PNG\n  ✓ 领英 · ✓ 简历 · ✓ 工牌",
    },
    styles: [
      { id: "corporate", name: "商务正装", desc: "西装领带，适合领英 / 简历", preview: "👔" },
      { id: "casual", name: "休闲专业", desc: "衬衫或针织衫，适合科技行业", preview: "💼" },
      { id: "creative", name: "创意风格", desc: "有个性但不失专业感", preview: "🎨" },
      { id: "academic", name: "学术正式", desc: "适合高校、研究机构", preview: "🎓" },
    ],
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join AI Headshots",
    subtitle: "One price, unlimited generations. No per-image fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsPhotoAI: "vs PhotoAI $29+/mo · cancel anytime",
    perks: [
      "Unlimited AI headshot generations",
      "All 4 professional styles",
      "HD PNG download",
      "Priority GPU queue",
      "Cancel anytime",
    ],
    subscribe: "Subscribe · $9.9/mo",
    subscribeCny: "Pay in CNY · ¥69/mo",
    polarConnected: "✓ Polar checkout connected",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "USD via Polar · CNY via Stripe (Alipay / WeChat Pay)",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "GPU inference costs real money per generation",
      "Paying users = founders who ship products people see",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 AI 证件照",
    subtitle: "一口价，不限生成次数。不按张数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsPhotoAI: "对比 PhotoAI $29+/月 · 随时可取消",
    perks: [
      "无限次 AI 头像生成",
      "全部 4 种风格",
      "高清 PNG 下载",
      "优先 GPU 队列",
      "随时取消订阅",
    ],
    subscribe: "订阅 · $9.9/月（美元 Polar）",
    subscribeCny: "人民币付款 · ¥69/月",
    polarConnected: "✓ 已连接 Polar 收款（美元）",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "美元走 Polar · 人民币走 Stripe（支付宝 / 微信）",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "每次生成都有真实 GPU 推理成本",
      "付费用户 = 真正需要专业形象的创始人",
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
