"use client";

import { ExternalLink, ScanBarcode, ScanFace, ShieldCheck, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { medflow, medicalplab, projects, type FeaturedProject, type Project } from "@/data/projects";
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
} as const;

function ProjectPoster({ project }: { project: Project }) {
  const visual = projectVisuals[project.icon];
  const Primary = visual.Primary;
  const Secondary = visual.Secondary;

  return (
    <div className={"project-poster-v5 project-poster-" + visual.tone} aria-hidden="true">
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

function FeaturedProjectCard({ project, delay = 0 }: { project: FeaturedProject; delay?: number }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = project.images[selectedImage];

  return (
    <Reveal delay={delay} className="project-card-v5 project-card-featured-v5 group">
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
        <div className="project-featured-badges-v5">
          <span>{project.badge}</span>
          {project.secondaryBadge ? <span>{project.secondaryBadge}</span> : null}
        </div>
        <div className="project-featured-caption-v5">
          <span>{project.title.toUpperCase()}</span>
          <strong>{project.subtitle}</strong>
        </div>
      </div>

      <div className="project-card-body-v5">
        <div>
          <p className="project-card-category-v5">{project.category}</p>
          <h3 className="project-card-title-v5">{project.title}</h3>
          <p className="project-card-description-v5">{project.description}</p>
        </div>

        <div className="project-metrics-v5">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <p className="project-metric-note-v5">{project.metricNote}</p>
        {project.validationNote ? <p className="project-validation-note-v5">{project.validationNote}</p> : null}

        <div className="project-tags-v5">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-featured-footer-v5">
          <div className="project-gallery-dots-v5" aria-label={project.title + " screenshots"}>
            {project.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={"Show " + project.title + " screenshot " + (index + 1)}
                aria-pressed={selectedImage === index}
                className={selectedImage === index ? "active" : ""}
              />
            ))}
          </div>
          <div className="project-featured-actions-v5">
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer" className="project-link-v5">
                Live app <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link-v5">
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell section-shell-projects-v5">
      <div className="site-container">
        <SectionHeading
          number="03"
          eyebrow="Projects"
          title="Selected systems, presented like products."
          description="Evidence-grounded GenAI, adaptive learning, computer vision and edge AI — with verified metrics and explicit safety boundaries where they exist."
          action={
            <a href="https://github.com/AdhamElsayedAI?tab=repositories" target="_blank" rel="noreferrer" className="button-secondary text-xs">
              All repositories <ExternalLink aria-hidden className="h-3.5 w-3.5" />
            </a>
          }
        />

        <div className="projects-grid-v5">
          <FeaturedProjectCard project={medflow} />
          <FeaturedProjectCard project={medicalplab} delay={0.05} />

          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 + index * 0.05} className={"project-card-v5 project-card-" + project.icon + " group"}>
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
