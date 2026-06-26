/** Feishu event payload decrypt (Edge + Node compatible). */

async function sha256(text: string): Promise<ArrayBuffer> {
  const data = new TextEncoder().encode(text);
  const copy = new Uint8Array(data.byteLength);
  copy.set(data);
  return crypto.subtle.digest("SHA-256", copy);
}

export async function decryptFeishuEvent(encryptKey: string, encrypted: string) {
  const keyHash = new Uint8Array(await sha256(encryptKey));
  const raw = Uint8Array.from(atob(encrypted), (c) => c.charCodeAt(0));
  const iv = raw.slice(0, 16);
  const data = raw.slice(16);
  const key = await crypto.subtle.importKey("raw", keyHash, "AES-CBC", false, ["decrypt"]);
  const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
  return new TextDecoder().decode(decrypted);
}
