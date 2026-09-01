"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { certifications, type Certification } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

const filters = ["All", "GenAI", "AI / ML", "Data", "Programs"] as const;

function IssuerBrand({ brand, initials, issuer }: Pick<Certification, "brand" | "initials" | "issuer">) {
  return (
    <span className={`issuer-brand issuer-brand-${brand}`} role="img" aria-label={`${issuer} source mark`}>
      {brand === "microsoft" ? (
        <span className="issuer-microsoft-grid" aria-hidden>
          <i /><i /><i /><i />
        </span>
      ) : (
        <span className="issuer-brand-symbol" aria-hidden>{initials}</span>
      )}
    </span>
  );
}

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
          description="Professional learning across Generative AI, machine learning, data and engineering programs."
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
          {visible.map((certificate, index) => (
            <motion.article
              layout
              key={`${certificate.title}-${certificate.issuer}`}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: reduced ? 0 : index * 0.025 }}
              className="cert-card group"
            >
              <div className="issuer-identity">
                <IssuerBrand brand={certificate.brand} initials={certificate.initials} issuer={certificate.issuer} />
                <span className="min-w-0 flex-1">
                  <span className="issuer-source-label">Issued by</span>
                  <strong className="issuer-source-name">{certificate.issuer}</strong>
                </span>
                <BadgeCheck aria-label="Verified source identity" className="h-4 w-4 shrink-0 text-accent" />
              </div>
              <h3 className="mt-5 text-[15px] font-extrabold leading-6 text-ink">{certificate.title}</h3>
              <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-muted">{certificate.category}</span>
                {certificate.year ? <span className="font-mono text-[9px] text-accent">{certificate.year}</span> : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
