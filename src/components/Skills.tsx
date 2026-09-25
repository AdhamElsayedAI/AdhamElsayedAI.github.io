"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = skillGroups[activeIndex];

  return (
    <section id="skills" className="section-shell cin-skills-section ux-skills-section">
      <div className="site-container">
        <SectionHeading
          number="06"
          eyebrow="CAPABILITIES / TECH STACK"
          title="A stack shaped by complete systems."
          description="Tools are grouped by the job they do in the system — retrieval, evaluation, models, services, edge deployment and analysis."
        />

        <div className="ux-skill-tabs" role="tablist" aria-label="Capability categories">
          {skillGroups.map((group, index) => (
            <button key={group.name} role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {group.name}
            </button>
          ))}
        </div>

        <div className="ux-skill-panel" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={reduced ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduced ? undefined : { y: -12, opacity: 0 }}
              transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ux-skill-copy">
                <span>{String(activeIndex + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}</span>
                <h3>{active.name}</h3>
                <p>{active.description}</p>
              </div>
              <div className="ux-skill-cloud">
                {active.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
