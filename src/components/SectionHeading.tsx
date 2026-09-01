"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from "react";
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

function resetInteractiveHeading(target: HTMLDivElement) {
  const word = target.querySelector<HTMLElement>(".section-dot-word-interactive");
  if (word) word.style.transform = "";
  target.querySelectorAll<SVGElement>(".section-letter-svg").forEach((letter) => {
    letter.style.transform = "";
  });
}

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
  const renderedWidth = Math.min(1120, Math.max(460, displayWord.length * 88));

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    if (document.documentElement.classList.contains("motion-off")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    const word = target.querySelector<HTMLElement>(".section-dot-word-interactive");
    const letters = Array.from(target.querySelectorAll<SVGElement>(".section-letter-svg"));

    if (word) {
      word.style.transform = `translate3d(${(x * 15).toFixed(2)}px, ${(y * 10).toFixed(2)}px, 0) rotateX(${(-y * 3.2).toFixed(2)}deg) rotateY(${(x * 4.4).toFixed(2)}deg)`;
    }

    const middle = (letters.length - 1) / 2;
    letters.forEach((letter, index) => {
      const spread = index - middle;
      const depth = 4.5 + (index % 4) * 2.1;
      const localX = x * depth + y * spread * 0.42;
      const localY = y * depth * 0.68 + x * Math.sin(index * 1.35) * 1.7;
      const rotate = x * spread * 0.34;
      letter.style.transform = `translate3d(${localX.toFixed(2)}px, ${localY.toFixed(2)}px, ${depth.toFixed(1)}px) rotateZ(${rotate.toFixed(2)}deg)`;
    });
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    resetInteractiveHeading(event.currentTarget);
  };

  return (
    <Reveal className="section-heading-v5" data-tone={tone}>
      <div
        className="section-dot-banner section-dot-banner-interactive"
        aria-hidden="true"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className="section-dot-word-interactive"
          style={{ maxWidth: `${renderedWidth}px`, "--letter-count": displayWord.length } as CSSProperties}
        >
          {displayWord.split("").map((character, index) => {
            const maskId = `mask-${safeId}-${index}`;
            const patternId = `dots-${safeId}-${index}`;
            const glowId = `glow-${safeId}-${index}`;
            const delay = -(index * 0.21);

            return (
              <svg
                key={`${character}-${index}`}
                className="section-letter-svg"
                viewBox="0 0 92 150"
                role="presentation"
                focusable="false"
                style={{ "--letter-index": index } as CSSProperties}
              >
                <defs>
                  <filter id={glowId} x="-45%" y="-45%" width="190%" height="190%">
                    <feGaussianBlur stdDeviation="2.6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="92" height="150">
                    <rect width="92" height="150" fill="black" />
                    <text x="46" y="77" textAnchor="middle" dominantBaseline="middle" className="section-letter-mask-text">
                      {character}
                    </text>
                  </mask>

                  <pattern id={patternId} width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="3.5" cy="3.5" r="2.55" className="section-svg-dot section-svg-dot-primary">
                      <animate attributeName="cy" values="3.5;1.7;3.5;5.1;3.5" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" />
                      <animate attributeName="r" values="2.35;2.9;2.35" dur="2.1s" begin={`${delay - 0.35}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="11.8" cy="3.5" r="2.35" className="section-svg-dot section-svg-dot-secondary">
                      <animate attributeName="cy" values="3.5;5.2;3.5;2;3.5" dur="2.95s" begin={`${delay - 0.7}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values=".62;1;.7;.94;.62" dur="2.35s" begin={`${delay - 0.4}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="3.5" cy="11.8" r="2.25" className="section-svg-dot section-svg-dot-tertiary">
                      <animate attributeName="cx" values="3.5;5;3.5;2.1;3.5" dur="3.15s" begin={`${delay - 0.25}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values=".58;.96;.66;.9;.58" dur="2.7s" begin={`${delay - 1.05}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="11.8" cy="11.8" r="2.45" className="section-svg-dot section-svg-dot-primary section-svg-dot-soft">
                      <animate attributeName="cy" values="11.8;10.2;11.8;13.2;11.8" dur="3.35s" begin={`${delay - 1.25}s`} repeatCount="indefinite" />
                    </circle>
                  </pattern>
                </defs>

                <text x="46" y="77" textAnchor="middle" dominantBaseline="middle" className="section-letter-silhouette">
                  {character}
                </text>

                <g mask={`url(#${maskId})`} filter={`url(#${glowId})`} className="section-letter-dot-field">
                  <rect x="-18" y="-18" width="128" height="186" fill={`url(#${patternId})`} />
                </g>

                <g mask={`url(#${maskId})`} className="section-letter-scan-layer">
                  <rect className="section-letter-scan" x="-42" y="0" width="28" height="150" />
                </g>
              </svg>
            );
          })}
        </div>
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
