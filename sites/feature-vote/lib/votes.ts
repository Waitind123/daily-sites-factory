import { randomBytes } from "crypto";

export type IdeaStatus = "open" | "planned" | "in_progress" | "shipped";

export type Board = {
  id: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
};

export type Idea = {
  id: string;
  boardId: string;
  title: string;
  description: string;
  votes: number;
  status: IdeaStatus;
  createdAt: string;
};

export const features = [
  {
    icon: "🗳️",
    title: "Public voting boards",
    desc: "Let users submit ideas and upvote what matters. No login wall for voters.",
  },
  {
    icon: "🗺️",
    title: "Auto-updating roadmap",
    desc: "Drag ideas through Planned → In Progress → Shipped. Voters get notified.",
  },
  {
    icon: "📋",
    title: "Embeddable widget",
    desc: "Drop a script tag on your docs or app. Collect feedback where users already are.",
  },
  {
    icon: "💰",
    title: "Flat $9.9/mo",
    desc: "Unlimited voters, unlimited ideas. No per-user fees like Canny.",
  },
];

export const testimonials = [
  {
    name: "Marcus T.",
    role: "Solo SaaS founder",
    text: "Canny wanted $79/mo for 25 tracked users. Feature Vote does what I need for $9.9 with unlimited voters.",
  },
  {
    name: "Elena R.",
    role: "Indie hacker",
    text: "Shipped a public roadmap in 10 minutes. My users finally know what I'm building next.",
  },
  {
    name: "David K.",
    role: "Bootstrapped dev",
    text: "The embed widget on my docs page collects better signal than our old Google Form.",
  },
];

export const sampleIdeas = [
  { title: "Dark mode for dashboard", votes: 47, status: "planned" as const },
  { title: "Webhook on status change", votes: 32, status: "in_progress" as const },
  { title: "CSV export for ideas", votes: 28, status: "open" as const },
];

const boards = new Map<string, Board>();
const ideas = new Map<string, Idea[]>();

function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || randomBytes(4).toString("hex")
  );
}

function randomId(): string {
  return randomBytes(8).toString("hex");
}

export function createBoard(name: string, description: string): Board {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...boards.values()].some((b) => b.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const board: Board = {
    id,
    slug,
    name: name.trim(),
    description: description.trim(),
    createdAt: new Date().toISOString(),
  };

  boards.set(id, board);
  ideas.set(id, []);
  return board;
}

export function getBoardBySlug(slug: string): Board | undefined {
  return [...boards.values()].find((b) => b.slug === slug);
}

export function getBoardById(id: string): Board | undefined {
  return boards.get(id);
}

export function listBoards(): Board[] {
  return [...boards.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getIdeas(boardId: string): Idea[] {
  return (ideas.get(boardId) ?? []).sort((a, b) => b.votes - a.votes);
}

export function addIdea(
  boardId: string,
  title: string,
  description: string
): Idea | null {
  const board = boards.get(boardId);
  if (!board) return null;

  const idea: Idea = {
    id: randomId(),
    boardId,
    title: title.trim(),
    description: description.trim(),
    votes: 1,
    status: "open",
    createdAt: new Date().toISOString(),
  };

  const list = ideas.get(boardId) ?? [];
  list.push(idea);
  ideas.set(boardId, list);
  return idea;
}

export function upvoteIdea(boardId: string, ideaId: string): Idea | null {
  const list = ideas.get(boardId);
  if (!list) return null;
  const idea = list.find((i) => i.id === ideaId);
  if (!idea) return null;
  idea.votes += 1;
  return idea;
}

export function statusLabel(status: IdeaStatus): string {
  const labels: Record<IdeaStatus, string> = {
    open: "Open",
    planned: "Planned",
    in_progress: "In Progress",
    shipped: "Shipped",
  };
  return labels[status];
}

export function statusColor(status: IdeaStatus): string {
  const colors: Record<IdeaStatus, string> = {
    open: "text-muted",
    planned: "text-blue-400",
    in_progress: "text-amber-400",
    shipped: "text-emerald-400",
  };
  return colors[status];
}
