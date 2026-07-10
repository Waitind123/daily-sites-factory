import { randomBytes } from "crypto";

export type DraftChannel = "status" | "email" | "slack" | "postmortem";

export type ChannelDraft = {
  channel: DraftChannel;
  title: string;
  content: string;
  charCount: number;
};

export type IncidentDraft = {
  id: string;
  alert: string;
  serviceName: string;
  severity: "investigating" | "identified" | "monitoring" | "resolved";
  channels: ChannelDraft[];
  createdAt: string;
};

const drafts = new Map<string, IncidentDraft>();

const CHANNEL_LABELS: Record<DraftChannel, { en: string; zh: string }> = {
  status: { en: "Status page", zh: "状态页" },
  email: { en: "Customer email", zh: "客户邮件" },
  slack: { en: "Internal Slack", zh: "内部 Slack" },
  postmortem: { en: "Postmortem", zh: "复盘报告" },
};

export function getChannelLabel(channel: DraftChannel, locale: "en" | "zh"): string {
  return CHANNEL_LABELS[channel][locale];
}

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function extractServiceName(alert: string): string {
  const patterns = [
    /(?:on|for|in)\s+([a-z0-9-]+(?:-service|-api|-db)?)/i,
    /([A-Z][a-z]+(?:[A-Z][a-z]+)+)/,
    /([a-z]+-[a-z]+)/,
  ];
  for (const re of patterns) {
    const m = alert.match(re);
    if (m?.[1] && m[1].length > 3) return m[1];
  }
  return "core API";
}

function detectSeverity(alert: string): IncidentDraft["severity"] {
  const lower = alert.toLowerCase();
  if (/resolved|recovered|back to normal|restored/.test(lower)) return "resolved";
  if (/identified|root cause|fix deployed/.test(lower)) return "identified";
  if (/monitoring|watching|stabiliz/.test(lower)) return "monitoring";
  return "investigating";
}

function severityLabel(severity: IncidentDraft["severity"], locale: "en" | "zh"): string {
  const labels = {
    investigating: { en: "Investigating", zh: "调查中" },
    identified: { en: "Identified", zh: "已定位" },
    monitoring: { en: "Monitoring", zh: "监控中" },
    resolved: { en: "Resolved", zh: "已恢复" },
  };
  return labels[severity][locale];
}

function toStatusUpdate(
  service: string,
  alert: string,
  severity: IncidentDraft["severity"],
  locale: "en" | "zh"
): ChannelDraft {
  const status = severityLabel(severity, locale);
  const summary = alert.replace(/\n+/g, " ").trim().slice(0, 200);

  const content =
    locale === "zh"
      ? `【${status}】${service} 服务异常\n\n我们已注意到 ${service} 出现异常。${summary}\n\n团队正在积极处理，将在 30 分钟内提供更新。感谢您的耐心。\n\n— 工程团队`
      : `[${status}] ${service} incident\n\nWe are aware of an issue affecting ${service}. ${summary}\n\nOur team is actively working on a fix. We will provide an update within 30 minutes.\n\nThank you for your patience.\n\n— Engineering Team`;

  return {
    channel: "status",
    title: locale === "zh" ? `${service} — ${status}` : `${service} — ${status}`,
    content,
    charCount: content.length,
  };
}

function toCustomerEmail(
  service: string,
  alert: string,
  severity: IncidentDraft["severity"],
  locale: "en" | "zh"
): ChannelDraft {
  const status = severityLabel(severity, locale);
  const subject =
    locale === "zh"
      ? `[服务通知] ${service} 当前${status}`
      : `[Service Notice] ${service} — ${status}`;

  const content =
    locale === "zh"
      ? `主题：${subject}\n\n尊敬的用户，\n\n我们检测到 ${service} 出现异常，可能影响您的正常使用。\n\n当前状态：${status}\n详情：${alert.replace(/\n+/g, " ").trim().slice(0, 300)}\n\n我们正在全力修复，预计 30 分钟内恢复。如有紧急问题，请回复此邮件。\n\n感谢您的理解，\n客户成功团队`
      : `Subject: ${subject}\n\nHi there,\n\nWe detected an issue with ${service} that may affect your experience.\n\nCurrent status: ${status}\nDetails: ${alert.replace(/\n+/g, " ").trim().slice(0, 300)}\n\nWe're working to restore service within 30 minutes. Reply to this email if you need urgent help.\n\nThank you for your patience,\nCustomer Success Team`;

  return {
    channel: "email",
    title: subject,
    content,
    charCount: content.length,
  };
}

