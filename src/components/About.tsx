import { ArrowRight, Braces, CheckCircle2, Gauge, Layers3, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pipeline = ["Data / evidence", "Retrieval / models", "Evaluation", "APIs", "Deployment", "Product experience"];
const principles = [
  { title: "Show the evidence", body: "Make the source of an answer inspectable instead of hiding it behind generation.", icon: Layers3 },
  { title: "Measure behavior", body: "Use retrieval and system metrics to evaluate what the pipeline is actually doing.", icon: Gauge },
  { title: "Expose failure states", body: "Design useful caution, abstention and fallback behavior instead of forcing an answer.", icon: Braces },
  { title: "Fail safely", body: "When support is insufficient, stop the system from inventing confidence.", icon: ShieldCheck },
];

export function About() {
  return (
    <section id="about" className="section-shell el-about-section">
      <div className="site-container">
        <SectionHeading number="05" eyebrow="ABOUT" title="Beyond the model." />
        <div className="el-about-editorial">
          <div className="el-about-copy">
            <p className="el-about-lead">Final-year Artificial Intelligence Engineering student at Mansoura University.</p>
            <p>My focus is the complete engineering loop: evidence, models, evaluation, APIs, deployment and the product experience around them.</p>
            <blockquote>Build systems that can show what they used, quantify how they behave and withhold an answer when the evidence is insufficient.</blockquote>
          </div>
          <figure className="el-loop-diagram" aria-label="AI system loop: evidence to product">
            <figcaption>ENGINEERING LOOP / EVIDENCE TO PRODUCT</figcaption>
            <div><strong>Traceable</strong><span>Evidence lineage and source context</span></div>
            <div><strong>Measurable</strong><span>Evaluation tied to system behavior</span></div>
            <div><strong>Deployable</strong><span>APIs, edge runtime and product UX</span></div>
          </figure>
        </div>
        <div className="el-process" aria-label="End-to-end AI engineering workflow">
          {pipeline.map((step, index) => (
            <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < pipeline.length - 1 ? <ArrowRight size={14} aria-hidden /> : <CheckCircle2 size={14} aria-hidden />}</div>
          ))}
        </div>
        <div className="el-principles">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return <article key={principle.title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon size={18} aria-hidden /></div><h3>{principle.title}</h3><p>{principle.body}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
