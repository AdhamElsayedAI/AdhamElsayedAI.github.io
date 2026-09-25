import { assetPath } from "@/lib/assetPath";

export type Project = { title: string; category: string; description: string; technologies: string[]; github: string; signal: string; flow?: string[]; metrics?: Array<{ label: string; value: string }> };

export const medflow = {
  title: "MedFlow", subtitle: "Evidence-Grounded Clinical AI", category: "GENERATIVE AI / RAG / EVALUATION",
  description: "Evidence-grounded clinical AI engineered around hybrid retrieval, measurable ranking quality, verifiable citations, evidence gating and controlled failure behavior.",
  technologies: ["BGE", "BM25", "RRF", "ChromaDB", "FastAPI", "Python"], github: "https://github.com/AdhamElsayedAI/MedFlow-AI",
  images: [
    { src: assetPath("/images/medflow/rag-chat.png"), alt: "MedFlow evidence-grounded RAG chat with retrieved sources" },
    { src: assetPath("/images/medflow/rag-architecture-ui.png"), alt: "MedFlow grounded retrieval architecture interface" },
    { src: assetPath("/images/medflow/knowledge-base.png"), alt: "MedFlow thyroid disease knowledge base" },
    { src: assetPath("/images/medflow/lab-interpreter.png"), alt: "MedFlow lab interpreter with evidence context" },
    { src: assetPath("/images/medflow/pdf-search.png"), alt: "MedFlow semantic PDF search interface" },
    { src: assetPath("/images/medflow/home.png"), alt: "MedFlow clinical AI workspace home" },
  ],
  metrics: [{ label: "Precision@4", value: "53.12%" }, { label: "Hit@4", value: "87.50%" }, { label: "MRR", value: "≈0.7031" }, { label: "Grounded cases", value: "7/7" }],
  architecture: ["Documents", "200-token chunks", "BGE + BM25", "RRF", "Evidence gate", "Grounded generation", "Citation verification", "Answer / caution / abstain / redirect"],
} as const;

export const medicalplab = {
  title: "MedicalPlab", subtitle: "Adaptive Evidence-Grounded Medical Learning", category: "ADAPTIVE LEARNING / GROUNDED GENAI",
  description: "An educational platform connecting persistent learner-state signals, bounded Socratic remediation, independent transfer verification and a shared evidence engine.",
  technologies: ["BM25", "Dense Retrieval", "RRF", "Cross-Encoder", "NLI", "FastAPI", "Next.js", "Three.js"], github: "https://github.com/AdhamElsayedAI/MedicalPlab",
  images: [
    { src: assetPath("/images/medicalplab/home.png"), alt: "MedicalPlab adaptive learning home interface" },
    { src: assetPath("/images/medicalplab/remediation.png"), alt: "MedicalPlab bounded Socratic remediation flow" },
    { src: assetPath("/images/medicalplab/transfer.png"), alt: "MedicalPlab independent transfer verification" },
    { src: assetPath("/images/medicalplab/anatomy-guided.png"), alt: "MedicalPlab guided 3D anatomy lesson" },
    { src: assetPath("/images/medicalplab/progress.png"), alt: "MedicalPlab learning progress interface" },
    { src: assetPath("/images/medicalplab/safe-fallback.png"), alt: "MedicalPlab evidence-safe fallback state" },
  ],
  architecture: ["Question attempt", "Learner-state signal", "Socratic remediation", "Transfer check", "Hybrid retrieval", "Cross-encoder reranking", "Provenance + NLI", "Grounded tutor / SAFE_FALLBACK"],
  proofs: [{ value: "23/23", label: "backend integration tests" }, { value: "12/12", label: "mobile contract tests" }, { value: "8/8", label: "CI quality-gate jobs" }],
} as const;

export const projects: Project[] = [
  { title: "Smart Basket", category: "COMPUTER VISION / EDGE AI", description: "A YOLO detector exported to ONNX for Raspberry Pi 5 edge inference, with Firebase-synchronized Flutter cart state.", technologies: ["YOLO", "OpenCV", "Raspberry Pi 5", "ONNX Runtime", "Firebase", "Flutter", "Python"], github: "https://github.com/AdhamElsayedAI/Smart-Basket", signal: "EDGE / 01", flow: ["Camera", "Detector", "ONNX", "Raspberry Pi", "Firebase", "Flutter cart"], metrics: [{ label: "mAP@0.5", value: "96.89%" }, { label: "mAP@0.5:0.95", value: "84.79%" }] },
  { title: "Code AI Proctor", category: "COMPUTER VISION / BACKEND", description: "Webcam inference, threshold alerts and an auditable FastAPI workflow secured with API-key authentication, optional Azure SQL and Docker packaging.", technologies: ["YOLO", "PyTorch", "FastAPI", "Azure SQL", "Docker", "Python"], github: "https://github.com/AdhamElsayedAI/code-ai-proctor", signal: "VISION / 02", flow: ["Webcam", "YOLO inference", "Incident threshold", "Auditable API", "Optional Azure SQL"] },
  { title: "Telco Customer Churn", category: "MACHINE LEARNING / BIG DATA", description: "A reproducible PySpark pipeline for churn analysis and prediction using Spark DataFrames, feature encoding and logistic regression.", technologies: ["PySpark", "Spark DataFrames", "MLlib", "Logistic Regression"], github: "https://github.com/AdhamElsayedAI/Telco-Customer-Churn-Project", signal: "DATA / 03" },
  { title: "Student Performance Analysis", category: "DATA ANALYTICS / ARCHIVE", description: "Exploratory analysis of student outcomes, study behavior and academic performance using reproducible Python workflows.", technologies: ["Python", "Pandas", "Matplotlib"], github: "https://github.com/AdhamElsayedAI/Student-Performance-Analysis", signal: "ARCHIVE / 04" },
];
