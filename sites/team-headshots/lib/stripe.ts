import Stripe from "stripe";
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

export const PRICE_CNY = 69900;
export const PRICE_USD = 9900;

export async function createCheckoutSession(
  origin: string,
  currency: "cny" | "usd" = "cny"
) {
  const polarUrl = POLAR_CHECKOUT_URL;
  if (polarUrl) {
    return { demo: false as const, url: polarUrl };
  }

  const stripe = getStripe();

  if (!stripe) {
    return {
      demo: true as const,
      url: `${origin}/success?demo=true&currency=${currency}`,
    };
  }

  const isCny = currency === "cny";
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: isCny
      ? ["card", "alipay", "wechat_pay"]
      : ["card"],
    ...(isCny
      ? { payment_method_options: { wechat_pay: { client: "web" } } }
      : {}),
    line_items: [
      {
        price_data: {
          currency: isCny ? "cny" : "usd",
          product_data: {
            name: "团队 AI 头像 · 月付会员",
            description: "最多 10 人 + 无限批量生成 + 全部风格 + 高清下载",
          },
          unit_amount: isCny ? PRICE_CNY : PRICE_USD,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&currency=${currency}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "team-headshots-monthly", currency },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
