import type { Locale } from "./i18n-shared";
import { OWNER_CONTACT_EMAIL } from "./site-owner";

export function getLegalCopy(locale: Locale) {
  return locale === "zh" ? legalZh : legalEn;
}

const legalZh = {
  privacyTitle: "隐私政策",
  termsTitle: "用户协议",
  privacyMeta: "我们如何收集、使用与保护您的个人信息",
  termsMeta: "使用本网站与服务的条款与条件",
  complianceNote:
    "本站运营遵守中华人民共和国相关法律法规，包括但不限于《网络安全法》《数据安全法》《个人信息保护法》《电子商务法》等。",
  contactLine: `如有疑问请联系：${OWNER_CONTACT_EMAIL}`,
};

const legalEn = {
  privacyTitle: "Privacy Policy",
  termsTitle: "Terms of Service",
  privacyMeta: "How we collect, use, and protect personal information",
  termsMeta: "Terms and conditions for using this site and service",
  complianceNote:
    "This site operates in compliance with applicable laws and regulations of the People's Republic of China, including the Cybersecurity Law, Data Security Law, Personal Information Protection Law, and E-Commerce Law.",
  contactLine: `Questions? Contact ${OWNER_CONTACT_EMAIL}`,
};

export function privacyPolicyBody(locale: Locale, siteName: string) {
  if (locale === "zh") {
    return `
## 1. 引言

欢迎使用 ${siteName}。我们重视您的个人信息保护。本政策说明我们如何收集、使用、存储、共享与保护您的个人信息，以及您依法享有的权利。

## 2. 我们收集的信息

- **您主动提供的信息**：留言内容、反馈、注册或订阅时填写的邮箱等。
- **自动收集的信息**：访问页面路径、浏览器语言、设备类型、时区、来源链接、UTM 参数等用于改进服务的匿名或去标识化数据。
- **支付信息**：付款由 Stripe、Polar 等第三方支付机构处理，我们不存储完整银行卡号。

## 3. 使用目的

我们仅在以下目的范围内处理个人信息：提供与改进服务、处理订单与客服、保障安全、遵守法律法规要求。

## 4. 存储与期限

- 用户上传的试用内容（如照片）按产品说明在合理期限内自动删除。
- 留言与运营数据在实现目的所需的最短期限内保存。
- 服务器可能位于中国境外；我们将依法采取必要措施保障信息安全。

## 5. 您的权利

您有权查阅、复制、更正、删除您的个人信息，或撤回同意、注销账户（如适用）。请通过 ${OWNER_CONTACT_EMAIL} 联系我们行使权利。

## 6. 未成年人保护

未满 14 周岁的未成年人请在监护人同意与指导下使用本服务。

## 7. 政策更新

我们可能适时更新本政策，更新后将在本页面公布。

## 8. 联系我们

${OWNER_CONTACT_EMAIL}
`.trim();
  }

  return `
## 1. Introduction

Welcome to ${siteName}. This policy explains how we handle personal information.

## 2. Information we collect

Information you submit (feedback, email), and technical data (pages visited, device, locale, referrer) for service improvement. Payments are processed by third-party providers; we do not store full card numbers.

## 3. Purposes

To provide and improve the service, process orders, support users, and comply with law.

## 4. Retention

Trial uploads are deleted per product policy. Other data is kept only as long as necessary.

## 5. Your rights

You may request access, correction, or deletion by contacting ${OWNER_CONTACT_EMAIL}.

## 6. Children

Users under 14 should use the service with guardian consent.

## 7. Updates

We may update this policy on this page.

## 8. Contact

${OWNER_CONTACT_EMAIL}
`.trim();
}

export function termsOfServiceBody(locale: Locale, siteName: string) {
  if (locale === "zh") {
    return `
## 1. 服务说明

${siteName} 提供在线工具与信息服务。使用本网站即表示您同意本协议。

## 2. 合法使用

您应遵守中华人民共和国法律法规，不得利用本服务从事违法违规活动，包括但不限于传播违法信息、侵犯他人权益、干扰系统安全等。

## 3. 账户与付费

- 付费服务价格以页面展示为准；支付成功后按产品说明开通权益。
- 虚拟商品/数字服务除法律另有规定外，一般不支持无理由退款；如有质量问题请联系客服协商。

## 4. 知识产权

本站内容与技术受法律保护；未经授权不得复制、爬取或用于商业竞争。

## 5. 免责声明

服务按「现状」提供。因网络、第三方服务、不可抗力等导致的中断或损失，我们在法律允许范围内不承担责任。

## 6. 争议解决

本协议适用中华人民共和国法律。争议应友好协商；协商不成的，提交运营者所在地有管辖权的人民法院诉讼解决。

## 7. 联系我们

${OWNER_CONTACT_EMAIL}
`.trim();
  }

  return `
## 1. Service

${siteName} provides online tools and information. By using this site you agree to these terms.

## 2. Lawful use

You must comply with applicable PRC laws and not misuse the service.

## 3. Payments

Pricing is shown on the site. Digital services are generally non-refundable except as required by law.

## 4. IP

Site content is protected; unauthorized copying or scraping is prohibited.

## 5. Disclaimer

Service is provided as-is within limits permitted by law.

## 6. Governing law

PRC law applies. Disputes shall be resolved in courts with jurisdiction where the operator is located.

## 7. Contact

${OWNER_CONTACT_EMAIL}
`.trim();
}
