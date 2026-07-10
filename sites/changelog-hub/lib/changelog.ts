export type ChangelogEntry = {
  version: string;
  title: string;
  description: string;
  tag: "feature" | "fix" | "improvement" | "breaking";
  date: string;
};

export type ChangelogInput = {
  productName: string;
  tagline: string;
  accentColor: string;
  entries: ChangelogEntry[];
  includeStatusPage: boolean;
};

export type GeneratedChangelog = {
  id: string;
  createdAt: string;
  productName: string;
  tagline: string;
  entries: ChangelogEntry[];
  publicPageHtml: string;
  embedWidgetHtml: string;
  statusPageHtml: string;
  rssXml: string;
};

export const sampleEntries: ChangelogEntry[] = [
  {
    version: "v1.2.0",
    title: "新增暗色模式",
    description: "支持系统级暗色主题切换，护眼更舒适。可在设置中手动切换。",
    tag: "feature",
    date: "2026-06-20",
  },
  {
    version: "v1.1.3",
    title: "修复导出 PDF 乱码",
    description: "修复部分中文字体在 PDF 导出时显示为方框的问题。",
    tag: "fix",
    date: "2026-06-15",
  },
  {
    version: "v1.1.0",
    title: "性能优化",
    description: "首屏加载速度提升 40%，API 响应时间降低至 120ms。",
    tag: "improvement",
    date: "2026-06-10",
  },
];

export const features = [
  {
    icon: "📋",
    title: "一键生成 Changelog 页",
    desc: "输入版本更新记录，秒出可发布的 changelog 公开页",
  },
  {
    icon: "🔌",
    title: "嵌入 Widget",
    desc: "轻量 JS widget，放在产品内让用户随时看更新",
  },
  {
    icon: "🟢",
    title: "状态页片段",
    desc: "附带 uptime 状态页 HTML，incident 时一键发布",
  },
  {
    icon: "📡",
    title: "RSS Feed",
    desc: "自动生成 RSS，方便邮件通知和 ActivityPub 同步",
  },
  {
    icon: "💰",
    title: "$29 vs $49",
    desc: "Beamer $49/月，我们 $29/月全包 changelog + 状态页",
  },
  {
    icon: "⚡",
    title: "10 分钟上线",
    desc: "无需配置数据库，复制 HTML 即可部署到任意托管",
  },
];

export const testimonials = [
  {
    name: "刘洋",
    role: "SaaS 创始人",
    text: "Beamer 涨价到 $49 后果断换过来，changelog 页 10 分钟搞定，MRR $1.2k 阶段完全够用。",
  },
  {
    name: "Tom Wright",
    role: "Indie Hacker",
    text: "Finally a changelog tool that doesn't charge per MAU. $29 flat is perfect for bootstrapped products.",
  },
  {
    name: "赵婷",
    role: "独立开发者",
    text: "嵌入 widget 只有 3KB，不影响 Core Web Vitals，用户反馈更新通知打开率 +35%。",
  },
];

const tagLabels: Record<ChangelogEntry["tag"], string> = {
  feature: "新功能",
  fix: "修复",
  improvement: "优化",
  breaking: "破坏性变更",
};

