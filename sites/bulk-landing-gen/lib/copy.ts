import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Dynares $99/mo · we batch 20 keyword pages for $29/mo",
    title: "Bulk landing pages for Google Ads keywords",
    subtitle:
      "Paste your keyword list, get a customized landing page per keyword in 60 seconds. SEO meta, 4 styles, HTML export. 5 free batch runs, then $29/mo.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free batch runs · then $29/mo",
    stats: [
      { stat: "20", label: "keywords per batch" },
      { stat: "60s", label: "avg batch time" },
      { stat: "HTML", label: "export per page" },
    ],
    compareTitle: "Why indie founders need per-keyword landing pages",
    previewTitle: "Example keyword outputs",
    howItWorks: {
      title: "Batch ship landing pages in 3 steps",
      steps: [
        {
          step: "1",
          title: "Paste keywords",
          desc: "One Google Ads keyword per line — ad group or campaign level",
        },
        {
          step: "2",
          title: "Set product base",
          desc: "Product name, tagline, features — shared across all keyword pages",
        },
        {
          step: "3",
          title: "Export all HTML",
          desc: "Download each page or copy HTML — deploy to Vercel with keyword-specific URLs",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📦",
        title: "Batch generation",
        desc: "Up to 20 keyword landing pages in one click — no manual copy-paste",
      },
      {
        icon: "🎯",
        title: "Keyword-optimized",
        desc: "Each page gets keyword-specific headline, meta title, and description for Quality Score",
      },
      {
        icon: "🎨",
        title: "4 style templates",
        desc: "Minimal, bold, dark, gradient — consistent brand across all keyword pages",
      },
      {
        icon: "📤",
        title: "HTML export",
        desc: "Download or copy each page — deploy to /kw-slug paths on your domain",
      },
      {
        icon: "🔍",
        title: "SEO meta per page",
        desc: "Auto-generated title, description, keywords for each landing page",
      },
      {
        icon: "💡",
        title: "Ads tips",
        desc: "UTM params, URL structure, and Quality Score advice with every batch",
      },
    ],
    testimonialsTitle: "What founders say",
    testimonials: [
      {
        name: "Marcus",
        role: "SaaS founder",
        text: "Running Google Ads with one generic landing page killed my Quality Score. 15 keyword pages in 2 minutes changed everything.",
      },
      {
        name: "Lisa",
        role: "Indie Hacker",
        text: "Dynares wanted $99/mo. This does 80% of the job for $29 — perfect for indie ad budgets.",
      },
      {
        name: "Tom",
        role: "Growth marketer",
        text: "Used to spend 2 hours per ad group in Webflow. Now I batch generate, tweak CTA, ship same day.",
      },
    ],
    closing: {
      title: "Stop sending all ads to one generic page",
      subtitle:
        "Google rewards keyword relevance. Batch generate landing pages, boost Quality Score, lower CPC. $29/mo unlimited batches.",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Try free",
    },
    productDemo: {
      title: "Live batch preview",
      caption: "Keywords · per-page SEO · HTML export · ads deployment tips",
      preview:
        "📦 Bulk Landing Gen — TaskFlow\n─────────────────────────────────────────────────────\n  🎯 Keywords    5 lines pasted (indie PM, kanban dev, jira alt...)\n  ⚡ Batch        5 pages generated in 12s\n  📤 Output       5 × full HTML + keyword-specific meta\n  💡 Tips         /kw-slug URLs · UTM per ad group · QS boost\n─────────────────────────────────────────────────────\n  [ Download all ]    [ Copy page 1 ]    [ Regenerate ]",
    },
    examples: [
      {
        name: "SaaS ads",
        style: "minimal",
        productName: "TaskFlow",
        tagline: "indie project management tool",
        audience: "5 keywords → 5 pages",
      },
      {
        name: "AI product",
        style: "gradient",
        productName: "WriteAI",
        tagline: "AI writing assistant",
        audience: "10 keywords → 10 pages",
      },
      {
        name: "Dev tool",
        style: "dark",
        productName: "DeployKit",
        tagline: "one-click deploy",
        audience: "8 keywords → 8 pages",
      },
    ],
  },
  zh: {
    badge: "Dynares $99/月 · 我们 $29/月批量生成 20 个关键词落地页",
    title: "Google Ads 关键词批量落地页生成器",
    subtitle:
      "粘贴关键词列表，每个关键词 60 秒生成定制落地页。SEO meta、4 种风格、HTML 导出。免费体验 5 次批量生成，之后 $29/月。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "20", label: "关键词/批次" },
      { stat: "60 秒", label: "平均批量生成" },
      { stat: "HTML", label: "每页独立导出" },
    ],
    compareTitle: "为什么 Google Ads 需要关键词定制落地页？",
    previewTitle: "关键词生成示例",
    howItWorks: {
      title: "三步批量上线落地页",
      steps: [
        {
          step: "1",
          title: "粘贴关键词",
          desc: "每行一个 Google Ads 关键词 — 按广告组或活动分组",
        },
        {
          step: "2",
          title: "设置产品基础信息",
          desc: "产品名、标语、功能 — 所有关键词页面共享基础信息",
        },
        {
          step: "3",
          title: "批量导出 HTML",
          desc: "下载每页或复制 HTML — 部署到带关键词路径的自定义域名",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📦",
        title: "批量生成",
        desc: "一键最多 20 个关键词落地页 — 无需手动复制粘贴",
      },
      {
        icon: "🎯",
        title: "关键词优化",
        desc: "每页自动生成关键词专属标题、meta 描述，提升质量得分",
      },
      {
        icon: "🎨",
        title: "4 种风格",
        desc: "极简、醒目、暗色、渐变 — 所有关键词页面风格统一",
      },
      {
        icon: "📤",
        title: "HTML 导出",
        desc: "下载或复制每页 — 部署到域名的 /kw-slug 路径",
      },
      {
        icon: "🔍",
        title: "每页 SEO meta",
        desc: "每页自动生成 title、description、keywords",
      },
      {
        icon: "💡",
        title: "广告投放建议",
        desc: "UTM 参数、URL 结构、质量得分优化建议",
      },
    ],
    testimonialsTitle: "创始人怎么说",
    testimonials: [
      {
        name: "Marcus",
        role: "SaaS 创始人",
        text: "用一个通用落地页跑 Google Ads，质量得分很低。2 分钟生成 15 个关键词页面后 CPC 降了 40%。",
      },
      {
        name: "Lisa",
        role: "Indie Hacker",
        text: "Dynares 要 $99/月。这个 $29 做到 80% 功能 — 适合 indie 广告预算。",
      },
      {
        name: "Tom",
        role: "增长营销",
        text: "以前在 Webflow 每个广告组花 2 小时。现在批量生成，改改 CTA 当天上线。",
      },
    ],
    closing: {
      title: "别再让所有广告指向同一个通用页面",
      subtitle:
        "Google 奖励关键词相关性。批量生成落地页，提升质量得分，降低 CPC。$29/月无限批量生成。",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费体验",
    },
    productDemo: {
      title: "实时批量生成预览",
      caption: "关键词 · 每页 SEO · HTML 导出 · 广告投放建议",
      preview:
        "📦 批量落地页生成 — TaskFlow\n─────────────────────────────────────────────────────\n  🎯 关键词      粘贴 5 行（indie PM、kanban dev、jira 替代...）\n  ⚡ 批量生成     5 页 12 秒完成\n  📤 输出         5 × 完整 HTML + 关键词专属 meta\n  💡 建议         /kw-slug 路径 · 广告组 UTM · 质量得分提升\n─────────────────────────────────────────────────────\n  [ 全部下载 ]    [ 复制第 1 页 ]    [ 重新生成 ]",
    },
    examples: [
      {
        name: "SaaS 广告",
        style: "极简",
        productName: "TaskFlow",
        tagline: "独立开发者项目管理",
        audience: "5 关键词 → 5 页面",
      },
      {
        name: "AI 产品",
        style: "渐变",
        productName: "WriteAI",
        tagline: "AI 写作助手",
        audience: "10 关键词 → 10 页面",
      },
      {
        name: "开发工具",
        style: "暗色",
        productName: "DeployKit",
        tagline: "一键部署",
        audience: "8 关键词 → 8 页面",
      },
    ],
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
