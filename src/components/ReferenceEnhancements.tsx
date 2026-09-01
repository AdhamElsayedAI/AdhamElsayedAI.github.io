"use client";

import { Command, ExternalLink, FileText, Github, Home, Layers3, Linkedin, Mail, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile } from "@/data/profile";

export function ReferenceEnhancements() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [glowOn, setGlowOn] = useState(true);
  const [mouse, setMouse] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const stored = localStorage.getItem("adham-glow");
    if (stored !== null) setGlowOn(stored === "true");

    const open = () => setPaletteOpen(true);
    const glow = (event: Event) => setGlowOn((event as CustomEvent<boolean>).detail);
    const move = (event: MouseEvent) => setMouse({ x: event.clientX, y: event.clientY });
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPaletteOpen(false);
    };

    window.addEventListener("command:open", open);
    window.addEventListener("glow:toggle", glow);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("command:open", open);
      window.removeEventListener("glow:toggle", glow);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("keydown", key);
    };
  }, []);

  const commands = useMemo(
    () => [
      ...navItems.map((item, index) => ({
        label: `Go to ${item.label}`,
        href: item.href,
        icon: index === 0 ? Home : Layers3,
      })),
      { label: "Open GitHub", href: profile.github, icon: Github, external: true },
      { label: "Open LinkedIn", href: profile.linkedin, icon: Linkedin, external: true },
      { label: "Email Adham", href: `mailto:${profile.email}`, icon: Mail, external: true },
      { label: "Download resume", href: profile.cv, icon: FileText, external: true },
    ],
    [],
  );

  const activate = (href: string, external?: boolean) => {
    setPaletteOpen(false);
    if (external) {
      if (href.startsWith("mailto:")) window.location.href = href;
      else window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {glowOn ? <div className="cursor-glow" aria-hidden style={{ left: mouse.x, top: mouse.y }} /> : null}
      {paletteOpen ? (
        <div className="ref-command-backdrop" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(e) => e.target === e.currentTarget && setPaletteOpen(false)}>
          <div className="ref-command-panel">
            <div className="ref-command-title">
              <span className="flex items-center gap-2"><Command className="h-4 w-4 text-accent" /> Quick navigation</span>
              <button onClick={() => setPaletteOpen(false)} aria-label="Close command palette" className="icon-button"><X className="h-4 w-4" /></button>
            </div>
            <div className="ref-command-list">
              {commands.map(({ label, href, icon: Icon, external }) => (
                <button key={`${label}-${href}`} type="button" onClick={() => activate(href, external)} className="ref-command-item">
                  <span className="flex items-center gap-3"><Icon className="h-4 w-4 text-accent" /> {label}</span>
                  {external ? <ExternalLink className="h-3.5 w-3.5" /> : <span className="font-mono text-[10px] text-muted">↵</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
