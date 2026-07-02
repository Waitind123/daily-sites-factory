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
    id: "sri-lanka-launch",
    visaId: "sri-lanka-dnv",
    country: "Sri Lanka",
    flag: "🇱🇰",
    change: "New DNV launched: $2,000/mo income, 1-year + 5-year options",
    changedAt: "2026-07-01",
  },
  {
    id: "colombia-fee",
    visaId: "colombia-v",
    country: "Colombia",
    flag: "🇨🇴",
    change: "Application fee increased: $177→$230",
    changedAt: "2026-06-28",
  },
  {
    id: "croatia-renewal",
    visaId: "croatia-digital",
    country: "Croatia",
    flag: "🇭🇷",
    change: "Visa confirmed non-renewable (was listed as renewable)",
    changedAt: "2026-06-26",
  },
  {
    id: "portugal-fee",
    visaId: "portugal-d8",
    country: "Portugal",
    flag: "🇵🇹",
    change: "Application fee $90→$120; processing 60–90→30–60 days",
    changedAt: "2026-06-25",
  },
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

export type WatchedPolicy = {
  id: string;
  visaId: string;
  country: string;
  flag: string;
  programName: string;
  lastChange?: string;
  alertActive: boolean;
};

export const demoWatchedPolicies: WatchedPolicy[] = [
  {
    id: "demo-pt",
    visaId: "portugal-d8",
    country: "Portugal",
    flag: "🇵🇹",
    programName: "D8 Digital Nomad",
    lastChange: "Income €3,280 verified Mar 2026",
    alertActive: true,
  },
  {
    id: "demo-es",
    visaId: "spain-nomad",
    country: "Spain",
    flag: "🇪🇸",
    programName: "Remote Worker Visa",
    lastChange: "Processing 20→45 days (Jun 22)",
    alertActive: true,
  },
  {
    id: "demo-th",
    visaId: "thailand-dtv",
    country: "Thailand",
    flag: "🇹🇭",
    programName: "DTV",
    lastChange: "Bank proof $13,800→$15,000 (Jun 10)",
    alertActive: true,
  },
];
