"use client";

import { useEffect } from "react";
import { trackFactoryEvent } from "@/lib/analytics-client";

export function AnalyticsBeacon({ siteId }: { siteId: string }) {
  useEffect(() => {
    trackFactoryEvent(siteId, "pageview");
  }, [siteId]);

  return null;
}
