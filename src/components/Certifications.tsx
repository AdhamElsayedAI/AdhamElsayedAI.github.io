"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

const filters = ["Selected", "All", "GenAI", "AI / ML", "Data", "Programs"] as const;

export function Certifications() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Selected");
  const reduced = useReducedMotion();
  const visible = useMemo(() => filter === "Selected" ? certifications.filter((item) => item.featured) : filter === "All" ? certifications : certifications.filter((item) => item.category === filter), [filter]);
  return (
    <section id="certifications" className="section-shell cin-credentials-section">
      <div className="site-container">
        <SectionHeading number="07" eyebrow="SELECTED CREDENTIALS" title="Supporting evidence, kept in proportion." description="Focused learning that supports the engineering work. Selected credentials appear first; the full set is available by category." />
        <div className="cin-filter-row" role="group" aria-label="Filter credentials">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
        <motion.div layout className="cin-credential-list">
          <AnimatePresence mode="popLayout">
            {visible.map((certificate, index) => (
              <motion.article layout key={`${certificate.title}-${certificate.issuer}`} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -12 }} transition={{ duration: .3, delay: reduced ? 0 : index * .025 }}>
                <span className="cin-credential-number">{String(index + 1).padStart(2, "0")}</span>
                <div><p>{certificate.issuer}</p><h3>{certificate.title}</h3></div>
                <div className="cin-credential-meta"><span>{certificate.category}</span>{certificate.year ? <time>{certificate.year}</time> : null}</div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
