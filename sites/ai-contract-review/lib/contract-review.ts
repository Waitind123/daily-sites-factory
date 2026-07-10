import { randomBytes } from "crypto";

export type RiskLevel = "high" | "medium" | "low";

export type ClauseFinding = {
  category: string;
  clause: string;
  risk: RiskLevel;
  explanation: string;
  suggestion: string;
};

export type MissingProtection = {
  name: string;
  importance: RiskLevel;
  suggestion: string;
};

export type ContractRecord = {
  id: string;
  title: string;
  riskScore: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  findings: ClauseFinding[];
  missing: MissingProtection[];
  negotiationEmail: string;
  createdAt: string;
};

const records = new Map<string, ContractRecord>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

const CLAUSE_PATTERNS: {
  category: string;
  patterns: RegExp[];
  risk: RiskLevel;
  explanation: string;
  suggestion: string;
}[] = [
  {
    category: "payment",
    patterns: [/net[\s-]*(90|120|180)/i, /pay[\s-]*when[\s-]*paid/i, /upon\s+client\s+payment/i],
    risk: "high",
    explanation: "Extended payment terms delay your cash flow. Net-90+ is common in enterprise but risky for freelancers.",
    suggestion: "Negotiate Net-30 or request 50% upfront deposit before work begins.",
  },
  {
    category: "payment",
    patterns: [/net[\s-]*(45|60)/i],
    risk: "medium",
    explanation: "Net-45/60 payment terms are longer than standard Net-30.",
    suggestion: "Request Net-30 or milestone-based payments tied to deliverables.",
  },
  {
    category: "ip",
    patterns: [/all\s+work\s+product.*belong/i, /assign.*all\s+intellectual\s+property/i, /work\s+for\s+hire/i],
    risk: "high",
    explanation: "Broad IP assignment may transfer ownership of your pre-existing tools and portfolio work.",
    suggestion: "Add carve-out: 'Contractor retains ownership of pre-existing IP and general know-how.'",
  },
  {
    category: "liability",
    patterns: [/unlimited\s+liability/i, /without\s+limitation/i, /indemnif.*all\s+claims/i],
    risk: "high",
    explanation: "Uncapped liability can exceed the contract value. One bug could bankrupt a solo founder.",
    suggestion: "Cap liability at fees paid in the prior 12 months. Exclude consequential damages.",
  },
  {
    category: "non-compete",
    patterns: [/non[\s-]*compete/i, /shall\s+not\s+compete/i, /refrain\s+from.*similar\s+business/i],
    risk: "high",
    explanation: "Non-compete clauses can block you from working with competitors in your industry.",
    suggestion: "Limit to 6 months, specific geography, and direct competitors only — or remove entirely.",
  },
  {
    category: "termination",
    patterns: [/terminate.*without\s+cause.*(\d+)\s*days/i, /at[\s-]*will\s+termination/i],
    risk: "medium",
    explanation: "Short notice termination without kill fee leaves you unpaid for work in progress.",
    suggestion: "Require 30-day notice and payment for all completed work plus 25% kill fee on remaining scope.",
  },
  {
    category: "auto-renewal",
    patterns: [/automatically\s+renew/i, /auto[\s-]*renew/i, /successive\s+term/i],
    risk: "medium",
    explanation: "Auto-renewal traps lock you in unless you notice the cancellation window.",
    suggestion: "Require written notice 30 days before renewal. Remove auto-renewal or add annual opt-in.",
  },
  {
    category: "scope",
    patterns: [/unlimited\s+revisions/i, /until\s+satisfaction/i, /reasonable\s+requests/i],
    risk: "high",
    explanation: "Open-ended revision clauses enable scope creep without additional payment.",
    suggestion: "Cap at 2 revision rounds per deliverable. Additional revisions billed at hourly rate.",
  },
  {
    category: "nda",
    patterns: [/perpetual\s+confidential/i, /indefinite.*confidential/i],
    risk: "low",
    explanation: "Perpetual NDA obligations may restrict discussing your work indefinitely.",
    suggestion: "Limit confidentiality to 3 years after contract end, with standard exclusions.",
  },
];

