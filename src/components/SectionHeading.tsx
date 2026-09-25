"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ number, eyebrow, title, description, action }: { number: string; eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <div className="cin-section-heading">
      <motion.div className="cin-section-meta" initial={reduced ? false : { x: -36, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}><span>{number}</span><span className="cin-section-rule" /><span>{eyebrow}</span></motion.div>
      <motion.div className="cin-section-title-wrap" initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <motion.h2 variants={{ hidden: { y: "105%" }, visible: { y: 0 } }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{title}</motion.h2>
      </motion.div>
      <div className="cin-section-support">{description ? <p>{description}</p> : <span />}{action}</div>
    </div>
  );
}
