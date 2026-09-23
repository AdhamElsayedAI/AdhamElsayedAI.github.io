import { assetPath } from "@/lib/assetPath";

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  icon: "basket" | "shield" | "chart" | "spark";
  metrics?: Array<{ label: string; value: string }>;
};

export const medflow = {
  title: "MedFlow-AI",
  category: "Generative AI / RAG / Healthcare AI",
  description:
    "Evidence-grounded clinical AI system engineered around hybrid retrieval, measurable ranking quality, verifiable citations, evidence gating and controlled failure behavior.",
  technologies: [
    "RAG",
    "BGE",
    "ChromaDB",
    "BM25",
    "RRF",
    "FastAPI",
    "Groq",
    "Python",
  ],
  github: "https://github.com/AdhamElsayedAI/MedFlow-AI",
  images: [
    { src: assetPath("/images/medflow/rag-chat.png"), alt: "MedFlow evidence-grounded RAG chat interface" },
    { src: assetPath("/images/medflow/home.png"), alt: "MedFlow clinical AI home workspace" },
    { src: assetPath("/images/medflow/rag-architecture-ui.png"), alt: "MedFlow transparent RAG architecture interface" },
    { src: assetPath("/images/medflow/knowledge-base.png"), alt: "MedFlow knowledge base interface" },
    { src: assetPath("/images/medflow/lab-interpreter.png"), alt: "MedFlow lab interpreter interface" },
    { src: assetPath("/images/medflow/pdf-search.png"), alt: "MedFlow semantic PDF search interface" },
  ],
  metrics: [
    { label: "Precision@4", value: "53.12%" },
    { label: "Hit@4", value: "87.50%" },
    { label: "MRR", value: "≈ 0.7031" },
  ],
} as const;

export const medicalplab = {
  title: "MedicalPlab",
  category: "Adaptive Learning / Grounded GenAI / Medical Education",
  description:
    "Adaptive evidence-grounded medical learning platform coupling learner-state tracking, distractor-level reasoning signals, bounded Socratic remediation, transfer verification and a shared evidence engine.",
  technologies: [
    "RAG",
    "BM25",
    "Dense Retrieval",
    "RRF",
    "Cross-Encoder",
    "NLI Verification",
    "FastAPI",
    "Next.js",
    "Three.js",
  ],
  github: "https://github.com/AdhamElsayedAI/MedicalPlab",
  image:
    "https://raw.githubusercontent.com/AdhamElsayedAI/MedicalPlab/main/docs/demo/final-showcase/01-home.png",
  architecture: [
    "Learner State",
    "Hybrid Retrieval",
    "Reranking",
    "Provenance Gate",
    "NLI Verification",
    "Grounded Tutor",
  ],
  proofs: [
    { value: "3-turn", label: "bounded Socratic flow" },
    { value: "23/23", label: "backend integration tests" },
    { value: "12/12", label: "mobile contract tests" },
  ],
} as const;

export const projects: Project[] = [
  {
    title: "Smart Basket",
    category: "Computer Vision / Edge AI",
    description:
      "Real-time retail product recognition system trained with YOLO and deployed as ONNX edge inference on Raspberry Pi 5 with Firebase-synchronized Flutter cart state.",
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
    category: "Computer Vision / Backend",
    description:
      "Webcam-based exam monitoring prototype combining YOLO inference, threshold alerts, auditable FastAPI workflows, API-key authentication and Docker packaging.",
    technologies: ["YOLO", "PyTorch", "FastAPI", "Azure SQL", "Docker", "Python"],
    github: "https://github.com/AdhamElsayedAI/code-ai-proctor",
    icon: "shield",
  },
  {
    title: "Telco Customer Churn",
    category: "Machine Learning / Big Data",
    description:
      "PySpark machine-learning pipeline using StringIndexer, OneHotEncoder and Logistic Regression for reproducible churn analysis and prediction.",
    technologies: ["PySpark", "Spark DataFrames", "MLlib", "Logistic Regression"],
    github: "https://github.com/AdhamElsayedAI/Telco-Customer-Churn-Project",
    icon: "spark",
  },
  {
    title: "Student Performance Analysis",
    category: "Data Analytics",
    description:
      "Exploratory analysis of student outcomes, study behavior and academic performance using reproducible Python data workflows.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/AdhamElsayedAI/Student-Performance-Analysis",
    icon: "chart",
  },
];
