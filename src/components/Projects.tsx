"use client";

import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { legacyProjects, medicalplab, medflow, supportingProjects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

type Flagship = typeof medflow | typeof medicalplab;

function Architecture({ steps, flow = false }: { steps: readonly string[]; flow?: boolean }) {
  return (
    <div className={`el-architecture ${flow ? "is-flow" : ""}`} aria-label={`System flow: ${steps.join(" to ")}`}>
      {steps.map((step, index) => (
        <div key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {index < steps.length - 1 ? <ArrowRight aria-hidden size={13} /> : null}
        </div>
      ))}
    </div>
  );
}

function FlagshipProject({ project, href, number }: { project: Flagship; href: string; number: string }) {
  const [activeImage, setActiveImage] = useState(0);
  const metrics = "metrics" in project ? project.metrics : project.proofs;

  return (
    <article className={`el-flagship is-${project.title.toLowerCase()}`}>
      <header className="el-flagship-header">
        <div><span>{number}</span><p>{project.category}</p></div>
        <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
        <div className="el-project-overview">
          <p>{project.description}</p>
          <p><span>MY ROLE</span>{project.responsibility}</p>
        </div>
        <div className="el-project-actions">
          <Link href={href}>Full case study <ArrowUpRight size={15} aria-hidden /></Link>
          <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden /> Repository</a>
        </div>
      </header>

      <div className="el-project-stage">
        <figure>
          <img src={project.images[activeImage].src} alt={project.images[activeImage].alt} width="1600" height="1000" loading="lazy" />
          <figcaption><span>PRODUCT EVIDENCE / {String(activeImage + 1).padStart(2, "0")}</span><strong>{project.images[activeImage].alt}</strong></figcaption>
        </figure>
        <div className="el-project-thumbs" aria-label={`${project.title} interface views`}>
          {project.images.map((image, index) => (
            <button key={image.src} type="button" className={index === activeImage ? "is-active" : ""} onClick={() => setActiveImage(index)} aria-label={`Show ${image.alt}`} aria-pressed={index === activeImage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={image.src} alt="" width="240" height="150" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className="el-metric-context"><span>ENGINEERING EVIDENCE</span><p>{project.metricContext}</p></div>
      <div className="el-metric-ledger">
        {metrics.map((metric, index) => (
          <div key={metric.label}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{metric.value}</strong><h4>{metric.label}</h4><p>{metric.note}</p>
          </div>
        ))}
      </div>

      <div className="el-system-block"><span>SYSTEM ARCHITECTURE</span><Architecture steps={project.architecture} /></div>
      <div className="el-tech-row">{project.technologies.map((technology) => <b key={technology}>{technology}</b>)}</div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell el-projects-section">
      <div className="site-container">
        <SectionHeading number="03" eyebrow="SELECTED WORK" title="Systems with inspectable evidence." description="Flagship work is documented through product interfaces, system architecture and metrics that describe the engineering—not a claim of clinical or educational efficacy." />
        <div className="el-flagship-list">
          <FlagshipProject project={medflow} href="/projects/medflow/" number="PRIMARY / 01" />
          <FlagshipProject project={medicalplab} href="/projects/medicalplab/" number="PRIMARY / 02" />
        </div>

        <div className="el-supporting-header"><span>SUPPORTING SYSTEMS</span><p>Technical flows shown as diagrams where polished product screenshots are not the strongest evidence.</p></div>
        <div className="el-supporting-grid">
          {supportingProjects.map((project) => (
            <article key={project.title}>
              <div className="el-supporting-title"><span>{project.signal}</span><p>{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div>
              {project.metrics ? <div className="el-supporting-metrics">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><p>{metric.note}</p></div>)}</div> : null}
              {project.flow ? <div className="el-flow-diagram"><span>SYSTEM FLOW DIAGRAM</span><Architecture steps={project.flow} flow /></div> : null}
              <div className="el-tech-row">{project.technologies.map((technology) => <b key={technology}>{technology}</b>)}</div>
              <a className="el-repo-link" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Examine repository <ArrowUpRight size={14} /></a>
            </article>
          ))}
        </div>

        <details className="el-additional-work">
          <summary>Additional work &amp; training <span>{legacyProjects.length} archived projects</span></summary>
          <div>{legacyProjects.map((project) => <article key={project.title}><span>{project.signal}</span><div><p>{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div><a href={project.github} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={14} /></a></article>)}</div>
        </details>
      </div>
    </section>
  );
}
