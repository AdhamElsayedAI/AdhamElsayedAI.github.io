import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  action,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal className="ref-section-heading">
      <div className="max-w-3xl">
        <p className="ref-section-kicker"><span className="ref-section-number">{number}</span>{eyebrow}</p>
        <h2 className="section-title mt-3 text-balance">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
