import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

type Metric = { value: string; label: string; note: string };
type Decision = { title: string; body: string; bullets?: string[] };
type Image = { src: string; alt: string; caption: string };

type CaseStudyShellProps = {
  eyebrow: string;
  title: string;
  summary: string;
  repository: string;
  role: string;
  context: string;
  metrics: Metric[];
  architecture: string[];
  decisions: Decision[];
  evaluation: Decision;
  safety: Decision;
  images: Image[];
  results: string[];
  tradeoffs: string[];
  improvements: string[];
  stack: string[];
  disclaimer: string;
};

function NumberedList({ items }: { items: string[] }) {
  return <ol className="case-numbered-list">{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>;
}

function EvidencePanel({ item, label }: { item: Decision; label: string }) {
  return <article className="case-evidence-panel"><span>{label}</span><h2>{item.title}</h2><p>{item.body}</p>{item.bullets ? <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</article>;
}

export function CaseStudyShell(props: CaseStudyShellProps) {
  return (
    <>
      <a href="#case-main" className="skip-link">Skip to case study</a>
      <header className="case-topbar"><Link href="/#projects"><ArrowLeft size={15} /> Portfolio</Link><span>ADHAM ELSAYED / CASE STUDY</span><a href={props.repository} target="_blank" rel="noreferrer"><Github size={15} /> Repository</a></header>
      <main id="case-main" className="case-shell">
        <section className="case-hero">
          <div className="case-hero-index"><span>{props.eyebrow}</span><span>ENGINEERING RECORD / 2026</span></div>
          <h1>{props.title}</h1>
          <p>{props.summary}</p>
          <a className="el-button el-button-primary" href={props.repository} target="_blank" rel="noreferrer">Examine repository <ArrowUpRight size={16} /></a>
        </section>

        <section className="case-brief" aria-label="Project brief"><article><span>ROLE</span><p>{props.role}</p></article><article><span>CONTEXT</span><p>{props.context}</p></article></section>

        <section className="case-metrics" aria-label="Reported project metrics">
          {props.metrics.map((metric, index) => <article key={metric.label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{metric.value}</strong><h2>{metric.label}</h2><p>{metric.note}</p></article>)}
        </section>

        <section className="case-section">
          <div className="case-section-label"><span>01</span><p>SYSTEM ARCHITECTURE</p></div>
          <div className="case-architecture">{props.architecture.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < props.architecture.length - 1 ? <ArrowRight size={14} aria-hidden /> : null}</div>)}</div>
        </section>

        <section className="case-section">
          <div className="case-section-label"><span>02</span><p>ENGINEERING DECISIONS</p></div>
          <div className="case-decisions">{props.decisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{decision.title}</h2><p>{decision.body}</p>{decision.bullets ? <ul>{decision.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</article>)}</div>
        </section>

        <section className="case-section case-evidence-grid">
          <div className="case-section-label"><span>03</span><p>EVALUATION + SAFETY</p></div>
          <div><EvidencePanel item={props.evaluation} label="MEASURED BEHAVIOR" /><EvidencePanel item={props.safety} label="FAILURE BOUNDARY" /></div>
        </section>

        <section className="case-section">
          <div className="case-section-label"><span>04</span><p>PRODUCT EVIDENCE</p></div>
          <div className="case-gallery">{props.images.map((image, index) => <figure key={image.src}><div><img src={image.src} alt={image.alt} width="1600" height="1000" loading="lazy" /></div><figcaption><span>{String(index + 1).padStart(2, "0")}</span><p>{image.caption}</p></figcaption></figure>)}</div>
        </section>

        <section className="case-section case-outcomes">
          <div className="case-section-label"><span>05</span><p>OUTCOMES + LIMITS</p></div>
          <div className="case-outcome-grid"><article><span>RESULTS</span><NumberedList items={props.results} /></article><article><span>TRADEOFFS</span><NumberedList items={props.tradeoffs} /></article><article><span>NEXT ITERATION</span><NumberedList items={props.improvements} /></article></div>
        </section>

        <section className="case-stack"><span>TECHNICAL STACK</span><div>{props.stack.map((item) => <b key={item}>{item}</b>)}</div></section>
        <aside className="case-disclaimer"><span>SCOPE NOTE</span><p>{props.disclaimer}</p></aside>
        <nav className="case-end-nav" aria-label="Case study navigation"><Link href="/#projects"><ArrowLeft size={15} /> All selected work</Link><a href={props.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} /></a></nav>
      </main>
    </>
  );
}
