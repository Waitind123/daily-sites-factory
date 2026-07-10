import { randomBytes } from "crypto";

export type FormQuestion = {
  id: string;
  text: string;
  type: "text" | "email" | "textarea";
};

export type Form = {
  id: string;
  slug: string;
  name: string;
  description: string;
  questions: FormQuestion[];
  createdAt: string;
  responseCount: number;
  startedCount: number;
};

export type FormResponse = {
  id: string;
  formId: string;
  answers: Record<string, string>;
  completedStep: number;
  completed: boolean;
  createdAt: string;
};

const forms = new Map<string, Form>();
const responses = new Map<string, FormResponse[]>();
const stepStarts = new Map<string, number[]>();

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

function defaultQuestions(name: string): FormQuestion[] {
  return [
    { id: "q1", text: `What brings you to ${name}?`, type: "text" },
    { id: "q2", text: "What's your email?", type: "email" },
    { id: "q3", text: "Anything else we should know?", type: "textarea" },
  ];
}

export function createForm(name: string, description: string): Form {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...forms.values()].some((f) => f.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const form: Form = {
    id,
    slug,
    name: name.trim(),
    description: description.trim(),
    questions: defaultQuestions(name.trim()),
    createdAt: new Date().toISOString(),
    responseCount: 0,
    startedCount: 0,
  };

  forms.set(id, form);
  responses.set(id, []);
  stepStarts.set(id, [0, 0, 0]);
  return form;
}

export function getFormBySlug(slug: string): Form | undefined {
  return [...forms.values()].find((f) => f.slug === slug);
}

export function getFormById(id: string): Form | undefined {
  return forms.get(id);
}

export function listForms(): Form[] {
  return [...forms.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getResponses(formId: string): FormResponse[] {
  return responses.get(formId) ?? [];
}

export function recordStepStart(formId: string, step: number): void {
  const form = forms.get(formId);
  if (!form) return;
  const starts = stepStarts.get(formId) ?? [0, 0, 0];
  if (step === 0) {
    form.startedCount += 1;
  }
  starts[step] = (starts[step] ?? 0) + 1;
  stepStarts.set(formId, starts);
}

export function getDropoffAnalytics(formId: string): { step: number; started: number; dropoffPct: number }[] {
  const form = forms.get(formId);
  const starts = stepStarts.get(formId) ?? [0, 0, 0];
  if (!form || form.startedCount === 0) return [];

  return form.questions.map((_, i) => {
    const started = starts[i] ?? 0;
    const nextStarted = starts[i + 1] ?? (i === form.questions.length - 1 ? form.responseCount : 0);
    const dropoffPct =
      started > 0 ? Math.round(((started - (i < form.questions.length - 1 ? nextStarted : form.responseCount)) / started) * 100) : 0;
    return { step: i + 1, started, dropoffPct };
  });
}

export function submitResponse(
  formId: string,
  answers: Record<string, string>,
  completedStep: number,
  completed: boolean
): FormResponse | null {
  const form = forms.get(formId);
  if (!form) return null;

  const list = responses.get(formId) ?? [];
  const response: FormResponse = {
    id: randomId(),
    formId,
    answers,
    completedStep,
    completed,
    createdAt: new Date().toISOString(),
  };

  list.push(response);
  responses.set(formId, list);
  if (completed) {
    form.responseCount = list.filter((r) => r.completed).length;
  }
  return response;
}
