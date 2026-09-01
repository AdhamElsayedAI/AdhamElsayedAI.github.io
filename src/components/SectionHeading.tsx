import type { CSSProperties, ReactNode } from "react";
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
  const safeId = displayWord.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const viewWidth = Math.max(560, displayWord.length * 102);
  const renderedWidth = Math.min(1120, Math.max(520, displayWord.length * 108));
  const patternId = `dots-${safeId}`;
  const maskId = `mask-${safeId}`;
  const glowId = `glow-${safeId}`;

  return (
    <Reveal className="section-heading-v5" data-tone={tone}>
      <div className="section-dot-banner" aria-hidden="true">
        <svg
          className="section-dot-svg"
          viewBox={`0 0 ${viewWidth} 180`}
          role="presentation"
          focusable="false"
          style={{ maxWidth: `${renderedWidth}px` } as CSSProperties}
        >
          <defs>
            <filter id={glowId} x="-30%" y="-40%" width="160%" height="180%">
              <feGaussianBlur stdDeviation="3.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={viewWidth} height="180">
              <rect width={viewWidth} height="180" fill="black" />
              <text
                x="50%"
                y="51%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="section-svg-mask-text"
              >
                {displayWord}
              </text>
            </mask>

            <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2.85" className="section-svg-dot section-svg-dot-primary">
                <animate attributeName="cy" values="4;2.2;4;5.8;4" dur="2.8s" begin="-0.2s" repeatCount="indefinite" />
                <animate attributeName="r" values="2.85;3.25;2.85" dur="2.4s" begin="-0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="14" cy="4" r="2.55" className="section-svg-dot section-svg-dot-secondary">
                <animate attributeName="cy" values="4;5.6;4;2.5;4" dur="3.15s" begin="-1.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".72;1;.78;.95;.72" dur="2.7s" begin="-.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="4" cy="14" r="2.55" className="section-svg-dot section-svg-dot-tertiary">
                <animate attributeName="cx" values="4;5.5;4;2.7;4" dur="3.35s" begin="-.65s" repeatCount="indefinite" />
                <animate attributeName="r" values="2.45;3.05;2.45" dur="2.95s" begin="-1.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="14" cy="14" r="2.75" className="section-svg-dot section-svg-dot-primary section-svg-dot-soft">
                <animate attributeName="cy" values="14;12.4;14;15.7;14" dur="3.55s" begin="-1.75s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".68;.98;.72;.9;.68" dur="2.6s" begin="-.35s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>

          <text
            x="50%"
            y="51%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="section-svg-silhouette"
          >
            {displayWord}
          </text>

          <g mask={`url(#${maskId})`} filter={`url(#${glowId})`} className="section-svg-dot-field">
            <rect x="0" y="0" width={viewWidth} height="180" fill={`url(#${patternId})`} />
          </g>

          <g mask={`url(#${maskId})`} className="section-svg-scan-layer">
            <rect className="section-svg-scan" x={-220} y="0" width="190" height="180" />
          </g>
        </svg>
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
