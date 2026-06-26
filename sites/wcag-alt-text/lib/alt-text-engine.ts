export type ImageType = "photo" | "chart" | "icon" | "logo" | "decorative";

export type AltTextInput = {
  imageType: ImageType;
  subject: string;
  context?: string;
  action?: string;
  isDecorative?: boolean;
};

export type AltTextResult = {
  altText: string;
  charCount: number;
  wcagLevel: "AA" | "decorative";
  score: number;
  tips: string[];
};

function trimSentence(text: string): string {
  return text.replace(/\s+/g, " ").trim().replace(/\.+$/, "");
}

function capitalize(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateAltText(input: AltTextInput): AltTextResult {
  if (input.isDecorative || input.imageType === "decorative") {
    return {
      altText: "",
      charCount: 0,
      wcagLevel: "decorative",
      score: 100,
      tips: ["Decorative images should use alt=\"\" per WCAG 1.1.1"],
    };
  }

  const subject = trimSentence(input.subject);
  const context = input.context ? trimSentence(input.context) : "";
  const action = input.action ? trimSentence(input.action) : "";

  let altText = "";
  const tips: string[] = [];

  switch (input.imageType) {
    case "photo":
      altText = action
        ? `${capitalize(subject)} ${action}`
        : capitalize(subject);
      if (context) altText += ` — ${context}`;
      tips.push("Describe the subject and key action, not camera metadata");
      break;
    case "chart":
      altText = context
        ? `Chart showing ${subject}: ${context}`
        : `Chart showing ${subject}`;
      tips.push("Include chart type and the main takeaway for screen readers");
      break;
    case "icon":
      altText = action || subject;
      tips.push("Icons used as buttons need action-oriented alt text");
      break;
    case "logo":
      altText = `${subject} logo`;
      tips.push("Logo alt text should be the organization name only");
      break;
    default:
      altText = capitalize(subject);
  }

  altText = altText.slice(0, 125);
  if (altText.length >= 125) {
    tips.push("Keep alt text under 125 characters when possible");
  }

  let score = 70;
  if (subject.length >= 3) score += 10;
  if (input.imageType !== "photo" || context || action) score += 10;
  if (altText.length <= 125) score += 10;

  return {
    altText,
    charCount: altText.length,
    wcagLevel: "AA",
    score: Math.min(score, 100),
    tips,
  };
}

export const sampleImages = [
  {
    id: "team-photo",
    type: "photo" as const,
    subject: "Three designers reviewing wireframes on a laptop",
    context: "Product team sprint planning",
    score: 94,
  },
  {
    id: "revenue-chart",
    type: "chart" as const,
    subject: "monthly recurring revenue growth",
    context: "MRR up 23% quarter over quarter",
    score: 91,
  },
  {
    id: "search-icon",
    type: "icon" as const,
    subject: "Search",
    action: "Open site search",
    score: 88,
  },
  {
    id: "decorative",
    type: "decorative" as const,
    subject: "Abstract gradient background",
    score: 100,
  },
];
