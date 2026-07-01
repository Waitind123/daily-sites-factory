#!/usr/bin/env node
/** Enable CNY via Stripe; sync polar-checkout from factory-lib. */
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const CHECKOUT_TEMPLATE = join(ROOT, "factory-lib/polar-checkout.ts");
const CONFIG_TEMPLATE = join(ROOT, "factory-lib/polar-config.ts");

const CNY_HELPER = `
export const PRICE_CNY_MONTHLY = 6900;

export async function createCnyCheckoutSession(origin: string, locale: Locale = "en") {
  const product = getStripeProductCopy(locale);
  const stripe = getStripe();
  if (!stripe) {
    return {
      demo: true as const,
      url: \`\${origin}/success?demo=true&currency=cny\`,
    };
  }
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card", "alipay", "wechat_pay"],
    payment_method_options: { wechat_pay: { client: "web" } },
    line_items: [
      {
        price_data: {
          currency: "cny",
          product_data: { name: product.name, description: product.description },
          unit_amount: PRICE_CNY_MONTHLY,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: \`\${origin}/success?session_id={CHECKOUT_SESSION_ID}&currency=cny\`,
    cancel_url: \`\${origin}/join\`,
    metadata: { product: "factory-monthly-cny", currency: "cny" },
  });
  return { demo: false as const, url: session.url!, sessionId: session.id };
}
`;

function siteDirs() {
  return readdirSync(join(ROOT, "sites"), { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "factory-dashboard")
    .map((d) => d.name);
}

function patchGetStripe(s) {
  return s.replace(
    /export function getStripe\(\) \{\s*if \(DEMO_MODE \|\| POLAR_CHECKOUT_URL\) return null;/g,
    "export function getStripe() {\n  if (!process.env.STRIPE_SECRET_KEY) return null;"
  );
}

function patchPolarUsdOnly(s) {
  if (s.includes('currency !== "cny"')) return s;
  const block =
    /const polarUrl = await resolvePolarCheckoutUrl\(origin\);\s*\n\s*if \(polarUrl\) \{\s*\n\s*return \{ demo: false as const, url: polarUrl \};\s*\n\s*\}/;
  if (!block.test(s)) return s;

  if (s.includes('currency: "cny" | "usd"')) {
    return s.replace(
      block,
      `if (currency !== "cny") {
  const polarUrl = await resolvePolarCheckoutUrl(origin, { currency });
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }
}`
    );
  }

  if (s.includes("BillingPlan") || s.includes('plan === "annual"')) {
    return s.replace(
      block,
      `const isAnnual = plan === "annual";
  const payCurrency = isAnnual && locale === "zh" ? "cny" : "usd";
  if (payCurrency !== "cny") {
    const polarUrl = await resolvePolarCheckoutUrl(origin, { currency: payCurrency });
    if (polarUrl) {
      return { demo: false as const, url: polarUrl };
    }
  }`
    );
  }

  return s.replace(
    block,
    `if (payCurrency !== "cny") {
  const polarUrl = await resolvePolarCheckoutUrl(origin, { currency: payCurrency });
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }
}`
  );
}

function ensurePayCurrencyVar(s) {
  if (s.includes("const payCurrency")) return s;
  if (s.includes('currency: "cny" | "usd"')) return s;
  if (s.includes("BillingPlan") || s.includes('plan === "annual"')) return s;
  return s.replace(
    /export async function createCheckoutSession\(([^)]+)\) \{/,
    `export async function createCheckoutSession($1, payCurrency: "cny" | "usd" = "usd") {`
  );
}

function addCnyHelper(s) {
  if (s.includes("createCnyCheckoutSession")) return s;
  if (!s.includes("getStripeProductCopy")) return s;
  return s.replace(/export async function createCheckoutSession/, `${CNY_HELPER}\nexport async function createCheckoutSession`);
}

function patchCheckoutRoute(siteDir) {
  const routePath = join(siteDir, "app/api/checkout/route.ts");
  if (!existsSync(routePath)) return false;
  let s = readFileSync(routePath, "utf8");
  if (s.includes("createCnyCheckoutSession")) return false;
  if (!s.includes("createCheckoutSession")) return false;

  if (!s.includes('from "@/lib/stripe"')) {
    s = s.replace(
      /import \{ createCheckoutSession \} from "@\/lib\/stripe";/,
      'import { createCheckoutSession, createCnyCheckoutSession } from "@/lib/stripe";'
    );
  } else {
    s = s.replace(
      /import \{([^}]+)\} from "@\/lib\/stripe";/,
      (m, inner) => {
        if (inner.includes("createCnyCheckoutSession")) return m;
        return `import {${inner.trim()}, createCnyCheckoutSession } from "@/lib/stripe";`;
      }
    );
  }

  const inject = `
  if (
    request.nextUrl.searchParams.get("currency") === "cny" ||
    (await request.formData().catch(() => null))?.get("currency") === "cny"
  ) {
    const locale = await getLocale();
    const result = await createCnyCheckoutSession(origin, locale);
    const response = NextResponse.redirect(result.url, 302);
    if (result.demo) {
      response.headers.append("Set-Cookie", memberCookieHeader());
    }
    return response;
  }
`;

  if (s.includes("checkoutRedirect")) {
    s = s.replace(
      /async function checkoutRedirect\(request: NextRequest\) \{\s*\n\s*const origin =/,
      `async function checkoutRedirect(request: NextRequest) {\n  const origin =`
    );
    if (!s.includes('currency") === "cny"')) {
      s = s.replace(
        /(async function checkoutRedirect\(request: NextRequest\) \{\s*\n\s*const origin = [^;]+;)/,
        `$1${inject}`
      );
    }
  }

  writeFileSync(routePath, s);
  return true;
}

let copied = 0;
let patchedStripe = 0;
let patchedRoutes = 0;

for (const siteId of siteDirs()) {
  const siteDir = join(ROOT, "sites", siteId);
  const libDir = join(siteDir, "lib");
  if (!existsSync(libDir)) continue;
  copyFileSync(CHECKOUT_TEMPLATE, join(libDir, "polar-checkout.ts"));
  copyFileSync(CONFIG_TEMPLATE, join(libDir, "polar-config.ts"));
  copied++;

  const stripePath = join(libDir, "stripe.ts");
  if (existsSync(stripePath)) {
    let s = readFileSync(stripePath, "utf8");
    const before = s;
    s = patchGetStripe(s);
    s = ensurePayCurrencyVar(s);
    s = patchPolarUsdOnly(s);
    s = addCnyHelper(s);
    if (s !== before) {
      writeFileSync(stripePath, s);
      patchedStripe++;
    }
  }

  if (patchCheckoutRoute(siteDir)) patchedRoutes++;
}

console.log(`polar synced: ${copied}, stripe: ${patchedStripe}, checkout routes: ${patchedRoutes}`);
