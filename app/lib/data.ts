export const profile = {
  name: "Manav Purswani",
  location: "Mumbai, Maharashtra, India",
  timezone: "Asia/Kolkata",
  email: "manavp080@gmail.com",
  role: "Business System Analyst",
  direction: "Product Analyst → Product Manager",
  now: [
    {
      label: "Currently",
      name: "Business System Analyst at Deloitte",
      href: "https://www.linkedin.com/in/manav-purswani/",
      mark: "D",
    },
    {
      label: "Building toward",
      name: "Product Analytics & Product Management",
      href: "https://www.linkedin.com/in/manav-purswani/",
      mark: "P",
    },
  ],
};

export const socials = [
  { label: "GitHub", handle: "manavvp08", href: "https://github.com/manavvp08" },
  {
    label: "LinkedIn",
    handle: "in/manav-purswani",
    href: "https://www.linkedin.com/in/manav-purswani/",
  },
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}` },
];

export type Project = {
  slug: string;
  title: string;
  year: number;
  status: string;
  kind: string;
  tagline: string;
  summary: string;
  image: string;
  accentStack: string[];
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "botx-ai",
    title: "BotX.ai",
    year: 2024,
    status: "Built",
    kind: "AI · Accessibility",
    tagline: "Natural-language web navigation that turns intent into tangible actions.",
    summary:
      "BotX.ai helps people navigate websites, complete complex tasks, and interact with web pages using natural language. Its pipeline converts raw HTML into a representation AI can use to understand and act on a page.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/botx.svg`,
    accentStack: ["Accessibility", "AI", "Web automation"],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Google AI",
      "Transformers.js",
    ],
    highlights: [
      "Designed the product around a clear accessibility outcome: translating natural-language intent into web actions.",
      "Built an HTML-centered pipeline that gives the AI enough page context to perceive and manipulate web content.",
      "Combined speech interfaces with web automation to reduce the effort needed to complete digital tasks.",
    ],
    links: [
      { label: "View source", href: "https://github.com/manavvp08/BotX.ai" },
      { label: "Watch demo", href: "https://youtu.be/gEIxp6inROw" },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  year: number;
  category: "Real work" | "Analytics" | "Teardown" | "Experiment";
  status: string;
  kind: string;
  tagline: string;
  summary: string;
  lead: string;
  image?: string;
  accentStack: string[];
  stack: string[];
  meta: { label: string; value: string }[];
  sections: {
    n: string;
    kicker: string;
    heading: string;
    body: string[];
    bullets?: string[];
    steps?: { label: string; body: string }[];
    figure?: string;
    image?: string;
  }[];
  comparison?: {
    title: string;
    note: string;
    columns: string[];
    rows: string[][];
  };
  metrics: { value: string; label: string }[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-transformation",
    title: "Enterprise Systems Transformation",
    year: 2026,
    category: "Real work",
    status: "Shipped",
    kind: "Business analysis · Release readiness",
    tagline: "Turning 79 core business scenarios into a zero-defect production go-live.",
    summary:
      "Business analysis and release-readiness work for a large-scale ECC-to-S/4HANA migration, spanning requirements, acceptance testing, access-control design, roadmap prioritization, and stakeholder alignment.",
    lead:
      "On a large-scale ECC-to-S/4HANA migration, I translated ambiguous business needs into testable requirements, aligned six-plus functional teams, and helped move a complex release from risk to production readiness.",
    accentStack: ["Requirements", "UAT", "Root cause analysis"],
    stack: [
      "SQL",
      "Requirements gathering",
      "Acceptance testing",
      "Root cause analysis",
      "Roadmapping",
      "Stakeholder management",
      "SAP S/4HANA",
    ],
    meta: [
      { label: "Role", value: "Business System Analyst" },
      { label: "Scope", value: "Enterprise transformation" },
      { label: "Focus", value: "Release readiness and process improvement" },
      { label: "Teams", value: "6+ functional teams" },
      { label: "Status", value: "Production go-live" },
    ],
    sections: [
      {
        n: "01",
        kicker: "Release readiness",
        heading: "Make every critical scenario testable before go-live.",
        body: [
          "I drove acceptance readiness across 79 core business scenarios, turning requirements into clear validation paths and coordinating issue resolution before launch.",
          "The result was a 100% acceptance-testing pass rate, 30+ critical issues resolved pre-launch, and a 35% reduction in outstanding deployment risk.",
        ],
      },
      {
        n: "02",
        kicker: "Workflow design",
        heading: "Protect sensitive data without slowing the business down.",
        body: [
          "Working directly with engineering, I helped design role-based access-control logic that restricted sensitive credit data to authorized users while enabling automated credit-limit updates for accounts with complex dependencies.",
          "That change eliminated unauthorized data exposure and reduced manual update turnaround time by 40%.",
        ],
      },
      {
        n: "03",
        kicker: "Prioritization",
        heading: "Turn stakeholder pain points into one ordered roadmap.",
        body: [
          "I defined and prioritized an enhancement roadmap across customer onboarding, credit management, pricing, billing, and order-to-cash.",
          "Structured requirements gathering helped reduce process friction by 20% across critical workflows.",
        ],
      },
      {
        n: "04",
        kicker: "Adoption",
        heading: "Validate redesigned processes with the people who use them.",
        body: [
          "I led more than 15 stakeholder workshops and acceptance-testing sessions to gather requirements, surface edge cases, and validate redesigned workflows against real user expectations.",
          "Those sessions achieved more than 90% user acceptance.",
        ],
      },
    ],
    metrics: [
      { value: "79", label: "core business scenarios validated" },
      { value: "100%", label: "acceptance-testing pass rate" },
      { value: "35%", label: "reduction in deployment risk" },
      { value: "40%", label: "faster manual-update turnaround" },
    ],
    links: [
      { label: "LinkedIn profile", href: "https://www.linkedin.com/in/manav-purswani/" },
    ],
  },
];

