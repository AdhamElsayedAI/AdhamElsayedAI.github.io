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
    <Reveal className="mb-8 flex flex-col gap-5 md:mb-11 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
          <span>{number}</span>
          <span className="h-px w-9 bg-accent/50" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="section-title text-balance">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
