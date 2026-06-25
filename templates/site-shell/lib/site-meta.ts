export interface SiteMeta {
  id: string;
  emoji: string;
  name: { en: string; zh: string };
  joinLabel?: { en: string; zh: string };
  nav: Array<{ href: string; label: { en: string; zh: string } }>;
  guideHref?: string;
}
