"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const SignalField = dynamic(() => import("./SignalField").then((module) => module.SignalField), { ssr: false });
const roles = ["GROUNDED GENAI", "RAG SYSTEMS", "MACHINE LEARNING", "COMPUTER VISION", "EDGE AI", "AI EVALUATION"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 72]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.96]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -36]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2100);
    return () => window.clearInterval(timer);
  }, [reduced]);

  return (
    <section id="home" ref={sectionRef} className="cin-hero ux-hero">
      <SignalField />
      <div className="cin-hero-grid" aria-hidden />
      <motion.div className="cin-hero-copy" style={{ y: copyY }}>
        <p className="cin-overline"><span /> Final-year AI Engineering · Mansoura, Egypt</p>
        <h1>
          <span className="cin-title-line">ADHAM</span>
          <span className="cin-title-line cin-title-outline">ELSAYED</span>
        </h1>
        <div className="cin-role-line" aria-live="polite">
          <span className="cin-role-label">AI ENGINEER /</span>
          <span className="cin-role-window">
            <AnimatePresence mode="wait" initial={false}>
              <motion.strong
                key={roles[roleIndex]}
                initial={reduced ? false : { y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduced ? undefined : { y: "-105%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {roles[roleIndex]}
              </motion.strong>
            </AnimatePresence>
          </span>
        </div>
        <p className="cin-hero-intro">{profile.intro}</p>
        <div className="cin-hero-actions">
          <a href="#projects" className="cin-button cin-button-primary">Explore work <ArrowDownRight aria-hidden size={17} /></a>
          <a href={profile.cv} download className="cin-button cin-button-quiet"><Download aria-hidden size={16} /> Resume</a>
          <div className="cin-socials" aria-label="Professional links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
      </motion.div>

      <motion.div className="cin-portrait-stage ux-portrait-stage" style={{ y: portraitY, scale: portraitScale }}>
        <div className="cin-portrait-halo" aria-hidden />
        <motion.img
          initial={reduced ? false : { clipPath: "inset(100% 0 0 0)", y: 36 }}
          animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
          transition={{ duration: 1.08, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          src={profile.portrait}
          alt="Adham Elsayed wearing a light gray suit"
          width="1254"
          height="1254"
          fetchPriority="high"
        />
      </motion.div>

      <a href="#projects" className="cin-scroll-cue"><span>Selected work</span><ArrowDownRight aria-hidden size={18} /></a>

      <div className="cin-proof-rail ux-proof-rail" aria-label="Selected engineering evidence">
        <div><small>RECOGNITION</small><strong>2nd Place</strong><span>AI Hackathon Mansoura 2026</span></div>
        <div><small>RETRIEVAL</small><strong>87.50%</strong><span>MedFlow Hit@4</span></div>
        <div><small>EDGE VISION</small><strong>96.89%</strong><span>Smart Basket mAP@0.5</span></div>
        <a href="#projects"><small>SELECTED WORK</small><strong>View systems</strong><ArrowUpRight aria-hidden size={18} /></a>
      </div>
    </section>
  );
}
