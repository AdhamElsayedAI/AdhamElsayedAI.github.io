"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Download, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { profile } from "@/data/profile";

type Metric = { value: string; label: string; note?: string };
type TextBlock = { title: string; body: string; bullets?: string[] };
type ImageBlock = { src: string; alt: string; caption: string };
type Props = {
  eyebrow: string; title: string; summary: string; repository: string; role: string; context: string;
  metrics: Metric[]; stack: string[]; architecture: string[]; decisions: TextBlock[];
  evaluation: TextBlock; safety: TextBlock; results: string[]; tradeoffs: string[]; improvements: string[];
  images: ImageBlock[]; disclaimer: string;
};

function NumberedList({ items }: { items: string[] }) {
  return <div className="case-numbered-list">{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>;
}

export function CaseStudyShell(props: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 100]);
  return (
    <main className="case-page">
      <nav className="case-nav" aria-label="Case study navigation">
        <Link href="/#projects"><ArrowLeft size={16} /> Portfolio</Link>
        <span>AE / CASE STUDY</span>
        <div><a href={props.repository} target="_blank" rel="noreferrer"><Github size={15} /> Repository</a><a href={profile.cv} download><Download size={15} /> Resume</a></div>
      </nav>

      <header ref={heroRef} className="case-hero">
        <div className="case-hero-grid" aria-hidden />
        <div className="case-hero-copy">
          <p>{props.eyebrow}</p><h1>{props.title}</h1><div className="case-hero-summary">{props.summary}</div>
          <div className="case-hero-links"><a className="cin-button cin-button-primary" href={props.repository} target="_blank" rel="noreferrer">Inspect repository <ArrowUpRight size={16} /></a><Link className="cin-button cin-button-quiet" href="/#projects">Back to selected work</Link></div>
        </div>
        <motion.figure className="case-hero-visual" style={{ y: visualY }}>
          <div className="case-window-bar"><span /><span>PRODUCT / VERIFIED SCREEN</span><span>01</span></div>
          <img src={props.images[0].src} alt={props.images[0].alt} width="1440" height="900" />
          <figcaption>{props.images[0].caption}</figcaption>
        </motion.figure>
        <div className="case-disclaimer">{props.disclaimer}</div>
      </header>

      <section className="case-metrics" aria-label="Project evidence">{props.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.note ? <small>{metric.note}</small> : null}</article>)}</section>

      <section className="case-context case-container">
        <div><span>ROLE / CONTRIBUTION</span><p>{props.role}</p></div><div><span>PROJECT CONTEXT</span><p>{props.context}</p></div>
      </section>

      <section className="case-section case-architecture-section">
        <div className="case-container"><div className="case-kicker">01 / SYSTEM ARCHITECTURE</div><h2>The system, end to end.</h2><div className="case-architecture">{props.architecture.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < props.architecture.length - 1 ? <i>→</i> : null}</div>)}</div></div>
      </section>

      <section className="case-section case-container">
        <div className="case-kicker">02 / ENGINEERING DECISIONS</div><h2>Decisions that define the behavior.</h2>
        <div className="case-decision-grid">{props.decisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.body}</p>{decision.bullets ? <ul>{decision.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</article>)}</div>
      </section>

      <section className="case-section case-evaluation-section">
        <div className="case-container case-evaluation-grid">
          <article><div className="case-kicker">03 / EVALUATION</div><h2>{props.evaluation.title}</h2><p>{props.evaluation.body}</p>{props.evaluation.bullets ? <NumberedList items={props.evaluation.bullets} /> : null}</article>
          <article><div className="case-kicker">04 / SAFETY & RELIABILITY</div><h2>{props.safety.title}</h2><p>{props.safety.body}</p>{props.safety.bullets ? <NumberedList items={props.safety.bullets} /> : null}</article>
        </div>
      </section>

      <section className="case-section case-container case-screens-section">
        <div className="case-kicker">05 / PRODUCT SCREENS</div><h2>Product evidence, not concept art.</h2>
        <div className="case-screen-grid">{props.images.slice(1).map((image, index) => <motion.figure key={image.src} initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, amount: .2 }} transition={{ duration: .75, delay: index * .04, ease: [0.22, 1, 0.36, 1] }}><div className="case-window-bar"><span /><span>PRODUCT / {String(index + 2).padStart(2, "0")}</span><span>{String(index + 2).padStart(2, "0")}</span></div><img src={image.src} alt={image.alt} width="1440" height="900" loading="lazy" /><figcaption>{image.caption}</figcaption></motion.figure>)}</div>
      </section>

      <section className="case-section case-outcomes-section"><div className="case-container case-outcomes-grid"><div><div className="case-kicker">06 / RESULTS</div><h2>What the repository supports.</h2><NumberedList items={props.results} /></div><div><div className="case-kicker">07 / TRADE-OFFS</div><h2>What is deliberately bounded.</h2><NumberedList items={props.tradeoffs} /></div></div></section>

      <section className="case-section case-container case-next-section"><div className="case-kicker">08 / WHAT I WOULD IMPROVE NEXT</div><h2>Forward work, stated plainly.</h2><NumberedList items={props.improvements} /><div className="case-stack"><span>ENGINEERING STACK</span><div>{props.stack.map((item) => <b key={item}>{item}</b>)}</div></div></section>

      <footer className="case-footer"><div><span>REPOSITORY CTA</span><h2>Read the code. Inspect the evidence.</h2></div><a className="cin-button cin-button-primary" href={props.repository} target="_blank" rel="noreferrer">Open repository <ArrowUpRight size={17} /></a></footer>
    </main>
  );
}
