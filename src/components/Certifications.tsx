"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Bot,
  BrainCircuit,
  Braces,
  CircuitBoard,
  Code2,
  Database,
  FlaskConical,
  GraduationCap,
  MessageSquareCode,
  Network,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

const filters = ["All", "GenAI", "AI / ML", "Data", "Programs"] as const;

const certificateIcons = {
  "Building with the Claude API": MessageSquareCode,
  "Python Essentials 1": Braces,
  "Generative AI": Sparkles,
  "One Million Prompts — Prompt Engineering": Code2,
  "Introduction to Modern AI": BrainCircuit,
  "Introduction to Generative AI and Agents": Bot,
  "Develop a Generative AI Chat App with Microsoft Foundry": Rocket,
  "Introduction to Data Science": Database,
  "Exploring Artificial Intelligence": FlaskConical,
  "HCIA-AI V3.5": Network,
  "Robotics Programming Training": CircuitBoard,
  "Introduction to AI & Applications": GraduationCap,
  "Artificial Intelligence Training Program": BrainCircuit,
} as const;

export function Certifications() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const reduced = useReducedMotion();
  const visible = useMemo(
    () => (filter === "All" ? certifications : certifications.filter((certificate) => certificate.category === filter)),
    [filter],
  );

  return (
    <section id="certifications" className="section-shell section-tint">
      <div className="site-container">
        <SectionHeading
          number="06"
          eyebrow="Certifications"
          title="Continuous learning, clearly organized."
          description="Courses and technical programs already represented in the portfolio data. Cards without verified credential URLs intentionally have no fake links."
        />

        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter certifications">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`filter-pill ${filter === item ? "filter-pill-active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((certificate, index) => {
            const Icon = certificateIcons[certificate.title as keyof typeof certificateIcons] ?? Award;
            return (
              <motion.article
                layout
                key={`${certificate.title}-${certificate.issuer}`}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: reduced ? 0 : index * 0.025 }}
                className="cert-card group"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="certificate-icon" aria-hidden>
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <Award aria-hidden className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-[15px] font-extrabold leading-6 text-ink">{certificate.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{certificate.issuer}</p>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-muted">{certificate.category}</span>
                  {certificate.year ? <span className="font-mono text-[9px] text-accent">{certificate.year}</span> : null}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
