export type Processor =
  | "stripe"
  | "google-analytics"
  | "posthog"
  | "supabase"
  | "vercel"
  | "mailchimp"
  | "intercom"
  | "none";

export type GdprScanInput = {
  productName: string;
  websiteUrl?: string;
  targetsEuUsers: boolean;
  collectsEmail: boolean;
  collectsPayment: boolean;
  usesAnalytics: boolean;
  usesCookies: boolean;
  hasPrivacyPolicy: boolean;
  hasCookieBanner: boolean;
  hasDpaWithProcessors: boolean;
  processors: Processor[];
};

export type CheckStatus = "pass" | "warn" | "fail";

export type GdprCheck = {
  id: string;
  title: string;
  status: CheckStatus;
  article: string;
  detail: string;
  fix: string;
};

export type GdprScanResult = {
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  checks: GdprCheck[];
  policySnippet: string;
  summary: string;
};

function gradeFromScore(score: number): GdprScanResult["grade"] {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  if (score >= 45) return "D";
  return "F";
}

export function runGdprScan(input: GdprScanInput): GdprScanResult {
  const checks: GdprCheck[] = [];
  let score = 100;

  const name = input.productName.trim() || "Your SaaS";

  if (!input.hasPrivacyPolicy) {
    checks.push({
      id: "privacy-policy",
      title: "Privacy policy published",
      status: "fail",
      article: "Art. 13–14",
      detail: "EU users must receive clear information about data processing before collection.",
      fix: "Publish a privacy policy linked from footer and signup flows.",
    });
    score -= 20;
  } else {
    checks.push({
      id: "privacy-policy",
      title: "Privacy policy published",
      status: "pass",
      article: "Art. 13–14",
      detail: "Privacy policy is in place.",
      fix: "Review quarterly and update when processors change.",
    });
  }

  if (input.usesCookies || input.usesAnalytics) {
    if (!input.hasCookieBanner) {
      checks.push({
        id: "cookie-consent",
        title: "Cookie consent before tracking",
        status: "fail",
        article: "Art. 7 + ePrivacy",
        detail: "Analytics and non-essential cookies require opt-in consent in the EU.",
        fix: "Add a consent banner that blocks trackers until the user accepts.",
      });
      score -= 18;
    } else {
      checks.push({
        id: "cookie-consent",
        title: "Cookie consent before tracking",
        status: "pass",
        article: "Art. 7 + ePrivacy",
        detail: "Cookie banner detected in your self-assessment.",
        fix: "Log consent records and honour withdrawal.",
      });
    }
  }

  if (input.collectsEmail || input.collectsPayment) {
    if (!input.hasDpaWithProcessors && input.processors.filter((p) => p !== "none").length > 0) {
      checks.push({
        id: "dpa-processors",
        title: "DPAs with sub-processors",
        status: "warn",
        article: "Art. 28",
        detail: "Stripe, email, and hosting providers process personal data on your behalf.",
        fix: "Sign DPAs with each processor (most offer standard agreements in their dashboard).",
      });
      score -= 12;
    } else if (input.processors.filter((p) => p !== "none").length > 0) {
      checks.push({
        id: "dpa-processors",
        title: "DPAs with sub-processors",
        status: "pass",
        article: "Art. 28",
        detail: "You indicated DPAs are in place with processors.",
        fix: "Maintain a sub-processor list in your privacy policy.",
      });
    }
  }

  if (input.targetsEuUsers && input.collectsPayment && !input.processors.includes("stripe")) {
    checks.push({
      id: "payment-processor",
      title: "Payment data processor documented",
      status: "warn",
      article: "Art. 6(1)(b)",
      detail: "Payment processing involves personal and financial data.",
      fix: "Name your payment processor and lawful basis (contract) in your privacy policy.",
    });
    score -= 8;
  }

  if (input.usesAnalytics && input.processors.includes("google-analytics")) {
    checks.push({
      id: "ga-transfer",
      title: "Google Analytics EU transfer",
      status: "warn",
      article: "Art. 44–49",
      detail: "GA4 may involve US data transfers — document SCCs or use EU-only analytics.",
      fix: "Switch to Plausible/Fathom or enable GA4 EU settings + mention transfers in policy.",
    });
    score -= 10;
  }

  if (input.targetsEuUsers) {
    checks.push({
      id: "dsr-process",
      title: "Data subject request process",
      status: input.hasPrivacyPolicy ? "warn" : "fail",
      article: "Art. 15–22",
      detail: "Users can request access, deletion, and portability within 30 days.",
      fix: "Add a privacy@ email and document your 30-day DSR workflow.",
    });
    if (!input.hasPrivacyPolicy) score -= 10;
    else score -= 5;
  } else {
    checks.push({
      id: "dsr-process",
      title: "Data subject request process",
      status: "pass",
      article: "Art. 15–22",
      detail: "Lower EU exposure — still good practice to document DSR handling.",
      fix: "Prepare a template reply for access/deletion requests.",
    });
  }

  if (!input.websiteUrl?.trim()) {
    checks.push({
      id: "website-url",
      title: "Website URL documented",
      status: "warn",
      article: "Art. 13",
      detail: "Privacy policy should name the website/service scope.",
      fix: "Add your production URL to privacy policy and cookie policy.",
    });
    score -= 5;
  }

  const processorList =
    input.processors.filter((p) => p !== "none").join(", ") || "none listed";
  const policySnippet = `## Privacy Policy — ${name}

**Data controller:** ${name}
**Website:** ${input.websiteUrl || "[your-domain.com]"}
**Contact:** privacy@${(input.websiteUrl || "example.com").replace(/^https?:\/\//, "").split("/")[0]}

### What we collect
${input.collectsEmail ? "- Email address (account & communication)\n" : ""}${input.collectsPayment ? "- Payment metadata via our payment processor (we do not store card numbers)\n" : ""}${input.usesAnalytics ? "- Usage analytics (only after cookie consent)\n" : ""}${!input.collectsEmail && !input.collectsPayment && !input.usesAnalytics ? "- Minimal technical logs required to operate the service\n" : ""}
### Lawful basis
- Contract (Art. 6(1)(b)) — providing the service you signed up for
${input.usesAnalytics ? "- Consent (Art. 6(1)(a)) — non-essential cookies and analytics\n" : ""}
### Sub-processors
${processorList}

### Your rights (EU/UK)
You may request access, correction, deletion, or portability of your data. Contact us within 30 days of your request.

### Retention
Account data is kept while your subscription is active and deleted within 30 days of cancellation.

*Generated by GDPR Pulse — review with legal counsel before publishing.*`;

  const failCount = checks.filter((c) => c.status === "fail").length;
  const warnCount = checks.filter((c) => c.status === "warn").length;
  const summary =
    failCount > 0
      ? `${failCount} critical gap${failCount > 1 ? "s" : ""} and ${warnCount} warning${warnCount !== 1 ? "s" : ""} — fix before selling to EU customers.`
      : warnCount > 0
        ? `${warnCount} warning${warnCount !== 1 ? "s" : ""} — mostly ready, polish before enterprise deals.`
        : "Strong baseline — document processors and keep policies updated.";

  return {
    score: Math.max(0, Math.min(100, score)),
    grade: gradeFromScore(Math.max(0, score)),
    checks,
    policySnippet,
    summary,
  };
}

export const sampleScans = [
  { productName: "Indie SaaS", score: 72, grade: "C" as const, gaps: 3 },
  { productName: "B2B Tool", score: 88, grade: "B" as const, gaps: 1 },
  { productName: "EU Marketplace", score: 94, grade: "A" as const, gaps: 0 },
];
