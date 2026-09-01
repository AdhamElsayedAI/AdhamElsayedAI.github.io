"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Command, Download, Menu, Moon, Sparkles, Sun, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";
import { useTheme } from "./ThemeProvider";

const tones = ["ref-nav-red", "ref-nav-gold", "ref-nav-neon"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [glow, setGlow] = useState(true);
  const [motionOn, setMotionOn] = useState(true);
  const reduced = useReducedMotion();
  const { theme, mounted, toggleTheme } = useTheme();

  useEffect(() => {
    const storedGlow = localStorage.getItem("adham-glow");
    const storedMotion = localStorage.getItem("adham-motion");
    if (storedGlow !== null) setGlow(storedGlow === "true");
    if (storedMotion !== null) setMotionOn(storedMotion === "true");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-off", !motionOn);
  }, [motionOn]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.2, 0.55] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", menuOpen);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("command:open"));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const toggleGlow = () => {
    const next = !glow;
    setGlow(next);
    localStorage.setItem("adham-glow", String(next));
    window.dispatchEvent(new CustomEvent("glow:toggle", { detail: next }));
  };

  const toggleMotion = () => {
    const next = !motionOn;
    setMotionOn(next);
    localStorage.setItem("adham-motion", String(next));
  };

  return (
    <header className="ref-header">
      <div className="ref-header-inner">
        <a href="#home" className="flex min-w-0 items-center gap-2 font-mono text-sm font-semibold tracking-tight text-ink" aria-label="Adham Elsayed home">
          <span className="ref-brand-mark">AE</span>
          <span className="hidden sm:inline">adham.elsayed</span>
        </a>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item, index) => {
            const selected = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={selected ? "page" : undefined}
                className={`ref-nav-link ${selected ? tones[index % tones.length] : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-3">
          <button className="ref-command hidden md:inline-flex" onClick={() => window.dispatchEvent(new CustomEvent("command:open"))} aria-label="Open command palette">
            <Command className="h-3.5 w-3.5" /> <span>Ctrl K</span>
          </button>
          <button className={`icon-button hidden md:grid ${motionOn ? "text-accent" : ""}`} onClick={toggleMotion} aria-label="Toggle motion" title={`Motion ${motionOn ? "on" : "off"}`}>
            <Zap className="h-4 w-4" />
          </button>
          <button className={`icon-button hidden md:grid ${glow ? "text-accent" : ""}`} onClick={toggleGlow} aria-label="Toggle cursor glow" title={`Glow ${glow ? "on" : "off"}`}>
            <Sparkles className="h-4 w-4" />
          </button>
          <button className="icon-button hidden md:grid" onClick={toggleTheme} aria-label="Toggle theme">
            {mounted && theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href={profile.cv} download className="button-primary hidden gap-2 lg:inline-flex">
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <button className="icon-button lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-line bg-surface lg:hidden"
          >
            <nav className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-4 py-4 sm:grid-cols-4">
              {navItems.map((item, index) => {
                const selected = active === item.href.slice(1);
                return (
                  <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`rounded-md px-3 py-2 text-sm ${selected ? tones[index % tones.length] : "text-muted hover:bg-elevated hover:text-ink"}`}>
                    {item.label}
                  </a>
                );
              })}
              <a href={profile.cv} download className="button-primary col-span-2 mt-2 sm:col-span-1"><Download className="h-3.5 w-3.5" /> Resume</a>
              <button className="button-secondary mt-2" onClick={toggleTheme}>Theme</button>
              <button className="button-secondary mt-2" onClick={toggleMotion}>Motion: {motionOn ? "on" : "off"}</button>
              <button className="button-secondary mt-2" onClick={toggleGlow}>Glow: {glow ? "on" : "off"}</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
