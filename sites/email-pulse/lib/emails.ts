import { randomBytes } from "crypto";

export type EmailBlock = {
  id: string;
  type: "heading" | "text" | "button" | "divider";
  content: string;
  href?: string;
};

export type EmailTemplate = {
  id: string;
  slug: string;
  name: string;
  subject: string;
  preheader: string;
  blocks: EmailBlock[];
  createdAt: string;
};

const templates = new Map<string, EmailTemplate>();

function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || randomBytes(4).toString("hex")
  );
}

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function defaultBlocks(name: string): EmailBlock[] {
  return [
    { id: "b1", type: "heading", content: name },
    {
      id: "b2",
      type: "text",
      content:
        "Thanks for being an early supporter. Here is what shipped this week and what is coming next.",
    },
    { id: "b3", type: "button", content: "Read the update", href: "https://example.com" },
    { id: "b4", type: "divider", content: "" },
    {
      id: "b5",
      type: "text",
      content: "Reply to this email if you want a feature — I read every message.",
    },
  ];
}

export function createTemplate(name: string, subject: string, preheader = ""): EmailTemplate {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...templates.values()].some((t) => t.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const template: EmailTemplate = {
    id,
    slug,
    name: name.trim(),
    subject: subject.trim() || `${name.trim()} update`,
    preheader: preheader.trim(),
    blocks: defaultBlocks(name.trim()),
    createdAt: new Date().toISOString(),
  };

  templates.set(id, template);
  return template;
}

export function listTemplates(): EmailTemplate[] {
  return [...templates.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getTemplateById(id: string): EmailTemplate | undefined {
  return templates.get(id);
}

export function getTemplateBySlug(slug: string): EmailTemplate | undefined {
  return [...templates.values()].find((t) => t.slug === slug);
}

export function updateTemplateBlocks(id: string, blocks: EmailBlock[]): EmailTemplate | null {
  const template = templates.get(id);
  if (!template) return null;
  template.blocks = blocks;
  return template;
}

export function renderHtml(template: EmailTemplate): string {
  const blocks = template.blocks
    .map((block) => {
      switch (block.type) {
        case "heading":
          return `<h1 style="font-size:24px;font-weight:700;margin:0 0 16px;color:#111827;">${escapeHtml(block.content)}</h1>`;
        case "text":
          return `<p style="font-size:16px;line-height:1.6;margin:0 0 16px;color:#374151;">${escapeHtml(block.content)}</p>`;
        case "button":
          return `<p style="margin:0 0 24px;"><a href="${escapeAttr(block.href || "#")}" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:600;">${escapeHtml(block.content)}</a></p>`;
        case "divider":
          return `<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />`;
        default:
          return "";
      }
    })
    .join("\n");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(template.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(template.preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;padding:32px;">
          <tr><td>${blocks}</td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replace(/'/g, "&#39;");
}
