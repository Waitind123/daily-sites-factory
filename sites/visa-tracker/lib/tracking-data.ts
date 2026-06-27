export type PolicyChange = {
  id: string;
  visaId: string;
  country: string;
  flag: string;
  change: string;
  changedAt: string;
};

export const recentPolicyChanges: PolicyChange[] = [
  {
    id: "spain-processing",
    visaId: "spain-nomad",
    country: "Spain",
    flag: "🇪🇸",
    change: "Processing time updated: 20→45 days",
    changedAt: "2026-06-22",
  },
  {
    id: "georgia-income",
    visaId: "georgia-remotely",
    country: "Georgia",
    flag: "🇬🇪",
    change: "Income threshold raised: $2,000→$2,400/mo",
    changedAt: "2026-06-20",
  },
  {
    id: "portugal-income",
    visaId: "portugal-d8",
    country: "Portugal",
    flag: "🇵🇹",
    change: "D8 income verified at €3,280/mo (was €2,800 on Nomad List)",
    changedAt: "2026-06-15",
  },
  {
    id: "thailand-dtv",
    visaId: "thailand-dtv",
    country: "Thailand",
    flag: "🇹🇭",
    change: "DTV financial proof: $13,800→$15,000 bank balance",
    changedAt: "2026-06-10",
  },
  {
    id: "uae-remote",
    visaId: "uae-dubai",
    country: "UAE",
    flag: "🇦🇪",
    change: "Dubai remote work visa extended to 2-year renewal",
    changedAt: "2026-06-05",
  },
];

export type DemoTrackedVisa = {
  id: string;
  visaId: string;
  country: string;
  flag: string;
  programName: string;
  expiresAt: string;
  daysLeft: number;
  status: "ok" | "warning" | "urgent";
  lastPolicyNote?: string;
};

export const demoTrackedVisas: DemoTrackedVisa[] = [
  {
    id: "demo-pt",
    visaId: "portugal-d8",
    country: "Portugal",
    flag: "🇵🇹",
    programName: "D8 Digital Nomad",
    expiresAt: "2026-09-14",
    daysLeft: 79,
    status: "ok",
    lastPolicyNote: "Income €3,280 verified Mar 2026",
  },
  {
    id: "demo-th",
    visaId: "thailand-dtv",
    country: "Thailand",
    flag: "🇹🇭",
    programName: "DTV",
    expiresAt: "2026-07-05",
    daysLeft: 8,
    status: "urgent",
    lastPolicyNote: "Renewal checklist ready · 3 docs needed",
  },
];
