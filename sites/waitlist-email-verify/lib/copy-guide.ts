import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Waitlist Email Validation Guide — MX Checks, Typo Fix, Double Opt-in for Indie Hackers",
      description:
        "30% of waitlist signups may be typos or disposable emails. Learn MX validation, typo detection, double opt-in, and AI conversion scoring. $9.9/mo alternative to Waitle + Lineup.",
    },
    h1: "2026 Waitlist Email Validation for Indie Hackers: Clean Your List Before Launch",
    updated: "Updated July 2026 · 10 min read",
    intro: [
      "You launched a waitlist on Waitle or Lineup. Email validation caught some junk — great. But when you exported the CSV, you still had questions: How many signups are actually launch-ready? Which emails were typos that never got fixed? What percentage are corporate domains signaling B2B interest?",
      "Waitle and Lineup validate email format and block some disposable addresses. LaunchList offers fraud detection on paid tiers. But none of them tell you when your list is ready to launch, or give you AI-powered conversion insights beyond basic validation.",
      "On r/SaaS, founders repeatedly ask: \"How do I clean my waitlist before launch?\" Another wrote on Indie Hackers: \"18% of my signups were gmial.com typos — I lost 40 real leads.\" The gap is not validation alone — it's validation plus conversion intelligence.",
      "Waitlist Verify combines MX record checks, typo suggestions (gmial.com → gmail.com), disposable email blocking, double opt-in, and AI conversion scoring. You get A–F grades per signup, a health score for your entire list, and launch-readiness recommendations.",
      "This guide covers why email validation alone is not enough, how MX and typo detection work, when to enable double opt-in, how AI conversion scoring complements validation, and how to pick a tool that validates and converts.",
    ],
    sections: [
      {
        h2: "Why basic email validation fails indie founders",
        paragraphs: [
          "Most waitlist tools check if an email looks valid. That catches obvious junk but misses the problems that kill launch conversion:",
        ],
        list: [
          "Typo domains (gmial.com, hotmial.com) — pass format checks but bounce at launch",
          "Disposable emails that pass initial validation — bots sign up faster than filters update",
          "No MX record verification — domain exists but cannot receive mail",
          "No conversion signal — you know emails are valid but not if signups will buy",
        ],
        after: [
          "A list of 100 verified corporate-domain signups is worth more than 500 unvalidated Gmail addresses. Validation plus conversion scoring makes this visible before you waste a launch email.",
        ],
      },
      {
        h2: "MX checks, typo detection, and double opt-in explained",
        paragraphs: ["Production-grade waitlist email validation uses three layers:"],
        ordered: [
          "MX record verification — confirms the domain can actually receive email",
          "Typo detection — flags gmial.com, outlok.com, yahooo.com with one-click fix suggestions",
          "Double opt-in — requires click-to-confirm before counting signup, blocking bots and disposables",
        ],
        after: [
          "Each layer reduces junk. Combined, they typically improve valid-email ratio from 70% to 90%+. AI conversion scoring then grades remaining signups A through F based on domain type, format, and intent signals.",
        ],
      },
      {
        h2: "2026 waitlist email validation tools compared",
        tools: [
          {
            h3: "Waitle — subscription",
            p: "Built-in email validation with MX checks and typo suggestions. Good validation but no AI conversion scoring or launch-readiness analysis.",
          },
          {
            h3: "Lineup — $9/mo",
            p: "Email verification on free tier. Indie-hacker features like MRR counter and auto-tweet. Focuses on growth, not conversion intelligence.",
          },
          {
            h3: "LaunchList — one-time $19+",
            p: "Fraud detection and email validation on paid tiers. One-time pricing per project. No AI conversion analysis.",
          },
          {
            h3: "Waitspot — $20 one-time",
            p: "Double opt-in and email verification free. Good for budget founders. No AI scoring or B2B signal detection.",
          },
          {
            h3: "Waitlist Verify — $9.9/mo flat",
            p: "MX + typo + disposable validation, double opt-in, plus AI conversion scoring on every signup. Launch-readiness recommendations included.",
            link: { href: "/join", text: "5 free email audits to try", suffix: ", then $9.9/mo flat." },
          },
        ],
      },
      {
        h2: "When to launch: the conversion score framework",
        paragraphs: ["Use your conversion score alongside validation metrics:"],
        ordered: [
          "90%+ valid emails with <5% disposable — launch ready",
          "70–89% valid with typo fixes applied — fix remaining typos, then launch",
          "Under 70% valid — enable double opt-in and wait for more signups",
          "35%+ corporate domains — consider B2B pricing at launch",
        ],
        after: [
          "Validation tells you if emails are real. Conversion scoring tells you if signups will buy. Both matter for indie launch success.",
        ],
      },
      {
        h2: "How to set up email-validated waitlists in 5 minutes",
        paragraphs: [
          "Create a waitlist, enable email verification and double opt-in, share your link on Twitter and Indie Hackers. As signups arrive, run an AI email audit to see valid ratio, typo count, and launch recommendations.",
          "Export verified emails as CSV when your conversion score hits 75+ with under 5% disposable addresses. Send launch survey to A/B grade leads first for highest conversion.",
        ],
        cta: { href: "/lists", text: "Create your first validated waitlist free" },
      },
    ],
    cta: {
      title: "Ready to validate your waitlist before launch?",
      subtitle: "5 free email audits · MX + typo + AI conversion scoring",
      button: "Create your first validated waitlist",
    },
  },
  zh: {
    meta: {
      title: "2026 等候名单邮件验证指南 — MX 检测、拼写纠错、双重确认",
      description:
        "30% 的等候名单报名可能是拼写错误或一次性邮箱。学习 MX 验证、拼写检测、双重确认与 AI 转化评分。$9.9/月 Waitle + Lineup 替代方案。",
    },
    h1: "2026 独立开发者等候名单邮件验证：上线前清理你的名单",
    updated: "更新于 2026 年 7 月 · 阅读约 10 分钟",
    intro: [
      "你在 Waitle 或 Lineup 上发布了等候名单。邮箱验证拦截了一些垃圾报名——不错。但导出 CSV 后你仍有疑问：多少报名真正适合上线？哪些邮箱是未修复的拼写错误？多少比例是企业域名，暗示 B2B 兴趣？",
      "Waitle 和 Lineup 验证邮箱格式并拦截部分一次性地址。LaunchList 在付费档提供欺诈检测。但它们都不会告诉你名单何时适合上线，也不会提供超越基础验证的 AI 转化洞察。",
      "在 r/SaaS 上，创始人反复问：「上线前如何清理等候名单？」另一位在 Indie Hackers 写道：「18% 的报名是 gmial.com 拼写错误——我丢了 40 个真实线索。」缺口不只是验证——而是验证加转化智能。",
      "等候名单邮件验证结合 MX 记录检测、拼写建议（gmial.com → gmail.com）、一次性邮箱拦截、双重确认与 AI 转化评分。每个报名获得 A–F 等级，整个名单有健康分与上线就绪建议。",
      "本指南涵盖为何仅靠邮箱验证不够、MX 与拼写检测如何工作、何时开启双重确认、AI 转化评分如何补充验证，以及如何选择能验证且能转化的工具。",
    ],
    sections: [
      {
        h2: "为何基础邮箱验证让独立开发者失望",
        paragraphs: ["多数等候名单工具只检查邮箱格式是否正确。这能抓明显垃圾，但错过扼杀上线转化的问题："],
        list: [
          "拼写错误域名（gmial.com、hotmial.com）——通过格式检查但上线时退信",
          "通过初检的一次性邮箱——机器人注册比过滤器更新更快",
          "无 MX 记录验证——域名存在但无法收信",
          "无转化信号——知道邮箱有效但不知道报名是否会购买",
        ],
        after: [
          "100 个已验证企业域名报名比 500 个未验证 Gmail 更有价值。验证加转化评分让你在浪费上线邮件前看清这一点。",
        ],
      },
      {
        h2: "MX 检测、拼写纠错与双重确认详解",
        paragraphs: ["生产级等候名单邮箱验证分三层："],
        ordered: [
          "MX 记录验证——确认域名能真正收信",
          "拼写检测——标记 gmial.com、outlok.com、yahooo.com，支持一键纠错",
          "双重确认——需点击确认后才计入报名，拦截机器人与一次性邮箱",
        ],
        after: [
          "每层减少垃圾。组合使用通常将有效邮箱比例从 70% 提升到 90%+。AI 转化评分再按域名类型、格式与意向信号给剩余报名 A–F 分级。",
        ],
      },
      {
        h2: "2026 等候名单邮箱验证工具对比",
        tools: [
          {
            h3: "Waitle — 订阅制",
            p: "内置邮箱验证含 MX 检测与拼写建议。验证不错但无 AI 转化评分或上线就绪分析。",
          },
          {
            h3: "Lineup — $9/月",
            p: "免费档含邮箱验证。独立开发者功能如 MRR 计数器与自动推文。侧重增长，非转化智能。",
          },
          {
            h3: "LaunchList — 一次性 $19+",
            p: "付费档含欺诈检测与邮箱验证。按项目一次性付费。无 AI 转化分析。",
          },
          {
            h3: "Waitspot — 一次性 $20",
            p: "双重确认与邮箱验证免费。适合预算紧张的创始人。无 AI 评分或 B2B 信号检测。",
          },
          {
            h3: "等候名单邮件验证 — $9.9/月一口价",
            p: "MX + 拼写 + 一次性验证、双重确认，外加每个报名的 AI 转化评分。含上线就绪建议。",
            link: { href: "/join", text: "免费体验 5 次邮箱审计", suffix: "，之后 $9.9/月一口价。" },
          },
        ],
      },
      {
        h2: "何时上线：转化分决策框架",
        paragraphs: ["结合验证指标使用转化分："],
        ordered: [
          "90%+ 有效邮箱且一次性 <5% — 可以上线",
          "70–89% 有效且已修复拼写 — 修复剩余拼写后上线",
          "有效不足 70% — 开启双重确认并等待更多报名",
          "35%+ 企业域名 — 上线时考虑 B2B 定价",
        ],
        after: ["验证告诉你邮箱是否真实。转化评分告诉你报名是否会购买。两者对独立开发者上线成功都重要。"],
      },
      {
        h2: "5 分钟搭建邮箱验证等候名单",
        paragraphs: [
          "创建等候名单，开启邮箱验证与双重确认，在推特和 Indie Hackers 分享链接。报名进来后运行 AI 邮箱审计，查看有效比例、拼写数量与上线建议。",
          "转化分达 75+ 且一次性邮箱不足 5% 时，导出已验证邮箱 CSV。优先向 A/B 级线索发送上线调研以获得最高转化。",
        ],
        cta: { href: "/lists", text: "免费创建你的第一个验证等候名单" },
      },
    ],
    cta: {
      title: "准备好上线前验证你的等候名单了吗？",
      subtitle: "免费 5 次邮箱审计 · MX + 拼写 + AI 转化评分",
      button: "创建你的第一个验证等候名单",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
