/** Email validation with typo detection, disposable filtering, and deliverability scoring */

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "tempmail.com",
  "throwaway.email",
  "yopmail.com",
  "10minutemail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
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

/** Common typos → suggested fix */
const TYPO_DOMAINS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gamil.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmal.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outllok.com": "outlook.com",
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
  "iclod.com": "icloud.com",
};

export type EmailValidation = {
  email: string;
  valid: boolean;
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  signals: string[];
  isDisposable: boolean;
  typoSuggestion?: string;
  mxValid: boolean;
};

function gradeFromScore(score: number): EmailValidation["grade"] {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  if (score >= 40) return "D";
  return "F";
}

/** Simplified MX check — known providers have valid MX */
function hasMxRecord(domain: string): boolean {
  if (FREE_PROVIDERS.has(domain)) return true;
  if (DISPOSABLE_DOMAINS.has(domain)) return false;
  if (TYPO_DOMAINS[domain]) return false;
  // Corporate domains assumed valid for MVP
  return domain.includes(".") && domain.length > 3;
}

export function validateEmail(email: string): EmailValidation {
  const normalized = email.trim().toLowerCase();
  const [local, domain] = normalized.split("@");
  const signals: string[] = [];
  let score = 50;

  if (!local || !domain) {
    return {
      email: normalized,
      valid: false,
      score: 0,
      grade: "F",
      signals: ["invalid_format"],
      isDisposable: false,
      mxValid: false,
    };
  }

  const typoSuggestion = TYPO_DOMAINS[domain]
    ? `${local}@${TYPO_DOMAINS[domain]}`
    : undefined;

  if (typoSuggestion) {
    score -= 25;
    signals.push("likely_typo");
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      email: normalized,
      valid: false,
      score: 10,
      grade: "F",
      signals: ["disposable_email"],
      isDisposable: true,
      mxValid: false,
    };
  }

  const mxValid = hasMxRecord(domain);
  if (!mxValid) {
    score -= 20;
    signals.push("mx_missing");
  } else {
    signals.push("mx_valid");
  }

  if (FREE_PROVIDERS.has(domain)) {
    score += 10;
    signals.push("personal_email");
  } else if (!typoSuggestion) {
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
    valid: !typoSuggestion && mxValid && score >= 40,
    score,
    grade: gradeFromScore(score),
    signals,
    isDisposable: false,
    typoSuggestion,
    mxValid,
  };
}

export type WaitlistEmailReport = {
  waitlistId: string;
  totalSignups: number;
  validCount: number;
  invalidCount: number;
  disposableCount: number;
  typoCount: number;
  healthScore: number;
  grade: "excellent" | "good" | "fair" | "poor";
  qualityBreakdown: { grade: string; count: number; pct: number }[];
  topSignals: string[];
  recommendations: string[];
  avgScore: number;
};

export function analyzeWaitlistEmails(
  waitlistId: string,
  emails: string[]
): WaitlistEmailReport {
  const results = emails.map(validateEmail);
  const total = results.length;

  if (total === 0) {
    return {
      waitlistId,
      totalSignups: 0,
      validCount: 0,
      invalidCount: 0,
      disposableCount: 0,
      typoCount: 0,
      healthScore: 0,
      grade: "poor",
      qualityBreakdown: [],
      topSignals: [],
      recommendations: [
        "Share your waitlist on Twitter and Indie Hackers",
        "Enable double opt-in to filter bots before they count",
        "Add a live counter for social proof on your landing page",
      ],
      avgScore: 0,
    };
  }

  const validCount = results.filter((r) => r.valid).length;
  const disposableCount = results.filter((r) => r.isDisposable).length;
  const typoCount = results.filter((r) => r.typoSuggestion).length;
  const avgScore = Math.round(results.reduce((s, r) => s + r.score, 0) / total);

  const gradeCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const r of results) gradeCounts[r.grade]++;

  const qualityBreakdown = (["A", "B", "C", "D", "F"] as const).map((g) => ({
    grade: g,
    count: gradeCounts[g],
    pct: Math.round((gradeCounts[g] / total) * 100),
  }));

  const signalFreq = new Map<string, number>();
  for (const r of results) {
    for (const sig of r.signals) {
      signalFreq.set(sig, (signalFreq.get(sig) ?? 0) + 1);
    }
  }
  const topSignals = [...signalFreq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([sig, count]) => `${sig} (${count})`);

  const recommendations: string[] = [];
  if (typoCount > 0) {
    recommendations.push(`Fix ${typoCount} typo emails — enable one-click typo suggestions`);
  }
  if (disposableCount > total * 0.1) {
    recommendations.push("Enable double opt-in to block disposable addresses");
  }
  if (validCount / total < 0.7) {
    recommendations.push("Under 70% valid — add email verification before counting signups");
  }
  const corporateCount = results.filter((r) => r.signals.includes("corporate_domain")).length;
  if (corporateCount / total > 0.3) {
    recommendations.push("Strong B2B signal — consider higher pricing at launch");
  }
  if (total < 50) {
    recommendations.push("Under 50 signups — focus on distribution before optimizing");
  } else if (total >= 100 && validCount / total >= 0.8) {
    recommendations.push("100+ valid signups — ready to send launch survey to A/B leads");
  }
  if (recommendations.length === 0) {
    recommendations.push("Clean list — export verified emails and prepare launch sequence");
  }

  let grade: WaitlistEmailReport["grade"] = "fair";
  if (avgScore >= 75 && disposableCount / total < 0.05) grade = "excellent";
  else if (avgScore >= 60) grade = "good";
  else if (avgScore < 45) grade = "poor";

  return {
    waitlistId,
    totalSignups: total,
    validCount,
    invalidCount: total - validCount,
    disposableCount,
    typoCount,
    healthScore: avgScore,
    grade,
    qualityBreakdown,
    topSignals,
    recommendations,
    avgScore,
  };
}
