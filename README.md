# Adham Elsayed — AI Engineering Portfolio

**Generative AI · RAG Systems · Machine Learning · Computer Vision**

[**Visit the live portfolio →**](https://adhamelsayedai.github.io/)

Explore my work developing evidence-grounded AI systems from retrieval and evaluation to API integration, edge deployment, and product experiences.

## Featured projects

| Project | What I built | Stack |
| --- | --- | --- |
| **[MedFlow](https://github.com/AdhamElsayedAI/MedFlow-AI)** | Evidence-grounded clinical RAG prototype with retrieval fusion, citation checks, and controlled response states | BGE, BM25, RRF, ChromaDB, FastAPI |
| **[MedicalPlab](https://github.com/AdhamElsayedAI/MedicalPlab)** | Adaptive medical tutoring, bounded Socratic remediation, hybrid retrieval, NLI and safety fallback | RAG, BM25, Cross-Encoder, NLI, FastAPI, Next.js |
| **[Smart Basket](https://github.com/AdhamElsayedAI/Smart-Basket)** | YOLO-based edge checkout with ONNX on Raspberry Pi 5 and Firebase-synced cart | YOLO, ONNX, Raspberry Pi, Flutter |
| **[Code AI Proctor](https://github.com/AdhamElsayedAI/code-ai-proctor)** | Webcam-based monitoring prototype with threshold alerts and auditable services | YOLO, PyTorch, FastAPI, Docker |

**Metrics with context:** MedFlow reports 53.12% Precision@4, 87.50% Hit@4, and ≈0.7031 MRR on its documented retrieval setup. A 7-case grounding validation reported citation integrity; neither these figures nor other prototype measurements establish clinical effectiveness. Smart Basket reports 96.89% mAP@0.5 and 84.79% mAP@0.5:0.95 in its four-class detector evaluation.

## Portfolio features

- **Responsive:** mobile, tablet and desktop layouts
- **Themes:** light/dark modes with persistent preferences
- **Interaction:** mouse-following 3D card motion, section reveals, individually animated section-heading letters
- **Accessibility:** keyboard focus, semantic sections, and reduced-motion support
- **Evidence:** original project screenshots and source links
- **Résumé:** [Download the current CV](./Adham_Elsayed_CV.pdf)

## Structure

This repository holds the **published Next.js static export**, not the original editable source application.

| File or folder | Role |
| --- | --- |
| `index.html` | Exported homepage |
| `_next/` | Required compiled assets (do not edit manually) |
| `images/` | Project evidence and portrait |
| `portfolio-v3-fixes.css` | Responsive layout and legibility fixes |
| `portfolio-v3-motion.css` / `.js` | Card tilt and scroll reveal |
| `portfolio-v3-section-titles.css` | Visible section heading fallback |
| `portfolio-v3-creative-letters.css` / `.js` | Animated typography enhancement |
| `Adham_Elsayed_CV.pdf` | Current résumé |
| `.nojekyll`, `404.html` | GitHub Pages support |

## Preview locally

This is an already-built static site; no npm install is needed:

```bash
python -m http.server 4173
```

Visit http://localhost:4173/. Serve at the **site root**, since the export uses root-relative assets (such as `/_next/`).

## Maintenance & deployment

1. Back up the current production branch before updates.
2. Keep `index.html`, `_next/`, `images/`, CSS/JS enhancement files and PDF together.
3. Test at common mobile and desktop widths with both themes.
4. Verify all project screenshots, menu links, section animations and the resume download.
5. Confirm reduced-motion accessibility and browser console output.
6. Publish the static files through GitHub Pages.

> Because this branch is a compiled export, future Next.js builds could replace changes made directly to `index.html`. Port design and motion changes into the editable source before regenerating the export.

---

[LinkedIn](https://www.linkedin.com/in/adham-elsayed-/) · [GitHub](https://github.com/AdhamElsayedAI) · [Email](mailto:adhamelsayed515@gmail.com)

**Adham Elsayed** · Mansoura, Egypt · © 2026
