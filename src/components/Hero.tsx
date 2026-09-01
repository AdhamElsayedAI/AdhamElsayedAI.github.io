import { ArrowDownRight, Download, Github, Linkedin, Mail, Trophy } from "lucide-react";
import { heroTags, profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-28 sm:pt-32 lg:min-h-screen lg:pb-20 lg:pt-40">
      <div aria-hidden className="absolute inset-0 -z-20 bg-hero-grid bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div aria-hidden className="hero-orb -left-28 top-24 h-80 w-80 bg-accent/15" />
      <div aria-hidden className="hero-orb -right-24 top-10 h-[28rem] w-[28rem] bg-cyan/10" />

      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
        <div className="relative z-10">
          <Reveal>
            <div className="status-pill">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              AI Engineer · Open to opportunities
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.23em] text-muted">Hello, I&apos;m</p>
            <h1 className="hero-title">Adham Elsayed</h1>
            <p className="mt-4 text-lg font-bold tracking-[-0.025em] text-accent sm:text-xl lg:text-2xl">
              AI Engineer <span className="text-muted">|</span> Generative AI · RAG · Computer Vision
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{profile.intro}</p>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View my work <ArrowDownRight aria-hidden className="h-4 w-4" />
            </a>
            <a href={profile.cv} download className="button-secondary">
              <Download aria-hidden className="h-4 w-4" /> Download CV
            </a>
          </Reveal>

          <Reveal delay={0.24} className="mt-5 flex items-center gap-2">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Connect</span>
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github aria-hidden className="h-4 w-4" />
            </a>
            <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin aria-hidden className="h-4 w-4" />
            </a>
            <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email Adham Elsayed">
              <Mail aria-hidden className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={0.28} className="mt-7 flex max-w-2xl flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </Reveal>

          <Reveal delay={0.32} className="terminal-card mt-8 max-w-2xl">
            <div className="terminal-bar">
              <span className="flex gap-1.5" aria-hidden>
                <i className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
                <i className="h-2 w-2 rounded-full bg-[#f7c65c]" />
                <i className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>adham@portfolio:~</span>
            </div>
            <div className="grid gap-2.5 p-4 font-mono text-[11px] sm:grid-cols-2 sm:text-xs">
              <p><span className="text-accent">$</span> focus <span className="text-muted">GenAI · Retrieval · Vision</span></p>
              <p><span className="text-accent">$</span> principle <span className="text-muted">Build · Measure · Verify</span></p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[570px] lg:max-w-none">
          <div className="portrait-stage">
            <div aria-hidden className="portrait-ring portrait-ring-one" />
            <div aria-hidden className="portrait-ring portrait-ring-two" />
            <div aria-hidden className="portrait-dots" />

            <div className="portrait-card">
              <div className="portrait-corner portrait-corner-tl" aria-hidden />
              <div className="portrait-corner portrait-corner-br" aria-hidden />
              <img
                src={profile.portrait}
                alt="Adham Elsayed in his original light gray suit portrait"
                className="h-full w-full object-contain object-bottom"
                width="1254"
                height="1254"
                fetchPriority="high"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[#07110d]/80 p-4 text-white shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#70e5ae]">Current focus</p>
                <p className="mt-1 text-sm font-bold sm:text-base">Evidence-grounded AI systems</p>
              </div>
            </div>

            <a
              href="#achievements"
              className="award-float"
              aria-label="View Mansoura AI Hackathon achievement"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-warm/15 text-warm">
                <Trophy aria-hidden className="h-4 w-4" />
              </span>
              <span>
                <strong className="block text-sm text-ink">2nd Place</strong>
                <small className="text-[10px] leading-tight text-muted">Mansoura AI Hackathon 2026</small>
              </span>
            </a>

            <div className="tech-float tech-float-left">RAG</div>
            <div className="tech-float tech-float-right">Computer Vision</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
