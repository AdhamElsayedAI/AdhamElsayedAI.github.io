"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, ChevronDown } from "lucide-react";
import { useState } from "react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="section-shell">
      <div className="site-container">
        <SectionHeading
          number="05"
          eyebrow="Experience"
          title="Selected AI-focused training."
          description="Relevant technical programs from the existing portfolio history. Projects remain represented as projects, not employment."
        />

        <div className="relative mx-auto max-w-5xl">
          <div aria-hidden className="absolute bottom-0 left-[18px] top-0 w-px bg-line sm:left-[23px]" />
          <div className="space-y-4">
            {experience.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article key={`${item.organization}-${item.period}`} className="relative pl-12 sm:pl-16">
                  <span className={`absolute left-0 top-5 z-10 grid h-9 w-9 place-items-center rounded-full border bg-page sm:h-12 sm:w-12 ${isOpen ? "border-accent text-accent shadow-glow" : "border-line text-muted"}`}>
                    <BriefcaseBusiness aria-hidden className="h-4 w-4" />
                  </span>
                  <div className="panel-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent">{item.period}</span>
                        <strong className="mt-2 block text-lg font-black tracking-[-0.025em] text-ink sm:text-xl">{item.role}</strong>
                        <span className="mt-1 block text-sm font-bold text-muted">{item.organization}</span>
                        <span className="mt-3 block max-w-3xl text-sm leading-6 text-muted">{item.summary}</span>
                      </span>
                      <ChevronDown aria-hidden className={`mt-1 h-4 w-4 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180 text-accent" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-5 py-5 sm:px-6">
                            <ul className="space-y-2">
                              {item.details.map((detail) => (
                                <li key={detail} className="flex gap-3 text-sm leading-6 text-muted">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-1.5">
                              {item.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
