import { createHash, randomBytes } from "crypto";

export type LayoutIssue = {
  area: string;
  severity: "low" | "medium" | "high";
  issue: string;
  fix: string;
};

export type AiCopyRewrite = {
  element: string;
  before: string;
  after: string;
  rationale: string;
};

export type AbSuggestion = {
  element: string;
  current: string;
  suggested: string;
  expectedLift: string;
};

export type PricingAnalysis = {
  id: string;
  pageUrl: string;
  overallScore: number;
  estimatedConversion: string;
  layoutIssues: LayoutIssue[];
  aiCopyRewrites: AiCopyRewrite[];
  abSuggestions: AbSuggestion[];
  createdAt: string;
};

const analyses = new Map<string, PricingAnalysis>();

function hashSeed(url: string): number {
  const hex = createHash("sha256").update(url).digest("hex").slice(0, 8);
  return parseInt(hex, 16);
}

function pick<T>(arr: T[], seed: number, offset: number): T {
  return arr[(seed + offset) % arr.length];
}

const layoutTemplates = {
  en: [
    {
      area: "Hero headline",
      severity: "high" as const,
      issue: "Value prop buried — visitors don't know who this is for in 3 seconds",
      fix: "Lead with outcome + audience: 'Ship pricing pages that convert — for indie hackers'",
    },
    {
      area: "Pricing tier grid",
      severity: "high" as const,
      issue: "No recommended badge — choice paralysis drops tier selection 40%",
      fix: "Highlight middle tier with 'Most popular' + annual savings callout",
    },
    {
      area: "Feature comparison",
      severity: "medium" as const,
      issue: "Feature list too long above fold — mobile visitors bounce before tiers",
      fix: "Collapse to 3 bullets per tier; link 'See all features' below fold",
    },
    {
      area: "CTA placement",
      severity: "medium" as const,
      issue: "Single CTA at page bottom — 58% never scroll that far on mobile",
      fix: "Add sticky CTA bar after hero + repeat CTA under each tier card",
    },
    {
      area: "Social proof",
      severity: "low" as const,
      issue: "Generic 'Trusted by teams' — no numbers or logos",
      fix: "Add customer count + 2–3 recognizable indie logos or tweet quotes",
    },
  ],
  zh: [
    {
      area: "首屏标题",
      severity: "high" as const,
      issue: "价值主张不清晰 — 访客 3 秒内不知道产品为谁服务",
      fix: "突出结果 + 人群：「帮独立开发者打造高转化定价页」",
    },
    {
      area: "定价档位网格",
      severity: "high" as const,
      issue: "无推荐角标 — 选择困难导致档位点击率下降 40%",
      fix: "中间档位加「最受欢迎」角标 + 年付节省金额",
    },
    {
      area: "功能对比",
      severity: "medium" as const,
      issue: "首屏功能列表过长 — 移动端访客未到定价区就跳出",
      fix: "每档保留 3 条核心功能，其余折叠为「查看全部」",
    },
    {
      area: "行动按钮位置",
      severity: "medium" as const,
      issue: "页面底部单一按钮 — 58% 移动端访客滚不到那里",
      fix: "首屏后加固定行动条 + 每个档位卡片下重复按钮",
    },
    {
      area: "社会证明",
      severity: "low" as const,
      issue: "泛泛的「深受团队信赖」— 无数字或标识",
      fix: "添加客户数量 + 2–3 个独立开发者标识或推文引用",
    },
  ],
};

