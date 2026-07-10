import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Changelog to Social Posts Guide for Indie Hackers",
      description:
        "PushToPost starts at $9/mo and requires GitHub access. Compare changelog-to-social tools for indie SaaS releases. Find a $29/mo flat-rate tool that converts release notes to X, LinkedIn, and Threads.",
    },
    h1: "2026 Changelog to Social Posts: Indie Hacker Release Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "Every ship day, indie hackers face the same ritual: write release notes, then rewrite them for X, LinkedIn, and Threads. Same features. Three different formats. Forty minutes gone — time you could spend fixing bugs or talking to users.",
      "PushToPost, BuildCast, and SmashLanding solved this by connecting to GitHub. Push a commit, get social drafts. Smart workflow — but it requires OAuth access, webhook setup, and $9–19/month before you've validated the product.",
      "Many solo founders don't want another integration in week one. They have a changelog in Notion, a GitHub release draft, or bullet points in a text file. They need: paste notes, get platform-native posts, copy and ship. No GitHub permissions required.",
      "On r/SideProject and Indie Hackers, founders repeatedly ask: \"How do you announce releases on multiple platforms without rewriting everything?\" Another wrote: \"I wish there was a tool that turns my changelog into Twitter and LinkedIn posts automatically.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 changelog-to-social tools for solo founders, what platform-native release posts actually mean, and how to pick a tool that won't eat your ship-day budget.",
    ],
    sections: [
      {
        h2: "Why release posts need platform-native formatting",
        paragraphs: ["A single copy-paste of your changelog fails because:"],
        list: [
          "X limits you to 280 characters — release hooks need version tags and bullet truncation",
          "LinkedIn rewards professional framing with arrow bullets and engagement CTAs",
          "Threads works best as numbered thread format, not a wall of changelog text",
          "Each platform's audience expects different tone — casual on X, professional on LinkedIn",
          "Copy-paste detection reduces reach on all three platforms",
        ],
        after: [
          "The classic indie ship-day stack: write release notes once, adapt for each platform, post within 30 minutes, get back to building. You don't need a social media manager. You need: version detection, bullet parsing, and one-click copy.",
        ],
      },
      {
        h2: "2026 changelog-to-social tools compared",
        tools: [
          {
            h3: "PushToPost — $9+/mo",
            p: "GitHub webhook integration. Auto-generates X, LinkedIn, Bluesky, Discord posts from commits. Great for teams shipping daily. Requires GitHub OAuth and repo access.",
          },
          {
            h3: "BuildCast — free tier + $19/mo",
            p: "13 platforms from GitHub activity. Multi-provider AI, scheduled posting. Solid for build-in-public devs with active repos. Overkill if you ship monthly and just want paste-and-convert.",
          },
          {
            h3: "Beamer — $49+/mo",
            p: "Enterprise changelog + in-app announcements. Professional but expensive for solo makers. Most indie devs need social posts, not NPS surveys and segmentation.",
          },
          {
            h3: "Manual rewrite — free",
            p: "40 minutes per release. Inconsistent tone. Easy to forget Threads. Works but doesn't scale past monthly releases.",
          },
          {
            h3: "Release Pulse — $29/mo flat",
            p: "Built for indie hackers who paste release notes and get X, LinkedIn, and Threads variants. Version detection, bullet parsing, one-click copy. No GitHub required.",
            link: { href: "/join", text: "5 free conversions to try", suffix: ", then $29/mo flat." },
          },
        ],
      },
      {
        h2: "What to look for in a changelog converter",
        paragraphs: ["Before subscribing, check these five criteria:"],
        ordered: [
          "Bullet parsing — does it extract features from raw release notes or require structured input?",
          "Version detection — auto-detects v2.1.0 or requires manual entry?",
          "Platform limits — respects 280-char X, LinkedIn professional format, Threads thread style?",
          "No integration lock-in — can you paste from Notion, GitHub releases, or plain text?",
          "Flat pricing — $29/mo unlimited beats per-repo or per-post pricing for monthly shippers",
        ],
        after: [
          "For weekly shippers with active GitHub repos, PushToPost or BuildCast may be worth the setup. For monthly releases or pre-launch products, a paste-and-convert tool saves integration overhead.",
        ],
      },
      {
        h2: "Ship-day workflow that actually works",
        paragraphs: [
          "Here's the workflow I recommend for solo founders shipping 1–4 times per month:",
        ],
        ordered: [
          "Write release notes in your changelog tool (or GitHub release draft)",
          "Paste into a converter — get X hook, LinkedIn post, Threads thread",
          "Review each platform variant (30 seconds, not 30 minutes)",
          "Copy and post — X first for #buildinpublic, LinkedIn for professional network, Threads for casual audience",
          "Link back to your changelog or /join page in LinkedIn CTA",
        ],
        after: [
          "Total time: under 10 minutes. Compare that to 40+ minutes of manual rewriting. At $29/month, that's less than one hour of your time saved per release.",
        ],
      },
      {
        h2: "SEO and distribution after ship day",
        paragraphs: [
          "Converting release notes to social posts is step one. Step two is making your changelog discoverable:",
        ],
        list: [
          "Publish a public changelog page (even a simple /changelog route helps)",
          "Submit sitemap to Google Search Console",
          "Post on Product Hunt and Hacker News Show HN on major releases",
          "Share in r/SideProject and Indie Hackers with platform-native tone",
          "Cross-link from your guide content to /join for conversion",
        ],
        after: [
          "New sites on *.vercel.app take 1–3 months for organic traffic. Social distribution drives week-one visitors. Changelog SEO compounds over time.",
        ],
      },
    ],
    cta: {
      title: "Ready to stop rewriting every release?",
      subtitle: "5 free conversions · paste release notes → X, LinkedIn, Threads",
      button: "Convert free",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者发布日志转社交帖指南",
      description:
        "PushToPost 要 $9+/月且需 GitHub 权限。对比 indie SaaS 发布通知工具，找到 $29/月一口价、将 release notes 转为 X、领英、Threads 帖子的方案。",
    },
    h1: "2026 发布日志转社交帖：独立开发者发布指南",
    updated: "更新于 2026 年 6 月 · 阅读约 10 分钟",
    intro: [
      "每次发布日，独立开发者都要面对同样的流程：写 release notes，再为 X、领英、Threads 各写一遍。同样的功能，三种格式，四十分钟没了——这些时间本可以修 bug 或跟用户聊天。",
      "PushToPost、BuildCast、SmashLanding 通过连接 GitHub 解决了这个问题。推一次代码，拿到社交草稿。很聪明——但需要 OAuth 授权、Webhook 配置，以及每月 $9–19，而你的产品可能还没验证。",
      "很多独立创始人在第一周不想再加一个集成。他们的 changelog 在 Notion、GitHub Release 草稿或纯文本里。他们需要的是：粘贴笔记、拿平台原生帖子、复制发布。不需要 GitHub 权限。",
      "在 r/SideProject 和 Indie Hackers 上，创始人反复问：「怎么在多个平台发布通知而不用全部重写？」还有人写：「希望有个工具能自动把我的 changelog 变成推特和领英帖子。」如果这听起来像你，这篇指南就是为你写的。",
      "本指南对比 2026 年适合独立开发者的发布日志转社交帖工具、平台原生发布帖的含义，以及如何选一个不会吃掉发布日预算的工具。",
    ],
    sections: [
      {
        h2: "为什么发布帖需要平台原生格式",
        paragraphs: ["直接把 changelog 复制粘贴到各平台会失败，因为："],
        list: [
          "X 限制 280 字——发布钩子需要版本标签和要点截断",
          "领英适合专业格式 + 箭头要点 + 互动结尾",
          "Threads 适合编号串帖，不是一整墙 changelog 文字",
          "每个平台的受众期待不同语气——X 随意，领英专业",
          "复制粘贴检测会降低所有三个平台的触达",
        ],
        after: [
          "经典独立开发者发布日流程：写一次 release notes，适配各平台，30 分钟内发布，然后回去写代码。你不需要社交媒体经理，你需要的是：版本识别、要点解析、一键复制。",
        ],
      },
      {
        h2: "2026 发布日志转社交帖工具对比",
        tools: [
          {
            h3: "PushToPost — $9+/月",
            p: "GitHub Webhook 集成。从 commit 自动生成 X、领英、Bluesky、Discord 帖子。适合每天发布的团队。需要 GitHub OAuth 和仓库权限。",
          },
          {
            h3: "BuildCast — 免费档 + $19/月",
            p: "从 GitHub 活动生成 13 个平台内容。多 AI 提供商、定时发布。适合活跃仓库的构建公开开发者。如果你每月发布一次只想粘贴转换，可能过重。",
          },
          {
            h3: "Beamer — $49+/月",
            p: "企业级 changelog + 应用内公告。专业但独立开发者太贵。大多数人需要社交帖，不是 NPS 调研和分群。",
          },
          {
            h3: "手动改写 — 免费",
            p: "每次发布 40 分钟。语气不一致。容易忘记 Threads。能用但超过每月发布就撑不住。",
          },
          {
            h3: "发布日志转社交帖 — $29/月一口价",
            p: "为独立开发者打造：粘贴 release notes，生成 X、领英、Threads 变体。版本识别、要点解析、一键复制。无需 GitHub。",
            link: { href: "/join", text: "免费体验 5 次", suffix: "，之后 $29/月一口价。" },
          },
        ],
      },
      {
        h2: "选择 changelog 转换工具的五个标准",
        paragraphs: ["订阅前检查这五点："],
        ordered: [
          "要点解析——能从原始 release notes 提取功能，还是要求结构化输入？",
          "版本识别——自动识别 v2.1.0 还是需要手动填写？",
          "平台限制——遵守 X 280 字、领英专业格式、Threads 串帖风格？",
          "无集成锁定——能从 Notion、GitHub Release 或纯文本粘贴？",
          "一口价——对每月发布的开发者，$29/月无限比按仓库或按帖收费更划算",
        ],
        after: [
          "对每周发布、GitHub 仓库活跃的开发者，PushToPost 或 BuildCast 值得配置。对每月发布或预发布产品，粘贴转换工具省去集成成本。",
        ],
      },
      {
        h2: "真正有效的发布日流程",
        paragraphs: ["推荐给每月发布 1–4 次的独立开发者："],
        ordered: [
          "在 changelog 工具（或 GitHub Release 草稿）中写好 release notes",
          "粘贴到转换工具——获取 X 钩子、领英帖子、Threads 串帖",
          "检查各平台变体（30 秒，不是 30 分钟）",
          "复制发布——X 先发 #buildinpublic，领英给专业人脉，Threads 给随意受众",
          "在领英结尾链接到你的 changelog 或 /join 页面",
        ],
        after: [
          "总耗时：不到 10 分钟。对比手动改写的 40+ 分钟。$29/月，每次发布节省的时间就值回票价。",
        ],
      },
      {
        h2: "发布日后的 SEO 与分发",
        paragraphs: ["把 release notes 转成社交帖是第一步。第二步让 changelog 可被发现："],
        list: [
          "发布公开 changelog 页面（哪怕简单的 /changelog 路由也有帮助）",
          "向 Google Search Console 提交 sitemap",
          "重大发布时在 Product Hunt 和 Hacker News Show HN 发帖",
          "在 r/SideProject 和 Indie Hackers 用平台原生语气分享",
          "从指南内容交叉链接到 /join 促进转化",
        ],
        after: [
          "新站 *.vercel.app 自然流量通常要 1–3 个月。社交分发带来第一周访客。Changelog SEO 长期复利。",
        ],
      },
    ],
    cta: {
      title: "准备好不再为每次发布写三遍了吗？",
      subtitle: "免费体验 5 次 · 粘贴 release notes → X、领英、Threads",
      button: "免费转换",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