const tagColors: Record<ChangelogEntry["tag"], string> = {
  feature: "#2563eb",
  fix: "#dc2626",
  improvement: "#16a34a",
  breaking: "#ea580c",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDate(date: string): string {
  try {
    return new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
}

export function generateChangelog(input: ChangelogInput): GeneratedChangelog {
  const id = `CL-${Date.now().toString(36).toUpperCase()}`;
  const now = new Date();
  const entries = input.entries.filter((e) => e.title.trim());

  const entryCards = entries
    .map(
      (e) => `
    <article style="border-bottom:1px solid #e7e5e4;padding:24px 0;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap;">
        <span style="font-family:ui-monospace,monospace;font-size:14px;font-weight:600;color:#1c1917;">${escapeHtml(e.version)}</span>
        <span style="background:${tagColors[e.tag]}15;color:${tagColors[e.tag]};font-size:12px;font-weight:600;padding:2px 8px;border-radius:9999px;">${tagLabels[e.tag]}</span>
        <time style="font-size:13px;color:#a8a29e;margin-left:auto;">${formatDate(e.date)}</time>
      </div>
      <h3 style="font-size:18px;font-weight:600;color:#1c1917;margin:0 0 8px;">${escapeHtml(e.title)}</h3>
      <p style="color:#57534e;font-size:15px;line-height:1.6;margin:0;">${escapeHtml(e.description)}</p>
    </article>`
    )
    .join("\n");

  const publicPageHtml = `<!-- Changelog · ${escapeHtml(input.productName)} -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(input.productName)} 更新日志</title>
  <link rel="alternate" type="application/rss+xml" title="${escapeHtml(input.productName)} Changelog RSS" href="/changelog.rss">
</head>
<body style="font-family:system-ui,sans-serif;background:#fafaf9;margin:0;padding:0;">
  <header style="background:#fff;border-bottom:1px solid #e7e5e4;padding:32px 16px;text-align:center;">
    <h1 style="font-size:32px;font-weight:700;color:#1c1917;margin:0 0 8px;">${escapeHtml(input.productName)}</h1>
    <p style="color:#78716c;font-size:16px;margin:0;">${escapeHtml(input.tagline)}</p>
  </header>
  <main style="max-width:680px;margin:0 auto;padding:0 16px 48px;">
${entryCards}
  </main>
  <footer style="text-align:center;padding:24px;font-size:12px;color:#a8a29e;">
    Powered by Indie Changelog 发布台
  </footer>
</body>
</html>`;

  const latestEntry = entries[0];
  const embedWidgetHtml = `<!-- Changelog Widget · ${escapeHtml(input.productName)} -->
<div id="changelog-widget" style="font-family:system-ui,sans-serif;max-width:360px;border:1px solid #e7e5e4;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06);">
  <div style="background:${input.accentColor};color:#fff;padding:12px 16px;font-weight:600;font-size:14px;">
    🎉 最新更新${latestEntry ? ` · ${escapeHtml(latestEntry.version)}` : ""}
  </div>
  <div style="padding:16px;background:#fff;">
    ${latestEntry ? `<p style="margin:0 0 8px;font-weight:600;color:#1c1917;font-size:15px;">${escapeHtml(latestEntry.title)}</p><p style="margin:0 0 12px;color:#57534e;font-size:13px;line-height:1.5;">${escapeHtml(latestEntry.description)}</p>` : "<p style='margin:0;color:#78716c;font-size:13px;'>暂无更新</p>"}
    <a href="/changelog" style="color:${input.accentColor};font-size:13px;font-weight:600;text-decoration:none;">查看全部更新 →</a>
  </div>
</div>`;

  const statusPageHtml = input.includeStatusPage
    ? `<!-- Status Page · ${escapeHtml(input.productName)} -->
<section style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;padding:24px 16px;">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
    <span style="width:12px;height:12px;background:#16a34a;border-radius:50%;display:inline-block;"></span>
    <h2 style="font-size:20px;font-weight:600;color:#1c1917;margin:0;">所有系统运行正常</h2>
  </div>
  <div style="border:1px solid #e7e5e4;border-radius:12px;overflow:hidden;">
    ${["API 服务", "Web 应用", "数据库", "CDN"].map(
      (svc) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid #f5f5f4;">
      <span style="color:#44403c;font-size:14px;">${svc}</span>
      <span style="color:#16a34a;font-size:13px;font-weight:600;">✓ 正常 · 99.9%</span>
    </div>`
    ).join("")}
  </div>
  <p style="text-align:center;margin-top:16px;font-size:12px;color:#a8a29e;">最后检查：${now.toLocaleString("zh-CN")}</p>
</section>`
    : "";

  const rssItems = entries
    .map(
      (e) => `  <item>
    <title>${escapeHtml(e.version)}: ${escapeHtml(e.title)}</title>
    <description>${escapeHtml(e.description)}</description>
    <pubDate>${new Date(e.date).toUTCString()}</pubDate>
    <guid>${escapeHtml(e.version)}</guid>
  </item>`
    )
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeHtml(input.productName)} Changelog</title>
  <description>${escapeHtml(input.tagline)}</description>
  <lastBuildDate>${now.toUTCString()}</lastBuildDate>
${rssItems}
</channel>
</rss>`;

  return {
    id,
    createdAt: now.toISOString(),
    productName: input.productName,
    tagline: input.tagline,
    entries,
    publicPageHtml,
    embedWidgetHtml,
    statusPageHtml,
    rssXml,
  };
}
