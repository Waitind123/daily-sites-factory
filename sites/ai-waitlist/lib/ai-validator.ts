/** Rule-based AI lead scoring — no external API required for MVP */

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "tempmail.com",
  "throwaway.email",
  "yopmail.com",
  "10minutemail.com",
  "trashmail.com",
]);

const FREE_PROVIDERS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "proton.me",
  "protonmail.com",
  "qq.com",
  "163.com",
  "126.com",
]);

export type LeadScore = {
  email: string;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  signals: string[];
  isDisposable: boolean;
};

export type WaitlistAnalysis = {
  waitlistId: string;
  totalSignups: number;
  healthScore: number;
  grade: "excellent" | "good" | "fair" | "poor";
  qualityBreakdown: { grade: string; count: number; pct: number }[];
  topSignals: string[];
  recommendations: string[];
  avgScore: number;
};

function gradeFromScore(score: number): LeadScore["grade"] {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  if (score >= 40) return "D";
  return "F";
}

export function scoreEmail(email: string): LeadScore {
  const normalized = email.trim().toLowerCase();
  const [local, domain] = normalized.split("@");
  const signals: string[] = [];
  let score = 50;

  if (!local || !domain) {
    return { email: normalized, score: 0, grade: "F", signals: ["invalid_format"], isDisposable: false };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    score -= 40;
    signals.push("disposable_email");
    return {
      email: normalized,
      score: Math.max(0, score),
      grade: gradeFromScore(score),
      signals,
      isDisposable: true,
    };
  }

  if (FREE_PROVIDERS.has(domain)) {
    score += 10;
    signals.push("personal_email");
  } else {
    score += 25;
    signals.push("corporate_domain");
  }

  if (local.includes(".") && local.length > 5) {
    score += 8;
    signals.push("professional_format");
  }

  if (/^[a-z]+\.[a-z]+$/.test(local)) {
    score += 5;
    signals.push("name_pattern");
  }

  if (local.length < 3) {
    score -= 10;
    signals.push("short_local_part");
  }

  if (/\d{4,}/.test(local)) {
    score -= 5;
    signals.push("numeric_heavy");
  }

  score = Math.min(100, Math.max(0, score));

  return {
    email: normalized,
    score,
    grade: gradeFromScore(score),
    signals,
    isDisposable: false,
  };
}

export function analyzeWaitlist(
  waitlistId: string,
  emails: string[]
): WaitlistAnalysis {
  const scores = emails.map(scoreEmail);
  const total = scores.length;

  if (total === 0) {
    return {
      waitlistId,
      totalSignups: 0,
      healthScore: 0,
      grade: "poor",
      qualityBreakdown: [],
      topSignals: [],
      recommendations: [
        "Share your waitlist link on Twitter and Indie Hackers",
        "Add a live counter to your landing page for social proof",
        "Offer early-bird perks to first 50 signups",
      ],
      avgScore: 0,
    };
  }

  const avgScore = Math.round(scores.reduce((s, l) => s + l.score, 0) / total);
  const gradeCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const s of scores) gradeCounts[s.grade]++;

  const disposableCount = scores.filter((s) => s.isDisposable).length;
  const corporateCount = scores.filter((s) => s.signals.includes("corporate_domain")).length;

  const qualityBreakdown = (["A", "B", "C", "D", "F"] as const).map((g) => ({
    grade: g,
    count: gradeCounts[g],
    pct: Math.round((gradeCounts[g] / total) * 100),
  }));

  const signalFreq = new Map<string, number>();
  for (const s of scores) {
    for (const sig of s.signals) {
      signalFreq.set(sig, (signalFreq.get(sig) ?? 0) + 1);
    }
  }
  const topSignals = [...signalFreq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([sig, count]) => `${sig} (${count})`);

  const recommendations: string[] = [];
  if (disposableCount > total * 0.1) {
    recommendations.push("Enable email verification to filter disposable addresses");
  }
  if (corporateCount / total > 0.3) {
    recommendations.push("Strong B2B signal — consider a higher price tier at launch");
  }
  if (gradeCounts.A + gradeCounts.B < total * 0.4) {
    recommendations.push("Share in founder communities (IH, HN) to attract higher-intent signups");
  }
  if (total < 50) {
    recommendations.push("Under 50 signups — focus on distribution before optimizing conversion");
  } else if (total >= 100) {
    recommendations.push("100+ signups — time to send a launch survey to top A/B leads");
  }
  if (recommendations.length === 0) {
    recommendations.push("Healthy waitlist — export top leads and prepare launch email sequence");
  }

  let grade: WaitlistAnalysis["grade"] = "fair";
  if (avgScore >= 75 && disposableCount / total < 0.05) grade = "excellent";
  else if (avgScore >= 60) grade = "good";
  else if (avgScore < 45) grade = "poor";

  return {
    waitlistId,
    totalSignups: total,
    healthScore: avgScore,
    grade,
    qualityBreakdown,
    topSignals,
    recommendations,
    avgScore,
  };
}
