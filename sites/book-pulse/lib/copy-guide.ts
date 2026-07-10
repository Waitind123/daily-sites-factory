import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Calendly Alternative for Indie Hackers — Scheduling Page Guide",
      description:
        "Calendly starts at $12/mo with cookie banners and no i18n. Compare indie scheduling tools. Find a $9.9/mo flat-rate booking page with project showcase and time zone sync.",
    },
    h1: "2026 Calendly Alternative for Indie Hackers: Scheduling Page Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "Every indie hacker with a landing page eventually adds a 'Book a call' button. Calendly is the default — until you embed it and watch a cookie consent dialog appear on your carefully crafted homepage. Then you switch to Chinese for your Chinese users and half the Calendly UI stays in English. Sound familiar?",
      "On Hacker News, founders ask weekly: 'Would you use a Calendly alternative made just for indie hackers?' The pain points repeat: too expensive for solo founders ($12–16/mo for basics), bloated team features you'll never use, no way to showcase what you're building, and localization that breaks your bilingual site.",
      "What you actually need is simpler: a /b/your-name link, your current project on top, time slots in your zone, and a page that matches your dark landing page aesthetic. When someone books a coffee chat from your HN profile, they should see 'Building ShipFast Analytics' — not a generic Calendly widget with someone else's branding.",
      "Enterprise schedulers like Calendly, SavvyCal, and HubSpot Meetings are built for sales teams with round-robin routing, CRM sync, and 40 configuration screens. For a solo founder doing 3–5 collab calls per month, that's massive overkill — and you're paying for features that actively make your embed heavier.",
      "This guide compares 2026 scheduling tools for solo founders, what features actually matter at indie scale, and how to pick a booking page that won't annoy your visitors or break your i18n.",
    ],
    sections: [
      {
        h2: "Why indie hackers need a different scheduling tool",
        paragraphs: ["Calendly solves enterprise sales scheduling. Indie hackers need something else:"],
        list: [
          "Project showcase — visitors should see what you're building before they book",
          "Clean embed — no third-party cookie banner on your homepage",
          "Full i18n — switch to Chinese and every label translates, including errors",
          "Simple slots — Mon/Wed/Fri coffee chats, not round-robin team routing",
          "Flat pricing — $9.9/mo beats $12+ when you're bootstrapping at $2K MRR",
          "Fast setup — publish a booking link in 2 minutes, not a 30-minute onboarding",
        ],
        after: [
          "The classic indie playbook: add /b/your-name to your homepage footer, HN profile, and Twitter bio. When someone books, you get a notification and show up prepared because they already read your project description.",
        ],
      },
      {
        h2: "2026 scheduling tools compared",
        tools: [
          {
            h3: "Calendly — $12+/mo",
            p: "Industry standard with team scheduling, integrations, and workflows. Great for sales teams. Cookie consent on embeds. Limited localization. Expensive when you need one personal booking link.",
          },
          {
            h3: "SavvyCal — $12–20/mo",
            p: "Cleaner UI than Calendly with overlay scheduling. Better for consultants. Still team-oriented pricing tiers. No project showcase for indie builders.",
          },
          {
            h3: "Cal.com — free tier + paid",
            p: "Open-source option with self-hosting. Powerful but requires setup time. The hosted version adds complexity most solo founders don't need.",
          },
          {
            h3: "Google Calendar appointment slots — free",
            p: "Works for basic scheduling. Ugly embed. No project branding. No custom domain path. Breaks the aesthetic of a polished indie landing page.",
          },
          {
            h3: "TidyCal — $29 lifetime",
            p: "Popular AppSumo deal. One-time payment attractive but limited updates and no indie-specific features like project showcase.",
          },
          {
            h3: "Book Pulse — $9.9/mo flat",
            p: "Built for indie hackers who want booking pages with project showcase, time zone sync, and bilingual EN/ZH. No cookie banner on embed. Publish /b/your-slug in 2 minutes.",
            link: { href: "/join", text: "5 free publishes to try", suffix: ", then $9.9/mo flat. Cancel anytime." },
          },
        ],
      },
      {
        h2: "What features matter at indie scale",
        paragraphs: ["Before comparing prices, decide what you actually use monthly:"],
        ordered: [
          "Custom /b/slug URL — share on HN, Twitter, homepage footer",
          "Project line — 'Building X' so visitors know the context",
          "Time zone display — show slots in your zone, not visitor's (they can convert)",
          "30-min default slots — coffee chats and collab calls, not 60-min sales demos",
          "Embed without cookie popup — your landing page conversion depends on this",
          "Bilingual UI — if your site is EN/ZH, your booking page must be too",
        ],
        after: [
          "Skip enterprise features you won't use in month one: round-robin team routing, Salesforce CRM sync, automated reminder sequences with 12 templates, payment collection for paid consultations.",
        ],
      },
      {
        h2: "How to publish your booking page in 2 minutes",
        paragraphs: [
          "The fastest path from zero to bookable link: create a draft with your name and current project, set your time zone, publish to get your /b/slug URL, then embed the link on your homepage Hero or footer. Test by opening the link in an incognito window — you should see your project name, available slots, and a one-click book button.",
          "For bilingual sites: switch your site language to Chinese and verify every label on the booking page translates. API error messages, form placeholders, and success states must all be in Chinese — not just the navigation. This is where most scheduling embeds fail for indie hackers serving global audiences.",
        ],
        after: [
          "Pro tip: add your /b/slug link to your GitHub profile README, Indie Hackers bio, and email signature. Consistent booking links reduce friction — visitors don't need to hunt for a contact form.",
        ],
      },
      {
        h2: "When to upgrade from free to paid",
        paragraphs: [
          "Five free publishes is enough to validate: create your personal page, a product demo page, and a collab page. If you're booking 2+ calls per week from your link, the $9.9/mo unlimited plan pays for itself with one consulting hour saved on scheduling back-and-forth.",
          "The upgrade moment usually comes when you hit the trial limit mid-launch — you've got traction on HN, three people want to book, and you need unlimited pages for different products. That's the levelsio moment: charge from day one, but let people experience value first.",
        ],
      },
    ],
    cta: {
      title: "Ready to ditch the Calendly cookie banner?",
      subtitle: "Create your indie booking page — 5 free publishes, then $9.9/mo.",
      button: "Create booking page →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Calendly 平替指南 — 预约页选型",
      description:
        "Calendly $12/月起且有 Cookie 弹窗、无完整中文。对比独立开发者预约工具，找到 $9.9/月一口价、带项目展示和时区同步的预约页。",
    },
    h1: "2026 独立开发者 Calendly 平替：预约页选型指南",
    updated: "更新于 2026 年 6 月 · 阅读约 10 分钟",
    intro: [
      "每个有落地页的独立开发者最终都会加「预约通话」按钮。默认选 Calendly — 直到你嵌入后发现精心设计的首页弹出了 Cookie 同意框。然后你给中文用户切中文，Calendly 界面一半还是英文。熟悉吗？",
      "Hacker News 上创始人每周都在问：「你会用专为独立开发者做的 Calendly 替代品吗？」痛点反复出现：solo 创始人觉得 $12–16/月太贵、用不上的团队功能臃肿、无法展示你在做的项目、本地化弄坏你的双语站。",
      "你真正需要的更简单：一个 /b/你的名字 链接、顶部展示当前项目、你时区的时段、匹配你深色落地页审美的页面。有人从 HN 简介约咖啡聊时，应该看到「正在做 ShipFast 分析工具」— 而不是带别人品牌的通用 Calendly 组件。",
      "Calendly、SavvyCal、HubSpot Meetings 等企业日程工具为销售团队设计 — 轮询路由、CRM 同步、40 个配置页。每月只做 3–5 次合作通话的 solo 创始人用不上，还在为让嵌入更重的功能付钱。",
      "本指南对比 2026 年 solo 创始人的日程工具、独立规模真正重要的功能，以及如何选不惹恼访客、不破坏 i18n 的预约页。",
    ],
    sections: [
      {
        h2: "独立开发者为什么需要不同的预约工具",
        paragraphs: ["Calendly 解决企业销售日程。独立开发者需要的是另一回事："],
        list: [
          "项目展示 — 访客预约前应先了解你在 build 什么",
          "干净嵌入 — 首页不要第三方 Cookie 弹窗",
          "完整 i18n — 切中文后每个标签都翻译，含错误提示",
          "简单时段 — 周一/三/五咖啡聊，不要团队轮询路由",
          "一口价 — 自举 $2K MRR 时 $9.9/月 胜过 $12+",
          "快速上线 — 2 分钟发布预约链接，不要 30 分钟引导",
        ],
        after: [
          "经典 indie 打法：把 /b/你的名字 放在首页页脚、HN 简介和推特 bio。有人预约时你已准备好 — 他们读过你的项目描述了。",
        ],
      },
      {
        h2: "2026 日程工具对比",
        tools: [
          {
            h3: "Calendly — $12+/月",
            p: "行业标准，团队日程、集成和工作流齐全。适合销售团队。嵌入有 Cookie 同意。本地化有限。只需一个个人预约链接时偏贵。",
          },
          {
            h3: "SavvyCal — $12–20/月",
            p: "比 Calendly 界面干净，有叠加预约。更适合顾问。仍是团队导向定价。无独立开发者的项目展示。",
          },
          {
            h3: "Cal.com — 免费档 + 付费",
            p: "开源可自托管。功能强但需配置时间。托管版对大多数 solo 创始人过于复杂。",
          },
          {
            h3: "Google 日历预约时段 — 免费",
            p: "基础预约能用。嵌入丑。无项目品牌。无自定义路径。破坏精致 indie 落地页美感。",
          },
          {
            h3: "TidyCal — $29 终身",
            p: "AppSumo 热门 deal。一次性付费吸引人但更新有限，无项目展示等 indie 特性。",
          },
          {
            h3: "Book Pulse — $9.9/月一口价",
            p: "为独立开发者打造 — 带项目展示、时区同步、中英双语。嵌入无 Cookie 弹窗。2 分钟发布 /b/别名。",
            link: { href: "/join", text: "免费发布 5 次试用", suffix: "，之后 $9.9/月一口价，随时可取消。" },
          },
        ],
      },
      {
        h2: "独立规模真正重要的功能",
        paragraphs: ["比价前先想清楚你每月实际用什么："],
        ordered: [
          "自定义 /b/别名 — 分享在 HN、推特、首页页脚",
          "项目一行 — 「正在做 X」让访客了解背景",
          "时区显示 — 按你的时区展示时段（访客自行换算）",
          "默认 30 分钟 — 咖啡聊和合作通话，不是 60 分钟销售演示",
          "嵌入无 Cookie 弹窗 — 落地页转化靠这个",
          "双语界面 — 站是中英双语，预约页也必须是",
        ],
        after: [
          "跳过首月用不上的企业功能：团队轮询路由、Salesforce CRM 同步、12 套模板的自动提醒序列、付费咨询收款。",
        ],
      },
      {
        h2: "2 分钟发布预约页",
        paragraphs: [
          "从零到可预约最快路径：用姓名和当前项目创建草稿、设时区、发布获得 /b/别名，然后把链接嵌到首页 Hero 或页脚。用无痕窗口打开链接测试 — 应看到项目名、可用时段和一键预约按钮。",
          "双语站要点：把站语言切中文，确认预约页每个标签都翻译。API 错误、表单占位、成功状态必须全是中文 — 不只是导航。大多数日程嵌入在这里让服务全球用户的 indie 开发者翻车。",
        ],
        after: [
          "技巧：把 /b/别名 加到 GitHub README、Indie Hackers 简介和邮件签名。统一的预约链接减少摩擦 — 访客不用找联系表单。",
        ],
      },
      {
        h2: "何时从免费升级到付费",
        paragraphs: [
          "五次免费发布够验证：个人页、产品演示页、合作页。若每周从你的链接约 2+ 次通话，$9.9/月 无限方案一次咨询省下的扯皮时间就够了。",
          "升级时刻通常是发布中途触达试用上限 — HN 有热度、三个人想约、你需要多产品无限页面。这就是 levelsio 时刻：第一天设计收费点，但先让人体验价值。",
        ],
      },
    ],
    cta: {
      title: "准备好告别 Calendly Cookie 弹窗了吗？",
      subtitle: "创建你的 indie 预约页 — 免费发布 5 次，之后 $9.9/月。",
      button: "创建预约页 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
