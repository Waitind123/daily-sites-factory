#!/usr/bin/env node
/**
 * Enable Polar checkout on all sites: default URL, GET redirect, checkout buttons.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const DEFAULT_URL = JSON.parse(
  readFileSync(join(ROOT, "config/polar-default.json"), "utf8")
).checkoutUrl;

const DEFAULT_CONST = `const DEFAULT_POLAR_CHECKOUT_URL =
  "${DEFAULT_URL}";`;

function siteDirs() {
  return readdirSync(join(ROOT, "sites"), { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "factory-dashboard")
    .map((d) => d.name);
}

function patchStripe(siteId) {
  const path = join(ROOT, "sites", siteId, "lib/stripe.ts");
  if (!existsSync(path)) return false;
  let s = readFileSync(path, "utf8");
  if (s.includes("DEFAULT_POLAR_CHECKOUT_URL")) return false;

  if (s.includes("POLAR_CHECKOUT_URL")) {
    if (!s.includes("DEFAULT_POLAR_CHECKOUT_URL")) {
      s = s.replace(
        /(import[^\n]+\n)+/,
        (m) => `${m}${DEFAULT_CONST}\n\n`
      );
      s = s.replace(
        /const DEMO_MODE = !process\.env\.STRIPE_SECRET_KEY && !process\.env\.POLAR_CHECKOUT_URL;/,
        `const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ?? DEFAULT_POLAR_CHECKOUT_URL;
const DEMO_MODE = !process.env.STRIPE_SECRET_KEY && !POLAR_CHECKOUT_URL;`
      );
      s = s.replace(
        /if \(DEMO_MODE \|\| process\.env\.POLAR_CHECKOUT_URL\)/g,
        "if (DEMO_MODE || POLAR_CHECKOUT_URL)"
      );
      s = s.replace(
        /const polarUrl = process\.env\.POLAR_CHECKOUT_URL;/g,
        "const polarUrl = POLAR_CHECKOUT_URL;"
      );
    }
  } else {
    s = s.replace(
      /(import[^\n]+\n)+/,
      (m) => `${m}${DEFAULT_CONST}\n\n`
    );
    s = s.replace(
      /const DEMO_MODE = !process\.env\.STRIPE_SECRET_KEY;/,
      `const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ?? DEFAULT_POLAR_CHECKOUT_URL;
const DEMO_MODE = !process.env.STRIPE_SECRET_KEY && !POLAR_CHECKOUT_URL;`
    );
    s = s.replace(
      /export async function createCheckoutSession\([^)]*\) \{/,
      (m) => `${m}
  const polarUrl = POLAR_CHECKOUT_URL;
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }
`
    );
    s = s.replace(
      /if \(DEMO_MODE\) return null;/,
      "if (DEMO_MODE || POLAR_CHECKOUT_URL) return null;"
    );
  }

  writeFileSync(path, s);
  return true;
}

function patchCheckoutRoute(siteId) {
  const path = join(ROOT, "sites", siteId, "app/api/checkout/route.ts");
  if (!existsSync(path)) return false;
  let s = readFileSync(path, "utf8");
  if (s.includes('searchParams.get("go")')) return false;

  if (s.includes("createPayment")) {
    s = s.replace(
      /export async function POST\(request: NextRequest\) \{[\s\S]*?\n\}/,
      `async function checkoutRedirect(request: NextRequest, currency: "cny" | "usd") {
  const origin = request.headers.get("origin") || request.nextUrl.origin;
  const result = await createPayment(origin, currency);
  const response = NextResponse.redirect(result.url, 302);
  if (result.demo) {
    response.headers.append("Set-Cookie", memberCookieHeader());
  }
  return response;
}

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData().catch(() => null);
    const body = form
      ? { currency: form.get("currency") as string }
      : await request.json().catch(() => ({}));
    const currency = body.currency === "usd" ? "usd" : "cny";
    return await checkoutRedirect(request, currency);
  } catch (error) {
    console.error("Checkout error:", error);
    return apiError("CHECKOUT_FAILED", 500);
  }
}`
    );
    s = s.replace(
      /export async function GET\(\) \{[\s\S]*?\n\}/,
      `export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("go") === "1") {
    try {
      const currency =
        request.nextUrl.searchParams.get("currency") === "cny" ? "cny" : "usd";
      return await checkoutRedirect(request, currency);
    } catch (error) {
      console.error("Checkout error:", error);
      return apiError("CHECKOUT_FAILED", 500);
    }
  }
  const { getPricing } = await import("@/lib/payments");
  getPricing();
  return NextResponse.json({ status: "ok" });
}`
    );
  } else if (s.includes("getLocale")) {
    s = s.replace(
      /export async function POST\(request: NextRequest\) \{[\s\S]*?\n\}/,
      `async function checkoutRedirect(request: NextRequest) {
  const origin = request.headers.get("origin") || request.nextUrl.origin;
  const locale = await getLocale();
  const plan =
    request.nextUrl.searchParams.get("plan") === "annual" ||
    (await request.formData().catch(() => null))?.get("plan") === "annual"
      ? "annual"
      : "monthly";
  const result = await createCheckoutSession(origin, locale, plan);
  const response = NextResponse.redirect(result.url, 302);
  if (result.demo) {
    response.headers.append("Set-Cookie", memberCookieHeader());
  }
  return response;
}

export async function POST(request: NextRequest) {
  try {
    return await checkoutRedirect(request);
  } catch (error) {
    console.error("Checkout error:", error);
    return apiError("CHECKOUT_FAILED", 500);
  }
}`
    );
    s = s.replace(
      /export async function GET\(\) \{[\s\S]*?\n\}/,
      `export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("go") === "1") {
    try {
      return await checkoutRedirect(request);
    } catch (error) {
      console.error("Checkout error:", error);
      return apiError("CHECKOUT_FAILED", 500);
    }
  }
  const { isDemoMode } = await import("@/lib/stripe");
  return NextResponse.json({
    status: "ok",
    price: "$9.9/mo",
    demo: isDemoMode(),
  });
}`
    );
  } else {
    s = s.replace(
      /export async function POST\(request: NextRequest\) \{[\s\S]*?\n\}/,
      `async function checkoutRedirect(request: NextRequest) {
  const origin = request.headers.get("origin") || request.nextUrl.origin;
  const result = await createCheckoutSession(origin);
  const response = NextResponse.redirect(result.url, 302);
  if (result.demo) {
    response.headers.append("Set-Cookie", memberCookieHeader());
  }
  return response;
}

export async function POST(request: NextRequest) {
  try {
    return await checkoutRedirect(request);
  } catch (error) {
    console.error("Checkout error:", error);
    return apiError("CHECKOUT_FAILED", 500);
  }
}`
    );
    s = s.replace(
      /export async function GET\(\) \{[\s\S]*?\n\}/,
      `export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("go") === "1") {
    try {
      return await checkoutRedirect(request);
    } catch (error) {
      console.error("Checkout error:", error);
      return apiError("CHECKOUT_FAILED", 500);
    }
  }
  return NextResponse.json({
    status: "ok",
    code: "checkout_ready",
    price: "$9.9/mo",
    demo: (await import("@/lib/stripe")).isDemoMode(),
  });
}`
    );
  }

  writeFileSync(path, s);
  return true;
}

function patchCheckoutButton(siteId) {
  const path = join(ROOT, "sites", siteId, "components/CheckoutButton.tsx");
  if (!existsSync(path)) return false;
  let s = readFileSync(path, "utf8");
  if (s.includes('href="/api/checkout?go=1"') || s.includes("href={`/api/checkout?go=1")) {
    return false;
  }

  const hasPlan = s.includes('name="plan"') || s.includes("plan = ");
  const hasTrack = s.includes("trackFactoryEvent");

  if (hasPlan) {
    s = `"use client";

import { trackFactoryEvent } from "@/lib/analytics-client";
import { siteMeta } from "@/lib/site-meta";

export function CheckoutButton({
  className = "",
  label = "Subscribe · $9.9/mo",
  plan = "monthly",
}: {
  className?: string;
  label?: string;
  plan?: "monthly" | "annual";
}) {
  return (
    <a
      href={\`/api/checkout?go=1&plan=\${plan}\`}
      onClick={() => trackFactoryEvent(siteMeta.id, "checkout")}
      className={\`block w-full rounded-xl bg-brand-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] \${className}\`}
    >
      {label}
    </a>
  );
}
`;
  } else if (hasTrack) {
    s = `"use client";

import { trackFactoryEvent } from "@/lib/analytics-client";
import { siteMeta } from "@/lib/site-meta";

export function CheckoutButton({
  className = "",
  label = "Subscribe · $9.9/mo",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="/api/checkout?go=1"
      onClick={() => trackFactoryEvent(siteMeta.id, "checkout")}
      className={\`block w-full rounded-xl bg-brand-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] \${className}\`}
    >
      {label}
    </a>
  );
}
`;
  } else {
    return false;
  }

  writeFileSync(path, s);
  return true;
}

const stats = { stripe: 0, route: 0, button: 0 };
for (const site of siteDirs()) {
  if (patchStripe(site)) stats.stripe++;
  if (patchCheckoutRoute(site)) stats.route++;
  if (patchCheckoutButton(site)) stats.button++;
}
console.log("Polar sync:", stats);
