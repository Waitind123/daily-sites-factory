import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title:
        "2026 Guide: Find Startup Ideas from App Store Negative Reviews — AppGaps Method",
      description:
        "Learn how indie hackers cluster 1-star App Store reviews into market gaps and SaaS opportunities. Compare AppGaps, NicheScout, and $29/mo flat-rate tools.",
    },
    h1: "How to Find Startup Ideas from App Store 1-Star Reviews (2026 Guide)",
    updated: "Updated July 2026 · 14 min read",
    intro: [
      "The best product ideas hide in plain sight — inside angry App Store reviews. When users leave 1-star ratings, they are not just venting. They are writing free product specs: what is broken, what is missing, what is overpriced, and what competitor they wish existed.",
      "Hacker News thread AppGaps (#43942646) went viral because solo founders realized: reading hundreds of negative reviews manually is slow, but clustering them reveals repeatable market gaps. One founder found six invoice-app complaints in a single afternoon and shipped a Stripe-first invoicing tool the next weekend.",
      "This guide explains the AppGaps method step by step: how to mine App Store negative reviews, cluster complaints into five signal types, score pain intensity, and validate your next micro-SaaS before writing code. We also compare 2026 market research tools — from $89 AI market studies to open-source Seer — and show why a $29/mo flat-rate scanner fits bootstrapped founders.",
      "Whether you are hunting your first indie product or expanding a portfolio, negative review mining beats guessing. Let us walk through the workflow.",
    ],
    sections: [
      {
        h2: "Why 1-star App Store reviews are gold for indie hackers",
        paragraphs: [
          "App Store reviews are unfiltered.user complaints carry more signal than polished LinkedIn posts or investor pitch decks. A 1-star review that says \"crashes on PDF export\" or \"no offline mode for travelers\" is a feature brief written by someone who already tried — and paid for — a solution in your target category.",
          "Unlike Reddit threads that scatter across subreddits, App Store reviews are tied to a specific competitor app. You know exactly which product failed the user and which category they belong to. That context makes prioritization faster: fix the top complaint cluster across three competitor apps, and you have a wedge.",
          "Five signal types matter most when clustering negative reviews:",
        ],
        list: [
          "Missing feature — \"no Stripe integration\", \"no dark mode\", \"can't export\"",
          "Broken — crashes, data loss, background timer failures",
          "Overpriced — subscription hikes, bait-and-switch pricing",
          "Competitor gap — slow support, ads on paid plans, walled gardens",
          "Market opportunity — meta complaints like \"wish something clustered reviews for me\"",
        ],
        after: [
          "The goal is not to read 500 reviews by hand. The goal is to enter a category keyword — invoice, habit, booking — and receive ranked complaint clusters with intensity scores. Ship against the highest-scoring cluster and you are solving a problem users already pay to have solved poorly.",
        ],
      },
      {
        h2: "The AppGaps workflow: scan, cluster, ship",
        ordered: [
          "Pick a category with paid incumbents (productivity, finance, fitness, travel). Categories with subscription apps generate the most pricing complaints.",
          "Scan 1-star reviews and cluster by pain theme. Group \"PDF crash\", \"export broken\", and \"data lost on update\" under reliability themes.",
          "Score intensity: data loss and pricing bait-and-switch score 10/10; missing dark mode scores 7/10.",
          "Cross-reference clusters across 3+ competitor apps. Repeated themes = validated market gap.",
          "Draft a one-line value prop: \"Stripe-first invoicing that never loses your PDF exports.\"",
          "Build MVP in a weekend, price at $29/mo, launch on Product Hunt and HN Show HN.",
        ],
        afterLink: {
          prefix: "AppGap Pulse automates steps 2–4. ",
          href: "/mine",
          label: "Try 5 free scans",
          suffix: " before subscribing at $29/mo.",
        },
      },
      {
        h2: "2026 App Store research tools compared",
        tools: [
          {
            h3: "Manual App Store browsing — free but slow",
            p: "Open each competitor app, filter 1-star reviews, copy quotes into a spreadsheet. Works for one niche but does not scale. Most founders abandon after two apps.",
          },
          {
            h3: "NicheScout / App Store corpus tools — powerful but complex",
            p: "HN Show HN tools that ingest large App Store corpuses and run cosine similarity on app clusters. Excellent for whitespace analysis but heavy setup for solo founders who just want top complaints in a category.",
          },
          {
            h3: "My Market Study — $89.90 per report",
            p: "Structured 12-chapter market studies with TAM/SAM/SOM. Great for pitch decks, overkill when you only need \"what do invoice app users hate most?\"",
          },
          {
            h3: "AppGap Pulse — $29/mo flat",
            p: "Enter a category keyword, get clustered 1-star reviews with intensity scores and competitor app context. Built for indie hackers who ship weekly, not quarterly.",
            link: {
              href: "/join",
              text: "Subscribe at $29/mo",
              suffix: " · 5 free scans included",
            },
          },
        ],
      },
      {
        h2: "Real example: invoice category scan",
        paragraphs: [
          "Scanning the \"invoice\" category might surface clusters like: PDF export crashes (broken, 10/10), no Stripe integration (missing feature, 9/10), and subscription price hikes (overpriced, 10/10). Three separate apps complaining about Stripe means the gap is category-wide, not one bad vendor.",
          "Your MVP scope becomes obvious: Stripe Checkout + reliable PDF export + flat $29/mo pricing. You are not inventing demand — you are answering complaints people already typed at 2 AM after a failed export.",
          "Repeat the scan monthly. Incumbents add features and new complaints emerge. Subscription businesses live on recurring pain; your research should too.",
        ],
        closingLink: {
          prefix: "Ready to find your gap? ",
          href: "/mine",
          label: "Start scanning",
          suffix: " — 5 free tries, then $29/mo unlimited.",
        },
      },
      {
        h2: "SEO and distribution after you ship",
        paragraphs: [
          "Once you ship, submit your sitemap to Google Search Console, post a Show HN thread with your top complaint cluster screenshot, and share on r/SideProject and Indie Hackers. Long-tail guides like this one compound traffic over 1–3 months on *.vercel.app domains.",
          "Link your pricing page from every guide and scan result CTA. Visitors who read about review mining are pre-qualified to pay for the tool that does it.",
        ],
      },
    ],
    cta: {
      title: "Find your next SaaS idea in 12 seconds",
      subtitle: "5 free App Store review scans · then $29/mo flat",
      button: "Scan reviews free",
      href: "/mine",
    },
  },
  zh: {
    meta: {
      title: "2026 指南：从应用商店 1 星差评发现创业点子 — AppGaps 方法",
      description:
        "教独立开发者如何将应用商店差评聚类为市场空白和 SaaS 机会。对比 AppGaps、NicheScout 及 $29/月 一口价工具。",
    },
    h1: "如何从应用商店 1 星差评发现创业点子（2026 指南）",
    updated: "更新于 2026 年 7 月 · 阅读约 14 分钟",
    intro: [
      "最好的产品点子就藏在愤怒的应用商店差评里。用户打 1 星不只是发泄 — 他们在写免费的产品需求文档：什么坏了、缺什么、贵在哪、他们希望有什么竞品替代。",
      "Hacker News 热议帖 AppGaps（#43942646）之所以爆火，是因为独立开发者发现：手动读几百条差评很慢，但聚类后能暴露可重复的市场空白。有位创始人一个下午就在发票品类找到 6 条投诉，下个周末就上线了 Stripe 直连发票工具。",
      "本指南逐步讲解 AppGaps 方法：如何挖掘应用商店差评、将投诉聚类为五类信号、评估痛点强度，并在写代码前验证下一个微 SaaS。我们还会对比 2026 年市场调研工具 — 从 $89 的 AI 市场报告到开源 Seer — 并说明为什么 $29/月 一口价扫描器适合自举创始人。",
      "无论你是找第一个独立产品还是扩展产品组合，差评挖掘都比瞎猜强。下面走一遍完整流程。",
    ],
    sections: [
      {
        h2: "为什么 1 星差评是独立开发者的金矿",
        paragraphs: [
          "应用商店评论不加滤镜。用户抱怨比 LinkedIn 软文或投资人路演更有信号。一条写着「导出 PDF 就崩溃」或「旅行者没有离线模式」的 1 星评论，是目标用户写的功能简报 — 他们已经在你的品类里试过并付过钱。",
          "不像散落在各 subreddit 的 Reddit 帖子，应用商店评论绑定具体竞品。你清楚知道哪款产品让用户失望、属于哪个品类。这让优先级更快：修掉三个竞品里反复出现的最高投诉簇，你就有了切入点。",
          "聚类差评时，五类信号最重要：",
        ],
        list: [
          "功能缺失 — 「没有 Stripe 集成」「没有深色模式」「无法导出」",
          "严重故障 — 崩溃、数据丢失、后台计时失效",
          "定价过高 — 订阅涨价、 bait-and-switch 定价",
          "竞品空白 — 客服慢、付费版仍有广告、封闭生态",
          "市场机会 — 元投诉，如「希望有人帮我聚类差评」",
        ],
        after: [
          "目标不是手动读 500 条评论，而是输入品类关键词 — 发票、习惯、预约 — 拿到按强度排序的投诉簇。针对最高分簇上线，你解决的是用户已经在付费却体验很差的问题。",
        ],
      },
      {
        h2: "AppGaps 工作流：扫描、聚类、上线",
        ordered: [
          "选有付费巨头的品类（效率、财务、健身、旅行）。订阅制应用最容易产生定价类投诉。",
          "扫描 1 星差评并按痛点主题聚类。把「PDF 崩溃」「导出失败」「更新后数据丢失」归到可靠性主题。",
          "评估强度：数据丢失和定价 bait-and-switch 打 10/10；缺深色模式打 7/10。",
          "交叉对比 3 个以上竞品的簇。重复主题 = 已验证的市场空白。",
          "写一句价值主张：「Stripe 直连、PDF 导出永不丢数据的发票工具。」",
          "周末做 MVP，定价 $29/月，在 Product Hunt 和 HN Show HN 发布。",
        ],
        afterLink: {
          prefix: "应用商店差评挖痛点自动完成第 2–4 步。",
          href: "/mine",
          label: "免费体验 5 次扫描",
          suffix: "，之后 $29/月 订阅。",
        },
      },
      {
        h2: "2026 应用商店调研工具对比",
        tools: [
          {
            h3: "手动浏览应用商店 — 免费但慢",
            p: "打开每个竞品，筛选 1 星评论，复制到表格。一个细分领域还行，无法扩展。大多数创始人看完两个应用就放弃了。",
          },
          {
            h3: "NicheScout / 应用商店语料工具 — 强但复杂",
            p: "HN Show HN 上的工具 ingest 大量应用商店语料并做余弦相似度聚类。适合空白分析，但对只想看品类 top 投诉的 solo 创始人来说太重。",
          },
          {
            h3: "My Market Study — 每份报告 $89.90",
            p: "结构化 12 章市场研究含 TAM/SAM/SOM。适合融资路演，当你只需要「发票应用用户最恨什么」时就过剩了。",
          },
          {
            h3: "应用商店差评挖痛点 — $29/月 一口价",
            p: "输入品类关键词，获得聚类 1 星差评、强度分数和竞品应用上下文。为每周 ship 的独立开发者设计，不是季度才动一次的人。",
            link: {
              href: "/join",
              text: "订阅 $29/月",
              suffix: " · 含 5 次免费扫描",
            },
          },
        ],
      },
      {
        h2: "真实案例：发票品类扫描",
        paragraphs: [
          "扫描「invoice」品类可能得到：PDF 导出崩溃（严重故障 10/10）、无 Stripe 集成（功能缺失 9/10）、订阅涨价（定价过高 10/10）。三个不同应用都抱怨 Stripe，说明空白是品类级的，不是某一家烂。",
          "MVP 范围一目了然：Stripe Checkout + 可靠 PDF 导出 + $29/月 一口价。你不是发明需求 — 你在回应用户凌晨 2 点导出失败后敲下的字。",
          "每月重复扫描。巨头会加功能，新投诉会出现。订阅生意靠持续痛点活着；你的调研也该如此。",
        ],
        closingLink: {
          prefix: "准备好找你的空白了吗？",
          href: "/mine",
          label: "开始扫描",
          suffix: " — 免费 5 次，之后 $29/月 不限量。",
        },
      },
      {
        h2: "上线后的 SEO 与分发",
        paragraphs: [
          "产品上线后，向 Google Search Console 提交 sitemap，用 top 投诉簇截图发 Show HN，并在 r/SideProject 和 Indie Hackers 分享。像本篇这样的长尾指南会在 *.vercel.app 域名上 1–3 个月内积累自然流量。",
          "从每篇指南和扫描结果 CTA 内链到定价页。读差评挖掘内容的访客，正是会为此工具付费的人。",
        ],
      },
    ],
    cta: {
      title: "12 秒找到你的下一个 SaaS 点子",
      subtitle: "免费 5 次应用商店差评扫描 · 之后 $29/月 一口价",
      button: "免费扫描差评",
      href: "/mine",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
