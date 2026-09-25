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
    <div className="ux-product-frame">
      <div className="ux-product-toolbar">
        <span>{label}</span>
        <span>REAL PRODUCT SCREENS</span>
        <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="ux-product-main">
        <motion.img
          key={images[active].src}
          initial={reduced ? false : { scale: 1.02, opacity: .35 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
          src={images[active].src}
          alt={images[active].alt}
          width="1440"
          height="900"
          loading={active === 0 ? "eager" : "lazy"}
        />
      </div>
      <div className="ux-product-thumbs" aria-label={`${label} screenshots`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActive(index)}
            aria-label={`Show ${label} screenshot ${index + 1}`}
            aria-pressed={index === active}
            className={index === active ? "is-active" : ""}
          >
            <img src={image.src} alt="" width="220" height="130" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Architecture({ steps }: { steps: readonly string[] }) {
  return (
    <div className="ux-architecture" aria-label="System architecture">
      {steps.map((step, index) => (
        <div key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell cin-work-section ux-work-section">
      <div className="site-container">
        <SectionHeading
          number="02"
          eyebrow="SELECTED WORK"
          title="Systems with evidence."
          description="Flagship systems first: real interfaces, measurable behavior, architecture and explicit safety boundaries."
          action={<a className="cin-text-link" href="https://github.com/AdhamElsayedAI?tab=repositories" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16} /></a>}
        />

        <article className="ux-flagship">
          <div className="ux-flagship-copy">
            <div className="ux-project-label"><span>FLAGSHIP 01</span><span>{medflow.category}</span></div>
            <h3>{medflow.title}<span>{medflow.subtitle}</span></h3>
            <p>{medflow.description}</p>
            <div className="ux-metrics">{medflow.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
            <p className="ux-boundary"><Check size={16} /> Retrieval engineering metrics — not clinical accuracy.</p>
            <div className="ux-tag-row">{medflow.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="ux-project-actions">
              <Link className="cin-button cin-button-primary" href="/projects/medflow/">View case study <ArrowUpRight size={16} /></Link>
              <a className="cin-button cin-button-quiet" href={medflow.github} target="_blank" rel="noreferrer"><Github size={16} /> Repository</a>
            </div>
          </div>
          <div className="ux-flagship-visual">
            <ProductFrame images={medflow.images} label="MEDFLOW" />
            <Architecture steps={medflow.architecture} />
          </div>
        </article>

        <article className="ux-flagship ux-flagship-reverse">
          <div className="ux-flagship-copy">
            <div className="ux-project-label"><span>FLAGSHIP 02</span><span>{medicalplab.category}</span></div>
            <h3>{medicalplab.title}<span>{medicalplab.subtitle}</span></h3>
            <p>{medicalplab.description}</p>
            <div className="ux-metrics ux-metrics-three">{medicalplab.proofs.map((proof) => <div key={proof.label}><strong>{proof.value}</strong><span>{proof.label}</span></div>)}</div>
            <p className="ux-boundary"><Check size={16} /> Educational and training platform — not a diagnostic device or clinical decision-support system.</p>
            <div className="ux-tag-row">{medicalplab.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="ux-project-actions">
              <Link className="cin-button cin-button-primary" href="/projects/medicalplab/">View case study <ArrowUpRight size={16} /></Link>
              <a className="cin-button cin-button-quiet" href={medicalplab.github} target="_blank" rel="noreferrer"><Github size={16} /> Repository</a>
            </div>
          </div>
          <div className="ux-flagship-visual">
            <ProductFrame images={medicalplab.images} label="MEDICALPLAB" />
            <Architecture steps={medicalplab.architecture} />
          </div>
        </article>

        <div className="ux-supporting-header">
          <div>
            <span>SUPPORTING WORK</span>
            <h3>Different systems. Same engineering discipline.</h3>
          </div>
          <p>Real repository evidence only. No fabricated screenshots.</p>
        </div>

        <div className="ux-supporting-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={index === 0 ? "ux-supporting-card ux-supporting-card-featured" : "ux-supporting-card"}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: .25 }}
              transition={{ duration: .48, delay: index * .035, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ux-supporting-top">
                <span>{project.signal}</span>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}><ArrowUpRight size={18} /></a>
              </div>
              <p className="ux-supporting-category">{project.category}</p>
              <h4>{project.title}</h4>
              <p className="ux-supporting-description">{project.description}</p>

              {project.metrics?.length ? (
                <div className="ux-supporting-metrics">
                  {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
                </div>
              ) : null}

              {project.flow ? (
                <div className="ux-mini-flow" aria-label={`${project.title} system flow`}>
                  {project.flow.map((step) => <span key={step}>{step}</span>)}
                </div>
              ) : null}

              <div className="ux-tag-row">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
