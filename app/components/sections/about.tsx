import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const impact = [
  { value: "79", label: "core scenarios governed" },
  { value: "100%", label: "pass rate before go-live" },
  { value: "35%", label: "lower access-control risk" },
  { value: "40%", label: "faster status updates" },
];

const progression = [
  {
    dates: "Jan 2026 — Present",
    role: "Business Systems Analyst",
    detail: "Enterprise transformation · Full-time",
  },
  {
    dates: "Jul 2025 — Dec 2025",
    role: "Business Systems Intern",
    detail: "Foundation and delivery support",
  },
];

function DeloitteLogo() {
  return (
    <div
      role="img"
      aria-label="Deloitte logo"
      className="inline-flex h-14 min-w-32 items-center justify-center rounded-xl border border-black/10 bg-white px-4 shadow-sm"
    >
      <span className="text-[17px] font-bold tracking-[-0.04em] text-[#111]">
        Deloitte<span className="text-[#86bc25]">.</span>
      </span>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" className="py-16 sm:py-32">
      <Kicker index="05" label="Experience" />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.55fr_0.85fr]">
        <Reveal>
          <article className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="border-b border-border p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <DeloitteLogo />
                  <div>
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]">
                      Deloitte
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] text-muted">
                      <MapPin aria-hidden className="h-3.5 w-3.5" /> Mumbai, India
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-success">
                  Current
                </span>
              </div>

              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  Jan 2026 — Present · Full-time
                </p>
                <h3 className="mt-2 font-display text-[1.8rem] font-semibold leading-tight tracking-tight text-fg sm:text-[2.15rem]">
                  Business Systems Analyst
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                  I translate complex business needs into clear requirements, acceptance
                  criteria, and release decisions for enterprise transformation programs.
                  My work sits between stakeholders and engineering, with a focus on
                  reducing delivery risk and making outcomes measurable.
                </p>
              </div>
            </div>

            <div className="bg-bg-2 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[12px] font-medium text-fg">
                <BriefcaseBusiness aria-hidden className="h-4 w-4 text-accent" />
                Selected delivery impact
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                {impact.map((item) => (
                  <div key={item.label} className="bg-surface px-4 py-4">
                    <dd className="font-display text-2xl font-semibold tracking-tight text-fg">
                      {item.value}
                    </dd>
                    <dt className="mt-1 text-[11px] leading-snug text-muted">
                      {item.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Role progression
              </div>
              <div className="mt-5 space-y-6">
                {progression.map((item, index) => (
                  <div key={item.role} className="relative pl-5">
                    <span
                      className={`absolute left-0 top-1.5 h-2 w-2 rounded-full ${
                        index === 0 ? "bg-success" : "bg-border-strong"
                      }`}
                    />
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                      {item.dates}
                    </p>
                    <h3 className="mt-1.5 text-[14px] font-semibold text-fg">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-2xl border border-border bg-bg-2 p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                <GraduationCap aria-hidden className="h-4 w-4" /> Education
              </div>
              <div className="mt-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border-strong bg-surface font-display text-[13px] font-semibold text-fg">
                  TSEC
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold leading-snug text-fg">
                    B.E. Computer Engineering
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted">
                    Thadomal Shahani Engineering College
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    2021 — 2025
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
