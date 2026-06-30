export type CheckResult = {
  ok: boolean;
  status: number;
  latencyMs: number;
  url: string;
  checkedAt: string;
  error?: string;
};

export const features = [
  {
    icon: "⚡",
    title: "1-minute checks",
    desc: "HTTP/HTTPS monitoring from EU + US regions. Know within 60 seconds when your site goes down.",
  },
  {
    icon: "🔔",
    title: "Slack & webhook alerts",
    desc: "Instant notifications when status changes. No more finding out from angry users.",
  },
  {
    icon: "📊",
    title: "Public status page",
    desc: "Share a branded status page with customers. Build trust during incidents.",
  },
  {
    icon: "🔒",
    title: "SSL expiry monitoring",
    desc: "Get warned 14 days before certificates expire. Avoid surprise HTTPS failures.",
  },
];

export const testimonials = [
  {
    name: "Alex K.",
    role: "Indie SaaS founder",
    text: "UptimeRobot went from $8 to $34/month overnight. Uptime Pulse does what I need for $9.9.",
  },
  {
    name: "Mia Chen",
    role: "Bootstrapped dev",
    text: "Finally a monitor that doesn't charge per status page. Flat pricing is how indie tools should work.",
  },
  {
    name: "Tom R.",
    role: "Side project builder",
    text: "Set up 8 monitors in 2 minutes. Slack alert saved me when my API went down at 3am.",
  },
];

export const sampleMonitors = [
  { name: "Landing page", url: "https://example.com", status: "up" as const, latency: 142 },
  { name: "API health", url: "https://httpbin.org/status/200", status: "up" as const, latency: 89 },
  { name: "Docs site", url: "https://nextjs.org", status: "up" as const, latency: 203 },
];

export async function checkUrl(url: string): Promise<CheckResult> {
  const start = Date.now();
  const checkedAt = new Date().toISOString();

  let parsed: URL;
  try {
    parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return {
        ok: false,
        status: 0,
        latencyMs: 0,
        url,
        checkedAt,
        error: "Only HTTP/HTTPS URLs are supported",
      };
    }
  } catch {
    return {
      ok: false,
      status: 0,
      latencyMs: 0,
      url,
      checkedAt,
      error: "Invalid URL format",
    };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(parsed.toString(), {
      method: "GET",
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": "PulseSuite/1.0 (+https://uptime-alt.vercel.app)" },
    });
    clearTimeout(timeout);

    return {
      ok: res.ok,
      status: res.status,
      latencyMs: Date.now() - start,
      url: parsed.toString(),
      checkedAt,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      latencyMs: Date.now() - start,
      url: parsed.toString(),
      checkedAt,
      error: error instanceof Error ? error.message : "Check failed",
    };
  }
}
