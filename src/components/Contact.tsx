import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: "mailto:" + profile.email },
  { icon: Github, label: "GitHub", value: "github.com/AdhamElsayedAI", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/adham-elsayed-", href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location },
];

const focusAreas = ["Generative AI", "RAG Systems", "Computer Vision", "AI Engineering"];

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="site-container">
        <SectionHeading
          number="07"
          eyebrow="Contact"
          title="Let’s build something useful."
          description="Open to AI engineering opportunities, technical collaborations and projects involving Generative AI, RAG, machine learning, computer vision or edge AI."
        />

        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal className="contact-cta contact-cta-pro min-w-0 overflow-hidden p-7 sm:p-10">
            <div className="contact-ambient" aria-hidden="true">
              <span className="contact-beam-motion" />
              <span className="contact-orb contact-orb-cyan" />
              <span className="contact-orb contact-orb-violet" />
              <span className="contact-ring contact-ring-one" />
              <span className="contact-ring contact-ring-two" />
            </div>

            <div className="relative z-[1]">
              <div className="contact-kicker-row">
                <span className="contact-live-dot" aria-hidden="true" />
                <p className="contact-kicker">Start a conversation</p>
              </div>

              <h3 className="contact-cta-title">
                Have an AI problem worth measuring properly?
              </h3>

              <p className="contact-cta-copy">
                Send a short note about the system, role or collaboration. Email is the fastest direct route.
              </p>

              <div className="contact-focus-row" aria-label="Areas of focus">
                {focusAreas.map((item) => (
                  <span key={item} className="contact-focus-pill">{item}</span>
                ))}
              </div>

              <div className="contact-action-row">
                <a href={"mailto:" + profile.email} className="contact-primary-action">
                  <span>Email Adham</span>
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
                <span className="contact-direct-note">Direct channel · Email</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="panel-card contact-links-panel min-w-0 p-5 sm:p-7">
            <div className="space-y-2">
              {links.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="contact-link-icon">
                      <Icon aria-hidden className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="contact-link-label">{label}</span>
                      <span className="contact-link-value">{value}</span>
                    </span>
                    {href ? <ArrowUpRight aria-hidden className="contact-link-arrow h-4 w-4 shrink-0" /> : null}
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="contact-row contact-row-polished group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="contact-row contact-row-polished">{content}</div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
