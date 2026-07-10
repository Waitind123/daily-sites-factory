import { randomBytes } from "crypto";

export type DiagnosisInput = {
  name: string;
  steps: string[];
  counts: number[];
};

export type StepAnalysis = {
  step: string;
  count: number;
  conversionRate: string;
  dropOffRate: string | null;
  isLeak: boolean;
};

export type FixSuggestion = {
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  estimatedUplift: string;
};

export type DiagnosisResult = {
  id: string;
  name: string;
  steps: StepAnalysis[];
  overallConversion: string;
  leakIndex: number;
  leakStep: string;
  leakDropOff: string;
  summary: string;
  suggestions: FixSuggestion[];
  createdAt: string;
};

const history: DiagnosisResult[] = [];

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function conversionRate(count: number, top: number): string {
  if (top === 0) return "0.0";
  return ((count / top) * 100).toFixed(1);
}

function dropOffRate(from: number, to: number): string {
  if (from === 0) return "0.0";
  return (((from - to) / from) * 100).toFixed(1);
}

function findLeakIndex(counts: number[]): number {
  let max = { index: 0, rate: 0 };
  for (let i = 0; i < counts.length - 1; i++) {
    const from = counts[i];
    const to = counts[i + 1];
    if (from === 0) continue;
    const rate = ((from - to) / from) * 100;
    if (rate > max.rate) max = { index: i, rate };
  }
  return max.index;
}

function stepKeyword(step: string): string {
  return step.toLowerCase();
}

