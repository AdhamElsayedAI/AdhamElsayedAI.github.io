"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [work, ...programs] = experience;
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="section-shell cin-experience-section ux-experience-section">
      <div className="site-container">
        <SectionHeading
          number="03"
          eyebrow="EXPERIENCE"
          title="Work, then the training behind it."
          description="Professional delivery is separated from structured programs and training, so the scope of each experience is immediately clear."
        />

        <motion.article
          className="ux-work-card"
          initial={reduced ? false : { y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ux-work-meta">
            <span className="ux-type-pill">WORK / INTERNSHIP</span>
            <time>{work.period}</time>
          </div>
          <div className="ux-work-main">
            <div>
              <p className="ux-company">{work.organization}</p>
              <h3>{work.role}</h3>
              <p className="ux-work-summary">{work.summary}</p>
              <span className="ux-location"><MapPin size={14} /> {work.location}</span>
            </div>
            <div className="ux-work-evidence">
              <strong>1,470</strong>
              <span>employee records cleaned & validated</span>
            </div>
          </div>
          <div className="ux-work-footer">
            <ul>{work.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="ux-tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </motion.article>

        <div className="ux-programs-header">
          <span>PROGRAMS & TRAINING</span>
          <span>{programs.length} entries</span>
        </div>

        <div className="ux-program-list">
          {programs.map((item, index) => (
            <motion.article
              key={item.organization + item.period}
              initial={reduced ? false : { y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: .25 }}
              transition={{ duration: .5, delay: reduced ? 0 : index * .04, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ux-program-side">
                <span className="ux-program-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="ux-type-pill" data-type={item.type.toLowerCase()}>{item.type}</span>
                <time>{item.period}</time>
              </div>
              <div className="ux-program-body">
                <p className="ux-company">{item.organization}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <span className="ux-location"><MapPin size={13} /> {item.location}</span>
                <div className="ux-tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <ArrowUpRight className="ux-program-arrow" size={18} aria-hidden />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
