"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [work, ...programs] = experience;
  return (
    <section id="experience" className="section-shell cin-experience-section">
      <div className="site-container">
        <SectionHeading number="03" eyebrow="EXPERIENCE" title="Work is work. Training is training." description="A clear separation between professional delivery, structured training, programs and hackathon participation — each with concrete scope." />
        <div className="cin-experience-layout">
          <motion.article className="cin-work-feature" initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true, amount: .35 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="cin-type-label" data-type="work">INTERNSHIP / WORK</div>
            <div className="cin-work-number" aria-hidden>1,470</div>
            <p className="cin-work-period">{work.period}</p>
            <h3>{work.role}</h3><strong>{work.organization}</strong>
            <p>{work.summary}</p>
            <ul>{work.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="cin-experience-tags">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </motion.article>
          <div className="cin-program-list">
            {programs.map((item, index) => (
              <motion.article key={item.organization + item.period} initial={{ x: 36, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .62, delay: index * .05, ease: [0.22, 1, 0.36, 1] }}>
                <div className="cin-program-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="cin-program-copy">
                  <div className="cin-program-top"><span className="cin-type-label" data-type={item.type.toLowerCase()}>{item.type}</span><time>{item.period}</time></div>
                  <h3>{item.role}</h3><strong>{item.organization}</strong>
                  <p>{item.summary}</p>
                  <span className="cin-location"><MapPin size={13} /> {item.location}</span>
                  <div className="cin-experience-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
