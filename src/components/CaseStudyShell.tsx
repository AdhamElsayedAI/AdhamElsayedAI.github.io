import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type Metric = { value: string; label: string; note?: string };
type Section = { title: string; body: string; bullets?: string[] };
type Props = {
  eyebrow: string;
  title: string;
  summary: string;
  repository: string;
  metrics: Metric[];
  stack: string[];
  sections: Section[];
  architecture?: string[];
  disclaimer?: string;
};

export function CaseStudyShell({
  eyebrow,
  title,
  summary,
  repository,
  metrics,
  stack,
  sections,
  architecture,
  disclaimer,
}: Props) {
  return (
    <main className="case-study-shell-v4">
      <div className="site-container">
        <nav className="case-study-nav-v4" aria-label="Case study navigation">
          <Link href="/#projects" className="button-secondary"><ArrowLeft className="h-4 w-4" /> Portfolio</Link>
          <a href={repository} target="_blank" rel="noreferrer" className="button-secondary">
            <Github className="h-4 w-4" /> Repository <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </nav>

        <header className="case-study-hero-v4">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <div className="case-study-summary-v4">{summary}</div>
          {disclaimer ? <div className="case-study-disclaimer-v4">{disclaimer}</div> : null}
        </header>

        <section className="case-study-metrics-v4" aria-label="Project evidence">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              {metric.note ? <small>{metric.note}</small> : null}
            </article>
          ))}
        </section>

        {architecture ? (
          <section className="case-study-section-v4">
            <p className="case-study-kicker-v4">System architecture</p>
            <h2>How the system is structured</h2>
            <div className="case-study-architecture-v4">
              {architecture.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="case-study-grid-v4">
          {sections.map((section) => (
            <article key={section.title} className="case-study-section-v4">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="case-study-section-v4">
          <p className="case-study-kicker-v4">Engineering stack</p>
          <h2>Tools used in the implementation</h2>
          <div className="project-tags-v5 case-study-stack-v4">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <footer className="case-study-footer-v4">
          <Link href="/#projects" className="button-primary">Back to selected work</Link>
          <a href={repository} target="_blank" rel="noreferrer" className="button-secondary">
            Inspect repository <ExternalLink className="h-4 w-4" />
          </a>
        </footer>
      </div>
    </main>
  );
}
