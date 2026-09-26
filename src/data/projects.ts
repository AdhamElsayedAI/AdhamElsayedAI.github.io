import { assetPath } from "@/lib/assetPath";

export type ProjectMetric = { label: string; value: string; note: string };
export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  signal: string;
  flow?: string[];
  metrics?: ProjectMetric[];
};

export const medflow = {
  title: "MedFlow",
  subtitle: "Evidence-Grounded Clinical AI",
  category: "GENERATIVE AI / RAG / EVALUATION",
  description: "Hybrid retrieval, evidence sufficiency gates, controlled response states and citation validation assembled into one auditable clinical AI prototype.",
  technologies: ["BGE", "BM25", "RRF", "ChromaDB", "FastAPI", "Groq", "Python"],
  github: "https://github.com/AdhamElsayedAI/MedFlow-AI",
  images: [
    { src: assetPath("/images/medflow/rag-chat.png"), alt: "MedFlow evidence-grounded RAG chat with retrieved sources" },
    { src: assetPath("/images/medflow/rag-architecture-ui.png"), alt: "MedFlow grounded retrieval architecture interface" },
    { src: assetPath("/images/medflow/knowledge-base.png"), alt: "MedFlow thyroid disease knowledge base" },
    { src: assetPath("/images/medflow/lab-interpreter.png"), alt: "MedFlow lab interpreter with evidence context" },
    { src: assetPath("/images/medflow/pdf-search.png"), alt: "MedFlow semantic PDF search interface" },
  ],
  metrics: [
    { label: "Precision@4", value: "53.12%", note: "strict passage-level retrieval" },
    { label: "Hit@4", value: "87.50%", note: "200-token chunks · Top-K = 4" },
    { label: "MRR", value: "≈0.7031", note: "first relevant result ranking" },
    { label: "Citation validity", value: "100%", note: "reported across 7/7 grounded cases" },
  ],
  architecture: ["Documents", "BGE + BM25", "RRF", "Evidence gate", "Grounded generation", "Citation verification", "Answer / caution / abstain / redirect"],
} as const;

export const medicalplab = {
  title: "MedicalPlab",
  subtitle: "Adaptive Evidence-Grounded Medical Learning",
  category: "ADAPTIVE LEARNING / GROUNDED GENAI",
  description: "A production-oriented learning platform joining learner-state signals, bounded Socratic remediation, transfer verification and an evidence engine with deterministic safety boundaries.",
  technologies: ["BM25", "Dense Retrieval", "RRF", "Cross-Encoder", "NLI", "FastAPI", "Next.js", "Three.js"],
  github: "https://github.com/AdhamElsayedAI/MedicalPlab",
  images: [
    { src: assetPath("/images/medicalplab/home.png"), alt: "MedicalPlab adaptive learning home interface" },
    { src: assetPath("/images/medicalplab/remediation.png"), alt: "MedicalPlab bounded Socratic remediation flow" },
    { src: assetPath("/images/medicalplab/transfer.png"), alt: "MedicalPlab independent transfer verification" },
    { src: assetPath("/images/medicalplab/safe-fallback.png"), alt: "MedicalPlab evidence-safe fallback state" },
    { src: assetPath("/images/medicalplab/anatomy-guided.png"), alt: "MedicalPlab guided 3D anatomy lesson" },
    { src: assetPath("/images/medicalplab/progress.png"), alt: "MedicalPlab learning progress interface" },
  ],
  architecture: ["Question attempt", "Learner-state signal", "3-turn remediation", "Transfer check", "Hybrid retrieval", "Cross-encoder", "Provenance + NLI", "Grounded tutor / SAFE_FALLBACK"],
  proofs: [
    { value: "23/23", label: "backend integration tests", note: "tests/integration · repository HEAD" },
    { value: "12/12", label: "mobile contract tests", note: "frozen API contract verification" },
    { value: "8/8", label: "CI quality-gate jobs", note: "engineering confidence gate" },
  ],
} as const;

export const supportingProjects: Project[] = [
  {
    title: "Smart Basket",
    category: "COMPUTER VISION / EDGE AI",
    description: "A four-class YOLO detector exported to ONNX for Raspberry Pi 5 edge inference, with Firebase-synchronized Flutter cart state.",
    technologies: ["YOLO", "OpenCV", "Raspberry Pi 5", "ONNX Runtime", "Firebase", "Flutter", "Python"],
    github: "https://github.com/AdhamElsayedAI/Smart-Basket",
    signal: "PRIMARY / 03",
    flow: ["Camera", "YOLO detector", "ONNX runtime", "Raspberry Pi 5", "Firebase", "Flutter cart"],
    metrics: [
      { label: "mAP@0.5", value: "96.89%", note: "four-class detector evaluation" },
      { label: "mAP@0.5:0.95", value: "84.79%", note: "four-class detector evaluation" },
    ],
  },
  {
    title: "Code AI Proctor",
    category: "COMPUTER VISION / BACKEND",
    description: "Webcam inference, threshold alerts and an auditable FastAPI workflow secured with API-key authentication, optional Azure SQL and Docker packaging.",
    technologies: ["YOLO", "PyTorch", "FastAPI", "Azure SQL", "Docker", "Python"],
    github: "https://github.com/AdhamElsayedAI/code-ai-proctor",
    signal: "PRIMARY / 04",
    flow: ["Webcam", "YOLO inference", "Threshold alert", "Auditable API", "Optional Azure SQL"],
  },
];

export const legacyProjects: Project[] = [
  { title: "Telco Customer Churn", category: "MACHINE LEARNING / BIG DATA", description: "PySpark pipeline for churn analysis and prediction using encoded customer attributes and logistic regression.", technologies: ["PySpark", "MLlib", "Logistic Regression"], github: "https://github.com/AdhamElsayedAI/Telco-Customer-Churn-Project", signal: "ARCHIVE / 01" },
  { title: "Student Performance Analysis", category: "DATA ANALYTICS", description: "Exploratory analysis of academic outcomes and study behavior using reproducible Python workflows.", technologies: ["Python", "Pandas", "Matplotlib"], github: "https://github.com/AdhamElsayedAI/Student-Performance-Analysis", signal: "ARCHIVE / 02" },
];
