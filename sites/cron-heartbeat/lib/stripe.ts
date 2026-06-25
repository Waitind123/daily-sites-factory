import Stripe from "stripe";

const DEMO_MODE = !process.env.STRIPE_SECRET_KEY && !process.env.POLAR_CHECKOUT_URL;

export function isDemoMode() {
  return DEMO_MODE;
}

export function getStripe() {
  if (DEMO_MODE || process.env.POLAR_CHECKOUT_URL) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });
}

export const PRICE_USD = 990;

export async function createCheckoutSession(origin: string) {
  const polarUrl = process.env.POLAR_CHECKOUT_URL;
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
          product_data: {
            name: "Cron Heartbeat · Monthly",
            description: "Unlimited cron monitors, missed-run alerts, Slack & webhooks",
          },
          unit_amount: PRICE_USD,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    metadata: { product: "cron-heartbeat-monthly" },
  });

  return {
    demo: false as const,
    url: session.url!,
    sessionId: session.id,
  };
}
