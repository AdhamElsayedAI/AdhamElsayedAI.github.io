"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

const filters = ["All", "GenAI", "AI / ML", "Data", "Programs"] as const;

function IssuerLogo({ domain, initials, issuer }: { domain?: string; initials: string; issuer: string }) {
  const [failed, setFailed] = useState(false);

  if (!domain || failed) {
    return <span className="issuer-logo-fallback" aria-label={`${issuer} logo fallback`}>{initials}</span>;
  }

  return (
    <span className="issuer-logo-wrap">
      <img
        src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`}
        alt={`${issuer} logo`}
        className="issuer-logo-image"
        loading="lazy"
        onError={() => setFailed(true)}
      />
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
              <div className="flex items-start justify-between gap-4">
                <IssuerLogo domain={certificate.issuerDomain} initials={certificate.initials} issuer={certificate.issuer} />
                <Award aria-hidden className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mt-6 text-[15px] font-extrabold leading-6 text-ink">{certificate.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted">{certificate.issuer}</p>
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
