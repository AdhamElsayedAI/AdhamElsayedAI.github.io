import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { heroTags, profile } from "@/data/profile";

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
                Available now
              </span>
              {heroTags.slice(0, 4).map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>

            <h1 className="ref-hero-title">Hi, I&apos;m <span className="ref-name-glow">Adham Elsayed</span></h1>
            <p className="ref-tagline">{profile.intro}</p>

            <div className="ref-inline-terminal">
              <div className="ref-terminal-head">
                <span>~/adham</span>
                <span>AI ENGINEER</span>
              </div>
              <div className="ref-terminal-body">
                <p><span className="ref-prompt">$</span> focus <span className="ref-terminal-gold">Generative AI · RAG · Computer Vision</span></p>
                <p><span className="ref-prompt">$</span> build <span className="text-muted">models → evaluation → APIs → products</span></p>
                <p><span className="ref-prompt">$</span> latest <span className="ref-terminal-red">2nd Place · Mansoura AI Hackathon 2026</span></p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#projects" className="button-primary w-full sm:w-auto">View Projects <ArrowRight className="h-4 w-4" /></a>
                <a href="#contact" className="button-secondary w-full sm:w-auto">Contact Me</a>
              </div>
              <div className="flex items-center gap-2">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Github className="h-4 w-4" /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Linkedin className="h-4 w-4" /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="ref-portrait-wrap">
            <div aria-hidden className="ref-portrait-glow" />
            <div className="ref-portrait-stage" aria-label="Animated 3D frame around Adham Elsayed's original portrait">
              <span aria-hidden className="portrait-orbit portrait-orbit-one" />
              <span aria-hidden className="portrait-orbit portrait-orbit-two" />
              <span aria-hidden className="ref-portrait-corner tl" />
              <span aria-hidden className="ref-portrait-corner tr" />
              <span aria-hidden className="ref-portrait-corner br" />
              <span aria-hidden className="ref-portrait-corner bl" />
              <div className="ref-portrait-tilt">
                <div className="ref-portrait">
                  <img src={profile.portrait} alt="Adham Elsayed in his original light gray suit portrait" width="1254" height="1254" fetchPriority="high" />
                </div>
              </div>
              <span aria-hidden className="portrait-frame-label">Original portrait · alpha cutout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
