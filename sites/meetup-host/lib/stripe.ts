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

export const PRICE_USD = 990;

export async function createCheckoutSession(origin: string) {
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
            name: "Meetup 组织助手 · 月度会员",
            description: "无限活动管理、RSVP 候补队列、签到视图、提醒邮件模板",
          },
          unit_amount: PRICE_USD,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "meetup-host-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
