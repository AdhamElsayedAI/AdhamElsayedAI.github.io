# Adham Elsayed · Portfolio v3

A ground-up, componentized portfolio rebuild for Adham Elsayed, an AI Engineer focused on Generative AI, retrieval-augmented generation, computer vision, edge AI and evaluation.

## Stack

- Next.js with static export
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- GitHub Pages Actions deployment

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run build
```

The production static export is generated in `out/` and contains no server-only runtime dependencies.

## Content integrity

- The portrait in `public/images/adham-original.jpg` is restored byte-for-byte from the repository's historical embedded original.
- MedFlow screenshots and the team photo are copied unchanged from `MedFlow-AI/docs/assets/`.
- MedFlow retrieval figures are labeled as engineering evaluation metrics, not clinical validation.
- The root CV file is preserved, with a deployment copy under `public/`.
