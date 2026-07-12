/**
 * 国内平台每日推广文案 — 小红书 / 知乎 / 抖音
 */
const HOME = "https://ai-headshots-navy.vercel.app";
const JOIN = `${HOME}/join`;

const XHS_TITLES = [
  "30秒生成LinkedIn职业照｜上传自拍就行",
  "AI证件照平替PhotoAI｜$29/月不限量",
  "领英头像不用去照相馆了",
  "打工人简历照｜AI一键出4种风格",
];

const XHS_BODIES = [
  "上传自拍 → 30秒出商务/休闲/创意专业照\n5次免费试用，满意再订阅\n适合领英、简历、工牌\n\n链接见评论区 👇",
  "做了个小工具给自己换领英头像\n比PhotoAI便宜，$29/月一口价\n照片24h自动删，隐私友好\n\n#AI证件照 #LinkedIn #职业照 #独立开发",
  "不用预约照相馆！\n手机自拍 + AI → 专业证件照\n corporate / casual / creative 四种风格\n\n免费试5次～",
];

const ZHIHU_TITLES = [
  "做了一个 AI 证件照工具，30 秒从自拍生成 LinkedIn 职业照",
  "PhotoAI 太贵？我做了个 $29/月的平替",
  "独立开发者如何低成本做 AI 职业照 SaaS",
];

const ZHIHU_BODIES = [
  "上传一张自拍，30 秒左右可以生成 corporate / casual / creative / academic 四种风格的职业照，适用于 LinkedIn、简历、工牌等场景。\n\n5 次免费试用，之后 $29/月不限量。比 PhotoAI 便宜，照片 24 小时自动删除。\n\n链接：",
  "作为独立开发者，自己需要换领英头像时发现照相馆又贵又麻烦，就做了这个工具。\n\n技术栈：Next.js + Replicate + Stripe\n欢迎试用反馈：",
  "分享一个 AI 证件照生成工具，适合需要快速更新职业照的朋友。\n\n功能：\n- 上传自拍\n- 4 种风格\n- PNG 导出\n- 5 次免费\n\n体验地址：",
];

const DOUYIN_CAPTIONS = [
  "AI证件照30秒搞定 #AI证件照 #职业照 #LinkedIn #独立开发 #副业",
  "不用去照相馆！自拍变职业照 #证件照 #AI工具 #打工人",
  "领英头像一键生成 免费试5次 #AI #科技改变生活",
];

const DOUYIN_SCRIPTS = [
  "【口播】上传自拍，选风格，30秒出职业照。链接在主页。",
  "【图文】Before：随便自拍 / After：LinkedIn专业照。5次免费。",
  "【演示】打开网站→上传→选corporate→下载PNG。",
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function utm(platform) {
  const v = Date.now().toString(36).slice(-5);
  return `${JOIN}?utm_source=${platform}&utm_medium=daily&utm_campaign=auto_${v}`;
}

export function generateXhsPost() {
  const link = utm("xiaohongshu");
  return {
    platform: "小红书",
    title: pick(XHS_TITLES),
    body: `${pick(XHS_BODIES)}\n\n${link}`,
    tags: ["AI证件照", "LinkedIn", "职业照", "独立开发", "打工人"],
    link,
  };
}

export function generateZhihuPost() {
  const link = utm("zhihu");
  return {
    platform: "知乎",
    title: pick(ZHIHU_TITLES),
    body: `${pick(ZHIHU_BODIES)}${link}`,
    link,
  };
}

export function generateDouyinPost() {
  const link = utm("douyin");
  return {
    platform: "抖音",
    caption: `${pick(DOUYIN_CAPTIONS)}\n${link}`,
    script: pick(DOUYIN_SCRIPTS),
    link,
  };
}

export function generateAllCnPosts() {
  return {
    xiaohongshu: generateXhsPost(),
    zhihu: generateZhihuPost(),
    douyin: generateDouyinPost(),
  };
}
