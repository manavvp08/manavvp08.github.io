import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Reveal from "../reveal";
import CountUp from "../count-up";
import Button from "../button";
import GithubHeatmap from "../github-heatmap";
import { Section } from "./section-shell";
import { profile, facts, links } from "../../lib/data";

function ProfilePanel({ mobile = false }: { mobile?: boolean }) {
  return (
    <figure
      className={`group relative overflow-hidden border border-border bg-bg-2 ${
        mobile ? "-mx-5 -mt-10 mb-8 aspect-[4/5]" : "aspect-[4/5] rounded-2xl"
      }`}
    >
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-40 w-40 place-items-center rounded-full border border-border-strong bg-surface/80 font-display text-6xl font-semibold tracking-[-0.08em] text-fg shadow-2xl backdrop-blur sm:h-48 sm:w-48 sm:text-7xl">
          MP
        </div>
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <div className="font-display text-sm text-fg">{profile.name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Business systems → Product
          </div>
        </div>
        <span className="font-mono text-[10px] text-faint">IN · MUMBAI</span>
      </figcaption>
    </figure>
  );
}

export default function Intro() {
  return (
    <Section id="intro" className="pt-8 pb-16 sm:pt-14 sm:pb-32">
      <div className="lg:hidden">
        <ProfilePanel mobile />
      </div>

      <Reveal className="hidden lg:block">
        <div className="flex flex-wrap items-center gap-2.5 text-[13px] text-muted">
          <span className="inline-flex items-center gap-2 text-fg">
            <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
            Open to Product Analyst and APM opportunities
          </span>
          <span className="text-border-strong">/</span>
          <span>{profile.location}</span>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:mt-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-12">
        <div>
          <Reveal>
            <h1 className="font-display text-[clamp(2.1rem,4.6vw,3.1rem)] leading-[1.08] tracking-tight text-balance">
              Hey, I&apos;m Manav — a Business Systems Analyst with a product lens.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted">
              I turn ambiguous business problems into prioritized requirements, measurable
              decisions, and shipped solutions. I&apos;m building toward Product Analytics
              and Product Management.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <Button href={links.linkedInUrl} external variant="primary">
                View LinkedIn <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href={`mailto:${profile.email}`} external variant="secondary">
                Email me <Mail aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hidden lg:block">
          <ProfilePanel />
        </Reveal>
      </div>

      <Reveal>
        <dl className="mt-14 grid grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-bg px-4 py-5">
              <dd className="font-display text-3xl font-semibold tracking-tight text-fg">
                <CountUp to={fact.to} prefix={fact.prefix} suffix={fact.suffix} />
              </dd>
              <dt className="mt-1 text-[12px] leading-snug text-muted">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {profile.now.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-bg-2 font-display text-lg font-semibold text-accent">
                {item.mark}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {item.label}
                </div>
                <div className="mt-0.5 font-display text-[17px] font-semibold tracking-tight text-fg">
                  {item.name}
                </div>
              </div>
              <ArrowUpRight className="h-[18px] w-[18px] shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:text-fg" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12">
          <GithubHeatmap user="manavvp08" />
        </div>
      </Reveal>
    </Section>
  );
}
