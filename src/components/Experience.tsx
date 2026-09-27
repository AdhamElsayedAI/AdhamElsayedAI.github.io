import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell el-experience-section">
      <div className="site-container">
        <SectionHeading number="05" eyebrow="EXPERIENCE" title="Work and applied training." description="Professional delivery, programs and technical training are separated clearly so the scope of each experience remains credible." />
        <div className="el-experience-ledger">
          {experience.map((item, index) => (
            <article key={item.organization + item.period} className={index === 0 ? "is-primary" : ""}>
              <div className="el-experience-index"><span>{String(index + 1).padStart(2, "0")}</span><span>{item.type}</span><time>{item.period}</time></div>
              <div className="el-experience-body">
                <p>{item.organization}</p><h3>{item.role}</h3><p>{item.summary}</p>
                {index === 0 ? <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
              </div>
              <div className="el-experience-side"><span><MapPin size={13} /> {item.location}</span><div>{item.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
