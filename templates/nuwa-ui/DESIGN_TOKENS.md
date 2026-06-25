# Nuwa UI Design Tokens

> 从 nuwa.world 提取的视觉规范，供 daily-sites-factory 各站点统一 UI。

## Colors

```css
--nuwa-bg: #0A0A0F;
--nuwa-surface: rgba(255, 255, 255, 0.03);
--nuwa-surface-hover: rgba(255, 255, 255, 0.06);
--nuwa-border: rgba(255, 255, 255, 0.08);
--nuwa-text: #fafafa;
--nuwa-text-muted: #a3a3a3;
--nuwa-accent: #6366f1;
--nuwa-accent-light: #818cf8;
```

## Typography

- **Sans**: Inter Variable
- **Mono**: JetBrains Mono (代码块、标签)
- **H1**: 3rem–4.5rem, font-bold, tracking-tight
- **Body**: 1rem, line-height 1.5
- **Label**: 0.75rem, uppercase, tracking-widest, text-muted

## Spacing & Radius

- Section padding: `py-16 sm:py-24`
- Container: `max-w-6xl mx-auto px-4 sm:px-6`
- Card radius: `rounded-2xl`
- Button radius: `rounded-xl`

## Components

- **Header**: sticky top-0, bg-black/60 backdrop-blur-xl, border-b border-white/10
- **Hero**: gradient text accent, optional rotating headline
- **Cards**: subtle border glow, hover border-indigo/30
- **FAQ**: numbered accordion (01, 02…), expand/collapse
- **CTA**: full-width gradient background section

## 版权说明

UI 样式参考 nuwa.world 公开页面。各站点文案、数据、功能逻辑必须原创，不得复制 Nuwa 产品内容。
