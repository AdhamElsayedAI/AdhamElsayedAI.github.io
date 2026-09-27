import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell el-skills-section">
      <div className="site-container">
        <SectionHeading number="04" eyebrow="CAPABILITIES" title="Capabilities tied to shipped systems." description="Tools are grouped by the engineering job they perform—not by logo familiarity or self-scored proficiency." />
        <div className="el-capability-ledger">
          {skillGroups.map((group, index) => (
            <article key={group.name}>
              <div className="el-capability-heading"><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.name}</h3></div>
              <p>{group.description}</p>
              <div className="el-capability-evidence"><span>PROJECT EVIDENCE</span><strong>{group.evidence}</strong></div>
              <div className="el-capability-stack">{group.skills.map((skill) => <b key={skill}>{skill}</b>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