const MISSING_CHECKS: {
  name: string;
  patterns: RegExp[];
  importance: RiskLevel;
  suggestion: string;
}[] = [
  {
    name: "Liability cap",
    patterns: [/liability.*cap/i, /limited\s+to.*fees/i, /aggregate\s+liability/i],
    importance: "high",
    suggestion: "Add: 'Total liability shall not exceed fees paid in the 12 months preceding the claim.'",
  },
  {
    name: "Kill fee / cancellation",
    patterns: [/kill\s+fee/i, /cancellation\s+fee/i, /termination\s+fee/i, /cancel.*\d+%/i],
    importance: "high",
    suggestion: "Add: 'Early termination requires payment of 25% of remaining contract value as kill fee.'",
  },
  {
    name: "IP carve-out",
    patterns: [/pre[\s-]*existing/i, /prior\s+work/i, /background\s+ip/i, /retains\s+ownership/i],
    importance: "high",
    suggestion: "Add: 'Contractor retains all pre-existing IP, tools, and general know-how.'",
  },
  {
    name: "Late payment penalty",
    patterns: [/late\s+payment/i, /interest.*overdue/i, /past\s+due/i],
    importance: "medium",
    suggestion: "Add: 'Overdue invoices accrue 1.5% monthly interest and work pauses after 15 days late.'",
  },
  {
    name: "Revision limit",
    patterns: [/revision.*round/i, /\d+\s+rounds?\s+of\s+revision/i, /revision.*limit/i],
    importance: "medium",
    suggestion: "Add: 'Includes 2 revision rounds per deliverable. Additional revisions at $X/hour.'",
  },
];

function extractClauses(text: string): string[] {
  return text
    .split(/\n+|(?<=[.;])\s+/)
    .map((c) => c.trim())
    .filter((c) => c.length > 20);
}

function analyzeContract(title: string, contractText: string): Omit<ContractRecord, "id" | "createdAt"> {
  const clauses = extractClauses(contractText);
  const findings: ClauseFinding[] = [];
  const seen = new Set<string>();

  for (const clause of clauses) {
    for (const pattern of CLAUSE_PATTERNS) {
      for (const regex of pattern.patterns) {
        if (regex.test(clause) && !seen.has(clause.slice(0, 60))) {
          seen.add(clause.slice(0, 60));
          findings.push({
            category: pattern.category,
            clause: clause.length > 200 ? clause.slice(0, 200) + "…" : clause,
            risk: pattern.risk,
            explanation: pattern.explanation,
            suggestion: pattern.suggestion,
          });
          break;
        }
      }
    }
  }

  const missing: MissingProtection[] = [];
  const fullText = contractText.toLowerCase();
  for (const check of MISSING_CHECKS) {
    const found = check.patterns.some((p) => p.test(fullText));
    if (!found) {
      missing.push({
        name: check.name,
        importance: check.importance,
        suggestion: check.suggestion,
      });
    }
  }

  const highCount = findings.filter((f) => f.risk === "high").length + missing.filter((m) => m.importance === "high").length;
  const mediumCount = findings.filter((f) => f.risk === "medium").length + missing.filter((m) => m.importance === "medium").length;
  const lowCount = findings.filter((f) => f.risk === "low").length;

  const riskScore = Math.min(100, Math.max(5, highCount * 18 + mediumCount * 10 + lowCount * 4 + missing.length * 5));

  const negotiationEmail = buildNegotiationEmail(title, findings, missing);

  return {
    title: title.trim() || "Contract Review",
    riskScore,
    highCount,
    mediumCount,
    lowCount,
    findings,
    missing,
    negotiationEmail,
  };
}

function buildNegotiationEmail(
  title: string,
  findings: ClauseFinding[],
  missing: MissingProtection[]
): string {
  const highItems = [
    ...findings.filter((f) => f.risk === "high").map((f) => f.suggestion),
    ...missing.filter((m) => m.importance === "high").map((m) => m.suggestion),
  ].slice(0, 4);

  const lines = [
    `Subject: Contract revisions — ${title}`,
    "",
    "Hi,",
    "",
    "Thank you for sharing the agreement. I've reviewed the terms and would like to propose a few adjustments to ensure a fair partnership:",
    "",
    ...highItems.map((item, i) => `${i + 1}. ${item}`),
    "",
    "These changes protect both parties and align with industry standards for independent contractor agreements. Happy to discuss on a quick call.",
    "",
    "Best regards",
  ];

  return lines.join("\n");
}

export function reviewContract(title: string, contractText: string): ContractRecord {
  const analysis = analyzeContract(title, contractText);
  const record: ContractRecord = {
    id: randomId(),
    createdAt: new Date().toISOString(),
    ...analysis,
  };
  records.set(record.id, record);
  return record;
}

export function listContracts(): ContractRecord[] {
  return [...records.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getContractById(id: string): ContractRecord | undefined {
  return records.get(id);
}

export function getContractStats() {
  const all = listContracts();
  const avgRisk =
    all.length > 0
      ? Math.round(all.reduce((sum, r) => sum + r.riskScore, 0) / all.length)
      : 0;
  const totalHigh = all.reduce((sum, r) => sum + r.highCount, 0);

  return {
    totalReviews: all.length,
    avgRiskScore: avgRisk,
    totalHighRisks: totalHigh,
  };
}
