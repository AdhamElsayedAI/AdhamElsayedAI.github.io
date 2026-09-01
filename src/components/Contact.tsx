import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", value: "github.com/AdhamElsayedAI", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/adham-elsayed-", href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="site-container">
        <SectionHeading
          number="07"
          eyebrow="Contact"
          title="Let’s build something useful."
          description="Open to AI engineering opportunities, technical collaborations and projects involving Generative AI, RAG, computer vision or edge AI."
        />

        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal className="contact-cta min-w-0 overflow-hidden p-7 sm:p-10">
            <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div aria-hidden className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />
            <div className="relative">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#9bf0c5]">Start a conversation</p>
              <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                Have an AI problem worth measuring properly?
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-white/70">
                Send a short note about the system, role or collaboration. Email is the fastest direct route.
              </p>
              <a href={`mailto:${profile.email}`} className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-[#07110d] transition-transform hover:-translate-y-0.5">
                Email Adham <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="panel-card min-w-0 p-5 sm:p-7">
            <div className="space-y-2">
              {links.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-elevated text-accent">
                      <Icon aria-hidden className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">{label}</span>
                      <span className="mt-1 block break-words text-sm font-bold text-ink">{value}</span>
                    </span>
                    {href ? <ArrowUpRight aria-hidden className="h-4 w-4 shrink-0 text-muted" /> : null}
                  </>
                );

                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-row group">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="contact-row">{content}</div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
