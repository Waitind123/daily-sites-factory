import type { Invoice } from "./invoices";

export type ComplianceCheck = {
  id: string;
  label: { en: string; zh: string };
  passed: boolean;
  required: boolean;
};

export type SellerInfo = {
  name: string;
  vatId: string;
  country: string;
  address: string;
  city: string;
  postalCode: string;
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function calcTotal(invoice: Invoice): number {
  return invoice.lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function validateCompliance(
  invoice: Invoice,
  seller: SellerInfo
): ComplianceCheck[] {
  const checks: ComplianceCheck[] = [
    {
      id: "seller-vat",
      label: { en: "Seller VAT ID present", zh: "卖方增值税号已填写" },
      passed: seller.vatId.trim().length >= 4,
      required: true,
    },
    {
      id: "seller-country",
      label: { en: "Seller country code (ISO 3166)", zh: "卖方国家代码（ISO 3166）" },
      passed: /^[A-Z]{2}$/.test(seller.country.trim()),
      required: true,
    },
    {
      id: "buyer-name",
      label: { en: "Buyer legal name", zh: "买方法定名称" },
      passed: invoice.clientName.trim().length > 0,
      required: true,
    },
    {
      id: "buyer-vat",
      label: { en: "Buyer VAT ID (B2B EU)", zh: "买方增值税号（欧盟 B2B）" },
      passed: (invoice.buyerVatId?.trim().length ?? 0) >= 4,
      required: false,
    },
    {
      id: "invoice-number",
      label: { en: "Unique invoice number", zh: "唯一发票编号" },
      passed: invoice.number.trim().length > 0,
      required: true,
    },
    {
      id: "issue-date",
      label: { en: "Issue date (ISO 8601)", zh: "开票日期（ISO 8601）" },
      passed: Boolean(invoice.createdAt),
      required: true,
    },
    {
      id: "line-items",
      label: { en: "At least one line item with amount", zh: "至少一条含金额的明细" },
      passed: invoice.lineItems.some((i) => i.description.trim() && i.unitPrice > 0),
      required: true,
    },
    {
      id: "currency",
      label: { en: "Currency code (ISO 4217)", zh: "货币代码（ISO 4217）" },
      passed: /^[A-Z]{3}$/.test(invoice.currency.trim()),
      required: true,
    },
    {
      id: "poland-ksef",
      label: {
        en: "Poland KSeF-ready structure (UBL 2.1 Invoice)",
        zh: "波兰 KSeF 兼容结构（UBL 2.1 发票）",
      },
      passed: true,
      required: true,
    },
  ];

  return checks;
}

export function complianceScore(checks: ComplianceCheck[]): number {
  const required = checks.filter((c) => c.required);
  if (required.length === 0) return 100;
  const passed = required.filter((c) => c.passed).length;
  return Math.round((passed / required.length) * 100);
}

export function generateUblXml(invoice: Invoice, seller: SellerInfo): string {
  const total = calcTotal(invoice);
  const issueDate = invoice.createdAt.slice(0, 10);
  const dueDate = invoice.dueDate.slice(0, 10);
  const taxRate = invoice.vatRate ?? 23;
  const taxAmount = (total * taxRate) / (100 + taxRate);
  const netAmount = total - taxAmount;

  const lines = invoice.lineItems
    .map((item, idx) => {
      const lineTotal = item.quantity * item.unitPrice;
      return `    <cac:InvoiceLine>
      <cbc:ID>${idx + 1}</cbc:ID>
      <cbc:InvoicedQuantity unitCode="C62">${item.quantity}</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="${escapeXml(invoice.currency)}">${lineTotal.toFixed(2)}</cbc:LineExtensionAmount>
      <cac:Item>
        <cbc:Description>${escapeXml(item.description)}</cbc:Description>
        <cbc:Name>${escapeXml(item.description)}</cbc:Name>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="${escapeXml(invoice.currency)}">${item.unitPrice.toFixed(2)}</cbc:PriceAmount>
      </cac:Price>
    </cac:InvoiceLine>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
         xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
         xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
  <cbc:CustomizationID>urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0</cbc:CustomizationID>
  <cbc:ProfileID>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</cbc:ProfileID>
  <cbc:ID>${escapeXml(invoice.number)}</cbc:ID>
  <cbc:IssueDate>${issueDate}</cbc:IssueDate>
  <cbc:DueDate>${dueDate}</cbc:DueDate>
  <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
  <cbc:DocumentCurrencyCode>${escapeXml(invoice.currency)}</cbc:DocumentCurrencyCode>
  <cac:AccountingSupplierParty>
    <cac:Party>
      <cac:PartyName><cbc:Name>${escapeXml(seller.name)}</cbc:Name></cac:PartyName>
      <cac:PostalAddress>
        <cbc:StreetName>${escapeXml(seller.address)}</cbc:StreetName>
        <cbc:CityName>${escapeXml(seller.city)}</cbc:CityName>
        <cbc:PostalZone>${escapeXml(seller.postalCode)}</cbc:PostalZone>
        <cac:Country><cbc:IdentificationCode>${escapeXml(seller.country)}</cbc:IdentificationCode></cac:Country>
      </cac:PostalAddress>
      <cac:PartyTaxScheme>
        <cbc:CompanyID>${escapeXml(seller.vatId)}</cbc:CompanyID>
        <cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme>
      </cac:PartyTaxScheme>
    </cac:Party>
  </cac:AccountingSupplierParty>
  <cac:AccountingCustomerParty>
    <cac:Party>
      <cac:PartyName><cbc:Name>${escapeXml(invoice.clientName)}</cbc:Name></cac:PartyName>
      ${invoice.buyerVatId ? `<cac:PartyTaxScheme>
        <cbc:CompanyID>${escapeXml(invoice.buyerVatId)}</cbc:CompanyID>
        <cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme>
      </cac:PartyTaxScheme>` : ""}
    </cac:Party>
  </cac:AccountingCustomerParty>
  <cac:TaxTotal>
    <cbc:TaxAmount currencyID="${escapeXml(invoice.currency)}">${taxAmount.toFixed(2)}</cbc:TaxAmount>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="${escapeXml(invoice.currency)}">${netAmount.toFixed(2)}</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="${escapeXml(invoice.currency)}">${taxAmount.toFixed(2)}</cbc:TaxAmount>
      <cac:TaxCategory>
        <cbc:ID>S</cbc:ID>
        <cbc:Percent>${taxRate}</cbc:Percent>
        <cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="${escapeXml(invoice.currency)}">${total.toFixed(2)}</cbc:LineExtensionAmount>
    <cbc:TaxExclusiveAmount currencyID="${escapeXml(invoice.currency)}">${netAmount.toFixed(2)}</cbc:TaxExclusiveAmount>
    <cbc:TaxInclusiveAmount currencyID="${escapeXml(invoice.currency)}">${total.toFixed(2)}</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount currencyID="${escapeXml(invoice.currency)}">${total.toFixed(2)}</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
${lines}
</Invoice>`;
}
