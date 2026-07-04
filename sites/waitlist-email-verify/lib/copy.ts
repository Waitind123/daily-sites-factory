import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Waitle validates emails · we add AI conversion insights",
    title: "Waitlist email validation that actually converts",
    subtitle:
      "MX checks, typo fix, disposable filter, double opt-in — plus AI conversion scoring. 5 free audits, then $9.9/mo flat.",
    ctaPrimary: "Create a waitlist free",
    ctaPrimaryHref: "/lists",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free email audits · then $9.9/mo",
    stats: [
      { stat: "99%", label: "typo emails caught before signup" },
      { stat: "$9.9", label: "flat/mo vs Waitle + Lineup $9+ each" },
      { stat: "2 min", label: "to launch with email verification" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        { step: "1", title: "Create a waitlist", desc: "Name your product, enable email verification and double opt-in in one click" },
        { step: "2", title: "Collect verified signups", desc: "MX records checked, typos suggested (gmial.com → gmail.com), disposables blocked" },
        { step: "3", title: "AI conversion analysis", desc: "See valid vs junk ratio, B2B signals, and when your list is launch-ready" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "✉️", title: "MX + typo validation", desc: "Every email checked for MX records, disposable domains, and common typos with one-click fix suggestions." },
      { icon: "🔒", title: "Double opt-in", desc: "Require email confirmation before counting signups — blocks bots and fake addresses." },
      { icon: "🤖", title: "AI conversion scoring", desc: "Beyond validation: A–F grades, B2B signal detection, and launch-readiness recommendations." },
      { icon: "💰", title: "Flat $9.9/mo", desc: "Unlimited waitlists, verified signups, and AI audits. No per-email fees." },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      { name: "Sam K.", role: "Solo founder", text: "Waitle caught typos but couldn't tell me if my list was launch-ready. Waitlist Verify's AI audit saved me from a premature launch." },
      { name: "Mia T.", role: "Indie hacker", text: "18% of signups were gmial.com typos. One-click fix suggestions recovered 40 real leads before launch day." },
      { name: "Jordan P.", role: "Bootstrapped dev", text: "Double opt-in cut disposable emails from 22% to 3%. The conversion report told me exactly when to ship." },
    ],
    closing: {
      title: "Launch with a clean, verified waitlist",
      subtitle: "5 free email audits · then $9.9/mo for unlimited",
      ctaPrimary: "Create a waitlist free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Email validation preview",
      caption: "MX check · typo fix · disposable filter · AI conversion score",
      preview:
        "✉️ Email Validation — My SaaS Launch\n─────────────────────────────────\n   Valid emails:  89/103  (86%)\n   Typos fixed:   12  (gmial.com → gmail.com)\n   Disposable:     2  (blocked)\n   MX missing:     0\n\n   AI Conversion Score: 78/100  Grade: GOOD\n\n   Quality breakdown:\n   A ████████░░  34%  (corporate, verified)\n   B ██████░░░░  28%\n   C ████░░░░░░  18%\n   D ██░░░░░░░░  10%\n   F █░░░░░░░░░   6%  (filtered)\n\n   💡 Recommendations:\n   → 32% corporate domains — consider B2B pricing\n   → Enable double opt-in to cut remaining F-grade\n   → 100+ valid signups — ready for launch survey",
    },
  },
  zh: {
    badge: "Waitle 能验证邮箱 · 我们加上 AI 转化洞察",
    title: "真正能转化的等候名单邮件验证",
    subtitle: "MX 检测、拼写纠错、一次性邮箱过滤、双重确认 — 外加 AI 转化评分。免费体验 5 次审计，之后 $9.9/月一口价。",
    ctaPrimary: "免费创建等候名单",
    ctaPrimaryHref: "/lists",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次邮箱审计 · 之后 $9.9/月",
    stats: [
      { stat: "99%", label: "报名前拦截拼写错误邮箱" },
      { stat: "$9.9", label: "一口价/月，Waitle + Lineup 各 $9+" },
      { stat: "2 分钟", label: "上线带邮箱验证的等候名单" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        { step: "1", title: "创建等候名单", desc: "输入产品名称，一键开启邮箱验证与双重确认" },
        { step: "2", title: "收集已验证报名", desc: "检测 MX 记录、建议拼写纠错（gmial.com → gmail.com）、拦截一次性邮箱" },
        { step: "3", title: "AI 转化分析", desc: "查看有效/无效比例、B2B 信号，判断名单是否适合上线" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "✉️", title: "MX + 拼写验证", desc: "每个邮箱检测 MX 记录、一次性域名、常见拼写错误，支持一键纠错建议。" },
      { icon: "🔒", title: "双重确认", desc: "报名需邮件确认后才计入名单 — 拦截机器人和虚假地址。" },
      { icon: "🤖", title: "AI 转化评分", desc: "不止验证：A–F 分级、B2B 信号检测、上线就绪建议。" },
      { icon: "💰", title: "$9.9/月 一口价", desc: "等候名单、已验证报名、AI 审计不限量。不按邮箱收费。" },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      { name: "Sam K.", role: "一人创始人", text: "Waitle 能抓拼写错误，但看不出名单是否适合上线。等候名单邮件验证的 AI 审计帮我避免了一次过早上线。" },
      { name: "Mia T.", role: "独立开发者", text: "18% 的报名是 gmial.com 拼写错误。一键纠错建议帮我在上线前找回了 40 个真实线索。" },
      { name: "Jordan P.", role: "自举创业者", text: "双重确认把一次性邮箱从 22% 降到 3%。转化报告告诉我确切的上线时机。" },
    ],
    closing: {
      title: "用干净、已验证的名单上线",
      subtitle: "免费 5 次邮箱审计 · 之后 $9.9/月 不限量",
      ctaPrimary: "免费创建等候名单",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "邮箱验证预览",
      caption: "MX 检测 · 拼写纠错 · 一次性过滤 · AI 转化分",
      preview:
        "✉️ 邮箱验证 — 我的 SaaS 上线\n─────────────────────────────────\n   有效邮箱：  89/103  （86%）\n   纠错修复：  12  （gmial.com → gmail.com）\n   一次性：     2  （已拦截）\n   MX 缺失：     0\n\n   AI 转化分：78/100  等级：良好\n\n   质量分布：\n   A ████████░░  34%  （企业邮箱，已验证）\n   B ██████░░░░  28%\n   C ████░░░░░░  18%\n   D ██░░░░░░░░  10%\n   F █░░░░░░░░░   6%  （已过滤）\n\n   💡 建议：\n   → 32% 企业域名 — 考虑 B2B 定价\n   → 开启双重确认以消除剩余 F 级\n   → 100+ 有效报名 — 可发上线调研",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Waitlist Verify",
    subtitle: "One price, unlimited waitlists, email validation, and AI conversion audits.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Waitle + Lineup $9+ each · cancel anytime",
    perks: [
      "Unlimited product waitlists",
      "MX + typo + disposable email validation",
      "Double opt-in email confirmation",
      "AI conversion scoring & launch recommendations",
      "Referral boost & leaderboard",
      "CSV verified email export",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free audits, then subscribe?",
    whyItems: [
      "Email validation and AI scoring costs real infrastructure",
      "Paying users = founders who actually launch products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅等候名单邮件验证",
    subtitle: "一口价，等候名单、邮箱验证、AI 转化审计不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Waitle + Lineup 各 $9+ · 随时可取消",
    perks: [
      "不限产品等候名单数量",
      "MX + 拼写 + 一次性邮箱验证",
      "双重确认邮件验证",
      "AI 转化评分与上线建议",
      "推荐裂变与排行榜",
      "已验证邮箱 CSV 导出",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次审计，之后订阅？",
    whyItems: [
      "邮箱验证与 AI 评分有真实基础设施成本",
      "付费用户 = 真正会发布产品的创始人",
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
