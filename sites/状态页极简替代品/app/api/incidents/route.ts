import { NextRequest, NextResponse } from "next/server";
import {
  getPageBySlug,
  getIncidents,
  createIncident,
  resolveIncident,
  getOverallStatus,
} from "@/lib/status-pages";
import { apiError } from "@/lib/api-errors";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return apiError("PAGE_NOT_FOUND", 404);
  }

  const page = getPageBySlug(slug);
  if (!page) {
    return apiError("PAGE_NOT_FOUND", 404);
  }

  return NextResponse.json({
    page,
    incidents: getIncidents(page.id),
    overall: getOverallStatus(page),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      slug?: string;
      title?: string;
      message?: string;
    };

    if (!body.slug) {
      return apiError("PAGE_NOT_FOUND", 404);
    }
    if (!body.title?.trim()) {
      return apiError("INCIDENT_TITLE_REQUIRED", 400);
    }

    const page = getPageBySlug(body.slug);
    if (!page) {
      return apiError("PAGE_NOT_FOUND", 404);
    }

    const incident = createIncident(page.id, body.title.trim(), body.message?.trim() ?? "");
    if (!incident) {
      return apiError("INCIDENT_CREATE_FAILED", 500);
    }

    return NextResponse.json({
      incident,
      incidents: getIncidents(page.id),
      overall: getOverallStatus(page),
    });
  } catch (error) {
    console.error("Incident create error:", error);
    return apiError("INCIDENT_CREATE_FAILED", 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = (await request.json()) as { slug?: string; incidentId?: string };

    if (!body.slug || !body.incidentId) {
      return apiError("INCIDENT_NOT_FOUND", 404);
    }

    const page = getPageBySlug(body.slug);
    if (!page) {
      return apiError("PAGE_NOT_FOUND", 404);
    }

    const ok = resolveIncident(page.id, body.incidentId);
    if (!ok) {
      return apiError("INCIDENT_NOT_FOUND", 404);
    }

    return NextResponse.json({
      incidents: getIncidents(page.id),
      overall: getOverallStatus(page),
    });
  } catch (error) {
    console.error("Incident resolve error:", error);
    return apiError("INCIDENT_CREATE_FAILED", 500);
  }
}