function toSlackNote(
  service: string,
  alert: string,
  severity: IncidentDraft["severity"],
  locale: "en" | "zh"
): ChannelDraft {
  const status = severityLabel(severity, locale);
  const content =
    locale === "zh"
      ? `🚨 *事件 #${randomId().slice(0, 4)} — ${service}*\n状态：${status}\n\n*原始告警：*\n\`\`\`${alert.trim().slice(0, 400)}\`\`\`\n\n*行动项：*\n• 值班工程师已确认\n• 状态页草稿已生成\n• 30 分钟内更新客户\n\n/cc @oncall @support`
      : `🚨 *Incident #${randomId().slice(0, 4)} — ${service}*\nStatus: ${status}\n\n*Raw alert:*\n\`\`\`${alert.trim().slice(0, 400)}\`\`\`\n\n*Action items:*\n• On-call engineer acknowledged\n• Status page draft ready\n• Customer update within 30 min\n\n/cc @oncall @support`;

  return {
    channel: "slack",
    title: locale === "zh" ? `内部 — ${service}` : `Internal — ${service}`,
    content,
    charCount: content.length,
  };
}

function toPostmortem(
  service: string,
  alert: string,
  severity: IncidentDraft["severity"],
  locale: "en" | "zh"
): ChannelDraft {
  const date = new Date().toISOString().slice(0, 10);
  const content =
    locale === "zh"
      ? `# ${service} 事件复盘 — ${date}\n\n## 摘要\n${service} 于 ${date} 出现异常。${alert.replace(/\n+/g, " ").trim().slice(0, 200)}\n\n## 时间线\n- ${new Date().toISOString().slice(11, 16)} UTC — 监控告警触发\n- T+5min — 值班工程师确认\n- T+15min — 根因调查中\n- T+30min — 客户通知发出\n\n## 根因\n（待填写 — 事件关闭后补充）\n\n## 影响范围\n部分用户可能遇到 ${service} 响应延迟或错误。\n\n## 改进措施\n1. 增加告警阈值校验\n2. 自动化状态页更新\n3. 客户通知模板预置\n\n## 当前状态\n${severityLabel(severity, locale)}`
      : `# ${service} Incident Postmortem — ${date}\n\n## Summary\n${service} experienced an incident on ${date}. ${alert.replace(/\n+/g, " ").trim().slice(0, 200)}\n\n## Timeline\n- ${new Date().toISOString().slice(11, 16)} UTC — Monitoring alert fired\n- T+5min — On-call engineer acknowledged\n- T+15min — Root cause investigation started\n- T+30min — Customer notification sent\n\n## Root Cause\n(To be filled after incident closure)\n\n## Impact\nSome users may have experienced latency or errors on ${service}.\n\n## Action Items\n1. Add alert threshold validation\n2. Automate status page updates\n3. Pre-build customer notification templates\n\n## Current Status\n${severityLabel(severity, locale)}`;

  return {
    channel: "postmortem",
    title: locale === "zh" ? `${service} 复盘草稿` : `${service} postmortem draft`,
    content,
    charCount: content.length,
  };
}

export function generateIncidentDrafts(
  alert: string,
  serviceName?: string,
  locale: "en" | "zh" = "en"
): IncidentDraft {
  const trimmed = alert.trim();
  const service = serviceName?.trim() || extractServiceName(trimmed);
  const severity = detectSeverity(trimmed);

  const channels: ChannelDraft[] = [
    toStatusUpdate(service, trimmed, severity, locale),
    toCustomerEmail(service, trimmed, severity, locale),
    toSlackNote(service, trimmed, severity, locale),
    toPostmortem(service, trimmed, severity, locale),
  ];

  const draft: IncidentDraft = {
    id: randomId(),
    alert: trimmed,
    serviceName: service,
    severity,
    channels,
    createdAt: new Date().toISOString(),
  };

  drafts.set(draft.id, draft);
  return draft;
}

export function listDrafts(): IncidentDraft[] {
  return [...drafts.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getDraft(id: string): IncidentDraft | undefined {
  return drafts.get(id);
}
