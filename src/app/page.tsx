import { portfolio } from "@/data/portfolio.mjs";

const navItems = [
  ["Overview", "#overview"],
  ["Evidence", "#evidence"],
  ["Products", "#products"],
  ["Approach", "#approach"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="site-shell">
        <aside className="side-rail">
          <a className="identity" href="#overview" aria-label="Back to overview">
            <span className="monogram" aria-hidden="true">
              {portfolio.initials}
            </span>
            <span>
              <strong>{portfolio.name}</strong>
              <small>Product Analyst</small>
            </span>
          </a>

          <nav aria-label="Primary navigation">
            <ol className="rail-nav">
              {navItems.map(([label, href], index) => (
                <li key={href}>
                  <a href={href}>
                    <span>0{index + 1}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="rail-footer">
            <p>
              <span className="status-dot" aria-hidden="true" />
              Product analytics focus
            </p>
            <a href={portfolio.links.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>

        <header className="mobile-header">
          <a className="mobile-identity" href="#overview">
            <span className="monogram" aria-hidden="true">
              {portfolio.initials}
            </span>
            <strong>{portfolio.name}</strong>
          </a>
          <a href="#contact">Contact</a>
        </header>

        <main id="content">
          <section className="hero section" id="overview">
            <div className="hero-copy">
              <p className="eyebrow">
                {portfolio.location} <span>/</span> Product Analytics
              </p>
              <h1>{portfolio.headline}</h1>
              <p className="hero-summary">{portfolio.summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">
                  See product work <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-secondary"
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="decision-board" aria-label="Product decision workflow">
              <div className="board-header">
                <span>Decision system</span>
                <span className="live-label">
                  <i aria-hidden="true" /> Active
                </span>
              </div>
              <ol>
                <li>
                  <span>01</span>
                  <strong>Question</strong>
                  <small>What user or business decision are we making?</small>
                </li>
                <li>
                  <span>02</span>
                  <strong>Signal</strong>
                  <small>Which metric tells us if the product created value?</small>
                </li>
                <li>
                  <span>03</span>
                  <strong>Action</strong>
                  <small>What is the smallest next move that reduces uncertainty?</small>
                </li>
              </ol>
              <div className="board-footer">
                <span>Direction</span>
                <strong>{portfolio.positioning}</strong>
              </div>
            </div>
          </section>

          <section className="section" id="evidence">
            <div className="section-heading">
              <p className="section-index">01 / Evidence</p>
              <h2>Execution backed by numbers.</h2>
              <p>
                Current experience from release validation and cross-functional delivery
                at Deloitte.
              </p>
            </div>

            <div className="proof-grid">
              {portfolio.proof.map((item) => (
                <article className="proof-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>

            <div className="experience-row">
              <div>
                <p className="meta-label">Experience</p>
                <h3>Deloitte</h3>
                <p>Analyst · July 2025—Present</p>
              </div>
              <p>
                Translating stakeholder workflows into requirements, coordinating defect
                resolution, and reducing release risk across business-critical journeys.
              </p>
            </div>
          </section>

          <section className="section" id="products">
            <div className="section-heading">
              <p className="section-index">02 / Product work</p>
              <h2>Built products, viewed through a product lens.</h2>
              <p>
                Existing engineering projects reframed around the user problem, behaviour
                to measure, and decisions the data should support.
              </p>
            </div>

            <div className="project-list">
              {portfolio.projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-body">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span>Product case</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="product-lens">
                      <span>Measure next</span>
                      <strong>{project.productLens}</strong>
                    </div>
                    <ul className="tag-list" aria-label={`${project.title} skills`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View product <span aria-hidden="true">↗</span>
                    </a>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Source <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="approach">
            <div className="section-heading">
              <p className="section-index">03 / Approach</p>
              <h2>From messy question to clear next move.</h2>
            </div>

            <ol className="method-grid">
              {portfolio.methods.map((method, index) => (
                <li key={method.title}>
                  <span>0{index + 1}</span>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </li>
              ))}
            </ol>

            <div className="toolkit">
              <div>
                <p className="meta-label">Working toolkit</p>
                <h3>Analysis should end in a decision.</h3>
              </div>
              <ul>
                {portfolio.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section contact" id="contact">
            <p className="section-index">04 / Contact</p>
            <h2>Let&apos;s talk about the product problem behind the dashboard.</h2>
            <p>
              I&apos;m building toward Product Management through product analytics,
              experimentation, and hands-on product work.
            </p>
            <a
              className="button button-primary"
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Connect on GitHub <span aria-hidden="true">↗</span>
            </a>
          </section>

          <footer>
            <span>© 2026 {portfolio.name}</span>
            <span>Designed and built from scratch.</span>
          </footer>
        </main>
      </div>
    </>
  );
}
