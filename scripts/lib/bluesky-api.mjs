/**
 * Bluesky (AT Protocol) — app password 发帖，无需 OAuth 回调
 */

export async function createBlueskySession(identifier, password) {
  const res = await fetch("https://bsky.social/xrpc/com.atproto.server.createSession", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Bluesky login ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const data = await res.json();
  return {
    accessJwt: data.accessJwt,
    did: data.did,
    handle: data.handle,
  };
}

/** 为文本中的 URL 生成 facet（Bluesky 可点击链接） */
function linkFacets(text) {
  const facets = [];
  const re = /https?:\/\/[^\s]+/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    facets.push({
      index: { byteStart: Buffer.byteLength(text.slice(0, m.index), "utf8"), byteEnd: Buffer.byteLength(text.slice(0, m.index + m[0].length), "utf8") },
      features: [{ $type: "app.bsky.richtext.facet#link", uri: m[0] }],
    });
  }
  return facets;
}

export async function createBlueskyPost({ accessJwt, did, handle, text }) {
  const record = {
    $type: "app.bsky.feed.post",
    text: text.slice(0, 300),
    createdAt: new Date().toISOString(),
  };
  const facets = linkFacets(record.text);
  if (facets.length) record.facets = facets;

  const res = await fetch("https://bsky.social/xrpc/com.atproto.repo.createRecord", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessJwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      repo: did,
      collection: "app.bsky.feed.post",
      record,
    }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Bluesky post ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const data = await res.json();
  const rkey = data.uri?.split("/").pop();
  return {
    uri: data.uri,
    cid: data.cid,
    url: rkey && handle ? `https://bsky.app/profile/${handle}/post/${rkey}` : data.uri,
  };
}
