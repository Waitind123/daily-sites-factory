import { NextResponse } from "next/server";
import { addFeedback, loadFeedback } from "@/lib/feedback-store";
import { siteMeta } from "@/lib/site-meta";

export async function GET() {
  const data = await loadFeedback(siteMeta.id);
  return NextResponse.json({ messages: data.messages });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const text = typeof body.text === "string" ? body.text : "";
  if (!text.trim() || text.length > 2000) {
    return NextResponse.json({ error: "invalid_text" }, { status: 400 });
  }
  const message = await addFeedback(siteMeta.id, text);
  return NextResponse.json({ message });
}
