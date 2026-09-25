"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

const filters = ["Selected", "All", "GenAI", "AI / ML", "Data", "Programs"] as const;

export function Certifications() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Selected");
  const reduced = useReducedMotion();
  const visible = useMemo(
    () => filter === "Selected"
      ? certifications.filter((item) => item.featured)
      : filter === "All"
        ? certifications
        : certifications.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <section id="certifications" className="section-shell cin-credentials-section ux-credentials-section">
      <div className="site-container">
        <SectionHeading
          number="07"
          eyebrow="SELECTED CREDENTIALS"
          title="Supporting evidence, not the headline."
          description="A curated view of the credentials most relevant to the engineering work, with the full set still available by category."
        />

        <div className="ux-filter-row" role="group" aria-label="Filter credentials">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>
          ))}
        </div>

        <motion.div layout className="ux-credential-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((certificate, index) => (
              <motion.article
                layout
                key={`${certificate.title}-${certificate.issuer}`}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: .28, delay: reduced ? 0 : index * .02 }}
              >
                <div className="ux-credential-top">
                  <span className="ux-issuer-mark">{certificate.initials}</span>
                  <Award size={16} aria-hidden />
                </div>
                <p>{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
                <div className="ux-credential-meta">
                  <span>{certificate.category}</span>
                  {certificate.year ? <time>{certificate.year}</time> : <span>Credential</span>}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
