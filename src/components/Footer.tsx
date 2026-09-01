import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="site-container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-extrabold text-ink">Adham Elsayed <span className="text-accent">·</span> AI Engineer</p>
          <p className="mt-1 text-xs text-muted">© 2026 · Built for clarity, evidence and real systems.</p>
        </div>
        <div className="flex items-center gap-2">
          <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github aria-hidden className="h-4 w-4" /></a>
          <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin aria-hidden className="h-4 w-4" /></a>
          <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email Adham Elsayed"><Mail aria-hidden className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