function buildSuggestions(
  steps: string[],
  counts: number[],
  leakIndex: number,
  locale: "en" | "zh"
): FixSuggestion[] {
  const leakStep = steps[leakIndex] ?? "";
  const leakRate = parseFloat(dropOffRate(counts[leakIndex], counts[leakIndex + 1] ?? 0));
  const kw = stepKeyword(leakStep);
  const suggestions: FixSuggestion[] = [];

  const add = (s: FixSuggestion) => {
    if (!suggestions.some((x) => x.title === s.title)) suggestions.push(s);
  };

  if (locale === "en") {
    if (/email|verify|confirm|verification/.test(kw)) {
      add({
        priority: "high",
        title: "Switch to magic-link auth",
        description:
          "Email verification steps often lose 40–70% of users. Replace password + verify flow with passwordless magic links sent instantly.",
        estimatedUplift: "25–45% fewer drop-offs at this step",
      });
      add({
        priority: "high",
        title: "Add resend + reminder email",
        description:
          "Users miss the first email. Add a visible resend button and auto-reminder after 10 minutes with a deep link back to your app.",
        estimatedUplift: "15–25% recovery at verification step",
      });
    }
    if (/signup|register|sign.?up|create.?account/.test(kw)) {
      add({
        priority: "high",
        title: "Reduce signup fields to 2",
        description:
          "Every extra field costs ~10% conversion. Keep email + password only. Collect profile data after activation.",
        estimatedUplift: "20–35% more signups",
      });
      add({
        priority: "medium",
        title: "Add Google/GitHub OAuth",
        description:
          "One-click social login removes friction. Indie SaaS with OAuth typically sees 30%+ higher signup completion.",
        estimatedUplift: "15–30% signup lift",
      });
    }
    if (/payment|checkout|pay|billing|subscribe|purchase/.test(kw)) {
      add({
        priority: "high",
        title: "Add trust signals on checkout",
        description:
          "Show money-back guarantee, Stripe badge, and 2–3 customer quotes directly on the payment step. Reduces last-minute hesitation.",
        estimatedUplift: "10–20% checkout completion",
      });
      add({
        priority: "medium",
        title: "Offer annual discount at checkout",
        description:
          "A visible 'Save 20% yearly' toggle increases commitment and reduces monthly churn anxiety at the payment step.",
        estimatedUplift: "8–15% paid conversion",
      });
    }
    if (/onboard|activ|welcome|profile|setup|first/.test(kw)) {
      add({
        priority: "high",
        title: "Add progress checklist (3 steps max)",
        description:
          "Show 'Step 2 of 3' with a visible checklist. Users who see progress complete onboarding 2× more often.",
        estimatedUplift: "20–40% activation lift",
      });
      add({
        priority: "medium",
        title: "Pre-fill demo data on first visit",
        description:
          "Empty dashboards kill activation. Seed sample data so users see value in under 30 seconds without manual setup.",
        estimatedUplift: "15–25% faster time-to-value",
      });
    }
    if (/pricing|plan|trial/.test(kw)) {
      add({
        priority: "high",
        title: "Simplify pricing to 2 tiers max",
        description:
          "Decision paralysis kills pricing page conversion. One recommended tier + one enterprise/contact tier converts best for indie SaaS.",
        estimatedUplift: "12–22% pricing-to-signup lift",
      });
    }

    if (leakRate >= 50) {
      add({
        priority: "high",
        title: `A/B test the "${leakStep}" step this week`,
        description: `${leakRate.toFixed(0)}% drop-off is critical. Run a 50/50 split: current vs simplified version. Even 10% improvement doubles downstream revenue.`,
        estimatedUplift: "10–30% overall funnel lift",
      });
    }

    add({
      priority: "medium",
      title: "Add exit-intent survey at leak step",
      description:
        "Ask 'What stopped you?' with 3 options when users abandon. 5rem responses/week give actionable UX fixes faster than guessing.",
      estimatedUplift: "Qualitative insights → 5–15% fix impact",
    });

    add({
      priority: "low",
      title: "Set up weekly funnel review ritual",
      description:
        "Check this funnel every Monday. Fix one step per week. Indie founders who do this report 2× MRR growth in 90 days.",
      estimatedUplift: "Compound improvements over time",
    });
  } else {
    if (/邮件|验证|确认|verify|email/.test(kw)) {
      add({
        priority: "high",
        title: "改用 Magic Link 无密码登录",
        description:
          "邮件验证步骤通常流失 40–70% 用户。用 Magic Link 替代密码+验证流程，用户点击邮件即可登录。",
        estimatedUplift: "该步骤流失减少 25–45%",
      });
      add({
        priority: "high",
        title: "添加重发邮件 + 10 分钟提醒",
        description:
          "用户经常漏看第一封邮件。添加明显的重发按钮，10 分钟后自动发送提醒邮件并附带深链接。",
        estimatedUplift: "验证步骤恢复 15–25%",
      });
    }
    if (/注册|signup|register|账号/.test(kw)) {
      add({
        priority: "high",
        title: "注册表单缩减至 2 个字段",
        description: "每多一个字段约损失 10% 转化。只保留邮箱+密码，资料收集放到激活后。",
        estimatedUplift: "注册量提升 20–35%",
      });
      add({
        priority: "medium",
        title: "接入 Google/GitHub 一键登录",
        description: "社交登录消除摩擦，独立 SaaS 接入 OAuth 后注册完成率通常提升 30%+。",
        estimatedUplift: "注册提升 15–30%",
      });
    }
    if (/支付|结账|checkout|付费|订阅|购买/.test(kw)) {
      add({
        priority: "high",
        title: "结账页添加信任背书",
        description:
          "展示退款保证、Stripe 安全标识和 2–3 条用户评价，减少最后一刻的犹豫。",
        estimatedUplift: "结账完成率提升 10–20%",
      });
      add({
        priority: "medium",
        title: "结账页提供年付折扣选项",
        description: "显眼的「年付省 20%」切换按钮提高承诺度，减少按月付费的焦虑。",
        estimatedUplift: "付费转化提升 8–15%",
      });
    }
    if (/引导|激活|欢迎|资料|设置|首次|onboard/.test(kw)) {
      add({
        priority: "high",
        title: "添加进度清单（最多 3 步）",
        description: "显示「第 2 步/共 3 步」进度条。看到进度的用户完成引导的概率翻倍。",
        estimatedUplift: "激活率提升 20–40%",
      });
      add({
        priority: "medium",
        title: "首次访问预填演示数据",
        description: "空白仪表盘扼杀激活。预填示例数据，让用户 30 秒内看到价值。",
        estimatedUplift: "价值感知时间缩短 15–25%",
      });
    }
    if (/定价|方案|试用|pricing/.test(kw)) {
      add({
        priority: "high",
        title: "定价页简化为最多 2 档",
        description:
          "选择困难症杀死定价页转化。一个推荐档 + 一个企业/联系档，是独立 SaaS 最佳实践。",
        estimatedUplift: "定价到注册提升 12–22%",
      });
    }

    if (leakRate >= 50) {
      add({
        priority: "high",
        title: `本周 A/B 测试「${leakStep}」步骤`,
        description: `${leakRate.toFixed(0)}% 流失率已达临界。做 50/50 分流：当前版 vs 简化版。即使提升 10% 也能让下游收入翻倍。`,
        estimatedUplift: "整体漏斗提升 10–30%",
      });
    }

    add({
      priority: "medium",
      title: "在流失步骤添加退出调研",
      description: "用户放弃时弹出「什么阻止了你？」三选一问卷。每周 10+ 回复比猜测更快找到 UX 问题。",
      estimatedUplift: "定性洞察 → 5–15% 修复效果",
    });

    add({
      priority: "low",
      title: "建立每周漏斗复盘习惯",
      description: "每周一查看此漏斗，每周修复一个步骤。坚持 90 天的独立开发者报告 MRR 翻倍。",
      estimatedUplift: "复利式长期提升",
    });
  }

  return suggestions
    .sort((a, b) => {
      const order = { high: 0, medium: 1, low: 2 };
      return order[a.priority] - order[b.priority];
    })
    .slice(0, 5);
}

