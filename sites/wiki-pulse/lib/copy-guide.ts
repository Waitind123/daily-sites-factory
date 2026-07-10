import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Notion & Obsidian Team Wiki Alternative — Knowledge Base Guide",
      description:
        "Notion charges $15+/seat. Obsidian has no real-time team collab. Compare team wiki platforms for indie teams. Find a $9.9/mo flat-rate alternative with MCP and AI search.",
    },
    h1: "2026 Notion & Obsidian Team Wiki Alternative: Knowledge Base Guide",
    updated: "Updated July 2026 · 10 min read",
    intro: [
      "Your team needs a shared knowledge base — onboarding docs, engineering runbooks, product processes, and meeting notes. Notion is the default choice until you see $15/month per seat. A 5-person team pays $75/month before adding a single page. Obsidian is beloved for personal notes but lacks real-time collaboration and team permissions.",
      "Team wiki platforms solve this: structured pages, search, permissions, and integrations. Modern tools also expose MCP servers so Cursor and Claude can read your team's knowledge automatically — a game changer for 2–10 person indie teams.",
      "The problem? Notion Plus starts at $10/user/month (Business $15/user). Confluence is $6.05/user for 10+ seats. Slite charges $8/user. For a bootstrapped 3-person team documenting processes and runbooks, per-seat pricing punishes growth.",
      "On HN#48675435, founders discussed OpenKnowledge as an AI-first alternative to Obsidian and Notion — with MCP integration and no vendor lock-in. On r/SaaS, teams repeatedly ask: \"What's the cheapest team wiki without per-seat pricing?\" Another wrote: \"I just want wiki.myteam.com live this week — not a $500/mo enterprise plan.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 team knowledge base platforms for indie teams, what actually matters at small-team scale, and how to pick a tool that won't punish growth with per-seat fees.",
    ],
    sections: [
      {
        h2: "Why indie teams need a proper team wiki",
        paragraphs: ["A dedicated team wiki does three things scattered Google Docs cannot:"],
        list: [
          "Structured knowledge — onboarding, runbooks, and processes in one searchable place",
          "AI + MCP integration — Cursor and Claude read your wiki via MCP, reducing context switching",
          "No vendor lock-in — markdown export anytime, unlike Notion's proprietary format",
        ],
        after: [
          "The classic indie stack: write Team Onboarding + Engineering Runbook + Product Processes, point wiki.myteam.com, link from Slack and README. You don't need enterprise SSO or 50 integrations in week one. You need: flat pricing, AI search, and MCP.",
        ],
      },
      {
        h2: "2026 team wiki platforms compared",
        tools: [
          {
            h3: "Notion — $0 free / $10–15/user/mo",
            p: "Polished UI, databases, popular with startups. Plus $10/user, Business $15/user. A 5-person team on Business pays $75/month. Great for funded companies; expensive when you're documenting a side-project team's processes.",
          },
          {
            h3: "Obsidian — free (solo) / $10/user Sync",
            p: "Excellent for personal knowledge management. Sync $10/user/month for team sharing, but no real-time collaboration, no permissions model, no web publishing. Built for individuals, not teams.",
          },
          {
            h3: "Confluence — $6.05+/user/mo",
            p: "Enterprise wiki standard. Standard $6.05/user for 10+ seats. Overkill for indie hackers with 3 people and 20 wiki pages.",
          },
          {
            h3: "Slite — $8/user/mo",
            p: "Clean team docs with AI search. Standard $8/user. Better than Notion for pure docs, but still per-seat pricing.",
          },
          {
            h3: "Wiki Pulse — $9.9/mo flat",
            p: "Built for indie teams who want Notion-quality wiki without per-seat pricing. Unlimited wiki spaces, AI search, MCP for Cursor/Claude, markdown export.",
            link: { href: "/join", text: "5 free wiki spaces to try", suffix: ", then $9.9/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What to look for in a team wiki",
        paragraphs: ["Before comparing prices, decide what your team actually needs:"],
        ordered: [
          "Flat pricing — no per-seat surprises when your co-founder or first hire joins",
          "AI search — semantic search across all pages, not just keyword matching",
          "MCP integration — expose wiki to Cursor and Claude for automatic context",
          "Markdown export — your data is yours, not locked in a proprietary format",
        ],
        after: [
          "Skip enterprise features you'll never use: SSO, advanced analytics, 20 integrations. At indie scale, fast publishing, AI search, and flat pricing matter more than database views.",
        ],
      },
      {
        h2: "How to ship a team wiki in one afternoon",
        paragraphs: [
          "Start with three pages: Team Onboarding (tools, access, first-week checklist), Engineering Runbook (deploy, on-call, incident response), and Product Processes (sprint rhythm, feature requests). Add Meeting Notes and Decision Log later.",
          "Use consistent structure: every page has a clear title, last-updated date, and owner. Teams scan — they don't read walls of prose.",
          "Connect MCP on day one. As more teams use Cursor and Claude for coding, indexed wiki becomes a force multiplier for context.",
        ],
      },
      {
        h2: "Pricing reality for small teams",
        paragraphs: [
          "A 3-person bootstrapped team on Notion Business pays $45/month. On Wiki Pulse, the same team pays $9.9/month flat — saving $420/year.",
          "The hidden cost of per-seat pricing: every new hire, contractor, or advisor adds $10–15/month. Flat pricing means you can invite your whole team without calculator anxiety.",
          "Free tiers are fine for testing, but most teams hit limits (Notion: 1,000 blocks, no version history) within weeks. Start with 5 free wiki spaces, validate the workflow, then subscribe when knowledge compounds.",
        ],
      },
      {
        h2: "MCP: the indie team's secret weapon",
        paragraphs: [
          "Model Context Protocol (MCP) lets AI assistants read your team's wiki directly. Instead of copy-pasting runbooks into Cursor, your AI already knows your deploy checklist and on-call rotation.",
          "Wiki Pulse ships an MCP server out of the box. Connect once, and every team member's Cursor/Claude session has access to your knowledge base. This is the AI-first advantage OpenKnowledge demonstrated on HN — now accessible at $9.9/mo.",
        ],
      },
    ],
    cta: {
      title: "Ready to launch your team wiki?",
      subtitle: "Create your first wiki space free. 5 spaces included, then $9.9/mo flat.",
      button: "Start building →",
    },
  },
  zh: {
    meta: {
      title: "2026 Notion 与 Obsidian 团队知识库平替 — 知识库选型指南",
      description:
        "Notion $15+/人。Obsidian 无实时团队协作。对比独立团队知识库平台，找到 $9.9/月一口价的 MCP + AI 搜索替代品。",
    },
    h1: "2026 Notion 与 Obsidian 团队知识库平替：知识库选型指南",
    updated: "2026 年 7 月更新 · 阅读约 10 分钟",
    intro: [
      "团队需要共享知识库 — 入职文档、工程运维手册、产品流程和会议记录。Notion 是默认选择，直到你看到 $15/月每人。5 人团队每月 $75，还没写一页内容。Obsidian 适合个人笔记，但缺乏实时协作和团队权限。",
      "团队知识库平台解决这个问题：结构化页面、搜索、权限和集成。现代工具还通过 MCP 服务暴露知识库，让 Cursor 和 Claude 自动读取团队知识 — 对 2–10 人独立团队是游戏规则改变者。",
      "问题在于？Notion Plus 起步 $10/人/月（商业版 $15/人）。Confluence 10 人以上 $6.05/人。Slite $8/人。对自举 3 人团队记录流程和运维手册，按人头收费惩罚增长。",
      "HN#48675435 上，创始人讨论 OpenKnowledge 作为 Obsidian 和 Notion 的 AI-first 替代品 — 带 MCP 集成、无供应商锁定。r/SaaS 上团队反复问：「有没有不按人头收费的便宜团队知识库？」还有人写：「我只想这周上线 wiki.myteam.com — 不要 $500/月企业方案。」如果这听起来像你，这篇指南为你而写。",
      "本指南对比 2026 年独立团队知识库平台、小团队规模真正重要的功能，以及如何选型避免按人头收费惩罚增长。",
    ],
    sections: [
      {
        h2: "为什么独立团队需要正规知识库",
        paragraphs: ["专用团队知识库做三件散落的 Google 文档做不到的事："],
        list: [
          "结构化知识 — 入职、运维手册和流程在一个可搜索的地方",
          "AI + MCP 集成 — Cursor 和 Claude 通过 MCP 读取知识库，减少上下文切换",
          "无供应商锁定 — 随时导出 Markdown，不像 Notion 专有格式",
        ],
        after: [
          "经典独立团队栈：写团队入职 + 工程运维手册 + 产品流程，指向 wiki.myteam.com，从 Slack 和 README 链接。第一周不需要企业 SSO 或 50 个集成。你需要：一口价、AI 搜索和 MCP。",
        ],
      },
      {
        h2: "2026 团队知识库平台对比",
        tools: [
          {
            h3: "Notion — 免费 / $10–15/人/月",
            p: "精美 UI、数据库，创业公司流行。Plus $10/人，商业版 $15/人。5 人商业版每月 $75。适合融资公司；记录副业团队流程时很贵。",
          },
          {
            h3: "Obsidian — 免费（单人）/ Sync $10/人",
            p: "个人知识管理优秀。Sync $10/人/月团队共享，但无实时协作、无权限模型、无网页发布。为个人打造，非团队。",
          },
          {
            h3: "Confluence — $6.05+/人/月",
            p: "企业知识库标准。标准版 10 人以上 $6.05/人。对 3 人 20 页的独立开发者过度。",
          },
          {
            h3: "Slite — $8/人/月",
            p: "简洁团队文档带 AI 搜索。标准版 $8/人。纯文档比 Notion 好，但仍按人头收费。",
          },
          {
            h3: "团队知识库 — $9.9/月 一口价",
            p: "为想要 Notion 级知识库、不按人头收费的独立团队打造。无限知识库空间、AI 搜索、Cursor/Claude MCP、Markdown 导出。",
            link: { href: "/join", text: "免费体验 5 个知识库空间", suffix: "，之后 $9.9/月一口价。无年付锁定。" },
          },
        ],
      },
      {
        h2: "团队知识库选型要点",
        paragraphs: ["对比价格前，先确定团队真正需要什么："],
        ordered: [
          "一口价 — 联合创始人或第一个雇员加入时无按人头惊喜",
          "AI 搜索 — 所有页面语义搜索，不只是关键词匹配",
          "MCP 集成 — 暴露知识库给 Cursor 和 Claude 自动获取上下文",
          "Markdown 导出 — 数据属于你，不锁在专有格式里",
        ],
        after: [
          "跳过永远用不到的企业功能：SSO、高级分析、20 个集成。独立团队规模，快速发布、AI 搜索和一口价比数据库视图更重要。",
        ],
      },
      {
        h2: "一个下午上线团队知识库",
        paragraphs: [
          "从三页开始：团队入职（工具、权限、首周清单）、工程运维手册（部署、值班、事故响应）和产品流程（冲刺节奏、功能请求）。会议记录和决策日志稍后添加。",
          "使用一致结构：每页有清晰标题、最后更新日期和负责人。团队扫描阅读 — 不会读大段散文。",
          "第一天连接 MCP。越来越多团队用 Cursor 和 Claude 写代码，索引知识库成为上下文倍增器。",
        ],
      },
      {
        h2: "小团队定价现实",
        paragraphs: [
          "3 人自举团队在 Notion 商业版每月 $45。团队知识库同样团队 $9.9/月一口价 — 每年省 $420。",
          "按人头收费的隐性成本：每个新雇员、外包或顾问加 $10–15/月。一口价意味着可以邀请整个团队而不用算帐焦虑。",
          "免费档适合测试，但大多数团队几周内触顶（Notion：1000 块、无版本历史）。从 5 个免费知识库空间开始，验证工作流，知识复利后再订阅。",
        ],
      },
      {
        h2: "MCP：独立团队的秘密武器",
        paragraphs: [
          "模型上下文协议（MCP）让 AI 助手直接读取团队知识库。不用把运维手册复制到 Cursor，你的 AI 已经知道部署清单和值班轮换。",
          "团队知识库开箱即用 MCP 服务。连接一次，每个团队成员的 Cursor/Claude 会话都能访问知识库。这是 OpenKnowledge 在 HN 展示的 AI-first 优势 — 现在 $9.9/月即可使用。",
        ],
      },
    ],
    cta: {
      title: "准备好上线团队知识库了吗？",
      subtitle: "免费创建第一个知识库空间。含 5 个空间，之后 $9.9/月一口价。",
      button: "开始搭建 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
