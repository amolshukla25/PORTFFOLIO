import { siteConfig } from "@/config/site";

/**
 * BreadcrumbList JSON-LD for a one-level page (Home → Page).
 *
 * Deeper pages build their own multi-step list inline. This exists so the flat
 * hub pages (skills, projects, experience, contributions, contact) can ship the
 * same structured-data shape without five copies of the same literal.
 */
export function pageBreadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${siteConfig.url}${path}`,
      },
    ],
  };
}
