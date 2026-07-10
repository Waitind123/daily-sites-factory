import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 AI Waitlist Validation Guide for Indie Hackers — Score Signup Quality Before Launch",
      description:
        "40% of waitlist signups may be junk. Learn how AI lead scoring validates signup quality, filters disposable emails, and tells you when to launch. $9.9/mo alternative to Prefinery.",
    },
    h1: "2026 AI Waitlist Validation for Indie Hackers: Score Signup Quality Before You Launch",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You spent two weeks building a waitlist. You shared it on Twitter, posted on Indie Hackers, embedded it on your teaser page. You hit 200 signups and felt ready to launch. Then you exported the CSV and noticed the problem: 40% were disposable emails, 30% were Gmail accounts that never opened your follow-up, and only 12 looked like real potential customers.",
      "This is the hidden failure mode of product waitlists. Collecting emails is easy. Collecting emails from people who will actually buy is hard. Most waitlist tools — Prefinery, GetWaitlist, LaunchList — count signups but don't tell you if those signups are worth launching to.",
      "On r/SaaS, founders repeatedly ask: \"How do I know if my waitlist is ready to launch?\" Another wrote on Indie Hackers: \"I launched to 300 waitlist signups and got 3 paying customers. What went wrong?\" The answer is usually signup quality, not quantity.",
      "AI waitlist validation solves this. Instead of treating every email equally, you score each signup A through F based on domain type, email format, and intent signals. You get a health grade for your entire list and actionable recommendations: launch now, wait for more signups, or enable email verification to filter junk.",
      "This guide explains why signup quality matters more than signup count, how AI lead scoring works for indie waitlists, when to launch vs wait, and how to pick a tool that validates before you ship.",
    ],
    sections: [
      {
        h2: "Why waitlist quantity misleads indie founders",
        paragraphs: [
          "A waitlist with 500 signups feels like validation. It is not. Vanity metrics kill indie launches every week. The founder sees a big number, ships confidently, and wonders why conversion is 1%.",
          "Common junk signup sources include:",
        ],
        list: [
          "Disposable email services (mailinator, guerrillamail) — bots and tire-kickers",
          "Free Gmail/Yahoo accounts with random strings — low intent curiosity",
          "Competitor research — they signed up to see what you're building",
          "Referral farming — people who joined only to get a referral link position",
        ],
        after: [
          "A list of 100 corporate-domain signups with professional email formats is worth more than 500 random Gmail addresses. AI scoring makes this visible before you waste a launch email.",
        ],
      },
      {
        h2: "How AI lead scoring works for waitlists",
        paragraphs: ["AI waitlist validation analyzes each signup across multiple signals:"],
        ordered: [
          "Domain type — corporate email (company.com) scores higher than free providers",
          "Disposable detection — mailinator and tempmail domains flagged instantly",
          "Email format — firstname.lastname@ patterns suggest real humans",
          "Intent heuristics — numeric-heavy local parts and very short addresses score lower",
        ],
        after: [
          "Each signup gets an A–F grade. A and B grades are high-intent leads worth personal outreach. C grades are neutral. D and F grades should be filtered or deprioritized at launch.",
          "Aggregate analysis gives you a health score (0–100) and grade (excellent/good/fair/poor) for the entire waitlist. Recommendations adapt to your data: if 35% are corporate domains, the AI suggests B2B pricing. If disposable emails exceed 10%, it recommends email verification.",
        ],
      },
      {
        h2: "2026 waitlist tools with validation compared",
        tools: [
          {
            h3: "Prefinery — $99+/mo",
            p: "Full viral waitlist with referrals and leaderboards. No built-in lead quality scoring. You export CSV and manually inspect emails. Overkill pricing for solo founders.",
          },
          {
            h3: "GetWaitlist / LaunchList — $29–49/mo",
            p: "Clean signup pages and referral features. Count signups but don't score quality. You still need to manually filter junk before launch.",
          },
          {
            h3: "WaitStack — $19 one-time",
            p: "Developer-first with API access. Mentions AI scoring on Scale tier ($29/mo). Good for technical founders who want headless integration.",
          },
          {
            h3: "Lineup — $9/mo",
            p: "Built for indie hackers with MRR counter and auto-tweet milestones. Focuses on growth mechanics, not signup quality validation.",
          },
          {
            h3: "AI Waitlist — $9.9/mo flat",
            p: "Built for indie founders who want Prefinery-style waitlists plus AI lead scoring on every signup. A–F grades, health analysis, launch recommendations.",
            link: { href: "/join", text: "5 free AI analyses to try", suffix: ", then $9.9/mo flat. No per-email fees." },
          },
        ],
      },
      {
        h2: "When to launch: the health score decision framework",
        paragraphs: ["Use your waitlist health score to decide timing:"],
        ordered: [
          "Health score 75+ with <5% disposable — launch ready, email A/B leads first",
          "Health score 60–74 — good list, send a survey to top leads before full launch",
          "Health score 45–59 — fair quality, focus on distribution in founder communities",
          "Health score below 45 — wait, improve signup sources, enable email verification",
          "Under 50 total signups — quantity problem, not quality. Share more before analyzing",
        ],
        after: [
          "The worst launch mistake is shipping to a list that looks big but converts poorly. A health score of 72 with 127 signups beats 500 signups at health score 38 every time.",
        ],
      },
      {
        h2: "Practical launch workflow with AI validation",
        paragraphs: ["The recommended indie launch sequence:"],
        ordered: [
          "Create waitlist and share on Twitter, Indie Hackers, and your landing page",
          "Collect at least 50 signups before running first AI analysis",
          "Review quality breakdown — note corporate % and disposable %",
          "Follow AI recommendations (enable verification, target B2B, wait for more signups)",
          "Export A/B grade leads for personal launch emails",
          "Send launch email to full list, but prioritize high-grade leads with custom messaging",
        ],
        after: [
          "Founders who validate before launching report 3–5x higher waitlist-to-paid conversion. The difference is not the product — it is launching to the right people.",
        ],
      },
      {
        h2: "Referral loops plus AI scoring: the complete stack",
        paragraphs: [
          "Referral waitlists grow faster but can attract lower-quality signups. People join just to get a referral position, not because they want your product. AI scoring identifies this pattern: high signup velocity with declining average grade suggests referral farming.",
          "The optimal stack combines referral boost (viral growth) with AI validation (quality filter). Share to grow the list, score to know when to launch. Tools that do both — without charging per email — are the sweet spot for indie hackers.",
        ],
      },
    ],
    cta: {
      title: "Ready to validate your waitlist before launch?",
      subtitle: "5 free AI analyses · score every signup A–F",
      button: "Create your first AI waitlist",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 AI 等候名单验证指南 — 上线前评估报名质量",
      description:
        "等候名单报名可能有 40% 是无效线索。了解 AI 线索评分如何验证报名质量、过滤一次性邮箱、判断何时上线。Prefinery 平替 $9.9/月。",
    },
    h1: "2026 独立开发者 AI 等候名单验证：上线前评估报名质量",
    updated: "2026 年 6 月更新 · 阅读约 12 分钟",
    intro: [
      "你花了两周搭建等候名单。发到推特、Indie Hackers，嵌入预告落地页。报名到了 200 人，你觉得可以上线了。导出 CSV 后发现问题：40% 是一次性邮箱，30% 是再也没打开过你邮件的 Gmail，只有 12 个看起来像真实潜在客户。",
      "这是产品等候名单的隐藏失败模式。收集邮箱很容易，收集会真正付费的人的邮箱很难。大多数等候名单工具 — Prefinery、GetWaitlist、LaunchList — 只统计报名数，不告诉你这些报名值不值得上线通知。",
      "在 r/SaaS 上，创始人反复问：「怎么知道等候名单可以上线了？」Indie Hackers 上有人说：「我向 300 个等候名单用户上线，只有 3 个付费。哪里出了问题？」答案通常是报名质量，不是数量。",
      "AI 等候名单验证解决这个问题。不再把每个邮箱一视同仁，而是根据域名类型、邮箱格式、意向信号给每个报名评 A 到 F。你获得整个名单的健康等级和可执行建议：立即上线、继续收集、或开启邮箱验证过滤垃圾报名。",
      "本指南解释为什么报名质量比数量更重要、AI 线索评分如何运作、何时上线 vs 继续等待，以及如何选择能在 ship 之前帮你验证的工具。",
    ],
    sections: [
      {
        h2: "为什么等候名单数量会误导独立开发者",
        paragraphs: [
          "500 人报名的等候名单感觉像验证了需求。其实不然。虚荣指标每周都在杀死独立上线。创始人看到大数字，信心满满地 ship，然后困惑为什么转化率只有 1%。",
          "常见垃圾报名来源包括：",
        ],
        list: [
          "一次性邮箱服务（mailinator、guerrillamail）— 机器人和随便看看的人",
          "随机字符串的免费 Gmail/Yahoo — 低意向好奇",
          "竞品调研 — 他们报名是为了看你做什么",
          "刷推荐 — 只为获得推荐链接排位而报名",
        ],
        after: [
          "100 个企业域名、专业邮箱格式的报名，比 500 个随机 Gmail 更有价值。AI 评分让你在浪费上线邮件之前就看清楚。",
        ],
      },
      {
        h2: "AI 线索评分如何为等候名单工作",
        paragraphs: ["AI 等候名单验证从多个信号分析每个报名："],
        ordered: [
          "域名类型 — 企业邮箱（company.com）比免费邮箱得分更高",
          "一次性邮箱检测 — mailinator 和 tempmail 域名即时标记",
          "邮箱格式 — firstname.lastname@ 模式暗示真人",
          "意向启发式 — 数字过多的本地部分和过短地址得分更低",
        ],
        after: [
          "每个报名获得 A–F 等级。A 和 B 是高意向线索，值得个人触达。C 是中立。D 和 F 应在上线时过滤或降低优先级。",
          "汇总分析给出整个名单的健康分（0–100）和等级（优秀/良好/一般/较差）。建议根据数据自适应：35% 企业域名就建议 B2B 定价；一次性邮箱超 10% 就建议开启邮箱验证。",
        ],
      },
      {
        h2: "2026 带验证功能的等候名单工具对比",
        tools: [
          {
            h3: "Prefinery — $99+/月",
            p: "完整病毒式等候名单，有推荐和排行榜。没有内置线索质量评分。导出 CSV 后手动检查邮箱。对 solo 创始人来说定价过高。",
          },
          {
            h3: "GetWaitlist / LaunchList — $29–49/月",
            p: "干净的报名页和推荐功能。统计报名但不评分质量。上线前仍需手动过滤垃圾。",
          },
          {
            h3: "WaitStack — $19 一次性",
            p: "开发者优先，有 API 接入。Scale 档（$29/月）提到 AI 评分。适合想要 headless 集成的技术创始人。",
          },
          {
            h3: "Lineup — $9/月",
            p: "为独立开发者打造，有 MRR 计数器和自动发推里程碑。聚焦增长机制，不是报名质量验证。",
          },
          {
            h3: "AI 等候名单验证 — $9.9/月 一口价",
            p: "为独立创始人打造：Prefinery 式等候名单 + 每个报名的 AI 线索评分。A–F 等级、健康分析、上线建议。",
            link: { href: "/join", text: "免费体验 5 次 AI 分析", suffix: "，之后 $9.9/月 一口价，不按邮箱收费。" },
          },
        ],
      },
      {
        h2: "何时上线：健康分决策框架",
        paragraphs: ["用等候名单健康分决定时机："],
        ordered: [
          "健康分 75+ 且一次性邮箱 <5% — 可以上线，优先邮件触达 A/B 级线索",
          "健康分 60–74 — 名单不错，全量上线前先向头部线索发调研",
          "健康分 45–59 — 质量一般，先在创始人社区加强分发",
          "健康分低于 45 — 再等等，改善报名来源，开启邮箱验证",
          "总报名不足 50 — 是数量问题不是质量问题，先多分享再分析",
        ],
        after: [
          "最糟糕的上线错误是向看起来很大但转化很差的名单 ship。健康分 72、127 个报名，每次都胜过健康分 38、500 个报名。",
        ],
      },
      {
        h2: "AI 验证的实用上线工作流",
        paragraphs: ["推荐的独立上线流程："],
        ordered: [
          "创建等候名单，分享到推特、Indie Hackers 和落地页",
          "至少收集 50 个报名后再做第一次 AI 分析",
          "查看质量分布 — 注意企业邮箱占比和一次性邮箱占比",
          "按 AI 建议执行（开启验证、瞄准 B2B、继续收集）",
          "导出 A/B 级线索做个人化上线邮件",
          "向全名单发上线邮件，但优先用定制内容触达高等级线索",
        ],
        after: [
          "上线前做验证的创始人报告等候名单到付费的转化率高 3–5 倍。差别不在产品 — 在于向对的人上线。",
        ],
      },
      {
        h2: "推荐裂变 + AI 评分：完整组合",
        paragraphs: [
          "推荐式等候名单增长更快，但也可能吸引低质量报名。有人只为获得推荐排位而加入，并非真的想要你的产品。AI 评分能识别这个模式：报名增速高但平均等级下降，暗示在刷推荐。",
          "最优组合是推荐裂变（病毒增长）+ AI 验证（质量过滤）。分享来扩大名单，评分来判断何时上线。两者兼备、不按邮箱收费的工具，是独立开发者的甜蜜点。",
        ],
      },
    ],
    cta: {
      title: "准备在上线前验证等候名单了吗？",
      subtitle: "免费 5 次 AI 分析 · 每个报名 A–F 评分",
      button: "创建第一个 AI 等候名单",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
