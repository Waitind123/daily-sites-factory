const MODEL = "flux-kontext-apps/professional-headshot";

const STYLE_BACKGROUNDS: Record<string, string> = {
  corporate: "neutral",
  casual: "office",
  creative: "gradient",
  academic: "library",
};

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export function isReplicateConfigured() {
  return Boolean(process.env.REPLICATE_API_TOKEN?.trim());
}

export function getStyleBackground(style: string) {
  return STYLE_BACKGROUNDS[style] ?? "neutral";
}

/** data URI → Replicate Files HTTPS URL（模型更稳定地接受 URL 输入） */
async function uploadDataUriToReplicate(
  imageDataUri: string,
  token: string
): Promise<string> {
  const match = imageDataUri.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) throw new Error("Invalid image data URI");

  const mime = match[1];
  const ext = EXT_BY_MIME[mime] ?? "jpg";
  const buffer = Buffer.from(match[2], "base64");

  const res = await fetch("https://api.replicate.com/v1/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="headshot-input.${ext}"`,
    },
    body: buffer,
    signal: AbortSignal.timeout(60000),
  });

  if (!res.ok) {
    throw new Error(`Replicate upload failed: ${(await res.text()).slice(0, 200)}`);
  }

  const file = await res.json();
  const url = file.urls?.get;
  if (!url) throw new Error("Replicate upload returned no URL");
  return url;
}

async function pollPrediction(url: string, token: string, tries = 90) {
  for (let i = 0; i < tries; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(15000),
    });
    const data = await res.json();
    if (data.status === "succeeded") {
      const out = data.output;
      if (typeof out === "string") return out;
      if (Array.isArray(out) && out[0]) return out[0];
      throw new Error("Empty Replicate output");
    }
    if (data.status === "failed") {
      throw new Error(data.error || "Replicate generation failed");
    }
  }
  throw new Error("Generation timed out — try a smaller photo");
}

export async function generateHeadshot(
  imageDataUri: string,
  style: string
): Promise<string> {
  const token = process.env.REPLICATE_API_TOKEN?.trim();
  if (!token) {
    throw new Error("REPLICATE_API_TOKEN not configured");
  }

  const inputImage = await uploadDataUriToReplicate(imageDataUri, token);

  const res = await fetch(
    `https://api.replicate.com/v1/models/${MODEL}/predictions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "wait=60",
      },
      body: JSON.stringify({
        input: {
          input_image: inputImage,
          gender: "none",
          background: getStyleBackground(style),
          aspect_ratio: "match_input_image",
          output_format: "png",
          safety_tolerance: 2,
        },
      }),
      signal: AbortSignal.timeout(65000),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Replicate API ${res.status}: ${err.slice(0, 300)}`);
  }

  const prediction = await res.json();

  if (prediction.status === "succeeded") {
    const output = prediction.output;
    if (typeof output === "string") return output;
    if (Array.isArray(output) && output[0]) return output[0];
  }

  if (prediction.status === "failed") {
    throw new Error(prediction.error || "Generation failed");
  }

  if (prediction.urls?.get) {
    return pollPrediction(prediction.urls.get, token);
  }

  throw new Error("No result from Replicate");
}

/** 演示模式：返回 SVG 占位图 */
export function demoHeadshotSvg(style: string): string {
  const colors: Record<string, [string, string]> = {
    corporate: ["#1e3a5f", "#2563eb"],
    casual: ["#374151", "#6b7280"],
    creative: ["#7c3aed", "#a855f7"],
    academic: ["#14532d", "#16a34a"],
  };
  const [c1, c2] = colors[style] ?? colors.corporate;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
    <rect width="512" height="512" fill="url(#g)"/>
    <circle cx="256" cy="200" r="80" fill="#fde8d0"/>
    <ellipse cx="256" cy="420" rx="130" ry="100" fill="#1e293b"/>
    <text x="256" y="490" text-anchor="middle" fill="white" font-size="18" font-family="sans-serif">Demo · ${style}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
