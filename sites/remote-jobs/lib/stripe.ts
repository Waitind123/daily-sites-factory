import Stripe from "stripe";

const DEMO_MODE = !process.env.STRIPE_SECRET_KEY;

export function isDemoMode() {
  return DEMO_MODE;
}

export function getStripe() {
  if (DEMO_MODE) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_CNY = 69900;

export async function createCheckoutSession(origin: string) {
  const stripe = getStripe();

  if (!stripe) {
    return {
      demo: true as const,
      url: `${origin}/success?demo=true`,
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card", "alipay", "wechat_pay"],
    payment_method_options: {
      wechat_pay: { client: "web" },
    },
    line_items: [
      {
        price_data: {
          currency: "cny",
          product_data: {
            name: "远程工作板 · 年度会员",
            description: "无限查看职位详情 + 企业无限发帖，365 天",
          },
          unit_amount: PRICE_CNY,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "remote-jobs-annual" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
