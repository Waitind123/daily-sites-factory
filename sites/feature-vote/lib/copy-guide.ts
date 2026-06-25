import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Canny Alternative for Indie Hackers — Feature Voting Guide",
      description:
        "Canny costs $79/mo for solo founders. Compare feature voting tools for indie SaaS: Canny, UserJot, Feature Upvote. Find a $9.9/mo flat-rate alternative with unlimited voters.",
    },
    h1: "2026 Canny Alternative for Indie Hackers: Feature Voting & Roadmap Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You shipped an MVP. Users start emailing feature requests. Someone asks for dark mode on Twitter, another wants webhooks in your Discord. You paste ideas into a Notion doc, lose track of duplicates, and have no idea what to build next.",
      "Feature voting boards solve this: users submit ideas, upvote what matters, and you publish a public roadmap so everyone knows what's planned, in progress, and shipped. The problem? Enterprise tools like Canny charge $79/month and cap your free tier at 25 tracked users.",
      "On Indie Hackers, founders repeatedly ask: \"Canny wants $50/mo for their starter plan — just ain't gonna happen.\" Another wrote: \"I'm in the very earliest stage with a handful of people providing feedback and cannot justify the cost.\" Sound familiar?",
      "This guide compares 2026 feature voting tools for solo founders, what actually matters at indie scale, and how to pick a board that won't surprise you with per-user fees when your product gains traction.",
    ],
    sections: [
      {
        h2: "Why indie hackers need a feature voting board",
        paragraphs: [
          "A public feedback board does three things a Google Form cannot:",
        ],
        list: [
          "Surfaces signal — upvotes reveal what many users want, not just the loudest voice",
          "Reduces support load — \"Is dark mode coming?\" → link to the board",
          "Builds trust — users see you ship what they asked for",
        ],
        after: [
          "The classic indie stack: create a board, embed a widget on your docs or changelog, share the public URL. Users submit ideas without creating an account. You drag ideas through Planned → In Progress → Shipped columns. Voters get notified when their idea ships.",
          "At 50–500 users, you don't need enterprise SSO, custom domains on every plan, or AI-powered duplicate detection that costs extra credits. You need: unlimited voters, a clean public page, and flat pricing.",
        ],
      },
      {
        h2: "2026 feature voting tools compared",
        tools: [
          {
            h3: "Canny — $79+/mo",
            p: "The market leader. Beautiful UI, mature integrations, changelog add-on. Free tier caps at 25 tracked users — you hit that ceiling fast. Paid plans scale with tracked users; competitor roundups cite $400+/mo at scale. Annual contracts on higher tiers. Great for funded startups, painful for bootstrapped solo devs.",
          },
          {
            h3: "UserJot — free tier / paid upgrades",
            p: "Generous free forever plan with unlimited users, feature voting, and integrated changelog. Modern UI. Worth evaluating if free tier covers your needs. Custom branding and extra boards require paid plans.",
          },
          {
            h3: "Feature Upvote — $49/board/mo",
            p: "Simple, focused voting boards. No free tier. Per-board pricing adds up if you run multiple products or want separate boards for bugs vs features.",
          },
          {
            h3: "Feedbask / UseFeed — $10–33/mo",
            p: "Newer affordable alternatives with flat pricing, public roadmaps, and embed widgets. Feature sets vary — some focus on bug reports, others on product ideas.",
          },
          {
            h3: "Feature Vote — $9.9/mo flat",
            p: "Built for indie hackers who want Canny-style voting without per-user pricing. Unlimited boards, unlimited voters, public roadmap columns, embed widget.",
            link: { href: "/join", text: "5 free boards to try", suffix: ", then $9.9/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What to look for in a feature voting tool",
        paragraphs: ["Before comparing prices, decide what you actually need:"],
        ordered: [
          "Guest voting — can users upvote without creating an account? Friction kills participation.",
          "Public roadmap — Planned / In Progress / Shipped columns that update automatically.",
          "Embed widget — drop a script on your docs or app, don't force users to leave your site.",
          "Voter notifications — email when an idea they voted on ships. Closes the feedback loop.",
          "Flat pricing — no per-user or per-board fees that punish growth.",
        ],
        after: [
          "Skip enterprise features you won't use in year one: SSO, custom domains on every tier, AI duplicate clustering that bills per credit.",
        ],
      },
      {
        h2: "How to launch your first feedback board in 10 minutes",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create a board named after your product",
          "Add 3–5 ideas you already know users want (seed the board so it's not empty)",
          "Share the public link in your changelog, docs footer, and next support reply",
          "Review top-voted ideas weekly; move winners to Planned",
          "When you ship, update status to Shipped — voters get notified",
        ],
        afterLink: {
          href: "/boards",
          label: "Feature Vote",
          prefix: "With ",
          suffix: ", step one takes under a minute. No credit card for your first 5 boards.",
        },
      },
      {
        h2: "SEO and distribution for your feedback board",
        paragraphs: [
          "Your public board URL can rank for long-tail queries like \"[your product] feature requests\" or \"[your product] roadmap\". Link it from your footer, changelog, and status page. Submit your sitemap to Google Search Console.",
          "For launch distribution, post on Product Hunt, Hacker News Show HN, Reddit r/SideProject, and Indie Hackers. Frame it as: \"We listen — vote on what we build next.\" Transparency builds community faster than a silent roadmap.",
        ],
      },
      {
        h2: "Bottom line",
        closingLink: {
          href: "/join",
          label: "try Feature Vote free",
          prefix: "Canny is excellent software priced for teams, not solo founders shipping their first paid product. If you need unlimited voters, a public roadmap, and flat $9.9/mo pricing, ",
          suffix: ". Five boards, no credit card. Ship what your users actually want.",
        },
      },
    ],
    cta: {
      title: "Ready to collect feature requests?",
      subtitle: "5 free boards · unlimited voters after subscribe",
      button: "Create your first board",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Canny 替代品指南 — 功能投票与路线图",
      description:
        "Canny 对一人团队要 $79/月。对比 Canny、UserJot、Feature Upvote 等功能投票工具，找到 $9.9/月一口价、投票人数不限的平替方案。",
    },
    h1: "2026 独立开发者 Canny 替代品：功能投票与路线图完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "你上线了 MVP，用户开始邮件轰炸功能需求：有人在 Twitter 要深色模式，有人在 Discord 要 Webhook。你把想法贴进 Notion，重复项越积越多，根本不知道下一步该做什么。",
      "功能投票板能解决这个问题：用户提交想法、为重要需求投票，你发布公开路线图，让大家知道什么在计划中、开发中、已上线。问题是？Canny 这类企业工具要 $79/月，免费档还只限 25 个跟踪用户。",
      "Indie Hackers 上创始人常说：「Canny 入门就要 $50/月，根本承受不起。」还有人说：「我才刚开始，只有几个人给反馈，没法 justify 这个成本。」熟悉吗？",
      "本指南对比 2026 年适合独立开发者的功能投票工具、一人规模真正需要什么，以及如何在产品增长时不被按人头收费「背刺」。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要功能投票板",
        paragraphs: ["公开反馈板能做到 Google 表单做不到的三件事："],
        list: [
          "汇聚信号 — 投票揭示多数人想要什么，而不只是声音最大的人",
          "减轻客服负担 — 「深色模式什么时候上？」→ 丢投票板链接",
          "建立信任 — 用户看见你真的在按反馈迭代",
        ],
        after: [
          "经典独立开发者流程：创建投票板，在文档或更新日志嵌入组件，分享公开链接。用户无需注册即可提交想法。你把想法拖过「计划中 → 开发中 → 已上线」。功能上线时通知投票者。",
          "50–500 用户阶段，你不需要企业 SSO、每档都送自定义域名、或按积分计费的 AI 去重。你需要的是：投票人数不限、干净的公开页、一口价。",
        ],
      },
      {
        h2: "2026 功能投票工具对比",
        tools: [
          {
            h3: "Canny — $79+/月",
            p: "市场领导者。UI 精美、集成成熟、有更新日志插件。免费档限 25 跟踪用户，很快就触顶。付费按用户数涨，竞品评测提到规模化后 $400+/月。高档位要年约。适合融资团队，对自举 solo 开发者很痛。",
          },
          {
            h3: "UserJot — 免费档 / 付费升级",
            p: "慷慨的永久免费档：无限用户、功能投票、集成 changelog。UI 现代。若免费档够用值得评估。自定义品牌和额外投票板要付费。",
          },
          {
            h3: "Feature Upvote — $49/板/月",
            p: "简单专注的投票板。无免费档。多产品或 bug/功能分板时，按板计费很快变贵。",
          },
          {
            h3: "Feedbask / UseFeed — $10–33/月",
            p: "较新的平价替代，一口价、公开路线图、嵌入组件。功能侧重不同，有的偏 bug，有的偏产品想法。",
          },
          {
            h3: "功能投票板 — $9.9/月 一口价",
            p: "为想要 Canny 式投票、又不想按人头付费的独立开发者打造。无限投票板、无限投票者、公开路线图、嵌入组件。",
            link: { href: "/join", text: "免费体验 5 个投票板", suffix: "，之后 $9.9/月 一口价，无需年约。" },
          },
        ],
      },
      {
        h2: "选功能投票工具要看什么",
        paragraphs: ["比价之前，先想清楚你真正需要什么："],
        ordered: [
          "访客投票 — 用户能否不注册就投票？摩擦会杀死参与率。",
          "公开路线图 — 计划中 / 开发中 / 已上线 列能否自动更新。",
          "嵌入组件 — 一行脚本放进文档或应用，别逼用户跳站。",
          "投票者通知 — 他们投票的想法上线时发邮件，闭环反馈。",
          "一口价 — 别用按人头、按板计费惩罚增长。",
        ],
        after: [
          "第一年用不上的企业功能可以跳过：SSO、每档自定义域名、按积分计费的 AI 去重。",
        ],
      },
      {
        h2: "10 分钟上线第一个反馈投票板",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "用产品名创建投票板",
          "预先添加 3–5 个你已知道用户想要的想法（别让板子空着）",
          "在 changelog、文档页脚、下一条客服回复里分享公开链接",
          "每周看高票想法，把赢家移到「计划中」",
          "功能上线时标为「已上线」— 投票者会收到通知",
        ],
        afterLink: {
          href: "/boards",
          label: "功能投票板",
          prefix: "用",
          suffix: "，第一步不到一分钟。前 5 个板无需信用卡。",
        },
      },
      {
        h2: "反馈投票板的 SEO 与分发",
        paragraphs: [
          "公开投票板 URL 可排名「[你的产品] 功能建议」「[你的产品] 路线图」等长尾词。从页脚、changelog、状态页链过去，并向 Google Search Console 提交 sitemap。",
          "上线分发可发 Product Hunt、HN Show HN、Reddit r/SideProject、Indie Hackers。话术：「我们在听 — 投票决定下一步做什么。」透明路线图比沉默更能凝聚社区。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用功能投票板",
          prefix: "Canny 是优秀软件，但定价面向团队，不是刚推出付费产品的一人开发者。若你需要无限投票者、公开路线图、$9.9/月 一口价，可",
          suffix: "。五个板，无需信用卡。做用户真正想要的。",
        },
      },
    ],
    cta: {
      title: "准备好收集功能需求了吗？",
      subtitle: "免费 5 个投票板 · 订阅后投票人数不限",
      button: "创建第一个投票板",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
