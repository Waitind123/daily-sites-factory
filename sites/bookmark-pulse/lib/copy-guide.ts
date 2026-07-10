import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Pocket Alternative for Indie Hackers — Minimal Bookmark Manager Guide",
      description:
        "Mozilla shut down Pocket in 2025. Compare Raindrop, Pinboard, Linkwarden, and booooookmarks. Find a $29/mo flat-rate bookmark manager without AI second-brain bloat.",
    },
    h1: "2026 Pocket Alternative for Indie Hackers: Minimal Bookmark Manager Guide",
    updated: "Updated July 2026 · 12 min read",
    intro: [
      "In May 2025, Mozilla shut down Pocket — the read-it-later service millions of indie hackers used daily to save articles, tutorials, and competitor landing pages. If you relied on Pocket's one-click save and clean reading view, you suddenly needed a replacement.",
      "The problem? Most alternatives want to be your \"second brain.\" Raindrop locks AI tagging behind $28/mo. Notion Web Clipper pulls everything into a workspace you didn't ask for. Pinboard works but looks like 2009. Linkwarden is excellent if you want to self-host Docker containers on a VPS.",
      "On Indie Hackers, the founder of booooookmarks wrote: \"When Mozilla killed Pocket, I went looking for a replacement and didn't love what I found. I just wanted somewhere to throw URLs.\" Another HN commenter said: \"I wish there was a tool that saves links, shows favicons, lets me share a folder publicly, and costs less than a coffee — without AI features I'll never use.\"",
      "This guide compares 2026 bookmark managers for solo founders, what actually matters at indie scale, and how to migrate your Pocket saves without paying enterprise prices or running your own server.",
    ],
    sections: [
      {
        h2: "Why indie hackers still need a bookmark manager",
        paragraphs: [
          "Browser tabs are not a storage strategy. You find a great SaaS pricing page, a Hacker News thread about churn, a Stripe docs page — you save it \"for later\" and three weeks later you can't find it among 47 open tabs.",
          "A dedicated bookmark manager gives you: persistent storage across devices, full-text or title search, folders for project context, and public share links for resource lists you send to newsletter subscribers or beta users.",
        ],
        list: [
          "Save competitor landing pages for pricing research",
          "Curate tool lists to share with your audience",
          "Keep tutorial links organized by project",
          "Replace Pocket's read-it-later workflow with a simpler save-and-find pattern",
        ],
        after: [
          "At solo scale, you don't need AI auto-tagging, team permissions, or bidirectional Notion sync. You need: paste URL, get title + favicon, search fast, share a folder when needed.",
        ],
      },
      {
        h2: "2026 bookmark tools compared",
        tools: [
          {
            h3: "Raindrop.io — $28+/mo for Pro",
            p: "Beautiful UI, collections, highlights. But AI features and advanced search sit behind expensive tiers. Great for designers who want visual collections; heavy for a solo dev saving 20 links a week.",
          },
          {
            h3: "Pinboard — $22/year",
            p: "Fast, reliable, no nonsense. The UI hasn't changed in a decade — which some love and others abandon immediately. No public folder sharing without extra setup.",
          },
          {
            h3: "Linkwarden — self-hosted or $4/mo cloud",
            p: "Open-source, saves PDF snapshots, collaborative. Excellent if you enjoy DevOps. Overkill if you just want to save a URL and find it Tuesday.",
          },
          {
            h3: "booooookmarks — $4/mo",
            p: "Post-Pocket minimalist saver with screenshots and ⌘K search. Strong competitor at $4/mo. Public folders, PWA, no AI.",
          },
          {
            h3: "Bookmark Pulse — $29/mo flat",
            p: "Built for indie hackers: save URLs with auto favicon, one-level folders, public share pages, instant search. 5 free saves, then $29/mo unlimited. No AI second brain, no per-seat fees.",
            link: { href: "/bookmarks", text: "Save a link free", suffix: " — five saves, no credit card." },
          },
        ],
      },
      {
        h2: "What to look for in a Pocket replacement",
        paragraphs: ["Skip the feature bloat. Prioritize these:"],
        ordered: [
          "Auto title + favicon on save — you shouldn't type metadata manually",
          "Fast search — ⌘K or instant filter across all saved links",
          "Public folder sharing — one URL for your \"tools I use\" list",
          "Flat pricing — no surprise per-seat or AI upsells",
          "Mobile-friendly PWA — save from phone without a native app",
        ],
        after: [
          "Read-it-later with full article extraction is nice but optional. Many indie hackers switched to \"save link + open when needed\" after Pocket died, because article parsing breaks on paywalled sites anyway.",
        ],
      },
      {
        h2: "Migrate from Pocket in 10 minutes",
        paragraphs: ["The fastest path after Pocket export:"],
        ordered: [
          "Export your Pocket saves as HTML from Mozilla's shutdown page (or use an existing export file)",
          "Create folders matching your old Pocket tags — \"SaaS\", \"Marketing\", \"Dev Tools\"",
          "Bulk paste URLs into your new manager (Bookmark Pulse accepts paste-save)",
          "Pick your top 20 links and verify titles look correct",
          "Create one public folder for links you share externally",
        ],
        afterLink: {
          href: "/bookmarks",
          label: "Bookmark Pulse",
          prefix: "Use ",
          suffix: " to save your first five links free. No import tool required — paste URLs one by one or in batches.",
        },
      },
      {
        h2: "SEO and distribution for bookmark tools",
        paragraphs: [
          "Long-tail content like \"Pocket alternative indie hacker\" and \"minimal bookmark manager 2026\" ranks within 1–3 months on a custom domain. Submit your sitemap to Google Search Console.",
          "Distribution channels: Product Hunt launch (\"Pocket is dead — here's what I built\"), Hacker News Show HN, Reddit r/SideProject and r/SaaS, Twitter/X thread on your migration story, Indie Hackers milestone post.",
          "The Pocket shutdown created a permanent search demand spike. Founders who ship now capture users actively searching for replacements.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try Bookmark Pulse free",
          prefix: "Pocket is gone. Raindrop and Notion want to be your entire workflow. If you need save URL, search fast, share folders, and $29/mo flat pricing, ",
          suffix: ". Five saves, no credit card. Stop losing links in browser tabs.",
        },
      },
    ],
    cta: {
      title: "Ready to replace Pocket?",
      subtitle: "5 free saves · unlimited bookmarks after subscribe",
      button: "Save your first link",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Pocket 替代品指南 — 极简书签管理",
      description:
        "Mozilla 2025 年关停 Pocket。对比 Raindrop、Pinboard、Linkwarden 与 booooookmarks，找到 $29/月 一口价、无 AI 第二大脑冗余的书签工具。",
    },
    h1: "2026 独立开发者 Pocket 替代品：极简书签管理完整指南",
    updated: "更新于 2026 年 7 月 · 阅读约 12 分钟",
    intro: [
      "2025 年 5 月，Mozilla 关停了 Pocket —— 数百万独立开发者每天用来保存文章、教程和竞品落地页的工具。如果你依赖 Pocket 的一键保存和干净阅读视图，突然就需要找替代品。",
      "问题是：多数替代品都想当你的「第二大脑」。Raindrop 把 AI 标签锁在 $28/月 后面，Notion Web Clipper 把一切都拖进你没要求的工作区，Pinboard 能用但界面像 2009 年，Linkwarden 很好但你要自己在 VPS 上跑 Docker。",
      "Indie Hackers 上 booooookmarks 创始人写道：「Mozilla 关了 Pocket 后我找替代品，都不太满意。我只想要一个扔链接的地方。」HN 上也有人评论：「希望有个工具能存链接、显示图标、公开分享文件夹、比一杯咖啡便宜 —— 不要我用不上的 AI 功能。」",
      "本指南对比 2026 年适合独立开发者的书签工具、一人规模真正需要什么，以及如何在不付企业价、不自己运维服务器的情况下迁移 Pocket 数据。",
    ],
    sections: [
      {
        h2: "为什么独立开发者仍需要书签管理",
        paragraphs: [
          "浏览器标签不是存储策略。你发现很好的 SaaS 定价页、关于流失的 HN 帖、Stripe 文档 —— 你「稍后看」存下来，三周后在 47 个标签里找不到了。",
          "专用书签管理器给你：跨设备持久存储、全文或标题搜索、按项目分文件夹、以及发给 Newsletter 读者或 Beta 用户的公开分享链接。",
        ],
        list: [
          "保存竞品落地页做定价调研",
          "整理工具清单分享给受众",
          "按项目组织教程链接",
          "用更简单的「存链接 + 需要时再打开」替代 Pocket 稍后读流程",
        ],
        after: [
          "一人规模不需要 AI 自动标签、团队权限或双向 Notion 同步。你需要的是：粘贴链接、得标题和图标、快速搜索、必要时分享文件夹。",
        ],
      },
      {
        h2: "2026 年书签工具对比",
        tools: [
          {
            h3: "Raindrop.io — Pro 要 $28+/月",
            p: "界面漂亮、合集、高亮。但 AI 和高级搜索在贵档后面。适合想要视觉化合集的设计师；对每周存 20 个链接的独立开发者来说偏重。",
          },
          {
            h3: "Pinboard — $22/年",
            p: "快、可靠、不废话。界面十年没变 —— 有人爱有人立刻放弃。公开文件夹分享要额外配置。",
          },
          {
            h3: "Linkwarden — 自托管或云端 $4/月",
            p: "开源、存 PDF 快照、可协作。喜欢 DevOps 的很合适。若你只是存个链接周二再找，就太重了。",
          },
          {
            h3: "booooookmarks — $4/月",
            p: "Pocket 关停后的极简保存器，带截图和 ⌘K 搜索。$4/月 的有力竞品。公开文件夹、PWA、无 AI。",
          },
          {
            h3: "Bookmark Pulse — $29/月 一口价",
            p: "为独立开发者打造：保存链接自动抓图标、单层文件夹、公开分享页、即时搜索。免费 5 次，之后 $29/月 不限量。无 AI 第二大脑、无按席位收费。",
            link: { href: "/bookmarks", text: "免费保存链接", suffix: " — 五次保存，无需信用卡。" },
          },
        ],
      },
      {
        h2: "Pocket 替代品该看什么",
        paragraphs: ["跳过功能膨胀，优先这些："],
        ordered: [
          "保存时自动标题 + 图标 —— 不应手填元数据",
          "快速搜索 —— ⌘K 或全站即时过滤",
          "公开文件夹分享 —— 一个链接发「我在用的工具」清单",
          "一口价 —— 无按席位或 AI 加价惊喜",
          "移动端友好 PWA —— 手机保存无需原生 App",
        ],
        after: [
          "全文提取的稍后读很好但非必须。Pocket 死后很多独立开发者改用「存链接 + 需要时打开」，因为付费墙站点的文章解析本来就会坏。",
        ],
      },
      {
        h2: "10 分钟从 Pocket 迁移",
        paragraphs: ["Pocket 导出后最快路径："],
        ordered: [
          "从 Mozilla 关停页导出 Pocket 为 HTML（或使用已有导出文件）",
          "按旧 Pocket 标签建文件夹 ——「SaaS」「营销」「开发工具」",
          "批量粘贴链接到新管理器（Bookmark Pulse 支持粘贴保存）",
          "检查前 20 条链接标题是否正确",
          "建一个对外分享的公开文件夹",
        ],
        afterLink: {
          href: "/bookmarks",
          label: "Bookmark Pulse",
          prefix: "用",
          suffix: "免费保存前五个链接。无需导入工具 —— 逐条或批量粘贴 URL 即可。",
        },
      },
      {
        h2: "书签工具的 SEO 与分发",
        paragraphs: [
          "「Pocket 替代品 独立开发者」「极简书签管理 2026」等长尾词在自定义域名下 1–3 个月可排名。向 Google Search Console 提交 sitemap。",
          "分发渠道：Product Hunt（「Pocket 死了 —— 我做了这个」）、Hacker News Show HN、Reddit r/SideProject 和 r/SaaS、推特发迁移故事、Indie Hackers 里程碑帖。",
          "Pocket 关停造成了持久的搜索需求高峰。现在 ship 的产品能接住正在主动找替代品的用户。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用 Bookmark Pulse",
          prefix: "Pocket 没了。Raindrop 和 Notion 想包办你整个工作流。若你需要存链接、快速搜索、分享文件夹、$29/月 一口价，可",
          suffix: "。五次保存，无需信用卡。别再让链接消失在浏览器标签里。",
        },
      },
    ],
    cta: {
      title: "准备好替代 Pocket 了吗？",
      subtitle: "免费 5 次 · 订阅后书签不限量",
      button: "保存第一个链接",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
