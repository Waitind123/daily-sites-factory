# Agent 经验教训（用户说过一次，禁止再犯）

> 每次用户反馈的问题必须：1) 修当前站 2) 写入本文件 3) 加入 `scripts/verify-site-quality.mjs` 自动检查 4) 更新模板 / AGENT_PROMPT

## 已登记问题

### L001 — 切换中文后仍有英文（feature-vote，2026-06）

**现象**：只翻译了 Hero，首页中间区块、/boards、/join、指南仍英文。

**根因**：文案硬编码在 `app/page.tsx` / 客户端组件，未走 `lib/copy.ts`。

**永久规则**：
- 所有可见文案 → `lib/copy.ts` / `lib/copy-app.ts` / `lib/i18n-shared.ts`
- 客户端组件必须接收 `locale` prop（由 server page `getLocale()` 传入）
- API 只返回 `code`，客户端用 `getApiErrorMessage(code, locale)` 翻译

**自动检查**：`verify-site-quality.mjs` → `checkBannedStrings`, `checkHomePageI18n`, `checkClientLocaleProp`, `checkApiErrorCodes`

---

### L002 — UI 太像模板，不像 nuwa / photoai（2026-06）

**现象**：纯文字落地页，无产品演示、无 stats 节奏。

**永久规则**：见 `docs/UI-DESIGN-STANDARD.md`
- 首页必须有 **productDemo** 区块（mock UI / 预览）
- Stats 三列 + How it works + Features + CTA

**自动检查**：`verify-site-quality.mjs` → `checkProductDemo`

---

### L003 — metadata 不随语言切换（2026-06）

**现象**：浏览器标签页始终中文或始终英文。

**永久规则**：`app/layout.tsx` 使用 `generateMetadata` + `buildLocaleMetadata(locale)`

**自动检查**：`verify-site-quality.mjs` → `checkLayoutMetadata`

---

## Agent 每次建站 / 改站 必跑（不通过禁止 push）

```bash
cd sites/<site-id>
npm run build
cd ../..
node scripts/verify-site-quality.mjs <site-id>
```

CI 在 `deploy-site.yml` 部署前同样执行；**失败则部署中止**。

## 新增教训流程

1. 用户反馈 → 修复
2. 在本文件追加 `L00X` 条目
3. 在 `verify-site-quality.mjs` 加检查函数
4. 更新 `templates/site-shell/` 与 `AGENT_PROMPT.md`
