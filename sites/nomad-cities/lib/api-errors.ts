import { NextResponse } from "next/server";

export function apiError(code: string, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ code, error: code, ...extra }, { status });
}
