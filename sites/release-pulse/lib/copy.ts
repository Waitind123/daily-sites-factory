import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "PushToPost $9+/mo? · $29/mo flat",
    title: "Changelog → X, LinkedIn, Threads — in 30 seconds",
    subtitle:
      "Paste your release notes once. Get platform-native posts for X, LinkedIn, and Threads. 5 free conversions, then $29/mo.",
    ctaPrimary: "Convert free",
    ctaPrimaryHref: "/convert",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free conversions · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs PushToPost $9+" },
      { stat: "3", label: "platforms from one changelog" },
      { stat: "30s", label: "to ship a release announcement" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste release notes",
          desc: "Drop your changelog, version notes, or GitHub release — bullet points work best",
        },
        {
          step: "2",
          title: "Get platform posts",
          desc: "X hooks, LinkedIn professional framing, Threads thread format — each native",
        },
        {
          step: "3",
          title: "Copy and announce",
          desc: "One-click copy per platform. Stop rewriting the same release 3 times",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📝",
        title: "Changelog parser",
        desc: "Auto-detects version numbers, bullet points, and feature lists from raw release notes.",
      },
      {
        icon: "𝕏",
        title: "X release hook",
        desc: "280-char hooks with version tag and #buildinpublic — ready to tweet on ship day.",
      },
      {
        icon: "💼",
        title: "LinkedIn framing",
        desc: "Professional release post with arrow bullets and engagement CTA. Not copy-paste spam.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited conversions. No GitHub webhook setup like PushToPost or BuildCast.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "Solo SaaS founder",
        text: "I ship weekly. Used to spend 40 min reformatting changelogs for 3 platforms. Release Pulse does it in 30 seconds.",
      },
      {
        name: "Jen K.",
        role: "Indie hacker",
        text: "PushToPost wanted GitHub access. I just want to paste my notes and get posts. This is exactly that.",
      },
      {
        name: "David R.",
        role: "Bootstrapped dev",
        text: "LinkedIn tone vs X hook — finally my release posts don't sound identical everywhere.",
      },
    ],
    closing: {
      title: "Stop rewriting every release three times",
      subtitle: "5 free conversions · then $29/mo for unlimited",
      ctaPrimary: "Convert free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Live conversion preview",
      caption: "One changelog → X · LinkedIn · Threads",
      preview:
        "🚀 Release Pulse                     Generated: 1 min ago\n─────────────────────────────────────────────────────\n  Input: v2.1.0 release notes\n  • Dark mode for dashboard\n  • 3x faster CSV export\n  • $29/mo pricing for indie devs\n─────────────────────────────────────────────────────\n  𝕏 Twitter (198/280):\n  🚀 Shipped v2.1.0: Dark mode + faster exports\n  • Dark mode for dashboard\n  • 3x faster CSV export\n  #buildinpublic #changelog\n─────────────────────────────────────────────────────\n  LinkedIn (420/3000):\n  📣 New release (v2.1.0): Dark mode + faster exports\n  → Dark mode for dashboard\n  → 3x faster CSV export\n─────────────────────────────────────────────────────\n  [ Copy 𝕏 ]  [ Copy LinkedIn ]  [ + New convert ]",
    },
  },
  zh: {
    badge: "PushToPost 要 $9+/月？· $29/月一口价",
    title: "发布日志 → X、领英、Threads — 30 秒搞定",
    subtitle:
      "粘贴一次 release notes，自动生成适配 X、领英、Threads 的原生帖子。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费转换",
    ctaPrimaryHref: "/convert",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，PushToPost 要 $9+" },
      { stat: "3", label: "个平台一次生成" },
      { stat: "30 秒", label: "完成发布通知" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴发布日志",
          desc: "填入 changelog、版本说明或 GitHub Release — 要点列表效果最佳",
        },
        {
          step: "2",
          title: "获取平台帖子",
          desc: "X 短帖钩子、领英专业格式、Threads 串帖 — 每个平台原生语气",
        },
        {
          step: "3",
          title: "复制发布",
          desc: "每个平台一键复制，不用再为同一次发布写 3 遍",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📝",
        title: "发布日志解析",
        desc: "自动识别版本号、要点列表和功能说明，从原始 release notes 提取结构。",
      },
      {
        icon: "𝕏",
        title: "X 发布钩子",
        desc: "280 字内钩子 + 版本标签 + #buildinpublic — 发布日直接发推。",
      },
      {
        icon: "💼",
        title: "领英专业格式",
        desc: "专业发布帖 + 箭头要点 + 互动结尾，避免全平台复制粘贴感。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "无限转换，无需像 PushToPost 或 BuildCast 那样配置 GitHub Webhook。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Marcus T.",
        role: "独立 SaaS 创始人",
        text: "我每周发布。以前要花 40 分钟改 3 个平台的 changelog。发布日志转社交帖 30 秒搞定。",
      },
      {
        name: "Jen K.",
        role: "独立开发者",
        text: "PushToPost 要 GitHub 权限。我只想粘贴笔记拿帖子。这个正是我需要的。",
      },
      {
        name: "David R.",
        role: "自举开发者",
        text: "领英语气和 X 钩子终于不一样了，发布帖不会到处一模一样。",
      },
    ],
    closing: {
      title: "别再为每次发布写三遍",
      subtitle: "免费体验 5 次 · 之后 $29/月无限使用",
      ctaPrimary: "免费转换",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "实时转换预览",
      caption: "一份 changelog → X · 领英 · Threads",
      preview:
        "🚀 发布日志转社交帖                   生成于：1 分钟前\n─────────────────────────────────────────────────────\n  输入：v2.1.0 发布说明\n  • 仪表盘深色模式\n  • CSV 导出快 3 倍\n  • 独立开发者 $29/月定价\n─────────────────────────────────────────────────────\n  𝕏 推特 (198/280)：\n  🚀 发布 v2.1.0：深色模式 + 导出加速\n  • 仪表盘深色模式\n  • CSV 导出快 3 倍\n  #buildinpublic #changelog\n─────────────────────────────────────────────────────\n  领英 (420/3000)：\n  📣 新版本 (v2.1.0)：深色模式 + 导出加速\n  → 仪表盘深色模式\n  → CSV 导出快 3 倍\n─────────────────────────────────────────────────────\n  [ 复制 𝕏 ]  [ 复制领英 ]  [ + 新建转换 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
