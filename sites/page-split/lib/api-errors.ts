import { NextResponse } from "next/server";
import type { ApiErrorCode } from "./copy-app";

export function apiError(code: ApiErrorCode, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ code, error: code, ...extra }, { status });
}
