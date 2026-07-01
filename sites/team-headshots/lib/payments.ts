import { createCheckoutSession, isDemoMode as isStripeDemo } from "./stripe";
import { POLAR_CHECKOUT_URL, PRICING } from "./config";
import { resolvePolarCheckoutUrl } from "./polar-checkout";

export type Currency = "cny" | "usd";

export function getPaymentMode() {
  if (process.env.STRIPE_SECRET_KEY) return "stripe";
  if (process.env.POLAR_ACCESS_TOKEN && process.env.POLAR_PRODUCT_ID) return "polar";
  if (POLAR_CHECKOUT_URL) return "polar";
  if (process.env.LEMON_SQUEEZY_CHECKOUT_URL) return "lemonsqueezy";
  return "demo";
}

export function isDemoMode() {
  return getPaymentMode() === "demo";
}

export function getPolarCheckoutUrl() {
  return POLAR_CHECKOUT_URL;
}

export async function createPayment(origin: string, currency: Currency = "usd") {
  const mode = getPaymentMode();

  if (mode === "stripe") {
    const result = await createCheckoutSession(origin, currency);
    return { provider: "stripe" as const, ...result };
  }

  if (mode === "polar") {
    const url = await resolvePolarCheckoutUrl(origin);
    return {
      provider: "polar" as const,
      demo: false as const,
      url,
    };
  }

  if (mode === "lemonsqueezy") {
    const url = process.env.LEMON_SQUEEZY_CHECKOUT_URL!;
    return { provider: "lemonsqueezy" as const, demo: false as const, url };
  }

  return {
    provider: "demo" as const,
    demo: true as const,
    url: `${origin}/success?demo=true`,
  };
}

export function getPricing() {
  return {
    ...PRICING,
    mode: getPaymentMode(),
    stripeDemo: isStripeDemo(),
    polarUrl: POLAR_CHECKOUT_URL,
  };
}
