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
    figures?: { caption: string; image: string }[];
  }[];
  comparison?: {
    title: string;
    note: string;
    columns: string[];
    rows: string[][];
  };
  metricsTitle?: string;
  metricsNote?: string;
  metrics: { value: string; label: string; kind?: string }[];
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
  {
    slug: "rethinking-youtube-search",
    title: "Rethinking YouTube Search",
    year: 2026,
    category: "Teardown",
    status: "Concept",
    kind: "Search · Discovery · AI",
    tagline:
      "Helping people find the video that solves their problem—even when they do not know the right words.",
    summary:
      "An independent product teardown exploring how standard YouTube Search could handle exploratory and task-based queries through intent routing, hybrid retrieval, and a measurable rollout plan. This is an unshipped proposal, not a claim about YouTube's internal implementation.",
    lead:
      "I started with a familiar frustration: you know exactly what is going wrong, but you do not know the technical phrase that unlocks the right video. I treated that moment as a product problem—not a reason to rebuild all of YouTube Search. This independent concept study uses public product behaviour and official documentation, separates evidence from assumptions, and treats every impact number as a target to validate, not a result already achieved.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search.svg`,
    accentStack: ["Intent routing", "Hybrid retrieval", "Experiment design"],
    stack: [
      "Product teardown",
      "Search analytics",
      "Jobs to be done",
      "Hybrid retrieval",
      "Experimentation",
      "Product metrics",
      "Risk analysis",
    ],
    meta: [
      { label: "Role", value: "Product Analyst / PM candidate" },
      { label: "Format", value: "Independent concept study" },
      { label: "Evidence", value: "Desk research + product analysis" },
      { label: "Scope", value: "English task-based and exploratory queries" },
      { label: "Status", value: "Unshipped proposal" },
    ],
    sections: [
      {
        n: "01",
        kicker: "Problem Statement & User Pain",
        heading: "You know what you need. You just do not know what the video calls it.",
        body: [
          "YouTube documents relevance, engagement, and quality as the core elements of search ranking, with personalization sometimes influenced by watch and search history. That system is well suited to exact titles, known creators, and popular topics. The opportunity is narrower: task-based and exploratory queries where the viewer knows what they need to accomplish but does not know the vocabulary used by the best video.",
          "A query such as “fix a React page that flashes before loading” contains a symptom, context, and desired outcome. A title may instead describe “hydration mismatch” or “layout shift.” When the language of the need and the language of the content differ, the viewer has to translate the problem manually through reformulation, scanning, and trial clicks.",
        ],
        bullets: [
          "Navigational searches are not the target; exact titles, channels, songs, and model numbers should remain lexical-first.",
          "The target moment is a high-intent search where meaning matters more than word overlap.",
          "The product risk is not simply returning a weak result—it is reducing trust in search and pushing the user into repeated query editing.",
        ],
        figure:
          "Current-state journey: the language mismatch creates a loop of scanning, weak clicks, and query reformulation.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search-current-loop.svg`,
      },
      {
        n: "02",
        kicker: "Jobs to Be Done (JTBD)",
        heading: "Design for the viewer who can describe the job, but not the answer.",
        body: [
          "The primary user is a task-driven learner: a person trying to repair, compare, understand, or make something. They often arrive with partial domain knowledge, use natural language, and judge the first few results quickly. Exploratory viewers are a secondary segment because they also benefit from better intent matching, but they tolerate more browsing and therefore feel the friction less sharply.",
          "Job to be done: when I describe a problem or learning goal in my own words, help me reach a video that meaningfully advances the task without forcing me to guess the creator's terminology.",
        ],
        steps: [
          {
            label: "Trigger",
            body: "A concrete task, symptom, or question creates a need for video guidance.",
          },
          {
            label: "Search",
            body: "The viewer expresses the situation naturally, often with incomplete terminology.",
          },
          {
            label: "Evaluate",
            body: "Titles, thumbnails, source credibility, format, and matched moments shape the first click.",
          },
          {
            label: "Progress",
            body: "A useful result resolves the need; a weak result triggers backtracking or reformulation.",
          },
        ],
      },
      {
        n: "03",
        kicker: "Research Synthesis & Key Insights",
        heading: "Here is what I know—and what I would still need to prove.",
        body: [
          "The evidence base is deliberately modest: direct observation of the public search experience, official YouTube documentation describing ranking inputs, Google research on large-scale candidate generation and ranking, and Google Cloud documentation on dense, sparse, and hybrid retrieval. No internal query logs, creator data, production metrics, or original user interviews were available.",
          "That creates a clear boundary. The case for an intent gap is a product hypothesis, not a diagnosis proven with YouTube telemetry. Before committing engineering effort, the team should quantify reformulation by query class, audit zero-click and short-click sessions, and run interviews that reconstruct what users expected from unsuccessful searches.",
        ],
        bullets: [
          "Known: YouTube says search ranking considers relevance, engagement, and quality, and may personalize results.",
          "Supported pattern: large-scale retrieval systems commonly separate candidate generation from ranking.",
          "Hypothesis: task-based queries suffer disproportionately when user language and creator language differ.",
          "Unknown: the size of the affected segment, current semantic capabilities, and the incremental value over existing systems.",
        ],
        figure:
          "Illustrative failure mode—not a claim about YouTube's internal implementation: literal word matching can produce topical results that still miss the user's job.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search-keyword-flow.svg`,
      },
      {
        n: "04",
        kicker: "Product Scope: Goals & Non-Goals",
        heading: "Improve candidate recall first; leave the mature ranker intact.",
        body: [
          "The proposal does not replace YouTube Search, recommendations, or the emerging Ask YouTube experience. It introduces an intent-aware candidate path for standard result pages, only when the query classifier identifies an exploratory or task-based need with sufficient confidence.",
          "That constraint keeps the MVP testable. Exact and navigational queries stay on the fastest proven path; sensitive topics continue to use existing quality and safety controls; and the final ordering still relies on established relevance, quality, engagement, freshness, and personalization signals. Opportunity sizing would come before a PRD: segment reformulations by intent, estimate the affected search volume, and compare the value of fewer failed sessions against added latency and infrastructure cost.",
        ],
        bullets: [
          "Goal: increase the chance that the right video enters the candidate set for meaning-heavy queries.",
          "Goal: reduce reformulation without adding visible complexity to every search.",
          "Non-goal: generate a single AI answer or summarize videos on behalf of the viewer.",
          "Non-goal: rebuild the ranking, recommendation, safety, or monetization systems.",
        ],
      },
      {
        n: "05",
        kicker: "Product Strategy & Target Journey",
        heading: "Understand the job first. Then choose the search path.",
        body: [
          "The core idea is an intent router feeding a dual-retrieval pipeline. A lightweight classifier estimates whether a query is navigational, exact, exploratory, task-based, or sensitive. Only eligible queries activate semantic retrieval over timestamped transcript segments alongside the existing lexical path.",
          "The merged candidate pool is then reranked using the platform's established quality and personalization signals. If confidence is low, the system falls back to the standard path or asks one concise clarification rather than pretending to understand. This makes semantic search a selective capability, not an expensive default.",
        ],
        steps: [
          {
            label: "Classify intent",
            body: "Detect the likely search job and confidence while preserving a fast lexical route for exact queries.",
          },
          {
            label: "Retrieve in parallel",
            body: "Run keyword retrieval and semantic matching over transcript segments, titles, and descriptions for eligible queries.",
          },
          {
            label: "Merge and diversify",
            body: "Combine candidates while limiting duplicates, repeated creators, and a single format dominating the first screen.",
          },
          {
            label: "Rerank with quality",
            body: "Apply existing relevance, engagement, quality, freshness, safety, and personalization signals.",
          },
          {
            label: "Learn from outcomes",
            body: "Use reformulation, qualified clicks, return-to-results, and satisfaction feedback to improve routing and retrieval.",
          },
        ],
        figure:
          "Target semantic-search journey: preserve the user's meaning, retrieve from transcript context, and keep existing quality signals in the final ranking step.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search-semantic-flow.svg`,
      },
      {
        n: "06",
        kicker: "Product Experience & UX",
        heading: "Show people why a result is worth their click.",
        body: [
          "Better retrieval is only useful if viewers can judge it. For semantic candidates, a short “matched in video” cue can surface the relevant transcript moment beneath the result. The cue explains why a result appears and offers a direct jump to the useful segment without replacing the creator's title or thumbnail.",
          "When intent confidence is low, two or three lightweight refinement chips can clarify the job—for example, “debugging,” “beginner tutorial,” or “performance”—before the user rewrites the full query. Format controls should also persist so a deliberate choice such as Videos or Playlists is not immediately diluted by unrelated shelves.",
        ],
        bullets: [
          "Keep exact searches visually unchanged and fast.",
          "Show matched moments only when the segment materially explains relevance.",
          "Use refinement chips as recovery, not as another mandatory step.",
          "Preserve creator identity, source quality, accessibility, and safety context in every result.",
        ],
        figure:
          "Result-page concept: a matched moment and lightweight intent chips make relevance easier to judge without replacing the creator's work.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search-result-concept.svg`,
      },
      {
        n: "07",
        kicker: "Key Product Decisions & Trade-offs",
        heading: "Four trade-offs keep the concept useful, safe, and buildable.",
        body: [
          "These are the MVP trade-offs I would put in the product brief. They optimize for incremental user value rather than a technically impressive rewrite, and each one creates a measurable downside that belongs in the experiment plan.",
        ],
        steps: [
          {
            label: "Selective, not universal",
            body: "Semantic retrieval activates for high-confidence task and exploratory intent. This protects exact-query precision and latency, but makes routing accuracy a new dependency.",
          },
          {
            label: "Segment-level context",
            body: "Transcript chunks capture specific moments better than one vector per full video. The cost is a larger index and more complex freshness, language, and transcript-quality handling.",
          },
          {
            label: "Hybrid, not vector-only",
            body: "Lexical and semantic candidates compete in one pool. This preserves rare names and exact terms, but requires careful score calibration across retrieval methods.",
          },
          {
            label: "Retrieval, not generation",
            body: "The MVP improves ranked video discovery rather than producing an AI answer. It is easier to evaluate and keeps creators central, but does not compress the task into a single response.",
          },
        ],
      },
      {
        n: "08",
        kicker: "Technical & Product Architecture",
        heading: "Keep exact search fast; spend extra compute only where meaning matters.",
        body: [
          "At indexing time, available transcripts are cleaned, split into coherent timestamped segments, embedded, and stored with language, topic, freshness, creator, safety, and format metadata. Videos without reliable transcripts remain available through the lexical path rather than being silently excluded from search.",
          "When a person searches, the intent router decides whether the normal fast path is enough. If it is not, the system retrieves a small set of meaning-based candidates from transcript segments, blends them with keyword candidates, and hands that bounded pool to the existing ranker. The team would tune the pool size against three things a PM can make explicit: relevance, latency, and cost.",
        ],
        steps: [
          {
            label: "Index",
            body: "Create language-aware transcript segments and refresh embeddings when transcripts materially change.",
          },
          {
            label: "Route",
            body: "Choose lexical-only, hybrid, clarification, or safety-constrained handling from intent and confidence.",
          },
          {
            label: "Retrieve",
            body: "Fetch bounded lexical and semantic candidate sets with format, language, and policy filters.",
          },
          {
            label: "Rank",
            body: "Apply the mature ranker and explicit diversity controls before rendering standard search results.",
          },
        ],
        figures: [
          {
            caption:
              "Core architecture: lexical and semantic candidate generation run in parallel before merging into the existing quality and ranking layer.",
            image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search-architecture.svg`,
          },
          {
            caption:
              "Detailed data flow: transcript preparation happens offline, while the online request stays bounded and feeds outcome signals back into retrieval.",
            image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/youtube-search-data-flow.svg`,
          },
        ],
      },
      {
        n: "09",
        kicker: "Success Metrics & Experiment Design",
        heading: "Earn the right to roll out—one evidence gate at a time.",
        body: [
          "The first gate is offline. Build a blinded evaluation set stratified by navigational, exact, task-based, exploratory, sensitive, multilingual, and low-resource queries. Human raters judge whether a result advances the stated need, while retrieval metrics compare lexical, semantic, and hybrid candidate sets. A win requires higher task-query recall without a meaningful loss on exact queries.",
          "The online test begins with a small English-language cohort and task-oriented queries. The North Star is successful search rate: the share of sessions that produce a qualified video interaction without a rapid return and without immediate query reformulation. Because that proxy can be gamed by clickbait or long videos, satisfaction sampling and guardrail metrics remain part of the decision, not a dashboard footnote.",
        ],
        bullets: [
          "Primary: first-search success and query reformulation rate, segmented by inferred intent.",
          "Diagnostic: time to first qualified click, matched-moment usage, back-to-results rate, and clarification-chip use.",
          "Quality guardrails: satisfaction, harmful-content escalations, authoritative-source coverage for sensitive topics, and exact-query precision.",
          "Ecosystem guardrails: creator concentration, format diversity, new-video exposure, p95 latency, and cost per search.",
          "Decision rule: ship only if task-query success improves while exact search, safety, diversity, and latency stay within agreed bounds.",
        ],
      },
      {
        n: "10",
        kicker: "MVP Scope & Product Roadmap",
        heading: "Start small, define kill criteria, and expand by query segment.",
        body: [
          "The MVP should start with English how-to and troubleshooting queries where transcripts are available and relevance can be judged consistently. Multilingual retrieval, voice queries, generative answers, and broad entertainment discovery stay out of scope until the selective hybrid path proves incremental value.",
          "Key Learnings: search quality is not one ranking problem. It is a chain of intent recognition, candidate recall, quality control, understandable presentation, and outcome measurement. Improving one link while ignoring the others can create more technically relevant results without creating a more successful search session.",
        ],
        steps: [
          {
            label: "Phase 0 · Shadow",
            body: "Generate hybrid candidates without changing the page; compare relevance, latency, coverage, and cost against the current path.",
          },
          {
            label: "Phase 1 · Controlled test",
            body: "Expose a small eligible cohort, audit failures daily, and stop automatically on safety or latency regression.",
          },
          {
            label: "Phase 2 · Expand carefully",
            body: "Increase traffic by query class only after success and guardrail thresholds hold across devices and creator segments.",
          },
          {
            label: "Phase 3 · Broaden scope",
            body: "Evaluate multilingual and multimodal retrieval after the English task-query foundation is stable.",
          },
        ],
      },
    ],
    comparison: {
      title: "Strategic Trade-off Analysis",
      note: "Improve candidate quality without turning every search into an AI answer.",
      columns: ["Decision point", "Intent-aware proposal", "Why it matters"],
      rows: [
        [
          "Query handling",
          "Route by intent and confidence",
          "Protects fast, precise navigation while focusing cost on meaning-heavy searches.",
        ],
        [
          "Candidate generation",
          "Merge lexical results with transcript-segment retrieval",
          "Finds videos that solve the task even when the wording differs.",
        ],
        [
          "Result explanation",
          "Show an optional matched moment",
          "Lets viewers assess relevance before committing to a long video.",
        ],
        [
          "Evaluation",
          "Measure search success with safety, diversity, latency, and cost guardrails",
          "Prevents watch time or click-through rate from becoming the only definition of quality.",
        ],
      ],
    },
    metricsTitle: "Success Metrics & Guardrails",
    metricsNote:
      "These are proposed experiment thresholds—not measured outcomes. The North Star can move forward only when every guardrail remains inside its agreed limit.",
    metrics: [
      {
        kind: "North Star",
        value: "Target +8pp",
        label: "first-search success in the eligible cohort",
      },
      {
        kind: "Primary metric",
        value: "Target −20%",
        label: "query reformulation for task searches",
      },
      {
        kind: "Guardrail",
        value: "Target ≤150 ms",
        label: "added p95 retrieval latency budget",
      },
      {
        kind: "Guardrail",
        value: "No regression",
        label: "safety, exact-query precision, or creator diversity",
      },
    ],
    links: [
      {
        label: "YouTube Search signals",
        href: "https://support.google.com/youtube/answer/16090438?hl=en",
      },
      {
        label: "Google retrieval research",
        href: "https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/",
      },
      {
        label: "Vector Search primer",
        href: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
      },
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
