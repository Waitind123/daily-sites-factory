import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Bannerbear Alternative for Indie Hackers — OG Image Guide",
      description:
        "Bannerbear $49/mo, Placid $29/mo too expensive? Compare 2026 OG image tools and find a $9.9/mo minimalist alternative for bootstrapped founders.",
    },
    h1: "2026 Bannerbear Alternative for Indie Hackers: OG Image Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "If you're an indie hacker or bootstrapped SaaS founder, you've felt this: product finally launches, you post on Product Hunt, and the share preview is blank or ugly. Twitter clicks are flat. Your blog is great but LinkedIn shows only text — no eye-catching image.",
      "That's the value of Open Graph (OG) images. OG images are the 1200×630 preview shown when links are shared on Twitter, Facebook, LinkedIn, Slack, and Discord. Studies show quality OG images can boost click-through 2–3×. For indie hackers, OG images aren't nice-to-have — they're launch and SEO infrastructure.",
      "But in 2025–2026, dedicated dynamic OG SaaS prices keep climbing. Bannerbear starts at $49/mo, Placid $29/mo, Cloudinary usage billing spirals. A common Indie Hackers complaint: \"I'm paying $49/mo just to generate 20 OG images for my blog.\"",
      "This guide helps you evaluate 2026 OG image options and find a minimalist tool for indie stage.",
    ],
    sections: [
      {
        h2: "Why indie hackers need OG image generators",
        paragraphs: ["You might ask: can't I use Figma or Canva manually? In theory yes, but in practice:"],
        list: [
          "Low efficiency — every blog post and product page needs manual design",
          "Inconsistent branding — manual images vary in style",
          "No automation — CMS can't auto-generate share images from titles",
          "Wrong sizes — Twitter 1200×630, LinkedIn 1200×627, Facebook slightly different",
        ],
        after: [
          "Dedicated OG generators solve the input title → pick template → export image + meta tags pipeline. A good one gets you from zero to shareable OG image in 30 seconds.",
        ],
      },
      {
        h2: "2026 OG image tools compared",
        tools: [
          {
            h3: "Bannerbear — $49–149/mo",
            p: "Industry leader for dynamic image API. Full features: template editor, API, webhooks, A/B tests. Steep pricing — base $49/mo for 1000 API calls. Best for large products needing API automation.",
          },
          {
            h3: "Placid — $29–89/mo",
            p: "Beautiful drag-and-drop template editor. $29/mo includes 500 generations. Great for design teams needing complex layouts. Overkill for simple title + subtitle indie products.",
          },
          {
            h3: "@vercel/og — free but limited",
            p: "Vercel's official OG solution using Satori JSX → PNG. Free in Next.js but requires JSX templates, Edge Runtime config, and only works in Next.js/Vercel ecosystem.",
          },
          {
            h3: "SnapOG — $49 one-time",
            p: "2025 one-time payment option, $49 unlimited. Simple but limited templates. Good if you want basic OG images without monthly fees.",
          },
          {
            h3: "OG Image Studio — $9.9/mo",
            p: "Does one thing well: fast 1200×630 OG images with meta tag and Next.js snippet export. 5 templates, pure SVG render, no Puppeteer. Best for indie stage needing simple share images.",
            link: { href: "/studio", text: "OG Image Studio", suffix: " offers 5 free tries before you subscribe." },
          },
        ],
      },
      {
        h2: "OG image technical standards",
        paragraphs: ["Regardless of tool, your OG image should meet:"],
        list: [
          "Size: 1200×630 pixels (Twitter/Facebook/LinkedIn standard)",
          "Format: PNG or JPEG, ideally under 1MB",
          "Safe zone: keep important text in central 80%",
          "Text length: headline under 60 chars, subtitle under 120",
          "Contrast: text must be readable on background",
        ],
        after: [
          "Minimum HTML meta tags: og:title, og:description, og:image (1200×630), twitter:card summary_large_image.",
        ],
      },
      {
        h2: "How to choose: decision framework",
        paragraphs: ["Don't ask \"which tool is best\" — ask \"what stage am I at?\""],
        tools: [
          {
            h3: "Scenario 1: MRR < $3000, 10–50 OG images/month",
            p: "Early traction — Product Hunt, blog, Twitter promos. You need fast share images, not complex API automation. Recommended: OG Image Studio ($9.9/mo) or SnapOG ($49 one-time).",
          },
          {
            h3: "Scenario 2: MRR $3000–$10000, blog auto-generation",
            p: "Steady content output, unique OG per post, possibly CMS API integration. Recommended: @vercel/og (Next.js) or Bannerbear API if budget allows.",
          },
          {
            h3: "Scenario 3: MRR > $10000, site-wide dynamic images",
            p: "Product pages, UGC, report exports all need dynamic images. Reliable API, webhooks, high SLA. Recommended: Bannerbear or Cloudinary usage billing.",
          },
        ],
      },
      {
        h2: "5 tips to boost OG click-through",
        ordered: [
          "Headline = value prop — promise users want to click, not internal codenames",
          "Consistent brand color — product accent on OG background boosts recognition",
          "Whitespace wins — simple OG images stand out in feeds",
          "Test templates — same content in minimal vs gradient vs dark, compare CTR",
          "Unique OG per piece — every blog post and feature launch deserves its own image",
        ],
      },
      {
        h2: "Get started now",
        paragraphs: [
          "OG images are the most underrated part of product launch and promotion. A great share image might be the gap between you and competitors on Product Hunt.",
          "If you're indie stage with dozens of OG images per month, you don't need Bannerbear's $49/mo. OG Image Studio offers 5 free tries — first OG image in 30 seconds.",
        ],
      },
    ],
    cta: {
      title: "Try 5 free OG image generations",
      subtitle: "30-second output · no signup required",
      button: "Start generating",
      href: "/studio",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Bannerbear 替代方案 — OG Image 生成器完整指南",
      description:
        "Bannerbear $49/月、Placid $29/月太贵？2026 年 indie hacker 如何生成 Open Graph 社交分享图？对比价格、功能，推荐 $9.9/月的极简 OG 图生成方案。",
    },
    h1: "2026 独立开发者 Bannerbear 替代方案：OG Image 生成器完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "如果你是一名独立开发者或 bootstrapped SaaS 创始人，你一定经历过这样的场景：产品终于上线了，兴冲冲去 Product Hunt 发布，结果发现分享链接显示的是一张空白或丑陋的默认预览图。Twitter 上转发产品链接，点击率惨淡。博客文章写得很用心，但 LinkedIn 分享时只有一行文字，没有吸引眼球的图片。",
      "这就是 Open Graph（OG）图片的价值。OG 图是当你的链接被分享到 Twitter、Facebook、LinkedIn、Slack、Discord 时显示的那张 1200×630 像素的预览图。研究表明，带有高质量 OG 图的链接点击率可以提升 2-3 倍。对于 indie hacker 来说，OG 图不是锦上添花，而是产品发布和 SEO 推广的基础设施。",
      "但 2025-2026 年，专门做动态 OG 图生成的 SaaS 工具价格却不低。Bannerbear 起步 $49/月，Placid $29/月，Cloudinary 按量计费也容易失控。Indie Hackers 社区里一个高频吐槽是：「I'm paying $49/mo just to generate 20 OG images for my blog.」",
      "这篇指南帮你系统评估 2026 年的 OG Image 生成方案，并找到真正适合 indie stage 的极简替代工具。",
    ],
    sections: [
      {
        h2: "为什么 indie hacker 需要 OG Image 生成器？",
        paragraphs: ["你可能会问：用 Figma 或 Canva 手动做一张图不就行了吗？理论上可以，但实践中会遇到几个问题："],
        list: [
          "效率低：每篇博客、每个产品页面都要手动设计，10 分钟一张图，一个月就是数小时",
          "不一致：手动做的图风格各异，品牌感差",
          "无法自动化：博客 CMS 无法根据文章标题自动生成分享图",
          "尺寸易错：Twitter 要 1200×630，LinkedIn 推荐 1200×627，Facebook 又略有不同",
        ],
        after: [
          "专门的 OG Image 生成器解决的是「输入标题 → 选择模板 → 导出图片和 meta 标签」这条 pipeline。好的工具应该让你在 30 秒内从零到可分享的 OG 图。",
        ],
      },
      {
        h2: "2026 年主流 OG Image 工具对比",
        tools: [
          {
            h3: "Bannerbear — $49-149/月",
            p: "行业最知名的动态图片生成 API。功能全面：模板编辑器、API 调用、Webhook、A/B 测试。但价格曲线陡峭——基础 $49/月只有 1000 次 API 调用。适合已有大量内容、需要 API 自动化的大规模产品。",
          },
          {
            h3: "Placid — $29-89/月",
            p: "设计精美的模板编辑器，支持拖拽式设计。$29/月包含 500 次生成。适合设计驱动型团队、需要复杂视觉布局的场景。但对只需要简单标题+副标题的 indie 产品来说，功能过剩、价格偏高。",
          },
          {
            h3: "@vercel/og — 免费但有限制",
            p: "Vercel 官方的 OG 图生成方案，基于 Satori 将 JSX 渲染为 PNG。免费且集成在 Next.js 中，但需要编写 JSX 模板代码、配置 Edge Runtime、且只能在 Next.js/Vercel 生态中使用。",
          },
          {
            h3: "SnapOG — $49 一次性",
            p: "2025 年新兴的 one-time payment 选择，$49 买断无限使用。理念很好，但功能相对简单，模板选择有限。适合只需要基础 OG 图、不想付月费的开发者。",
          },
          {
            h3: "OG Image Studio — $9.9/月",
            p: "专注做一件事：快速生成 1200×630 的 OG 社交分享图，附带 meta 标签和 Next.js 代码片段导出。5 种模板覆盖 SaaS 发布、博客、社交媒体等常见场景。纯 SVG 渲染，无需 Puppeteer 或外部 API。",
            link: { href: "/studio", text: "OG Image Studio", suffix: " 可以免费体验 5 次，感受生成速度后再决定是否订阅。" },
          },
        ],
      },
      {
        h2: "OG 图的技术标准",
        paragraphs: ["无论选择哪个工具，你的 OG 图应该满足以下技术标准："],
        list: [
          "尺寸：1200×630 像素（Twitter/Facebook/LinkedIn 通用标准）",
          "格式：PNG 或 JPEG，文件大小建议 < 1MB",
          "安全区：重要文字放在中央 80% 区域，避免被平台裁切",
          "文字量：标题不超过 60 字符，副标题不超过 120 字符",
          "对比度：确保文字在背景上清晰可读",
        ],
        after: [
          "对应的 HTML meta 标签至少应包含 og:title、og:description、og:image（1200×630）、twitter:card summary_large_image。",
        ],
      },
      {
        h2: "如何选择：决策框架",
        paragraphs: ["不要问「哪个工具最好」，问「我处于什么阶段」："],
        tools: [
          {
            h3: "场景 1：MRR < $3000，每月生成 10-50 张 OG 图",
            p: "产品刚上线或处于 early traction 阶段，主要在 Product Hunt 发布、写博客、Twitter 推广时需要 OG 图。推荐：OG Image Studio（$9.9/月）或 SnapOG（$49 一次性）。",
          },
          {
            h3: "场景 2：MRR $3000-$10000，需要博客自动生成 OG 图",
            p: "有稳定的内容输出，每篇博客都需要独特的 OG 图，可能需要 API 集成到 CMS。推荐：@vercel/og（Next.js）或 Bannerbear API（预算允许时）。",
          },
          {
            h3: "场景 3：MRR > $10000，需要全站动态 OG 图",
            p: "产品页面、用户生成内容、报告导出都需要动态图片，需要可靠 API 和高 SLA。推荐：Bannerbear 或 Cloudinary 按量付费。",
          },
        ],
      },
      {
        h2: "5 个提升 OG 图点击率的技巧",
        ordered: [
          "标题即价值主张：OG 图上的标题应该是用户看到就想点击的价值承诺",
          "品牌色一致：使用产品主色调作为背景或强调色，增强品牌识别",
          "留白是美德：不要塞满文字和图标，简洁的 OG 图在信息流中更突出",
          "测试不同模板：同一内容用不同风格测试，看哪个 CTR 更高",
          "每篇内容独立 OG 图：不要用一张通用图打天下，每篇博客、每个功能发布都应有专属 OG 图",
        ],
      },
      {
        h2: "立即开始",
        paragraphs: [
          "OG 图是产品发布和推广中最被低估的环节。一张好的分享图，可能就是你和竞品在 Product Hunt 排名上的差距。",
          "如果你处于 indie stage，每月只需要几十张 OG 图，完全没必要为 Bannerbear 的 $49/月买单。OG Image Studio 提供 5 次免费体验，30 秒内生成你的第一张 OG 图。",
        ],
      },
    ],
    cta: {
      title: "免费体验 5 次 OG 图生成",
      subtitle: "30 秒出图，无需注册，立即感受 Bannerbear 平替方案",
      button: "开始生成 OG 图",
      href: "/studio",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
