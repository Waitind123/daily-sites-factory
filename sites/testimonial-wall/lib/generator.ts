export type TestimonialInput = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type WallInput = {
  productName: string;
  tagline: string;
  testimonials: TestimonialInput[];
  layout: "grid" | "carousel" | "masonry";
  accentColor: string;
};

export type GeneratedWall = {
  id: string;
  createdAt: string;
  productName: string;
  tagline: string;
  layout: string;
  testimonials: TestimonialInput[];
  embedHtml: string;
  collectionEmailTemplate: string;
  previewUrl: string;
};

export const sampleTestimonials: TestimonialInput[] = [
  {
    name: "李明",
    role: "独立开发者 · SaaS",
    text: "证言墙帮我 10 分钟搞定 landing page 社交证明，比 Testimonial.to 便宜 4 倍。",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Indie Hacker",
    text: "Finally a testimonial tool that doesn't charge $40/mo just to remove branding.",
    rating: 5,
  },
  {
    name: "王芳",
    role: "产品经理",
    text: "嵌入代码两行搞定，页面加载快，客户好评转化率明显提升。",
    rating: 5,
  },
];

export const features = [
  {
    icon: "💬",
    title: "一键生成证言墙",
    desc: "输入用户好评，秒出可嵌入的 Wall of Love HTML",
  },
  {
    icon: "📧",
    title: "收集邮件模板",
    desc: "自动生成向客户索要好评的邮件文案，复制即用",
  },
  {
    icon: "🎨",
    title: "三种布局",
    desc: "网格、轮播、瀑布流，适配不同 landing page 风格",
  },
  {
    icon: "⚡",
    title: "极速加载",
    desc: "纯 HTML/CSS 嵌入，无第三方 JS，不影响 Core Web Vitals",
  },
  {
    icon: "💰",
    title: "$9.9 vs $40",
    desc: "Testimonial.to 去品牌 $40/月，我们 $9.9/月全包",
  },
  {
    icon: "🔒",
    title: "数据在你手里",
    desc: "证言内容本地生成，不存储敏感客户信息",
  },
];

export const testimonials = [
  {
    name: "张明",
    role: "独立开发者",
    text: "MRR $800 时付 $40/月要证言去品牌太肉疼，证言墙 $9.9 完全够用。",
  },
  {
    name: "Alex Kim",
    role: "Bootstrapped Founder",
    text: "Shipped my wall of love in 5 minutes. Embed code just works.",
  },
  {
    name: "陈悦",
    role: "Side Project 作者",
    text: "收集邮件模板帮我多拿了 12 条好评，landing 转化率 +23%。",
  },
];

function stars(rating: number): string {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function generateWall(input: WallInput): GeneratedWall {
  const id = `WALL-${Date.now().toString(36).toUpperCase()}`;
  const now = new Date();
  const items = input.testimonials.filter((t) => t.text.trim());

  const cards = items
    .map(
      (t) => `
    <div style="background:#fff;border:1px solid #e7e5e4;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,.06);">
      <div style="color:${input.accentColor};font-size:14px;letter-spacing:2px;margin-bottom:8px;">${stars(t.rating)}</div>
      <p style="color:#44403c;font-size:15px;line-height:1.6;margin:0 0 12px;">&ldquo;${escapeHtml(t.text)}&rdquo;</p>
      <div style="font-size:13px;">
        <strong style="color:#1c1917;">${escapeHtml(t.name)}</strong>
        <span style="color:#a8a29e;"> · ${escapeHtml(t.role)}</span>
      </div>
    </div>`
    )
    .join("\n");

  const gridStyle =
    input.layout === "carousel"
      ? "display:flex;gap:16px;overflow-x:auto;padding-bottom:8px;"
      : input.layout === "masonry"
        ? "columns:2;column-gap:16px;"
        : "display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;";

  const embedHtml = `<!-- 证言墙 · ${escapeHtml(input.productName)} -->
<section style="font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px 16px;">
  <header style="text-align:center;margin-bottom:32px;">
    <h2 style="font-size:28px;font-weight:700;color:#1c1917;margin:0 0 8px;">${escapeHtml(input.productName)}</h2>
    <p style="color:#78716c;font-size:16px;margin:0;">${escapeHtml(input.tagline)}</p>
  </header>
  <div style="${gridStyle}">
${cards}
  </div>
  <p style="text-align:center;margin-top:24px;font-size:12px;color:#a8a29e;">Powered by 证言墙</p>
</section>`;

  const collectionEmailTemplate = `主题：能帮我写一句产品使用感受吗？🙏

Hi {客户名},

我是 ${input.productName} 的开发者。看到你一直在用我们的产品，非常开心！

能否花 2 分钟帮我写一句使用感受？我会展示在官网的「用户证言墙」上，帮助更多像你一样的用户发现我们。

请回复以下格式（或直接用自己的话）：
- 你的名字 / 职位
- 1-3 句真实感受
- 1-5 星评分

非常感谢！
— ${input.productName} 团队`;

  return {
    id,
    createdAt: now.toISOString(),
    productName: input.productName,
    tagline: input.tagline,
    layout: input.layout,
    testimonials: items,
    embedHtml,
    collectionEmailTemplate,
    previewUrl: `/wall/${id.toLowerCase()}`,
  };
}
