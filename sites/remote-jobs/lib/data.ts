export type Job = {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: "全职" | "兼职" | "合同";
  salary: string;
  tags: string[];
  posted: string;
  featured?: boolean;
  applyUrl?: string;
  description?: string;
  requirements?: string[];
};

export const jobs: Job[] = [
  {
    id: "stripe-fe",
    title: "Senior Frontend Engineer",
    company: "Stripe",
    logo: "💳",
    location: "全球远程",
    type: "全职",
    salary: "$180k–$240k",
    tags: ["React", "TypeScript", "Remote"],
    posted: "2 天前",
    featured: true,
    applyUrl: "https://stripe.com/jobs",
    description: "构建全球支付基础设施的前端体验，负责 Dashboard 和 Checkout 组件库。",
    requirements: ["5+ 年前端经验", "React/TypeScript 精通", "英语流利"],
  },
  {
    id: "gitlab-devops",
    title: "DevOps Engineer",
    company: "GitLab",
    logo: "🦊",
    location: "EMEA 远程",
    type: "全职",
    salary: "$120k–$160k",
    tags: ["Kubernetes", "CI/CD", "Remote"],
    posted: "1 天前",
    featured: true,
    applyUrl: "https://about.gitlab.com/jobs",
    description: "维护 GitLab SaaS 基础设施，优化 CI/CD 流水线性能。",
    requirements: ["K8s 运维经验", "Terraform", "英语工作语言"],
  },
  {
    id: "notion-pm",
    title: "Product Manager",
    company: "Notion",
    logo: "📝",
    location: "美国/加拿大远程",
    type: "全职",
    salary: "$150k–$200k",
    tags: ["Product", "B2B", "Remote"],
    posted: "3 天前",
    applyUrl: "https://notion.so/careers",
    description: "负责 Notion AI 功能的产品规划，与工程和设计紧密协作。",
    requirements: ["3+ 年 PM 经验", "SaaS 背景", "数据驱动决策"],
  },
  {
    id: "vercel-sre",
    title: "Site Reliability Engineer",
    company: "Vercel",
    logo: "▲",
    location: "全球远程",
    type: "全职",
    salary: "$140k–$190k",
    tags: ["SRE", "Edge", "Remote"],
    posted: "4 天前",
    applyUrl: "https://vercel.com/careers",
    description: "保障 Vercel Edge Network 高可用，构建可观测性平台。",
    requirements: ["分布式系统经验", "Go/Rust", "On-call 轮值"],
  },
  {
    id: "linear-design",
    title: "Product Designer",
    company: "Linear",
    logo: "◆",
    location: "欧洲远程",
    type: "全职",
    salary: "$100k–$140k",
    tags: ["Design", "Figma", "Remote"],
    posted: "5 天前",
    applyUrl: "https://linear.app/careers",
    description: "设计 Linear 项目管理工具的核心交互，追求像素级完美。",
    requirements: ["4+ 年产品设计", "B2B SaaS", "作品集必需"],
  },
  {
    id: "shopify-ruby",
    title: "Senior Ruby Engineer",
    company: "Shopify",
    logo: "🛒",
    location: "北美远程",
    type: "全职",
    salary: "$130k–$170k",
    tags: ["Ruby", "Rails", "Remote"],
    posted: "1 周前",
    applyUrl: "https://shopify.com/careers",
    description: "开发 Shopify 商家后台核心功能，服务数百万独立店主。",
    requirements: ["Ruby on Rails 5+", "大型系统经验", "英语沟通"],
  },
  {
    id: "supabase-go",
    title: "Backend Engineer (Go)",
    company: "Supabase",
    logo: "⚡",
    location: "全球远程",
    type: "全职",
    salary: "$110k–$150k",
    tags: ["Go", "PostgreSQL", "Open Source"],
    posted: "6 天前",
    applyUrl: "https://supabase.com/careers",
    description: "构建 Supabase 开源后端即服务，PostgreSQL 扩展开发。",
    requirements: ["Go 语言", "数据库内核了解", "开源贡献优先"],
  },
  {
    id: "figma-eng",
    title: "Graphics Engineer",
    company: "Figma",
    logo: "🎨",
    location: "美国远程",
    type: "全职",
    salary: "$160k–$220k",
    tags: ["WebGL", "C++", "Remote"],
    posted: "3 天前",
    applyUrl: "https://figma.com/careers",
    description: "优化 Figma 画布渲染引擎，WebGL/WebGPU 性能调优。",
    requirements: ["图形编程经验", "WebGL/Canvas", "C++ 或 Rust"],
  },
  {
    id: "remote-cn-pm",
    title: "远程产品经理",
    company: "飞书",
    logo: "🐦",
    location: "中国远程",
    type: "全职",
    salary: "¥40k–¥60k/月",
    tags: ["Product", "协作工具", "Remote"],
    posted: "2 天前",
    applyUrl: "https://jobs.bytedance.com",
    description: "负责飞书文档/表格产品迭代，服务国内企业协作场景。",
    requirements: ["3+ 年 B 端 PM", "中文母语", "远程协作经验"],
  },
  {
    id: "indie-fullstack",
    title: "全栈工程师（独立项目）",
    company: "Indie SaaS Studio",
    logo: "🚀",
    location: "全球远程",
    type: "合同",
    salary: "$80–$120/h",
    tags: ["Next.js", "Indie", "Contract"],
    posted: "今天",
    applyUrl: "mailto:jobs@indiesaas.studio",
    description: "为独立开发者客户快速 ship MVP，Next.js + Stripe 技术栈。",
    requirements: ["全栈独立开发", "Ship fast 心态", "英文文档能力"],
  },
];

export const features = [
  {
    icon: "🌍",
    title: "200+ 远程职位",
    desc: "每日更新，覆盖全球科技公司与中国远程友好企业",
  },
  {
    icon: "💰",
    title: "透明薪资范围",
    desc: "会员可见完整薪资、股权和福利信息，不做标题党",
  },
  {
    icon: "📢",
    title: "企业无限发帖",
    desc: "¥199/月发布不限数量远程职位，直达高质量求职者",
  },
  {
    icon: "🔔",
    title: "新职位邮件提醒",
    desc: "按技术栈和时区订阅，不错过匹配你的机会",
  },
  {
    icon: "🏷️",
    title: "智能标签筛选",
    desc: "React、Go、Design、PM… 一键过滤，秒找对口岗位",
  },
  {
    icon: "📊",
    title: "远程趋势报告",
    desc: "每月发布远程薪资中位数、热门技能栈数据",
  },
];

export const testimonials = [
  {
    name: "张明",
    role: "前端工程师 · 现居大理",
    text: "在这里找到了 Stripe 的远程岗，薪资透明省了很多沟通成本。",
  },
  {
    name: "Lisa Chen",
    role: "HR · 10 人创业团队",
    text: "发帖简单，来的都是认真找远程工作的人，比 LinkedIn 精准多了。",
  },
  {
    name: "王浩",
    role: "DevOps · 数字游民",
    text: "免费体验了 5 次详情页，确认平台靠谱后直接年费，值。",
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

export function searchJobs(query: string, tag?: string): Job[] {
  const q = query.toLowerCase().trim();
  return jobs.filter((job) => {
    const matchTag = !tag || job.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()));
    if (!q) return matchTag;
    const haystack = `${job.title} ${job.company} ${job.tags.join(" ")} ${job.location}`.toLowerCase();
    return matchTag && haystack.includes(q);
  });
}
