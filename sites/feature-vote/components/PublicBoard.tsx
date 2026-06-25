"use client";

import { useState, useEffect } from "react";
import type { Board, Idea } from "@/lib/votes";
import { statusColor } from "@/lib/votes";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicBoardCopy, getStatusLabel } from "@/lib/copy-app";

export function PublicBoard({ board, locale }: { board: Board; locale: Locale }) {
  const t = getPublicBoardCopy(locale);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`/api/ideas?boardId=${board.id}`)
      .then((r) => r.json())
      .then((d) => setIdeas(d.ideas ?? []))
      .catch(() => null);
  }, [board.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ boardId: board.id, title, description }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setIdeas((list) => [data.idea, ...list].sort((a, b) => b.votes - a.votes));
      setTitle("");
      setDescription("");
      setMessage(t.submitted);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("IDEA_SUBMIT_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleUpvote(ideaId: string) {
    const res = await fetch("/api/ideas", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ boardId: board.id, ideaId }),
    });
    const data = await res.json();
    if (res.ok && data.idea) {
      setIdeas((list) =>
        list
          .map((i) => (i.id === ideaId ? data.idea : i))
          .sort((a, b) => b.votes - a.votes)
      );
    }
  }

  const grouped = {
    open: ideas.filter((i) => i.status === "open"),
    planned: ideas.filter((i) => i.status === "planned"),
    in_progress: ideas.filter((i) => i.status === "in_progress"),
    shipped: ideas.filter((i) => i.status === "shipped"),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{board.name}</h1>
        {board.description && <p className="mt-2 text-muted">{board.description}</p>}
        <p className="mt-2 text-xs text-muted">{t.poweredBy}</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.suggestTitle}</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t.titlePlaceholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t.descPlaceholder}
            rows={2}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          {message && <p className="text-sm text-emerald-400">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.submitting : t.submitIdea}
          </button>
        </div>
      </form>

      {ideas.length === 0 ? (
        <p className="text-center text-muted py-12">{t.empty}</p>
      ) : (
        <div className="space-y-8">
          {(["open", "planned", "in_progress", "shipped"] as const).map((status) => {
            const list = grouped[status];
            if (list.length === 0) return null;
            return (
              <section key={status}>
                <h2
                  className={`text-sm font-semibold uppercase tracking-wide mb-3 ${statusColor(status)}`}
                >
                  {getStatusLabel(status, locale)}
                </h2>
                <div className="space-y-3">
                  {list.map((idea) => (
                    <div
                      key={idea.id}
                      className="flex gap-4 rounded-xl border border-border bg-surface p-4"
                    >
                      <button
                        type="button"
                        onClick={() => handleUpvote(idea.id)}
                        className="flex flex-col items-center justify-center min-w-[3rem] rounded-lg border border-border bg-background px-2 py-1 hover:border-brand-600/50 transition-colors"
                      >
                        <span className="text-brand-500 font-bold">▲</span>
                        <span className="text-sm font-semibold text-foreground">{idea.votes}</span>
                      </button>
                      <div>
                        <p className="font-medium text-foreground">{idea.title}</p>
                        {idea.description && (
                          <p className="text-sm text-muted mt-1">{idea.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
