"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = skillGroups[activeIndex];
  return (
    <section id="skills" className="section-shell cin-skills-section">
      <div className="site-container">
        <SectionHeading number="06" eyebrow="CAPABILITIES / TECH STACK" title="A stack shaped by complete systems." description="Categories reflect how the tools contribute to an engineering workflow. No decorative proficiency percentages." />
        <div className="cin-skills-console">
          <div className="cin-skill-nav" role="tablist" aria-label="Capability categories">
            {skillGroups.map((group, index) => <button key={group.name} role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{group.name}</strong><ArrowDownRight size={16} /></button>)}
          </div>
          <div className="cin-skill-stage" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div key={active.name} initial={reduced ? false : { x: 42, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={reduced ? undefined : { x: -42, opacity: 0 }} transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}>
                <span className="cin-skill-count">{String(activeIndex + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}</span>
                <h3>{active.name}</h3><p>{active.description}</p>
                <div className="cin-skill-cloud">{active.skills.map((skill, index) => <motion.span key={skill} initial={reduced ? false : { y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: reduced ? 0 : index * .035 }}>{skill}</motion.span>)}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
