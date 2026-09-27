import Reveal from "../reveal";
import CaseStudyBlock from "../case-study-block";
import { Section, Kicker } from "./section-shell";

export default function CaseStudies() {
  return (
    <Section id="case-studies" className="py-16 sm:py-32">
      <Kicker index="02" label="Case Studies" />
      <Reveal delay={60}>
        <h2 className="mt-5 max-w-3xl font-display text-[2rem] leading-[1.08] tracking-tight sm:text-[2.6rem]">
          Decisions, trade-offs, and outcomes—not just deliverables.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          Each piece is labelled by evidence type, so real work stays distinct from
          future teardowns, analytics exercises, and experiments.
        </p>
      </Reveal>
      <CaseStudyBlock />
    </Section>
  );
}
