import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "We Work Remotely $149/yr? · $9.9/mo",
    title: "Remote jobs board for indie hackers",
    subtitle:
      "200+ curated remote roles with transparent salaries. 5 free job views, then $9.9/mo. Companies post unlimited for one flat price.",
    ctaPrimary: "Browse jobs",
    ctaPrimaryHref: "/jobs",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free views · then $9.9/mo",
    latestJobsTitle: "Latest remote jobs",
    viewAll: "View all →",
    stats: [
      { stat: "$9.9", label: "flat/mo vs WWR $149/yr" },
      { stat: "200+", label: "remote roles updated daily" },
      { stat: "5 free", label: "job detail views to try" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Filter by stack",
          desc: "React, Go, PM, Design — filter by skills and timezone overlap",
        },
        {
          step: "2",
          title: "See real salaries",
          desc: "Members unlock full salary ranges and direct apply links",
        },
        {
          step: "3",
          title: "Apply in one click",
          desc: "No recruiter middleman — HR posts directly on the board",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🎯",
        title: "Curated remote only",
        desc: "No hybrid bait-and-switch. Every role is fully remote or async-friendly.",
      },
      {
        icon: "💰",
        title: "Transparent salaries",
        desc: "See compensation upfront — no 'competitive salary' black holes.",
      },
      {
        icon: "🔍",
        title: "Stack + timezone filters",
        desc: "Find roles that match your skills and overlap with your team.",
      },
      {
        icon: "📢",
        title: "Unlimited company posts",
        desc: "Members can post unlimited jobs — reach indie hackers directly.",
      },
    ],
    testimonialsTitle: "What job seekers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Frontend dev · Lisbon",
        text: "WWR wanted $149/yr just to see salaries. Here I get 5 free views and $9.9/mo after — way better for indie hackers.",
      },
      {
        name: "李明",
        role: "Go engineer · 远程",
        text: "Filtered React roles in 10 seconds. Salary data was accurate — applied to 3 jobs the same day.",
      },
      {
        name: "Sarah T.",
        role: "PM · Mexico City",
        text: "Posted our startup role for $9.9/mo flat. Got 12 qualified applicants in a week — no LinkedIn Premium needed.",
      },
    ],
    closing: {
      title: "Stop scrolling LinkedIn for remote gigs",
      subtitle: "5 free views · then $9.9/mo for unlimited",
      ctaPrimary: "Browse jobs",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Job board preview",
      caption: "Filter by stack · unlock salary + apply link",
      preview:
        "🔍 Remote · React + TypeScript\n\n💳 Stripe     Senior FE    $180k–$240k  🌍 Global\n🦊 GitLab     DevOps       $120k–$160k  🌍 EMEA\n📝 Notion     PM           $150k–$190k  🌍 Americas\n\n→ 5 free detail views · then $9.9/mo",
    },
  },
  zh: {
    badge: "We Work Remotely $149/年？· $9.9/月",
    title: "独立开发者远程工作板",
    subtitle:
      "200+ 精选远程岗位，薪资透明。免费体验 5 次查看详情，之后 $9.9/月。企业一口价无限发帖。",
    ctaPrimary: "浏览职位",
    ctaPrimaryHref: "/jobs",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    latestJobsTitle: "最新远程职位",
    viewAll: "查看全部 →",
    stats: [
      { stat: "$9.9", label: "一口价/月，WWR 要 $149/年" },
      { stat: "200+", label: "远程岗位每日更新" },
      { stat: "5 次", label: "免费查看职位详情" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "按技术栈筛选",
          desc: "React、Go、产品、设计 — 按技能和时区重叠筛选",
        },
        {
          step: "2",
          title: "查看真实薪资",
          desc: "会员解锁完整薪资范围和直链申请地址",
        },
        {
          step: "3",
          title: "一键申请",
          desc: "无猎头中介 — HR 直接在板上发布",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🎯",
        title: "精选纯远程",
        desc: "没有混合办公陷阱。每个岗位都是全远程或异步友好。",
      },
      {
        icon: "💰",
        title: "薪资透明",
        desc: "薪资 upfront 展示 — 告别「面议」黑箱。",
      },
      {
        icon: "🔍",
        title: "技术栈 + 时区筛选",
        desc: "找到匹配你技能和团队时区重叠的岗位。",
      },
      {
        icon: "📢",
        title: "企业无限发帖",
        desc: "会员可无限发布职位 — 直达独立开发者社区。",
      },
    ],
    testimonialsTitle: "求职者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "前端开发 · 里斯本",
        text: "WWR $149/年才能看薪资。这里免费 5 次，之后 $9.9/月 — 对独立开发者友好多了。",
      },
      {
        name: "李明",
        role: "Go 工程师 · 远程",
        text: "10 秒筛出 React 岗位。薪资数据准确 — 当天就投了 3 个。",
      },
      {
        name: "Sarah T.",
        role: "产品经理 · 墨西哥城",
        text: "$9.9/月一口价发了我们创业公司的职位。一周 12 个合格申请 — 不用 LinkedIn Premium。",
      },
    ],
    closing: {
      title: "别再刷 LinkedIn 找远程工作了",
      subtitle: "免费 5 次查看 · 之后 $9.9/月 不限量",
      ctaPrimary: "浏览职位",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "职位板预览",
      caption: "按技术栈筛选 · 解锁薪资与申请链接",
      preview:
        "🔍 远程 · React + TypeScript\n\n💳 Stripe     高级前端    $180k–$240k  🌍 全球\n🦊 GitLab     DevOps      $120k–$160k  🌍 欧洲\n📝 Notion     产品经理    $150k–$190k  🌍 美洲\n\n→ 免费 5 次详情查看 · 之后 $9.9/月",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Remote Jobs",
    subtitle: "One price, unlimited job views + unlimited company posts.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs We Work Remotely $149/yr · cancel anytime",
    perks: [
      "Unlimited job detail views",
      "200+ remote roles updated daily",
      "Filter by stack & timezone",
      "Unlimited company job posts",
      "New job match email alerts",
      "Remote salary trend reports",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free views, then subscribe?",
    whyItems: [
      "Job data collection and verification costs money",
      "Paying users = high-quality community, no spam listings",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅远程工作板",
    subtitle: "一口价，无限查看职位 + 企业无限发帖。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 We Work Remotely $149/年 · 随时可取消",
    perks: [
      "无限查看职位详情",
      "200+ 远程岗位每日更新",
      "按技术栈/时区智能筛选",
      "企业无限发布远程职位",
      "新职位匹配邮件提醒",
      "远程薪资趋势月报",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "职位数据采集和验证需要真实成本",
      "付费用户 = 高质量社区，没有垃圾职位",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
