# Nuwa UI 模板

基于 [nuwa.world](https://nuwa.world/) 视觉风格的共享 UI 组件库。**仅复刻 UI 样式**，各站点内容/功能必须原创。

## 设计特征

| 元素 | 值 |
|------|-----|
| 背景 | `#0A0A0F` |
| 卡片 | `rgba(255,255,255,0.03)` + `border-white/10` |
| 强调色 | Indigo `#6366f1` |
| 字体 | Inter + JetBrains Mono |
| 圆角 | `rounded-2xl` (16px) |
| Header | sticky + backdrop-blur |

## 使用方法

新建站点时：

```bash
node scripts/sync-nuwa-ui.mjs sites/<vertical-id>
```

然后在 `app/layout.tsx` 中配置 `SiteHeader` / `SiteFooter` props，首页使用 `Hero`、`StatsBar`、`FaqAccordion`、`CtaSection` 等组件。

## 参考

- 设计来源：https://nuwa.world/
- Clone skill：`.cursor/skills/clone-website/SKILL.md`
- 设计 token：`DESIGN_TOKENS.md`
