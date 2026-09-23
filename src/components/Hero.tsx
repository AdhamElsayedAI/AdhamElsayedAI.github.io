import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { heroTags, profile, stats } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="ref-hero-section">
      <div className="ref-hero-panel">
        <div aria-hidden className="ref-hero-gradient" />
        <div aria-hidden className="ref-dot-grid" />
        <div className="ref-hero-grid">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="ref-availability">
                <span className="relative grid h-2 w-2 place-items-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-cyan/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                </span>
                Final-year AI Engineering · Mansoura University
              </span>
              {heroTags.slice(0, 4).map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>

            <p className="hero-role-v4">AI ENGINEER · GROUNDED GENAI · ML · COMPUTER VISION</p>
            <h1 className="ref-hero-title">Adham <span className="ref-name-glow">Elsayed</span></h1>
            <p className="ref-tagline">{profile.intro}</p>

            <div className="hero-proof-grid-v4" aria-label="Selected engineering proof">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-proof-card-v4">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <small>{stat.context}</small>
                </div>
              ))}
            </div>

            <div className="ref-inline-terminal recruiter-terminal-v4">
              <div className="ref-terminal-head">
                <span>engineering.signal</span>
                <span>BUILD → MEASURE → VERIFY → DEPLOY</span>
              </div>
              <div className="ref-terminal-body">
                <p><span className="ref-prompt">$</span> systems <span className="ref-terminal-gold">grounded RAG · adaptive learning · edge vision</span></p>
                <p><span className="ref-prompt">$</span> principle <span className="text-muted">evidence before output · metrics before claims</span></p>
                <p><span className="ref-prompt">$</span> recognition <span className="ref-terminal-red">2nd Place · Mansoura AI Hackathon 2026</span></p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#projects" className="button-primary w-full sm:w-auto">Explore Selected Work <ArrowRight className="h-4 w-4" /></a>
                <a href={profile.cv} download className="button-secondary w-full sm:w-auto"><Download className="h-4 w-4" /> Resume</a>
              </div>
              <div className="flex items-center gap-2">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Github className="h-4 w-4" /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Linkedin className="h-4 w-4" /></a>
                <a href={"mailto:" + profile.email} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="ref-portrait-wrap">
            <div aria-hidden className="portrait-soft-glow-v7" />
            <div className="portrait-frame-soft-v7" aria-label="Adham Elsayed portrait">
              <span aria-hidden className="portrait-frame-line-v7" />
              <span aria-hidden className="portrait-frame-corner-v7 portrait-frame-corner-tl-v7" />
              <span aria-hidden className="portrait-frame-corner-v7 portrait-frame-corner-br-v7" />
              <div className="portrait-photo-clean-v7">
                <img src={profile.portrait} alt="Adham Elsayed in a light gray suit" width="1254" height="1254" fetchPriority="high" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
