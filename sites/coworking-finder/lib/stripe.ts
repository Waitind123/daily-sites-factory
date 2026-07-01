import Stripe from "stripe";
import { resolvePolarCheckoutUrl } from "./polar-checkout";
const DEFAULT_POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";


const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ?? DEFAULT_POLAR_CHECKOUT_URL;
const DEMO_MODE = !process.env.STRIPE_SECRET_KEY && !POLAR_CHECKOUT_URL;

export function isDemoMode() {
  return DEMO_MODE;
}

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_USD = 990;

export async function createCheckoutSession(origin: string, payCurrency: "cny" | "usd" = "usd") {
  if (payCurrency !== "cny") {
  const polarUrl = await resolvePolarCheckoutUrl(origin, { currency: payCurrency });
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }
}

  const stripe = getStripe();

  if (!stripe) {
    return {
      demo: true as const,
      url: `${origin}/success?demo=true`,
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "联合办公 Finder · 月度会员",
            description: "无限查看空间详情 + WiFi 数据 + 内部贴士，按月订阅",
          },
          unit_amount: PRICE_USD,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "coworking-finder-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
