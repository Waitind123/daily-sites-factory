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
  if (DEMO_MODE || POLAR_CHECKOUT_URL) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_USD = 990;

export async function createCheckoutSession(origin: string) {
  const polarUrl = await resolvePolarCheckoutUrl(origin);
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
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
          recurring: { interval: "month" },
          product_data: {
            name: "签证追踪器 · 月度会员",
            description: "28+ 国签证数据库、收入门槛对比、申请清单、政策更新提醒",
          },
          unit_amount: PRICE_USD,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "visa-tracker-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
