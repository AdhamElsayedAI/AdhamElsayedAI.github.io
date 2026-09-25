"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, ChartNoAxesCombined, Database, Eye, Network, ServerCog } from "lucide-react";
import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

const icons = [BrainCircuit, Network, Eye, ServerCog, Database, ChartNoAxesCombined];

function CapabilityVisual({ index, skills }: { index: number; skills: string[] }) {
  const Icon = icons[index] ?? BrainCircuit;
  return (
    <div className="ux-capability-visual" aria-hidden>
      <div className="ux-capability-grid" />
      <div className="ux-capability-core"><Icon size={30} /><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="ux-capability-orbit">
        {skills.slice(0, 6).map((skill, skillIndex) => (
          <span key={skill} style={{ "--i": skillIndex } as React.CSSProperties}>{skill}</span>
        ))}
      </div>
      <div className="ux-capability-signal"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

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
              initial={reduced ? false : { opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: .38, ease: [0.22, 1, 0.36, 1] }}
              className="ux-skill-layout"
            >
              <div className="ux-skill-copy">
                <span>{String(activeIndex + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}</span>
                <h3>{active.name}</h3>
                <p>{active.description}</p>
                <div className="ux-skill-proof">
                  <b>{active.skills.length}</b>
                  <span>tools / methods in this capability</span>
                </div>
              </div>

              <CapabilityVisual index={activeIndex} skills={active.skills} />

              <div className="ux-skill-cloud">
                {active.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduced ? 0 : .06 + index * .025 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
