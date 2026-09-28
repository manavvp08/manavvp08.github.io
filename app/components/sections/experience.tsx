import Reveal from "../reveal";
import { Kicker, Section } from "./section-shell";

const roles = [
  {
    dates: "Jan 2026 — Present",
    role: "Business Systems Analyst",
    badge: "Current",
    achievements: [
      "Governed 79 core business scenarios through requirements, acceptance criteria, and UAT—reaching 100% pass before go-live.",
      "Resolved 30+ critical issues and strengthened role-based access controls, reducing deployment risk by 35%.",
      "Built clearer release and status workflows, improving stakeholder update turnaround by 40%.",
    ],
    skills: ["Requirements", "UAT", "SQL", "Release readiness", "Stakeholder alignment"],
  },
  {
    dates: "Jul 2025 — Dec 2025",
    role: "Internship",
    badge: "Internship",
    achievements: [
      "Supported requirements gathering and workflow validation across business and technical teams.",
      "Turned process questions into traceable documentation, issue logs, and clear delivery actions.",
    ],
    skills: ["Workflow validation", "Documentation", "Issue tracking"],
  },
];

function DeloitteLogo() {
  return (
    <span
      role="img"
      aria-label="Deloitte logo"
      className="inline-flex h-10 w-[4.25rem] shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm"
    >
      <span className="text-[10px] font-bold tracking-[-0.04em] text-[#111]">
        Deloitte<span className="text-[#86bc25]">.</span>
      </span>
    </span>
  );
}

export default function Experience() {
  return (
    <Section id="experience" className="py-16 sm:py-32">
      <Kicker index="05" label="Experience" />

      <Reveal>
        <h2 className="mt-6 font-display text-[2.35rem] leading-[1.05] tracking-tight text-fg sm:text-[3.2rem]">
          The Journey.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
          From enterprise systems delivery to product thinking.
        </p>
      </Reveal>

      <ol className="relative mt-12 space-y-12 before:absolute before:bottom-3 before:left-[5px] before:top-2 before:w-px before:bg-border-strong sm:mt-16 sm:space-y-14">
        {roles.map((role, index) => (
          <li key={role.dates} className="relative pl-8 sm:pl-12">
            <span
              aria-hidden
              className={`absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-[3px] border-bg ring-1 ${
                index === 0
                  ? "bg-accent ring-accent/40"
                  : "bg-border-strong ring-border-strong/40"
              }`}
            />

            <Reveal delay={index * 80}>
              <article className="group max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <time className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:text-[11px]">
                    {role.dates}
                  </time>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.13em] ${
                      index === 0
                        ? "border-success/30 bg-success/10 text-success"
                        : "border-border-strong bg-surface-2 text-muted"
                    }`}
                  >
                    {role.badge}
                  </span>
                </div>

                <div className="mt-4 flex min-w-0 items-center gap-3.5">
                  <DeloitteLogo />
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.45rem] font-semibold leading-tight tracking-tight text-fg sm:text-[1.75rem]">
                      {role.role}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted sm:text-[13px]">
                      <span className="font-semibold text-accent-strong">Deloitte</span>
                      <span className="mx-2 text-border-strong">/</span>
                      Mumbai, India
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {role.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="grid grid-cols-[12px_1fr] gap-2.5 text-[14px] leading-relaxed text-muted sm:text-[15px]"
                    >
                      <span aria-hidden className="text-[11px] text-accent">
                        →
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2" aria-label={`${role.role} skills`}>
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted transition-colors group-hover:border-border-strong group-hover:text-fg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={180}>
        <div className="mt-16 border-t border-border pt-9 sm:mt-20 sm:pt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Academic Background
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3.5">
              <span
                aria-hidden
                className="grid h-10 w-[4.25rem] shrink-0 place-items-center rounded-lg border border-border-strong bg-surface font-display text-[12px] font-semibold text-fg shadow-sm"
              >
                TSEC
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-fg sm:text-[1.35rem]">
                  B.E. Computer Engineering
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted sm:text-[13px]">
                  Thadomal Shahani Engineering College
                  <span className="mx-2 text-border-strong">/</span>
                  Mumbai, India
                </p>
              </div>
            </div>
            <time className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:text-[11px]">
              2021 — 2025
            </time>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
