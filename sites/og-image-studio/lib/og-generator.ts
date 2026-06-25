export type OgTemplate = "minimal" | "product" | "blog" | "gradient" | "dark";

export type OgInput = {
  title: string;
  subtitle?: string;
  author?: string;
  badge?: string;
  accentColor: string;
  bgColor?: string;
  template: OgTemplate;
};

export type GeneratedOg = {
  svg: string;
  dataUrl: string;
  width: number;
  height: number;
  metaTagsHtml: string;
  nextJsSnippet: string;
  htmlImgTag: string;
};

const W = 1200;
const H = 630;

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function titleLines(title: string): string[] {
  if (title.length <= 28) return [title];
  return wrapText(title, 22);
}

function subtitleLines(subtitle: string): string[] {
  if (!subtitle) return [];
  if (subtitle.length <= 50) return [subtitle];
  return wrapText(subtitle, 40).slice(0, 2);
}

function renderTitleLines(lines: string[], yStart: number, fill: string, size = 56): string {
  return lines
    .map(
      (line, i) =>
        `<text x="80" y="${yStart + i * (size + 12)}" font-family="system-ui, -apple-system, sans-serif" font-size="${size}" font-weight="700" fill="${fill}">${escapeXml(line)}</text>`
    )
    .join("\n");
}

function renderSubtitleLines(lines: string[], yStart: number, fill: string): string {
  return lines
    .map(
      (line, i) =>
        `<text x="80" y="${yStart + i * 36}" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="${fill}" opacity="0.85">${escapeXml(line)}</text>`
    )
    .join("\n");
}

function templateMinimal(input: OgInput): string {
  const { title, subtitle, accentColor } = input;
  const tLines = titleLines(title);
  const sLines = subtitleLines(subtitle || "");
  const subY = 200 + tLines.length * 68;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fafaf9"/>
      <stop offset="100%" stop-color="#f5f5f4"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="8" height="${H}" fill="${accentColor}"/>
  ${renderTitleLines(tLines, 200, "#1c1917")}
  ${renderSubtitleLines(sLines, subY, "#57534e")}
  <text x="80" y="${H - 60}" font-family="system-ui, sans-serif" font-size="20" fill="#a8a29e">og-image.studio</text>
</svg>`;
}

function templateProduct(input: OgInput): string {
  const { title, subtitle, accentColor, badge } = input;
  const tLines = titleLines(title);
  const sLines = subtitleLines(subtitle || "");
  const subY = 280 + tLines.length * 68;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="0" width="${W}" height="12" fill="${accentColor}"/>
  <rect x="80" y="100" rx="20" ry="20" width="${Math.min(escapeXml(badge || "Product").length * 14 + 40, 300)}" height="40" fill="${accentColor}" opacity="0.12"/>
  <text x="100" y="128" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="${accentColor}">${escapeXml(badge || "Product")}</text>
  ${renderTitleLines(tLines, 200, "#1c1917", 52)}
  ${renderSubtitleLines(sLines, subY, "#78716c")}
  <circle cx="${W - 120}" cy="${H - 100}" r="60" fill="${accentColor}" opacity="0.15"/>
  <circle cx="${W - 120}" cy="${H - 100}" r="30" fill="${accentColor}"/>
</svg>`;
}

function templateBlog(input: OgInput): string {
  const { title, subtitle, accentColor, author } = input;
  const tLines = titleLines(title);
  const sLines = subtitleLines(subtitle || "");
  const subY = 260 + tLines.length * 68;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#fafaf9"/>
  <rect x="60" y="60" width="${W - 120}" height="${H - 120}" rx="16" fill="#ffffff" stroke="#e7e5e4" stroke-width="2"/>
  <text x="100" y="130" font-family="system-ui, sans-serif" font-size="16" font-weight="500" fill="${accentColor}">📝 BLOG</text>
  ${renderTitleLines(tLines, 200, "#1c1917", 48)}
  ${renderSubtitleLines(sLines, subY, "#78716c")}
  <text x="100" y="${H - 100}" font-family="system-ui, sans-serif" font-size="18" fill="#a8a29e">${escapeXml(author || "作者")}</text>
</svg>`;
}

function templateGradient(input: OgInput): string {
  const { title, subtitle, accentColor } = input;
  const tLines = titleLines(title);
  const sLines = subtitleLines(subtitle || "");
  const subY = 260 + tLines.length * 72;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accentColor}"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#grad)"/>
  <circle cx="1000" cy="100" r="200" fill="#ffffff" opacity="0.05"/>
  <circle cx="200" cy="500" r="150" fill="#ffffff" opacity="0.05"/>
  ${renderTitleLines(tLines, 220, "#ffffff", 58)}
  ${renderSubtitleLines(sLines, subY, "#e7e5e4")}
</svg>`;
}

