import { SectionHeading } from "./SectionHeading";

const pipeline = ["Data / evidence", "Retrieval / models", "Evaluation", "APIs", "Deployment", "Product experience"];
const principles = [
  { title: "Show the evidence", body: "Make the source of an answer inspectable instead of hiding it behind generation." },
  { title: "Measure behavior", body: "Use retrieval and system metrics to evaluate what the pipeline is actually doing." },
  { title: "Expose failure states", body: "Design useful caution, abstention and fallback behavior instead of forcing an answer." },
  { title: "Fail safely", body: "When support is insufficient, stop the system from inventing confidence." },
];

export function About() {
  return (
    <section id="about" className="section-shell cin-about-section ux-about-section">
      <div className="site-container">
        <SectionHeading number="05" eyebrow="ABOUT" title="Beyond the model." />

        <div className="ux-about-intro">
          <div>
            <p className="ux-about-lead">I am a final-year Artificial Intelligence Engineering student at Mansoura University.</p>
            <p>My focus is building complete AI systems — not isolated model demos — across retrieval, evaluation, APIs, deployment and product experience.</p>
          </div>
          <blockquote>
            I am especially interested in systems that can show what they used, quantify how they behave, and withhold an answer when the evidence is insufficient.
          </blockquote>
        </div>

        <div className="ux-process" aria-label="End-to-end AI engineering workflow">
          {pipeline.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>

        <div className="ux-principles">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
