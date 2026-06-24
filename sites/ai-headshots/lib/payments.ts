import { createCheckoutSession, isDemoMode as isStripeDemo } from "./stripe";

export type Currency = "cny" | "usd";

export function getPaymentMode() {
  if (process.env.STRIPE_SECRET_KEY) return "stripe";
  if (process.env.POLAR_CHECKOUT_URL) return "polar";
  if (process.env.LEMON_SQUEEZY_CHECKOUT_URL) return "lemonsqueezy";
  return "demo";
}

export function isDemoMode() {
  return getPaymentMode() === "demo";
}

export async function createPayment(origin: string, currency: Currency = "cny") {
  const mode = getPaymentMode();

  if (mode === "stripe") {
    const result = await createCheckoutSession(origin, currency);
    return { provider: "stripe" as const, ...result };
  }

  if (mode === "polar" && currency === "usd") {
    return {
      provider: "polar" as const,
      demo: false as const,
      url: process.env.POLAR_CHECKOUT_URL!,
    };
  }

  if (mode === "lemonsqueezy") {
    const url =
      currency === "usd" && process.env.LEMON_SQUEEZY_CHECKOUT_URL_USD
        ? process.env.LEMON_SQUEEZY_CHECKOUT_URL_USD
        : process.env.LEMON_SQUEEZY_CHECKOUT_URL!;
    return { provider: "lemonsqueezy" as const, demo: false as const, url };
  }

  // demo 或 Polar 未配 USD 时走演示
  return {
    provider: "demo" as const,
    demo: true as const,
    url: `${origin}/success?demo=true&currency=${currency}`,
  };
}

export function getPricing() {
  return {
    cny: { amount: 699, label: "¥699/年" },
    usd: { amount: 99, label: "$99/年" },
    mode: getPaymentMode(),
    stripeDemo: isStripeDemo(),
  };
}
