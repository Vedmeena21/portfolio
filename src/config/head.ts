import { absoluteUrl, siteConfig } from "./site";

/**
 * JSON-LD Person graph. Kept as a plain object so it can be validated by eye and
 * serialised identically in dev and in the build.
 */
function personSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    image: absoluteUrl(siteConfig.ogImagePath),
    sameAs: [...siteConfig.profiles],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Information Technology Vadodara",
    },
  };
}

/**
 * The full <head> block injected into index.html for both `vite dev` and `vite build`,
 * so what a crawler sees is never out of sync with what a developer sees.
 */
export function buildHeadTags(): string {
  const ogImage = absoluteUrl(siteConfig.ogImagePath);
  const twitterTag = siteConfig.twitterHandle
    ? `\n    <meta name="twitter:creator" content="${siteConfig.twitterHandle}" />`
    : "";

  return `
    <meta name="description" content="${siteConfig.description}" />
    <link rel="canonical" href="${siteConfig.url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="author" content="${siteConfig.name}" />
    <meta name="theme-color" content="#00040f" media="(prefers-color-scheme: dark)" />
    <meta name="theme-color" content="#e2e2e2" media="(prefers-color-scheme: light)" />

    <meta property="og:type" content="profile" />
    <meta property="og:site_name" content="${siteConfig.name}" />
    <meta property="og:title" content="${siteConfig.title}" />
    <meta property="og:description" content="${siteConfig.description}" />
    <meta property="og:url" content="${siteConfig.url}" />
    <meta property="og:locale" content="${siteConfig.locale}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${siteConfig.title}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${siteConfig.title}" />
    <meta name="twitter:description" content="${siteConfig.description}" />
    <meta name="twitter:image" content="${ogImage}" />${twitterTag}

    <script type="application/ld+json">${JSON.stringify(personSchema())}</script>`;
}
