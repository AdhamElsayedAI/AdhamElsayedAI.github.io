"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { medicalplab, medflow, projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

type ProjectImage = { src: string; alt: string };

function ProductFrame({ images, label }: { images: readonly ProjectImage[]; label: string }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return (
    <div className="cin-product-frame">
      <div className="cin-frame-bar"><span /><span>{label} / PRODUCT EVIDENCE</span><span>{String(active + 1).padStart(2, "0")} — {String(images.length).padStart(2, "0")}</span></div>
      <div className="cin-product-viewport">
        <motion.img key={images[active].src} initial={reduced ? false : { scale: 1.035, clipPath: "inset(0 0 100% 0)" }} animate={{ scale: 1, clipPath: "inset(0 0 0% 0)" }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }} src={images[active].src} alt={images[active].alt} width="1440" height="900" loading="lazy" />
      </div>
      <div className="cin-frame-thumbs" aria-label={`${label} screenshots`}>
        {images.map((image, index) => <button key={image.src} onClick={() => setActive(index)} aria-label={`Show ${label} screenshot ${index + 1}`} aria-pressed={index === active} className={index === active ? "is-active" : ""}><img src={image.src} alt="" width="220" height="130" loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></button>)}
      </div>
    </div>
  );
}

function Architecture({ steps }: { steps: readonly string[] }) {
  return <div className="cin-architecture" aria-label="System architecture">{steps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < steps.length - 1 ? <i aria-hidden>→</i> : null}</div>)}</div>;
}

export function Projects() {
  return (
    <section id="projects" className="section-shell cin-work-section">
      <div className="site-container">
        <SectionHeading number="02" eyebrow="SELECTED WORK / FLAGSHIP SYSTEMS" title="Systems with evidence." description="Two flagship systems lead the story: what they do, how they are structured, what was measured and where they deliberately refuse to overclaim." action={<a className="cin-text-link" href="https://github.com/AdhamElsayedAI?tab=repositories" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16} /></a>} />

        <article className="cin-flagship cin-flagship-medflow">
          <div className="cin-flagship-copy">
            <div className="cin-project-sequence"><span>FLAGSHIP SYSTEM</span><strong>01 / 02</strong></div>
            <p className="cin-project-category">{medflow.category}</p>
            <h3>{medflow.title}<span>{medflow.subtitle}</span></h3>
            <p className="cin-project-description">{medflow.description}</p>
            <div className="cin-metric-grid">{medflow.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
            <p className="cin-boundary"><Check size={15} /> Retrieval engineering metrics — not clinical accuracy.</p>
            <div className="cin-project-tags">{medflow.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="cin-project-actions"><Link className="cin-button cin-button-primary" href="/projects/medflow/">View case study <ArrowUpRight size={16} /></Link><a className="cin-button cin-button-quiet" href={medflow.github} target="_blank" rel="noreferrer"><Github size={16} /> Repository</a></div>
          </div>
          <div className="cin-flagship-visual"><ProductFrame images={medflow.images} label="MEDFLOW" /><Architecture steps={medflow.architecture} /></div>
        </article>

        <article className="cin-flagship cin-flagship-plab">
          <div className="cin-flagship-copy">
            <div className="cin-project-sequence"><span>FLAGSHIP SYSTEM</span><strong>02 / 02</strong></div>
            <p className="cin-project-category">{medicalplab.category}</p>
            <h3>{medicalplab.title}<span>{medicalplab.subtitle}</span></h3>
            <p className="cin-project-description">{medicalplab.description}</p>
            <div className="cin-metric-grid cin-metric-three">{medicalplab.proofs.map((proof) => <div key={proof.label}><strong>{proof.value}</strong><span>{proof.label}</span></div>)}</div>
            <p className="cin-boundary"><Check size={15} /> Educational and training platform — not a diagnostic device or clinical decision-support system.</p>
            <div className="cin-project-tags">{medicalplab.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="cin-project-actions"><Link className="cin-button cin-button-primary" href="/projects/medicalplab/">View case study <ArrowUpRight size={16} /></Link><a className="cin-button cin-button-quiet" href={medicalplab.github} target="_blank" rel="noreferrer"><Github size={16} /> Repository</a></div>
          </div>
          <div className="cin-flagship-visual"><ProductFrame images={medicalplab.images} label="MEDICALPLAB" /><Architecture steps={medicalplab.architecture} /></div>
        </article>

        <div className="cin-supporting-head"><span>SUPPORTING SYSTEMS</span><span>04 PROJECTS / SELECTED ARCHIVE</span></div>
        <div className="cin-project-ledger">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ x: index % 2 ? 28 : -28, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>
              <div className="cin-ledger-index">{project.signal}</div>
              <div className="cin-ledger-copy"><p>{project.category}</p><h3>{project.title}</h3><span>{project.description}</span>{project.flow ? <div className="cin-mini-flow">{project.flow.map((step) => <b key={step}>{step}</b>)}</div> : null}</div>
              <div className="cin-ledger-evidence">{project.metrics?.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}<div className="cin-project-tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></div>
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}><ArrowUpRight size={22} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
