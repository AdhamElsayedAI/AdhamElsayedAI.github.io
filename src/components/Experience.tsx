"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

const tones = ["cyan", "violet", "gold"] as const;

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="section-shell experience-section-v5">
      <div className="site-container">
        <SectionHeading
          number="05"
          eyebrow="Experience"
          title="Training and applied AI experience."
          description="Relevant technical programs, hackathon work and hands-on engineering experience — kept distinct from project ownership or employment claims."
        />

        <div className="experience-timeline-v5">
          <span className="experience-line-v5" aria-hidden />
          {experience.map((item, index) => {
            const isOpen = openIndex === index;
            const tone = tones[index % tones.length];
            return (
              <article key={`${item.organization}-${item.period}`} className="experience-row-v5" data-tone={tone}>
                <div className="experience-marker-v5" aria-hidden>
                  <span />
                </div>

                <div className="experience-card-v5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="experience-card-head-v5"
                  >
                    <div className="experience-period-v5">{item.period}</div>

                    <div className="experience-main-v5">
                      <div className="experience-title-row-v5">
                        <h3>{item.role}</h3>
                        <span className="experience-type-v5">{index === 0 ? "AI / HACKATHON" : index === 1 ? "AI / ML" : "ROBOTICS"}</span>
                      </div>
                      <div className="experience-meta-v5">
                        <strong>{item.organization}</strong>
                        <span><MapPin className="h-3.5 w-3.5" /> Egypt</span>
                      </div>
                      <p>{item.summary}</p>
                    </div>

                    <ChevronDown aria-hidden className={`experience-chevron-v5 ${isOpen ? "open" : ""}`} />
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
                        <div className="experience-card-details-v5">
                          <ul>
                            {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                          </ul>
                          <div className="experience-tags-v5">
                            {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
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
    </section>
  );
}
