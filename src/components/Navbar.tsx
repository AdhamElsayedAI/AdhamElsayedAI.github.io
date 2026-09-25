"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.href.slice(1))).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current?.target.id) setActive(current.target.id);
    }, { rootMargin: "-30% 0px -62% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <motion.div className="cin-scroll-progress" style={{ scaleX: progress }} />
      <header className={`cin-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="cin-nav-inner">
          <a href="#home" className="cin-brand" aria-label="Adham Elsayed, home"><span>AE</span><small>AI ENGINEER</small></a>
          <nav className="cin-nav-links" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} aria-current={active === item.href.slice(1) ? "page" : undefined}>{item.label}</a>)}
          </nav>
          <a className="cin-nav-resume" href={profile.cv} download>Resume <Download aria-hidden size={14} /></a>
          <button className="cin-menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.div className="cin-mobile-menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              <nav aria-label="Mobile navigation">
                {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowUpRight aria-hidden size={18} /></a>)}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
