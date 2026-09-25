"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Braces, CheckCircle2, Gauge, Layers3, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pipeline = ["Data / evidence", "Retrieval / models", "Evaluation", "APIs", "Deployment", "Product experience"];
const principles = [
  { title: "Show the evidence", body: "Make the source of an answer inspectable instead of hiding it behind generation.", icon: Layers3 },
  { title: "Measure behavior", body: "Use retrieval and system metrics to evaluate what the pipeline is actually doing.", icon: Gauge },
  { title: "Expose failure states", body: "Design useful caution, abstention and fallback behavior instead of forcing an answer.", icon: Braces },
  { title: "Fail safely", body: "When support is insufficient, stop the system from inventing confidence.", icon: ShieldCheck },
];

export function About() {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="section-shell cin-about-section ux-about-section">
      <div className="site-container">
        <SectionHeading number="05" eyebrow="ABOUT" title="Beyond the model." />

        <div className="ux-about-editorial">
          <div className="ux-about-intro">
            <div>
              <p className="ux-about-lead">I am a final-year Artificial Intelligence Engineering student at Mansoura University.</p>
              <p>My focus is building complete AI systems — not isolated model demos — across retrieval, evaluation, APIs, deployment and product experience.</p>
            </div>
            <blockquote>
              I am especially interested in systems that can show what they used, quantify how they behave, and withhold an answer when the evidence is insufficient.
            </blockquote>
          </div>

          <motion.div
            className="ux-system-visual"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .35 }}
            transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
            aria-label="AI system loop: evidence to product"
          >
            <div className="ux-system-orbit" aria-hidden>
              <span className="orbit-one" />
              <span className="orbit-two" />
              <span className="orbit-three" />
            </div>
            <div className="ux-system-core">
              <span>ENGINEERING LOOP</span>
              <strong>Evidence → Product</strong>
              <small>Traceable · Measurable · Deployable</small>
            </div>
            <div className="ux-system-stats" aria-hidden>
              <div><b>01</b><span>Ground</span></div>
              <div><b>02</b><span>Measure</span></div>
              <div><b>03</b><span>Ship</span></div>
            </div>
          </motion.div>
        </div>

        <div className="ux-process" aria-label="End-to-end AI engineering workflow">
          {pipeline.map((step, index) => (
            <motion.div
              key={step}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .5 }}
              transition={{ duration: .42, delay: reduced ? 0 : index * .06 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < pipeline.length - 1 ? <ArrowRight size={14} aria-hidden /> : <CheckCircle2 size={14} aria-hidden />}
            </motion.div>
          ))}
        </div>

        <div className="ux-principles">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.article
                key={principle.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .35 }}
                transition={{ duration: .45, delay: reduced ? 0 : index * .05 }}
              >
                <div className="ux-principle-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={18} aria-hidden /></div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
