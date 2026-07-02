import { randomBytes } from "crypto";

export type QuestionnaireRecord = {
  id: string;
  title: string;
  questionCount: number;
  filledCount: number;
  completionRate: number;
  createdAt: string;
  answers: { question: string; answer: string }[];
};

const records = new Map<string, QuestionnaireRecord>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function parseQuestions(text: string): string[] {
  return text
    .split(/\n+/)
    .map((q) => q.replace(/^\d+[\.\)]\s*/, "").trim())
    .filter((q) => q.length > 5);
}

function findAnswer(question: string, answerBank: string): string {
  const bank = answerBank
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);

  const qLower = question.toLowerCase();

  for (const line of bank) {
    const [keyword, ...rest] = line.split(":");
    if (keyword && qLower.includes(keyword.trim().toLowerCase())) {
      return rest.join(":").trim() || line;
    }
  }

  if (qLower.includes("encrypt")) {
    return "All data encrypted at rest (AES-256) and in transit (TLS 1.3).";
  }
  if (qLower.includes("soc") || qLower.includes("compliance")) {
    return "SOC 2 Type II audit in progress. ISO 27001 controls documented.";
  }
  if (qLower.includes("backup") || qLower.includes("disaster")) {
    return "Daily automated backups with 30-day retention. RTO 4h, RPO 1h.";
  }
  if (qLower.includes("access") || qLower.includes("authentication")) {
    return "SSO via SAML 2.0, MFA enforced for all admin accounts.";
  }
  if (qLower.includes("penetration") || qLower.includes("vulnerability")) {
    return "Annual third-party penetration test. Critical CVEs patched within 72h.";
  }
  if (qLower.includes("gdpr") || qLower.includes("privacy") || qLower.includes("data retention")) {
    return "GDPR-compliant DPA available. Data deleted within 30 days of contract termination.";
  }

  return "Yes — documented in our security policy. Contact security@company.com for details.";
}

export function fillQuestionnaire(
  title: string,
  questionsText: string,
  answerBank: string
): QuestionnaireRecord {
  const questions = parseQuestions(questionsText);
  const answers = questions.map((question) => ({
    question,
    answer: findAnswer(question, answerBank),
  }));

  const filledCount = answers.filter((a) => a.answer.length > 0).length;
  const record: QuestionnaireRecord = {
    id: randomId(),
    title: title.trim() || "Security Questionnaire",
    questionCount: questions.length,
    filledCount,
    completionRate:
      questions.length > 0 ? Math.round((filledCount / questions.length) * 1000) / 10 : 0,
    createdAt: new Date().toISOString(),
    answers,
  };

  records.set(record.id, record);
  return record;
}

export function listQuestionnaires(): QuestionnaireRecord[] {
  return [...records.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getQuestionnaireById(id: string): QuestionnaireRecord | undefined {
  return records.get(id);
}

export function getQuestStats() {
  const all = listQuestionnaires();
  const totalQuestions = all.reduce((sum, r) => sum + r.questionCount, 0);
  const totalFilled = all.reduce((sum, r) => sum + r.filledCount, 0);
  const avgCompletion =
    all.length > 0
      ? Math.round(all.reduce((sum, r) => sum + r.completionRate, 0) / all.length)
      : 0;

  return {
    totalQuestionnaires: all.length,
    totalQuestions,
    totalFilled,
    avgCompletion,
  };
}
