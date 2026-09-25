"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { useRef } from "react";
import { assetPath } from "@/lib/assetPath";
import { SectionHeading } from "./SectionHeading";

export function Achievement() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -45, reduced ? 0 : 45]);
  return (
    <section id="achievements" ref={ref} className="section-shell cin-recognition-section">
      <div className="site-container"><SectionHeading number="04" eyebrow="RECOGNITION" title="Built together. Recognized together." description="Team MedFlow earned 2nd Place at AI Hackathon Mansoura 2026." /></div>
      <div className="cin-award-stage">
        <motion.img style={{ y: imageY }} src={assetPath("/images/medflow/team-photo.png")} alt="Team MedFlow at CREATIVA Innovation Hubs after the Mansoura AI Hackathon" width="1400" height="900" loading="lazy" />
        <div className="cin-award-shade" />
        <div className="cin-award-type" aria-hidden>02</div>
        <div className="cin-award-copy">
          <span><Trophy size={17} /> AI HACKATHON MANSOURA 2026</span>
          <h3>2nd Place</h3>
          <p>Team MedFlow</p>
          <small>Orange Digital Center Egypt × CREATIVA Innovation Hubs</small>
          <a href="https://github.com/AdhamElsayedAI/MedFlow-AI" target="_blank" rel="noreferrer">View the team project <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
