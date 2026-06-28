import { randomBytes } from "crypto";

export type TicketStatus = "open" | "pending" | "resolved";

export type KbArticle = {
  id: string;
  title: string;
  keywords: string[];
  content: string;
};

export type Ticket = {
  id: string;
  subject: string;
  customerEmail: string;
  message: string;
  status: TicketStatus;
  createdAt: string;
  suggestedReply?: string;
  matchedArticleId?: string;
};

const tickets = new Map<string, Ticket>();

const kbArticles: KbArticle[] = [
  {
    id: "billing",
    title: "Billing & subscriptions",
    keywords: ["refund", "cancel", "billing", "invoice", "payment", "charge", "subscription", "退款", "取消", "账单", "付款"],
    content:
      "You can cancel anytime from Settings → Billing. Refunds within 14 days of first charge are handled manually — reply with your order email and we'll process within 2 business days.",
  },
  {
    id: "trial",
    title: "Free trial limits",
    keywords: ["trial", "free", "limit", "试用", "免费", "次数", "额度"],
    content:
      "Non-members get 5 free ticket actions (create ticket or AI reply). Subscribe at /join for unlimited inbox, AI suggestions, and knowledge base editing.",
  },
  {
    id: "integration",
    title: "Email & integrations",
    keywords: ["email", "forward", "slack", "webhook", "integrate", "邮件", "转发", "集成"],
    content:
      "Forward support@yourdomain.com to your inbox alias (Pro). Slack notifications and webhooks are on the roadmap — vote in feedback if you need them first.",
  },
  {
    id: "account",
    title: "Account & login",
    keywords: ["login", "password", "account", "access", "登录", "密码", "账号"],
    content:
      "Use magic link login from the dashboard. If you're locked out, email us from your registered address and we'll reset access within 24 hours.",
  },
];

function randomId(): string {
  return randomBytes(8).toString("hex");
}

export function listKbArticles(): KbArticle[] {
  return kbArticles;
}

export function createTicket(subject: string, customerEmail: string, message: string): Ticket {
  const ticket: Ticket = {
    id: randomId(),
    subject: subject.trim(),
    customerEmail: customerEmail.trim(),
    message: message.trim(),
    status: "open",
    createdAt: new Date().toISOString(),
  };
  tickets.set(ticket.id, ticket);
  return ticket;
}

export function listTickets(): Ticket[] {
  return [...tickets.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getTicket(id: string): Ticket | undefined {
  return tickets.get(id);
}

export function suggestReply(ticketId: string): { reply: string; articleId: string; articleTitle: string } | null {
  const ticket = tickets.get(ticketId);
  if (!ticket) return null;

  const text = `${ticket.subject} ${ticket.message}`.toLowerCase();
  let best: KbArticle | null = null;
  let bestScore = 0;

  for (const article of kbArticles) {
    let score = 0;
    for (const kw of article.keywords) {
      if (text.includes(kw.toLowerCase())) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = article;
    }
  }

  const article = best ?? kbArticles[0];
  const greeting = ticket.customerEmail.split("@")[0] || "there";
  const reply = `Hi ${greeting},\n\nThanks for reaching out about "${ticket.subject}".\n\n${article.content}\n\nLet me know if you need anything else.\n\nBest regards`;

  ticket.suggestedReply = reply;
  ticket.matchedArticleId = article.id;
  ticket.status = "pending";
  tickets.set(ticketId, ticket);

  return { reply, articleId: article.id, articleTitle: article.title };
}
