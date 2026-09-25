"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { assetPath } from "@/lib/assetPath";
import { SectionHeading } from "./SectionHeading";

export function Achievement() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -18, reduced ? 0 : 18]);

  return (
    <section id="achievements" ref={ref} className="section-shell cin-recognition-section ux-recognition-section">
      <div className="site-container">
        <SectionHeading
          number="04"
          eyebrow="RECOGNITION"
          title="A real team result."
          description="Team MedFlow earned 2nd Place at AI Hackathon Mansoura 2026."
        />

        <div className="ux-recognition-grid">
          <motion.figure className="ux-recognition-photo" style={{ y: imageY }}>
            <img
              src={assetPath("/images/medflow/team-photo.png")}
              alt="Team MedFlow at CREATIVA Innovation Hubs after the Mansoura AI Hackathon"
              width="1400"
              height="900"
              loading="lazy"
            />
            <figcaption>Team MedFlow · Mansoura AI Hackathon 2026</figcaption>
          </motion.figure>

          <div className="ux-recognition-copy">
            <span className="ux-kicker"><Trophy size={16} /> AI HACKATHON MANSOURA 2026</span>
            <h3>2nd Place</h3>
            <p className="ux-recognition-team">Team MedFlow</p>
            <p>Orange Digital Center Egypt × CREATIVA Innovation Hubs</p>
            <p className="ux-recognition-note">Recognition for the team project behind MedFlow, the evidence-grounded clinical AI system featured above.</p>
            <Link href="/projects/medflow/" className="cin-button cin-button-primary">View MedFlow case study <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
