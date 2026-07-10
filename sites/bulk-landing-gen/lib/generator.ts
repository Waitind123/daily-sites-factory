export type LandingStyle = "minimal" | "bold" | "dark" | "gradient";

export type GenerateInput = {
  productName: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  style: LandingStyle;
  audience?: string;
};

export type GeneratedLanding = {
  id: string;
  html: string;
  preview: {
    hero: string;
    subhead: string;
    features: string[];
    cta: string;
    style: LandingStyle;
    accentColor: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  tips: string[];
};

const STYLE_CONFIG: Record<
  LandingStyle,
  { accent: string; bg: string; text: string; card: string; font: string }
> = {
  minimal: {
    accent: "#2563eb",
    bg: "#fafaf9",
    text: "#1c1917",
    card: "#ffffff",
    font: "Inter, system-ui, sans-serif",
  },
  bold: {
    accent: "#dc2626",
    bg: "#fffbeb",
    text: "#1c1917",
    card: "#ffffff",
    font: "Inter, system-ui, sans-serif",
  },
  dark: {
    accent: "#a78bfa",
    bg: "#0c0a09",
    text: "#fafaf9",
    card: "#1c1917",
    font: "Inter, system-ui, sans-serif",
  },
  gradient: {
    accent: "#7c3aed",
    bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)",
    text: "#1e1b4b",
    card: "rgba(255,255,255,0.85)",
    font: "Inter, system-ui, sans-serif",
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function generateLanding(input: GenerateInput): GeneratedLanding {
  const id = slugify(input.productName) || "landing";
  const style = STYLE_CONFIG[input.style];
  const features = input.features.filter(Boolean).slice(0, 6);
  const audience = input.audience || "独立开发者";

  const metaDescription =
    input.description.slice(0, 155) ||
    `${input.productName} — ${input.tagline}。专为 ${audience} 设计。`;

  const featureHtml = features
    .map(
      (f) => `
    <div style="background:${style.card};border:1px solid ${input.style === "dark" ? "#292524" : "#e7e5e4"};border-radius:12px;padding:20px;">
      <div style="font-size:24px;margin-bottom:8px;">✓</div>
      <p style="margin:0;font-weight:600;color:${style.text};">${escapeHtml(f)}</p>
    </div>`
    )
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(input.productName)} — ${escapeHtml(input.tagline)}</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: ${style.font}; background: ${style.bg}; color: ${style.text}; line-height: 1.6; }
    .container { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .hero { text-align: center; padding: 80px 0 60px; }
    .badge { display: inline-block; background: ${style.accent}22; color: ${style.accent}; font-size: 13px; font-weight: 600; padding: 6px 14px; border-radius: 999px; margin-bottom: 20px; }
    h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; letter-spacing: -0.02em; line-height: 1.15; }
    .tagline { font-size: clamp(1.1rem, 2.5vw, 1.35rem); color: ${input.style === "dark" ? "#a8a29e" : "#78716c"}; margin-top: 16px; max-width: 600px; margin-left: auto; margin-right: auto; }
    .cta { display: inline-block; margin-top: 32px; background: ${style.accent}; color: white; font-weight: 600; font-size: 1.1rem; padding: 16px 36px; border-radius: 12px; text-decoration: none; transition: opacity 0.2s; }
    .cta:hover { opacity: 0.9; }
    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; padding: 60px 0; }
    .social-proof { text-align: center; padding: 40px 0 80px; border-top: 1px solid ${input.style === "dark" ? "#292524" : "#e7e5e4"}; }
    .social-proof p { color: ${input.style === "dark" ? "#a8a29e" : "#78716c"}; font-size: 14px; }
    footer { text-align: center; padding: 24px; font-size: 13px; color: ${input.style === "dark" ? "#57534e" : "#a8a29e"}; }
  </style>
