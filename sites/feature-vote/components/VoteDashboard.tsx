"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Board } from "@/lib/votes";
import { sampleIdeas } from "@/lib/votes";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function VoteDashboard() {
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Board | null>(null);
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/boards")
      .then((r) => r.json())
      .then((d) => setBoards(d.boards ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/boards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(data.error || "Failed to create board");
      }

      setCreated(data.board);
      setBoards((b) => [data.board, ...b]);
      setName("");
      setDescription("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create board");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Feedback Boards</h1>
          <p className="mt-1 text-muted text-sm">
            Create a board, share the link, let users vote on what to build next.
          </p>
        </div>
        {trial && (
          <div className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">✓ Member · unlimited boards</span>
            ) : (
              <span className="text-muted">
                Free boards:{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </div>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-600/10 p-5">
          <p className="font-semibold text-foreground">Free trial used up</p>
          <p className="mt-1 text-sm text-muted">
            You&apos;ve created 5 boards. Subscribe for unlimited boards, embed widgets, and voter
            notifications.
          </p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Subscribe · $9.9/mo
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">New feedback board</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Board name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. My SaaS Feedback"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What kind of feedback are you collecting?"
              rows={2}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? "Creating…" : "Create board"}
          </button>
        </div>
      </form>

      {created && (
        <div className="mb-8 rounded-xl border border-emerald-600/50 bg-emerald-600/10 p-5">
          <p className="font-semibold text-foreground">Board created!</p>
          <p className="mt-2 text-sm text-muted">Share this public link with your users:</p>
          <code className="mt-2 block rounded-lg bg-background border border-border p-3 text-sm text-brand-500 break-all">
            {typeof window !== "undefined"
              ? `${window.location.origin}/boards/${created.slug}`
              : `/boards/${created.slug}`}
          </code>
          <Link
            href={`/boards/${created.slug}`}
            className="mt-3 inline-block text-sm text-brand-500 hover:underline"
          >
            Open board →
          </Link>
        </div>
      )}

      {boards.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">Your boards</h2>
          <div className="space-y-3">
            {boards.map((b) => (
              <Link
                key={b.id}
                href={`/boards/${b.slug}`}
                className="block rounded-xl border border-border bg-surface p-4 hover:border-brand-600/50 transition-colors"
              >
                <p className="font-medium text-foreground">{b.name}</p>
                {b.description && <p className="text-sm text-muted mt-1">{b.description}</p>}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface-muted/30 p-6">
        <h3 className="font-semibold text-foreground mb-4">Example ideas on a board</h3>
        <div className="space-y-3">
          {sampleIdeas.map((idea) => (
            <div
              key={idea.title}
              className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3"
            >
              <span className="text-sm text-foreground">{idea.title}</span>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-muted capitalize">{idea.status.replace("_", " ")}</span>
                <span className="font-semibold text-brand-500">▲ {idea.votes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
