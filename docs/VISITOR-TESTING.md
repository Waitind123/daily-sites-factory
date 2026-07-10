# 访客测试说明

## 两层测试（部署前 CI 强制执行）

| 层级 | 脚本 | 模拟方式 | 测什么 |
|------|------|----------|--------|
| L1 HTTP 冒烟 | `verify-site-visitor.mjs` | `fetch()` 发 HTTP 请求 | 路由 2xx、HTML 长度、trial API JSON、中文 cookie 无英文 |
| L2 浏览器 E2E | `verify-site-visitor-e2e.mjs` | **Playwright 无头 Chromium** | DOM 渲染、可见文本、点击导航 |

**结论**：L2 才是「模拟真实访客」——会执行 JS、读屏幕可见内容；L1 只是快速 HTTP 检查。

## 本地运行

```bash
cd sites/feature-vote && npm run build
npx next start -p 3099 &

# L1
node scripts/verify-site-visitor.mjs http://127.0.0.1:3099 feature-vote

# L2（需先 npm install 根目录 playwright）
npm run verify-visitor-e2e -- http://127.0.0.1:3099 feature-vote
```

## 尚未覆盖（后续可加）

- 表单提交、文件上传
- Stripe 真实支付 / `/success` 会员激活
- 核心 POST API（如 `/api/generate`）
- 生产环境 Vercel URL 部署后复检