function buildSummary(
  name: string,
  leakStep: string,
  leakDropOff: string,
  overallConversion: string,
  locale: "en" | "zh"
): string {
  const rate = parseFloat(leakDropOff);
  if (locale === "en") {
    if (rate >= 60) {
      return `Critical leak detected in "${name}": ${leakDropOff}% of users drop off at "${leakStep}". This single step is likely costing you 2–3× more revenue than all other steps combined. Fix this first. Overall funnel conversion: ${overallConversion}%.`;
    }
    if (rate >= 40) {
      return `"${leakStep}" is your biggest bottleneck in "${name}" with ${leakDropOff}% drop-off. Prioritize UX improvements here before optimizing earlier steps. Overall conversion: ${overallConversion}%.`;
    }
    return `"${name}" funnel is relatively healthy. Biggest leak at "${leakStep}" (${leakDropOff}% drop-off). Focus on incremental A/B tests. Overall conversion: ${overallConversion}%.`;
  }
  if (rate >= 60) {
    return `「${name}」发现严重漏洞：「${leakStep}」步骤流失 ${leakDropOff}%。这一步可能比其他所有步骤加起来损失更多收入，请优先修复。整体漏斗转化率：${overallConversion}%。`;
  }
  if (rate >= 40) {
    return `「${leakStep}」是「${name}」的最大瓶颈，流失 ${leakDropOff}%。在优化上游步骤之前，优先改进此步骤的 UX。整体转化率：${overallConversion}%。`;
  }
  return `「${name}」漏斗整体健康。「${leakStep}」是最大流失点（${leakDropOff}%）。建议做增量 A/B 测试。整体转化率：${overallConversion}%。`;
}

export function runDiagnosis(input: DiagnosisInput, locale: "en" | "zh" = "en"): DiagnosisResult {
  const top = input.counts[0] ?? 0;
  const leakIndex = findLeakIndex(input.counts);
  const leakDropOff = dropOffRate(input.counts[leakIndex], input.counts[leakIndex + 1] ?? 0);
  const overallConversion = conversionRate(input.counts[input.counts.length - 1] ?? 0, top);

  const steps: StepAnalysis[] = input.steps.map((step, i) => ({
    step,
    count: input.counts[i] ?? 0,
    conversionRate: conversionRate(input.counts[i] ?? 0, top),
    dropOffRate: i > 0 ? dropOffRate(input.counts[i - 1] ?? 0, input.counts[i] ?? 0) : null,
    isLeak: i === leakIndex,
  }));

  const result: DiagnosisResult = {
    id: randomId(),
    name: input.name,
    steps,
    overallConversion,
    leakIndex,
    leakStep: input.steps[leakIndex] ?? "",
    leakDropOff,
    summary: buildSummary(input.name, input.steps[leakIndex] ?? "", leakDropOff, overallConversion, locale),
    suggestions: buildSuggestions(input.steps, input.counts, leakIndex, locale),
    createdAt: new Date().toISOString(),
  };

  history.unshift(result);
  if (history.length > 20) history.pop();
  return result;
}

export function listDiagnoses(): DiagnosisResult[] {
  return [...history];
}

export function getDiagnosisById(id: string): DiagnosisResult | undefined {
  return history.find((d) => d.id === id);
}
