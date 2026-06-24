# 免费体验 5 次 — 全站标准

> 所有 `sites/<id>/` 新建站点必须实现此模式。

## 规则

1. **非会员**可免费使用核心功能 **5 次**
2. 第 6 次起返回 `403` + `code: TRIAL_EXHAUSTED`，前端引导 `/join`
3. **付费会员**不限次数
4. 额度存在 HttpOnly Cookie（`{siteId}_trial_used`），365 天有效

## 必做文件

```
sites/<vertical-id>/
├── lib/trial.ts          # 复制 templates/free-trial/lib/trial.ts，改 SITE_ID
├── lib/member.ts         # 会员 cookie 校验
├── app/api/trial/route.ts    # GET 查询剩余次数
└── 核心 API 路由            # 成功执行时 consumeTrial()
```

## lib/trial.ts 示例

```typescript
import { FREE_TRIAL_LIMIT, getTrialStatus, consumeTrial } from "./trial";
export const SITE_ID = "ai-headshots"; // 每个站点唯一
```

## API 模式

```typescript
// GET /api/trial
export async function GET() {
  const status = await getTrialStatus(SITE_ID, await isMember());
  return NextResponse.json(status);
}

// 核心功能 POST 路由内
const access = await consumeTrial(SITE_ID, await isMember());
if (!access.consumed && !access.isMember) {
  return NextResponse.json(
    { error: "免费体验已用完，请订阅", code: "TRIAL_EXHAUSTED", remaining: 0 },
    { status: 403 }
  );
}
const res = NextResponse.json({ ok: true });
if (access.cookieHeader) res.headers.append("Set-Cookie", access.cookieHeader);
```

## 前端必做

- 页面加载时 `GET /api/trial`，显示 **「剩余 N/5 次免费体验」**
- 收到 `TRIAL_EXHAUSTED` 时弹窗或 Banner，按钮跳转 `/join`
- 首页文案：**「免费体验 5 次 · 之后订阅 $9.9/月」**（价格按站点调整）

## 与定价页关系

- 仍有 `/join` 订阅页（Polar / Stripe）
- 免费体验是 **试用额度**，不是永久免费档
- levelsio 思路：先体验价值，再转化付费
