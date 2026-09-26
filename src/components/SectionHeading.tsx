import type { ReactNode } from "react";

export function SectionHeading({ number, eyebrow, title, description, action }: { number: string; eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <header className="el-section-heading">
      <div className="el-section-meta"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      <div className="el-section-support">{description ? <p>{description}</p> : <span />}{action}</div>
    </header>
  );
}
