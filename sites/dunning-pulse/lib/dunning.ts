import { randomBytes } from "crypto";

export type FailureReason =
  | "expired_card"
  | "insufficient_funds"
  | "card_declined"
  | "authentication_required";

export type DunningEmail = {
  id: string;
  day: number;
  subject: string;
  sentAt: string | null;
};

export type RecoveryCampaign = {
  id: string;
  customerEmail: string;
  amount: number;
  failureReason: FailureReason;
  status: "pending" | "emailed" | "recovered" | "failed";
  createdAt: string;
  emails: DunningEmail[];
  recoveredAt: string | null;
};

const campaigns = new Map<string, RecoveryCampaign>();

const EMAIL_TEMPLATES: Record<
  FailureReason,
  { day: number; subject: string }[]
> = {
  expired_card: [
    { day: 0, subject: "Your card expired — update in 1 click" },
    { day: 2, subject: "Reminder: subscription paused until card update" },
    { day: 5, subject: "Last chance: your account will cancel soon" },
    { day: 7, subject: "Final notice before cancellation" },
  ],
  insufficient_funds: [
    { day: 0, subject: "Payment failed — retry when funds are available" },
    { day: 3, subject: "We'll retry your payment tomorrow" },
    { day: 7, subject: "Subscription at risk — update payment method" },
  ],
  card_declined: [
    { day: 0, subject: "Card declined — please update your payment" },
    { day: 2, subject: "Action needed: subscription payment failed" },
    { day: 5, subject: "Your access may be suspended soon" },
  ],
  authentication_required: [
    { day: 0, subject: "Confirm your payment — 3D Secure required" },
    { day: 1, subject: "Reminder: complete payment authentication" },
    { day: 3, subject: "Subscription paused — authenticate payment" },
  ],
};

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function buildEmails(reason: FailureReason): DunningEmail[] {
  return EMAIL_TEMPLATES[reason].map((t) => ({
    id: randomId(),
    day: t.day,
    subject: t.subject,
    sentAt: null,
  }));
}

export function createCampaign(
  customerEmail: string,
  amount: number,
  failureReason: FailureReason
): RecoveryCampaign {
  const campaign: RecoveryCampaign = {
    id: randomId(),
    customerEmail: customerEmail.trim().toLowerCase(),
    amount: Math.round(amount * 100) / 100,
    failureReason,
    status: "pending",
    createdAt: new Date().toISOString(),
    emails: buildEmails(failureReason),
    recoveredAt: null,
  };
  campaigns.set(campaign.id, campaign);
  return campaign;
}

export function listCampaigns(): RecoveryCampaign[] {
  return [...campaigns.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getCampaignById(id: string): RecoveryCampaign | undefined {
  return campaigns.get(id);
}

export function sendDunningEmail(campaignId: string): DunningEmail | null {
  const campaign = campaigns.get(campaignId);
  if (!campaign) return null;

  const nextEmail = campaign.emails.find((e) => !e.sentAt);
  if (!nextEmail) return null;

  nextEmail.sentAt = new Date().toISOString();
  campaign.status = "emailed";
  campaigns.set(campaignId, campaign);
  return nextEmail;
}

export function simulateRecovery(campaignId: string): RecoveryCampaign | null {
  const campaign = campaigns.get(campaignId);
  if (!campaign) return null;

  campaign.status = "recovered";
  campaign.recoveredAt = new Date().toISOString();
  campaign.emails.forEach((e) => {
    if (!e.sentAt) e.sentAt = new Date().toISOString();
  });
  campaigns.set(campaignId, campaign);
  return campaign;
}

export function getCampaignStats() {
  const all = listCampaigns();
  const recovered = all.filter((c) => c.status === "recovered");
  const pending = all.filter((c) => c.status === "pending" || c.status === "emailed");
  const totalAtRisk = pending.reduce((sum, c) => sum + c.amount, 0);
  const totalRecovered = recovered.reduce((sum, c) => sum + c.amount, 0);
  const recoveryRate =
    all.length > 0 ? Math.round((recovered.length / all.length) * 1000) / 10 : 0;

  return {
    totalCampaigns: all.length,
    recovered: recovered.length,
    pending: pending.length,
    totalAtRisk,
    totalRecovered,
    recoveryRate,
  };
}
