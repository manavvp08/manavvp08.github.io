import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const skillGroups = [
  {
    title: "Analytics & Experimentation",
    dot: "bg-accent",
    skills: [
      "Funnels, cohorts, retention",
      "Segmentation, churn, LTV",
      "North-star & guardrail metrics",
      "A/B testing & hypothesis testing",
      "Confidence intervals & sample-size estimation",
      "Advanced SQL, Python, Pandas, Excel",
    ],
  },
  {
    title: "Product Management",
    dot: "bg-[#8b5cf6]",
    skills: [
      "PRD writing",
      "RICE / ICE prioritization",
      "OKR design",
      "Stakeholder alignment",
      "Agile / Scrum",
    ],
  },
  {
    title: "Technical & Domain",
    dot: "bg-faint",
    skills: [
      "SAP SD (Order-to-Cash)",
      "ERP-adjacent workflows",
      "Supply chain & logistics operations",
      "Cross-functional requirement translation",
    ],
  },
  {
    title: "AI & Architecture",
    dot: "bg-success",
    skills: ["AI Agents", "LangGraph / Agentic AI", "RAG Architecture"],
  },
];

export default function Toolkit() {
  return (
    <Section id="toolkit" className="py-16 sm:py-32">
      <Kicker index="04" label="Toolkit" />

      <Reveal delay={60}>
        <h2 className="mt-6 font-display text-[2.35rem] leading-[1.05] tracking-tight text-fg sm:text-[3.2rem]">
          What I bring.
        </h2>
      </Reveal>

      <Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <section key={group.title} className="bg-surface p-5 sm:p-6">
              <h3 className="min-h-10 border-b border-border pb-3 text-[13px] font-semibold leading-snug text-fg">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="grid grid-cols-[5px_1fr] gap-2.5 text-[12.5px] leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className={`mt-[7px] h-1 w-1 rounded-full ${group.dot}`}
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-5 rounded-xl border border-border bg-surface px-5 py-4 text-[13px] text-muted">
          <span className="font-semibold text-fg">Tools:</span>{" "}
          Mixpanel / Amplitude, SQL, Jira
        </div>
      </Reveal>
    </Section>
  );
}
