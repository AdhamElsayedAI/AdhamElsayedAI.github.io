"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/data/profile";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const adhamX = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -90, 0]);
  const elsayedX = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 90, 0]);
  return (
    <footer id="footer" ref={ref} className="cin-footer">
      <div className="cin-footer-meta"><span>09 — CLOSING FRAME</span><a href={profile.cv} download>Resume <Download size={14} /></a></div>
      <div className="cin-footer-name" aria-label="Adham Elsayed"><motion.span style={{ x: adhamX }}>ADHAM</motion.span><motion.span className="outline" style={{ x: elsayedX }}>ELSAYED</motion.span></div>
      <div className="cin-footer-bottom"><p>AI Engineer · Mansoura, Egypt</p><p>© 2026 · Evidence before output. Metrics before claims.</p></div>
    </footer>
  );
}
