"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = skillGroups[activeIndex];

  return (
    <section id="skills" className="section-shell section-tint">
      <div className="site-container">
        <SectionHeading
          number="02"
          eyebrow="Skills"
          title="A stack shaped by complete AI systems."
          description="Explore the areas I use to move from a model or retrieval experiment to a measured, usable application."
        />

        <div className="panel-card grid overflow-hidden lg:grid-cols-[310px_1fr]">
          <div className="scrollbar-none flex gap-2 overflow-x-auto border-b border-line p-3 lg:block lg:space-y-1 lg:border-b-0 lg:border-r lg:p-4">
            {skillGroups.map((group, index) => (
              <button
                key={group.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
                className={`skill-tab ${index === activeIndex ? "skill-tab-active" : ""}`}
              >
                <span className="font-mono text-[10px] opacity-60">{String(index + 1).padStart(2, "0")}</span>
                <span className="whitespace-nowrap lg:whitespace-normal">{group.name}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[410px] p-5 sm:p-7 lg:p-9">
            <motion.div
              key={active.name}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Selected discipline</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-ink sm:text-3xl">{active.name}</h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-muted sm:text-right">{active.description}</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {active.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reduced ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: reduced ? 0 : index * 0.035 }}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-elevated p-3.5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
                  >
                    <CheckCircle2 aria-hidden className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm font-bold text-ink">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
