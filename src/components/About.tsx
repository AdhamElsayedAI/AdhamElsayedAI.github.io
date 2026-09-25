import { SectionHeading } from "./SectionHeading";

const pipeline = ["Data / evidence", "Retrieval / models", "Evaluation", "APIs", "Deployment", "Product experience"];
const principles = ["Show the evidence", "Measure behavior", "Expose useful failure states", "Fail safely when support is insufficient"];

export function About() {
  return (
    <section id="about" className="section-shell cin-about-section">
      <div className="site-container">
        <SectionHeading number="05" eyebrow="ABOUT / ENGINEERING PHILOSOPHY" title="Beyond the model." />
        <div className="cin-about-grid">
          <div className="cin-about-statement"><p>I am a final-year Artificial Intelligence Engineering student at Mansoura University.</p><p>My focus is building complete AI systems — not isolated model demos.</p></div>
          <div className="cin-about-note"><span>ENGINEERING POSITION</span><p>I am especially interested in systems that can show what they used, quantify how they behave, and withhold an answer when the evidence is insufficient.</p></div>
        </div>
        <div className="cin-system-loop" aria-label="End-to-end AI engineering workflow">{pipeline.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}</div>
        <div className="cin-principles">{principles.map((principle, index) => <article key={principle}><span>0{index + 1}</span><h3>{principle}</h3></article>)}</div>
      </div>
    </section>
  );
}
