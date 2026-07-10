import { randomBytes } from "crypto";

export type JobStatus = "healthy" | "late" | "missed" | "failed";

export type CronJob = {
  id: string;
  name: string;
  schedule: string;
  graceMinutes: number;
  pingUrl: string;
  status: JobStatus;
  lastPingAt?: string;
  nextExpectedAt?: string;
  createdAt: string;
};

export type CreateJobResult = {
  job: CronJob;
  curlSnippet: string;
};

export const features = [
  {
    icon: "💓",
    title: "Heartbeat ping URLs",
    desc: "One curl at the end of your cron job. If the ping stops, you get alerted within minutes.",
  },
  {
    icon: "⏱️",
    title: "Missed-run detection",
    desc: "Know when jobs run late or never fire. No more silent backup failures at 3am.",
  },
  {
    icon: "🔔",
    title: "Slack, email & webhooks",
    desc: "Escalating alerts at 1h, 6h, 24h until resolved. Members pick their channels.",
  },
  {
    icon: "📋",
    title: "Job output in alerts",
    desc: "Send ?status=fail with logs. See the last 500 chars in your Slack message.",
  },
];

export const testimonials = [
  {
    name: "Vadim K.",
    role: "Solo backend dev",
    text: "My nightly backup cron failed for 2 weeks before I noticed. Cron Heartbeat caught the next miss in 6 minutes.",
  },
  {
    name: "Sarah L.",
    role: "Indie SaaS founder",
    text: "Healthchecks.io works but I wanted flat $9.9 pricing. This does exactly what I need for 12 cron jobs.",
  },
  {
    name: "James Wu",
    role: "Side project builder",
    text: "Wrapped my Vercel cron in one curl line. Slack alert saved my ETL when pg_cron hung.",
  },
];

export const sampleJobs = [
  { name: "Nightly backup", schedule: "0 2 * * *", status: "healthy" as const, lastPing: "2h ago" },
  { name: "ETL import", schedule: "*/15 * * * *", status: "healthy" as const, lastPing: "12m ago" },
  { name: "Weekly report", schedule: "0 9 * * 1", status: "late" as const, lastPing: "3h ago" },
];

const CRON_FIELD = /^(\*|[0-9,\-/]+)$/;

export function validateCronExpression(expr: string): { valid: boolean } {
  const parts = expr.trim().split(/\s+/);
  if (parts.length < 5 || parts.length > 6) {
    return { valid: false };
  }
  for (const part of parts) {
    if (!CRON_FIELD.test(part)) {
      return { valid: false };
    }
  }
  return { valid: true };
}

export function describeCron(expr: string): string {
  const parts = expr.trim().split(/\s+/);
  if (parts.length < 5) return expr;
  const [min, hour, dom, mon, dow] = parts;
  if (min.startsWith("*/")) return `Every ${min.slice(2)} minutes`;
  if (hour === "*" && min === "0") return "Every hour";
  if (hour !== "*" && min === "0") return `Daily at ${hour}:00 UTC`;
  if (dow !== "*" && dom === "*") return `Weekly on day ${dow}`;
  return expr;
}

function randomToken(): string {
  return randomBytes(12).toString("hex");
}

export function createJob(
  name: string,
  schedule: string,
  graceMinutes: number,
  baseUrl: string
): CreateJobResult {
  const id = randomToken().slice(0, 16);
  const pingUrl = `${baseUrl}/api/ping/${id}`;
  const now = new Date().toISOString();

  const job: CronJob = {
    id,
    name,
    schedule,
    graceMinutes,
    pingUrl,
    status: "healthy",
    createdAt: now,
    lastPingAt: now,
    nextExpectedAt: new Date(Date.now() + graceMinutes * 60_000).toISOString(),
  };

  const curlSnippet = `curl -fsS -X POST "${pingUrl}" \\
  -H "Content-Type: application/json" \\
  -d '{"status":"success","duration_ms":1200}'`;

  return { job, curlSnippet };
}
