import { assetPath } from "@/lib/assetPath";

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  icon: "basket" | "shield";
  metrics?: Array<{ label: string; value: string }>;
};

export type FeaturedProject = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: readonly string[];
  github: string;
  live?: string;
  badge: string;
  secondaryBadge?: string;
  metricNote: string;
  validationNote?: string;
  images: ReadonlyArray<{ src: string; alt: string }>;
  metrics: ReadonlyArray<{ label: string; value: string }>;
};

export const medflow: FeaturedProject = {
  title: "MedFlow",
  subtitle: "Evidence-Grounded Clinical RAG",
  category: "Generative AI / RAG / Healthcare AI",
  description:
    "Hybrid dense+sparse retrieval with evidence gating, controlled ANSWER / CAUTION / ABSTAIN / REDIRECT behavior and citation-grounded generation.",
  technologies: ["RAG", "BGE", "ChromaDB", "BM25", "RRF", "FastAPI", "Groq", "Python"],
  github: "https://github.com/AdhamElsayedAI/MedFlow-AI",
  badge: "FEATURED · TEAM PROJECT",
  secondaryBadge: "🏆 2ND PLACE",
  metricNote: "Retrieval engineering metrics — not clinical accuracy.",
  validationNote: "Grounded validation: 7/7 cases with 100% citation validity, metadata resolution and claim coverage; zero fabricated citations.",
  images: [
    { src: assetPath("/images/medflow/rag-chat.png"), alt: "MedFlow evidence-grounded RAG chat interface" },
    { src: assetPath("/images/medflow/rag-architecture-ui.png"), alt: "MedFlow RAG architecture interface" },
    { src: assetPath("/images/medflow/knowledge-base.png"), alt: "MedFlow knowledge base interface" },
    { src: assetPath("/images/medflow/lab-interpreter.png"), alt: "MedFlow lab interpreter interface" },
    { src: assetPath("/images/medflow/pdf-search.png"), alt: "MedFlow semantic PDF search interface" },
  ],
  metrics: [
    { label: "Precision@4", value: "53.12%" },
    { label: "Hit@4", value: "87.50%" },
    { label: "MRR", value: "≈ 0.7031" },
  ],
};

export const medicalplab: FeaturedProject = {
  title: "MedicalPlab",
  subtitle: "Adaptive Evidence-Grounded Medical Learning",
  category: "Adaptive Learning / Generative AI / RAG",
  description:
    "Adaptive medical learning platform combining learner-state tracking, bounded Socratic remediation, transfer assessment and a shared evidence engine with deterministic safety boundaries.",
  technologies: ["Generative AI", "RAG", "NLI", "FastAPI", "Next.js", "Three.js", "BM25", "RRF"],
  github: "https://github.com/AdhamElsayedAI/MedicalPlab",
  live: "https://medical-plab.vercel.app",
  badge: "FEATURED · ADAPTIVE LEARNING",
  secondaryBadge: "GROUNDING + SAFETY",
  metricNote: "Architecture and safety signals — not educational efficacy metrics.",
  validationNote: "Evidence path: hybrid BM25+dense retrieval → RRF → cross-encoder reranking → provenance gating + NLI; SAFE_FALLBACK withholds unsupported content.",
  images: [
    { src: assetPath("/images/medicalplab/home.png"), alt: "MedicalPlab adaptive learning home interface" },
    { src: assetPath("/images/medicalplab/remediation.png"), alt: "MedicalPlab bounded Socratic remediation flow" },
    { src: assetPath("/images/medicalplab/transfer.png"), alt: "MedicalPlab transfer assessment interface" },
    { src: assetPath("/images/medicalplab/safe-fallback.png"), alt: "MedicalPlab safe fallback state" },
    { src: assetPath("/images/medicalplab/anatomy-guided.png"), alt: "MedicalPlab guided anatomy learning interface" },
    { src: assetPath("/images/medicalplab/progress.png"), alt: "MedicalPlab learning progress interface" },
  ],
  metrics: [
    { label: "Socratic flow", value: "3-turn" },
    { label: "Retrieval", value: "Hybrid" },
    { label: "Verification", value: "NLI" },
  ],
};

export const projects: Project[] = [
  {
    title: "Smart Basket",
    category: "Computer Vision / Edge AI",
    description:
      "Four-class YOLO product detection deployed as ONNX edge inference on Raspberry Pi 5, with cart state synchronized to a Flutter app through Firebase.",
    technologies: ["YOLO", "OpenCV", "Raspberry Pi 5", "ONNX", "Firebase", "Flutter", "Python"],
    github: "https://github.com/AdhamElsayedAI/Smart-Basket",
    icon: "basket",
    metrics: [
      { label: "mAP@0.5", value: "96.89%" },
      { label: "mAP@0.5:0.95", value: "84.79%" },
    ],
  },
  {
    title: "Code AI Proctor",
    category: "AI Exam Monitoring Prototype",
    description:
      "Webcam-based YOLO monitoring prototype with threshold alerts and an auditable FastAPI workflow secured by API-key authentication, optional Azure SQL persistence and Docker packaging.",
    technologies: ["YOLO", "PyTorch", "FastAPI", "Azure SQL", "Docker", "Python"],
    github: "https://github.com/AdhamElsayedAI/code-ai-proctor",
    icon: "shield",
  },
];
