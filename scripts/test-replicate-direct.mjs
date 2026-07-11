#!/usr/bin/env node
/**
 * 直连 Replicate 诊断 — 部署前验证 token / Files / 预测
 * 用法: REPLICATE_API_TOKEN=xxx node scripts/test-replicate-direct.mjs
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const MODEL = "flux-kontext-apps/professional-headshot";
const token = process.env.REPLICATE_API_TOKEN?.trim();
if (!token) {
  console.error("❌ REPLICATE_API_TOKEN 未设置");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const portrait = readFileSync(join(root, "scripts/fixtures/test-portrait.jpg"));
const dataUri = `data:image/jpeg;base64,${portrait.toString("base64")}`;

async function testDataUriDirect() {
  console.log("\n1) data URI 直连预测...");
  const res = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Prefer: "wait=120",
    },
    body: JSON.stringify({
      input: {
        input_image: dataUri,
        gender: "none",
        background: "neutral",
        aspect_ratio: "match_input_image",
        output_format: "png",
        safety_tolerance: 2,
      },
    }),
    signal: AbortSignal.timeout(180000),
  });
  const text = await res.text();
  console.log(`   HTTP ${res.status}: ${text.slice(0, 500)}`);
  if (!res.ok) throw new Error(`data URI direct failed: ${res.status}`);
  const data = JSON.parse(text);
  if (data.status === "failed") throw new Error(data.error || "prediction failed");
  if (data.status !== "succeeded") throw new Error(`unexpected status: ${data.status}`);
  console.log("   ✓ data URI 直连成功");
  return data.output;
}

async function testFilesUpload() {
  console.log("\n2) Files API 上传...");
  const res = await fetch("https://api.replicate.com/v1/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="test-portrait.jpg"',
    },
    body: portrait,
    signal: AbortSignal.timeout(60000),
  });
  const text = await res.text();
  console.log(`   HTTP ${res.status}: ${text.slice(0, 400)}`);
  if (!res.ok) throw new Error(`files upload failed: ${res.status}`);
  const file = JSON.parse(text);
  const url = file.urls?.get;
  if (!url) throw new Error("no urls.get in upload response");
  console.log("   ✓ 上传成功:", url.slice(0, 80));
  return url;
}

async function testUrlPrediction(fileUrl) {
  console.log("\n3) HTTPS URL 预测...");
  const res = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Prefer: "wait=120",
    },
    body: JSON.stringify({
      input: {
        input_image: fileUrl,
        gender: "none",
        background: "neutral",
        aspect_ratio: "match_input_image",
        output_format: "png",
        safety_tolerance: 2,
      },
    }),
    signal: AbortSignal.timeout(180000),
  });
  const text = await res.text();
  console.log(`   HTTP ${res.status}: ${text.slice(0, 500)}`);
  if (!res.ok) throw new Error(`URL prediction failed: ${res.status}`);
  const data = JSON.parse(text);
  if (data.status === "failed") throw new Error(data.error || "prediction failed");
  if (data.status !== "succeeded") throw new Error(`unexpected status: ${data.status}`);
  console.log("   ✓ URL 预测成功");
}

try {
  await testDataUriDirect();
  const fileUrl = await testFilesUpload();
  await testUrlPrediction(fileUrl);
  console.log("\n✓ Replicate 全链路 OK\n");
} catch (e) {
  console.error("\n❌", e.message || e);
  process.exit(1);
}
