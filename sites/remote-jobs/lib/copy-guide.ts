import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 How to Find Remote Jobs as a Developer — Complete Guide",
      description:
        "From skill prep to salary negotiation: a step-by-step guide to landing remote roles. React/Go/PM trends, platform comparison, and red flags to avoid.",
    },
    h1: "2026 How to Find Remote Jobs as a Developer: Complete Guide",
    updated: "Updated June 2026 · 8 min read",
    intro: [
      "Remote work is no longer a pandemic exception — it's how global tech companies hire by default. For developers outside the US/EU, a remote role can mean earning in USD while living in a lower cost-of-living city. But the path isn't obvious: LinkedIn is full of spam, and most local job boards have almost zero real remote listings.",
      "This guide walks through whether you're ready for remote, where to find quality listings, how to adapt your resume, and what to expect in interviews and salary negotiations.",
    ],
    sections: [
      {
        h2: "1. Are you ready for remote?",
        paragraphs: [
          "Successful remote developers typically have: fluent English reading/writing, self-directed time management, strong async communication (clear docs beat meetings), and at least one globally in-demand skill.",
          "Hot remote skill stacks in 2026:",
        ],
        list: [
          "Frontend: React, Next.js, TypeScript — highest demand, highest competition",
          "Backend: Go, Rust, Node.js — Go is beloved at infra companies (Stripe, GitLab)",
          "DevOps/SRE: Kubernetes, Terraform — high pay, high experience bar",
          "Product/Design: B2B SaaS background + English — more PMs going remote every year",
        ],
      },
      {
        h2: "2. Where to find remote jobs",
        paragraphs: [
          "Remote job platforms fall into three buckets: general (LinkedIn, Indeed), remote-only (We Work Remotely, Remote OK), and curated boards (higher quality, less spam).",
          "General platforms return lots of \"remote but US timezone only\" or \"remote but local pay\" hybrid roles. Curated boards filter for truly global-friendly companies with transparent salary ranges.",
        ],
        afterLink: {
          prefix: "Our ",
          href: "/jobs",
          label: "remote jobs board",
          suffix:
            " is curated: 200+ roles updated daily from Stripe, GitLab, Notion, and remote-friendly startups. Try 5 free detail views, then ",
        },
      },
      {
        h2: "3. Resume and portfolio tips",
        ordered: [
          "Quantify impact: not \"did frontend work\" but \"cut Dashboard load from 3s to 800ms, DAU +12%\"",
          "GitHub links: 2–3 projects with solid READMEs",
          "One-page English resume: no photo, no age, no marital status",
          "Remote keywords: \"3 years remote across UTC+8 and US timezones\" in your summary",
        ],
      },
      {
        h2: "4. Interview differences",
        paragraphs: [
          "Typical remote loop: Recruiter screen (30min) → Hiring Manager (45min) → Team loop (2–3 rounds) → Offer. All video, rarely onsite.",
          "Behavioral interviews weigh more than in many local markets. Prepare STAR answers: Situation, Task, Action, Result. Common questions: \"Tell me about disagreeing with your manager\" and \"How do you handle async communication?\"",
        ],
      },
      {
        h2: "5. Salary negotiation",
        paragraphs: [
          "Remote packages include: base salary, equity (options/RSU), benefits (health, equipment, coworking stipend), and PTO (US companies often offer 15–25 days).",
          "Mid-level US remote engineers typically earn $120k–$160k; senior $160k–$220k. European remote tends lower but still strong vs local rates. Watch for EOR (Employer of Record) setups that deduct local taxes — net pay varies by country.",
        ],
      },
      {
        h2: "6. Red flags to avoid",
        list: [
          "❌ \"100% remote\" but requires EST 9–5 attendance — timezone trap",
          "❌ Salary says \"competitive\" with no range — likely below market",
          "❌ Free test project before interview — possible spec work scam",
          "❌ No company website / empty LinkedIn — possible shell company",
          "✅ Transparent salary, real team page, Glassdoor reviews — prioritize these",
        ],
      },
      {
        h2: "7. Next steps",
        paragraphs: [
          "Finding remote work is a long game, not 10 applications and done. Block 2 hours weekly to browse new listings, maintain GitHub, and write English technical posts — the best remote-friendly signal you can send.",
        ],
        afterLink: {
          prefix: "Browse ",
          href: "/jobs",
          label: "latest remote jobs",
          suffix: " now — 5 free detail views. Hiring remotely? ",
        },
      },
    ],
    cta: {
      title: "Ready to browse curated remote roles?",
      subtitle: "5 free views · then $9.9/mo for unlimited",
      button: "Browse jobs →",
    },
  },
  zh: {
    meta: {
      title: "2026 中国开发者如何找到远程工作 — 完整指南",
      description:
        "从技能准备、平台选择到薪资谈判，手把手教你找到海外远程岗位。含 React/Go/PM 热门方向分析和避坑清单。",
    },
    h1: "2026 中国开发者如何找到远程工作：完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 8 分钟",
    intro: [
      "远程工作不再是疫情期间的临时方案，而是全球科技公司的常态雇佣模式。对中国开发者来说，找到一份海外远程岗位意味着以美元/欧元薪资生活在中国二三线城市，生活质量可能翻倍。但路径并不透明——LinkedIn 上 spam 职位太多，Boss 直聘几乎没有真正的 remote 岗。",
      "这篇指南基于数百个成功案例，帮你系统性地判断自己是否适合远程、去哪里找优质职位、如何改简历，以及面试和薪资谈判要注意什么。",
    ],
    sections: [
      {
        h2: "一、先确认：你适合远程吗？",
        paragraphs: [
          "远程工作不是「不用通勤」这么简单。成功的远程开发者通常具备：英语读写流利（会议口语可以慢慢练）、自律的时间管理、异步沟通能力（写清楚的文档比开会有价值），以及至少一项在全球市场有需求的核心技能。",
          "热门远程技能栈（2026 数据）：",
        ],
        list: [
          "前端：React、Next.js、TypeScript — 需求最大，竞争也最大",
          "后端：Go、Rust、Node.js — Go 在基础设施公司（Stripe、GitLab）极受欢迎",
          "DevOps/SRE：Kubernetes、Terraform — 薪资高，经验门槛也高",
          "产品/设计：B2B SaaS 背景 + 英语 — 国内 PM 转型远程的案例越来越多",
        ],
      },
      {
        h2: "二、去哪里找远程职位？",
        paragraphs: [
          "市面上的远程招聘平台可以分三类：综合型（LinkedIn、Indeed）、远程专属（We Work Remotely、Remote OK），以及 curated 精选板（质量更高、spam 更少）。",
          "综合平台的问题是：搜「remote」会出来大量「远程但要求美国时区」「远程但薪资按当地」的混合职位。精选远程板的优势是每一帖都经过筛选，薪资范围透明，且面向真正接受全球候选人的公司。",
        ],
        afterLink: {
          prefix: "我们的",
          href: "/jobs",
          label: "远程工作板",
          suffix:
            "属于第三类：200+ 职位每日更新，覆盖 Stripe、GitLab、Notion 等远程友好公司。非会员可免费体验 5 次查看完整详情，之后 ",
        },
      },
      {
        h2: "三、简历和作品集怎么改？",
        ordered: [
          "量化成果：不说「负责前端开发」，说「将 Dashboard 加载时间从 3s 降到 800ms，DAU 提升 12%」",
          "GitHub 链接：至少 2-3 个有 README 的开源项目或 side project",
          "英文简历一页：不要两页，不要照片，不要年龄婚姻状况",
          "Remote 关键词：在 summary 里写「3 years remote experience across UTC+8 and US timezones」",
        ],
      },
      {
        h2: "四、面试流程有什么不同？",
        paragraphs: [
          "海外远程面试通常是：Recruiter 电话（30min）→ Hiring Manager（45min 技术/行为）→ Team Loop（2-3 轮）→ Offer。全程视频，很少 onsite。",
          "行为面试（Behavioral Interview）比重比国内大。准备 STAR 格式回答：Situation、Task、Action、Result。常见问题：「Tell me about a time you disagreed with your manager」「How do you handle async communication?」",
        ],
      },
      {
        h2: "五、薪资谈判：别只比数字",
        paragraphs: [
          "远程 offer 的 package 通常包括：Base Salary、Equity（期权/RSU）、Benefits（健康保险、设备补贴、Coworking 津贴）、以及 PTO（带薪假期，美国公司通常 15-25 天）。",
          "生活在中国拿美元薪资，税后购买力可能相当于国内同级别的 2-3 倍。但注意：部分公司用 EOR（Employer of Record）雇佣中国员工，会扣当地社保和个税，实际到手需具体计算。",
        ],
      },
      {
        h2: "六、常见坑和避坑清单",
        list: [
          "❌ 「100% 远程但要求 EST 9-5 出勤」— 实质是换时区上班",
          "❌ 薪资写「competitive」不写范围 — 大概率低于预期",
          "❌ 要求先完成免费测试项目 — 可能是骗方案",
          "❌ 公司无官网 / LinkedIn 无员工 — 可能是 shell company",
          "✅ 薪资范围透明、团队页面真实、Glassdoor 有评价 — 优先考虑",
        ],
      },
      {
        h2: "七、下一步行动",
        paragraphs: [
          "远程工作的搜索是长期游戏，不是投 10 份简历就有回音。建议：每周固定 2 小时浏览新职位、维护 GitHub、写英文技术博客（这是最好的 remote-friendly 信号）。",
        ],
        afterLink: {
          prefix: "现在就去",
          href: "/jobs",
          label: "浏览最新远程职位",
          suffix: "，免费体验 5 次查看完整详情。如果你是 HR 想招远程人才，",
        },
      },
    ],
    cta: {
      title: "准备好浏览精选远程职位了吗？",
      subtitle: "免费 5 次查看 · 之后 $9.9/月 不限量",
      button: "浏览职位 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
