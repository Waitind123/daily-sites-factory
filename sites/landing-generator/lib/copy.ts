import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Carrd $19/yr · we ship landing pages in 30s for $29/mo",
    title: "AI landing page generator for indie hackers",
    subtitle:
      "Describe your product, get deployable HTML in 30 seconds. 4 styles, SEO meta, export to Vercel. 5 free generations, then $29/mo.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "4", label: "style templates" },
      { stat: "30s", label: "avg generation" },
      { stat: "HTML", label: "export format" },
    ],
    compareTitle: "Why indie founders need fast landing pages",
    previewTitle: "Example outputs",
    howItWorks: {
      title: "Ship your landing page in 3 steps",
      steps: [
        {
          step: "1",
          title: "Describe your product",
          desc: "Product name, tagline, features — or pick a preset example",
        },
        {
          step: "2",
          title: "Pick a style",
          desc: "Minimal, bold, dark, or gradient — levelsio to modern SaaS vibes",
        },
        {
          step: "3",
          title: "Export & deploy",
          desc: "Copy HTML or download — deploy to Vercel, Netlify, or custom domain",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "⚡",
        title: "30-second generation",
        desc: "Enter product description, get complete landing page HTML instantly",
      },
      {
        icon: "🎨",
        title: "4 style templates",
        desc: "Minimal, bold, dark, gradient — from levelsio to modern SaaS",
      },
      {
        icon: "📤",
        title: "HTML export",
        desc: "One-click copy or download — deploy anywhere",
      },
      {
        icon: "🔍",
        title: "SEO optimized",
        desc: "Auto-generated title, description, and structured meta tags",
      },
      {
        icon: "📱",
        title: "Mobile responsive",
        desc: "Clamp fonts, responsive grid, mobile-friendly CTAs",
      },
      {
        icon: "💡",
        title: "Actionable tips",
        desc: "Domain, CTA, and deployment advice with every generation",
      },
    ],
    testimonialsTitle: "What founders say",
    testimonials: [
      {
        name: "Jay",
        role: "Indie Hacker",
        text: "Carrd templates feel generic, Webflow took 3 days to learn. This ships in 30 seconds.",
      },
      {
        name: "Amy",
        role: "SaaS founder",
        text: "A/B tested 3 landing page versions for $29/mo — 100x cheaper than hiring a designer.",
      },
      {
        name: "David",
        role: "Solo developer",
        text: "levelsio says ship a landing page on day 1. This tool let me launch with a page the same day.",
      },
    ],
    closing: {
      title: "levelsio: ship a landing page on day 1",
      subtitle:
        "Skip 3 days of Webflow tutorials. Describe your product, get HTML in 30s, deploy today. $29/mo unlimited.",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Try free",
    },
    productDemo: {
      title: "Live generation preview",
      caption: "Styles · SEO meta · HTML export · deployment tips",
      preview:
        "🎨 Landing Generator — TaskFlow\n─────────────────────────────────────────────────────\n  ⚡ Input       SaaS tool · indie project management\n  🎨 Style       Minimal (levelsio / Nomad List vibe)\n  📤 Output      Full HTML + title/description meta\n  💡 Tips        Register .com · link CTA to Stripe Checkout\n─────────────────────────────────────────────────────\n  [ Copy HTML ]    [ Download ]    [ Regenerate ]",
    },
    examples: [
      {
        name: "SaaS tool",
        style: "minimal",
        productName: "TaskFlow",
        tagline: "Minimal project management for indie devs",
        audience: "Indie developers",
      },
      {
        name: "AI product",
        style: "gradient",
        productName: "WriteAI",
        tagline: "SEO articles in one click",
        audience: "Content creators",
      },
      {
        name: "Community",
        style: "dark",
        productName: "IndieCircle",
        tagline: "Find your co-founder",
        audience: "Founders",
      },
    ],
  },
  zh: {
    badge: "Carrd $19/年 · 我们 30 秒生成落地页 $29/月",
    title: "独立开发者 AI 落地页生成器",
    subtitle:
      "输入产品描述，30 秒生成可部署 HTML。4 种风格、SEO meta、导出到 Vercel。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "4", label: "风格模板" },
      { stat: "30 秒", label: "平均生成" },
      { stat: "HTML", label: "导出格式" },
    ],
    compareTitle: "为什么 indie 需要快速 landing page？",
    previewTitle: "示例生成效果",
    howItWorks: {
      title: "三步上线落地页",
      steps: [
        {
          step: "1",
          title: "描述产品",
          desc: "产品名、标语、功能 — 或选择预设示例",
        },
        {
          step: "2",
          title: "选择风格",
          desc: "极简、醒目、暗色、渐变 — levelsio 到现代 SaaS 风",
        },
        {
          step: "3",
          title: "导出部署",
          desc: "复制 HTML 或下载 — 部署到 Vercel、Netlify 或自定义域名",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "⚡",
        title: "30 秒生成",
        desc: "输入产品描述，自动生成完整 landing page HTML",
      },
      {
        icon: "🎨",
        title: "4 种风格",
        desc: "极简、醒目、暗色、渐变 — levelsio 到 SaaS 现代感",
      },
      {
        icon: "📤",
        title: "HTML 导出",
        desc: "一键复制或下载，部署到 Vercel / Netlify / 自定义域名",
      },
      {
        icon: "🔍",
        title: "SEO 优化",
        desc: "自动生成 title、description、结构化 meta 标签",
      },
      {
        icon: "📱",
        title: "移动端适配",
        desc: "响应式布局，clamp 字体，移动端 CTA 友好",
      },
      {
        icon: "💡",
        title: "优化建议",
        desc: "每次生成附带域名、CTA、部署 actionable tips",
      },
    ],
    testimonialsTitle: "创始人怎么说",
    testimonials: [
      {
        name: "小林",
        role: "Indie Hacker",
        text: "Carrd 模板太 generic，Webflow 学 3 天。这个 30 秒出稿，改改就能 ship。",
      },
      {
        name: "Amy",
        role: "SaaS 创始人",
        text: "A/B 测试 3 个 landing page 版本，$29/月比雇设计师便宜 100 倍。",
      },
      {
        name: "David",
        role: "独立开发者",
        text: "levelsio 说第一天就要有 landing page。这个工具让我 launch day 当天就有页面上线。",
      },
    ],
    closing: {
      title: "levelsio 说：第一天就要有 landing page",
      subtitle:
        "别花 3 天学 Webflow。输入描述，30 秒出稿，改改就能 ship。$29/月无限生成。",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费体验",
    },
    productDemo: {
      title: "实时生成预览",
      caption: "风格 · SEO meta · HTML 导出 · 部署建议",
      preview:
        "🎨 Landing 生成器 — TaskFlow\n─────────────────────────────────────────────────────\n  ⚡ 输入       SaaS 工具 · 独立开发者极简项目管理\n  🎨 风格       极简（levelsio / Nomad List 风）\n  📤 输出       完整 HTML + title/description meta\n  💡 建议       注册 .com 域名 · CTA 链到 Stripe Checkout\n─────────────────────────────────────────────────────\n  [ 复制 HTML ]    [ 下载 ]    [ 重新生成 ]",
    },
    examples: [
      {
        name: "SaaS 工具",
        style: "极简",
        productName: "TaskFlow",
        tagline: "独立开发者的极简项目管理",
        audience: "独立开发者",
      },
      {
        name: "AI 产品",
        style: "渐变",
        productName: "WriteAI",
        tagline: "中文 SEO 文章一键生成",
        audience: "内容创作者",
      },
      {
        name: "社区产品",
        style: "暗色",
        productName: "IndieCircle",
        tagline: "找到你的 co-founder",
        audience: "创业者",
      },
    ],
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
