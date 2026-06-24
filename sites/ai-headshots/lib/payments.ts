import { createCheckoutSession, isDemoMode as isStripeDemo } from "./stripe";
import { POLAR_CHECKOUT_URL, PRICING } from "./config";

export type Currency = "cny" | "usd";

export function getPaymentMode() {
  if (process.env.STRIPE_SECRET_KEY) return "stripe";
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
    return {
      provider: "polar" as const,
      demo: false as const,
      url: POLAR_CHECKOUT_URL,
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
