"use client";

import { useEffect } from "react";
import { captureInviteFromUrl, getVisitorId } from "@/lib/referral-client";

export function ReferralCapture({ siteId }: { siteId: string }) {
  useEffect(() => {
    getVisitorId();
    captureInviteFromUrl(siteId);
  }, [siteId]);
  return null;
}
