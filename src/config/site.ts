/**
 * Single source of truth for site identity, consumed by the HTML head injector,
 * the sitemap/robots generators, and the JSON-LD block.
 */

export interface SiteConfig {
  readonly name: string;
  readonly jobTitle: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly locale: string;
  readonly ogImagePath: string;
  readonly twitterHandle?: string;
  readonly profiles: readonly string[];
  readonly sections: readonly string[];
}

export const siteConfig: SiteConfig = {
  name: "Ved Prakash Meena",
  jobTitle: "Software Developer",
  title: "Ved Prakash Meena — Software Developer | AI/ML & Full-Stack Engineering",
  description:
    "Software Developer specialising in AI/ML and full-stack engineering. Building with LLMs, RAG, React, FastAPI and C++. Final-year CSE student at IIIT Vadodara.",
  url: "https://vedmeena21pf.vercel.app",
  locale: "en_IN",
  ogImagePath: "/og-image.png",
  profiles: [
    "https://github.com/Vedmeena21",
    "https://www.linkedin.com/in/ved-prakash-meena/",
    "https://www.instagram.com/ved.meenaa/",
  ],
  sections: ["about", "aboutme", "experience", "education", "projects", "contact"],
};

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