export const capabilities = [
  {
    title: "Product discovery",
    body: "Translate ambiguous business problems into clear user needs, prioritized requirements, and decisions a team can act on.",
    tags: ["Requirements", "Root cause analysis", "Stakeholder workshops"],
  },
  {
    title: "Product analytics",
    body: "Use SQL, structured analysis, and measurable outcomes to find friction and build the case for the next move.",
    tags: ["SQL", "Data analysis", "Metrics"],
  },
  {
    title: "Release readiness",
    body: "Turn complex workflows into acceptance scenarios, resolve launch risk, and validate that redesigned processes work for users.",
    tags: ["UAT", "Defect triage", "Process validation"],
  },
  {
    title: "Roadmaps & alignment",
    body: "Prioritize cross-functional improvements, make trade-offs visible, and align business and engineering around outcomes.",
    tags: ["Roadmapping", "Prioritization", "Communication"],
  },
];

export type Testimonial = {
  highlight: string;
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
  rating: number;
  href?: string;
};

export const testimonials: Testimonial[] = [];

export const dailyDrivers = [
  "SQL",
  "Root cause analysis",
  "Requirements",
  "Acceptance testing",
  "Roadmapping",
  "Stakeholder alignment",
];

export const stackGroups = [
  {
    title: "Analysis",
    note: "Find the real friction point and quantify why it matters.",
    items: ["SQL", "Data analysis", "Root cause analysis", "Product metrics"],
  },
  {
    title: "Product",
    note: "Turn evidence into a prioritized, testable next step.",
    items: ["Product management", "Roadmapping", "Experimentation design", "Prioritization"],
  },
  {
    title: "Delivery",
    note: "Keep business, engineering, and users aligned through release.",
    items: ["Requirements", "UAT", "Stakeholder workshops", "Release readiness"],
  },
];

export const facts = [
  { to: 79, prefix: "", suffix: "", label: "core business scenarios validated" },
  { to: 100, prefix: "", suffix: "%", label: "acceptance-testing pass rate" },
  { to: 35, prefix: "", suffix: "%", label: "deployment risk reduced" },
  { to: 40, prefix: "", suffix: "%", label: "faster update turnaround" },
];

export const links = {
  linkedInUrl: "https://www.linkedin.com/in/manav-purswani/",
  githubUrl: "https://github.com/manavvp08",
};
