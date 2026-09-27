"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const evidence = [
  {
    value: "2nd",
    label: "AI Hackathon Mansoura 2026",
    context: "Team MedFlow · Orange Digital Center Egypt × CREATIVA",
  },
  {
    value: "87.50%",
    label: "MedFlow Hit@4",
    context: "200-token chunks · Top-K = 4 · retrieval evaluation",
  },
  {
    value: "96.89%",
    label: "Smart Basket mAP@0.5",
    context: "Four-class YOLO detector · edge deployment pipeline",
  },
] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const enter = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="el-hero">
      <motion.div
        className="el-hero-shell"
        initial={reduced ? undefined : "hidden"}
        animate={reduced ? undefined : "visible"}
        transition={{ staggerChildren: 0.04 }}
      >
        <motion.div className="el-hero-index" variants={enter} transition={{ duration: 0.32 }}>
          <span>PORTFOLIO / 2026</span>
          <span>AI ENGINEERING</span>
          <span>MANSOURA, EGYPT</span>
        </motion.div>

        <div className="el-hero-main">
          <motion.div className="el-hero-copy" variants={enter} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <p className="el-kicker">Evidence-grounded AI systems</p>
            <h1><span>Adham</span><span>Elsayed</span></h1>
            <p className="el-positioning">
              I engineer AI systems that make their evidence, evaluation and failure boundaries visible.
            </p>
            <p className="el-summary">
              Generative AI, retrieval, machine learning and computer vision—built from measured models through APIs, edge deployment and product experience.
            </p>
            <div className="el-hero-actions">
              <a href="#projects" className="el-button el-button-primary">Examine the work <ArrowDownRight aria-hidden size={17} /></a>
              <a href={profile.cv} download className="el-button el-button-secondary"><Download aria-hidden size={16} /> Resume</a>
            </div>
          </motion.div>

          <motion.aside className="el-identity" variants={enter} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} aria-label="Adham Elsayed profile">
            <div className="el-portrait">
              <img src={profile.portrait} alt="Adham Elsayed wearing a light gray suit" width="1254" height="1254" fetchPriority="high" />
              <span aria-hidden>AE / 01</span>
            </div>
            <dl>
              <div><dt>Role</dt><dd>AI Engineer</dd></div>
              <div><dt>Focus</dt><dd>Grounded GenAI · ML · Vision</dd></div>
              <div><dt>Education</dt><dd>B.Sc. AI Engineering · Expected 2027</dd></div>
            </dl>
            <div className="el-socials" aria-label="Professional links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /> Email</a>
            </div>
          </motion.aside>
        </div>

        <motion.div className="el-evidence" variants={enter} transition={{ duration: 0.35 }} aria-label="Selected verified evidence">
          {evidence.map((item, index) => (
            <article key={item.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.value}</strong>
              <h2>{item.label}</h2>
              <p>{item.context}</p>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
