import { BrainCircuit, GraduationCap, MapPin, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Sc. Artificial Intelligence Engineering" },
  { icon: BrainCircuit, label: "Department", value: "Artificial Intelligence" },
  { icon: MapPin, label: "Location", value: "Egypt" },
  { icon: Workflow, label: "Approach", value: "Complete AI systems, end to end" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="site-container">
        <SectionHeading
          number="01"
          eyebrow="About"
          title="Engineering AI beyond the model."
          description="I focus on the complete loop: evidence, models, evaluation, APIs, deployment and the product experience around them."
        />

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="panel-card p-6 sm:p-8">
            <span className="eyebrow-badge">Mansoura University</span>
            <h3 className="mt-5 max-w-xl text-2xl font-black leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              Building complete intelligent systems, not isolated demos.
            </h3>
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              I&apos;m a final-year Artificial Intelligence Engineering student at the Faculty of Engineering, Mansoura University. My work spans Generative AI, RAG, computer vision, edge deployment, evaluation, APIs and intelligent applications.
            </p>
            <p className="mt-4 leading-8 text-muted">
              I&apos;m especially interested in systems that can show their evidence, measure their behavior and fail safely when confidence is not enough.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="terminal-card overflow-hidden">
            <div className="terminal-bar">
              <span className="flex gap-1.5" aria-hidden>
                <i className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
                <i className="h-2 w-2 rounded-full bg-[#f7c65c]" />
                <i className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>profile.json</span>
            </div>
            <div className="space-y-4 p-5 sm:p-7">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    <Icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted">{label}</span>
                    <strong className="mt-1 block text-sm text-ink">{value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