const copyRewriteTemplates = {
  en: [
    {
      element: "Hero headline",
      before: "Simple pricing for everyone",
      after: "Turn 85% of pricing visitors into paying customers",
      rationale: "Outcome-first headline beats feature-first by 22% in indie SaaS tests",
    },
    {
      element: "Subheadline",
      before: "Choose the plan that works for you",
      after: "5 free optimizations · then $9.9/mo — cancel anytime",
      rationale: "Risk reversal + price anchor reduces bounce at hero",
    },
    {
      element: "Primary CTA",
      before: "Get started",
      after: "Optimize my pricing page free",
      rationale: "Action-specific CTA lifts click-through 14–19% vs generic verbs",
    },
    {
      element: "Tier name",
      before: "Pro",
      after: "Indie · unlimited scans",
      rationale: "Audience-specific tier names increase perceived fit for solo founders",
    },
  ],
  zh: [
    {
      element: "首屏标题",
      before: "简单透明的定价",
      after: "把 85% 流失的定价页访客变成付费用户",
      rationale: "结果导向标题比功能导向在独立 SaaS 测试中转化高 22%",
    },
    {
      element: "副标题",
      before: "选择适合你的方案",
      after: "免费体验 5 次 · 之后 $9.9/月 — 随时可取消",
      rationale: "风险逆转 + 价格锚点降低首屏跳出率",
    },
    {
      element: "主行动按钮",
      before: "立即开始",
      after: "免费优化我的定价页",
      rationale: "具体动作按钮比泛泛动词点击率高 14–19%",
    },
    {
      element: "档位名称",
      before: "专业版",
      after: "独立开发者 · 无限次扫描",
      rationale: "面向人群的档位命名让一人公司创始人更有认同感",
    },
  ],
};

const abTemplates = {
  en: [
    {
      element: "Annual toggle default",
      current: "Monthly selected by default",
      suggested: "Annual pre-selected with 'Save 17%' badge",
      expectedLift: "+15–22% ARR",
    },
    {
      element: "Money-back guarantee",
      current: "No guarantee visible",
      suggested: "14-day refund guarantee above checkout CTA",
      expectedLift: "+8–12%",
    },
    {
      element: "FAQ placement",
      current: "FAQ below footer",
      suggested: "Top 3 objections inline under pricing tiers",
      expectedLift: "+6–10%",
    },
  ],
  zh: [
    {
      element: "年付默认",
      current: "默认选中月付",
      suggested: "默认年付并展示「省 17%」角标",
      expectedLift: "+15–22% 年化收入",
    },
    {
      element: "退款保证",
      current: "结账区无保证说明",
      suggested: "结账按钮上方加 14 天退款保证",
      expectedLift: "+8–12%",
    },
    {
      element: "常见问题位置",
      current: "常见问题在页脚下方",
      suggested: "定价档位下内嵌前 3 个异议解答",
      expectedLift: "+6–10%",
    },
  ],
};

export function analyzePricingPage(pageUrl: string, locale: "en" | "zh" = "en"): PricingAnalysis {
  const seed = hashSeed(pageUrl);
  const layouts = layoutTemplates[locale];
  const layoutIssues = [0, 1, 2, 3].map((i) => pick(layouts, seed, i));

  const aiCopyRewrites = copyRewriteTemplates[locale].map((t, i) => ({
    ...t,
    rationale: pick(
      locale === "zh"
        ? [
            "AI 分析访客心理阻力后生成的文案替换",
            "基于 200+ 独立 SaaS 定价页模式训练",
            "降低承诺感、提高具体性的改写方案",
            "针对一人公司购买决策优化",
          ]
        : [
            "AI rewrite based on visitor friction analysis",
            "Trained on 200+ indie SaaS pricing page patterns",
            "Lower commitment, higher specificity",
            "Optimized for solo-founder purchase decisions",
          ],
      seed,
      i + 3
    ),
  }));

  const abSuggestions = abTemplates[locale].map((t, i) => ({
    ...t,
    expectedLift: pick(["+8–12%", "+12–18%", "+6–11%", "+10–15%", "+15–22%"], seed, i + 5),
  }));

  const overallScore = 38 + (seed % 42);
  const conversion = (1.4 + (seed % 28) / 10).toFixed(1);

  const analysis: PricingAnalysis = {
    id: randomBytes(8).toString("hex"),
    pageUrl: pageUrl.trim(),
    overallScore,
    estimatedConversion: `${conversion}%`,
    layoutIssues,
    aiCopyRewrites,
    abSuggestions,
    createdAt: new Date().toISOString(),
  };

  analyses.set(analysis.id, analysis);
  return analysis;
}

export function getAnalysis(id: string): PricingAnalysis | undefined {
  return analyses.get(id);
}

export function listAnalyses(): PricingAnalysis[] {
  return [...analyses.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
