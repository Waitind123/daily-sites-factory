import Stripe from "stripe";
import { resolvePolarCheckoutUrl } from "./polar-checkout";

const DEFAULT_POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_YZS7f2bSGvVGtVq9soq8PFjvHvvxkRO09E8Xx0cESgj";

const POLAR_CHECKOUT_URL =
  process.env.POLAR_CHECKOUT_URL ?? DEFAULT_POLAR_CHECKOUT_URL;

export function isDemoMode() {
  return !process.env.STRIPE_SECRET_KEY && !POLAR_CHECKOUT_URL;
}

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_CNY_MONTHLY = 19900;
export const PRICE_CNY = 69900;
export const PRICE_USD = 2900;

async function createStripeSession(
  stripe: Stripe,
  origin: string,
  currency: "cny" | "usd"
) {
  const isCny = currency === "cny";
  const base = {
    mode: "subscription" as const,
    line_items: [
      {
        price_data: {
          currency: isCny ? "cny" : "usd",
          product_data: {
            name: isCny ? "AI 证件照 · 月费会员" : "AI Headshots · Monthly",
            description: isCny
              ? "无限生成 + 全部风格 + 高清下载"
              : "Unlimited generations + all styles + HD download",
          },
          unit_amount: isCny ? PRICE_CNY_MONTHLY : PRICE_USD,
          recurring: { interval: "month" as const },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&currency=${currency}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "ai-headshots-monthly", currency },
  };

  if (isCny) {
    try {
      const session = await stripe.checkout.sessions.create({
        ...base,
        payment_method_types: ["card", "alipay", "wechat_pay"],
        payment_method_options: { wechat_pay: { client: "web" } },
      });
      return session;
    } catch (err) {
      console.warn("[stripe] CNY alipay/wechat unavailable, fallback to card:", err);
    }
  }

  return stripe.checkout.sessions.create({
    ...base,
    payment_method_types: ["card"],
  });
}

export async function createCheckoutSession(
  origin: string,
  currency: "cny" | "usd" = "cny"
) {
  const stripe = getStripe();

  if (stripe) {
    const session = await createStripeSession(stripe, origin, currency);
    return {
      demo: false as const,
      url: session.url!,
      sessionId: session.id,
    };
  }

  return {
    demo: true as const,
    url: `${origin}/success?demo=true&currency=${currency}`,
  };
}
