import { ArrowUpRight, Medal, Trophy, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Achievement() {
  return (
    <section id="achievements" className="section-shell section-tint">
      <div className="site-container">
        <SectionHeading
          number="04"
          eyebrow="Achievement"
          title="2nd Place · Mansoura AI Hackathon 2026"
          description="A team achievement for MedFlow, an evidence-grounded clinical AI prototype built around retrieval quality, traceable citations and safety-aware behavior."
        />

        <Reveal className="achievement-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[280px] overflow-hidden border-b border-line lg:min-h-[430px] lg:border-b-0 lg:border-r">
              <img
                src="/images/medflow/team-photo.png"
                alt="The MedFlow team at the Mansoura AI Hackathon"
                className="absolute inset-0 h-full w-full object-cover"
                width="1400"
                height="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06100c]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-7 sm:bottom-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur">
                  <Users aria-hidden className="h-3 w-3" /> Team Project
                </span>
              </div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div aria-hidden className="absolute right-5 top-5 font-mono text-7xl font-black text-warm/[0.06] sm:text-9xl">02</div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-warm/30 bg-warm/10 text-warm">
                    <Trophy aria-hidden className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Placement</span>
                    <strong className="block text-xl font-black text-warm">2nd Place</strong>
                  </span>
                </div>

                <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Mansoura AI Hackathon 2026</p>
                <h3 className="mt-2 text-3xl font-black leading-tight tracking-[-0.05em] text-ink sm:text-4xl">MedFlow — Evidence-Grounded Clinical AI</h3>
                <p className="mt-5 max-w-2xl leading-8 text-muted">
                  The team developed a clinical AI prototype that connects hybrid retrieval, evidence sufficiency checks, grounded generation, citation resolution and safety validation into one auditable workflow.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Users, label: "Type", value: "Team Project" },
                    { icon: Medal, label: "Project", value: "MedFlow" },
                    { icon: Trophy, label: "Result", value: "2nd Place" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-xl border border-line bg-elevated p-4">
                      <Icon aria-hidden className="h-4 w-4 text-accent" />
                      <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">{label}</span>
                      <strong className="mt-1 block text-sm text-ink">{value}</strong>
                    </div>
                  ))}
                </div>

                <a href="https://github.com/AdhamElsayedAI/MedFlow-AI" target="_blank" rel="noreferrer" className="button-secondary mt-7">
                  View the team project <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
