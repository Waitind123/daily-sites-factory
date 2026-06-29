import { randomBytes } from "crypto";

export type RequestStatus = "sent" | "reviewed";

export type ReviewRequest = {
  id: string;
  businessName: string;
  customerName: string;
  customerPhone: string;
  googleReviewUrl: string;
  serviceName: string;
  smsText: string;
  status: RequestStatus;
  sentAt: string;
  reviewedAt?: string;
};

const requests = new Map<string, ReviewRequest>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function isValidGoogleUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      (parsed.hostname.includes("google") ||
        parsed.hostname.includes("g.page") ||
        parsed.hostname.includes("goo.gl"))
    );
  } catch {
    return false;
  }
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export function composeSms(
  input: {
    businessName: string;
    customerName: string;
    googleReviewUrl: string;
    serviceName?: string;
  },
  locale: "en" | "zh" = "en"
): string {
  const firstName = input.customerName.trim().split(/\s+/)[0];
  if (locale === "zh") {
    const service = input.serviceName?.trim()
      ? `感谢今天选择${input.businessName}的${input.serviceName.trim()}。`
      : `感谢今天选择${input.businessName}。`;
    return `Hi ${firstName}！${service}方便留个 Google 评价吗？${input.googleReviewUrl} 回复 STOP 退订`;
  }
  const service = input.serviceName?.trim()
    ? `Thanks for choosing ${input.businessName} for your ${input.serviceName.trim()} today.`
    : `Thanks for choosing ${input.businessName} today.`;
  return `Hi ${firstName}! ${service} Mind leaving a quick Google review? ${input.googleReviewUrl} Reply STOP to opt out`;
}

export function createReviewRequest(input: {
  businessName: string;
  customerName: string;
  customerPhone: string;
  googleReviewUrl: string;
  serviceName?: string;
  locale?: "en" | "zh";
}): ReviewRequest {
  const locale = input.locale ?? "en";
  const smsText = composeSms(input, locale);

  const request: ReviewRequest = {
    id: randomId(),
    businessName: input.businessName.trim(),
    customerName: input.customerName.trim(),
    customerPhone: input.customerPhone.trim(),
    googleReviewUrl: input.googleReviewUrl.trim(),
    serviceName: input.serviceName?.trim() || "",
    smsText,
    status: "sent",
    sentAt: new Date().toISOString(),
  };

  requests.set(request.id, request);
  return request;
}

export function listReviewRequests(): ReviewRequest[] {
  return [...requests.values()].sort(
    (a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()
  );
}

export function getReviewRequest(id: string): ReviewRequest | undefined {
  return requests.get(id);
}

export function markReviewReceived(id: string): ReviewRequest | null {
  const request = requests.get(id);
  if (!request) return null;
  if (request.status === "reviewed") return request;

  const updated: ReviewRequest = {
    ...request,
    status: "reviewed",
    reviewedAt: new Date().toISOString(),
  };
  requests.set(id, updated);
  return updated;
}

export function getCampaignSummary() {
  const all = listReviewRequests();
  const reviewed = all.filter((r) => r.status === "reviewed");
  const conversionRate = all.length > 0 ? Math.round((reviewed.length / all.length) * 100) : 0;

  return {
    totalCampaigns: all.length,
    sentCount: all.length,
    reviewedCount: reviewed.length,
    conversionRate,
    recent: all.slice(0, 5),
  };
}

export { isValidGoogleUrl, isValidPhone };
