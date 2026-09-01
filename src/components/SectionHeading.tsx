import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

const toneBySection: Record<string, string> = {
  About: "violet",
  Skills: "lime",
  Projects: "cyan",
  Achievement: "gold",
  Achievements: "gold",
  Experience: "amber",
  Certifications: "blue",
  Contact: "rose",
};

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
  const tone = toneBySection[eyebrow] ?? "cyan";
  const displayWord = eyebrow.toUpperCase();

  return (
    <Reveal className="section-heading-v5" data-tone={tone}>
      <div className="section-dot-banner" aria-hidden="true">
        <span className="section-dot-word" data-text={displayWord}>{displayWord}</span>
        <span className="section-dot-line" />
      </div>

      <div className="section-heading-v5-copy">
        <div className="max-w-3xl">
          <p className="ref-section-kicker">
            <span className="ref-section-number">{number}</span>
            {eyebrow}
          </p>
          <h2 className="section-title mt-3 text-balance">{title}</h2>
          {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