</head>
<body>
  <div class="container">
    <section class="hero">
      <span class="badge">专为 ${escapeHtml(audience)} 设计</span>
      <h1>${escapeHtml(input.productName)}</h1>
      <p class="tagline">${escapeHtml(input.tagline)}</p>
      <p style="margin-top:20px;max-width:560px;margin-left:auto;margin-right:auto;color:${input.style === "dark" ? "#d6d3d1" : "#57534e"};">${escapeHtml(input.description)}</p>
      <a href="#signup" class="cta">${escapeHtml(input.ctaText)}</a>
    </section>
    <section class="features">
      ${featureHtml}
    </section>
    <section class="social-proof">
      <p>「${escapeHtml(input.productName)} 帮我 30 分钟上线了 landing page，不用再折腾 Webflow。」</p>
      <p style="margin-top:8px;">— 一位 ${escapeHtml(audience)}</p>
    </section>
  </div>
  <footer>© ${new Date().getFullYear()} ${escapeHtml(input.productName)} · 由 Landing 生成器创建</footer>
</body>
</html>`;

  const tips = [
    `标题「${input.productName}」已含品牌词，建议注册同名 .com 或 .app 域名`,
    `CTA「${input.ctaText}」建议链到真实 signup 表单或 Stripe Checkout`,
    `${input.style} 风格适合 ${input.style === "dark" ? "开发者工具" : input.style === "bold" ? "促销/限时优惠" : "SaaS 产品"}，可在 /studio 切换风格对比`,
    "部署后提交 Google Search Console 并添加 sitemap 加速收录",
  ];

  return {
    id,
    html,
    preview: {
      hero: input.productName,
      subhead: input.tagline,
      features,
      cta: input.ctaText,
      style: input.style,
      accentColor: style.accent,
    },
    meta: {
      title: `${input.productName} — ${input.tagline}`,
      description: metaDescription,
      keywords: [input.productName, ...features.slice(0, 3), "landing page"],
    },
    tips,
  };
}

export const styleOptions: { id: LandingStyle; label: string; desc: string }[] = [
  { id: "minimal", label: "极简", desc: "levelsio / Nomad List 风，白底蓝 accent" },
  { id: "bold", label: "醒目", desc: "暖色背景，适合限时促销" },
  { id: "dark", label: "暗色", desc: "开发者工具标配" },
  { id: "gradient", label: "渐变", desc: "SaaS 现代感，紫色渐变" },
];

export const examplePrompts = [
  {
    name: "SaaS 工具",
    productName: "TaskFlow",
    tagline: "独立开发者的极简项目管理",
    description: "不用 Jira 的复杂，5 分钟上手。Kanban + 时间追踪 + GitHub 集成，$9/月。",
    features: ["无限项目", "GitHub 双向同步", "时间追踪报表", "移动端适配"],
    ctaText: "免费试用 14 天",
    style: "minimal" as LandingStyle,
    audience: "独立开发者",
  },
  {
    name: "AI 产品",
    productName: "WriteAI",
    tagline: "中文 SEO 文章一键生成",
    description: "输入关键词，30 秒生成长尾 SEO 文章。支持批量导出、WordPress 插件。",
    features: ["800+ 字长文", "关键词密度优化", "WordPress 一键发布", "多语言支持"],
    ctaText: "开始写作",
    style: "gradient" as LandingStyle,
    audience: "内容创作者",
  },
  {
    name: "社区产品",
    productName: "IndieCircle",
    tagline: "找到你的 co-founder",
    description: "按技能、时区、阶段匹配 indie hacker。已促成 200+ 项目组队。",
    features: ["技能标签匹配", "时区可视化", "项目 idea 墙", "私密聊天"],
    ctaText: "加入社区",
    style: "dark" as LandingStyle,
    audience: "创业者",
  },
];

export const features = [
  { icon: "⚡", title: "30 秒生成", desc: "输入产品描述，自动生成完整 landing page HTML" },
  { icon: "🎨", title: "4 种风格", desc: "极简、醒目、暗色、渐变 — levelsio 到 SaaS 现代感" },
  { icon: "📤", title: "HTML 导出", desc: "一键复制或下载，部署到 Vercel / Netlify / 自定义域名" },
  { icon: "🔍", title: "SEO 优化", desc: "自动生成 title、description、结构化 meta 标签" },
  { icon: "📱", title: "移动端适配", desc: "响应式布局，clamp 字体，移动端 CTA 友好" },
  { icon: "💡", title: "优化建议", desc: "每次生成附带域名、CTA、部署 actionable tips" },
];

export const testimonials = [
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
];

export const stats = {
  styles: 4,
  avgTime: "30s",
  exports: "HTML",
};
