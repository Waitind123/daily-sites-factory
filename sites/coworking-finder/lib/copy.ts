import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Coworker.com has no live inventory · $9.9/mo flat",
    title: "Find coworking spaces with real WiFi data",
    subtitle:
      "120+ global coworking spaces. Day-pass prices, WiFi speeds, insider tips. 5 free views, then $9.9/mo.",
    ctaPrimary: "Browse spaces free",
    ctaPrimaryHref: "/spaces",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free space views · then $9.9/mo",
    stats: [
      { stat: "120+", label: "verified coworking spaces" },
      { stat: "40+", label: "cities worldwide" },
      { stat: "$9.9", label: "flat/mo vs hotel meeting rooms" },
    ],
    previewTitle: "Featured spaces preview",
    previewNote: "Full WiFi data, insider tips & booking links require",
    previewLink: "view details",
    howItWorks: {
      title: "Find a desk in 3 steps",
      steps: [
        {
          step: "1",
          title: "Pick a city",
          desc: "Filter 40+ cities from Chiang Mai to Berlin — plan before you land",
        },
        {
          step: "2",
          title: "Check details",
          desc: "Day-pass price, WiFi speed, video-call readiness — all in one view",
        },
        {
          step: "3",
          title: "Book direct",
          desc: "Insider tips on best hours & hidden perks, then book on the official site",
        },
      ],
    },
    featuresTitle: "Member features",
    features: [
      {
        icon: "🌍",
        title: "120+ global spaces",
        desc: "Curated coworking directory across Asia, Europe, and Latin America",
      },
      {
        icon: "📶",
        title: "Real WiFi data",
        desc: "Measured Mbps per space — know before you walk in for a Zoom call",
      },
      {
        icon: "💳",
        title: "Transparent day-pass pricing",
        desc: "Members see full day/monthly rates, insider tips & booking links",
      },
      {
        icon: "🎥",
        title: "Video-call ready filter",
        desc: "Find spaces with phone booths & stable networks — no client call disasters",
      },
      {
        icon: "🏷️",
        title: "Smart city filters",
        desc: "Filter by city, price, amenities — find a desk in 3 seconds",
      },
      {
        icon: "💡",
        title: "Insider tips",
        desc: "Real user tips: best hours, hidden perks, nearby food",
      },
    ],
    testimonialsTitle: "What nomads say",
    testimonials: [
      {
        name: "Lei Chen",
        role: "Indie dev · Chiang Mai",
        text: "Checked WeWork & The Work Project before Bangkok trip — saved 2 hours of Googling. WiFi data is accurate.",
      },
      {
        name: "Emma Walsh",
        role: "UX Designer · Digital Nomad",
        text: "Finally a coworking directory with actual WiFi speeds and day-pass prices. Worth every penny of the $9.9.",
      },
      {
        name: "Kenta Tanaka",
        role: "Remote PM · Tokyo⇄Bali",
        text: "Insider tips for Hubud & Outpost saved me from rainy-season WiFi issues.",
      },
    ],
    closing: {
      title: "Coworker.com has no live inventory. Hotel meeting rooms cost $50+/hr.",
      subtitle: "$9.9/mo flat. Day-pass prices + WiFi data + insider tips — find a desk in 10 minutes.",
      ctaPrimary: "Subscribe · $9.9/mo",
      ctaSecondary: "Browse spaces free",
    },
    productDemo: {
      title: "Live directory preview",
      caption: "Spaces · WiFi · day-pass · video-call ready",
      preview:
        "🏢 Coworking Finder                    120 spaces · 40 cities\n─────────────────────────────────────────────────────\n  Hubud          Ubud, ID    📶 120 Mbps  $15/day  ✓ Zoom\n  WeWork 静安     Shanghai    📶 500 Mbps  ¥180/day ✓ Zoom\n  Selina CDMX    Mexico City 📶 200 Mbps  $12/day  ✓ Zoom\n─────────────────────────────────────────────────────\n  Filter: [ Chiang Mai ] [ Day pass ] [ Video call ]\n  Insider tip: Hubud — fastest WiFi after 3pm\n─────────────────────────────────────────────────────\n  [ View details ]    [ + Filter city ]    [ Subscribe ]",
    },
  },
  zh: {
    badge: "Coworker.com 没实时库存 · $9.9/月一口价",
    title: "用真实 WiFi 数据找到靠谱联合办公",
    subtitle:
      "120+ 全球联合办公空间。日票价格、WiFi 实测、内部贴士。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "免费浏览空间",
    ctaPrimaryHref: "/spaces",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "120+", label: "已验证联合办公空间" },
      { stat: "40+", label: "覆盖全球城市" },
      { stat: "$9.9", label: "一口价/月，比酒店会议室便宜" },
    ],
    previewTitle: "精选空间预览",
    previewNote: "完整 WiFi 数据、内部贴士和预订方式需",
    previewLink: "查看详情",
    howItWorks: {
      title: "三步找到靠谱工位",
      steps: [
        {
          step: "1",
          title: "选城市",
          desc: "40+ 城市筛选，从清迈到柏林，出差前提前规划",
        },
        {
          step: "2",
          title: "看详情",
          desc: "日票价格、WiFi 实测、视频会议友好度，一目了然",
        },
        {
          step: "3",
          title: "直接订",
          desc: "内部贴士告诉你最佳时段和隐藏福利，官网一键预订",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "🌍",
        title: "120+ 全球空间",
        desc: "精选亚洲、欧洲、拉美联合办公目录",
      },
      {
        icon: "📶",
        title: "WiFi 实测数据",
        desc: "每个空间标注实测网速，视频会议 suitability 一目了然",
      },
      {
        icon: "💳",
        title: "日票价格透明",
        desc: "会员可见完整日票/月票价格、内部贴士和预订方式",
      },
      {
        icon: "🎥",
        title: "视频会议友好",
        desc: "筛选有隔音电话亭、稳定网络的空间，客户会议不翻车",
      },
      {
        icon: "🏷️",
        title: "智能城市筛选",
        desc: "按城市、价格、设施标签过滤，3 秒找到合适工位",
      },
      {
        icon: "💡",
        title: "内部贴士",
        desc: "真实用户贡献的避坑指南：最佳时段、隐藏福利、附近美食",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "陈磊",
        role: "独立开发者 · 常驻清迈",
        text: "出差曼谷前在这里查了 WeWork 和 The Work Project，省了 2 小时 Google 搜索。WiFi 数据很准。",
      },
      {
        name: "Emma Walsh",
        role: "UX 设计师 · 数字游民",
        text: "终于有一个标注真实 WiFi 速度和日票价格的联合办公目录。$9.9 完全值得。",
      },
      {
        name: "田中健太",
        role: "远程 PM · 东京⇄巴厘岛",
        text: "Hubud 和 Outpost 的内部贴士太实用了，直接帮我避开了雨季网速问题。",
      },
    ],
    closing: {
      title: "Coworker.com 没实时库存，酒店会议室太贵",
      subtitle: "我们只要 $9.9/月。日票价格 + WiFi 实测 + 内部贴士，10 分钟找到靠谱工位。",
      ctaPrimary: "立即订阅 $9.9/月",
      ctaSecondary: "免费浏览空间",
    },
    productDemo: {
      title: "目录实时预览",
      caption: "空间 · WiFi · 日票 · 视频会议友好",
      preview:
        "🏢 联合办公 Finder                    120 空间 · 40 城市\n─────────────────────────────────────────────────────\n  Hubud          乌布, 印尼   📶 120 Mbps  $15/天  ✓ 视频会议\n  WeWork 静安     上海        📶 500 Mbps  ¥180/天 ✓ 视频会议\n  Selina CDMX    墨西哥城    📶 200 Mbps  $12/天  ✓ 视频会议\n─────────────────────────────────────────────────────\n  筛选：[ 清迈 ] [ 日票 ] [ 视频会议 ]\n  内部贴士：Hubud — 下午 3 点后网速最快\n─────────────────────────────────────────────────────\n  [ 查看详情 ]    [ + 筛选城市 ]    [ 订阅 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
