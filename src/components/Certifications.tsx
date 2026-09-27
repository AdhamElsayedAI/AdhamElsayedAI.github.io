import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  const selected = certifications.filter((item) => item.featured);
  const additional = certifications.filter((item) => !item.featured);
  return (
    <section id="certifications" className="section-shell el-credentials-section">
      <div className="site-container">
        <SectionHeading number="06" eyebrow="CREDENTIALS" title="Supporting evidence, not the headline." description="Selected learning relevant to the systems above, followed by a compact record of additional training." />
        <div className="el-credential-ledger">
          {selected.map((certificate, index) => (
            <article key={`${certificate.title}-${certificate.issuer}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{certificate.issuer}</p><h3>{certificate.title}</h3></div>
              <div><Award size={16} aria-hidden /><span>{certificate.category}</span>{certificate.year ? <time>{certificate.year}</time> : null}</div>
            </article>
          ))}
        </div>
        <details className="el-additional-training">
          <summary>Additional work &amp; training <span>{additional.length} records</span></summary>
          <div>{additional.map((certificate) => <article key={`${certificate.title}-${certificate.issuer}`}><span>{certificate.category}</span><strong>{certificate.title}</strong><p>{certificate.issuer}{certificate.year ? ` · ${certificate.year}` : ""}</p></article>)}</div>
        </details>
      </div>
    </section>
  );
}
