const MODEL = "flux-kontext-apps/professional-headshot";

const STYLE_BACKGROUNDS: Record<string, string> = {
  corporate: "neutral",
  casual: "office",
  creative: "gradient",
  academic: "library",
};

export function isReplicateConfigured() {
  return Boolean(process.env.REPLICATE_API_TOKEN);
}

export function getStyleBackground(style: string) {
  return STYLE_BACKGROUNDS[style] ?? "neutral";
}

export async function generateHeadshot(
  imageDataUri: string,
  style: string
): Promise<string> {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) {
    throw new Error("REPLICATE_API_TOKEN 未配置");
  }

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
          input_image: imageDataUri,
          gender: "none",
          background: getStyleBackground(style),
          aspect_ratio: "1:1",
          output_format: "png",
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Replicate API 错误: ${err}`);
  }

  const prediction = await res.json();

  if (prediction.status === "failed") {
    throw new Error(prediction.error || "生成失败");
  }

  const output = prediction.output;
  if (typeof output === "string") return output;
  if (Array.isArray(output) && output[0]) return output[0];

  // async fallback: poll
  if (prediction.urls?.get) {
    return pollPrediction(prediction.urls.get, token);
  }

  throw new Error("未收到生成结果");
}

async function pollPrediction(url: string, token: string, tries = 30) {
  for (let i = 0; i < tries; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data.status === "succeeded") {
      const out = data.output;
      if (typeof out === "string") return out;
      if (Array.isArray(out) && out[0]) return out[0];
    }
    if (data.status === "failed") {
      throw new Error(data.error || "生成失败");
    }
  }
  throw new Error("生成超时，请稍后重试");
}

/** 演示模式：返回 SVG 占位图（不消耗 API） */
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
    <text x="256" y="490" text-anchor="middle" fill="white" font-size="18" font-family="sans-serif">演示模式 · ${style}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
