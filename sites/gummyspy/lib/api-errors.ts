import { NextResponse } from "next/server";

/** API 只返回 code，文案由客户端按 locale 从 copy-app.ts 翻译 */
export function apiError(code: string, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ code, error: code, ...extra }, { status });
}
