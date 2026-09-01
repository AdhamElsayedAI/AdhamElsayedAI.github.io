"use client";

import {
  BrainCircuit,
  ChartNoAxesCombined,
  ChartSpline,
  ExternalLink,
  GraduationCap,
  ScanBarcode,
  ScanFace,
  ShieldCheck,
  ShoppingCart,
  UserRoundMinus,
} from "lucide-react";
import { useState } from "react";
import { medflow, projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  basket: { Primary: ScanBarcode, Secondary: ShoppingCart, label: "Vision checkout" },
  shield: { Primary: ScanFace, Secondary: ShieldCheck, label: "AI proctoring" },
  chart: { Primary: GraduationCap, Secondary: ChartNoAxesCombined, label: "Learning analytics" },
  spark: { Primary: UserRoundMinus, Secondary: ChartSpline, label: "Churn prediction" },
};

function ProjectVisual({ project }: { project: Project }) {
  const { Primary, Secondary, label } = iconMap[project.icon];
  return (
    <div className={`project-visual project-visual-${project.icon}`} aria-hidden>
      <div className="project-visual-grid" />
      <span className="project-visual-orbit" />
      <span className="project-visual-icon">
        <Primary className="project-icon-primary" strokeWidth={1.75} />
        <Secondary className="project-icon-secondary" strokeWidth={2} />
      </span>
      <span className="project-visual-code">{label}</span>
    </div>
  );
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = medflow.images[selectedImage];

  return (
    <section id="projects" className="section-shell">
      <div className="site-container">
        <SectionHeading
          number="03"
          eyebrow="Projects"
          title="Systems with measurable behavior."
          description="Featured work across evidence-grounded GenAI, computer vision, edge deployment, analytics and big-data machine learning."
          action={
            <a href="https://github.com/AdhamElsayedAI?tab=repositories" target="_blank" rel="noreferrer" className="button-secondary text-xs">
              All repositories <ExternalLink aria-hidden className="h-3.5 w-3.5" />
            </a>
          }
        />

        <Reveal className="featured-project overflow-hidden">
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div className="min-w-0 border-b border-line p-3 lg:border-b-0 lg:border-r sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-[#09110e]">
                <img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-full w-full object-cover object-top transition-opacity"
                  width="1400"
                  height="875"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[#07110d]/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8ef0be] backdrop-blur">
                  Authentic project UI
                </span>
              </div>
              <div className="scrollbar-none mt-3 flex gap-2 overflow-x-auto pb-1">
                {medflow.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Show MedFlow screenshot ${index + 1}`}
                    aria-pressed={selectedImage === index}
                    className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition ${selectedImage === index ? "border-accent ring-2 ring-accent/15" : "border-line opacity-70 hover:opacity-100"}`}
                  >
                    <img src={image.src} alt="" className="h-full w-full object-cover object-top" width="190" height="110" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="featured-project-mark" aria-label="MedFlow AI system">
                  <BrainCircuit aria-hidden className="h-4 w-4" />
                </span>
                <span className="eyebrow-badge">Featured · Team Project</span>
                <span className="award-badge">🏆 2nd Place</span>
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-ink sm:text-4xl">{medflow.title}</h3>
              <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{medflow.category}</p>
              <p className="mt-5 leading-7 text-muted">{medflow.description}</p>

              <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-line bg-line">
                {medflow.metrics.map((metric) => (
                  <div key={metric.label} className="bg-elevated p-3 text-center sm:p-4">
                    <strong className="block text-base font-black tracking-[-0.03em] text-accent sm:text-xl">{metric.value}</strong>
                    <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.13em] text-muted sm:text-[9px]">{metric.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[10px] leading-5 text-muted">Canonical retrieval engineering metrics — not clinical accuracy or medical validation.</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {medflow.technologies.map((technology) => <span key={technology} className="chip">{technology}</span>)}
              </div>

              <a href={medflow.github} target="_blank" rel="noreferrer" className="button-primary mt-7 self-start">
                Explore MedFlow <ExternalLink aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid border-t border-line md:grid-cols-5">
            {medflow.retrieval.map((item) => (
              <div key={item.label} className="border-b border-line p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">{item.label}</span>
                <strong className="mt-1.5 block break-words text-xs leading-5 text-ink">{item.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className="project-card group">
              <ProjectVisual project={project} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.035em] text-ink sm:text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>

                {project.metrics ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg border border-line bg-elevated px-3 py-2">
                        <strong className="text-sm text-ink">{metric.value}</strong>
                        <span className="ml-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => <span key={technology} className="chip">{technology}</span>)}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-ink transition-colors hover:text-accent">
                  View repository <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
