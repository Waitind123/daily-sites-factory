import { randomBytes } from "crypto";

export type TriggerType = "webhook" | "cron";

export type FlowStatus = "active" | "paused" | "error";

export type Flow = {
  id: string;
  name: string;
  triggerType: TriggerType;
  schedule?: string;
  targetUrl: string;
  webhookUrl?: string;
  status: FlowStatus;
  lastRunAt?: string;
  runCount: number;
  createdAt: string;
};

export type CreateFlowResult = {
  flow: Flow;
  curlSnippet: string;
  testSnippet: string;
};

export const sampleFlows = [
  {
    name: "Stripe → Slack",
    triggerType: "webhook" as const,
    status: "active" as const,
    lastRun: "2m ago",
    runs: 847,
  },
  {
    name: "Daily digest cron",
    triggerType: "cron" as const,
    schedule: "0 9 * * *",
    status: "active" as const,
    lastRun: "6h ago",
    runs: 124,
  },
  {
    name: "Form submit → Notion",
    triggerType: "webhook" as const,
    status: "paused" as const,
    lastRun: "1d ago",
    runs: 52,
  },
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

export function validateTargetUrl(url: string): { valid: boolean } {
  try {
    const parsed = new URL(url);
    return { valid: parsed.protocol === "https:" || parsed.protocol === "http:" };
  } catch {
    return { valid: false };
  }
}

function randomToken(): string {
  return randomBytes(12).toString("hex");
}

export function createFlow(
  name: string,
  triggerType: TriggerType,
  targetUrl: string,
  baseUrl: string,
  schedule?: string
): CreateFlowResult {
  const id = randomToken().slice(0, 16);
  const now = new Date().toISOString();
  const webhookUrl =
    triggerType === "webhook" ? `${baseUrl}/api/hook/${id}` : undefined;

  const flow: Flow = {
    id,
    name,
    triggerType,
    schedule: triggerType === "cron" ? schedule : undefined,
    targetUrl,
    webhookUrl,
    status: "active",
    runCount: 0,
    createdAt: now,
  };

  const curlSnippet =
    triggerType === "webhook"
      ? `curl -X POST "${webhookUrl}" \\
  -H "Content-Type: application/json" \\
  -d '{"event":"payment.succeeded","amount":990}'`
      : `# Cron trigger: ${schedule}
# Zapier Pulse fires this flow on schedule and POSTs to:
# ${targetUrl}`;

  const testSnippet = `curl -X POST "${webhookUrl ?? targetUrl}" \\
  -H "Content-Type: application/json" \\
  -d '{"test":true,"source":"zapier-pulse"}'`;

  return { flow, curlSnippet, testSnippet };
}

export async function forwardWebhook(targetUrl: string, payload: unknown): Promise<{
  ok: boolean;
  status: number;
  forwardedAt: string;
}> {
  const forwardedAt = new Date().toISOString();
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    return { ok: res.ok, status: res.status, forwardedAt };
  } catch {
    return { ok: false, status: 0, forwardedAt };
  }
}
