#!/usr/bin/env node
/**
 * 同步 site-shell 模板到所有站点：深色主题、i18n、用户留言
 * 用法: node scripts/sync-site-shell.mjs [site-id ...]
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  copyFileSync,
  statSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const templateDir = join(root, "templates", "site-shell");
const sitesDir = join(root, "sites");

/** @type {Record<string, object>} */
const SITE_REGISTRY = {
  "nomad-cities": {
    emoji: "🌍",
    name: { en: "Nomad Cities", zh: "游民城市榜" },
    jsonLd: "webApplicationJsonLd",
    guideHref: "/guide/best-digital-nomad-cities",
    nav: [
      { href: "/guide/best-digital-nomad-cities", label: { en: "Guide", zh: "指南" } },
      { href: "/#rankings", label: { en: "Rankings", zh: "排名" } },
    ],
    joinLabel: { en: "Join · $99/yr", zh: "加入会员 · ¥699/年" },
  },
  "ai-headshots": {
    emoji: "📸",
    name: { en: "AI Headshots", zh: "AI 证件照" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/linkedin-headshot",
    nav: [
      { href: "/guide/linkedin-headshot", label: { en: "Guide", zh: "指南" } },
      { href: "/studio", label: { en: "Studio", zh: "工作室" } },
    ],
  },
  "reddit-leads": {
    emoji: "🔍",
    name: { en: "Reddit Leads", zh: "Reddit 线索挖掘" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/reddit-lead-generation-indie-hackers",
    nav: [
      { href: "/guide/reddit-lead-generation-indie-hackers", label: { en: "Guide", zh: "指南" } },
      { href: "/monitor", label: { en: "Monitor", zh: "监控" } },
    ],
  },
  "reddit-watch": {
    emoji: "🔔",
    name: { en: "Reddit Watch", zh: "Reddit 线索监控" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/subwatch-alternative-reddit-monitoring",
    nav: [
      { href: "/guide/subwatch-alternative-reddit-monitoring", label: { en: "Guide", zh: "指南" } },
      { href: "/monitor", label: { en: "Monitor", zh: "监控" } },
    ],
  },
  "remote-jobs": {
    emoji: "💼",
    name: { en: "Remote Jobs", zh: "远程工作板" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/find-remote-job-china",
    nav: [
      { href: "/jobs", label: { en: "Jobs", zh: "职位" } },
      { href: "/post", label: { en: "Post", zh: "发帖" } },
    ],
  },
  "habit-tracker": {
    emoji: "✅",
    name: { en: "Habit Tracker", zh: "习惯打卡" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/join", label: { en: "Pricing", zh: "定价" } }],
  },
  "guilt-free-habits": {
    emoji: "🌱",
    name: { en: "Guilt-Free Habits", zh: "无罪恶感习惯" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/streak-anxiety-habit-tracker-alternative",
    nav: [
      { href: "/guide/streak-anxiety-habit-tracker-alternative", label: { en: "Guide", zh: "指南" } },
      { href: "/track", label: { en: "Track", zh: "追踪" } },
    ],
  },
  "wcag-alt-text": {
    emoji: "♿",
    name: { en: "AltText Pro", zh: "无障碍 Alt 文本" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/wcag-alt-text-compliance",
    nav: [
      { href: "/generate", label: { en: "Generate", zh: "生成" } },
      { href: "/join", label: { en: "Pricing", zh: "定价" } },
    ],
  },
  "startup-ideas": {
    emoji: "💡",
    name: { en: "Startup Ideas", zh: "创业点子库" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/ideas", label: { en: "Ideas", zh: "点子" } }],
  },
  "seo-rank-tracker": {
    emoji: "📈",
    name: { en: "Rank Pulse", zh: "SEO 排名追踪" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/semrush-alternative-indie-hackers",
    nav: [
      { href: "/guide/semrush-alternative-indie-hackers", label: { en: "Guide", zh: "指南" } },
      { href: "/dashboard", label: { en: "Dashboard", zh: "控制台" } },
    ],
  },
  "coworking-finder": {
    emoji: "🏢",
    name: { en: "Coworking Finder", zh: "联合办公 Finder" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/find-coworking-space-digital-nomad",
    nav: [{ href: "/spaces", label: { en: "Spaces", zh: "空间" } }],
  },
  "coworking-daypass": {
    emoji: "🎫",
    name: { en: "Coworking Day Pass", zh: "联合办公日票" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/book-coworking-day-pass-same-day",
    nav: [{ href: "/book", label: { en: "Book", zh: "预订" } }],
  },
  "virtual-cowork-room": {
    emoji: "🎧",
    name: { en: "Virtual Cowork", zh: "远程共工室" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/remote-work-loneliness",
    nav: [
      { href: "/guide/remote-work-loneliness", label: { en: "Guide", zh: "指南" } },
      { href: "/room", label: { en: "Room", zh: "共工室" } },
    ],
  },
  "visa-guide": {
    emoji: "🛂",
    name: { en: "Nomad Visa Guide", zh: "数字游民签证指南" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/digital-nomad-visa-china",
    nav: [
      { href: "/guide/digital-nomad-visa-china", label: { en: "Guide", zh: "指南" } },
      { href: "/visas", label: { en: "Visas", zh: "签证" } },
    ],
  },
  "visa-alert": {
    emoji: "🔔",
    name: { en: "Visa Alert", zh: "签证政策提醒" },
    jsonLd: "webApplicationJsonLd",
    guideHref: "/guide/nomad-visa-policy-change-alerts",
    nav: [
      { href: "/guide/nomad-visa-policy-change-alerts", label: { en: "Guide", zh: "指南" } },
      { href: "/alerts", label: { en: "Alerts", zh: "告警" } },
      { href: "/visas", label: { en: "Policies", zh: "政策" } },
    ],
  },
  "beta-match": {
    emoji: "🧪",
    name: { en: "Beta Match", zh: "早期用户市场" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/find-first-10-beta-users-saas",
    nav: [
      { href: "/guide/find-first-10-beta-users-saas", label: { en: "Guide", zh: "指南" } },
      { href: "/listings", label: { en: "Listings", zh: "招募" } },
    ],
  },
  "indie-tools": {
    emoji: "🧰",
    name: { en: "Indie Tools", zh: "独立开发者工具箱" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/tools", label: { en: "Tools", zh: "工具" } }],
  },
  "alt-stack": {
    emoji: "🔓",
    name: { en: "Alt Stack", zh: "Alt Stack" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/open-source-saas-alternatives",
    nav: [
      { href: "/guide/open-source-saas-alternatives", label: { en: "Guide", zh: "指南" } },
      { href: "/tools", label: { en: "Alternatives", zh: "替代品" } },
    ],
  },
  "meetup-host": {
    emoji: "📍",
    name: { en: "Meetup Host", zh: "线下 Meetup 组织" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/events", label: { en: "Events", zh: "活动" } }],
  },
  "meetup-替代品": {
    emoji: "🚀",
    name: { en: "MeetupAlt", zh: "Meetup 替代品" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/meetup-alternative-indie-organizers",
    nav: [
      { href: "/events", label: { en: "Events", zh: "活动" } },
      { href: "/guide/meetup-alternative-indie-organizers", label: { en: "Guide", zh: "指南" } },
    ],
  },
  "price-tracker": {
    emoji: "📊",
    name: { en: "SaaS Price Tracker", zh: "SaaS 价格追踪" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/track", label: { en: "Track", zh: "追踪" } }],
  },
  "landing-generator": {
    emoji: "🎨",
    name: { en: "Landing Generator", zh: "Landing Page 生成器" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/generate", label: { en: "Generate", zh: "生成" } }],
  },
  "bulk-landing-gen": {
    emoji: "📦",
    name: { en: "Bulk Landing Gen", zh: "批量落地页生成" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/google-ads-keyword-landing-pages",
    nav: [{ href: "/studio", label: { en: "Batch", zh: "批量生成" } }],
  },
  "newsletter-stack": {
    emoji: "📧",
    name: { en: "Newsletter Stack", zh: "Newsletter 工具对比" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/compare", label: { en: "Compare", zh: "对比" } }],
  },
  "carbon-calculator": {
    emoji: "🌱",
    name: { en: "Carbon Calculator", zh: "远程办公碳足迹" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/calc", label: { en: "Calculate", zh: "计算" } }],
  },
  "timezone-planner": {
    emoji: "🌍",
    name: { en: "Timezone Planner", zh: "跨时区会议" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/remote-team-timezone-meeting",
    nav: [
      { href: "/guide/remote-team-timezone-meeting", label: { en: "Guide", zh: "指南" } },
      { href: "/planner", label: { en: "Planner", zh: "规划" } },
    ],
    hero: {
      en: {
        badge: "No more Slack ping-pong · fair meetings in 30s",
        title: "Timezone meetings without the pain",
        subtitle:
          "Add team cities, visualize overlap, get fair slot recommendations with pain scores and rotation hints.",
        ctaPrimary: "Plan free",
        ctaPrimaryHref: "/planner",
        ctaSecondary: "Subscribe · $9.9/mo",
        ctaSecondaryHref: "/join",
        note: "5 free tries · then $9.9/mo",
      },
      zh: {
        badge: "告别 Slack「什么时候方便？」· 30 秒出公平时段",
        title: "跨时区会议，不再折磨任何人",
        subtitle:
          "添加团队成员城市，可视化工作时段重叠，自动推荐最公平的会议时间。含痛苦指数和轮换建议。",
        ctaPrimary: "免费规划",
        ctaPrimaryHref: "/planner",
        ctaSecondary: "订阅 · $9.9/月",
        ctaSecondaryHref: "/join",
        note: "免费体验 5 次 · 之后 $9.9/月",
      },
    },
  },
  "freelance-proposal": {
    emoji: "📝",
    name: { en: "Freelance Proposal", zh: "自由职业报价单" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/proposal", label: { en: "Proposal", zh: "报价" } }],
  },
  "testimonial-wall": {
    emoji: "⭐",
    name: { en: "Testimonial Wall", zh: "独立开发者证言墙" },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/wall", label: { en: "Wall", zh: "证言墙" } }],
  },
  "changelog-hub": {
    emoji: "📣",
    name: { en: "Changelog Hub", zh: "产品更新日志" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/beamer-alternative-indie-changelog",
    nav: [
      { href: "/guide/beamer-alternative-indie-changelog", label: { en: "Guide", zh: "指南" } },
      { href: "/publish", label: { en: "Publish", zh: "发布" } },
    ],
  },
  "og-image-studio": {
    emoji: "🖼️",
    name: { en: "OG Image Studio", zh: "OG 图生成器" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/bannerbear-alternative-og-image",
    nav: [
      { href: "/guide/bannerbear-alternative-og-image", label: { en: "Guide", zh: "指南" } },
      { href: "/studio", label: { en: "Studio", zh: "工作室" } },
    ],
  },
  "uptime-pulse": {
    emoji: "📡",
    name: { en: "Uptime Pulse", zh: "站点 Uptime 监控" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/uptimerobot-alternative-indie-hackers",
    nav: [
      { href: "/guide/uptimerobot-alternative-indie-hackers", label: { en: "Guide", zh: "指南" } },
      { href: "/monitors", label: { en: "Monitors", zh: "监控" } },
    ],
    hero: {
      en: {
        badge: "UptimeRobot 4× hike? · $9.9/mo flat",
        title: "Uptime monitoring for indie hackers",
        subtitle:
          "1-minute checks, Slack alerts, public status pages. No per-monitor fees. 5 free checks, then $9.9/mo.",
        ctaPrimary: "Check a URL free",
        ctaPrimaryHref: "/monitors",
        ctaSecondary: "Subscribe · $9.9/mo",
        ctaSecondaryHref: "/join",
        note: "5 free checks · then $9.9/mo",
      },
      zh: {
        badge: "UptimeRobot 涨价 4 倍？· $9.9/月一口价",
        title: "独立开发者的极简 Uptime 监控",
        subtitle:
          "1 分钟检测、Slack 告警、公开状态页。不按监控数收费。免费体验 5 次检测，之后 $9.9/月。",
        ctaPrimary: "免费检测 URL",
        ctaPrimaryHref: "/monitors",
        ctaSecondary: "订阅 · $9.9/月",
        ctaSecondaryHref: "/join",
        note: "免费体验 5 次 · 之后 $9.9/月",
      },
    },
  },
  "book-pulse": {
    emoji: "📅",
    name: { en: "Book Pulse", zh: "Book Pulse" },
    jsonLd: "softwareApplicationJsonLd",
    guideHref: "/guide/calendly-alternative-indie-hackers",
    nav: [
      { href: "/guide/calendly-alternative-indie-hackers", label: { en: "Guide", zh: "指南" } },
      { href: "/dashboard", label: { en: "Dashboard", zh: "仪表盘" } },
    ],
  },
};

const DARK_REPLACEMENTS = [
  [/bg-stone-50(?![\w-])/g, "bg-background"],
  [/bg-white(?![\w-])/g, "bg-surface"],
  [/text-stone-900/g, "text-foreground"],
  [/text-stone-800/g, "text-foreground"],
  [/text-stone-700/g, "text-foreground"],
  [/text-stone-600/g, "text-muted"],
  [/text-stone-500/g, "text-muted"],
  [/text-stone-400/g, "text-muted"],
  [/text-stone-300/g, "text-muted/60"],
  [/border-stone-200/g, "border-border"],
  [/border-stone-100/g, "border-border"],
  [/border-stone-300/g, "border-border"],
  [/bg-stone-100(?![\w-])/g, "bg-surface-muted"],
  [/hover:bg-stone-100/g, "hover:bg-surface-muted"],
  [/hover:bg-stone-50/g, "hover:bg-surface-muted"],
  [/bg-brand-50/g, "bg-brand-600/10"],
  [/text-brand-700/g, "text-brand-500"],
  [/text-brand-600/g, "text-brand-500"],
  [/hover:text-stone-900/g, "hover:text-foreground"],
  [/hover:text-stone-700/g, "hover:text-foreground"],
];

function copyTemplate(relPath, dest) {
  const src = join(templateDir, relPath);
  if (!existsSync(src)) return;
  const dir = dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  copyFileSync(src, dest);
}

function walkAndDarkify(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walkAndDarkify(path);
      continue;
    }
    if (!/\.(tsx|ts|jsx|js|css)$/.test(name)) continue;
    if (name === "site-meta.ts" || name === "i18n-shared.ts") continue;
    let content = readFileSync(path, "utf8");
    let changed = false;
    for (const [pattern, replacement] of DARK_REPLACEMENTS) {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        changed = true;
      }
    }
    if (changed) writeFileSync(path, content);
  }
}

function patchTailwind(siteDir) {
  const path = join(siteDir, "tailwind.config.ts");
  const content = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#6366f1",
          700: "#4f46e5",
        },
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
`;
  writeFileSync(path, content);
}

function defaultHero(meta) {
  const primaryHref = meta.nav?.[0]?.href || "/join";
  const mk = (nameEn, nameZh) => ({
    badge: "Ship fast · indie SaaS",
    title: nameEn,
    subtitle: `Micro-SaaS for ${nameEn} — free trial, then $9.9/mo.`,
    ctaPrimary: "Try free",
    ctaPrimaryHref: primaryHref,
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo" },
      { stat: "5", label: "free tries" },
      { stat: "1 min", label: "to launch" },
    ],
    productDemo: {
      title: "Product preview",
      caption: "See the core workflow before you sign up",
      preview: "Demo UI mock — replace with your product screenshot or live widget",
    },
    closing: {
      title: "Ready to get started?",
      subtitle: "5 free tries · then $9.9/mo",
      ctaPrimary: "Try free",
      ctaPrimaryHref: primaryHref,
    },
  });
  const en = mk(meta.name.en, meta.name.zh);
  return {
    en,
    zh: {
      badge: "快速上线 · 独立 SaaS",
      title: meta.name.zh,
      subtitle: `${meta.name.zh} — 免费体验 5 次，之后 $9.9/月订阅。`,
      ctaPrimary: "免费体验",
      ctaPrimaryHref: primaryHref,
      ctaSecondary: "订阅 · $9.9/月",
      ctaSecondaryHref: "/join",
      note: "免费体验 5 次 · 之后 $9.9/月",
      stats: [
        { stat: "$9.9", label: "一口价/月" },
        { stat: "5", label: "次免费体验" },
        { stat: "1 分钟", label: "快速上线" },
      ],
      productDemo: {
        title: "产品预览",
        caption: "注册前先看看核心功能长什么样",
        preview: "产品演示 mock — 请替换为截图或实时组件",
      },
      closing: {
        title: "准备好开始了吗？",
        subtitle: "免费体验 5 次 · 之后 $9.9/月",
        ctaPrimary: "免费体验",
        ctaPrimaryHref: primaryHref,
      },
    },
  };
}

function writeCopy(siteDir, meta) {
  const hero = meta.hero || defaultHero(meta);
  writeFileSync(
    join(siteDir, "lib", "copy.ts"),
    `export const homeCopy = ${JSON.stringify(hero, null, 2)} as const;\n`
  );
}

function patchHomePage(siteDir) {
  const pagePath = join(siteDir, "app", "page.tsx");
  if (!existsSync(pagePath)) return;
  let content = readFileSync(pagePath, "utf8");
  if (content.includes("HomeHero")) return;

  if (!content.includes('import { HomeHero }')) {
    const importLine = 'import { HomeHero } from "@/components/HomeHero";\n';
    if (content.startsWith("import ")) {
      content = content.replace(/^(import .+\n)+/, (m) => m + importLine);
    } else {
      content = importLine + content;
    }
  }

  content = content.replace(/<section[\s\S]*?<\/section>\s*/m, "<HomeHero />\n\n");
  writeFileSync(pagePath, content);
}

function writeSiteMeta(siteId, siteDir, meta) {
  const payload = {
    id: siteId,
    emoji: meta.emoji,
    name: meta.name,
    ...(meta.joinLabel ? { joinLabel: meta.joinLabel } : {}),
    nav: meta.nav,
    ...(meta.guideHref ? { guideHref: meta.guideHref } : {}),
  };
  writeFileSync(
    join(siteDir, "lib", "site-meta.ts"),
    `export const siteMeta = ${JSON.stringify(payload, null, 2)} as const;\nexport type SiteMeta = typeof siteMeta;\n`
  );
}

function writeLayout(siteId, siteDir, meta) {
  const jsonLd = meta.jsonLd || "softwareApplicationJsonLd";
  const content = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { FeedbackSection } from "@/components/FeedbackSection";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { loadFeedback } from "@/lib/feedback-store";
import { getLocale } from "@/lib/locale";
import { metadata as siteMetadata, ${jsonLd} } from "@/lib/seo";
import { siteMeta } from "@/lib/site-meta";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const feedback = await loadFeedback(siteMeta.id);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <head>
        <JsonLd data={${jsonLd}()} />
      </head>
      <body className={\`\${inter.variable} font-sans antialiased bg-background text-foreground\`}>
        <SiteHeader meta={siteMeta} locale={locale} />
        <main>{children}</main>
        <FeedbackSection
          siteId={siteMeta.id}
          locale={locale}
          initialMessages={feedback.messages}
        />
        <SiteFooter
          meta={siteMeta}
          locale={locale}
          guideHref={"guideHref" in siteMeta ? siteMeta.guideHref : undefined}
        />
      </body>
    </html>
  );
}
`;
  writeFileSync(join(siteDir, "app", "layout.tsx"), content);
}

function syncSite(siteId) {
  const siteDir = join(sitesDir, siteId);
  if (!existsSync(siteDir)) {
    console.error(`跳过 ${siteId}: 目录不存在`);
    return;
  }

  const meta = SITE_REGISTRY[siteId] || {
    emoji: "🚀",
    name: { en: siteId, zh: siteId },
    jsonLd: "softwareApplicationJsonLd",
    nav: [{ href: "/join", label: { en: "Pricing", zh: "定价" } }],
  };

  copyTemplate("app/globals.css", join(siteDir, "app", "globals.css"));
  copyTemplate("lib/i18n-shared.ts", join(siteDir, "lib", "i18n-shared.ts"));
  copyTemplate("lib/locale.ts", join(siteDir, "lib", "locale.ts"));
  copyTemplate("lib/feedback-store.ts", join(siteDir, "lib", "feedback-store.ts"));
  copyTemplate("lib/site-meta.ts", join(siteDir, "lib", "site-meta.ts"));
  copyTemplate("components/LanguageSwitcher.tsx", join(siteDir, "components", "LanguageSwitcher.tsx"));
  copyTemplate("components/FeedbackSection.tsx", join(siteDir, "components", "FeedbackSection.tsx"));
  copyTemplate("components/SiteShell.tsx", join(siteDir, "components", "SiteShell.tsx"));
  copyTemplate("components/HomeHero.tsx", join(siteDir, "components", "HomeHero.tsx"));
  copyTemplate("lib/api-errors.ts", join(siteDir, "lib", "api-errors.ts"));
  copyTemplate("lib/copy-app.ts", join(siteDir, "lib", "copy-app.ts"));
  copyTemplate("app/api/feedback/route.ts", join(siteDir, "app", "api", "feedback", "route.ts"));

  writeSiteMeta(siteId, siteDir, meta);
  writeCopy(siteDir, meta);
  writeLayout(siteId, siteDir, meta);
  patchHomePage(siteDir);
  patchTailwind(siteDir);
  walkAndDarkify(siteDir);

  console.log(`✓ ${siteId}`);
}

const args = process.argv.slice(2);
const sites =
  args.length > 0
    ? args
    : readdirSync(sitesDir).filter(
        (n) => !n.startsWith(".") && statSync(join(sitesDir, n)).isDirectory()
      );

mkdirSync(join(root, "feedback"), { recursive: true });
if (!existsSync(join(root, "feedback", ".gitkeep"))) {
  writeFileSync(join(root, "feedback", ".gitkeep"), "");
}

for (const siteId of sites) {
  syncSite(siteId);
}

console.log(`\n已同步 ${sites.length} 个站点`);
