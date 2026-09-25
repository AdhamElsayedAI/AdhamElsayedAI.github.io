import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell cin-contact-section">
      <div className="site-container">
        <SectionHeading number="08" eyebrow="CONTACT" title="Bring me the hard system problem." description="Open to AI engineering opportunities and collaborations spanning grounded GenAI, evaluation, computer vision and edge AI." />
        <div className="cin-contact-grid">
          <a className="cin-contact-primary" href={`mailto:${profile.email}`}><span>START A CONVERSATION</span><strong>{profile.email}</strong><ArrowUpRight size={28} /></a>
          <div className="cin-contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span><ArrowUpRight size={16} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span><ArrowUpRight size={16} /></a>
            <a href={`mailto:${profile.email}`}><Mail size={18} /><span>Email</span><ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
