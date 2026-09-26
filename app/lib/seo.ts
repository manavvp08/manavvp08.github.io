import { dailyDrivers, profile, socials } from "./data";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: profile.name,
  url: SITE_URL,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Deloitte" },
  knowsAbout: [
    "Product analytics",
    "Product management",
    "Business analysis",
    "SQL",
    "Data analysis",
    "Root cause analysis",
    "Requirements gathering",
    "Acceptance testing",
    ...dailyDrivers,
  ],
  sameAs: socials.filter((social) => social.label !== "Email").map((social) => social.href),
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${profile.name} — Business Systems Analyst → Product Analyst`,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [person, website],
};