function templateDark(input: OgInput): string {
  const { title, subtitle, accentColor } = input;
  const tLines = titleLines(title);
  const sLines = subtitleLines(subtitle || "");
  const subY = 260 + tLines.length * 72;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0c0a09"/>
  <rect x="80" y="80" width="60" height="4" fill="${accentColor}"/>
  ${renderTitleLines(tLines, 220, "#fafaf9", 56)}
  ${renderSubtitleLines(sLines, subY, "#a8a29e")}
  <text x="80" y="${H - 80}" font-family="monospace" font-size="16" fill="#57534e">${escapeXml(subtitle ? subtitle.slice(0, 40) : "indie hacker tools")}</text>
</svg>`;
}

const templates: Record<OgTemplate, (input: OgInput) => string> = {
  minimal: templateMinimal,
  product: templateProduct,
  blog: templateBlog,
  gradient: templateGradient,
  dark: templateDark,
};

export function generateOgImage(input: OgInput): GeneratedOg {
  const svg = templates[input.template](input);
  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  const title = escapeXml(input.title);
  const description = escapeXml(input.subtitle || input.title);

  const metaTagsHtml = `<!-- OG Image Meta Tags -->
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${dataUrl}" />
<meta property="og:image:width" content="${W}" />
<meta property="og:image:height" content="${H}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${dataUrl}" />`;

  const nextJsSnippet = `// app/layout.tsx or page metadata
export const metadata = {
  openGraph: {
    title: "${input.title.replace(/"/g, '\\"')}",
    description: "${(input.subtitle || input.title).replace(/"/g, '\\"')}",
    images: [{ url: "/api/og?title=${encodeURIComponent(input.title)}", width: ${W}, height: ${H} }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${input.title.replace(/"/g, '\\"')}",
    images: ["/api/og?title=${encodeURIComponent(input.title)}"],
  },
};`;

  const htmlImgTag = `<img src="${dataUrl}" alt="${title}" width="${W}" height="${H}" />`;

  return { svg, dataUrl, width: W, height: H, metaTagsHtml, nextJsSnippet, htmlImgTag };
}

export const templateOptions: { id: OgTemplate; name: string; desc: string }[] = [
  { id: "minimal", name: "极简", desc: "干净留白，适合 SaaS 落地页" },
  { id: "product", name: "产品", desc: "带产品标签，适合 Product Hunt 发布" },
  { id: "blog", name: "博客", desc: "文章卡片风格，适合技术博客" },
  { id: "gradient", name: "渐变", desc: "品牌色渐变，适合社交媒体" },
  { id: "dark", name: "暗色", desc: "开发者风格，适合 dev tools" },
];

export const features = [
  { icon: "🖼️", title: "5 种模板", desc: "极简、产品、博客、渐变、暗色，覆盖 indie 常见场景" },
  { icon: "⚡", title: "即时生成", desc: "纯 SVG 渲染，无需 Puppeteer，毫秒级出图" },
  { icon: "📋", title: "Meta 标签导出", desc: "一键复制 og:image、twitter:card 完整 HTML" },
  { icon: "💻", title: "Next.js 片段", desc: "直接粘贴到 metadata.openGraph 配置" },
  { icon: "🎨", title: "自定义品牌色", desc: "主题色、副标题、产品标签随心配" },
  { icon: "📐", title: "标准 1200×630", desc: "符合 Twitter、LinkedIn、Facebook 推荐尺寸" },
];

export const testimonials = [
  {
    name: "小林",
    role: "Indie Hacker",
    text: "Product Hunt 发布前 10 分钟搞定 OG 图，比 Bannerbear 省 $49/月。",
  },
  {
    name: "Amy",
    role: "SaaS 创始人",
    text: "博客每篇文章都能快速生成分享图，SEO 点击率明显提升。",
  },
  {
    name: "老王",
    role: "全栈开发者",
    text: "导出的 meta 标签直接粘贴，不用折腾 @vercel/og 配置了。",
  },
];
