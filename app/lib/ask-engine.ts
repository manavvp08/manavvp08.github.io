import { capabilities, caseStudies, profile, projects } from "./data";

export type Source = { label: string; href: string };
export type Answer = { text: string; sources: Source[] };

type Passage = {
  id: string;
  label: string;
  href: string;
  text: string;
  keywords: string[];
};

const passages: Passage[] = [
  ...caseStudies.map((study) => ({
    id: `case-${study.slug}`,
    label: study.title,
    href: `/work/${study.slug}`,
    text: `${study.title} is a ${study.kind} case study. ${study.summary}`,
    keywords: [study.title, study.kind, ...study.stack].map((value) => value.toLowerCase()),
  })),
  ...projects.map((project) => ({
    id: `project-${project.slug}`,
    label: project.title,
    href: `/work/${project.slug}`,
    text: `${project.title} is a ${project.kind} project. ${project.summary}`,
    keywords: [project.title, project.kind, ...project.stack].map((value) => value.toLowerCase()),
  })),
  ...capabilities.map((capability, index) => ({
    id: `capability-${index}`,
    label: "Toolkit",
    href: "/#toolkit",
    text: `${capability.title}: ${capability.body}`,
    keywords: [capability.title, ...capability.tags].map((value) => value.toLowerCase()),
  })),
  {
    id: "experience",
    label: "About",
    href: "/#about",
    text: "I am a Business System Analyst at Deloitte with more than a year of experience in enterprise systems transformation. I moved from an internship into the analyst role in January 2026.",
    keywords: ["experience", "deloitte", "business analyst", "intern", "role", "current"],
  },
  {
    id: "impact",
    label: "Enterprise case study",
    href: "/work/enterprise-transformation",
    text: "I validated 79 core business scenarios, achieved a 100% acceptance-testing pass rate, resolved 30+ critical issues before launch, and helped reduce outstanding deployment risk by 35% across 6+ functional teams.",
    keywords: ["impact", "metrics", "79", "100", "30", "35", "uat", "release", "results"],
  },
  {
    id: "direction",
    label: "About",
    href: "/#about",
    text: "I am building toward Product Analytics and Product Management, with a focus on data-driven decisions, experimentation, and owning outcomes end to end.",
    keywords: ["product", "analyst", "manager", "apm", "career", "direction", "goal"],
  },
  {
    id: "education",
    label: "About",
    href: "/#about",
    text: "I completed a BE in Computer Engineering at Thadomal Shahani Engineering College from 2021 to 2025, following Engineering Science studies through the University of Cambridge from 2019 to 2021.",
    keywords: ["education", "college", "degree", "tsec", "cambridge", "computer engineering"],
  },
  {
    id: "skills",
    label: "Toolkit",
    href: "/#toolkit",
    text: "My core toolkit includes SQL, data analysis, root cause analysis, requirements gathering, acceptance testing, roadmapping, and stakeholder alignment. I also hold SQL Basic and SQL Intermediate certifications.",
    keywords: ["skills", "tools", "sql", "analysis", "requirements", "uat", "roadmap", "certification"],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
    text: `You can reach me at ${profile.email} or connect with me on LinkedIn.`,
    keywords: ["contact", "email", "linkedin", "reach", "message"],
  },
];

const STOP = new Set([
  "the",
  "a",
  "an",
  "is",
  "are",
  "do",
  "does",
  "what",
  "who",
  "how",
  "and",
  "or",
  "of",
  "to",
  "in",
  "on",
  "for",
  "with",
  "about",
  "you",
  "your",
  "me",
  "tell",
  "i",
]);

function tokenize(query: string) {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9.+#\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP.has(token));
}

function retrieve(query: string, limit = 2) {
  const tokens = tokenize(query);
  return passages
    .map((passage) => {
      const haystack = `${passage.text} ${passage.keywords.join(" ")}`.toLowerCase();
      const score = tokens.reduce(
        (total, token) => total + (passage.keywords.includes(token) ? 3 : 0) + (haystack.includes(token) ? 1 : 0),
        0,
      );
      return { passage, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ passage }) => passage);
}

function answerFrom(selected: Passage[], lead = ""): Answer {
  const sources = Array.from(
    new Map(selected.map((passage) => [passage.href, { label: passage.label, href: passage.href }])).values(),
  );
  return {
    text: `${lead}${selected.map((passage) => passage.text).join(" ")}`.trim(),
    sources,
  };
}

export function ask(rawQuery: string): Answer {
  const query = rawQuery.trim();
  if (!query) return { text: "Ask me about Manav's experience, impact, skills, education, or product direction.", sources: [] };

  const lower = query.toLowerCase();
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
    return answerFrom([passages.find((passage) => passage.id === "contact")!]);
  }
  if (lower.includes("where") || lower.includes("location") || lower.includes("based")) {
    return {
      text: `Manav is based in ${profile.location}.`,
      sources: [{ label: "Overview", href: "/" }],
    };
  }
  if (lower.includes("hire") || lower.includes("why manav") || lower.includes("stand out")) {
    return answerFrom(
      [
        passages.find((passage) => passage.id === "impact")!,
        passages.find((passage) => passage.id === "direction")!,
      ],
      "Manav combines measurable delivery experience with a clear product direction. ",
    );
  }
  if (lower.includes("strongest project") || lower.includes("botx")) {
    return answerFrom([passages.find((passage) => passage.id === "project-botx-ai")!]);
  }

  const selected = retrieve(query);
  if (selected.length) return answerFrom(selected);
  return answerFrom(
    [
      passages.find((passage) => passage.id === "experience")!,
      passages.find((passage) => passage.id === "direction")!,
    ],
    "Here is the short version: ",
  );
}

export const suggestions = [
  "What impact have you delivered?",
  "Why should I hire you?",
  "What's your strongest project?",
  "What product roles are you targeting?",
  "What's your toolkit?",
  "What's your education?",
];
