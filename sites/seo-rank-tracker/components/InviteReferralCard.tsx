"use client";

import { useEffect, useState } from "react";
import {
  captureInviteFromUrl,
  fetchReferralStatus,
  getVisitorId,
} from "@/lib/referral-client";

export function ReferralCapture({ siteId }: { siteId: string }) {
  useEffect(() => {
    getVisitorId();
    captureInviteFromUrl(siteId);
  }, [siteId]);
  return null;
}

export function InviteReferralCard({ siteId, locale }: { siteId: string; locale: string }) {
  const zh = locale === "zh";
  const [status, setStatus] = useState<{
    inviteUrl: string;
    bonusTrials: number;
    referralsCompleted: number;
    rewardPerReferral: number;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchReferralStatus(siteId)
      .then(setStatus)
      .catch(() => null);
  }, [siteId]);

  if (!status) return null;

  async function copyInvite() {
    const text = zh
      ? `我在用这个工具，送你免费试用！注册后完成一次体验，我还能再得 ${status!.rewardPerReferral} 次免费次数。\n${status!.inviteUrl}`
      : `Try this tool free with my invite link. After your first successful try, I get ${status!.rewardPerReferral} more free uses.\n${status!.inviteUrl}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="rounded-xl border border-brand-200/60 bg-brand-600/10 dark:bg-brand-950/20 p-4 space-y-3">
      <h3 className="text-sm font-semibold text-foreground">
        {zh ? "🎁 邀请好友 · 各得额外试用" : "🎁 Invite friends · earn extra tries"}
      </h3>
      <p className="text-xs text-muted">
        {zh
          ? `分享邀请链接给好友。好友通过链接完成首次试用后，你将额外获得 ${status.rewardPerReferral} 次免费使用（可累计）。`
          : `Share your invite link. When a friend completes their first trial via your link, you get ${status.rewardPerReferral} more free uses (stackable).`}
      </p>
      <p className="text-xs break-all rounded-lg bg-surface px-3 py-2 border border-border font-mono">
        {status.inviteUrl}
      </p>
      <div className="flex flex-wrap gap-2 text-xs">
        <button
          type="button"
          onClick={copyInvite}
          className="rounded-lg bg-brand-600 px-3 py-1.5 font-medium text-white hover:bg-brand-700"
        >
          {copied ? (zh ? "已复制" : "Copied") : zh ? "复制邀请链接" : "Copy invite link"}
        </button>
        <span className="text-muted self-center">
          {zh ? "已邀请" : "Invited"}: {status.referralsCompleted} ·{" "}
          {zh ? "奖励次数" : "Bonus tries"}: {status.bonusTrials}
        </span>
      </div>
    </div>
  );
}
