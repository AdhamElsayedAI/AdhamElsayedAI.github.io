"use client";

import {
  BarChart3,
  BrainCircuit,
  ExternalLink,
  GraduationCap,
  ScanBarcode,
  ScanFace,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  UserRoundMinus,
} from "lucide-react";
import { useState } from "react";
import { medflow, projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const projectVisuals = {
  basket: {
    Primary: ScanBarcode,
    Secondary: ShoppingCart,
    label: "VISION CHECKOUT",
    tone: "orange",
  },
  shield: {
    Primary: ScanFace,
    Secondary: ShieldCheck,
    label: "AI PROCTORING",
    tone: "violet",
  },
  chart: {
    Primary: GraduationCap,
    Secondary: BarChart3,
    label: "LEARNING ANALYTICS",
    tone: "blue",
  },
  spark: {
    Primary: UserRoundMinus,
    Secondary: TrendingDown,
    label: "CHURN PREDICTION",
    tone: "rose",
  },
} as const;

function ProjectPoster({ project }: { project: Project }) {
  const visual = projectVisuals[project.icon];
  const Primary = visual.Primary;
  const Secondary = visual.Secondary;

  return (
    <div className={`project-poster-v5 project-poster-${visual.tone}`} aria-hidden="true">
      <div className="project-poster-grid-v5" />
      <span className="project-poster-orbit-v5 orbit-a" />
      <span className="project-poster-orbit-v5 orbit-b" />
      <span className="project-poster-icon-v5">
        <Primary className="project-poster-icon-primary-v5" strokeWidth={1.6} />
        <span className="project-poster-mini-v5"><Secondary strokeWidth={1.8} /></span>
      </span>
      <span className="project-poster-label-v5">{visual.label}</span>
    </div>
  );
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = medflow.images[selectedImage];

  return (
    <section id="projects" className="section-shell section-shell-projects-v5">
      <div className="site-container">
        <SectionHeading
          number="03"
          eyebrow="Projects"
          title="Selected systems, presented like products."
          description="A mix of evidence-grounded GenAI, computer vision, edge AI, analytics and machine-learning work — with real metrics where they exist."
          action={
            <a href="https://github.com/AdhamElsayedAI?tab=repositories" target="_blank" rel="noreferrer" className="button-secondary text-xs">
              All repositories <ExternalLink aria-hidden className="h-3.5 w-3.5" />
            </a>
          }
        />

        <div className="projects-grid-v5">
          <Reveal className="project-card-v5 project-card-featured-v5 group">
            <div className="project-featured-media-v5">
              <img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                className="project-featured-image-v5"
                width="1400"
                height="875"
              />
              <div className="project-featured-overlay-v5" />
              <span className="project-featured-logo-v5"><BrainCircuit className="h-7 w-7" /></span>
              <div className="project-featured-badges-v5">
                <span>FEATURED · TEAM PROJECT</span>
                <span>🏆 2ND PLACE</span>
              </div>
              <div className="project-featured-caption-v5">
                <span>MEDFLOW</span>
                <strong>Evidence-grounded clinical AI</strong>
              </div>
            </div>

            <div className="project-card-body-v5">
              <div>
                <p className="project-card-category-v5">{medflow.category}</p>
                <h3 className="project-card-title-v5">{medflow.title}</h3>
                <p className="project-card-description-v5">{medflow.description}</p>
              </div>

              <div className="project-metrics-v5">
                {medflow.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <p className="project-metric-note-v5">Retrieval engineering metrics — not clinical accuracy.</p>

              <div className="project-tags-v5">
                {medflow.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>

              <div className="project-featured-footer-v5">
                <div className="project-gallery-dots-v5" aria-label="MedFlow screenshots">
                  {medflow.images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Show MedFlow screenshot ${index + 1}`}
                      aria-pressed={selectedImage === index}
                      className={selectedImage === index ? "active" : ""}
                    />
                  ))}
                </div>
                <a href={medflow.github} target="_blank" rel="noreferrer" className="project-link-v5">
                  View project <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className={`project-card-v5 project-card-${project.icon} group`}>
              <ProjectPoster project={project} />
              <div className="project-card-body-v5">
                <div>
                  <p className="project-card-category-v5">{project.category}</p>
                  <h3 className="project-card-title-v5">{project.title}</h3>
                  <p className="project-card-description-v5">{project.description}</p>
                </div>

                {project.metrics ? (
                  <div className="project-metrics-v5 project-metrics-compact-v5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="project-tags-v5">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer" className="project-link-v5">
                  View repository <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
