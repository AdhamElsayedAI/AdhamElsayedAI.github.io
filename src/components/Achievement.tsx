import { ArrowUpRight, Trophy } from "lucide-react";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { SectionHeading } from "./SectionHeading";

export function Achievement() {
  return (
    <section id="achievements" className="section-shell el-recognition-section">
      <div className="site-container">
        <SectionHeading number="02" eyebrow="RECOGNITION" title="A team result, stated precisely." description="Team MedFlow earned 2nd Place at AI Hackathon Mansoura 2026." />
        <div className="el-recognition-grid">
          <figure>
            <img src={assetPath("/images/medflow/team-photo.png")} alt="Team MedFlow at CREATIVA Innovation Hubs after the Mansoura AI Hackathon" width="1400" height="900" loading="lazy" />
            <figcaption>Team MedFlow · Mansoura AI Hackathon 2026</figcaption>
          </figure>
          <div className="el-recognition-copy">
            <span><Trophy size={16} /> AI HACKATHON MANSOURA 2026</span>
            <strong>2nd</strong>
            <h3>Place · Team MedFlow</h3>
            <p>Orange Digital Center Egypt × CREATIVA Innovation Hubs</p>
            <p>Recognition for the evidence-grounded clinical AI system documented in the flagship case study.</p>
            <Link href="/projects/medflow/" className="el-button el-button-primary">Read the case study <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
