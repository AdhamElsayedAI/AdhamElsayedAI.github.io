"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduced = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", menuOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-locked");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav aria-label="Primary navigation" className="nav-shell mx-auto flex max-w-[1380px] items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5" aria-label="Adham Elsayed, home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent-soft font-mono text-xs font-black text-accent transition-transform group-hover:-rotate-3">
            AE
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="block text-[13px] font-extrabold tracking-[-0.02em] text-ink">Adham Elsayed</strong>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">AI Engineer</span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <a className="icon-button hidden sm:grid" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github aria-hidden className="h-4 w-4" />
          </a>
          <a className="icon-button hidden sm:grid" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin aria-hidden className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <a href={profile.cv} download className="button-primary hidden min-h-9 px-3 text-xs md:inline-flex">
            <Download aria-hidden className="h-3.5 w-3.5" />
            CV
          </a>
          <button
            type="button"
            className="icon-button xl:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden className="h-4 w-4" /> : <Menu aria-hidden className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={reduced ? false : { opacity: 0, y: -12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.2 }}
            className="nav-shell mx-auto mt-2 max-w-[1380px] p-3 xl:hidden"
          >
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                    active === item.href.slice(1) ? "bg-accent-soft text-accent" : "text-muted hover:bg-elevated hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 border-t border-line pt-3 sm:hidden">
              <a className="button-secondary flex-1 text-xs" href={profile.github} target="_blank" rel="noreferrer">
                <Github aria-hidden className="h-4 w-4" /> GitHub
              </a>
              <a className="button-secondary flex-1 text-xs" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden className="h-4 w-4" /> LinkedIn
              </a>
              <a className="button-primary flex-1 text-xs" href={profile.cv} download>
                <Download aria-hidden className="h-4 w-4" /> CV
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
